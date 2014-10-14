var socket = require('../comm/socket.js'); 
var keyboard = require('../events/keyboard.js');
var KEYS = keyboard.KEYS;

var Game, canvas, ctx;

var Ship = function(game){
    Game = game;
    canvas = game.canvas;
    ctx = canvas.getContext('2d');
    setColor.call(this);
    this.x = Math.floor( Math.random() * (canvas.width - this.width) );
    this.y = Math.floor( Math.random() * (canvas.height - this.height) );console.log(this.x, this.y) 
};

Ship.prototype = {
    width: 20,
    height: 20,
    color: '#aaa',
    border: '#666',
    speed: 10,
    draw: function(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    },
    update: function(){
        handleKeys.call(this);
        sendUpdate.call(this);
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

var sendUpdate = function(){
    if(this.x !== this.lastX || this.y !== this.lastY){ 
        this.lastX = this.x;
        this.lastY = this.y;
        socket.emit('updatePos', Game.player);
    }
};

var setColor = function(){
    if(localStorage.shipColor){
        this.color = localStorage.shipColor;
        return;
    }
    this.color = localStorage.shipColor = color = 'rgba(' +
        Math.floor(Math.random()*256) + ',' +
        Math.floor(Math.random()*256) + ',' +
        Math.floor(Math.random()*256) + ', 1)';
};

module.exports = Ship;
