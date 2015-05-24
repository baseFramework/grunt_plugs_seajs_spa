define(function (require, exports) {
    'use strict';

    var router = require('core/router'),
        msg = require('message'),
        model = require('model'),
        view = require('view/view');

    /***** Router ****/
    router('*', view.init);

    router('/index',
        view.pages.index.init,
        model.classifyLoad,
        view.pages.index.render
    );

    router('/detail',
        view.pages.detail.init,
        model.classifyLoad,
        view.pages.detail.render
    );

    // 404
    router('*', function () {
        router.replace('/index');
    });


    /***** Messages *****/
    msg.on('route', function () {
        router.route.apply(router, arguments);
    });

    msg.on('route:direct', function (target) {
        location.href = target;
    });

    msg.on('route:reload', function () {
        window.location.reload();
    });

    exports.init = function () {
        router();
    };
});
