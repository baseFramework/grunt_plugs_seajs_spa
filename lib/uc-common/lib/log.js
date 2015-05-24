/**
    Logger factory

    @example
    log.trace('Entering cheese testing');
    log.debug('Got cheese.');
    log.info('Cheese is Gouda.');
    log.warn('Cheese is quite smelly.');
    log.error('Cheese is too ripe!');
    log.fatal('Cheese was breeding ground for listeria.');

    //----- init

    //----- global logger -----
    var log = require('./lib/log')();
    log.info('Hello world!');

    //----- Output -----
    [2013-11-19 19:17:19.520] [INFO] [global] - Hello world!

    //----- module logger -----
    var log = require('./lib/log')();
    log('moduleA').info('Hello world!');

    //----- Output -----
    [2013-11-19 19:17:19.520] [INFO] [moduleA] - Hello world!
 */
'use strict';

var path = require('path'),
    log4js = require('log4js'),
    util = require('./util');

module.exports = function (options) {
    options = options || {};
    options.filename = options.filename || 'app';
    options.logLevel = options.logLevel || 'warn';
    options.logDir = options.logDir || path.join(process.cwd(), 'private/log');
    util.dir(options.logDir);

    log4js.configure({
        appenders: [{
            type: 'dateFile',
            filename: options.filename,
            pattern: '.yyyyMMddhh.log',
            alwaysIncludePattern: true
        }]
    }, {
        cwd: options.logDir
    });

    // add email appender to PRODUCTION environment
    if (process.env.NODE_ENV === 'production' && options.email) {
        log4js.loadAppender('smtp');
        log4js.addAppender(log4js.appenders.smtp({
            type: 'smtp',
            sender: options.email.from,
            recipients: options.email.to,
            subject: options.email.subject,
            transport: 'direct'
        }), '[email]');
    // add console appender to other environments
    } else {
        log4js.addAppender(log4js.appenders.console());
    }

    var getLogger = function (category) {
        if (typeof category !== 'string' || category.length === 0) {
            category = 'global';
        }

        if (!/^\[.+\]$/.test(category)) {
            category = '[' + category + ']';
        }

        var logger = log4js.getLogger(category);
        logger.setLevel(options.logLevel);
        return logger;
    };
    // make getLogger as defaultLogger
    util.extend(true, getLogger, getLogger());
    getLogger.setLevel(options.logLevel);

    // rewrite module.exports after initialized
    module.exports = function () {
        return getLogger;
    };
    return getLogger;
};