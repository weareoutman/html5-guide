(function(){
	var MSG_TYPE_USERLIST = 0x1;
	var MSG_TYPE_TEXTCHAT = 0x2;
	var MSG_TYPE_IMAGECHAT = 0x3;

	var inputUser = document.getElementById("username"),
		btnJoin = document.getElementById("join"),
		btnSend = document.getElementById("send"),
		userList = document.getElementById("userlist"),
		messages = document.getElementById("messages"),
		inputBox = document.getElementById("inputbox"),
		globalSocket;
	btnJoin.addEventListener("click", connect, false);
	btnSend.addEventListener("click", function(){
		var msg = inputBox.value;
		if (msg) {
			inputBox.value = "";
			sendMessage(msg);
		}
	}, false);
	function connect() {
		var username = inputUser.value.replace(/^\s+|\s+$/g, "");
		if (!username || !/^[\u0021-\u007E\u4E00-\u9FBB]+$/.test(username)
			|| username.replace(/[\u4E00-\u9FBB]/g, "aa").length > 16) {
			alert("请输入有效的昵称!");
			return;
		}
		btnJoin.setAttribute("disabled", "disabled");
		inputUser.setAttribute("disabled", "disabled");
		// var host = "ws://127.0.0.1:8001/?" + username;
		var host = "ws://192.168.1.101:8001/?" + username;
		// var host = "ws://" + location.hostname + ":8081/?" + username;
		// alert(host);
		var protocols = ["chat"];
		var socket = new WebSocket(host, protocols);
		var startTime = Date.now();
		var waitingFirstMsg = true;
		socket.binaryType = "arraybuffer";
		socket.onopen = function(){
			joinedIn();
		};
		socket.onerror = function(e){
			console.log("error");
			console.dir(e);
		};
		socket.onclose = function(e){
			// e.code e.reason
			console.log("close");
			console.dir(e);
		};
		socket.onmessage = function(e){
			if (waitingFirstMsg) {
				waitingFirstMsg = false;
				var connectCost = Date.now() - startTime;
				console.log("connect cost ", connectCost);
			}
			receivedMessage(e.data);
		};
		globalSocket = socket;
	}
	function joinedIn() {
		console.log("joined in the chat room");
		btnJoin.value = "joined";
	}
	function receivedMessage(data) {
		console.log("received a message");
		if (typeof data == "string") {
			return;
		}
		if (data.byteLength < 6) {
			return;
		}
		var view = new DataView(data, 0, 6);
		var second = view.getUint32(0),
			temp = view.getUint16(4),
			millisecond = temp >>> 6,
			type = temp & 0x3F,
			date = new Date(second * 1e3 + millisecond);
		console.log(date.toLocaleString());
		console.log("0x" + type.toString(16));

		view = new DataView(data, 6);
		var json;
		if (type == MSG_TYPE_USERLIST) {
			json = JSON.parse(utf8ToUnicode(view));
			userList.value = json.join("\n");
		} else if (type == MSG_TYPE_TEXTCHAT) {
			json = JSON.parse(utf8ToUnicode(view));
			messages.value += json.username + " [" + date.toLocaleString() + "]" + "\n  " + json.content + "\n";
		}
	}
	function sendMessage(data) {
		globalSocket.send(data);
	}
	function utf8ToUnicode(view) {
		var strs = [];
		for (var i = 0; i < view.byteLength; ) {
			var c = view.getUint8(i ++),
				b = c >> 4;
			if (b < 0x8) { // 单字节: [0ghi jklm] => [0000 0000 0ghi jklm]
				strs.push(String.fromCharCode(c));
			} else if (b < 0xC) { // [10** ****] 后续字节
				throw new Error('catch an unexpected followed byte of a utf-8 char of 0x' + b.toString(16));
			} else if (b < 0xE) { // 双字节: [110g hijk 10lm nopq] => [0000 0ghi jklm nopq]
				strs.push(String.fromCharCode(
						(c                   & 0x1F) << 6 |
						(view.getUint8(i ++) & 0x3F)
				));
			} else if (b == 0xE) { // 三字节: [1110 ghij 10kl mnop 10qr stuv] => [ghij klmn opqr stuv]
				strs.push(String.fromCharCode(
						(c                   & 0x0F) << 12 |
						(view.getUint8(i ++) & 0x3F) <<  6 |
						(view.getUint8(i ++) & 0x3F)
				));
			} else { // 四字节及以上
				throw new Error('catch more than 3 bytes of a utf-8 char');
			}
		}
		return strs.join("");
	}
})();