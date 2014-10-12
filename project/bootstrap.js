var Game = require('./spacesquares/game.js');

var canvas = document.querySelector('#space');

Game.init(canvas);


var dnode = require('dnode');
var shoe = require('shoe');

var stream = shoe('http://localhost:9999/dnode');
    
var d = dnode(); console.log(dnode);
d.on('remote', function (remote) {console.log('here');
    remote.transform('beep', function (s) {console.log('return');
        alert('beep => ' + s);
    });
});
d.pipe(stream).pipe(d);
