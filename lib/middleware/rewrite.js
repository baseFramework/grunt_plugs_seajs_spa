/*jshint unused: false */
'use strict';
module.exports = function (options) {
    var re = new RegExp('^\/' + options + '((?:\/|\\?).*)?$');
    return function (req, res, next) {
        if (re.test(req.url)) {
            var target = RegExp.$1;
            req.url = target[0] === '/' ? target : '/' + target;
        }
        next();
    };
};