
var WebSocketAPI = require("./WebSocket-server-v3.js");
var WebSocketServer = WebSocketAPI.WebSocketServer;
var WebSocket = WebSocketAPI.WebSocket;
var log = WebSocketAPI.log;

var server = WebSocketServer.listen({
	// host: "localhost",
	port: 8002,
	// heartBeatTimeout: 15,
	acceptOrigins: ["http://weihub.local"],
	httpListener: function(request, response) {
		response.writeHead(200, {
			"content-type" : "text/html"
		});
		response.end("running");
	}
}, function(webSocket, request){
	webSocket.open();
	webSocket.on("data", function(data){
		webSocket.send(data);
	});
});
