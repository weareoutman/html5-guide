(function(){
	/*function log() {
		var elem = document.getElementById("chatroom");
		elem.value = elem.value + Array.prototype.join.call(arguments, ", ") + "\n";
	}*/

	var HOST = "ws://192.168.41.102:8002/",
		PROTOCOLS = ["chat"],
		IMAGE_MAX_WIDTH = 480;

	var chatRoom = document.getElementById("chat-room"),
		chatArea = document.getElementById("chat-area"),
		chatFile = document.getElementById("chat-file"),
		chatText = document.getElementById("chat-text"),
		chatSend = document.getElementById("chat-send"),
		chatPlace = document.getElementById("chat-place");

	var canvas = document.createElement("canvas"),
		context = canvas.getContext("2d");

	var MSG_TYPE_TEXT = 0x1;
	var MSG_TYPE_IMAGE = 0x2;
	var MSG_TYPE_PLACE = 0x3;
	var MSG_TYPE_LIST = 0x8;
	var MSG_TYPE_JOIN = 0x9;
	var MSG_TYPE_LEAVE = 0xa;
	var MSG_TYPE_ERROR = 0xb;

	var user = {
		joined: false,
		name: null
	};

	var room = {
		socket: null,
		connected: false
	};
	room.init = function(){
		var host = HOST;
		var protocols = PROTOCOLS;
		var socket = new WebSocket(host, protocols);
		var self = this;
		socket.onopen = function(){
			self.socket = this;
			self.oninit();
		};
		socket.onmessage = function(e){
			// console.dir(e);
			try {
				var msg = JSON.parse(e.data);
			} catch (x) {
				// TODO: invalid message received
				return;
			}
			self.messageReceived(msg.type, msg.data, msg.time);
		};
		socket.onerror = function(e){
			console.dir(e);
		};
		socket.onclose = function(e){
			console.dir(e);
			showMessage(MSG_TYPE_ERROR, {content: "您掉线了"});
		};
	};
	room.oninit = function(){
		this.connected = true;
		console.log("connected");
		user.name = (~~ (Math.random() * 1e8)).toString(36);
		this.join(user);
	};
	room.join = function(user){
		if (user.name) {
			room.sendMessage(MSG_TYPE_JOIN, {
				user: user.name
			});
		} else {
			// TODO: no user name
		}
	};
	room.leave = function(){
		if (user.joined) {
			room.sendMessage(MSG_TYPE_LEAVE, {
				reason: ""
			});
		} else {
			// TODO: no user name
		}
	},
	room.sendMessage = function(type, data){
		if (this.connected) {
			var msg = JSON.stringify({
				type: type,
				data: data
			});
			this.socket.send(msg);
		} else {
			// TODO: unconnected
		}
	};
	room.sendText = function(text){
		if (user.joined) {
			room.sendMessage(MSG_TYPE_TEXT, {
				content: text
			});
		} else {
			// TODO: unconnected
		}
	};
	room.sendImage = function(image){
		if (user.joined) {
			room.sendMessage(MSG_TYPE_IMAGE, {
				content: image
			});
		} else {
			// TODO: unconnected
		}
	};
	room.sendPlace = function(coords){
		if (user.joined) {
			room.sendMessage(MSG_TYPE_PLACE, {
				latitude: coords.latitude,
				longitude: coords.longitude,
				accuracy: coords.accuracy
			});
		} else {
			// TODO: unconnected
		}
	};
	room.messageReceived = function(type, data, time){
		switch (type) {
			case MSG_TYPE_TEXT:
				this.textReceived(data, time);
				break;
			case MSG_TYPE_IMAGE:
				this.imageReceived(data, time);
				break;
			case MSG_TYPE_PLACE:
				this.placeReceived(data, time);
				break;
			case MSG_TYPE_LIST:
				this.userListRecieved(data, time);
				break;
			case MSG_TYPE_JOIN:
				this.userJoined(data, time);
				break;
			case MSG_TYPE_LEAVE:
				this.userLeaved(data, time);
				break;
		}
	};
	room.textReceived = function(data, time){
		console.log("text message", time);
		console.dir(data);
		
		showMessage(MSG_TYPE_TEXT, data, time);

		notify(MSG_TYPE_TEXT, data);
	};
	room.imageReceived = function(data, time){
		console.log("image message", time);
		console.dir(data);

		showMessage(MSG_TYPE_IMAGE, data, time);

		notify(MSG_TYPE_IMAGE, data);
	};
	room.placeReceived = function(data, time){
		console.log("place message", time);
		console.dir(data);
		// data.content = JSON.stringify(data.coords);

		showMessage(MSG_TYPE_PLACE, data, time);

		notify(MSG_TYPE_PLACE, data);
	};
	room.userListRecieved = function(data, time){
		console.log("user list", time);
		console.dir(data);

		if (data.list.length > 0) {
			showMessage(MSG_TYPE_LIST, data, time);
		}
	};
	room.userJoined = function(data, time){
		console.log("user join", time);
		console.dir(data);

		if (data.user == user.name) {
			user.joined = true;
		}

		showMessage(MSG_TYPE_JOIN, data, time);
	};
	room.userLeaved = function(data, time){
		console.log("user leave", time);
		console.dir(data);

		if (data.user == user.name) {
			user.joined = false;
			user.name = null;
		}

		showMessage(MSG_TYPE_LEAVE, data, time);
	};

	// 显示消息
	function showMessage(type, data, time){
		var layer = document.createElement("div");
		switch (type) {
			case MSG_TYPE_TEXT:
			case MSG_TYPE_IMAGE:
			case MSG_TYPE_PLACE:
				layer.className = user.name == data.user ? "chat-myself" : "chat-others";
				var h = document.createElement("div");
				h.className = "chat-head";
				var u = document.createElement("div");
				u.className = "chat-user";
				u.textContent = data.user;
				var t = document.createElement("div");
				t.className = "chat-time";
				var d = new Date(time);
				var m = d.getMinutes();
				t.textContent = d.getHours() + ":" + (m > 9 ? "" : "0") + m;
				h.appendChild(u);
				h.appendChild(t);
				layer.appendChild(h);
				var p = document.createElement("div");
				p.className = "chat-prof";
				var k = new Image();
				k.width = 36;
				k.height = 36;
				k.src = "profiles/" + (Math.random() > 0.5 ? "maqing" : "xiaoxin") + ".jpg";
				p.appendChild(k);
				layer.appendChild(p);
				var b = document.createElement("div");
				b.className = "chat-body";
				var c = document.createElement("div");
				c.className = "chat-corner";
				if (type == MSG_TYPE_TEXT) {
					b.textContent = data.content;
					b.appendChild(c);
				} else if (type == MSG_TYPE_IMAGE) {
					var i = new Image();
					i.onload = function(){
						var i = this;
						if (i.width > IMAGE_MAX_WIDTH) {
							var w = canvas.width = IMAGE_MAX_WIDTH;
							var h = canvas.height = Math.round(i.height / i.width * IMAGE_MAX_WIDTH);
							context.clearRect(0, 0, w, h);
							context.drawImage(i, 0, 0, i.width, i.height, 0, 0, w, h);
							var j = new Image();
							j.onload = scrollToBottom;
							j.src = canvas.toDataURL();
							b.appendChild(j);
						} else {
							b.appendChild(i);
							scrollToBottom();
						}
						b.appendChild(c);
					};
					i.src = data.content;
					// b.appendChild(i);
				} else if (type == MSG_TYPE_PLACE) {
					var coords = data.coords,
						longitude = coords.longitude,
						latitude = coords.latitude;
					var isEast = longitude > 0;
					var isNorth = latitude > 0;
					var content = "我在这里: " + (isEast ? "东" : "西") + "经"
							+ Math.abs(longitude).toFixed(4) + "° "
							+ (isNorth ? "北" : "南") + "纬"
							+ Math.abs(latitude).toFixed(4) + "°"
					b.textContent = content;
					b.appendChild(document.createElement("br"));
					var i = new Image();
					i.width = IMAGE_MAX_WIDTH;
					i.height = 240;
					i.src = "http://maps.google.com/maps/api/staticmap?center="
							+ latitude + "," + longitude + "&markers=color:blue%7Clabel:S%7C"
							+ latitude + "," + longitude + "&zoom=" + 12
							+ "&size=" + i.width + "x" + i.height
							+ "&sensor=true&maptype=roadmap";
					i.style.marginTop = "5px";
					b.appendChild(i);
					b.appendChild(c);
				}
				layer.appendChild(b);
				break;
			case MSG_TYPE_JOIN:
				layer.className = "chat-join";
				var b = document.createElement("div");
				b.textContent = data.user + " 加入了聊天";
				layer.appendChild(b);
				break;
			case MSG_TYPE_LEAVE:
				layer.className = "chat-leave";
				var b = document.createElement("div");
				b.textContent = data.user + " 退出了聊天";
				layer.appendChild(b);
				break;
			case MSG_TYPE_LIST:
				layer.className = "chat-join";
				var b = document.createElement("div");
				var l = [];
				for (var i = 0; i < data.list.length; ++ i) {
					l.push(data.list[i].user);
				}
				b.textContent = l.join("、") + " 加入了聊天";
				layer.appendChild(b);
				break;
			case MSG_TYPE_ERROR:
				layer.className = "chat-leave";
				var b = document.createElement("div");
				b.textContent = data.content;
				layer.appendChild(b);
				break;
		}
		chatArea.appendChild(layer);
		scrollToBottom();
	}

	// 滚动到最底部
	function scrollToBottom() {
		requestAnimationFrame(function(){
			chatArea.scrollTop = 1e8;
		});
	}

	// 手动选择图片
	chatFile.onchange = function(){
		var files = this.files;
		if (files.length > 0) {
			if (/^image\//.test(files[0].type)) {
				var self = this;
				var reader = new FileReader();
				reader.onload = function(){
					self.value = null;
					room.sendImage(this.result);
				};
				reader.readAsDataURL(files[0]);
			}
		}
	};

	// 拖放图片
	chatRoom.ondragover = function(e){
		e.preventDefault();
		this.className = "dropping";
	};
	chatRoom.ondragleave = function(){
		this.className = "";
	};
	chatRoom.ondrop = function(e){
		e.preventDefault();
		this.className = "";
		var files = e.dataTransfer.files;
		if (files.length > 0) {
			for (var i = 0; i < files.length; ++ i) {
				if (/^image\//.test(files[0].type)) {
					var reader = new FileReader();
					reader.onload = function(){
						room.sendImage(this.result);
					};
					reader.readAsDataURL(files[0]);
					break;
				}
			}
		}
	};

	chatSend.onclick = function(){
		var text = chatText.value.trim();
		if (text) {
			this.disabled = true;
			room.sendText(text);
			this.disabled = false;
		}
		chatText.value = "";
	};

	// 回车发送消息
	chatText.onkeydown = function(e){
		e.stopPropagation();
	};
	chatText.onkeyup = function(e){
		e.stopPropagation();
		if (e.keyCode == 13) {
			e.preventDefault();
			chatSend.onclick();
		}
	};

	// 通知
	var notify = (function(){
		return function(){};
		if (window.webkitNotifications) {
			var btn = document.getElementById("chat-notify"),
				label = document.getElementById("chat-notify-label"),
				state = "default";
			label.style.display = "";
			btn.checked = window.webkitNotifications.checkPermission() == 0;
			if (btn.checked) {
				state = "granted";
			}
			btn.onclick = function(){
				if (btn.checked) {
					if (state != "granted") {
						window.webkitNotifications.requestPermission(function(){
							state = "granted";
						});
					}
				}
			};
		}
		var lastNote = null;
		return function (type, data) {
			if (state != "granted" || !btn.checked) {
				return;
			}
			if (document.webkitHidden) {
				if (window.webkitNotifications && window.webkitNotifications.checkPermission() == 0) {
					var body = data.user;
					if (type == MSG_TYPE_TEXT) {
						body += " : " + data.content.substr(0,20) + (data.content.length > 20 ? "..." : "");
					} else if (type == MSG_TYPE_IMAGE) {
						body += " 发来一张照片";
					} else {
						body += " 发来一条位置消息";
					}
					var note = window.webkitNotifications.createNotification(
						"",
						"新消息",
						body
					);
					if (lastNote) {
						lastNote.close();
					}
					note.show();
					lastNote = note;
				}
			}
		};
	})();

	chatPlace.onclick = function(){
		if (!navigator.geolocation) {
			showMessage(MSG_TYPE_ERROR, {content: "您的浏览器不支持定位"});
			return;
		}
		// showMessage(MSG_TYPE_ERROR, {content: "正在定位..."});
		navigator.geolocation.getCurrentPosition(onPlaceSuccess, onPlaceError, {
			enableHighAccuracy: false, // 是否使用精确定位
			timeout: 2e4, // 超时时间
			maximumAge: 6e5 // 位置有效期
		});
		this.disabled = true;
	};
	function onPlaceSuccess(position) {
		/**
		coords: {
			latitude : 纬度,
			longitude : 经度,
			accuracy : 精确度(米)
		} (还有高度，高度精确度，运动方向，运动速度等)
		*/
		console.dir(position);
		// showMessage(MSG_TYPE_ERROR, {content: JSON.stringify(position.coords)});
		room.sendPlace(position.coords);
		chatPlace.disabled = false;
	}
	function onPlaceError() {
		showMessage(MSG_TYPE_ERROR, {content: "定位失败"});
		chatPlace.disabled = false;
	}

	room.init();
})();
