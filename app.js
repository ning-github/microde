'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// import routes
var routes = require('./routes/index');

// instantiate app
var app = express();

// set up logging
app.use(logger('dev'));

// set up request body parsing
app.use(bodyParser.json());

// set up routes
app.use('/api/hello', routes.hello);

module.exports = app;
