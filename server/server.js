var io = require('socket.io').listen(8000, function(){
    console.log('listening on port 80');
});

var players = [];

io.sockets.on('connection', function(socket){
    //conns.push(socket);

    socket.on('message', function(action, data){
        // console.log(action, data);
        io.emit('posUpdated', data);
        // conns.forEach(function(conn){
        //     if(socket !== conn){
        //         conn.send('posUpdated', data);
        //     }
        // });
    });

    socket.on('newPlayer', function(player){
        var idx = playerExists(player);
        if(idx < 0){
            players.push(player);
            io.emit('newPlayer', player);
        } else {
            players[idx].ship.x = player.ship.x;
            players[idx].ship.y = player.ship.y;
            io.emit('updatePos', player);
        }
        socket.emit('currentPlayers', players);
    });

    socket.on('updatePos', function(player){
        io.emit('updatePos', player);
    });

    var playerExists = function(player){
        for(var i = 0; i < players.length; i++){
            if(players[i].id === player.id){
                return i;
            }
        }
        return -1;
    };

})
