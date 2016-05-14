'use strict';

var helloStore = require('../models/hello.datastore');

module.exports = {
    getHello: getHello,
};

function getHello(req, res, next){
    var data = helloStore.getHello();
    res.send({
        data: data,
    });
}
