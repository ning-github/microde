'use strict';

var Promise = require("bluebird");
var helloStore = require('../models/hello.datastore');

module.exports = {
    setHiKey: setHiKey,
    getHiKey: getHiKey,
};

function setHiKey(req, res, next) {
    return new Promise(function(resolve, reject) {
        var key = "hi";
        var value = 123;

        helloStore.setKey(key, 123)
            .then(function(){
                res.send(key + ' key was set!');
            });
    });
}

function getHiKey(req, res, next) {
    return new Promise(function(resolve, reject) {
        var key = "hi";

        helloStore.getKey(key)
            .then(function(value){
                res.send(value + ' retrieved for ' + key);
            });
    });
}
