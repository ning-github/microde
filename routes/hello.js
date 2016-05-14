'use strict';

var express = require('express');
var router = express.Router();

var controllers = require('../controllers/hello.controller');

router.post('/', controllers.setHiKey);
router.get('/', controllers.getHiKey);

module.exports = router;