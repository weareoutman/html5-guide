
var http = require("http");
var util = require("util");
var url = require("url");
var crypto = require("crypto");
var events = require("events");

function log(socket, content) {
	console.log("[%s:%d] [%s] %s", socket.remoteAddress, socket.remotePort, dateFormat("Y-m-d H:i:s O"), content);
}

var WebSocketServer = {};
WebSocketServer.listen = function(config, clientListener) {
	var httpServer = http.createServer(config.httpListener).listen(config.port, config.host);
	httpServer.on("upgrade", function(request, socket){
		var headers = request.headers,
			upgrade = headers["upgrade"],
			key = headers["sec-websocket-key"],
			version = headers["sec-websocket-version"],
			protocols = headers["sec-websocket-protocols"],
			extensions = headers["sec-websocket-extensions"];
			
		var method = request.method,
			parsedUrl = url.parse(request.url),
			path = parsedUrl.pathname,
			query = parsedUrl.query,
			host = headers.host.replace(/:\d+$/, ""),
			origin = headers.origin;

		if (config.acceptOrigins) {
			var originAccepted = false;
			for (var i = 0; i < config.acceptOrigins.length; ++ i) {
				if (origin === config.acceptOrigins[i]) {
					originAccepted = true;
					break;
				}
			}
			if (!originAccepted) {
				// TODO: refused origin
				socket.write([
					"HTTP/1.1 403 Forbidden"
				].join("\r\n") + "\r\n\r\n");
				socket.end();
				log(socket, "Forbidden");
				return;
			}
		}

		// TODO: doesn't support the requested version
		if (!(method === "GET" && origin && upgrade.toLowerCase() === "websocket" && version === "13" && key)) {
			// TODO: bad request
			socket.write([
				"HTTP/1.1 400 Bad Request",
				"Sec-WebSocket-Version: 13"
			].join("\r\n") + "\r\n\r\n");
			socket.end();
			log(socket, util.format("Bad Request %s %s %s %s %s", method, origin, upgrade, version, key));
			return;
		}

		// TODO: handle protocols and extensions
		var webSocket = new WebSocket({
			key: key,
			version: version,
			host: host,
			path: path,
			query: query,
			origin: origin,
			heartBeatTimeout: config.heartBeatTimeout
		}, socket);

		clientListener(webSocket, request);
	});
};

