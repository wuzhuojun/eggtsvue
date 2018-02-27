'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class AboutController extends egg_1.Controller {
    async index() {
        await this.ctx.render('about/about.js', { message: 'vue server side render!' });
    }
}
exports.default = AboutController;
