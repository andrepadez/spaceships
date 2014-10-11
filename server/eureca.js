var express = require('express');
var app = express();

var EurecaServer = require('eureca.io').EurecaServer;
var eureca = new EurecaServer();
var server = require('http').createServer(app);

eureca.attach(server);

//////////////////////////////////////////
///////////Express Server/////////////////
app.get('/', function (req, res, next) {
    res.sendfile('index.html');
});

server.listen(8000); 
