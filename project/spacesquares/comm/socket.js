var io = require('socket.io-client');

var socket = io('http://localhost:8000', function(){
    //console.log('socket.io connected');
});
module.exports = socket;


