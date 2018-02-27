import MainLayout from './main.vue';
var content = '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';
var template = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>{{title}}</title>\n  <meta name=\"keywords\" :content=\"keywords\">\n  <meta name=\"description\" :content=\"description\">\n  <meta http-equiv=\"content-type\" content=\"text/html;charset=utf-8\">\n  <meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui\">\n  <link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\" />\n</head>\n<body :class=\"baseClass\">\n  <div id=\"app\">" + content + "</div>\n</body>\n</html>";
export default {
    components: {
        MainLayout: MainLayout,
    },
    computed: {
        vTitle: function () {
            return this.$root.title || this.title || 'Egg + Vue';
        },
        vKeywords: function () {
            return this.$root.keywords || this.keywords || 'egg, vue, webpack, server side render';
        },
        vDescription: function () {
            return this.$root.description || this.description || 'egg-vue-webpack server side render';
        },
        baseClass: function () {
            return this.$root.baseClass;
        },
    },
    name: 'Layout',
    props: ['title', 'description', 'keywords'],
    template: EASY_ENV_IS_NODE ? template : content,
};
