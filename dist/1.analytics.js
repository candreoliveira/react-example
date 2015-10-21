/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _interopRequireDefault = __webpack_require__(30)['default'];\n\nvar _componentsAnalyticsAnalytics = __webpack_require__(267);\n\nvar _componentsAnalyticsAnalytics2 = _interopRequireDefault(_componentsAnalyticsAnalytics);\n\nif (window && window.ga) {\n  (function () {\n    var analytics = new _componentsAnalyticsAnalytics2['default'](window);\n    window.document.addEventListener(\"DOMContentLoaded\", function (e) {\n      analytics.sendEvent('home', 'load', new Date().toString());\n    }, false);\n\n    window.document.addEventListener('MenuLoaded', function (e) {\n      analytics.sendEvent('menu', 'load', new Date().toString());\n    }, false);\n\n    ['HomeLoaded', 'HomeUpdated'].map(function (eventName) {\n      window.document.addEventListener(eventName, function (e) {\n        if (e.detail.pathname === '/') {\n          window.document.querySelector('a').addEventListener('click', function (e) {\n            console.log('click');\n            analytics.sendEvent('menu', 'click', new Date().toString());\n          }, false);\n        }\n      }, false);\n    });\n  })();\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./config/analytics.js\n ** module id = 0\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./config/analytics.js?");

/***/ },

/***/ 4:
/***/ function(module, exports) {

	eval("var $Object = Object;\nmodule.exports = {\n  create:     $Object.create,\n  getProto:   $Object.getPrototypeOf,\n  isEnum:     {}.propertyIsEnumerable,\n  getDesc:    $Object.getOwnPropertyDescriptor,\n  setDesc:    $Object.defineProperty,\n  setDescs:   $Object.defineProperties,\n  getKeys:    $Object.keys,\n  getNames:   $Object.getOwnPropertyNames,\n  getSymbols: $Object.getOwnPropertySymbols,\n  each:       [].forEach\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.js\n ** module id = 4\n ** module chunks = 0 1 2\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.js?");

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _Object$defineProperty = __webpack_require__(27)[\"default\"];\n\nexports[\"default\"] = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n\n      _Object$defineProperty(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n})();\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/create-class.js\n ** module id = 26\n ** module chunks = 0 1 2\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/create-class.js?");

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(28), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/object/define-property.js\n ** module id = 27\n ** module chunks = 0 1 2\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/object/define-property.js?");

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	eval("var $ = __webpack_require__(4);\nmodule.exports = function defineProperty(it, key, desc){\n  return $.setDesc(it, key, desc);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/fn/object/define-property.js\n ** module id = 28\n ** module chunks = 0 1 2\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/fn/object/define-property.js?");

/***/ },

/***/ 29:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports[\"default\"] = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/class-call-check.js\n ** module id = 29\n ** module chunks = 0 1 2\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/class-call-check.js?");

/***/ },

/***/ 30:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports[\"default\"] = function (obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/interop-require-default.js\n ** module id = 30\n ** module chunks = 0 1 2\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/interop-require-default.js?");

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = __webpack_require__(26)['default'];\n\nvar _classCallCheck = __webpack_require__(29)['default'];\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar Analytics = (function () {\n  function Analytics(window) {\n    _classCallCheck(this, Analytics);\n\n    this.window = window;\n  }\n\n  _createClass(Analytics, [{\n    key: 'sendEvent',\n    value: function sendEvent(category, action, label, value) {\n      if (this.window && this.window.ga) {\n        console.log('SEND EVENT', this.window.ga, category, action, label, value);\n        this.window.ga('send', 'event', category, action, label, value);\n      }\n    }\n  }]);\n\n  return Analytics;\n})();\n\nexports['default'] = Analytics;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./components/analytics/Analytics.js\n ** module id = 267\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./components/analytics/Analytics.js?");

/***/ }

/******/ });