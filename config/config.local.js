"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const ip = require("ip");
exports.default = (app) => {
    const exports = {};
    exports.static = {
        maxAge: 0 // maxAge 缓存，默认 1 年
    };
    exports.development = {
        watchDirs: ['build'],
        ignoreDirs: ['app/web', 'public', 'config'] // 指定过滤的目录（包括子目录）
    };
    exports.logview = {
        dir: path.join(app.baseDir, 'logs')
    };
    exports.vuessr = {
        injectCss: false
    };
    const localIP = ip.address();
    const domainWhiteList = [];
    [7001, 9000, 9001].forEach(port => {
        domainWhiteList.push(`http://localhost:${port}`);
        domainWhiteList.push(`http://127.0.0.1:${port}`);
        domainWhiteList.push(`http://${localIP}:${port}`);
    });
    exports.security = { domainWhiteList };
    return exports;
};
