define(function (require, exports, module) {
    'use strict';

    var uiProxy = require('uiproxy'),
        msg = require('message'),
        $ = require('core/selector'),
        template = require('core/template'),
        index = {},
        uiEvent;
    //事件对象
    uiEvent = {

    };

    /**
     * 首页初始化方法
     * @param ctx
     * @param next
     */
    index.init = function (ctx, next) {
        console.log('index init');
        next();
    };

    /**
     * 首页渲染方法
     * @param ctx
     */
    index.render = function (ctx) {
        console.log('index render');
    };


    index.error = function (operate) {
        console.log('index error');
    };

    index.retryMore = function () {

    }

    index.hide = function () {
        $('#p-index').hide();
        console.log('index hide');
    };

    module.exports = index;
})
;
