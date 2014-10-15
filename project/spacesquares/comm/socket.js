var io = require('socket.io-client', {'force new connection': true });

var socket = io('http://10.41.60.111:9999', function(){
// var socket = io('http://192.168.2.1:9999', function(){
//var socket = io('http://178.62.241.239:9999', function(){
    //console.log('socket.io connected');
});
module.exports = socket;


