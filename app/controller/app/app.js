"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model = require("../../mocks/article/list");
const egg_1 = require("egg");
class AppController extends egg_1.Controller {
    async index() {
        await this.ctx.render('app/app.js', {
            url: this.ctx.url.replace(/\/app/, '')
        });
    }
    async list() {
        const pageIndex = this.ctx.query.pageIndex;
        const pageSize = this.ctx.query.pageSize;
        this.ctx.body = Model.getPage(pageIndex, pageSize);
    }
    async detail() {
        const id = this.ctx.query.id;
        this.ctx.body = Model.getDetail(id);
    }
}
exports.default = AppController;
