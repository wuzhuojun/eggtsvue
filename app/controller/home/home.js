"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model = require("../../mocks/article/list");
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('home/index.js', Model.getPage(1, 10));
    }
    async client() {
        const { ctx } = this;
        await ctx.renderClient('home/index.js', Model.getPage(1, 10));
    }
    async pager() {
        const { ctx } = this;
        const pageIndex = ctx.query.pageIndex;
        const pageSize = ctx.query.pageSize;
        ctx.body = Model.getPage(pageIndex, pageSize);
    }
}
exports.default = HomeController;
