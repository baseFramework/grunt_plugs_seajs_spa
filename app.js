/*jshint camelcase: false */
'use strict';

var path = require('path'),
    express = require('express'),
    config = require('./config'),
    middleware = require('./lib/uc-common').middleware,
    log = require('./lib/log'),
    compress = require('compression'),
//model = require('./model'),
    app = module.exports = express();

process.on('uncaughtException', function (err) {
    log.error('Uncaught exception:\n', err.stack);
});

// lazy load middlewares
['rewrite'].forEach(function (m) {
    middleware.__defineGetter__(m, function () {
        return require('./lib/middleware/' + m);
    });
});

app.set('env', process.env.NODE_ENV || 'development');
app.set('port', process.env.PORT || 8088);
app.set('views', path.join(__dirname, 'public', 'tpl'));
app.engine('.tpl', require('ejs').__express);
app.set('view engine', 'tpl');
app.use(compress());
// 根据配置的 filter 解析 ucParams 到 req.ucParams
// app.use(middleware.ucparam.filter(config.paramFilter));
app.use('/public', express.static(config.publicDir, {maxAge: Infinity}));

function renderTpl(req, res, appConfig) {
    //为了解决ios7下面浏览器内核对304请求的处理有误导致页面白屏的bug!
    res.render('index', {
        appConfig: appConfig
    });
}

app.get('/', function (req, res) {
        renderTpl(req, res);
    }
);

app.get('*', function (req, res) {
    res.send(404);
});


if (require.main === module) {
    app.listen(app.get('port'), function () {
        console.log('[%s] Express server listening on port %d',
            app.get('env').toUpperCase(), app.get('port'));
    });
}