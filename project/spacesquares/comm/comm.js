var socket = require('./socket.js');
var Player = require('../player.js');

var Game;

var Comm = module.exports = {
    init: function(game){
        Game = game;
        if(socket.connected){
            onConnect.call(this);
        } else {
            socket.on('connect', onConnect);
        }
        socket.on('newPlayer', onNewPlayer);
        socket.on('currentPlayers', onCurrentPlayers);
        socket.on('updatePos', onUpdatePos);
        socket.on('disconnect', onDisconnect);
        socket.on('playerLeave', onPlayerLeave);
        window.onbeforeunload = onDisconnect;
    }   
};


var onNewPlayer = function(player){console.log('here newPlayer', player, Game.player);
    if(player.id !== Game.player.id){
        Game.opponents.push(new Player(Game, player));
    }
};

var onUpdatePos = function(player){
    Game.opponents.forEach(function(opponent){
        if(opponent.id === player.id){
            opponent.ship.x = player.ship.x;
            opponent.ship.y = player.ship.y;
        }
    })
};

var onCurrentPlayers = function(players){
    players.forEach(function(player){
        if(player.id !== Game.player.id){
            Game.opponents.push(player);
        }
    }.bind(this));
    spawnOpponents();
};

var spawnOpponents = function(){
    Game.opponents.forEach(function(opponent, idx, arr){
        arr[idx] = new Player(Game, opponent);
    }.bind(this));
};

var onConnect = function(){
    Game.canvas.style.display = 'block';
    socket.emit('newPlayer', Game.player);
    Game.startGameLoop();
};

var onDisconnect = function(){
    socket.emit('playerLeave', Game.player.id);
};

var onPlayerLeave = function(playerId){
    Game.opponents = Game.opponents.filter(function(opponent){
        return opponent.id !== playerId;
    });
};
