var Game = require('../game.js'); console.log(Game);
var Events = require('../events/events.js');
var keyboard = require('../events/keyboard.js');
var KEYS = keyboard.KEYS;

var Ship = module.exports = function(x, y, w, h, s){
    this.x = x || this.x;
    this.y = y || this.y;
    this.width = w || this.width;
    this.height = h || this.height;
    this.speed = s || this.speed;
};

Ship.prototype = {
    width: 70,
    height: 70,
    color: '#aaa',
    border: '#666',
    speed: 5,
    x: 365,
    y: 500,
    draw: function(){
        Game.ctx.beginPath();
        Game.ctx.rect(this.x, this.y, this.width, this.height);
        Game.ctx.fillStyle = this.color;
        Game.ctx.fill();
    },
    update: function(){
        handleKeys.call(this);
    }
};

var handleKeys = function(){
    var limit;
    var pressed = keyboard.getPressedKeys();
    if(pressed[KEYS.LEFT]){
        this.x = this.x - this.speed < 0? 0 : this.x - this.speed;
    }
    if(pressed[KEYS.RIGHT]){
        limit = Game.canvas.width - this.width;
        this.x = this.x + this.speed >= limit? limit : this.x + this.speed;
    }
    if(pressed[KEYS.UP]){
        this.y = this.y - this.speed < 0? 0 : this.y - this.speed;
    }
    if(pressed[KEYS.DOWN]){
        limit = Game.canvas.height - this.height;
        this.y = this.y + this.speed > limit? limit : this.y + this.speed;
    }
};
