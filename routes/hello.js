'use strict';

var express = require('express');
var router = express.Router();

var controllers = require('../controllers/hello.controller');

router.get('/', controllers.getHello);

module.exports = router;