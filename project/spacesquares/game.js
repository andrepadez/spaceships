var Ship = require('./gameobjects/spaceship.js');

window.Game = module.exports = {
	init: function(canvas){
		console.log('inited', canvas);
        Game.canvas = canvas;
        Game.ctx = canvas.getContext('2d');
        this.ship = new Ship();
        this.startGameLoop();
	}, 
    update: function(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ship.draw();
    }, 

    startGameLoop: function(){
        (function loop(){
            if(this.isPaused){
                return;
            }
            this.update();
            requestAnimationFrame(loop.bind(this));
        }).call(this);
    }
};
