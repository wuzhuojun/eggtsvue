import Vue from 'vue';
import '../component';
import '../directive';
import '../filter';
export default function render(options) {
    if (options.store && options.router) {
        return function (context) {
            options.router.push(context.state.url);
            var matchedComponents = options.router.getMatchedComponents();
            if (!matchedComponents) {
                return Promise.reject({ code: '404' });
            }
            return Promise.all(matchedComponents.map(function (component) {
                if (component.preFetch) {
                    return component.preFetch(options.store);
                }
                return null;
            })).then(function () {
                context.state = options.store.state;
                return new Vue(options);
            });
        };
    }
    return function (context) {
        var VueApp = Vue.extend(options);
        var app = new VueApp({ data: context.state });
        return new Promise(function (resolve) {
            resolve(app);
        });
    };
}
