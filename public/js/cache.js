define(function (require, exports, module) {
    'use strict';

    var LRUCache = require('core/lruCache'),
        config = require('./config');

    module.exports = new LRUCache({
        namespace: 'grunt_plugs_seajs_spa',
        max: config.cacheSize ||30,
        maxAge: config.cacheExpire || 60 * 60 * 24,
        localStorage: true
    });
});