"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Egg.Application} app - egg application
 */
exports.default = (application) => {
    const { router, controller } = application;
    router.get('/', controller.home.home.index);
    router.get('/client', controller.home.home.client);
    router.get('/about', controller.about.about.index);
    router.get('/app/api/article/list', controller.app.app.list);
    router.get('/app/api/article/:id', controller.app.app.detail);
    router.get('/app(/.+)?', controller.app.app.index);
};
