var io = require('socket.io').listen(9999, function(){
    console.log('listening on port 80');
});

var players = [];

io.sockets.on('connection', function(socket){

    socket.on('newPlayer', function(player){
        socket.emit('currentPlayers', players);
        players.push(player);
        io.emit('newPlayer', player);
    });

    socket.on('updatePos', function(player){
        io.emit('updatePos', player);
    });

    socket.on('playerLeave', function(playerId){
        players = players.filter(function(player){
            return player.id !== playerId;
        });
        io.emit('playerLeave', playerId);
    });

})
