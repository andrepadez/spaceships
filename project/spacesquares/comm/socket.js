var io = require('socket.io-client');

var socket = module.exports = io('http://localhost:8000');

console.log('here');
socket.on('connect', function(){
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
});
