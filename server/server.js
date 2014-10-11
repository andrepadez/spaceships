var io = require('socket.io').listen(8000, function(){
    console.log('listening on port 80');
});

io.sockets.on('connection', function(socket){

    socket.on('message', function(){
        console.log('message received', arguments);
        socket.send('roger that');
    });

})
