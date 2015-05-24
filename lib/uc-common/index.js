var fs = require('fs'),
    common = {},
    middleware = common.middleware = {};

// libraries
['log', 'util'].forEach(function (m) {
    common.__defineGetter__(m, function () {
        return require('./lib/' + m);
    });
});

// middlewares
['errorHandler'].forEach(function (m) {
    middleware.__defineGetter__(m, function () {
        return require('./lib/middleware/' + m);
    });
});

module.exports = common;