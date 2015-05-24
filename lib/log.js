var meta = require('../package.json'),
    config = require('../config'),
    log = require('./uc-common').log;

module.exports = log({
    filename: meta.name,
    logLevel: config.logLevel,
    logDir: config.logDir
});