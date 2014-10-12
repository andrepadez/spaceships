var keyboard = require('../events/keyboard.js');
var KEYS = keyboard.KEYS;

var canvas, ctx;

var Ship = module.exports = function(cvs, x, y, w, h, s){
    canvas = cvs;
    ctx = canvas.getContext('2d');
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
    speed: 20,
    x: 365,
    y: 500,
    draw: function(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
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
        limit = canvas.width - this.width;
        this.x = this.x + this.speed >= limit? limit : this.x + this.speed;
    }
    if(pressed[KEYS.UP]){
        this.y = this.y - this.speed < 0? 0 : this.y - this.speed;
    }
    if(pressed[KEYS.DOWN]){
        limit = canvas.height - this.height;
        this.y = this.y + this.speed > limit? limit : this.y + this.speed;
    }
};
