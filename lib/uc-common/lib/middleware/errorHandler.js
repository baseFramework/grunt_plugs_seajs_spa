/*jshint unused: false */
'use strict';

module.exports = function () {
    return function (err, req, res, next) {
        var log = require('../log')();

        if (err.status) {
            res.statusCode = err.status;
        }

        if (res.statusCode < 400) {
            res.statusCode = 500;
        }

        log(err.mod || req.path).error(err.stack);
        res.end();
    };
};