var WebSocket = function(config, socket) {

	events.EventEmitter.call(this);

	for (var i in config) {
		this[i] = config[i];
	}

	this.socket = socket;
	this.state = WebSocket.CONNECTING;

	var self = this;
	var frameManager = new FrameManager();
	var closeTimeout = 3e3;
	var closeHandler;
	var errored = false;

	// reveives a packet from socket
	socket.on("data", function(packet){
		// log(socket, "Read Bytes: " + socket.bytesRead);
		log(socket, util.format("Socket Packet received: %d; Total Read: %d", packet.length, socket.bytesRead));
		frameManager.emit("packet", packet);
	});
	// receives a complete message in some frames
	frameManager.on("data", function(data){
		log(socket, util.format("Full Message received: %d; Total Read: %d", data.length, socket.bytesRead));
		self.emit("data", data);
	});

	// receives a ping frame
	frameManager.on("ping", function(buffer){
		log(socket, "[C=>S] ping");
		self.emit("ping", buffer);
	});
	// receives a pong frame
	frameManager.on("pong", function(buffer){
		log(socket, "[C=>S] pong");
		self.emit("pong", buffer);
	});

	// close the socket connection
	function closeConnection() {
		log(socket, "Disconnected");
		clearInterval(self.heartBeatHandler);
		socket.removeAllListeners();
		frameManager.removeAllListeners();
		socket.end();
		self.emit("close", self.closedBy, self.closeCode, self.closeReason);
		self.removeAllListeners();
	}

	// an error occurs in a received frame
	function onFrameError(code, reason) {
		if (!errored) {
			log(socket, util.format("[C=>S] Frame Error: <%d> %s", code, reason));
		}
		switch (self.state) {
			case WebSocket.OPEN:
				// send a close frame
				self.close(code, reason);
				closeHandler = setTimeout(onFrameError, closeTimeout);
				break;
			case WebSocket.CLOSING:
				// fully close the socket
				log(socket, "Fully closing the socket due to a Frame Error");
				clearTimeout(closeHandler);
				socket.end();
				self.state = WebSocket.CLOSED;
				closeConnection();
				break;
			default:
				// DO NOTHING
				// this is not supposed to happen
				log(socket, util.format("! Frame Error in a not-open socket: <%d> %s", code, reason));
		}
		if (!errored) {
			self.emit("error", code, reason);
			errored = true;
		}
	}
	// receives an invalid frame
	frameManager.on("error", onFrameError);
	// receives a close frame
	frameManager.on("close", function(code, reason){
		log(socket, util.format("[C=>S] Close Frame: <%d> %s", code, reason));
		switch (self.state) {
			case WebSocket.OPEN:
				// send a close frame back
				self.closedBy = "client";
				self.closeCode = code;
				self.closeReason = reason;
				self.state = WebSocket.CLOSING;
				self.close();
			case WebSocket.CLOSING:
				// fully close the socket
				log(socket, "Fully closing the socket due to a Close Frame");
				socket.end();
				self.state = WebSocket.CLOSED;
				closeConnection();
				break;
			default:
				// DO NOTHING
				// this is not supposed to happen
				log(socket, util.format("! Close Frame in a not-open socket: <%d> %s", code, reason));
		}
	});

	// the other end of the socket sends a FIN packet
	socket.on("end", function(){
		log(socket, "[C=>S] TCP FIN packet");
		if (self.state == WebSocket.OPEN) {
			self.closedBy = "client";
			self.closeCode = 1006;
			self.closeReason = "";
		}
		self.state = WebSocket.CLOSED;
		closeConnection();
	});
	// the socket is fully closed
	socket.on("close", function(had_error){
		log(socket, "Socket Closed" + (had_error ? " with Errors" : ""));
		self.state = WebSocket.CLOSED;
		closeConnection();
	});
	// an error occurs
	// The 'close' event will be called directly following this event
	socket.on("error", function(error){
		log(socket, "Socket Error: " + error);
	});

};

util.inherits(WebSocket, events.EventEmitter);

WebSocket.CONNECTING = 0; // the opening handshake is handling
WebSocket.OPEN = 1;       // the opening handshake is done
WebSocket.CLOSING = 2;    // the closing handshake is handling
WebSocket.CLOSED = 3;     // the websocket is fully closed

WebSocket.FRAME_CONTINUATION = 0x0;
WebSocket.FRAME_TEXT   = 0x1;
WebSocket.FRAME_BINARY = 0x2;
WebSocket.FRAME_CLOSE  = 0x8;
WebSocket.FRAME_PING   = 0x9;
WebSocket.FRAME_PONG   = 0xA;

// do the WebSocket opening handshake
WebSocket.prototype.open = function() {
	var GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
	this.socket.write([
		"HTTP/1.1 101 Switching Protocols",
		"upgrade: websocket",
		"connection: Upgrade",
		"sec-websocket-accept: " + crypto.createHash("sha1").update(this.key + GUID, "utf8").digest("base64")
	].join("\r\n") + "\r\n\r\n");
	this.state = WebSocket.OPEN;

	log(this.socket, "Accepted");

	if (this.heartBeatTimeout > 0) {
		var self = this;
		this.heartBeatHandler = setInterval(function(){
			self.ping();
		}, this.heartBeatTimeout * 1e3);
	}
};

// refuse the opening handshake
WebSocket.prototype.refuse = function() {};

// send a message to the client
WebSocket.prototype.send = function(data) {
	var type;
	if (Buffer.isBuffer(data)) {
		type = WebSocket.FRAME_BINARY;
	} else {
		type = WebSocket.FRAME_TEXT;
		data = new Buffer(data);
	}
	write(this, data, type);
};

// send a close frame to the client
WebSocket.prototype.close = function(code, reason) {
	code = code || 1000;
	reason = reason || "";
	var buffer = new Buffer(2 + Buffer.byteLength(reason));
	buffer.writeUInt16BE(code, 0);
	if (reason) {
		buffer.write(reason, 2);
	}

	write(this, buffer, WebSocket.FRAME_CLOSE);

	if (this.state == WebSocket.CLOSING) {
		log(this.socket, "[S=>C] Close Frame back");
		this.closedBy = "client";
	} else {
		log(this.socket, "[S=>C] Close Frame");
		this.closedBy = "server";
		this.closeCode = code;
		this.closeReason = reason;
	}

	this.state = WebSocket.CLOSING;
};

