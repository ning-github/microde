'use strict';

var http = require('http');
var app = require('./app');

// get and set port
var port = process.env.PORT || '5000';
app.set('port', port);

// create HTTP server
var server = http.createServer(app);

// begin listening!
server.listen(port);
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
