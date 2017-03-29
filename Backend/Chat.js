var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket) {
	console.log('A user connected' + socket);
	socket.on('disconnect', function() {
		console.log('A user DISCONNECTED');
	});
	socket.on('chat message', function(msg){
	    console.log('message: ' + msg);
	    io.emit('chat message', msg);
	});
});

http.listen(port, function() {
	console.log("Listening");
});
