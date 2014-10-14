var Player = require('./player.js');
var socket = require('./comm/socket.js');
var a = 0;
var Game = module.exports = {
	init: function(canvas){
        this.heartbeat = 0;
        this.opponents = [];
        this.playerID = localStorage.playerID || Math.floor(Math.random()*100000000);
        setupSocket.call(this);

        localStorage.playerID = this.playerID;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.player = new Player(this);
	}, 
    update: function(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.player.ship.update();
    }, 
    
    draw: function(){
        this.player.ship.draw();
        this.opponents.forEach(function(opponent){
            //if(a++ == 0){console.log('draw', opponent.ship.draw);debugger;}
            opponent.ship.draw();
        }.bind(this));
    },

    startGameLoop: function(){
        (function loop(){
            this.heartbeat++;
            if(!this.isPaused){
                this.update();
                this.draw();
            }
            requestAnimationFrame(loop.bind(this));
        }).call(this);
    }
};

var setupSocket = function(){
    if(socket.connected){
        onConnect.call(this);
    } else {
        socket.on('connect', onConnect.bind(this));
    }
    socket.on('newPlayer', onNewPlayer.bind(this));
    socket.on('currentPlayers', onCurrentPlayers.bind(this));
    socket.on('updatePos', onUpdatePos.bind(this));
};

var onNewPlayer = function(player){
    if(player.id !== Game.player.id){
        //console.log('new player created', player.id, Game.player.id);
    }
};

var onUpdatePos = function(player){
    console.log('onUpdatePos', player);
    this.opponents.forEach(function(opponent){
        if(opponent.id === player.id){
            opponent.ship.x = player.ship.x;
            opponent.ship.y = player.ship.y;
        }
    })
};

var onCurrentPlayers = function(players){
    players.forEach(function(player){
        if(player.id !== this.player.id){
            this.opponents.push(player);
        }
    }.bind(this));
    spawnOpponents.call(this);
};

var spawnOpponents = function(){console.log('spawn opponents', this.opponents);
    this.opponents.forEach(function(opponent, idx, arr){
        arr[idx] = new Player(this, opponent);
    }.bind(this));
};

var onConnect = function(){
    this.canvas.style.display = 'block';console.log('socket.emit', this.player);
    socket.emit('newPlayer', this.player);
    this.startGameLoop();
};

var onDisconnect = function(){

};
