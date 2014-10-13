var io = require('socket.io').listen(8000, function(){
    console.log('listening on port 80');
});

var conns = [];

io.sockets.on('connection', function(socket){
    conns.push(socket);

    socket.on('message', function(action, data){
        console.log(action, data);
        conns.forEach(function(conn){
            if(socket !== conn){
                conn.send('posUpdated', data);
            }
        });
        
    });

})
