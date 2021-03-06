module.exports =
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar _ref =  true ? __webpack_require__(2) : require('./client'),\n    render = _ref.render,\n    router = _ref.default,\n    utils = _objectWithoutProperties(_ref, ['render', 'default']);\n\nexports.render = render;\nexports.utils = utils;\nexports.default = router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz8xOTU4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX3JlZiA9ICRFUy5DT05URVhUID09ICdOT0RFJyA/IHJlcXVpcmUoJy4vc2VydmVyJykgOiByZXF1aXJlKCcuL2NsaWVudCcpLFxuICAgIHJlbmRlciA9IF9yZWYucmVuZGVyLFxuICAgIHJvdXRlciA9IF9yZWYuZGVmYXVsdCxcbiAgICB1dGlscyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3JlbmRlcicsICdkZWZhdWx0J10pO1xuXG5leHBvcnRzLnJlbmRlciA9IHJlbmRlcjtcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcbmV4cG9ydHMuZGVmYXVsdCA9IHJvdXRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.render = render;\nexports.renderToTemplate = renderToTemplate;\nexports.default = requestRouter;\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(4);\n\nvar _reactRouter = __webpack_require__(5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction defaultHtmlTemplate(str) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$title = _ref.title,\n      title = _ref$title === undefined ? 'My Universal App' : _ref$title,\n      _ref$rootAppId = _ref.rootAppId,\n      rootAppId = _ref$rootAppId === undefined ? 'app' : _ref$rootAppId;\n\n  return '\\n  <!doctype html>\\n  <html>\\n    <head>\\n      <meta charset=\"utf-8\"/>\\n      <title>' + title + '</title>\\n    </head>\\n    <body>\\n      <div id=\"' + rootAppId + '\">' + str + '</div>\\n      <script src=\"/dist/browser_' + (\"DEVELOPMENT\").toLowerCase() + '.js\"></script>\\n    </body>\\n  </html>\\n  ';\n}\n\nfunction render() {\n  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  return (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, props));\n}\n\nfunction renderToTemplate() {\n  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var _ref2 = arguments[1];\n\n  var _ref2$template = _ref2.template,\n      template = _ref2$template === undefined ? defaultHtmlTemplate : _ref2$template,\n      templateOptions = _objectWithoutProperties(_ref2, ['template']);\n\n  return template((0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, props)), templateOptions);\n}\n\nfunction requestRouter(_ref3) {\n  var routes = _ref3.routes,\n      _ref3$messages = _ref3.messages;\n  _ref3$messages = _ref3$messages === undefined ? {} : _ref3$messages;\n\n  var _ref3$messages$not_fo = _ref3$messages.not_found,\n      not_found = _ref3$messages$not_fo === undefined ? 'Not found' : _ref3$messages$not_fo,\n      _ref3$template = _ref3.template,\n      template = _ref3$template === undefined ? defaultHtmlTemplate : _ref3$template,\n      templateOptions = _objectWithoutProperties(_ref3, ['routes', 'messages', 'template']);\n\n  return function (request, handler) {\n    (0, _reactRouter.match)({ routes: routes, location: request.url }, function (error, redirectLocation, props) {\n      if (error) {\n        handler({ status: 500, payload: template(error.message, templateOptions) });\n      } else if (redirectLocation) {\n        handler({ redirect: true, status: 302, payload: redirectLocation.pathname + redirectLocation.search });\n      } else if (props) {\n        handler({ status: 200, payload: renderToTemplate(props, _extends({ template: template }, templateOptions)) });\n      } else {\n        handler({ status: 404, payload: template(messages.not_found, templateOptions) });\n      }\n    });\n  };\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIuanM/ODBlNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyO1xuZXhwb3J0cy5yZW5kZXJUb1RlbXBsYXRlID0gcmVuZGVyVG9UZW1wbGF0ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlcXVlc3RSb3V0ZXI7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9zZXJ2ZXIgPSByZXF1aXJlKCdyZWFjdC1kb20vc2VydmVyJyk7XG5cbnZhciBfcmVhY3RSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBkZWZhdWx0SHRtbFRlbXBsYXRlKHN0cikge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICBfcmVmJHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIHRpdGxlID0gX3JlZiR0aXRsZSA9PT0gdW5kZWZpbmVkID8gJ015IFVuaXZlcnNhbCBBcHAnIDogX3JlZiR0aXRsZSxcbiAgICAgIF9yZWYkcm9vdEFwcElkID0gX3JlZi5yb290QXBwSWQsXG4gICAgICByb290QXBwSWQgPSBfcmVmJHJvb3RBcHBJZCA9PT0gdW5kZWZpbmVkID8gJ2FwcCcgOiBfcmVmJHJvb3RBcHBJZDtcblxuICByZXR1cm4gJ1xcbiAgPCFkb2N0eXBlIGh0bWw+XFxuICA8aHRtbD5cXG4gICAgPGhlYWQ+XFxuICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxcbiAgICAgIDx0aXRsZT4nICsgdGl0bGUgKyAnPC90aXRsZT5cXG4gICAgPC9oZWFkPlxcbiAgICA8Ym9keT5cXG4gICAgICA8ZGl2IGlkPVwiJyArIHJvb3RBcHBJZCArICdcIj4nICsgc3RyICsgJzwvZGl2PlxcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Rpc3QvYnJvd3Nlcl8nICsgJEVTLkVOVi50b0xvd2VyQ2FzZSgpICsgJy5qc1wiPjwvc2NyaXB0PlxcbiAgICA8L2JvZHk+XFxuICA8L2h0bWw+XFxuICAnO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgcmV0dXJuICgwLCBfc2VydmVyLnJlbmRlclRvU3RyaW5nKShfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RSb3V0ZXIuUm91dGluZ0NvbnRleHQsIHByb3BzKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvVGVtcGxhdGUoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfcmVmMiA9IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgX3JlZjIkdGVtcGxhdGUgPSBfcmVmMi50ZW1wbGF0ZSxcbiAgICAgIHRlbXBsYXRlID0gX3JlZjIkdGVtcGxhdGUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRIdG1sVGVtcGxhdGUgOiBfcmVmMiR0ZW1wbGF0ZSxcbiAgICAgIHRlbXBsYXRlT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWyd0ZW1wbGF0ZSddKTtcblxuICByZXR1cm4gdGVtcGxhdGUoKDAsIF9zZXJ2ZXIucmVuZGVyVG9TdHJpbmcpKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFJvdXRlci5Sb3V0aW5nQ29udGV4dCwgcHJvcHMpKSwgdGVtcGxhdGVPcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdFJvdXRlcihfcmVmMykge1xuICB2YXIgcm91dGVzID0gX3JlZjMucm91dGVzLFxuICAgICAgX3JlZjMkbWVzc2FnZXMgPSBfcmVmMy5tZXNzYWdlcztcbiAgX3JlZjMkbWVzc2FnZXMgPSBfcmVmMyRtZXNzYWdlcyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMyRtZXNzYWdlcztcblxuICB2YXIgX3JlZjMkbWVzc2FnZXMkbm90X2ZvID0gX3JlZjMkbWVzc2FnZXMubm90X2ZvdW5kLFxuICAgICAgbm90X2ZvdW5kID0gX3JlZjMkbWVzc2FnZXMkbm90X2ZvID09PSB1bmRlZmluZWQgPyAnTm90IGZvdW5kJyA6IF9yZWYzJG1lc3NhZ2VzJG5vdF9mbyxcbiAgICAgIF9yZWYzJHRlbXBsYXRlID0gX3JlZjMudGVtcGxhdGUsXG4gICAgICB0ZW1wbGF0ZSA9IF9yZWYzJHRlbXBsYXRlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0SHRtbFRlbXBsYXRlIDogX3JlZjMkdGVtcGxhdGUsXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjMsIFsncm91dGVzJywgJ21lc3NhZ2VzJywgJ3RlbXBsYXRlJ10pO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICgwLCBfcmVhY3RSb3V0ZXIubWF0Y2gpKHsgcm91dGVzOiByb3V0ZXMsIGxvY2F0aW9uOiByZXF1ZXN0LnVybCB9LCBmdW5jdGlvbiAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHByb3BzKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlcih7IHN0YXR1czogNTAwLCBwYXlsb2FkOiB0ZW1wbGF0ZShlcnJvci5tZXNzYWdlLCB0ZW1wbGF0ZU9wdGlvbnMpIH0pO1xuICAgICAgfSBlbHNlIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XG4gICAgICAgIGhhbmRsZXIoeyByZWRpcmVjdDogdHJ1ZSwgc3RhdHVzOiAzMDIsIHBheWxvYWQ6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgKyByZWRpcmVjdExvY2F0aW9uLnNlYXJjaCB9KTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMpIHtcbiAgICAgICAgaGFuZGxlcih7IHN0YXR1czogMjAwLCBwYXlsb2FkOiByZW5kZXJUb1RlbXBsYXRlKHByb3BzLCBfZXh0ZW5kcyh7IHRlbXBsYXRlOiB0ZW1wbGF0ZSB9LCB0ZW1wbGF0ZU9wdGlvbnMpKSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZXIoeyBzdGF0dXM6IDQwNCwgcGF5bG9hZDogdGVtcGxhdGUobWVzc2FnZXMubm90X2ZvdW5kLCB0ZW1wbGF0ZU9wdGlvbnMpIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc2VydmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ }
/******/ ]);