define(function (require, exports, module) {
    'use strict';

    var uiProxy = require('uiproxy'),
        msg = require('message'),
        $ = require('core/selector'),
        template = require('core/template'),
        detail = {},
        uiEvent;
    //事件对象
    uiEvent = {

    };

    /**
     * 首页初始化方法
     * @param ctx
     * @param next
     */
    detail.init = function (ctx, next) {
        console.log('detail init');
        next();
    };

    /**
     * 首页渲染方法
     * @param ctx
     */
    detail.render = function (ctx) {
        console.log('detail render');
    };


    detail.error = function (operate) {
        console.log('detail error');
    };

    detail.retryMore = function () {

    }

    detail.hide = function () {
        console.log('detail hide');
    };

    module.exports = detail;
})
;
