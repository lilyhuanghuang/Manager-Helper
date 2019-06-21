(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Demo/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "height": "100%"
  },
  ".wrapper": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%"
  },
  ".search-btn": {
    "marginTop": "20px",
    "paddingLeft": "30px",
    "width": "90%",
    "height": "66px",
    "fontSize": "20px",
    "color": "#333333",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopColor": "#141414",
    "borderRightColor": "#141414",
    "borderBottomColor": "#141414",
    "borderLeftColor": "#141414",
    "borderRadius": "33px"
  },
  ".search-image": {
    "position": "fixed",
    "top": "25px",
    "right": "50px",
    "width": "50px",
    "height": "50px"
  },
  ".placeholder": {
    "position": "fixed",
    "top": "500px",
    "left": "220px",
    "width": "100px"
  },
  ".add": {
    "position": "fixed",
    "right": "50px",
    "bottom": "50px",
    "width": "50px",
    "height": "50px"
  },
  ".item-detail": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "30px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#FF0000",
    "borderRightColor": "#FF0000",
    "borderBottomColor": "#FF0000",
    "borderLeftColor": "#FF0000"
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/itemDetail/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/itemDetail/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".list": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".input": {
    "width": "400px",
    "borderRadius": "50px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#141414",
    "borderRightColor": "#141414",
    "borderBottomColor": "#141414",
    "borderLeftColor": "#141414"
  },
  ".label-name": {
    "fontSize": "22px"
  },
  ".label-address": {
    "fontSize": "22px"
  },
  ".label-pic": {
    "fontSize": "22px"
  },
  ".name": {
    "marginTop": "40px",
    "flexDirection": "row"
  },
  ".address": {
    "marginTop": "40px",
    "flexDirection": "row"
  },
  ".pic": {
    "marginTop": "40px",
    "flexDirection": "row"
  },
  ".submit": {
    "marginTop": "400px",
    "width": "200px",
    "height": "66px",
    "backgroundColor": "#ffffff",
    "color": "#141414",
    "fontSize": "22px",
    "borderRadius": "33px"
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&importNames[]=itemdetail":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&importNames[]=itemdetail ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "stack",
      "attr": {},
      "classList": [
        "wrapper"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "id": "searchVal",
            "type": "text",
            "placeholder": "点击搜索",
            "value": function () {return this.searchValue}
          },
          "id": "searchVal",
          "classList": [
            "search-btn"
          ],
          "events": {
            "change": "changeValue"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Demo/img/search.png"
          },
          "classList": [
            "search-image"
          ],
          "events": {
            "click": "search"
          }
        }
      ]
    },
    {
      "type": "image",
      "attr": {
        "src": "/Demo/img/Forklift.png"
      },
      "shown": function () {return this.isShowPlaceholder},
      "classList": [
        "placeholder"
      ]
    },
    {
      "type": "image",
      "attr": {
        "src": "/Demo/img/add.png"
      },
      "classList": [
        "add"
      ],
      "events": {
        "click": "addNewItem"
      }
    },
    {
      "type": "itemdetail",
      "attr": {
        "result": function () {return this.results}
      },
      "shown": function () {return !this.isShowPlaceholder},
      "classList": [
        "item-detail"
      ],
      "events": {
        "close-item-detail-page": "closeItemDetailPage"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/itemDetail/index.ux?uxType=comp&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/itemDetail/index.ux?uxType=comp& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "listItem"
          },
          "classList": [
            "list"
          ],
          "repeat": {
            "exp": function () {return this.result},
            "key": "index",
            "value": "item"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "name"
              ],
              "children": [
                {
                  "type": "label",
                  "attr": {
                    "value": "名 称："
                  },
                  "classList": [
                    "label-name"
                  ]
                },
                {
                  "type": "input",
                  "attr": {
                    "type": "text",
                    "value": function () {return this.item.name}
                  },
                  "classList": [
                    "input",
                    "input-name"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "address"
              ],
              "children": [
                {
                  "type": "label",
                  "attr": {
                    "value": "地 址："
                  },
                  "classList": [
                    "label-address"
                  ]
                },
                {
                  "type": "input",
                  "attr": {
                    "type": "text",
                    "value": function () {return this.item.address}
                  },
                  "classList": [
                    "input",
                    "input-address"
                  ]
                }
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.item.pic}
              }
            },
            {
              "type": "input",
              "attr": {
                "type": "button",
                "value": "返回"
              },
              "classList": [
                "submit"
              ],
              "events": {
                "click": "closeItemDetailPage"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&plugins[]=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&plugins[]=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  data: {
    title: '示例页面',
    isShowPlaceholder: true,
    searchValue: '',
    results: [{
      "_id": "",
      "name": "",
      "address": "",
      "pic": ""
    }]
  },
  routeDetail: function routeDetail() {
    _system["default"].push({
      uri: '/DemoDetail'
    });
  },
  changeValue: function changeValue(e) {
    console.log(e);
    this.searchValue = e.value;
  },
  closeItemDetailPage: function closeItemDetailPage() {
    this.isShowPlaceholder = true;
  },
  search: function search() {
    this.isShowPlaceholder = false;
    var searchVal = this.$element("searchVal");
    searchVal.focus({
      focus: false
    });

    var _this = this;

    _system2["default"].fetch({
      url: 'http://10.235.232.181:8001/search',
      data: {
        "name": this.searchValue
      },
      success: function success(res) {
        if (res.code === 200) {
          _this.results = JSON.parse(res.data);
          console.log(JSON.parse(res.data));
        }
      },
      fail: function fail(err) {
        console.log(err);
      }
    });
  },
  addNewItem: function addNewItem() {
    _system["default"].push({
      uri: '/addNewItem'
    });
  }
};
exports["default"] = _default;
var moduleOwn = exports["default"] || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&plugins[]=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/itemDetail/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&plugins[]=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/itemDetail/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: ['result'],
  data: {},
  closeItemDetailPage: function closeItemDetailPage() {
    this.$dispatch('closeItemDetailPage');
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&type=import!./src/itemDetail/index.ux?uxType=comp&name=itemdetail":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&type=import!./src/itemDetail/index.ux?uxType=comp&name=itemdetail ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/itemDetail/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/itemDetail/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../node_modules/babel-loader?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&plugins[]=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&plugins[]=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/itemDetail/index.ux?uxType=comp")

$app_define$('@app-component/itemdetail', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./src/Demo/index.ux?uxType=page":
/*!***************************************!*\
  !*** ./src/Demo/index.ux?uxType=page ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&type=import!../itemDetail/index.ux?uxType=comp&name=itemdetail */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&type=import!./src/itemDetail/index.ux?uxType=comp&name=itemdetail")
var $app_template$ = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=itemdetail */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&importNames[]=itemdetail")
var $app_style$ = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../node_modules/babel-loader?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&plugins[]=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant&plugins[]=/Users/lily/Desktop/ManagerAssistant/Manager-Helper/Assistant/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.4.7'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map