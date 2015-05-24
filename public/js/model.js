define(function (require, exports, module) {
    'use strict';

    var net = require('core/network'),
        Event = require('core/event'),
        view = require('view/view'),
        $ = require('core/selector'),
        model = {};

    /**
     * 获取上一次前端缓存数据
     * @param ctx
     * @param next
     */
    model.getLastData = function(ctx,next){
    };

    model.classifyLoad = function (ctx, next) {
        next();
    };

    model.load = function (ctx, next) {
    };

    model.loadMore = function (api, params) {
    };

    model.storageSet = function (key, value) {
        if (window.localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };

    model.storageGet = function (key) {
        if (window.localStorage) {
            return JSON.parse(localStorage.getItem(key));
        }
    };

    model.storageRemove = function (key) {
        if (window.localStorage) {
            localStorage.removeItem(key);
        }
    };

    model.ajax = $.ajax;

    module.exports = model;
});