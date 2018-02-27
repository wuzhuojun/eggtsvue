'use strict';
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import * as Type from './mutation-type';
Vue.use(Vuex);
var host = 'http://127.0.0.1:7001';
var actions = {
    FETCH_ARTICLE_LIST: function (_a) {
        var commit = _a.commit, dispatch = _a.dispatch, state = _a.state;
        if (!state.articleList.length) {
            return axios.get(host + "/app/api/article/list")
                .then(function (response) {
                var data = response.data.list;
                commit(Type.SET_ARTICLE_LIST, data);
                return data;
            });
        }
        return Promise.resolve();
    },
    FETCH_ARTICLE_DETAIL: function (_a, _b) {
        var commit = _a.commit, dispatch = _a.dispatch, state = _a.state;
        var id = _b.id;
        if (state.article.id !== id) {
            return axios.get(host + "/app/api/article/" + id)
                .then(function (response) {
                var data = response.data;
                commit(Type.SET_ARTICLE_DETAIL, data);
            });
        }
        return Promise.resolve();
    },
};
export default actions;