// send a ping frame to the client
WebSocket.prototype.ping = function() {
	log(this.socket, "[S=>C] ping");
	write(this, new Buffer(0), WebSocket.FRAME_PING);
};

// send a pong frame to the client
WebSocket.prototype.pong = function() {
	log(this.socket, "[S=>C] pong");
	write(this, new Buffer(0), WebSocket.FRAME_PONG);
};

function write(webSocket, data, type) {

	// check the socket state
	if (!(webSocket.state == WebSocket.OPEN || webSocket.state == WebSocket.CLOSING && type == WebSocket.FRAME_CLOSE)) {
		log(webSocket.socket, "! Write to a not-open socket");
		return;
	}

	// 计算数据包长度
	var length = data.length;
	var buffer = new Buffer((length < 126 ? 2 : (length <= 0xFFFF ? 4 : 10)) + length);
	var offset = 0;

	// FIN*1 / RSV*3 / opcode*4
	// first fragment, final fragment / default RSV / given frame type
	buffer.writeUInt8(0x80 | type, offset ++);

	// 写入 payload length 数据
	// "Payload data" is not masked
	if (length < 126) {
		buffer.writeUInt8(length, offset ++);
	} else if (length <= 0xFFFF) {
		buffer.writeUInt8(0x7E, offset ++);
		buffer.writeUInt16BE(length, offset);
		offset += 2;
	} else if (length <= 0xFFFFFFFF) {
		buffer.writeUInt8(0x7F, offset ++);
		buffer.writeUInt32BE(0, offset);
		offset += 4;
		buffer.writeUInt32BE(length, offset);
		offset += 4;
	} else {
		// DONE: writeUInt64BE()
		// throw "BUFFER_SIZE_ERROR";
		buffer.writeUInt8(0x7F, offset ++);
		var temp = length.toString(16);
		buffer.writeUInt32BE(parseInt(temp.substr(0, temp.length - 8), 16), offset);
		offset += 4;
		buffer.writeUInt32BE((length & 0xFFFFFFFF) >>> 0);
		offset += 4;
	}

	// 写入 payload data
	data.copy(buffer, offset);

	// write in the socket
	webSocket.socket.write(buffer);

	log(webSocket.socket, util.format("Frame Sent: %d"/*; Total Written: %d*/, buffer.length/*, webSocket.socket.bytesWritten*/));
}

