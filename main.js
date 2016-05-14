'use strict';

var http = require('http');
var app = require('./app');

var redisStore = require('./db-client/index');

// get and set port
var port = process.env.PORT || '5000';
app.set('port', port);

// create HTTP server
var server = http.createServer(app);

// begin listening!
server.listen(port, function(){
    // connect to redis instance
    redisStore.connect();
});


server.on('error', onError);
server.on('listening', onListening);

// event listener for 'error' event
function onError(err){
    throw err;
}

// event listern for 'listening' event
function onListening() {
    var address = server.address();
    console.log('Listening on port ', address.port);
}


// handle server stopping
// when app is closing
process.on('exit', function() {
    console.log('quit server');
});

// when ctrl C to stop
process.on('SIGINT', function() {
    console.log('ctrl C-ed');
});

// when an uncaught exception is thrown
process.on('uncaughtException', function() {
    console.log('caught an uncaught exception!');
});

