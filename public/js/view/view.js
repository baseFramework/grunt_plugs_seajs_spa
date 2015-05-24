define(function (require, exports, module) {
    'use strict';

    var template = require('core/template'),
        view = {};

    // 存储各页面状态，便于各页面间共享
    view.state = {};
    // 全部页面
    view.pages = {
        index: require('./index'),
        detail:require('./detail')
    };

    view.init = function (ctx, next) {
        ctx.state.view = view.state;

        var pages = view.pages,
            prevPage = view.state.page,
            currPage = ctx.pathname.slice(1);

        if (prevPage && prevPage !== currPage) {
            if (prevPage === 'index') {
                pages[prevPage].hide();
            } else if (pages.hasOwnProperty(prevPage)) {
                pages[prevPage].exit();
            }
        }

        if (!prevPage) {
            window.pageInited = true;
        }

        next();
    };

    module.exports = view;
});
