var Player = require('./player.js');
var comm = require('./comm/comm.js');
var a = 0;
var Game = module.exports = {
	init: function(canvas){
        this.heartbeat = 0;
        this.opponents = [];
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.player = new Player(this);
        comm.init(this);
	}, 
    update: function(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.player.ship.update();
    }, 
    
    draw: function(){
        this.player.ship.draw();
        this.opponents.forEach(function(opponent){
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