function FrameManager() {
	// 继承 events 类
	events.EventEmitter.call(this);

	var UNINITIALIZED = 0,
		INITIALIZED = 1,
		LENGTH_READ = 2,
		MASK_READ = 3,
		PAYLOAD_READ = 4;
	var state = UNINITIALIZED,
		buffer,
		length = 0,
		offset = 0,
		fin, /*rsv1, rsv2, rsv2,*/ opcode, mask,
		payloadLen, payloadLength, maskingKey,
		type,
		frames = [],
		self = this;

	// garbage collect
	/*this.gc = function() {
		console.log("Frame garbage collecting ...");
		self.removeAllListeners();
		buffer = frames = self = null;
	};*/
	function frameReady(payload) {

		// console.log(" 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 ");
		// console.log("+-+-+-+-+-------+-+-------------+-------------------------------+");
		// console.log("|%d|%d|%d|%d|%s|%d|%s|", fin, 0, 0, 0, opcode.toString(2), mask, payloadLen.toString(2));
		// console.log("fin: %d, opcode: %d, mask: %d,\n"
		// 	+ "payloadLen: %d, payloadLength: %d\n"
		// 	+ "maskingKey: %s", fin, opcode, mask, payloadLen, payloadLength, maskingKey.toString(16));

		// the client should always mask the frame
		if (mask == 0) {
			self.emit("error", 1002, "unmasked frame");
			return;
		}

		var buf = new Buffer(payload.length);
		var maskArray = [
			maskingKey >>> 24 & 0xFF,
			maskingKey >>> 16 & 0xFF,
			maskingKey >>>  8 & 0xFF,
			maskingKey        & 0xFF
		];
		for (var i = 0; i < payloadLength; ++ i) {
			buf.writeUInt8(payload.readUInt8(i) ^ maskArray[i % 4], i);
		}

		if (opcode < 0x8) {
			// non-control frame
			switch (opcode) {
				case 0x0: // continuation frame
					if (frames.length == 0) {
						self.emit("error", 1002, "unexpected continuation frame");
						return;
					}
					break;
				case 0x1: // text frame
					type = "text";
					break;
				case 0x2: // binary frame
					type = "binary";
					break;
				default:
					self.emit("error", 1008, "unknow opcode");
					return;
			}
			frames.push(buf);
			if (fin == 1) {
				var data = Buffer.concat(frames);
				if (type == "text") {
					data = data.toString();
				}
				self.emit("data", data);
				frames = [];
			}
		} else {
			// control frames must set the FIN bit
			if (fin != 1) {
				self.emit("error", 1002, "control frame without FIN bit set");
				return;
			}
			switch (opcode) {
				case 0x8: // close frame
					var code = 1005, reason = "";
					if (buf.length >= 2) {
						code = buf.readUInt16BE(0);
						reason = buf.toString("utf8", 2);
					}
					self.emit("close", code, reason);
					break;
				case 0x9: // ping frame
					self.emit("ping", buf);
					break;
				case 0xA: // pong frame
					self.emit("pong", buf);
					break;
				default:
					self.emit("error", 1008, "unknow opcode");
			}
		}
	}
	function check() {
		switch (state) {
			case UNINITIALIZED:
				if (length >= 2) {
					var temp = buffer.readUInt8(offset ++);
					fin = temp >> 7;
					opcode = temp & 0xF;
					temp = buffer.readUInt8(offset ++);
					mask = temp >> 7;
					payloadLen = temp & 0x7F;
					state = INITIALIZED;
				} else {
					return;
				}
				break;
			case INITIALIZED:
				if (payloadLen < 126) {
					payloadLength = payloadLen;
					state = LENGTH_READ;
				} else if (payloadLen == 126) {
					if (length - offset >= 2) {
						payloadLength = buffer.readUInt16BE(offset);
						offset += 2;
						state = LENGTH_READ;
					} else {
						return;
					}
				} else /*if (payloadLen == 127)*/ {
					if (length - offset >= 8) {
						payloadLength =  buffer.readUInt32BE(offset) * 0xFFFFFFFF +  buffer.readUInt32BE(offset + 4);
						offset += 8;
						state = LENGTH_READ;
					} else {
						return;
					}
				}
				break;
			case LENGTH_READ:
				if (mask == 1) {
					if (length - offset >= 4) {
						maskingKey = buffer.readUInt32BE(offset);
						offset += 4;
						state = MASK_READ;
						if (payloadLength == 0) {
							check();
						}
					} else {
						return;
					}
				} else {
					state = MASK_READ;
				}
				break;
			case MASK_READ:
				var left = length - offset - payloadLength;
				if (left >= 0) {
					frameReady(buffer.slice(offset, offset += payloadLength));
					state = UNINITIALIZED;
					if (left > 0) {
						buffer = buffer.slice(offset);
						length = left;
						offset = 0;
					} else {
						buffer = null;
						offset = length = 0;
						return;
					}
				} else {
					return;
				}
				break;
		}
		if (length > offset) {
			check();
		}
	}
	this.on("packet", function(packet){
		if (buffer) {
			buffer = Buffer.concat([buffer, packet]);
		} else {
			buffer = packet;
		}
		length = buffer.length;
		check();
	});
}

util.inherits(FrameManager, events.EventEmitter);

exports.WebSocketServer = WebSocketServer;
exports.WebSocket = WebSocket;
exports.log = log;

// var WebSocketServer = require("WebSocketServer");

