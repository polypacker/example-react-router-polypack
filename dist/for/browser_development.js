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

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = render;\nexports.default = renderRouter;\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(6);\n\nvar _reactDom = __webpack_require__(5);\n\nvar _history = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _window$location = window.location,\n    pathname = _window$location.pathname,\n    search = _window$location.search,\n    hash = _window$location.hash;\n\nvar location = '' + pathname + search + hash;\n\nfunction render(_ref) {\n  var routes = _ref.routes,\n      _ref$rootAppId = _ref.rootAppId,\n      rootAppId = _ref$rootAppId === undefined ? 'app' : _ref$rootAppId;\n\n  (0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { routes: routes, history: (0, _history.createHistory)() }), document.getElementById(rootAppId));\n}\n\n// calling `match` is simply for side effects of\n// loading route/component code for the initial location\nfunction renderRouter(_ref2) {\n  var routes = _ref2.routes,\n      _ref2$rootAppId = _ref2.rootAppId,\n      rootAppId = _ref2$rootAppId === undefined ? 'app' : _ref2$rootAppId;\n\n  (0, _reactRouter.match)({ routes: routes, location: location }, function (_) {\n    render({ routes: routes, rootAppId: rootAppId });\n  });\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGllbnQuanM/ZmU2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbmRlciA9IHJlbmRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlbmRlclJvdXRlcjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0Um91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZSgnaGlzdG9yeScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX3dpbmRvdyRsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbixcbiAgICBwYXRobmFtZSA9IF93aW5kb3ckbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgaGFzaCA9IF93aW5kb3ckbG9jYXRpb24uaGFzaDtcblxudmFyIGxvY2F0aW9uID0gJycgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG5cbmZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gIHZhciByb3V0ZXMgPSBfcmVmLnJvdXRlcyxcbiAgICAgIF9yZWYkcm9vdEFwcElkID0gX3JlZi5yb290QXBwSWQsXG4gICAgICByb290QXBwSWQgPSBfcmVmJHJvb3RBcHBJZCA9PT0gdW5kZWZpbmVkID8gJ2FwcCcgOiBfcmVmJHJvb3RBcHBJZDtcblxuICAoMCwgX3JlYWN0RG9tLnJlbmRlcikoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0Um91dGVyLlJvdXRlciwgeyByb3V0ZXM6IHJvdXRlcywgaGlzdG9yeTogKDAsIF9oaXN0b3J5LmNyZWF0ZUhpc3RvcnkpKCkgfSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb3RBcHBJZCkpO1xufVxuXG4vLyBjYWxsaW5nIGBtYXRjaGAgaXMgc2ltcGx5IGZvciBzaWRlIGVmZmVjdHMgb2Zcbi8vIGxvYWRpbmcgcm91dGUvY29tcG9uZW50IGNvZGUgZm9yIHRoZSBpbml0aWFsIGxvY2F0aW9uXG5mdW5jdGlvbiByZW5kZXJSb3V0ZXIoX3JlZjIpIHtcbiAgdmFyIHJvdXRlcyA9IF9yZWYyLnJvdXRlcyxcbiAgICAgIF9yZWYyJHJvb3RBcHBJZCA9IF9yZWYyLnJvb3RBcHBJZCxcbiAgICAgIHJvb3RBcHBJZCA9IF9yZWYyJHJvb3RBcHBJZCA9PT0gdW5kZWZpbmVkID8gJ2FwcCcgOiBfcmVmMiRyb290QXBwSWQ7XG5cbiAgKDAsIF9yZWFjdFJvdXRlci5tYXRjaCkoeyByb3V0ZXM6IHJvdXRlcywgbG9jYXRpb246IGxvY2F0aW9uIH0sIGZ1bmN0aW9uIChfKSB7XG4gICAgcmVuZGVyKHsgcm91dGVzOiByb3V0ZXMsIHJvb3RBcHBJZDogcm9vdEFwcElkIH0pO1xuICB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NsaWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar _ref =  false ? require('./server') : __webpack_require__(1),\n    render = _ref.render,\n    router = _ref.default,\n    utils = _objectWithoutProperties(_ref, ['render', 'default']);\n\nexports.render = render;\nexports.utils = utils;\nexports.default = router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz8xOTU4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX3JlZiA9ICRFUy5DT05URVhUID09ICdOT0RFJyA/IHJlcXVpcmUoJy4vc2VydmVyJykgOiByZXF1aXJlKCcuL2NsaWVudCcpLFxuICAgIHJlbmRlciA9IF9yZWYucmVuZGVyLFxuICAgIHJvdXRlciA9IF9yZWYuZGVmYXVsdCxcbiAgICB1dGlscyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3JlbmRlcicsICdkZWZhdWx0J10pO1xuXG5leHBvcnRzLnJlbmRlciA9IHJlbmRlcjtcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcbmV4cG9ydHMuZGVmYXVsdCA9IHJvdXRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("history");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ }
/******/ ]);