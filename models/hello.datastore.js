'use strict';

var Promise = require('bluebird');
var redisStore = require('../db-client');

module.exports = {
    setKey: setKey,
    getKey: getKey,
}

function setKey(key, value) {
    return new Promise(function(resolve, reject) {
        redisStore.set(key, value)
            .then(function() {
                resolve();
            });
    })
}


function getKey(key) {
    return new Promise(function(resolve, reject) {
        redisStore.get(key)
            .then(function(value) {
                resolve(value)
            });  
    })    
}