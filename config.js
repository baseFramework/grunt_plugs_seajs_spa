'use strict';

var util = require('./lib/uc-common').util,
  meta = require('./package.json');

module.exports = {
  logLevel: 'all',

  // 目录配置
  publicDir: util.dir(__dirname, 'public'),
  logDir: util.dir(__dirname, 'private', 'log'),
  varDir: util.dir(__dirname, 'private', 'var'),
  dataDir: util.dir(__dirname, 'private', 'data'),

  // 前端配置
  frontend: {
    version: meta.version
  }
};