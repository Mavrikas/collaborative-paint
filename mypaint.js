var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
	res.sendfile('paint.html');
});


io.on('connection', function(socket){
	console.log('a user connected');
	
	socket.on("move",function (data){
		socket.broadcast.emit("draw",data);
	});
	socket.on('stop',function(data1){
		io.emit('stop1',data1);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});