/*var server = WebSocketServer.factory({
	// host: "localhost",
	port: 8001,
	heartBeatTimeout: 10,
	acceptOrigins: ["localhost", "http://weihub.local", "127.0.0.1", "192.168.50.115"],
	httpListener: function(request, response) {
		response.writeHead(200, {
			"content-type" : "text/html"
		});
		response.end("running");
	}
}, function(webSocket, request){

	// open the websocket connection
	webSocket.open();

	// refuse the websocket connection
	// webSocket.refuse(code, reason);

	webSocket.on("data", function(data){
		console.log("data received [%d]", data.length);
	});

	webSocket.on("error", function(code, reason){
		console.log("websocket error: [%d] %s", by, code, reason);
	});

	webSocket.on("close", function(by, code, reason){
		console.log("websocket closed by %s: [%d] %s", by, code, reason);
	});

	webSocket.on("ping", function(buffer){
		console.log("client ping: ", buffer, buffer.length);
	});

	webSocket.on("pong", function(buffer){
		console.log("client pong: ", buffer, buffer.length);
	});

	webSocket.on("heartbeat_timeout", function(){
		// 
	});

	var textMessage = "text message";
	webSocket.send(textMessage);

	var binaryMessage = "binary message";
	webSocket.send(binaryMessage);

	webSocket.ping();

	webSocket.pong();

	// webSocket.close();
});
*/

var dateFormat = (function(){
	var AbbrWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		Weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		AbbrMonths = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
	function prefix0(v) {
		return (v < 10 ? "0" : "") + v;
	}
	function echo(format, date) {
		date = date || new Date();
		var year = date.getFullYear(),
			month = date.getMonth(),
			week = date.getDay(),
			day = date.getDate(),
			hour = date.getHours(),
			minute = date.getMinutes(),
			second = date.getSeconds(),
			milliseconds = date.getMilliseconds(),
			offset = -date.getTimezoneOffset(),
			offsetSign = offset < 0 ? "-" : "+",
			offsetHour = Math.floor(Math.abs(offset) / 60),
			offsetMinute = Math.abs(offset) % 60,
			hour12 = hour % 12,
			escaping = false,
			a = [],
			c, i;
		if (hour12 == 0) {
			hour12 = 12;
		}
		for (i = 0; i < format.length; ++ i) {
			c = format.charAt(i);
			// 转义
			if (escaping) {
				a.pop();
				a.push(c);
				escaping = false;
				continue;
			}
			switch (c) {
				// 日 ---
				case "d":
					a.push(prefix0(day));
					break;
				case "D":
					a.push(AbbrWeeks[week]);
					break;
				case "j":
					a.push(day);
					break;
				case "l":
					a.push(Weeks[week]);
					break;
				case "N":
					a.push(week == 0 ? 7 : week);
					break;
				case "S":
					a.push(day > 3 ? "th" : ["st", "nd", "rd"][day - 1]);
					// a.push(day == 1 ? "st" : (day == 2 ? "nd" : (day == 3 ? "rd" : "th")));
					break;
				case "w":
					a.push(week);
					break;
				// 月 ---
				case "F":
					a.push(Months[month]);
					break;
				case "m":
					a.push(prefix0(month + 1));
					break;
				case "M":
					a.push(AbbrMonths[month]);
					break;
				case "n":
					a.push(month + 1);
					break;
				// 年 ---
				case "Y":
					a.push(year);
					break;
				case "y":
					a.push(prefix0(year % 100));
					break;
				// 时间 ---
				case "a":
					a.push(hour < 12 ? "am" : "pm");
					break;
				case "A":
					a.push(hour < 12 ? "AM" : "PM");
					break;
				case "g":
					a.push(hour12);
					break;
				case "G":
					a.push(hour);
					break;
				case "h":
					a.push(prefix0(hour12));
					break;
				case "H":
					a.push(prefix0(hour));
					break;
				case "i":
					a.push(prefix0(minute));
					break;
				case "s":
					a.push(prefix0(second));
					break;
				// 时区 ---
				case "O":
					a.push(offsetSign + prefix0(offsetHour) + prefix0(offsetMinute));
					break;
				case "P":
					a.push(offsetSign + prefix0(offsetHour) + ":" + prefix0(offsetMinute));
					break;
				case "Z":
					a.push(offset * 60);
					break;
				// 完整 ---
				case "c":
					a.push(echo("Y-m-d\\TH:i:sP", date));
					break;
				case "r":
					a.push(echo("D, d M Y H:i:s O", date));
					break;
				case "U":
					a.push(Math.floor(date.getTime() / 1e3));
					break;
				// 转义 ---
				case "\\":
					escaping = true;
					a.push(c);
					break;
				// 默认 --- 原样输出
				default:
					a.push(c);
			}
		}
		return a.join("");
	};
	return echo;
})();