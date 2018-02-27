var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import clientRender from 'client';
import router from 'component/app/router';
import Layout from 'component/layout/app/index.ts';
import serverRender from 'server';
import store from 'store/app';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import app from './app.vue';
Vue.component(Layout.name, Layout);
sync(store, router);
var options = __assign({ base: '/app' }, app, { router: router,
    store: store });
export default EASY_ENV_IS_NODE ? serverRender(options) : clientRender(options);
