'use strict';
import { SET_ARTICLE_DETAIL, SET_ARTICLE_LIST, } from './mutation-type';
var mutations = (_a = {},
    _a[SET_ARTICLE_LIST] = function (state, items) {
        state.articleList = items;
    },
    _a[SET_ARTICLE_DETAIL] = function (state, data) {
        state.article = data;
    },
    _a);
export default mutations;
var _a;
