'use strict';

var redis = require('redis');
var Promise = require("bluebird");

function RedisStore() {
    this.config = {
        host: '127.0.0.1',
        port: 6379,
    };
}

RedisStore.prototype.connect = function() {
    // create client
    this.client = redis.createClient(this.config.port, this.config.host);

    // on error event listener
    this.client.on('error', function (err) {
        console.log('error event - ' + this.config.host + ':' + this.config.port + ' - ' + err);
    }.bind(this));

    // on connect event listener
    this.client.on('connect', function(){
        console.log('Connected to RedisStore on port ' + this.config.port);
    }.bind(this))
};

RedisStore.prototype.quit = function() {
    // to close
    this.client.quit();
};

////////////////////////////////////////////////////////////////////////
// db interaction methods we want to provide to business layer (models)
////////////////////////////////////////////////////////////////////////

RedisStore.prototype.set = function(key, value) {
    return new Promise(function(resolve, reject) {
        this.client.set(key, value, function(err, reply) {
            if (err) {
                console.error('Redis set error: ', err);
                reject(err);
            } else {
                resolve(reply);
            }
        });
    }.bind(this));
};

RedisStore.prototype.get = function(key) {
    return new Promise(function(resolve, reject) {
        this.client.get(key, function(err, reply) {
            if (err) {
                console.error('Redis get error: ', error);
                reject(err);
            } else {
                resolve(reply);
            }
        });
    }.bind(this));
};

var redisStore = new RedisStore();

// export the single instance
module.exports = redisStore;
