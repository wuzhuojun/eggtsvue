webpackJsonp([2],{

/***/ "./app/web/asset/images/loading.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.gif";

/***/ }),

/***/ "./app/web/page/home/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/web/page/home/index.vue");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bdf384be_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bdf384be\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/web/page/home/index.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdf384be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/postcss-loader/lib/index.js?{}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/web/page/home/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bdf384be_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app\\web\\page\\home\\index.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__("./node_modules/vue-loader/node_modules/vue-hot-reload-api/dist/index.js")
  hotAPI.install(__webpack_require__("./node_modules/vue/dist/vue.esm.js"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bdf384be", Component.options)
  } else {
    hotAPI.reload("data-v-bdf384be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./app/web/framework/vue/entry/client-loader.ts!./app/web/page/home/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_client__ = __webpack_require__("./app/web/framework/vue/entry/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d_code_easywebpack_eggtsvue_app_web_page_home_index_vue__ = __webpack_require__("./app/web/page/home/index.vue");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_client__["a" /* default */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_d_code_easywebpack_eggtsvue_app_web_page_home_index_vue__["a" /* default */])));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/web/page/home/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  data: function data() {
    return {
      isFinish: false,
      isLoading: false,
      pageIndex: 1,
      pageSize: 10
    };
  },

  computed: {
    lists: function lists() {
      return this.list;
    }
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      this.$http.get(location.origin + '/pager?pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize).then(function (res) {
        console.log('res', res);
        if (res.data.list && res.data.list.length) {
          _this.total = res.data.total;
          _this.list = _this.list.concat(res.data.list);
        } else {
          _this.isFinish = true;
        }
        _this.isLoading = false;
      });
    },
    loadPage: function loadPage() {
      var _this2 = this;

      if (!this.isFinish && !this.isLoading) {
        this.isLoading = true;
        this.pageIndex++;
        setTimeout(function () {
          _this2.fetch();
        }, 1500);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    window.addEventListener('scroll', function () {
      _this3.loadPage();
    }, false);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"minimize\":false}!./app/web/page/home/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"minimize\":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdf384be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/postcss-loader/lib/index.js?{}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/web/page/home/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("./node_modules/css-loader/index.js?{\"minimize\":false}!./app/web/page/home/index.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bdf384be\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/web/page/home/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Layout",
    {
      attrs: {
        description: "vue server side render",
        keywords: "egg, vue, webpack, server side render"
      }
    },
    [
      _c("div", { staticClass: "container smart-container" }, [
        _c("div", { staticClass: "row row-offcanvas row-offcanvas-right" }, [
          _c("div", { staticClass: "col-xs-12 col-sm-9" }, [
            _c(
              "ul",
              { staticClass: "smart-artiles", attrs: { id: "articleList" } },
              _vm._l(_vm.lists, function(item) {
                return _c("li", { key: item.id }, [
                  _c("div", { staticClass: "point" }, [
                    _vm._v("+" + _vm._s(item.hits))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("h2", [
                      _c("a", { attrs: { href: item.url, target: "_blank" } }, [
                        _vm._v(_vm._s(item.title))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("ul", { staticClass: "actions" }, [
                        _c("li", [
                          _c("time", { staticClass: "timeago" }, [
                            _vm._v(_vm._s(item.moduleName))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "tauthor" }, [
                          _c(
                            "a",
                            {
                              staticClass: "get",
                              attrs: { href: "#", target: "_blank" }
                            },
                            [_vm._v("Sky")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_c("a", [_vm._v("+收藏")])]),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", { staticClass: "timeago" }, [
                            _vm._v(_vm._s(item.summary))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [_c("span", { staticClass: "timeago" })])
                      ])
                    ])
                  ])
                ])
              })
            ),
            _vm._v(" "),
            _vm.isLoading
              ? _c(
                  "div",
                  { staticClass: "smart-pager", attrs: { id: "pagerBottom" } },
                  [
                    _c("img", {
                      attrs: { src: __webpack_require__("./app/web/asset/images/loading.gif") }
                    })
                  ]
                )
              : _vm._e()
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__("./node_modules/vue-loader/node_modules/vue-hot-reload-api/dist/index.js")      .rerender("data-v-bdf384be", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdf384be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/postcss-loader/lib/index.js?{}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/web/page/home/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"minimize\":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdf384be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/postcss-loader/lib/index.js?{}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/web/page/home/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("002fdbd2", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/css-loader/index.js?{\"minimize\":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdf384be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/postcss-loader/lib/index.js?{}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/web/page/home/index.vue", function() {
     var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"minimize\":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdf384be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/postcss-loader/lib/index.js?{}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/web/page/home/index.vue");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=http://127.0.0.1:9000/__webpack_hmr&noInfo=false&reload=false&quiet=false");
module.exports = __webpack_require__("./node_modules/babel-loader/lib/index.js!./app/web/framework/vue/entry/client-loader.ts!./app/web/page/home/index.vue");


/***/ }),

/***/ "dll-reference vendor":
/***/ (function(module, exports) {

module.exports = vendor;

/***/ })

},[2]);