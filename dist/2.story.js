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

	eval("'use strict';\n\nvar _interopRequireDefault = __webpack_require__(30)['default'];\n\nvar _arguments = arguments;\n\nvar _componentsStoryStory = __webpack_require__(268);\n\nvar _componentsStoryStory2 = _interopRequireDefault(_componentsStoryStory);\n\nif (window) {\n  (function () {\n    var story = new _componentsStoryStory2['default'](window, {\n      left: [/app/i, /story/i],\n      right: [/analytics/i]\n    });\n\n    var domNodeInsertedHandler = function domNodeInsertedHandler(e) {\n      if (e.srcElement.tagName === 'SCRIPT') {\n        story.rightDocument = story.cloneDocumentWithoutScripts('left');\n        story.documentWithoutScripts('right');\n      }\n    };\n\n    var removeDomNodeInserted = function removeDomNodeInserted() {\n      window.document.removeEventListener(\"DOMNodeInserted\", domNodeInsertedHandler);\n    };\n\n    var domContentLoadedHandler = function domContentLoadedHandler(e) {\n      removeDomNodeInserted();\n      story.rightDocument = story.cloneDocumentWithoutScripts('left');\n      story.documentWithoutScripts('right');\n      story.applyRightDocument();\n      // Remove event listener\n      e.target.removeEventListener(e.type, _arguments.callee);\n    };\n\n    window.document.addEventListener(\"DOMNodeInserted\", domNodeInsertedHandler);\n    window.document.addEventListener(\"DOMContentLoaded\", domContentLoadedHandler, true);\n  })();\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./config/story.js\n ** module id = 0\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./config/story.js?");

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

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = __webpack_require__(26)['default'];\n\nvar _classCallCheck = __webpack_require__(29)['default'];\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar Story = (function () {\n  function Story(window, config) {\n    _classCallCheck(this, Story);\n\n    this.config = config;\n    this.window = window;\n    this.document = window && window.document;\n  }\n\n  _createClass(Story, [{\n    key: 'documentWithoutScripts',\n    value: function documentWithoutScripts(side) {\n      var doc = arguments.length <= 1 || arguments[1] === undefined ? this.document : arguments[1];\n\n      if (this.config && this.config[side]) {\n        var scripts = doc.querySelectorAll('script') || [];\n        for (var i = 0; i < scripts.length; i++) {\n          var regex = RegExp((this.config[side] || []).map(function (p) {\n            return p.source;\n          }).join('|'), 'gmi');\n          if (regex.test(scripts[i].outerHTML)) {\n            scripts[i].remove();\n          }\n        }\n      }\n      return doc;\n    }\n  }, {\n    key: 'cloneDocumentWithoutScripts',\n    value: function cloneDocumentWithoutScripts(side) {\n      var document = this.document.cloneNode(true);\n      return this.documentWithoutScripts(side, document);\n    }\n  }, {\n    key: 'applyRightDocument',\n    value: function applyRightDocument() {\n      if (this.document) {\n        var iframe = this.document.createElement('iframe');\n        var html = this.rightDocument.documentElement.outerHTML;\n        this.document.body.appendChild(iframe);\n        iframe.contentWindow.document.open();\n        iframe.contentWindow.document.write(html);\n        iframe.contentWindow.document.close();\n      }\n    }\n\n    // updateDocuments() {\n    //   // TODO: Prevent recheck all nodes\n    //   this.rightDocument = this.cloneDocumentWithoutScripts('left');\n    //   this.leftDocument = this.documentWithoutScripts('right');\n    // }\n  }]);\n\n  return Story;\n})();\n\nexports['default'] = Story;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./components/story/Story.js\n ** module id = 268\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./components/story/Story.js?");

/***/ }

/******/ });