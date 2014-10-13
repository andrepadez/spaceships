var socket = require('../comm/socket.js');
var keyboard = require('../events/keyboard.js');
var KEYS = keyboard.KEYS;

var Game, canvas, ctx;

var Ship = module.exports = function(game, x, y, w, h, s){
    Game = game;
    canvas = game.canvas;
    ctx = canvas.getContext('2d');
    this.x = this.lastX = x || this.x;
    this.y = this.lastY = y || this.y;
    this.width = w || this.width;
    this.height = h || this.height;
    this.speed = s || this.speed;
    socket.on('message', function(action, data){
        if(action === 'posUpdated'){
            this.x = data.x;
            this.y = data.y;
        }
    }.bind(this));
};

Ship.prototype = {
    width: 70,
    height: 70,
    color: '#aaa',
    border: '#666',
    speed: 15,
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
    if(this.x !== this.lastX || this.y !== this.lastY){ 
        this.lastX = this.x;
        this.lastY = this.y;
        socket.send('updatePos', {
            playerID: Game.playerID, 
            x: this.x, 
            y: this.y
        });
    }
};
