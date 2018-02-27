import Vue from 'vue';
import '../component';
import '../directive';
import '../filter';
export default function (options) {
    Vue.prototype.$http = require('axios');
    if (options.store) {
        options.store.replaceState(window.__INITIAL_STATE__ || {});
    }
    else if (window.__INITIAL_STATE__) {
        options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
    }
    var app = new Vue(options);
    app.$mount('#app');
}
