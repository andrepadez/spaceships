var Ship = require('./gameobjects/spaceship.js');
var events = require('./events/events');

var Game = module.exports = {
	init: function(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        events.init();
        this.ship = new Ship();
        this.startGameLoop();
	}, 
    update: function(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ship.update();
    }, 
    draw: function(){
        this.ship.draw();
    },

    startGameLoop: function(){
        (function loop(){
            if(!this.isPaused){
                this.update();
                this.draw();
            }
            requestAnimationFrame(loop.bind(this));
        }).call(this);
    }
};
