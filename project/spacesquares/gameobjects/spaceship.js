var Events = require('../events/events.js'); console.log('Events', Events);

var Ship = module.exports = function(x, y, w, h, s){
    this.x = x || this.x;
    this.y = y || this.y;
    this.width = w || this.width;
    this.height = h || this.height;
    this.speed = s || this.speed;
    Events.add(this.keyHandler, this);
};



Ship.prototype = {
    width: 70,
    height: 70,
    color: '#aaa',
    border: '#666',
    speed: 20,
    x: 365,
    y: 500
};


Ship.prototype.draw = function(){
    Game.ctx.beginPath();
    Game.ctx.rect(this.x, this.y, this.width, this.height);
    Game.ctx.fillStyle = this.color;
    Game.ctx.fill();
    
};

Ship.prototype.keyHandler = function(ev){console.log(Game.canvas.width);
    var limit;
    var keys = Events.keyboard.KEYS;
    switch(ev.keyCode){
        case keys.LEFT:
            this.x = this.x - this.speed < 0? 0 : this.x - this.speed;
            break;
        case keys.RIGHT:
            limit = Game.canvas.width - this.width;
            this.x = this.x + this.speed >= limit? limit : this.x + this.speed;
            break;
        case keys.UP:
            this.y = this.y - this.speed < 0? 0 : this.y - this.speed;
            break;
        case keys.DOWN:
            limit = Game.canvas.height - this.height;
            this.y = this.y + this.speed > limit? limit : this.y + this.speed;
            break;
    }
};
