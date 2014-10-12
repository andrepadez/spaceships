var http = require('http');
var shoe = require('shoe');
var dnode = require('dnode');

var server = http.createServer();
server.listen(9999, function(){
    console.log('listening on port 9999');
});

var sock = shoe(function(stream){
    console.log('sock created');

    var d = dnode({
        transform: function(s, callback){console.log('in transform', typeof s, s);
            var res = s.replace(/[aeiou]{2,}/, 'oo').toUpperCase();
        }
    })
    d.pipe(stream).pipe(d);
});

sock.install(server, '/dnode');
