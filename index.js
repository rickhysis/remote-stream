var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3100;

io.set("origins", "*:*");

io.on('connection', function(socket){
    socket.on('init', function(msg){
        socket.broadcast.emit('initial', msg)
    });

    socket.on('view', function(msg){
        socket.broadcast.emit('event', msg)
    });
});

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});


/**
 * send_code{
 * 
 * }
 * 
 */