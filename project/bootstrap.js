var Game = require('./spacesquares/game.js');

var canvas = document.querySelector('#space');

Game.init(canvas);

var socket = io('http://localhost:8000');
  socket.on('connect', function(){
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});

    socket.on('message', function(message){
        console.log('message received', message);
    });
    socket.send('testing 123');
  });

