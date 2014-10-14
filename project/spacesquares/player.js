var Ship = require('./gameobjects/spaceship.js');

var game;

var Player = function(game, playerData){
    Game = game;
    this.ship = new Ship(game);

    if(playerData){
        this.id = playerData.id;
        this.ship.x = playerData.ship.x;
        this.ship.y = playerData.ship.y; console.log(playerData.ship.color);
        this.ship.color = playerData.ship.color;
    } else {
        this.id = Math.floor(Math.random() * 10000000);
    }
};

module.exports = Player;
