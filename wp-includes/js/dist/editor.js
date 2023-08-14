this["wp"] = this["wp"] || {}; this["wp"]["editor"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "PLxR");
/******/ })
/************************************************************************/
/******/ ({

/***/ "//kF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const footer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M18 5.5h-8v8h8.5V6a.5.5 0 00-.5-.5zm-9.5 8h-3V6a.5.5 0 01.5-.5h2.5v8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (footer);


/***/ }),

/***/ "16Al":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("WbBG");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "17x9":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("16Al")();
}


/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "51Zz":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ "6aBm":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["mediaUtils"]; }());

/***/ }),

/***/ "7fqt":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["wordcount"]; }());

/***/ }),

/***/ "CNgt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__("cDcd");
var PropTypes = __webpack_require__("17x9");
var autosize = __webpack_require__("GemG");
var _getLineHeight = __webpack_require__("Rk8H");
var getLineHeight = _getLineHeight;
var RESIZED = "autosize:resized";
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosizeClass = /** @class */ (function (_super) {
    __extends(TextareaAutosizeClass, _super);
    function TextareaAutosizeClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.textarea = null;
        _this.onResize = function (e) {
            if (_this.props.onResize) {
                _this.props.onResize(e);
            }
        };
        _this.updateLineHeight = function () {
            if (_this.textarea) {
                _this.setState({
                    lineHeight: getLineHeight(_this.textarea)
                });
            }
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        return _this;
    }
    TextareaAutosizeClass.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, maxRows = _a.maxRows, async = _a.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () { return _this.textarea && autosize(_this.textarea); });
        }
        else {
            this.textarea && autosize(this.textarea);
        }
        if (this.textarea) {
            this.textarea.addEventListener(RESIZED, this.onResize);
        }
    };
    TextareaAutosizeClass.prototype.componentWillUnmount = function () {
        if (this.textarea) {
            this.textarea.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea);
        }
    };
    TextareaAutosizeClass.prototype.render = function () {
        var _this = this;
        var _a = this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, children = _b.children, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]), lineHeight = _a.state.lineHeight;
        var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
        return (React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: function (element) {
                _this.textarea = element;
                if (typeof _this.props.innerRef === 'function') {
                    _this.props.innerRef(element);
                }
                else if (_this.props.innerRef) {
                    _this.props.innerRef.current = element;
                }
            } }), children));
    };
    TextareaAutosizeClass.prototype.componentDidUpdate = function () {
        this.textarea && autosize.update(this.textarea);
    };
    TextareaAutosizeClass.defaultProps = {
        rows: 1,
        async: false
    };
    TextareaAutosizeClass.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.any,
        async: PropTypes.bool
    };
    return TextareaAutosizeClass;
}(React.Component));
exports.TextareaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextareaAutosizeClass, __assign({}, props, { innerRef: ref }));
});


/***/ }),

/***/ "Civd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const layout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (layout);


/***/ }),

/***/ "FnAh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const info = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (info);


/***/ }),

/***/ "FqII":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),

/***/ "G8mJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const header = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (header);


/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "GemG":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "JREk":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ }),

/***/ "K2cm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const redo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (redo);


/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "Mmq9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "NMb1":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["deprecated"]; }());

/***/ }),

/***/ "Ntru":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const undo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ __webpack_exports__["a"] = (undo);


/***/ }),

/***/ "O6Fj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__("CNgt");
exports["default"] = TextareaAutosize_1.TextareaAutosize;


/***/ }),

/***/ 4793:
/***/ (function(module) {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"ß": "ss",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
	"й":"и",
	"Й":"И",
	"ё":"е",
	"Ё":"Е",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const symbolFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
}));
/* harmony default export */ __webpack_exports__["a"] = (symbolFilled);


/***/ }),

/***/ "PLxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AlignmentToolbar": function() { return /* reexport */ AlignmentToolbar; },
  "Autocomplete": function() { return /* reexport */ Autocomplete; },
  "AutosaveMonitor": function() { return /* reexport */ autosave_monitor; },
  "BlockAlignmentToolbar": function() { return /* reexport */ BlockAlignmentToolbar; },
  "BlockControls": function() { return /* reexport */ BlockControls; },
  "BlockEdit": function() { return /* reexport */ BlockEdit; },
  "BlockEditorKeyboardShortcuts": function() { return /* reexport */ BlockEditorKeyboardShortcuts; },
  "BlockFormatControls": function() { return /* reexport */ BlockFormatControls; },
  "BlockIcon": function() { return /* reexport */ BlockIcon; },
  "BlockInspector": function() { return /* reexport */ BlockInspector; },
  "BlockList": function() { return /* reexport */ BlockList; },
  "BlockMover": function() { return /* reexport */ BlockMover; },
  "BlockNavigationDropdown": function() { return /* reexport */ BlockNavigationDropdown; },
  "BlockSelectionClearer": function() { return /* reexport */ BlockSelectionClearer; },
  "BlockSettingsMenu": function() { return /* reexport */ BlockSettingsMenu; },
  "BlockTitle": function() { return /* reexport */ BlockTitle; },
  "BlockToolbar": function() { return /* reexport */ BlockToolbar; },
  "CharacterCount": function() { return /* reexport */ CharacterCount; },
  "ColorPalette": function() { return /* reexport */ ColorPalette; },
  "ContrastChecker": function() { return /* reexport */ ContrastChecker; },
  "CopyHandler": function() { return /* reexport */ CopyHandler; },
  "DefaultBlockAppender": function() { return /* reexport */ DefaultBlockAppender; },
  "DocumentOutline": function() { return /* reexport */ document_outline; },
  "DocumentOutlineCheck": function() { return /* reexport */ check; },
  "EditorHistoryRedo": function() { return /* reexport */ editor_history_redo; },
  "EditorHistoryUndo": function() { return /* reexport */ editor_history_undo; },
  "EditorKeyboardShortcutsRegister": function() { return /* reexport */ register_shortcuts; },
  "EditorNotices": function() { return /* reexport */ editor_notices; },
  "EditorProvider": function() { return /* reexport */ provider; },
  "EditorSnackbars": function() { return /* reexport */ EditorSnackbars; },
  "EntitiesSavedStates": function() { return /* reexport */ EntitiesSavedStates; },
  "ErrorBoundary": function() { return /* reexport */ error_boundary; },
  "FontSizePicker": function() { return /* reexport */ FontSizePicker; },
  "InnerBlocks": function() { return /* reexport */ InnerBlocks; },
  "Inserter": function() { return /* reexport */ Inserter; },
  "InspectorAdvancedControls": function() { return /* reexport */ InspectorAdvancedControls; },
  "InspectorControls": function() { return /* reexport */ InspectorControls; },
  "LocalAutosaveMonitor": function() { return /* reexport */ local_autosave_monitor; },
  "MediaPlaceholder": function() { return /* reexport */ MediaPlaceholder; },
  "MediaUpload": function() { return /* reexport */ MediaUpload; },
  "MediaUploadCheck": function() { return /* reexport */ MediaUploadCheck; },
  "MultiSelectScrollIntoView": function() { return /* reexport */ MultiSelectScrollIntoView; },
  "NavigableToolbar": function() { return /* reexport */ NavigableToolbar; },
  "ObserveTyping": function() { return /* reexport */ ObserveTyping; },
  "PageAttributesCheck": function() { return /* reexport */ page_attributes_check; },
  "PageAttributesOrder": function() { return /* reexport */ order; },
  "PageAttributesParent": function() { return /* reexport */ page_attributes_parent; },
  "PageTemplate": function() { return /* reexport */ post_template; },
  "PanelColorSettings": function() { return /* reexport */ PanelColorSettings; },
  "PlainText": function() { return /* reexport */ PlainText; },
  "PostAuthor": function() { return /* reexport */ post_author; },
  "PostAuthorCheck": function() { return /* reexport */ PostAuthorCheck; },
  "PostComments": function() { return /* reexport */ post_comments; },
  "PostExcerpt": function() { return /* reexport */ post_excerpt; },
  "PostExcerptCheck": function() { return /* reexport */ post_excerpt_check; },
  "PostFeaturedImage": function() { return /* reexport */ post_featured_image; },
  "PostFeaturedImageCheck": function() { return /* reexport */ post_featured_image_check; },
  "PostFormat": function() { return /* reexport */ PostFormat; },
  "PostFormatCheck": function() { return /* reexport */ post_format_check; },
  "PostLastRevision": function() { return /* reexport */ post_last_revision; },
  "PostLastRevisionCheck": function() { return /* reexport */ post_last_revision_check; },
  "PostLockedModal": function() { return /* reexport */ PostLockedModal; },
  "PostPendingStatus": function() { return /* reexport */ post_pending_status; },
  "PostPendingStatusCheck": function() { return /* reexport */ post_pending_status_check; },
  "PostPingbacks": function() { return /* reexport */ post_pingbacks; },
  "PostPreviewButton": function() { return /* reexport */ post_preview_button; },
  "PostPublishButton": function() { return /* reexport */ post_publish_button; },
  "PostPublishButtonLabel": function() { return /* reexport */ label; },
  "PostPublishPanel": function() { return /* reexport */ post_publish_panel; },
  "PostSavedState": function() { return /* reexport */ PostSavedState; },
  "PostSchedule": function() { return /* reexport */ PostSchedule; },
  "PostScheduleCheck": function() { return /* reexport */ post_schedule_check; },
  "PostScheduleLabel": function() { return /* reexport */ PostScheduleLabel; },
  "PostSlug": function() { return /* reexport */ post_slug; },
  "PostSlugCheck": function() { return /* reexport */ PostSlugCheck; },
  "PostSticky": function() { return /* reexport */ post_sticky; },
  "PostStickyCheck": function() { return /* reexport */ post_sticky_check; },
  "PostSwitchToDraftButton": function() { return /* reexport */ post_switch_to_draft_button; },
  "PostSyncStatus": function() { return /* reexport */ PostSyncStatus; },
  "PostSyncStatusModal": function() { return /* reexport */ PostSyncStatusModal; },
  "PostTaxonomies": function() { return /* reexport */ post_taxonomies; },
  "PostTaxonomiesCheck": function() { return /* reexport */ post_taxonomies_check; },
  "PostTaxonomiesFlatTermSelector": function() { return /* reexport */ FlatTermSelector; },
  "PostTaxonomiesHierarchicalTermSelector": function() { return /* reexport */ HierarchicalTermSelector; },
  "PostTextEditor": function() { return /* reexport */ PostTextEditor; },
  "PostTitle": function() { return /* reexport */ post_title; },
  "PostTrash": function() { return /* reexport */ PostTrash; },
  "PostTrashCheck": function() { return /* reexport */ post_trash_check; },
  "PostTypeSupportCheck": function() { return /* reexport */ post_type_support_check; },
  "PostURL": function() { return /* reexport */ PostURL; },
  "PostURLCheck": function() { return /* reexport */ PostURLCheck; },
  "PostURLLabel": function() { return /* reexport */ PostURLLabel; },
  "PostVisibility": function() { return /* reexport */ PostVisibility; },
  "PostVisibilityCheck": function() { return /* reexport */ post_visibility_check; },
  "PostVisibilityLabel": function() { return /* reexport */ PostVisibilityLabel; },
  "RichText": function() { return /* reexport */ RichText; },
  "RichTextShortcut": function() { return /* reexport */ RichTextShortcut; },
  "RichTextToolbarButton": function() { return /* reexport */ RichTextToolbarButton; },
  "ServerSideRender": function() { return /* reexport */ (external_wp_serverSideRender_default()); },
  "SkipToSelectedBlock": function() { return /* reexport */ SkipToSelectedBlock; },
  "TableOfContents": function() { return /* reexport */ table_of_contents; },
  "TextEditorGlobalKeyboardShortcuts": function() { return /* reexport */ TextEditorGlobalKeyboardShortcuts; },
  "ThemeSupportCheck": function() { return /* reexport */ theme_support_check; },
  "TimeToRead": function() { return /* reexport */ TimeToRead; },
  "URLInput": function() { return /* reexport */ URLInput; },
  "URLInputButton": function() { return /* reexport */ URLInputButton; },
  "URLPopover": function() { return /* reexport */ URLPopover; },
  "UnsavedChangesWarning": function() { return /* reexport */ UnsavedChangesWarning; },
  "VisualEditorGlobalKeyboardShortcuts": function() { return /* reexport */ visual_editor_shortcuts; },
  "Warning": function() { return /* reexport */ Warning; },
  "WordCount": function() { return /* reexport */ WordCount; },
  "WritingFlow": function() { return /* reexport */ WritingFlow; },
  "__unstableRichTextInputEvent": function() { return /* reexport */ __unstableRichTextInputEvent; },
  "cleanForSlug": function() { return /* reexport */ cleanForSlug; },
  "createCustomColorsHOC": function() { return /* reexport */ createCustomColorsHOC; },
  "getColorClassName": function() { return /* reexport */ getColorClassName; },
  "getColorObjectByAttributeValues": function() { return /* reexport */ getColorObjectByAttributeValues; },
  "getColorObjectByColorValue": function() { return /* reexport */ getColorObjectByColorValue; },
  "getFontSize": function() { return /* reexport */ getFontSize; },
  "getFontSizeClass": function() { return /* reexport */ getFontSizeClass; },
  "getTemplatePartIcon": function() { return /* reexport */ getTemplatePartIcon; },
  "mediaUpload": function() { return /* reexport */ mediaUpload; },
  "privateApis": function() { return /* reexport */ privateApis; },
  "store": function() { return /* reexport */ store_store; },
  "storeConfig": function() { return /* reexport */ storeConfig; },
  "transformStyles": function() { return /* reexport */ external_wp_blockEditor_namespaceObject.transformStyles; },
  "useEntitiesSavedStatesIsDirty": function() { return /* reexport */ useIsDirty; },
  "usePostScheduleLabel": function() { return /* reexport */ usePostScheduleLabel; },
  "usePostURLLabel": function() { return /* reexport */ usePostURLLabel; },
  "usePostVisibilityLabel": function() { return /* reexport */ usePostVisibilityLabel; },
  "userAutocompleter": function() { return /* reexport */ user; },
  "withColorContext": function() { return /* reexport */ withColorContext; },
  "withColors": function() { return /* reexport */ withColors; },
  "withFontSizes": function() { return /* reexport */ withFontSizes; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "hasEditorUndo", function() { return hasEditorUndo; });
__webpack_require__.d(selectors_namespaceObject, "hasEditorRedo", function() { return hasEditorRedo; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostNew", function() { return selectors_isEditedPostNew; });
__webpack_require__.d(selectors_namespaceObject, "hasChangedContent", function() { return hasChangedContent; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostDirty", function() { return selectors_isEditedPostDirty; });
__webpack_require__.d(selectors_namespaceObject, "hasNonPostEntityChanges", function() { return selectors_hasNonPostEntityChanges; });
__webpack_require__.d(selectors_namespaceObject, "isCleanNewPost", function() { return selectors_isCleanNewPost; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPost", function() { return selectors_getCurrentPost; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostType", function() { return selectors_getCurrentPostType; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostId", function() { return selectors_getCurrentPostId; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostRevisionsCount", function() { return selectors_getCurrentPostRevisionsCount; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostLastRevisionId", function() { return selectors_getCurrentPostLastRevisionId; });
__webpack_require__.d(selectors_namespaceObject, "getPostEdits", function() { return selectors_getPostEdits; });
__webpack_require__.d(selectors_namespaceObject, "getReferenceByDistinctEdits", function() { return selectors_getReferenceByDistinctEdits; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostAttribute", function() { return selectors_getCurrentPostAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostAttribute", function() { return selectors_getEditedPostAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getAutosaveAttribute", function() { return getAutosaveAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostVisibility", function() { return selectors_getEditedPostVisibility; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostPending", function() { return isCurrentPostPending; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostPublished", function() { return selectors_isCurrentPostPublished; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostScheduled", function() { return selectors_isCurrentPostScheduled; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostPublishable", function() { return selectors_isEditedPostPublishable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostSaveable", function() { return selectors_isEditedPostSaveable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostEmpty", function() { return isEditedPostEmpty; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostAutosaveable", function() { return selectors_isEditedPostAutosaveable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostBeingScheduled", function() { return selectors_isEditedPostBeingScheduled; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostDateFloating", function() { return isEditedPostDateFloating; });
__webpack_require__.d(selectors_namespaceObject, "isSavingPost", function() { return selectors_isSavingPost; });
__webpack_require__.d(selectors_namespaceObject, "isSavingNonPostEntityChanges", function() { return selectors_isSavingNonPostEntityChanges; });
__webpack_require__.d(selectors_namespaceObject, "didPostSaveRequestSucceed", function() { return didPostSaveRequestSucceed; });
__webpack_require__.d(selectors_namespaceObject, "didPostSaveRequestFail", function() { return didPostSaveRequestFail; });
__webpack_require__.d(selectors_namespaceObject, "isAutosavingPost", function() { return selectors_isAutosavingPost; });
__webpack_require__.d(selectors_namespaceObject, "isPreviewingPost", function() { return isPreviewingPost; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostPreviewLink", function() { return selectors_getEditedPostPreviewLink; });
__webpack_require__.d(selectors_namespaceObject, "getSuggestedPostFormat", function() { return selectors_getSuggestedPostFormat; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostContent", function() { return getEditedPostContent; });
__webpack_require__.d(selectors_namespaceObject, "isPublishingPost", function() { return selectors_isPublishingPost; });
__webpack_require__.d(selectors_namespaceObject, "isPermalinkEditable", function() { return isPermalinkEditable; });
__webpack_require__.d(selectors_namespaceObject, "getPermalink", function() { return getPermalink; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostSlug", function() { return getEditedPostSlug; });
__webpack_require__.d(selectors_namespaceObject, "getPermalinkParts", function() { return getPermalinkParts; });
__webpack_require__.d(selectors_namespaceObject, "isPostLocked", function() { return selectors_isPostLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostSavingLocked", function() { return selectors_isPostSavingLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostAutosavingLocked", function() { return isPostAutosavingLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostLockTakeover", function() { return selectors_isPostLockTakeover; });
__webpack_require__.d(selectors_namespaceObject, "getPostLockUser", function() { return selectors_getPostLockUser; });
__webpack_require__.d(selectors_namespaceObject, "getActivePostLock", function() { return selectors_getActivePostLock; });
__webpack_require__.d(selectors_namespaceObject, "canUserUseUnfilteredHTML", function() { return selectors_canUserUseUnfilteredHTML; });
__webpack_require__.d(selectors_namespaceObject, "isPublishSidebarEnabled", function() { return selectors_isPublishSidebarEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getEditorBlocks", function() { return getEditorBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelectionStart", function() { return getEditorSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelectionEnd", function() { return getEditorSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelection", function() { return selectors_getEditorSelection; });
__webpack_require__.d(selectors_namespaceObject, "__unstableIsEditorReady", function() { return selectors_unstableIsEditorReady; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSettings", function() { return selectors_getEditorSettings; });
__webpack_require__.d(selectors_namespaceObject, "getStateBeforeOptimisticTransaction", function() { return getStateBeforeOptimisticTransaction; });
__webpack_require__.d(selectors_namespaceObject, "inSomeHistory", function() { return inSomeHistory; });
__webpack_require__.d(selectors_namespaceObject, "getBlockName", function() { return getBlockName; });
__webpack_require__.d(selectors_namespaceObject, "isBlockValid", function() { return isBlockValid; });
__webpack_require__.d(selectors_namespaceObject, "getBlockAttributes", function() { return getBlockAttributes; });
__webpack_require__.d(selectors_namespaceObject, "getBlock", function() { return getBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlocks", function() { return selectors_getBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsOfDescendants", function() { return getClientIdsOfDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsWithDescendants", function() { return getClientIdsWithDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getGlobalBlockCount", function() { return selectors_getGlobalBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksByClientId", function() { return getBlocksByClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockCount", function() { return getBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionStart", function() { return getBlockSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionEnd", function() { return getBlockSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockCount", function() { return getSelectedBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedBlock", function() { return hasSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockClientId", function() { return getSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlock", function() { return getSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlockRootClientId", function() { return getBlockRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockHierarchyRootClientId", function() { return getBlockHierarchyRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getAdjacentBlockClientId", function() { return getAdjacentBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getPreviousBlockClientId", function() { return getPreviousBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getNextBlockClientId", function() { return getNextBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlocksInitialCaretPosition", function() { return getSelectedBlocksInitialCaretPosition; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlockClientIds", function() { return getMultiSelectedBlockClientIds; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocks", function() { return getMultiSelectedBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getFirstMultiSelectedBlockClientId", function() { return getFirstMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getLastMultiSelectedBlockClientId", function() { return getLastMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "isFirstMultiSelectedBlock", function() { return isFirstMultiSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockMultiSelected", function() { return isBlockMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "isAncestorMultiSelected", function() { return isAncestorMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksStartClientId", function() { return getMultiSelectedBlocksStartClientId; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksEndClientId", function() { return getMultiSelectedBlocksEndClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockOrder", function() { return getBlockOrder; });
__webpack_require__.d(selectors_namespaceObject, "getBlockIndex", function() { return getBlockIndex; });
__webpack_require__.d(selectors_namespaceObject, "isBlockSelected", function() { return isBlockSelected; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedInnerBlock", function() { return hasSelectedInnerBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockWithinSelection", function() { return isBlockWithinSelection; });
__webpack_require__.d(selectors_namespaceObject, "hasMultiSelection", function() { return hasMultiSelection; });
__webpack_require__.d(selectors_namespaceObject, "isMultiSelecting", function() { return isMultiSelecting; });
__webpack_require__.d(selectors_namespaceObject, "isSelectionEnabled", function() { return isSelectionEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getBlockMode", function() { return getBlockMode; });
__webpack_require__.d(selectors_namespaceObject, "isTyping", function() { return isTyping; });
__webpack_require__.d(selectors_namespaceObject, "isCaretWithinFormattedText", function() { return isCaretWithinFormattedText; });
__webpack_require__.d(selectors_namespaceObject, "getBlockInsertionPoint", function() { return getBlockInsertionPoint; });
__webpack_require__.d(selectors_namespaceObject, "isBlockInsertionPointVisible", function() { return isBlockInsertionPointVisible; });
__webpack_require__.d(selectors_namespaceObject, "isValidTemplate", function() { return isValidTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplate", function() { return getTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplateLock", function() { return getTemplateLock; });
__webpack_require__.d(selectors_namespaceObject, "canInsertBlockType", function() { return canInsertBlockType; });
__webpack_require__.d(selectors_namespaceObject, "getInserterItems", function() { return getInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "hasInserterItems", function() { return hasInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "getBlockListSettings", function() { return getBlockListSettings; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetDefaultTemplateTypes", function() { return __experimentalGetDefaultTemplateTypes; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetDefaultTemplatePartAreas", function() { return __experimentalGetDefaultTemplatePartAreas; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetDefaultTemplateType", function() { return __experimentalGetDefaultTemplateType; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetTemplateInfo", function() { return __experimentalGetTemplateInfo; });
__webpack_require__.d(selectors_namespaceObject, "getPostTypeLabel", function() { return getPostTypeLabel; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "__experimentalTearDownEditor": function() { return __experimentalTearDownEditor; },
  "autosave": function() { return autosave; },
  "clearSelectedBlock": function() { return clearSelectedBlock; },
  "createUndoLevel": function() { return createUndoLevel; },
  "disablePublishSidebar": function() { return disablePublishSidebar; },
  "editPost": function() { return editPost; },
  "enablePublishSidebar": function() { return enablePublishSidebar; },
  "enterFormattedText": function() { return enterFormattedText; },
  "exitFormattedText": function() { return exitFormattedText; },
  "hideInsertionPoint": function() { return hideInsertionPoint; },
  "insertBlock": function() { return insertBlock; },
  "insertBlocks": function() { return insertBlocks; },
  "insertDefaultBlock": function() { return insertDefaultBlock; },
  "lockPostAutosaving": function() { return lockPostAutosaving; },
  "lockPostSaving": function() { return lockPostSaving; },
  "mergeBlocks": function() { return mergeBlocks; },
  "moveBlockToPosition": function() { return moveBlockToPosition; },
  "moveBlocksDown": function() { return moveBlocksDown; },
  "moveBlocksUp": function() { return moveBlocksUp; },
  "multiSelect": function() { return multiSelect; },
  "receiveBlocks": function() { return receiveBlocks; },
  "redo": function() { return redo; },
  "refreshPost": function() { return refreshPost; },
  "removeBlock": function() { return removeBlock; },
  "removeBlocks": function() { return removeBlocks; },
  "replaceBlock": function() { return replaceBlock; },
  "replaceBlocks": function() { return replaceBlocks; },
  "resetBlocks": function() { return resetBlocks; },
  "resetEditorBlocks": function() { return resetEditorBlocks; },
  "resetPost": function() { return resetPost; },
  "savePost": function() { return savePost; },
  "selectBlock": function() { return selectBlock; },
  "setTemplateValidity": function() { return setTemplateValidity; },
  "setupEditor": function() { return setupEditor; },
  "setupEditorState": function() { return setupEditorState; },
  "showInsertionPoint": function() { return showInsertionPoint; },
  "startMultiSelect": function() { return startMultiSelect; },
  "startTyping": function() { return startTyping; },
  "stopMultiSelect": function() { return stopMultiSelect; },
  "stopTyping": function() { return stopTyping; },
  "synchronizeTemplate": function() { return synchronizeTemplate; },
  "toggleBlockMode": function() { return toggleBlockMode; },
  "toggleSelection": function() { return toggleSelection; },
  "trashPost": function() { return trashPost; },
  "undo": function() { return undo; },
  "unlockPostAutosaving": function() { return unlockPostAutosaving; },
  "unlockPostSaving": function() { return unlockPostSaving; },
  "updateBlock": function() { return updateBlock; },
  "updateBlockAttributes": function() { return updateBlockAttributes; },
  "updateBlockListSettings": function() { return updateBlockListSettings; },
  "updateEditorSettings": function() { return updateEditorSettings; },
  "updatePost": function() { return updatePost; },
  "updatePostLock": function() { return updatePostLock; }
});

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","blocks"]
var external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","coreData"]
var external_wp_coreData_namespaceObject = window["wp"]["coreData"];
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: external ["wp","hooks"]
var external_wp_hooks_namespaceObject = window["wp"]["hooks"];
;// CONCATENATED MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_namespaceObject = window["wp"]["blockEditor"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/defaults.js
/**
 * WordPress dependencies
 */

const PREFERENCES_DEFAULTS = {
  insertUsage: {},
  // Should be kept for backward compatibility, see: https://github.com/WordPress/gutenberg/issues/14580.
  isPublishSidebarEnabled: true
};
/**
 * The default post editor settings
 *
 *  allowedBlockTypes  boolean|Array Allowed block types
 *  richEditingEnabled boolean       Whether rich editing is enabled or not
 *  codeEditingEnabled boolean       Whether code editing is enabled or not
 *  enableCustomFields boolean       Whether the WordPress custom fields are enabled or not.
 *                                     true  = the user has opted to show the Custom Fields panel at the bottom of the editor.
 *                                     false = the user has opted to hide the Custom Fields panel at the bottom of the editor.
 *                                     undefined = the current environment does not support Custom Fields,
 *                                                 so the option toggle in Preferences -> Panels to
 *                                                 enable the Custom Fields panel is not displayed.
 *  autosaveInterval   number        Autosave Interval
 *  availableTemplates array?        The available post templates
 *  disablePostFormats boolean       Whether or not the post formats are disabled
 *  allowedMimeTypes   array?        List of allowed mime types and file extensions
 *  maxUploadFileSize  number        Maximum upload file size
 *  supportsLayout     boolean      Whether the editor supports layouts.
 */

const EDITOR_SETTINGS_DEFAULTS = { ...external_wp_blockEditor_["SETTINGS_DEFAULTS"],
  richEditingEnabled: true,
  codeEditingEnabled: true,
  enableCustomFields: undefined
};

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Returns a post attribute value, flattening nested rendered content using its
 * raw value in place of its original object form.
 *
 * @param {*} value Original value.
 *
 * @return {*} Raw value.
 */

function getPostRawValue(value) {
  if (value && 'object' === typeof value && 'raw' in value) {
    return value.raw;
  }

  return value;
}
/**
 * Returns true if the two object arguments have the same keys, or false
 * otherwise.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 *
 * @return {boolean} Whether the two objects have the same keys.
 */

function hasSameKeys(a, b) {
  return Object(external_lodash_["isEqual"])(Object(external_lodash_["keys"])(a), Object(external_lodash_["keys"])(b));
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are editing the same post property, or
 * false otherwise.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether actions are updating the same post property.
 */

function isUpdatingSamePostProperty(action, previousAction) {
  return action.type === 'EDIT_POST' && hasSameKeys(action.edits, previousAction.edits);
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are modifying the same property such that
 * undo history should be batched.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether to overwrite present state.
 */

function shouldOverwriteState(action, previousAction) {
  if (action.type === 'RESET_EDITOR_BLOCKS') {
    return !action.shouldCreateUndoLevel;
  }

  if (!previousAction || action.type !== previousAction.type) {
    return false;
  }

  return isUpdatingSamePostProperty(action, previousAction);
}
function postId(state = null, action) {
  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
      return action.post.id;
  }

  return state;
}
function postType(state = null, action) {
  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
      return action.post.type;
  }

  return state;
}
/**
 * Reducer returning whether the post blocks match the defined template or not.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function template(state = {
  isValid: true
}, action) {
  switch (action.type) {
    case 'SET_TEMPLATE_VALIDITY':
      return { ...state,
        isValid: action.isValid
      };
  }

  return state;
}
/**
 * Reducer returning the user preferences.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {string} Updated state.
 */

function saving(state = {}, action) {
  switch (action.type) {
    case 'ENABLE_PUBLISH_SIDEBAR':
      return { ...state,
        isPublishSidebarEnabled: true
      };

    case 'DISABLE_PUBLISH_SIDEBAR':
      return { ...state,
        isPublishSidebarEnabled: false
      };
  }

  return state;
}
/**
 * Reducer returning current network request state (whether a request to
 * the WP REST API is in progress, successful, or failed).
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function deleting(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_POST_UPDATE_START':
    case 'REQUEST_POST_UPDATE_FINISH':
      return {
        pending: action.type === 'REQUEST_POST_UPDATE_START',
        options: action.options || {}
      };
  }

  return state;
}
/**
 * Post Lock State.
 *
 * @typedef {Object} PostLockState
 *
 * @property {boolean}  isLocked       Whether the post is locked.
 * @property {?boolean} isTakeover     Whether the post editing has been taken over.
 * @property {?boolean} activePostLock Active post lock value.
 * @property {?Object}  user           User that took over the post.
 */

/**
 * Reducer returning the post lock status.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postLock(state = {
  isLocked: false
}, action) {
  switch (action.type) {
    case 'UPDATE_POST_LOCK':
      return action.lock;
  }

  return state;
}
/**
 * Post saving lock.
 *
 * When post saving is locked, the post cannot be published or updated.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postSavingLock(state = {}, action) {
  switch (action.type) {
    case 'LOCK_POST_SAVING':
      return { ...state,
        [action.lockName]: true
      };

    case 'UNLOCK_POST_SAVING':
      return Object(external_lodash_["omit"])(state, action.lockName);
  }

  return state;
}
/**
 * Post autosaving lock.
 *
 * When post autosaving is locked, the post will not autosave.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postAutosavingLock(state = {}, action) {
  switch (action.type) {
    case 'LOCK_POST_AUTOSAVING':
      return { ...state,
        [action.lockName]: true
      };

    case 'UNLOCK_POST_AUTOSAVING':
      {
        const {
          [action.lockName]: removedLockName,
          ...restState
        } = state;
        return restState;
      }
  }

  return state;
}
/**
 * Reducer returning whether the editor is ready to be rendered.
 * The editor is considered ready to be rendered once
 * the post object is loaded properly and the initial blocks parsed.
 *
 * @param {boolean} state
 * @param {Object}  action
 *
 * @return {boolean} Updated state.
 */

function isReady(state = false, action) {
  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return true;

    case 'TEAR_DOWN_EDITOR':
      return false;
  }

  return state;
}
/**
 * Reducer returning the post editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function editorSettings(state = EDITOR_SETTINGS_DEFAULTS, action) {
  switch (action.type) {
    case 'UPDATE_EDITOR_SETTINGS':
      return { ...state,
        ...action.settings
      };
  }

  return state;
}
/* harmony default export */ var reducer = ((0,external_wp_data_namespaceObject.combineReducers)({
  postId,
  postType,
  saving,
  deleting,
  postLock,
  template,
  postSavingLock,
  isReady,
  editorSettings,
  postAutosavingLock
}));

;// CONCATENATED MODULE: ./node_modules/rememo/rememo.js


/** @typedef {(...args: any[]) => *[]} GetDependants */

/** @typedef {() => void} Clear */

/**
 * @typedef {{
 *   getDependants: GetDependants,
 *   clear: Clear
 * }} EnhancedSelector
 */

/**
 * Internal cache entry.
 *
 * @typedef CacheNode
 *
 * @property {?CacheNode|undefined} [prev] Previous node.
 * @property {?CacheNode|undefined} [next] Next node.
 * @property {*[]} args Function arguments for cache entry.
 * @property {*} val Function result.
 */

/**
 * @typedef Cache
 *
 * @property {Clear} clear Function to clear cache.
 * @property {boolean} [isUniqueByDependants] Whether dependants are valid in
 * considering cache uniqueness. A cache is unique if dependents are all arrays
 * or objects.
 * @property {CacheNode?} [head] Cache head.
 * @property {*[]} [lastDependants] Dependants from previous invocation.
 */

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {{}}
 */
var LEAF_KEY = {};

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @template T
 *
 * @param {T} value Value to return.
 *
 * @return {[T]} Value returned as entry in array.
 */
function arrayOf(value) {
	return [value];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike(value) {
	return !!value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Cache} Cache object.
 */
function createCache() {
	/** @type {Cache} */
	var cache = {
		clear: function () {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {*[]} a First array.
 * @param {*[]} b Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual(a, b, fromIndex) {
	var i;

	if (a.length !== b.length) {
		return false;
	}

	for (i = fromIndex; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @template {(...args: *[]) => *} S
 *
 * @param {S} selector Selector function.
 * @param {GetDependants=} getDependants Dependant getter returning an array of
 * references used in cache bust consideration.
 */
/* harmony default export */ function rememo(selector, getDependants) {
	/** @type {WeakMap<*,*>} */
	var rootCache;

	/** @type {GetDependants} */
	var normalizedGetDependants = getDependants ? getDependants : arrayOf;

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {*[]} dependants Selector dependants.
	 *
	 * @return {Cache} Cache object.
	 */
	function getCache(dependants) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i,
			dependant,
			map,
			cache;

		for (i = 0; i < dependants.length; i++) {
			dependant = dependants[i];

			// Can only compose WeakMap from object-like key.
			if (!isObjectLike(dependant)) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if (caches.has(dependant)) {
				// Traverse into nested WeakMap.
				caches = caches.get(dependant);
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set(dependant, map);
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if (!caches.has(LEAF_KEY)) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set(LEAF_KEY, cache);
		}

		return caches.get(LEAF_KEY);
	}

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = new WeakMap();
	}

	/* eslint-disable jsdoc/check-param-names */
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {*}    source    Source object for derivation.
	 * @param {...*} extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	/* eslint-enable jsdoc/check-param-names */
	function callSelector(/* source, ...extraArgs */) {
		var len = arguments.length,
			cache,
			node,
			i,
			args,
			dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		dependants = normalizedGetDependants.apply(null, args);
		cache = getCache(dependants);

		// If not guaranteed uniqueness by dependants (primitive type), shallow
		// compare against last dependants and, if references have changed,
		// destroy cache to recalculate result.
		if (!cache.isUniqueByDependants) {
			if (
				cache.lastDependants &&
				!isShallowEqual(dependants, cache.lastDependants, 0)
			) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while (node) {
			// Check whether node arguments match arguments
			if (!isShallowEqual(node.args, args, 1)) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== cache.head) {
				// Adjust siblings to point to each other.
				/** @type {CacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				/** @type {CacheNode} */ (cache.head).prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

    case 'UNLOCK_POST_AUTOSAVING':
      return Object(external_lodash_["omit"])(state, action.lockName);
  }

  return state;
}
/**
 * Reducer returning whether the editor is ready to be rendered.
 * The editor is considered ready to be rendered once
 * the post object is loaded properly and the initial blocks parsed.
 *
 * @param {boolean} state
 * @param {Object}  action
 *
 * @return {boolean} Updated state.
 */

function reducer_isReady() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return true;

    case 'TEAR_DOWN_EDITOR':
      return false;
  }

  return state;
}
/**
 * Reducer returning the post editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_editorSettings() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EDITOR_SETTINGS_DEFAULTS;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_EDITOR_SETTINGS':
      return { ...state,
        ...action.settings
      };
  }

  return state;
}
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  postId: reducer_postId,
  postType: reducer_postType,
  preferences,
  saving,
  postLock,
  template: reducer_template,
  postSavingLock,
  isReady: reducer_isReady,
  editorSettings: reducer_editorSettings,
  postAutosavingLock
}));

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__("pPDe");

// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__("FqII");

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// EXTERNAL MODULE: external ["wp","deprecated"]
var external_wp_deprecated_ = __webpack_require__("NMb1");
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/layout.js
var layout = __webpack_require__("Civd");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/constants.js
/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
const EDIT_MERGE_PROPERTIES = new Set(['meta']);
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */

const STORE_NAME = 'core/editor';
const SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
const TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
const PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
const ONE_MINUTE_IN_MS = 60 * 1000;
const AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/url.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Returns the URL of a WPAdmin Page.
 *
 * TODO: This should be moved to a module less specific to the editor.
 *
 * @param {string} page  Page to navigate to.
 * @param {Object} query Query Args.
 *
 * @return {string} WPAdmin URL.
 */

function getWPAdminURL(page, query) {
  return Object(external_wp_url_["addQueryArgs"])(page, query);
}
/**
 * Performs some basic cleanup of a string for use as a post slug
 *
 * This replicates some of what sanitize_title() does in WordPress core, but
 * is only designed to approximate what the slug will be.
 *
 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin letters.
 * Removes combining diacritical marks. Converts whitespace, periods,
 * and forward slashes to hyphens. Removes any remaining non-word characters
 * except hyphens and underscores. Converts remaining string to lowercase.
 * It does not account for octets, HTML entities, or other encoded characters.
 *
 * @param {string} string Title or slug to be processed
 *
 * @return {string} Processed string
 */

function cleanForSlug(string) {
  if (!string) {
    return '';
  }

  return Object(external_lodash_["trim"])(Object(external_lodash_["deburr"])(string).replace(/[\s\./]+/g, '-').replace(/[^\p{L}\p{N}_-]+/gu, '').toLowerCase(), '-');
}

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/header.js
var header = __webpack_require__("G8mJ");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/footer.js
var footer = __webpack_require__("//kF");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/sidebar.js
var sidebar = __webpack_require__("rvQu");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/symbol-filled.js
var symbol_filled = __webpack_require__("OE6V");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/get-template-part-icon.js
/**
 * WordPress dependencies
 */

/**
 * Helper function to retrieve the corresponding icon by name.
 *
 * @param {string} iconName The name of the icon.
 *
 * @return {Object} The corresponding icon.
 */

function getTemplatePartIcon(iconName) {
  if ('header' === iconName) {
    return header["a" /* default */];
  } else if ('footer' === iconName) {
    return footer["a" /* default */];
  } else if ('sidebar' === iconName) {
    return sidebar["a" /* default */];
  }

  return symbol_filled["a" /* default */];
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/selectors.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */






/**
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

const EMPTY_OBJECT = {};
/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

const EMPTY_ARRAY = [];
/**
 * Returns true if any past editor history snapshots exist, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether undo history exists.
 */

const hasEditorUndo = Object(external_wp_data_["createRegistrySelector"])(select => () => {
  return select(external_wp_coreData_["store"]).hasUndo();
});
/**
 * Returns true if any future editor history snapshots exist, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether redo history exists.
 */

const hasEditorRedo = Object(external_wp_data_["createRegistrySelector"])(select => () => {
  return select(external_wp_coreData_["store"]).hasRedo();
});
/**
 * Returns true if the currently edited post is yet to be saved, or false if
 * the post has been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is new.
 */

function selectors_isEditedPostNew(state) {
  return selectors_getCurrentPost(state).status === 'auto-draft';
}
/**
 * Returns true if content includes unsaved changes, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether content includes unsaved changes.
 */

function hasChangedContent(state) {
  const edits = getPostEdits(state);
  return 'content' in edits;
}
/**
 * Returns true if there are unsaved values for the current edit session, or
 * false if the editing state matches the saved or new post.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether unsaved values exist.
 */

const selectors_isEditedPostDirty = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  // Edits should contain only fields which differ from the saved post (reset
  // at initial load and save complete). Thus, a non-empty edits state can be
  // inferred to contain unsaved values.
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);

  if (select(external_wp_coreData_["store"]).hasEditsForEntityRecord('postType', postType, postId)) {
    return true;
  }

  return false;
});
/**
 * Returns true if there are unsaved edits for entities other than
 * the editor's post, and false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there are edits or not.
 */

const selectors_hasNonPostEntityChanges = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const dirtyEntityRecords = select(external_wp_coreData_["store"]).__experimentalGetDirtyEntityRecords();

  const {
    type,
    id
  } = selectors_getCurrentPost(state);
  return Object(external_lodash_["some"])(dirtyEntityRecords, entityRecord => entityRecord.kind !== 'postType' || entityRecord.name !== type || entityRecord.key !== id);
});
/**
 * Returns true if there are no unsaved values for the current edit session and
 * if the currently edited post is new (has never been saved before).
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether new post and unsaved values exist.
 */

function selectors_isCleanNewPost(state) {
  return !selectors_isEditedPostDirty(state) && selectors_isEditedPostNew(state);
}
/**
 * Returns the post currently being edited in its last known saved state, not
 * including unsaved edits. Returns an object containing relevant default post
 * values if the post has not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Post object.
 */

const selectors_getCurrentPost = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postId = selectors_getCurrentPostId(state);
  const postType = selectors_getCurrentPostType(state);
  const post = select(external_wp_coreData_["store"]).getRawEntityRecord('postType', postType, postId);

  if (post) {
    return post;
  } // This exists for compatibility with the previous selector behavior
  // which would guarantee an object return based on the editor reducer's
  // default empty object state.


  return EMPTY_OBJECT;
});
/**
 * Returns the post type of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post type.
 */

function selectors_getCurrentPostType(state) {
  return state.postType;
}
/**
 * Returns the ID of the post currently being edited, or null if the post has
 * not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of current post.
 */

function selectors_getCurrentPostId(state) {
  return state.postId;
}
/**
 * Returns the number of revisions of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {number} Number of revisions.
 */

function getCurrentPostRevisionsCount(state) {
  var _getCurrentPost$_link;

  return (_getCurrentPost$_link = getCurrentPost(state)._links?.['version-history']?.[0]?.count) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : 0;
}
/**
 * Returns the last revision ID of the post currently being edited,
 * or null if the post has no revisions.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of the last revision.
 */

function getCurrentPostLastRevisionId(state) {
  var _getCurrentPost$_link2;

  return (_getCurrentPost$_link2 = getCurrentPost(state)._links?.['predecessor-version']?.[0]?.id) !== null && _getCurrentPost$_link2 !== void 0 ? _getCurrentPost$_link2 : null;
}
/**
 * Returns any post values which have been changed in the editor but not yet
 * been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object of key value pairs comprising unsaved edits.
 */

const selectors_getPostEdits = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  return select(external_wp_coreData_["store"]).getEntityRecordEdits('postType', postType, postId) || EMPTY_OBJECT;
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @deprecated since Gutenberg 6.5.0.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param {Object} state Editor state.
 *
 * @return {*} A value whose reference will change only when an edit occurs.
 */

const selectors_getReferenceByDistinctEdits = Object(external_wp_data_["createRegistrySelector"])(select => () => {
  external_wp_deprecated_default()("`wp.data.select( 'core/editor' ).getReferenceByDistinctEdits`", {
    since: '5.4',
    alternative: "`wp.data.select( 'core' ).getReferenceByDistinctEdits`"
  });
  return select(external_wp_coreData_["store"]).getReferenceByDistinctEdits();
});
/**
 * Returns an attribute value of the saved post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

function selectors_getCurrentPostAttribute(state, attributeName) {
  switch (attributeName) {
    case 'type':
      return selectors_getCurrentPostType(state);

    case 'id':
      return selectors_getCurrentPostId(state);

    default:
      const post = selectors_getCurrentPost(state);

      if (!post.hasOwnProperty(attributeName)) {
        break;
      }

      return getPostRawValue(post[attributeName]);
  }
}
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but merging with the attribute value for the last known
 * saved state of the post (this is needed for some nested attributes like meta).
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

const getNestedEditedPostProperty = (state, attributeName) => {
  const edits = selectors_getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return selectors_getCurrentPostAttribute(state, attributeName);
  }

  return { ...selectors_getCurrentPostAttribute(state, attributeName),
    ...edits[attributeName]
  };
};
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but falling back to the attribute for the last known
 * saved state of the post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */


function selectors_getEditedPostAttribute(state, attributeName) {
  // Special cases
  switch (attributeName) {
    case 'content':
      return getEditedPostContent(state);
  } // Fall back to saved post value if not edited.


  const edits = selectors_getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return selectors_getCurrentPostAttribute(state, attributeName);
  } // Merge properties are objects which contain only the patch edit in state,
  // and thus must be merged with the current post attribute.


  if (EDIT_MERGE_PROPERTIES.has(attributeName)) {
    return getNestedEditedPostProperty(state, attributeName);
  }

  return edits[attributeName];
}
/**
 * Returns an attribute value of the current autosave revision for a post, or
 * null if there is no autosave for the post.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 * 			   from the '@wordpress/core-data' package and access properties on the returned
 * 			   autosave object using getPostRawValue.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Autosave attribute name.
 *
 * @return {*} Autosave attribute value.
 */

const getAutosaveAttribute = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, attributeName) => {
  if (!AUTOSAVE_PROPERTIES.includes(attributeName) && attributeName !== 'preview_link') {
    return;
  }

  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  const currentUserId = select(external_wp_coreData_namespaceObject.store).getCurrentUser()?.id;
  const autosave = select(external_wp_coreData_namespaceObject.store).getAutosave(postType, postId, currentUserId);

  if (autosave) {
    return getPostRawValue(autosave[attributeName]);
  }
});
/**
 * Returns the current visibility of the post being edited, preferring the
 * unsaved value if different than the saved post. The return value is one of
 * "private", "password", or "public".
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post visibility.
 */

function selectors_getEditedPostVisibility(state) {
  const status = selectors_getEditedPostAttribute(state, 'status');

  if (status === 'private') {
    return 'private';
  }

  const password = selectors_getEditedPostAttribute(state, 'password');

  if (password) {
    return 'password';
  }

  return 'public';
}
/**
 * Returns true if post is pending review.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is pending review.
 */

function isCurrentPostPending(state) {
  return selectors_getCurrentPost(state).status === 'pending';
}
/**
 * Return true if the current post has already been published.
 *
 * @param {Object}  state       Global application state.
 * @param {Object?} currentPost Explicit current post for bypassing registry selector.
 *
 * @return {boolean} Whether the post has been published.
 */

function selectors_isCurrentPostPublished(state, currentPost) {
  const post = currentPost || selectors_getCurrentPost(state);
  return ['publish', 'private'].indexOf(post.status) !== -1 || post.status === 'future' && !Object(external_wp_date_["isInTheFuture"])(new Date(Number(Object(external_wp_date_["getDate"])(post.date)) - ONE_MINUTE_IN_MS));
}
/**
 * Returns true if post is already scheduled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is scheduled to be posted.
 */

function selectors_isCurrentPostScheduled(state) {
  return selectors_getCurrentPost(state).status === 'future' && !selectors_isCurrentPostPublished(state);
}
/**
 * Return true if the post being edited can be published.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can been published.
 */

function selectors_isEditedPostPublishable(state) {
  const post = selectors_getCurrentPost(state); // TODO: Post being publishable should be superset of condition of post
  // being saveable. Currently this restriction is imposed at UI.
  //
  //  See: <PostPublishButton /> (`isButtonEnabled` assigned by `isSaveable`)

  return selectors_isEditedPostDirty(state) || ['publish', 'private', 'future'].indexOf(post.status) === -1;
}
/**
 * Returns true if the post can be saved, or false otherwise. A post must
 * contain a title, an excerpt, or non-empty content to be valid for save.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can be saved.
 */

function selectors_isEditedPostSaveable(state) {
  if (selectors_isSavingPost(state)) {
    return false;
  } // TODO: Post should not be saveable if not dirty. Cannot be added here at
  // this time since posts where meta boxes are present can be saved even if
  // the post is not dirty. Currently this restriction is imposed at UI, but
  // should be moved here.
  //
  //  See: `isEditedPostPublishable` (includes `isEditedPostDirty` condition)
  //  See: <PostSavedState /> (`forceIsDirty` prop)
  //  See: <PostPublishButton /> (`forceIsDirty` prop)
  //  See: https://github.com/WordPress/gutenberg/pull/4184


  return !!selectors_getEditedPostAttribute(state, 'title') || !!selectors_getEditedPostAttribute(state, 'excerpt') || !isEditedPostEmpty(state) || external_wp_element_["Platform"].OS === 'native';
}
/**
 * Returns true if the edited post has content. A post has content if it has at
 * least one saveable block or otherwise has a non-empty content property
 * assigned.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post has content.
 */

function isEditedPostEmpty(state) {
  // While the condition of truthy content string is sufficient to determine
  // emptiness, testing saveable blocks length is a trivial operation. Since
  // this function can be called frequently, optimize for the fast case as a
  // condition of the mere existence of blocks. Note that the value of edited
  // content takes precedent over block content, and must fall through to the
  // default logic.
  const blocks = getEditorBlocks(state);

  if (blocks.length) {
    // Pierce the abstraction of the serializer in knowing that blocks are
    // joined with with newlines such that even if every individual block
    // produces an empty save result, the serialized content is non-empty.
    if (blocks.length > 1) {
      return false;
    } // There are two conditions under which the optimization cannot be
    // assumed, and a fallthrough to getEditedPostContent must occur:
    //
    // 1. getBlocksForSerialization has special treatment in omitting a
    //    single unmodified default block.
    // 2. Comment delimiters are omitted for a freeform or unregistered
    //    block in its serialization. The freeform block specifically may
    //    produce an empty string in its saved output.
    //
    // For all other content, the single block is assumed to make a post
    // non-empty, if only by virtue of its own comment delimiters.


    const blockName = blocks[0].name;

    if (blockName !== Object(external_wp_blocks_["getDefaultBlockName"])() && blockName !== Object(external_wp_blocks_["getFreeformContentHandlerName"])()) {
      return false;
    }
  }

  return !getEditedPostContent(state);
}
/**
 * Returns true if the post can be autosaved, or false otherwise.
 *
 * @param {Object} state    Global application state.
 * @param {Object} autosave A raw autosave object from the REST API.
 *
 * @return {boolean} Whether the post can be autosaved.
 */

const isEditedPostAutosaveable = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  // A post must contain a title, an excerpt, or non-empty content to be valid for autosaving.
  if (!selectors_isEditedPostSaveable(state)) {
    return false;
  } // A post is not autosavable when there is a post autosave lock.


  if (isPostAutosavingLocked(state)) {
    return false;
  }

  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  const hasFetchedAutosave = select(external_wp_coreData_namespaceObject.store).hasFetchedAutosaves(postType, postId);
  const currentUserId = select(external_wp_coreData_namespaceObject.store).getCurrentUser()?.id; // Disable reason - this line causes the side-effect of fetching the autosave
  // via a resolver, moving below the return would result in the autosave never
  // being fetched.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const autosave = select(external_wp_coreData_["store"]).getAutosave(postType, postId, currentUserId); // If any existing autosaves have not yet been fetched, this function is
  // unable to determine if the post is autosaveable, so return false.

  if (!hasFetchedAutosave) {
    return false;
  } // If we don't already have an autosave, the post is autosaveable.


  if (!autosave) {
    return true;
  } // To avoid an expensive content serialization, use the content dirtiness
  // flag in place of content field comparison against the known autosave.
  // This is not strictly accurate, and relies on a tolerance toward autosave
  // request failures for unnecessary saves.


  if (hasChangedContent(state)) {
    return true;
  } // If title, excerpt, or meta have changed, the post is autosaveable.


  return ['title', 'excerpt', 'meta'].some(field => getPostRawValue(autosave[field]) !== getEditedPostAttribute(state, field));
});
/**
 * Return true if the post being edited is being scheduled. Preferring the
 * unsaved status values.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post has been published.
 */

function selectors_isEditedPostBeingScheduled(state) {
  const date = selectors_getEditedPostAttribute(state, 'date'); // Offset the date by one minute (network latency)

  const checkedDate = new Date(Number(Object(external_wp_date_["getDate"])(date)) - ONE_MINUTE_IN_MS);
  return Object(external_wp_date_["isInTheFuture"])(checkedDate);
}
/**
 * Returns whether the current post should be considered to have a "floating"
 * date (i.e. that it would publish "Immediately" rather than at a set time).
 *
 * Unlike in the PHP backend, the REST API returns a full date string for posts
 * where the 0000-00-00T00:00:00 placeholder is present in the database. To
 * infer that a post is set to publish "Immediately" we check whether the date
 * and modified date are the same.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the edited post has a floating date value.
 */

function isEditedPostDateFloating(state) {
  const date = selectors_getEditedPostAttribute(state, 'date');
  const modified = selectors_getEditedPostAttribute(state, 'modified'); // This should be the status of the persisted post
  // It shouldn't use the "edited" status otherwise it breaks the
  // inferred post data floating status
  // See https://github.com/WordPress/gutenberg/issues/28083

  const status = selectors_getCurrentPost(state).status;

  if (status === 'draft' || status === 'auto-draft' || status === 'pending') {
    return date === modified || date === null;
  }

  return false;
}
/**
 * Returns true if the post is currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being saved.
 */

const selectors_isSavingPost = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  return select(external_wp_coreData_["store"]).isSavingEntityRecord('postType', postType, postId);
});
/**
 * Returns true if non-post entities are currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether non-post entities are being saved.
 */

const selectors_isSavingNonPostEntityChanges = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const entitiesBeingSaved = select(external_wp_coreData_["store"]).__experimentalGetEntitiesBeingSaved();

  const {
    type,
    id
  } = selectors_getCurrentPost(state);
  return Object(external_lodash_["some"])(entitiesBeingSaved, entityRecord => entityRecord.kind !== 'postType' || entityRecord.name !== type || entityRecord.key !== id);
});
/**
 * Returns true if a previous post save was attempted successfully, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post was saved successfully.
 */

const didPostSaveRequestSucceed = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  return !select(external_wp_coreData_["store"]).getLastEntitySaveError('postType', postType, postId);
});
/**
 * Returns true if a previous post save was attempted but failed, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post save failed.
 */

const didPostSaveRequestFail = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  return !!select(external_wp_coreData_["store"]).getLastEntitySaveError('postType', postType, postId);
});
/**
 * Returns true if the post is autosaving, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is autosaving.
 */

function isAutosavingPost(state) {
  if (!isSavingPost(state)) {
    return false;
  }

  return Boolean(state.saving.options?.isAutosave);
}
/**
 * Returns true if the post is being previewed, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is being previewed.
 */

function isPreviewingPost(state) {
  if (!isSavingPost(state)) {
    return false;
  }

  return Boolean(state.saving.options?.isPreview);
}
/**
 * Returns the post preview link
 *
 * @param {Object} state Global application state.
 *
 * @return {string | undefined} Preview Link.
 */

function selectors_getEditedPostPreviewLink(state) {
  if (state.saving.pending || selectors_isSavingPost(state)) {
    return;
  }

  let previewLink = getAutosaveAttribute(state, 'preview_link');

  if (!previewLink) {
    previewLink = selectors_getEditedPostAttribute(state, 'link');

    if (previewLink) {
      previewLink = Object(external_wp_url_["addQueryArgs"])(previewLink, {
        preview: true
      });
    }
  }

  const featuredImageId = selectors_getEditedPostAttribute(state, 'featured_media');

  if (previewLink && featuredImageId) {
    return Object(external_wp_url_["addQueryArgs"])(previewLink, {
      _thumbnail_id: featuredImageId
    });
  }

  return previewLink;
}
/**
 * Returns a suggested post format for the current post, inferred only if there
 * is a single block within the post and it is of a type known to match a
 * default post format. Returns null if the format cannot be determined.
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Suggested post format.
 */

function selectors_getSuggestedPostFormat(state) {
  const blocks = getEditorBlocks(state);
  if (blocks.length > 2) return null;
  let name; // If there is only one block in the content of the post grab its name
  // so we can derive a suitable post format from it.

  if (blocks.length === 1) {
    name = blocks[0].name; // check for core/embed `video` and `audio` eligible suggestions

    if (name === 'core/embed') {
      const provider = blocks[0].attributes?.providerNameSlug;

      if (['youtube', 'vimeo'].includes(provider)) {
        name = 'core/video';
      } else if (['spotify', 'soundcloud'].includes(provider)) {
        name = 'core/audio';
      }
    }
  } // If there are two blocks in the content and the last one is a text blocks
  // grab the name of the first one to also suggest a post format from it.


  if (blocks.length === 2 && blocks[1].name === 'core/paragraph') {
    name = blocks[0].name;
  } // We only convert to default post formats in core.


  switch (name) {
    case 'core/image':
      return 'image';

    case 'core/quote':
    case 'core/pullquote':
      return 'quote';

    case 'core/gallery':
      return 'gallery';

    case 'core/video':
      return 'video';

    case 'core/audio':
      return 'audio';

    default:
      return null;
  }
}
/**
 * Returns the content of the post being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post content.
 */

const getEditedPostContent = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postId = selectors_getCurrentPostId(state);
  const postType = selectors_getCurrentPostType(state);
  const record = select(external_wp_coreData_["store"]).getEditedEntityRecord('postType', postType, postId);

  if (record) {
    if (typeof record.content === 'function') {
      return record.content(record);
    } else if (record.blocks) {
      return Object(external_wp_blocks_["__unstableSerializeAndClean"])(record.blocks);
    } else if (record.content) {
      return record.content;
    }
  }

  return '';
});
/**
 * Returns true if the post is being published, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being published.
 */

function selectors_isPublishingPost(state) {
  return selectors_isSavingPost(state) && !selectors_isCurrentPostPublished(state) && selectors_getEditedPostAttribute(state, 'status') === 'publish';
}
/**
 * Returns whether the permalink is editable or not.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether or not the permalink is editable.
 */

function isPermalinkEditable(state) {
  const permalinkTemplate = selectors_getEditedPostAttribute(state, 'permalink_template');
  return PERMALINK_POSTNAME_REGEX.test(permalinkTemplate);
}
/**
 * Returns the permalink for the post.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} The permalink, or null if the post is not viewable.
 */

function getPermalink(state) {
  const permalinkParts = getPermalinkParts(state);

  if (!permalinkParts) {
    return null;
  }

  const {
    prefix,
    postName,
    suffix
  } = permalinkParts;

  if (isPermalinkEditable(state)) {
    return prefix + postName + suffix;
  }

  return prefix;
}
/**
 * Returns the slug for the post being edited, preferring a manually edited
 * value if one exists, then a sanitized version of the current post title, and
 * finally the post ID.
 *
 * @param {Object} state Editor state.
 *
 * @return {string} The current slug to be displayed in the editor
 */

function getEditedPostSlug(state) {
  return selectors_getEditedPostAttribute(state, 'slug') || cleanForSlug(selectors_getEditedPostAttribute(state, 'title')) || selectors_getCurrentPostId(state);
}
/**
 * Returns the permalink for a post, split into it's three parts: the prefix,
 * the postName, and the suffix.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} An object containing the prefix, postName, and suffix for
 *                  the permalink, or null if the post is not viewable.
 */

function getPermalinkParts(state) {
  const permalinkTemplate = selectors_getEditedPostAttribute(state, 'permalink_template');

  if (!permalinkTemplate) {
    return null;
  }

  const postName = selectors_getEditedPostAttribute(state, 'slug') || selectors_getEditedPostAttribute(state, 'generated_slug');
  const [prefix, suffix] = permalinkTemplate.split(PERMALINK_POSTNAME_REGEX);
  return {
    prefix,
    postName,
    suffix
  };
}
/**
 * Returns whether the post is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function selectors_isPostLocked(state) {
  return state.postLock.isLocked;
}
/**
 * Returns whether post saving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function selectors_isPostSavingLocked(state) {
  return Object.keys(state.postSavingLock).length > 0;
}
/**
 * Returns whether post autosaving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostAutosavingLocked(state) {
  return Object.keys(state.postAutosavingLock).length > 0;
}
/**
 * Returns whether the edition of the post has been taken over.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is post lock takeover.
 */

function selectors_isPostLockTakeover(state) {
  return state.postLock.isTakeover;
}
/**
 * Returns details about the post lock user.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} A user object.
 */

function selectors_getPostLockUser(state) {
  return state.postLock.user;
}
/**
 * Returns the active post lock.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The lock object.
 */

function selectors_getActivePostLock(state) {
  return state.postLock.activePostLock;
}
/**
 * Returns whether or not the user has the unfiltered_html capability.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the user can or can't post unfiltered HTML.
 */

function canUserUseUnfilteredHTML(state) {
  return Boolean(getCurrentPost(state)._links?.hasOwnProperty('wp:action-unfiltered-html'));
}
/**
 * Returns whether the pre-publish panel should be shown
 * or skipped when the user clicks the "publish" button.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the pre-publish panel should be shown or not.
 */

function selectors_isPublishSidebarEnabled(state) {
  if (state.preferences.hasOwnProperty('isPublishSidebarEnabled')) {
    return state.preferences.isPublishSidebarEnabled;
  }

  return PREFERENCES_DEFAULTS.isPublishSidebarEnabled;
}
/**
 * Return the current block list.
 *
 * @param {Object} state
 * @return {Array} Block list.
 */

function getEditorBlocks(state) {
  return selectors_getEditedPostAttribute(state, 'blocks') || EMPTY_ARRAY;
}
/**
 * A block selection object.
 *
 * @typedef {Object} WPBlockSelection
 *
 * @property {string} clientId     A block client ID.
 * @property {string} attributeKey A block attribute key.
 * @property {number} offset       An attribute value offset, based on the rich
 *                                 text value. See `wp.richText.create`.
 */

/**
 * Returns the current selection start.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection start.
 *
 * @deprecated since Gutenberg 10.0.0.
 */

function getEditorSelectionStart(state) {
  external_wp_deprecated_default()("select('core/editor').getEditorSelectionStart", {
    since: '10.0',
    plugin: 'Gutenberg',
    alternative: "select('core/editor').getEditorSelection"
  });
  return getEditedPostAttribute(state, 'selection')?.selectionStart;
}
/**
 * Returns the current selection end.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 *
 * @deprecated since Gutenberg 10.0.0.
 */

function getEditorSelectionEnd(state) {
  external_wp_deprecated_default()("select('core/editor').getEditorSelectionStart", {
    since: '10.0',
    plugin: 'Gutenberg',
    alternative: "select('core/editor').getEditorSelection"
  });
  return getEditedPostAttribute(state, 'selection')?.selectionEnd;
}
/**
 * Returns the current selection.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 */

function selectors_getEditorSelection(state) {
  return selectors_getEditedPostAttribute(state, 'selection');
}
/**
 * Is the editor ready
 *
 * @param {Object} state
 * @return {boolean} is Ready.
 */

function selectors_unstableIsEditorReady(state) {
  return state.isReady;
}
/**
 * Returns the post editor settings.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} The editor settings object.
 */

function selectors_getEditorSettings(state) {
  return state.editorSettings;
}
/*
 * Backward compatibility
 */

/**
 * Returns state object prior to a specified optimist transaction ID, or `null`
 * if the transaction corresponding to the given ID cannot be found.
 *
 * @deprecated since Gutenberg 9.7.0.
 */

function getStateBeforeOptimisticTransaction() {
  external_wp_deprecated_default()("select('core/editor').getStateBeforeOptimisticTransaction", {
    since: '5.7',
    hint: 'No state history is kept on this store anymore'
  });
  return null;
}
/**
 * Returns true if an optimistic transaction is pending commit, for which the
 * before state satisfies the given predicate function.
 *
 * @deprecated since Gutenberg 9.7.0.
 */

function inSomeHistory() {
  external_wp_deprecated_default()("select('core/editor').inSomeHistory", {
    since: '5.7',
    hint: 'No state history is kept on this store anymore'
  });
  return false;
}

function getBlockEditorSelector(name) {
  return (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, ...args) => {
    external_wp_deprecated_default()("`wp.data.select( 'core/editor' )." + name + '`', {
      since: '5.3',
      alternative: "`wp.data.select( 'core/block-editor' )." + name + '`'
    });
    return select(external_wp_blockEditor_namespaceObject.store)[name](...args);
  });
}
/**
 * @see getBlockName in core/block-editor store.
 */


const getBlockName = getBlockEditorSelector('getBlockName');
/**
 * @see isBlockValid in core/block-editor store.
 */

const isBlockValid = getBlockEditorSelector('isBlockValid');
/**
 * @see getBlockAttributes in core/block-editor store.
 */

const getBlockAttributes = getBlockEditorSelector('getBlockAttributes');
/**
 * @see getBlock in core/block-editor store.
 */

const getBlock = getBlockEditorSelector('getBlock');
/**
 * @see getBlocks in core/block-editor store.
 */

const selectors_getBlocks = getBlockEditorSelector('getBlocks');
/**
 * @see getClientIdsOfDescendants in core/block-editor store.
 */

const getClientIdsOfDescendants = getBlockEditorSelector('getClientIdsOfDescendants');
/**
 * @see getClientIdsWithDescendants in core/block-editor store.
 */

const getClientIdsWithDescendants = getBlockEditorSelector('getClientIdsWithDescendants');
/**
 * @see getGlobalBlockCount in core/block-editor store.
 */

const selectors_getGlobalBlockCount = getBlockEditorSelector('getGlobalBlockCount');
/**
 * @see getBlocksByClientId in core/block-editor store.
 */

const getBlocksByClientId = getBlockEditorSelector('getBlocksByClientId');
/**
 * @see getBlockCount in core/block-editor store.
 */

const getBlockCount = getBlockEditorSelector('getBlockCount');
/**
 * @see getBlockSelectionStart in core/block-editor store.
 */

const getBlockSelectionStart = getBlockEditorSelector('getBlockSelectionStart');
/**
 * @see getBlockSelectionEnd in core/block-editor store.
 */

const getBlockSelectionEnd = getBlockEditorSelector('getBlockSelectionEnd');
/**
 * @see getSelectedBlockCount in core/block-editor store.
 */

const getSelectedBlockCount = getBlockEditorSelector('getSelectedBlockCount');
/**
 * @see hasSelectedBlock in core/block-editor store.
 */

const hasSelectedBlock = getBlockEditorSelector('hasSelectedBlock');
/**
 * @see getSelectedBlockClientId in core/block-editor store.
 */

const getSelectedBlockClientId = getBlockEditorSelector('getSelectedBlockClientId');
/**
 * @see getSelectedBlock in core/block-editor store.
 */

const getSelectedBlock = getBlockEditorSelector('getSelectedBlock');
/**
 * @see getBlockRootClientId in core/block-editor store.
 */

const getBlockRootClientId = getBlockEditorSelector('getBlockRootClientId');
/**
 * @see getBlockHierarchyRootClientId in core/block-editor store.
 */

const getBlockHierarchyRootClientId = getBlockEditorSelector('getBlockHierarchyRootClientId');
/**
 * @see getAdjacentBlockClientId in core/block-editor store.
 */

const getAdjacentBlockClientId = getBlockEditorSelector('getAdjacentBlockClientId');
/**
 * @see getPreviousBlockClientId in core/block-editor store.
 */

const getPreviousBlockClientId = getBlockEditorSelector('getPreviousBlockClientId');
/**
 * @see getNextBlockClientId in core/block-editor store.
 */

const getNextBlockClientId = getBlockEditorSelector('getNextBlockClientId');
/**
 * @see getSelectedBlocksInitialCaretPosition in core/block-editor store.
 */

const getSelectedBlocksInitialCaretPosition = getBlockEditorSelector('getSelectedBlocksInitialCaretPosition');
/**
 * @see getMultiSelectedBlockClientIds in core/block-editor store.
 */

const getMultiSelectedBlockClientIds = getBlockEditorSelector('getMultiSelectedBlockClientIds');
/**
 * @see getMultiSelectedBlocks in core/block-editor store.
 */

const getMultiSelectedBlocks = getBlockEditorSelector('getMultiSelectedBlocks');
/**
 * @see getFirstMultiSelectedBlockClientId in core/block-editor store.
 */

const getFirstMultiSelectedBlockClientId = getBlockEditorSelector('getFirstMultiSelectedBlockClientId');
/**
 * @see getLastMultiSelectedBlockClientId in core/block-editor store.
 */

const getLastMultiSelectedBlockClientId = getBlockEditorSelector('getLastMultiSelectedBlockClientId');
/**
 * @see isFirstMultiSelectedBlock in core/block-editor store.
 */

const isFirstMultiSelectedBlock = getBlockEditorSelector('isFirstMultiSelectedBlock');
/**
 * @see isBlockMultiSelected in core/block-editor store.
 */

const isBlockMultiSelected = getBlockEditorSelector('isBlockMultiSelected');
/**
 * @see isAncestorMultiSelected in core/block-editor store.
 */

const isAncestorMultiSelected = getBlockEditorSelector('isAncestorMultiSelected');
/**
 * @see getMultiSelectedBlocksStartClientId in core/block-editor store.
 */

const getMultiSelectedBlocksStartClientId = getBlockEditorSelector('getMultiSelectedBlocksStartClientId');
/**
 * @see getMultiSelectedBlocksEndClientId in core/block-editor store.
 */

const getMultiSelectedBlocksEndClientId = getBlockEditorSelector('getMultiSelectedBlocksEndClientId');
/**
 * @see getBlockOrder in core/block-editor store.
 */

const getBlockOrder = getBlockEditorSelector('getBlockOrder');
/**
 * @see getBlockIndex in core/block-editor store.
 */

const getBlockIndex = getBlockEditorSelector('getBlockIndex');
/**
 * @see isBlockSelected in core/block-editor store.
 */

const isBlockSelected = getBlockEditorSelector('isBlockSelected');
/**
 * @see hasSelectedInnerBlock in core/block-editor store.
 */

const hasSelectedInnerBlock = getBlockEditorSelector('hasSelectedInnerBlock');
/**
 * @see isBlockWithinSelection in core/block-editor store.
 */

const isBlockWithinSelection = getBlockEditorSelector('isBlockWithinSelection');
/**
 * @see hasMultiSelection in core/block-editor store.
 */

const hasMultiSelection = getBlockEditorSelector('hasMultiSelection');
/**
 * @see isMultiSelecting in core/block-editor store.
 */

const isMultiSelecting = getBlockEditorSelector('isMultiSelecting');
/**
 * @see isSelectionEnabled in core/block-editor store.
 */

const isSelectionEnabled = getBlockEditorSelector('isSelectionEnabled');
/**
 * @see getBlockMode in core/block-editor store.
 */

const getBlockMode = getBlockEditorSelector('getBlockMode');
/**
 * @see isTyping in core/block-editor store.
 */

const isTyping = getBlockEditorSelector('isTyping');
/**
 * @see isCaretWithinFormattedText in core/block-editor store.
 */

const isCaretWithinFormattedText = getBlockEditorSelector('isCaretWithinFormattedText');
/**
 * @see getBlockInsertionPoint in core/block-editor store.
 */

const getBlockInsertionPoint = getBlockEditorSelector('getBlockInsertionPoint');
/**
 * @see isBlockInsertionPointVisible in core/block-editor store.
 */

const isBlockInsertionPointVisible = getBlockEditorSelector('isBlockInsertionPointVisible');
/**
 * @see isValidTemplate in core/block-editor store.
 */

const isValidTemplate = getBlockEditorSelector('isValidTemplate');
/**
 * @see getTemplate in core/block-editor store.
 */

const getTemplate = getBlockEditorSelector('getTemplate');
/**
 * @see getTemplateLock in core/block-editor store.
 */

const getTemplateLock = getBlockEditorSelector('getTemplateLock');
/**
 * @see canInsertBlockType in core/block-editor store.
 */

const canInsertBlockType = getBlockEditorSelector('canInsertBlockType');
/**
 * @see getInserterItems in core/block-editor store.
 */

const getInserterItems = getBlockEditorSelector('getInserterItems');
/**
 * @see hasInserterItems in core/block-editor store.
 */

const hasInserterItems = getBlockEditorSelector('hasInserterItems');
/**
 * @see getBlockListSettings in core/block-editor store.
 */

const getBlockListSettings = getBlockEditorSelector('getBlockListSettings');
/**
 * Returns the default template types.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The template types.
 */

function __experimentalGetDefaultTemplateTypes(state) {
  return getEditorSettings(state)?.defaultTemplateTypes;
}
/**
 * Returns the default template part areas.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} The template part areas.
 */

const __experimentalGetDefaultTemplatePartAreas = rememo(state => {
  const areas = getEditorSettings(state)?.defaultTemplatePartAreas || [];
  return areas?.map(item => {
    return { ...item,
      icon: getTemplatePartIcon(item.icon)
    };
  });
}, state => [getEditorSettings(state)?.defaultTemplatePartAreas]);
/**
 * Returns a default template type searched by slug.
 *
 * @param {Object} state Global application state.
 * @param {string} slug  The template type slug.
 *
 * @return {Object} The template type.
 */

const __experimentalGetDefaultTemplateType = Object(rememo["a" /* default */])((state, slug) => Object(external_lodash_["find"])(__experimentalGetDefaultTemplateTypes(state), {
  slug
}) || {}, (state, slug) => [__experimentalGetDefaultTemplateTypes(state), slug]);
/**
 * Given a template entity, return information about it which is ready to be
 * rendered, such as the title, description, and icon.
 *
 * @param {Object} state    Global application state.
 * @param {Object} template The template for which we need information.
 * @return {Object} Information about the template, including title, description, and icon.
 */

function __experimentalGetTemplateInfo(state, template) {
  if (!template) {
    return {};
  }

  const {
    excerpt,
    slug,
    title,
    area
  } = template;

  const {
    title: defaultTitle,
    description: defaultDescription
  } = __experimentalGetDefaultTemplateType(state, slug);

  const templateTitle = typeof title === 'string' ? title : title?.rendered;
  const templateDescription = typeof description === 'string' ? description : description?.raw;
  const templateIcon = __experimentalGetDefaultTemplatePartAreas(state).find(item => area === item.area)?.icon || library_layout;
  return {
    title: templateTitle && templateTitle !== slug ? templateTitle : defaultTitle || slug,
    description: templateDescription || defaultDescription,
    icon: templateIcon
  };
}
/**
 * Returns a post type label depending on the current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {string|undefined} The post type label if available, otherwise undefined.
 */

const getPostTypeLabel = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const currentPostType = getCurrentPostType(state);
  const postType = select(external_wp_coreData_namespaceObject.store).getPostType(currentPostType); // Disable reason: Post type labels object is shaped like this.
  // eslint-disable-next-line camelcase

  return postType?.labels?.singular_name;
});

// EXTERNAL MODULE: external ["wp","notices"]
var external_wp_notices_ = __webpack_require__("onLe");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/notice-builder.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Builds the arguments for a success notification dispatch.
 *
 * @param {Object} data Incoming data to build the arguments from.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveSuccess(data) {
  var _postType$viewable;

  const {
    previousPost,
    post,
    postType
  } = data; // Autosaves are neither shown a notice nor redirected.

  if (data.options?.isAutosave) {
    return [];
  } // No notice is shown after trashing a post


  if (post.status === 'trash' && previousPost.status !== 'trash') {
    return [];
  }

  const publishStatus = ['publish', 'private', 'future'];
  const isPublished = publishStatus.includes(previousPost.status);
  const willPublish = publishStatus.includes(post.status);
  let noticeMessage;
  let shouldShowLink = (_postType$viewable = postType?.viewable) !== null && _postType$viewable !== void 0 ? _postType$viewable : false;
  let isDraft; // Always should a notice, which will be spoken for accessibility.

  if (!isPublished && !willPublish) {
    // If saving a non-published post, don't show notice.
    noticeMessage = Object(external_wp_i18n_["__"])('Saved');
    shouldShowLink = false;
  } else if (isPublished && !willPublish) {
    // If undoing publish status, show specific notice
    noticeMessage = postType.labels.item_reverted_to_draft;
    shouldShowLink = false;
  } else if (!isPublished && willPublish) {
    // If publishing or scheduling a post, show the corresponding
    // publish message
    noticeMessage = {
      publish: postType.labels.item_published,
      private: postType.labels.item_published_privately,
      future: postType.labels.item_scheduled
    }[post.status];
  } else {
    // Generic fallback notice
    noticeMessage = postType.labels.item_updated;
  }

  const actions = [];

  if (shouldShowLink) {
    actions.push({
      label: postType.labels.view_item,
      url: post.link
    });
  }

  return [noticeMessage, {
    id: SAVE_POST_NOTICE_ID,
    type: 'snackbar',
    actions
  }];
}
/**
 * Builds the fail notification arguments for dispatch.
 *
 * @param {Object} data Incoming data to build the arguments with.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveFail(data) {
  const {
    post,
    edits,
    error
  } = data;

  if (error && 'rest_autosave_no_changes' === error.code) {
    // Autosave requested a new autosave, but there were no changes. This shouldn't
    // result in an error notice for the user.
    return [];
  }

  const publishStatus = ['publish', 'private', 'future'];
  const isPublished = publishStatus.indexOf(post.status) !== -1; // If the post was being published, we show the corresponding publish error message
  // Unless we publish an "updating failed" message

  const messages = {
    publish: Object(external_wp_i18n_["__"])('Publishing failed.'),
    private: Object(external_wp_i18n_["__"])('Publishing failed.'),
    future: Object(external_wp_i18n_["__"])('Scheduling failed.')
  };
  let noticeMessage = !isPublished && publishStatus.indexOf(edits.status) !== -1 ? messages[edits.status] : Object(external_wp_i18n_["__"])('Updating failed.'); // Check if message string contains HTML. Notice text is currently only
  // supported as plaintext, and stripping the tags may muddle the meaning.

  if (error.message && !/<\/?[^>]*>/.test(error.message)) {
    noticeMessage = [noticeMessage, error.message].join(' ');
  }

  return [noticeMessage, {
    id: SAVE_POST_NOTICE_ID
  }];
}
/**
 * Builds the trash fail notification arguments for dispatch.
 *
 * @param {Object} data
 *
 * @return {Array} Arguments for dispatch.
 */

function getNotificationArgumentsForTrashFail(data) {
  return [data.error.message && data.error.code !== 'unknown_error' ? data.error.message : Object(external_wp_i18n_["__"])('Trashing failed'), {
    id: TRASH_POST_NOTICE_ID
  }];
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/actions.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



/**
 * Returns an action generator used in signalling that editor has initialized with
 * the specified post object and editor settings.
 *
 * @param {Object} post     Post object.
 * @param {Object} edits    Initial edited attributes object.
 * @param {Array?} template Block Template.
 */

const setupEditor = (post, edits, template) => ({
  dispatch
}) => {
  dispatch.setupEditorState(post); // Apply a template for new posts only, if exists.

  const isNewPost = post.status === 'auto-draft';

  if (isNewPost && template) {
    // In order to ensure maximum of a single parse during setup, edits are
    // included as part of editor setup action. Assume edited content as
    // canonical if provided, falling back to post.
    let content;

    if (Object(external_lodash_["has"])(edits, ['content'])) {
      content = edits.content;
    } else {
      content = post.content.raw;
    }

    let blocks = Object(external_wp_blocks_["parse"])(content);
    blocks = Object(external_wp_blocks_["synchronizeBlocksWithTemplate"])(blocks, template);
    yield actions_resetEditorBlocks(blocks, {
      __unstableShouldCreateUndoLevel: false
    });
  }

  if (edits && Object.values(edits).some(([key, edit]) => {
    var _post$key$raw;

    return edit !== ((_post$key$raw = post[key]?.raw) !== null && _post$key$raw !== void 0 ? _post$key$raw : post[key]);
  })) {
    dispatch.editPost(edits);
  }
}
/**
 * Returns an action object signalling that the editor is being destroyed and
 * that any necessary state or side-effect cleanup should occur.
 *
 * @return {Object} Action object.
 */

function actions_experimentalTearDownEditor() {
  return {
    type: 'TEAR_DOWN_EDITOR'
  };
}
/**
 * Returns an action object used in signalling that the latest version of the
 * post has been received, either by initialization or save.
 *
 * @param {Object} post Post object.
 *
 * @return {Object} Action object.
 */

function resetPost(post) {
  return {
    type: 'RESET_POST',
    post
  };
}
/**
 * Action for dispatching that a post update request has started.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateStart() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: 'REQUEST_POST_UPDATE_START',
    options
  };
}
/**
 * Action for dispatching that a post update request has finished.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateFinish() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: 'REQUEST_POST_UPDATE_FINISH',
    options
  };
}
/**
 * Returns an action object used in signalling that a patch of updates for the
 * latest version of the post have been received.
 *
 * @return {Object} Action object.
 * @deprecated since Gutenberg 9.7.0.
 */

function updatePost() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).updatePost", {
    since: '5.7',
    alternative: 'Use the core entities store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Returns an action object used to setup the editor state when first opening
 * an editor.
 *
 * @param {Object} post Post object.
 *
 * @return {Object} Action object.
 */

function setupEditorState(post) {
  return {
    type: 'SETUP_EDITOR_STATE',
    post
  };
}
/**
 * Returns an action object used in signalling that attributes of the post have
 * been edited.
 *
 * @param {Object} edits   Post attributes to edit.
 * @param {Object} options Options for the edit.
 *
 * @yield {Object} Action object or control.
 */

const editPost = (edits, options) => ({
  select,
  registry
}) => {
  const {
    id,
    type
  } = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
  yield external_wp_data_["controls"].dispatch(external_wp_coreData_["store"], 'editEntityRecord', 'postType', type, id, edits, options);
}
/**
 * Action generator for saving the current post in the editor.
 *
 * @param {Object} options
 */

const savePost = (options = {}) => async ({
  select,
  dispatch,
  registry
}) => {
  if (!select.isEditedPostSaveable()) {
    return;
  }

  const content = select.getEditedPostContent();

  if (!options.isAutosave) {
    dispatch.editPost({
      content
    }, {
      undoIgnore: true
    });
  }

  const previousRecord = select.getCurrentPost();
  const edits = {
    id: previousRecord.id,
    ...registry.select(external_wp_coreData_namespaceObject.store).getEntityRecordNonTransientEdits('postType', previousRecord.type, previousRecord.id),
    content
  };
  dispatch({
    type: 'REQUEST_POST_UPDATE_START',
    options
  });
  await registry.dispatch(external_wp_coreData_namespaceObject.store).saveEntityRecord('postType', previousRecord.type, edits, options);
  dispatch({
    type: 'REQUEST_POST_UPDATE_FINISH',
    options
  });
  const error = registry.select(external_wp_coreData_namespaceObject.store).getLastEntitySaveError('postType', previousRecord.type, previousRecord.id);

  if (error) {
    const args = getNotificationArgumentsForSaveFail({
      post: previousRecord,
      edits,
      error
    });

    if (args.length) {
      registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice(...args);
    }
  } else {
    const updatedRecord = select.getCurrentPost();
    const args = getNotificationArgumentsForSaveSuccess({
      previousPost: previousRecord,
      post: updatedRecord,
      postType: await registry.resolveSelect(external_wp_coreData_namespaceObject.store).getPostType(updatedRecord.type),
      options
    });

    if (args.length) {
      registry.dispatch(external_wp_notices_namespaceObject.store).createSuccessNotice(...args);
    } // Make sure that any edits after saving create an undo level and are
    // considered for change detection.


    if (!options.isAutosave) {
      registry.dispatch(external_wp_blockEditor_namespaceObject.store).__unstableMarkLastChangeAsPersistent();
    }
  }
};
/**
 * Action generator for handling refreshing the current post.
 */

function* refreshPost() {
  const post = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
  const postTypeSlug = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPostType');
  const postType = yield external_wp_data_["controls"].resolveSelect(external_wp_coreData_["store"], 'getPostType', postTypeSlug);
  const newPost = yield Object(external_wp_dataControls_["apiFetch"])({
    // Timestamp arg allows caller to bypass browser caching, which is
    // expected for this specific function.
    path: `/wp/v2/${postType.rest_base}/${post.id}` + `?context=edit&_timestamp=${Date.now()}`
  });
  yield external_wp_data_["controls"].dispatch(STORE_NAME, 'resetPost', newPost);
}
/**
 * Action generator for trashing the current post in the editor.
 */

const trashPost = () => async ({
  select,
  dispatch,
  registry
}) => {
  const postTypeSlug = select.getCurrentPostType();
  const postType = await registry.resolveSelect(external_wp_coreData_namespaceObject.store).getPostType(postTypeSlug);
  registry.dispatch(external_wp_notices_namespaceObject.store).removeNotice(TRASH_POST_NOTICE_ID);
  const {
    rest_base: restBase,
    rest_namespace: restNamespace = 'wp/v2'
  } = postType;
  dispatch({
    type: 'REQUEST_POST_DELETE_START'
  });

  try {
    const post = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
    yield Object(external_wp_dataControls_["apiFetch"])({
      path: `/wp/v2/${postType.rest_base}/${post.id}`,
      method: 'DELETE'
    });
    yield external_wp_data_["controls"].dispatch(STORE_NAME, 'savePost');
  } catch (error) {
    yield external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'createErrorNotice', ...getNotificationArgumentsForTrashFail({
      error
    }));
  }
}
/**
 * Action generator used in signalling that the post should autosave.  This
 * includes server-side autosaving (default) and client-side (a.k.a. local)
 * autosaving (e.g. on the Web, the post might be committed to Session
 * Storage).
 *
 * @param {Object?} options Extra flags to identify the autosave.
 */

const autosave = ({
  local = false,
  ...options
} = {}) => async ({
  select,
  dispatch
}) => {
  if (local) {
    const post = select.getCurrentPost();
    const isPostNew = select.isEditedPostNew();
    const title = select.getEditedPostAttribute('title');
    const content = select.getEditedPostAttribute('content');
    const excerpt = select.getEditedPostAttribute('excerpt');
    localAutosaveSet(post.id, isPostNew, title, content, excerpt);
  } else {
    await dispatch.savePost({
      isAutosave: true,
      ...options
    });
  }
};
/**
 * Returns an action object used in signalling that undo history should
 * restore last popped state.
 *
 * @yield {Object} Action object.
 */

const redo = () => ({
  registry
}) => {
  registry.dispatch(external_wp_coreData_namespaceObject.store).redo();
};
/**
 * Returns an action object used in signalling that undo history should pop.
 *
 * @yield {Object} Action object.
 */

const undo = () => ({
  registry
}) => {
  registry.dispatch(external_wp_coreData_namespaceObject.store).undo();
};
/**
 * Returns an action object used in signalling that undo history record should
 * be created.
 *
 * @return {Object} Action object.
 */

function createUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Returns an action object used to lock the editor.
 *
 * @param {Object} lock Details about the post lock status, user, and nonce.
 *
 * @return {Object} Action object.
 */

function actions_updatePostLock(lock) {
  return {
    type: 'UPDATE_POST_LOCK',
    lock
  };
}
/**
 * Returns an action object used in signalling that the user has enabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

const enablePublishSidebar = () => ({
  registry
}) => {
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core/edit-post', 'isPublishSidebarEnabled', true);
};
/**
 * Returns an action object used in signalling that the user has disabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

const disablePublishSidebar = () => ({
  registry
}) => {
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core/edit-post', 'isPublishSidebarEnabled', false);
};
/**
 * Returns an action object used to signal that post saving is locked.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * const { subscribe } = wp.data;
 *
 * const initialPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 *
 * // Only allow publishing posts that are set to a future date.
 * if ( 'publish' !== initialPostStatus ) {
 *
 * 	// Track locking.
 * 	let locked = false;
 *
 * 	// Watch for the publish event.
 * 	let unssubscribe = subscribe( () => {
 * 		const currentPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 * 		if ( 'publish' !== currentPostStatus ) {
 *
 * 			// Compare the post date to the current date, lock the post if the date isn't in the future.
 * 			const postDate = new Date( wp.data.select( 'core/editor' ).getEditedPostAttribute( 'date' ) );
 * 			const currentDate = new Date();
 * 			if ( postDate.getTime() <= currentDate.getTime() ) {
 * 				if ( ! locked ) {
 * 					locked = true;
 * 					wp.data.dispatch( 'core/editor' ).lockPostSaving( 'futurelock' );
 * 				}
 * 			} else {
 * 				if ( locked ) {
 * 					locked = false;
 * 					wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'futurelock' );
 * 				}
 * 			}
 * 		}
 * 	} );
 * }
 * ```
 *
 * @return {Object} Action object
 */

function lockPostSaving(lockName) {
  return {
    type: 'LOCK_POST_SAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that post saving is unlocked.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostSaving(lockName) {
  return {
    type: 'UNLOCK_POST_SAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that post autosaving is locked.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Lock post autosaving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).lockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function lockPostAutosaving(lockName) {
  return {
    type: 'LOCK_POST_AUTOSAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that post autosaving is unlocked.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostAutosaving(lockName) {
  return {
    type: 'UNLOCK_POST_AUTOSAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that the blocks have been updated.
 *
 * @param {Array}   blocks  Block Array.
 * @param {?Object} options Optional options.
 *
 * @yield {Object} Action object
 */

const resetEditorBlocks = (blocks, options = {}) => ({
  select,
  dispatch,
  registry
}) => {
  const {
    __unstableShouldCreateUndoLevel,
    selection
  } = options;
  const edits = {
    blocks,
    selection
  };

  if (__unstableShouldCreateUndoLevel !== false) {
    const {
      id,
      type
    } = select.getCurrentPost();
    const noChange = registry.select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord('postType', type, id).blocks === edits.blocks;

    if (noChange) {
      registry.dispatch(external_wp_coreData_namespaceObject.store).__unstableCreateUndoLevel('postType', type, id);

      return;
    } // We create a new function here on every persistent edit
    // to make sure the edit makes the post dirty and creates
    // a new undo level.


    edits.content = ({
      blocks: blocksForSerialization = []
    }) => (0,external_wp_blocks_namespaceObject.__unstableSerializeAndClean)(blocksForSerialization);
  }

  dispatch.editPost(edits);
};
/*
 * Returns an action object used in signalling that the post editor settings have been updated.
 *
 * @param {Object} settings Updated settings
 *
 * @return {Object} Action object
 */

function actions_updateEditorSettings(settings) {
  return {
    type: 'UPDATE_EDITOR_SETTINGS',
    settings
  };
}
/**
 * Backward compatibility
 */

const getBlockEditorAction = name => (...args) => ({
  registry
}) => {
  external_wp_deprecated_default()("`wp.data.dispatch( 'core/editor' )." + name + '`', {
    since: '5.3',
    alternative: "`wp.data.dispatch( 'core/block-editor' )." + name + '`',
    version: '6.2'
  });
  registry.dispatch(external_wp_blockEditor_namespaceObject.store)[name](...args);
};
/**
 * @see resetBlocks in core/block-editor store.
 */


const resetBlocks = getBlockEditorAction('resetBlocks');
/**
 * @see receiveBlocks in core/block-editor store.
 */

const receiveBlocks = getBlockEditorAction('receiveBlocks');
/**
 * @see updateBlock in core/block-editor store.
 */

const updateBlock = getBlockEditorAction('updateBlock');
/**
 * @see updateBlockAttributes in core/block-editor store.
 */

const updateBlockAttributes = getBlockEditorAction('updateBlockAttributes');
/**
 * @see selectBlock in core/block-editor store.
 */

const actions_selectBlock = getBlockEditorAction('selectBlock');
/**
 * @see startMultiSelect in core/block-editor store.
 */

const startMultiSelect = getBlockEditorAction('startMultiSelect');
/**
 * @see stopMultiSelect in core/block-editor store.
 */

const stopMultiSelect = getBlockEditorAction('stopMultiSelect');
/**
 * @see multiSelect in core/block-editor store.
 */

const multiSelect = getBlockEditorAction('multiSelect');
/**
 * @see clearSelectedBlock in core/block-editor store.
 */

const actions_clearSelectedBlock = getBlockEditorAction('clearSelectedBlock');
/**
 * @see toggleSelection in core/block-editor store.
 */

const toggleSelection = getBlockEditorAction('toggleSelection');
/**
 * @see replaceBlocks in core/block-editor store.
 */

const replaceBlocks = getBlockEditorAction('replaceBlocks');
/**
 * @see replaceBlock in core/block-editor store.
 */

const replaceBlock = getBlockEditorAction('replaceBlock');
/**
 * @see moveBlocksDown in core/block-editor store.
 */

const moveBlocksDown = getBlockEditorAction('moveBlocksDown');
/**
 * @see moveBlocksUp in core/block-editor store.
 */

const moveBlocksUp = getBlockEditorAction('moveBlocksUp');
/**
 * @see moveBlockToPosition in core/block-editor store.
 */

const moveBlockToPosition = getBlockEditorAction('moveBlockToPosition');
/**
 * @see insertBlock in core/block-editor store.
 */

const insertBlock = getBlockEditorAction('insertBlock');
/**
 * @see insertBlocks in core/block-editor store.
 */

const actions_insertBlocks = getBlockEditorAction('insertBlocks');
/**
 * @see showInsertionPoint in core/block-editor store.
 */

const showInsertionPoint = getBlockEditorAction('showInsertionPoint');
/**
 * @see hideInsertionPoint in core/block-editor store.
 */

const hideInsertionPoint = getBlockEditorAction('hideInsertionPoint');
/**
 * @see setTemplateValidity in core/block-editor store.
 */

const actions_setTemplateValidity = getBlockEditorAction('setTemplateValidity');
/**
 * @see synchronizeTemplate in core/block-editor store.
 */

const actions_synchronizeTemplate = getBlockEditorAction('synchronizeTemplate');
/**
 * @see mergeBlocks in core/block-editor store.
 */

const mergeBlocks = getBlockEditorAction('mergeBlocks');
/**
 * @see removeBlocks in core/block-editor store.
 */

const removeBlocks = getBlockEditorAction('removeBlocks');
/**
 * @see removeBlock in core/block-editor store.
 */

const removeBlock = getBlockEditorAction('removeBlock');
/**
 * @see toggleBlockMode in core/block-editor store.
 */

const toggleBlockMode = getBlockEditorAction('toggleBlockMode');
/**
 * @see startTyping in core/block-editor store.
 */

const startTyping = getBlockEditorAction('startTyping');
/**
 * @see stopTyping in core/block-editor store.
 */

const stopTyping = getBlockEditorAction('stopTyping');
/**
 * @see enterFormattedText in core/block-editor store.
 */

const enterFormattedText = getBlockEditorAction('enterFormattedText');
/**
 * @see exitFormattedText in core/block-editor store.
 */

const exitFormattedText = getBlockEditorAction('exitFormattedText');
/**
 * @see insertDefaultBlock in core/block-editor store.
 */

const actions_insertDefaultBlock = getBlockEditorAction('insertDefaultBlock');
/**
 * @see updateBlockListSettings in core/block-editor store.
 */

const updateBlockListSettings = getBlockEditorAction('updateBlockListSettings');

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/controls.js
/**
 * Function returning a sessionStorage key to set or retrieve a given post's
 * automatic session backup.
 *
 * Keys are crucially prefixed with 'wp-autosave-' so that wp-login.php's
 * `loggedout` handler can clear sessionStorage of any user-private content.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/6dad32d2aed47e6c0cf2aee8410645f6d7aba6bd/src/wp-login.php#L103
 *
 * @param {string}  postId    Post ID.
 * @param {boolean} isPostNew Whether post new.
 *
 * @return {string} sessionStorage key
 */
function postKey(postId, isPostNew) {
  return `wp-autosave-block-editor-post-${isPostNew ? 'auto-draft' : postId}`;
}

function localAutosaveGet(postId, isPostNew) {
  return window.sessionStorage.getItem(postKey(postId, isPostNew));
}
function localAutosaveSet(postId, isPostNew, title, content, excerpt) {
  window.sessionStorage.setItem(postKey(postId, isPostNew), JSON.stringify({
    post_title: title,
    content,
    excerpt
  }));
}
function localAutosaveClear(postId, isPostNew) {
  window.sessionStorage.removeItem(postKey(postId, isPostNew));
}
const controls = {
  LOCAL_AUTOSAVE_SET(_ref) {
    let {
      postId,
      isPostNew,
      title,
      content,
      excerpt
    } = _ref;
    localAutosaveSet(postId, isPostNew, title, content, excerpt);
  }

};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

const storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
  controls: { ...external_wp_dataControls_["controls"],
    ...store_controls
  }
};
/**
 * Store definition for the editor namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, { ...storeConfig,
  persist: ['preferences']
}); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

Object(external_wp_data_["registerStore"])(STORE_NAME, { ...storeConfig,
  persist: ['preferences']
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/custom-sources-backwards-compatibility.js


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/** @typedef {import('@wordpress/compose').WPHigherOrderComponent} WPHigherOrderComponent */

/** @typedef {import('@wordpress/blocks').WPBlockSettings} WPBlockSettings */

/**
 * Object whose keys are the names of block attributes, where each value
 * represents the meta key to which the block attribute is intended to save.
 *
 * @see https://developer.wordpress.org/reference/functions/register_meta/
 *
 * @typedef {Object<string,string>} WPMetaAttributeMapping
 */

/**
 * Given a mapping of attribute names (meta source attributes) to their
 * associated meta key, returns a higher order component that overrides its
 * `attributes` and `setAttributes` props to sync any changes with the edited
 * post's meta keys.
 *
 * @param {WPMetaAttributeMapping} metaAttributes Meta attribute mapping.
 *
 * @return {WPHigherOrderComponent} Higher-order component.
 */

const createWithMetaAttributeSource = metaAttributes => (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(BlockEdit => ({
  attributes,
  setAttributes,
  ...props
}) => {
  const postType = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getCurrentPostType(), []);
  const [meta, setMeta] = (0,external_wp_coreData_namespaceObject.useEntityProp)('postType', postType, 'meta');
  const mergedAttributes = (0,external_wp_element_namespaceObject.useMemo)(() => ({ ...attributes,
    ...Object.fromEntries(Object.entries(metaAttributes).map(([attributeKey, metaKey]) => [attributeKey, meta[metaKey]]))
  }), [attributes, meta]);
  return (0,external_wp_element_namespaceObject.createElement)(BlockEdit, {
    attributes: mergedAttributes,
    setAttributes: nextAttributes => {
      const nextMeta = Object.fromEntries(Object.entries(nextAttributes !== null && nextAttributes !== void 0 ? nextAttributes : {}).filter( // Filter to intersection of keys between the updated
      // attributes and those with an associated meta key.
      ([key]) => key in metaAttributes).map(([attributeKey, value]) => [// Rename the keys to the expected meta key name.
      metaAttributes[attributeKey], value]));

      if (Object.entries(nextMeta).length) {
        setMeta(nextMeta);
      }

      setAttributes(nextAttributes);
    },
    ...props
  });
}, 'withMetaAttributeSource');
/**
 * Filters a registered block's settings to enhance a block's `edit` component
 * to upgrade meta-sourced attributes to use the post's meta entity property.
 *
 * @param {WPBlockSettings} settings Registered block settings.
 *
 * @return {WPBlockSettings} Filtered block settings.
 */


function shimAttributeSource(settings) {
  var _settings$attributes;

  /** @type {WPMetaAttributeMapping} */
  const metaAttributes = Object.fromEntries(Object.entries((_settings$attributes = settings.attributes) !== null && _settings$attributes !== void 0 ? _settings$attributes : {}).filter(([, {
    source
  }]) => source === 'meta').map(([attributeKey, {
    meta
  }]) => [attributeKey, meta]));

  if (Object.entries(metaAttributes).length) {
    settings.edit = createWithMetaAttributeSource(metaAttributes)(settings.edit);
  }

  return settings;
}

Object(external_wp_hooks_["addFilter"])('blocks.registerBlockType', 'core/editor/custom-sources-backwards-compatibility/shim-attribute-source', shimAttributeSource); // The above filter will only capture blocks registered after the filter was
// added. There may already be blocks registered by this point, and those must
// be updated to apply the shim.
//
// The following implementation achieves this, albeit with a couple caveats:
// - Only blocks registered on the global store will be modified.
// - The block settings are directly mutated, since there is currently no
//   mechanism to update an existing block registration. This is the reason for
//   `getBlockType` separate from `getBlockTypes`, since the latter returns a
//   _copy_ of the block registration (i.e. the mutation would not affect the
//   actual registered block settings).
//
// `getBlockTypes` or `getBlockType` implementation could change in the future
// in regards to creating settings clones, but the corresponding end-to-end
// tests for meta blocks should cover against any potential regressions.
//
// In the future, we could support updating block settings, at which point this
// implementation could use that mechanism instead.

(0,external_wp_data_namespaceObject.select)(external_wp_blocks_namespaceObject.store).getBlockTypes().map(({
  name
}) => (0,external_wp_data_namespaceObject.select)(external_wp_blocks_namespaceObject.store).getBlockType(name)).forEach(shimAttributeSource);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js


/**
 * WordPress dependencies
 */



/** @typedef {import('@wordpress/components').WPCompleter} WPCompleter */

function getUserLabel(user) {
  const avatar = user.avatar_urls && user.avatar_urls[24] ? Object(external_wp_element_["createElement"])("img", {
    className: "editor-autocompleters__user-avatar",
    alt: "",
    src: user.avatar_urls[24]
  }) : Object(external_wp_element_["createElement"])("span", {
    className: "editor-autocompleters__no-avatar"
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, avatar, Object(external_wp_element_["createElement"])("span", {
    className: "editor-autocompleters__user-name"
  }, user.name), Object(external_wp_element_["createElement"])("span", {
    className: "editor-autocompleters__user-slug"
  }, user.slug));
}
/**
 * A user mentions completer.
 *
 * @type {WPCompleter}
 */

/* harmony default export */ var autocompleters_user = ({
  name: 'users',
  className: 'editor-autocompleters__user',
  triggerPrefix: '@',

  useItems(filterValue) {
    const users = Object(external_wp_data_["useSelect"])(select => {
      const {
        getUsers
      } = select(external_wp_coreData_["store"]);
      return getUsers({
        context: 'view',
        search: encodeURIComponent(filterValue)
      });
    }, [filterValue]);
    const options = Object(external_wp_element_["useMemo"])(() => users ? users.map(user => ({
      key: `user-${user.slug}`,
      value: user,
      label: getUserLabel(user)
    })) : [], [users]);
    return [options];
  },

  getOptionCompletion(user) {
    return `@${user.slug}`;
  }

});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/default-autocompleters.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function setDefaultCompleters(completers = []) {
  // Provide copies so filters may directly modify them.
  completers.push({ ...user
  });
  return completers;
}

Object(external_wp_hooks_["addFilter"])('editor.Autocomplete.completers', 'editor/autocompleters/set-default-completers', setDefaultCompleters);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/index.js
/**
 * Internal dependencies
 */



// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/index.js


// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * AutosaveMonitor invokes `props.autosave()` within at most `interval` seconds after an unsaved change is detected.
 *
 * The logic is straightforward: a check is performed every `props.interval` seconds. If any changes are detected, `props.autosave()` is called.
 * The time between the change and the autosave varies but is no larger than `props.interval` seconds. Refer to the code below for more details, such as
 * the specific way of detecting changes.
 *
 * There are two caveats:
 * * If `props.isAutosaveable` happens to be false at a time of checking for changes, the check is retried every second.
 * * The timer may be disabled by setting `props.disableIntervalChecks` to `true`. In that mode, any change will immediately trigger `props.autosave()`.
 */

class autosave_monitor_AutosaveMonitor extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.needsAutosave = !!(props.isDirty && props.isAutosaveable);
  }

  componentDidMount() {
    if (!this.props.disableIntervalChecks) {
      this.setAutosaveTimer();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.disableIntervalChecks) {
      if (this.props.editsReference !== prevProps.editsReference) {
        this.props.autosave();
      }

      return;
    }

    if (this.props.interval !== prevProps.interval) {
      clearTimeout(this.timerId);
      this.setAutosaveTimer();
    }

    if (!this.props.isDirty) {
      this.needsAutosave = false;
      return;
    }

    if (this.props.isAutosaving && !prevProps.isAutosaving) {
      this.needsAutosave = false;
      return;
    }

    if (this.props.editsReference !== prevProps.editsReference) {
      this.needsAutosave = true;
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  setAutosaveTimer(timeout = this.props.interval * 1000) {
    this.timerId = setTimeout(() => {
      this.autosaveTimerHandler();
    }, timeout);
  }

  autosaveTimerHandler() {
    if (!this.props.isAutosaveable) {
      this.setAutosaveTimer(1000);
      return;
    }

    if (this.needsAutosave) {
      this.needsAutosave = false;
      this.props.autosave();
    }

    this.setAutosaveTimer();
  }

  render() {
    return null;
  }

}
/* harmony default export */ var autosave_monitor = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])((select, ownProps) => {
  const {
    getReferenceByDistinctEdits
  } = select(external_wp_coreData_["store"]);
  const {
    isEditedPostDirty,
    isEditedPostAutosaveable,
    isAutosavingPost,
    getEditorSettings
  } = select(store);
  const {
    interval = getEditorSettings().autosaveInterval
  } = ownProps;
  return {
    editsReference: getReferenceByDistinctEdits(),
    isDirty: isEditedPostDirty(),
    isAutosaveable: isEditedPostAutosaveable(),
    isAutosaving: isAutosavingPost(),
    interval
  };
}), Object(external_wp_data_["withDispatch"])((dispatch, ownProps) => ({
  autosave() {
    const {
      autosave = dispatch(store).autosave
    } = ownProps;
    autosave();
  }

}))])(autosave_monitor_AutosaveMonitor));

// EXTERNAL MODULE: external ["wp","richText"]
var external_wp_richText_ = __webpack_require__("qRz9");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/item.js


/**
 * External dependencies
 */


const TableOfContentsItem = ({
  children,
  isValid,
  level,
  href,
  onSelect
}) => (0,external_wp_element_namespaceObject.createElement)("li", {
  className: classnames_default()('document-outline__item', `is-${level.toLowerCase()}`, {
    'is-invalid': !isValid
  })
}, (0,external_wp_element_namespaceObject.createElement)("a", {
  href: href,
  className: "document-outline__button",
  onClick: onSelect
}, (0,external_wp_element_namespaceObject.createElement)("span", {
  className: "document-outline__emdash",
  "aria-hidden": "true"
}), (0,external_wp_element_namespaceObject.createElement)("strong", {
  className: "document-outline__level"
}, level), (0,external_wp_element_namespaceObject.createElement)("span", {
  className: "document-outline__item-content"
}, children)));

/* harmony default export */ var document_outline_item = (TableOfContentsItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



/**
 * Module constants
 */

const emptyHeadingContent = Object(external_wp_element_["createElement"])("em", null, Object(external_wp_i18n_["__"])('(Empty heading)'));
const incorrectLevelContent = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message"
}, Object(external_wp_i18n_["__"])('(Incorrect heading level)'))];
const singleH1Headings = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break-h1"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message-h1"
}, Object(external_wp_i18n_["__"])('(Your theme may already use a H1 for the post title)'))];
const multipleH1Headings = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break-multiple-h1"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message-multiple-h1"
}, Object(external_wp_i18n_["__"])('(Multiple H1 headings are not recommended)'))];
/**
 * Returns an array of heading blocks enhanced with the following properties:
 * level   - An integer with the heading level.
 * isEmpty - Flag indicating if the heading has no content.
 *
 * @param {?Array} blocks An array of blocks.
 *
 * @return {Array} An array of heading blocks enhanced with the properties described above.
 */

const computeOutlineHeadings = (blocks = []) => {
  return blocks.flatMap((block = {}) => {
    if (block.name === 'core/heading') {
      return { ...block,
        level: block.attributes.level,
        isEmpty: isEmptyHeading(block)
      };
    }

    return computeOutlineHeadings(block.innerBlocks);
  });
};

const isEmptyHeading = heading => !heading.attributes.content || heading.attributes.content.length === 0;

const DocumentOutline = ({
  blocks = [],
  title,
  onSelect,
  isTitleSupported,
  hasOutlineItemsDisabled
}) => {
  const headings = computeOutlineHeadings(blocks);
  const {
    selectBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);

  if (headings.length < 1) {
    return null;
  }

  let prevHeadingLevel = 1; // Not great but it's the simplest way to locate the title right now.

  const titleNode = document.querySelector('.editor-post-title__input');
  const hasTitle = isTitleSupported && title && titleNode;
  const countByLevel = Object(external_lodash_["countBy"])(headings, 'level');
  const hasMultipleH1 = countByLevel[1] > 1;
  return Object(external_wp_element_["createElement"])("div", {
    className: "document-outline"
  }, Object(external_wp_element_["createElement"])("ul", null, hasTitle && Object(external_wp_element_["createElement"])(document_outline_item, {
    level: Object(external_wp_i18n_["__"])('Title'),
    isValid: true,
    onSelect: onSelect,
    href: `#${titleNode.id}`,
    isDisabled: hasOutlineItemsDisabled
  }, title), headings.map((item, index) => {
    // Headings remain the same, go up by one, or down by any amount.
    // Otherwise there are missing levels.
    const isIncorrectLevel = item.level > prevHeadingLevel + 1;
    const isValid = !item.isEmpty && !isIncorrectLevel && !!item.level && (item.level !== 1 || !hasMultipleH1 && !hasTitle);
    prevHeadingLevel = item.level;
    return Object(external_wp_element_["createElement"])(document_outline_item, {
      key: index,
      level: `H${item.level}`,
      isValid: isValid,
      isDisabled: hasOutlineItemsDisabled,
      href: `#block-${item.clientId}`,
      onSelect: () => {
        selectBlock(item.clientId);
        onSelect?.();
      }
    }, item.isEmpty ? emptyHeadingContent : (0,external_wp_richText_namespaceObject.getTextContent)((0,external_wp_richText_namespaceObject.create)({
      html: item.attributes.content
    })), isIncorrectLevel && incorrectLevelContent, item.level === 1 && hasMultipleH1 && multipleH1Headings, hasTitle && item.level === 1 && !hasMultipleH1 && singleH1Headings);
  })));
};
/* harmony default export */ var document_outline = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withSelect)(select => {
  var _postType$supports$ti;

  const {
    getBlocks
  } = select(external_wp_blockEditor_["store"]);
  const {
    getEditedPostAttribute
  } = select(store);
  const {
    getPostType
  } = select(external_wp_coreData_["store"]);
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    title: getEditedPostAttribute('title'),
    blocks: getBlocks(),
    isTitleSupported: (_postType$supports$ti = postType?.supports?.title) !== null && _postType$supports$ti !== void 0 ? _postType$supports$ti : false
  };
}))(DocumentOutline));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/check.js
/**
 * WordPress dependencies
 */



function DocumentOutlineCheck({
  blocks,
  children
}) {
  const headings = blocks.filter(block => block.name === 'core/heading');

  if (headings.length < 1) {
    return null;
  }

  return children;
}

/* harmony default export */ var check = (Object(external_wp_data_["withSelect"])(select => ({
  blocks: select(external_wp_blockEditor_["store"]).getBlocks()
}))(DocumentOutlineCheck));

// EXTERNAL MODULE: external ["wp","keyboardShortcuts"]
var external_wp_keyboardShortcuts_ = __webpack_require__("hF7m");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function SaveShortcut({
  resetBlocksOnSave
}) {
  const {
    resetEditorBlocks,
    savePost
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    isEditedPostDirty,
    getPostEdits,
    isPostSavingLocked
  } = Object(external_wp_data_["useSelect"])(store);
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/save', event => {
    event.preventDefault();
    /**
     * Do not save the post if post saving is locked.
     */

    if (isPostSavingLocked()) {
      return;
    } // TODO: This should be handled in the `savePost` effect in
    // considering `isSaveable`. See note on `isEditedPostSaveable`
    // selector about dirtiness and meta-boxes.
    //
    // See: `isEditedPostSaveable`


    if (!isEditedPostDirty()) {
      return;
    } // The text editor requires that editor blocks are updated for a
    // save to work correctly. Usually this happens when the textarea
    // for the code editors blurs, but the shortcut can be used without
    // blurring the textarea.


    if (resetBlocksOnSave) {
      const postEdits = getPostEdits();

      if (postEdits.content && typeof postEdits.content === 'string') {
        const blocks = Object(external_wp_blocks_["parse"])(postEdits.content);
        resetEditorBlocks(blocks);
      }
    }

    savePost();
  });
  return null;
}

/* harmony default export */ var save_shortcut = (SaveShortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function VisualEditorGlobalKeyboardShortcuts() {
  const {
    redo,
    undo
  } = Object(external_wp_data_["useDispatch"])(store);
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/undo', event => {
    undo();
    event.preventDefault();
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/redo', event => {
    redo();
    event.preventDefault();
  });
  return Object(external_wp_element_["createElement"])(save_shortcut, null);
}

/* harmony default export */ var visual_editor_shortcuts = (VisualEditorGlobalKeyboardShortcuts);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js


/**
 * Internal dependencies
 */

function TextEditorGlobalKeyboardShortcuts() {
  return Object(external_wp_element_["createElement"])(save_shortcut, {
    resetBlocksOnSave: true
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/register-shortcuts.js


/**
 * WordPress dependencies
 */






function EditorKeyboardShortcutsRegister() {
  // Registering the shortcuts
  const {
    registerShortcut
  } = Object(external_wp_data_["useDispatch"])(external_wp_keyboardShortcuts_["store"]);
  Object(external_wp_element_["useEffect"])(() => {
    registerShortcut({
      name: 'core/editor/save',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/editor/undo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/editor/redo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      }
    });
  }, [registerShortcut]);
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorKeyboardShortcuts"].Register, null);
}

/* harmony default export */ var register_shortcuts = (EditorKeyboardShortcutsRegister);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__("RxS6");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/redo.js
var library_redo = __webpack_require__("K2cm");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/undo.js
var library_undo = __webpack_require__("Ntru");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/redo.js


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function EditorHistoryRedo(props, ref) {
  const hasRedo = Object(external_wp_data_["useSelect"])(select => select(store).hasEditorRedo(), []);
  const {
    redo
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, { ...props,
    ref: ref,
    icon: !Object(external_wp_i18n_["isRTL"])() ? library_redo["a" /* default */] : library_undo["a" /* default */]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Redo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primaryShift('z') // If there are no redo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined,
    className: "editor-history__redo"
  });
}

/* harmony default export */ var editor_history_redo = (Object(external_wp_element_["forwardRef"])(EditorHistoryRedo));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/undo.js


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function EditorHistoryUndo(props, ref) {
  const hasUndo = Object(external_wp_data_["useSelect"])(select => select(store).hasEditorUndo(), []);
  const {
    undo
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, { ...props,
    ref: ref,
    icon: !Object(external_wp_i18n_["isRTL"])() ? library_undo["a" /* default */] : library_redo["a" /* default */]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Undo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  });
}

/* harmony default export */ var editor_history_undo = (Object(external_wp_element_["forwardRef"])(EditorHistoryUndo));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/template-validation-notice/index.js


/**
 * WordPress dependencies
 */






function TemplateValidationNotice({
  isValid,
  ...props
}) {
  if (isValid) {
    return null;
  }

  const confirmSynchronization = () => {
    if ( // eslint-disable-next-line no-alert
    window.confirm(Object(external_wp_i18n_["__"])('Resetting the template may result in loss of content, do you want to continue?'))) {
      props.synchronizeTemplate();
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Notice"], {
    className: "editor-template-validation-notice",
    isDismissible: false,
    status: "warning",
    actions: [{
      label: Object(external_wp_i18n_["__"])('Keep it as is'),
      onClick: props.resetTemplateValidity
    }, {
      label: Object(external_wp_i18n_["__"])('Reset the template'),
      onClick: confirmSynchronization
    }]
  }, Object(external_wp_i18n_["__"])('The content of your post doesn’t match the template assigned to your post type.'));
}

/* harmony default export */ var template_validation_notice = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => ({
  isValid: select(external_wp_blockEditor_["store"]).isValidTemplate()
})), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    setTemplateValidity,
    synchronizeTemplate
  } = dispatch(external_wp_blockEditor_["store"]);
  return {
    resetTemplateValidity: () => setTemplateValidity(true),
    synchronizeTemplate
  };
})])(TemplateValidationNotice));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-notices/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function EditorNotices({
  notices,
  onRemove
}) {
  const dismissibleNotices = notices.filter(({
    isDismissible,
    type
  }) => isDismissible && type === 'default');
  const nonDismissibleNotices = notices.filter(({
    isDismissible,
    type
  }) => !isDismissible && type === 'default');
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.NoticeList, {
    notices: nonDismissibleNotices,
    className: "components-editor-notices__pinned"
  }), Object(external_wp_element_["createElement"])(external_wp_components_["NoticeList"], {
    notices: dismissibleNotices,
    className: "components-editor-notices__dismissible",
    onRemove: onRemove
  }, Object(external_wp_element_["createElement"])(template_validation_notice, null)));
}
/* harmony default export */ var editor_notices = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => ({
  notices: select(external_wp_notices_["store"]).getNotices()
})), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onRemove: dispatch(external_wp_notices_["store"]).removeNotice
}))])(EditorNotices));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-snackbars/index.js


/**
 * WordPress dependencies
 */



function EditorSnackbars() {
  const notices = Object(external_wp_data_["useSelect"])(select => select(external_wp_notices_["store"]).getNotices(), []);
  const {
    removeNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const snackbarNotices = notices.filter(({
    type
  }) => type === 'snackbar');
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
}

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__("w95h");

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__("rmEH");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-record-item.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function EntityRecordItem({
  record,
  checked,
  onChange,
  closePanel
}) {
  const {
    name,
    kind,
    title,
    key
  } = record;
  const parentBlockId = (0,external_wp_data_namespaceObject.useSelect)(select => {
    // Get entity's blocks.
    const {
      blocks = []
    } = select(external_wp_coreData_["store"]).getEditedEntityRecord(kind, name, key); // Get parents of the entity's first block.

    const parents = select(external_wp_blockEditor_namespaceObject.store).getBlockParents(blocks[0]?.clientId); // Return closest parent block's clientId.

    return parents[parents.length - 1];
  }, []); // Handle templates that might use default descriptive titles

  const entityRecordTitle = Object(external_wp_data_["useSelect"])(select => {
    if ('postType' !== kind || 'wp_template' !== name) {
      return title;
    }

    const template = select(external_wp_coreData_["store"]).getEditedEntityRecord(kind, name, key);
    return select(store).__experimentalGetTemplateInfo(template).title;
  }, [name, kind, title, key]);
  const isSelected = Object(external_wp_data_["useSelect"])(select => {
    const selectedBlockId = select(external_wp_blockEditor_["store"]).getSelectedBlockClientId();
    return selectedBlockId === parentBlockId;
  }, [parentBlockId]);
  const isSelectedText = isSelected ? Object(external_wp_i18n_["__"])('Selected') : Object(external_wp_i18n_["__"])('Select');
  const {
    selectBlock
  } = Object(external_wp_data_["useDispatch"])(external_wp_blockEditor_["store"]);
  const selectParentBlock = Object(external_wp_element_["useCallback"])(() => selectBlock(parentBlockId), [parentBlockId]);
  const selectAndDismiss = Object(external_wp_element_["useCallback"])(() => {
    selectBlock(parentBlockId);
    closePanel();
  }, [parentBlockId]);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.PanelRow, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.CheckboxControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_element_namespaceObject.createElement)("strong", null, (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(entityRecordTitle) || (0,external_wp_i18n_namespaceObject.__)('Untitled')),
    checked: checked,
    onChange: onChange
  }), parentBlockId ? Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: selectParentBlock,
    className: "entities-saved-states__find-entity",
    disabled: isSelected
  }, isSelectedText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: selectAndDismiss,
    className: "entities-saved-states__find-entity-small",
    disabled: isSelected
  }, isSelectedText)) : null);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-type-list.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function getEntityDescription(entity, length) {
  switch (entity) {
    case 'site':
      return Object(external_wp_i18n_["_n"])('This change will affect your whole site.', 'These changes will affect your whole site.', length);

    case 'wp_template':
      return Object(external_wp_i18n_["_n"])('This change will affect pages and posts that use this template.', 'These changes will affect pages and posts that use these templates.', length);

    case 'page':
    case 'post':
      return Object(external_wp_i18n_["__"])('The following content has been modified.');
  }
}

function EntityTypeList({
  list,
  unselectedEntities,
  setUnselectedEntities,
  closePanel
}) {
  const count = list.length;
  const firstRecord = list[0];
  const entity = Object(external_wp_data_["useSelect"])(select => select(external_wp_coreData_["store"]).getEntity(firstRecord.kind, firstRecord.name), [firstRecord.kind, firstRecord.name]);
  const {
    name
  } = firstRecord;
  const entityLabel = name === 'wp_template_part' ? Object(external_wp_i18n_["_n"])('Template Part', 'Template Parts', list.length) : entity.label; // Set description based on type of entity.

  const description = getEntityDescription(name, list.length);
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: entityLabel,
    initialOpen: true
  }, description && Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, description), list.map(record => {
    return Object(external_wp_element_["createElement"])(EntityRecordItem, {
      key: record.key || record.property,
      record: record,
      checked: !unselectedEntities.some(elt => elt.kind === record.kind && elt.name === record.name && elt.key === record.key && elt.property === record.property),
      onChange: value => setUnselectedEntities(record, value),
      closePanel: closePanel
    });
  }));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/hooks/use-is-dirty.js
/**
 * WordPress dependencies
 */




const TRANSLATED_SITE_PROPERTIES = {
  title: (0,external_wp_i18n_namespaceObject.__)('Title'),
  description: (0,external_wp_i18n_namespaceObject.__)('Tagline'),
  site_logo: (0,external_wp_i18n_namespaceObject.__)('Logo'),
  site_icon: (0,external_wp_i18n_namespaceObject.__)('Icon'),
  show_on_front: (0,external_wp_i18n_namespaceObject.__)('Show on front'),
  page_on_front: (0,external_wp_i18n_namespaceObject.__)('Page on front'),
  posts_per_page: (0,external_wp_i18n_namespaceObject.__)('Maximum posts per page'),
  default_comment_status: (0,external_wp_i18n_namespaceObject.__)('Allow comments on new posts')
};
const useIsDirty = () => {
  const {
    dirtyEntityRecords
  } = Object(external_wp_data_["useSelect"])(select => {
    const dirtyRecords = select(external_wp_coreData_["store"]).__experimentalGetDirtyEntityRecords(); // Remove site object and decouple into its edited pieces.


    const dirtyRecordsWithoutSite = dirtyRecords.filter(record => !(record.kind === 'root' && record.name === 'site'));
    const siteEdits = select(external_wp_coreData_["store"]).getEntityRecordEdits('root', 'site');
    const siteEditsAsEntities = [];

    for (const property in siteEdits) {
      siteEditsAsEntities.push({
        kind: 'root',
        name: 'site',
        title: TRANSLATED_SITE_PROPERTIES[property] || property,
        property
      });
    }

    const dirtyRecordsWithSiteItems = [...dirtyRecordsWithoutSite, ...siteEditsAsEntities];
    return {
      dirtyEntityRecords: dirtyRecordsWithSiteItems
    };
  }, []); // Unchecked entities to be ignored by save function.

  const [unselectedEntities, _setUnselectedEntities] = (0,external_wp_element_namespaceObject.useState)([]);

  const setUnselectedEntities = ({
    kind,
    name,
    key,
    property
  }, checked) => {
    if (checked) {
      _setUnselectedEntities(unselectedEntities.filter(elt => elt.kind !== kind || elt.name !== name || elt.key !== key || elt.property !== property));
    } else {
      _setUnselectedEntities([...unselectedEntities, {
        kind,
        name,
        key,
        property
      }]);
    }
  };

  const isDirty = dirtyEntityRecords.length - unselectedEntities.length > 0;
  return {
    dirtyEntityRecords,
    isDirty,
    setUnselectedEntities,
    unselectedEntities
  };
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/index.js


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



const PUBLISH_ON_SAVE_ENTITIES = [{
  kind: 'postType',
  name: 'wp_navigation'
}];

function identity(values) {
  return values;
}

function EntitiesSavedStates({
  close
}) {
  const isDirtyProps = useIsDirty();
  return (0,external_wp_element_namespaceObject.createElement)(EntitiesSavedStatesExtensible, {
    close: close,
    ...isDirtyProps
  });
}
function EntitiesSavedStatesExtensible({
  additionalPrompt = undefined,
  close,
  onSave = identity,
  saveEnabled: saveEnabledProp = undefined,
  saveLabel = (0,external_wp_i18n_namespaceObject.__)('Save'),
  dirtyEntityRecords,
  isDirty,
  setUnselectedEntities,
  unselectedEntities
}) {
  const saveButtonRef = (0,external_wp_element_namespaceObject.useRef)();
  const {
    editEntityRecord,
    saveEditedEntityRecord,
    __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEntityEdits
  } = Object(external_wp_data_["useDispatch"])(external_wp_coreData_["store"]);
  const {
    createSuccessNotice,
    createErrorNotice,
    removeNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store); // To group entities by type.

  const partitionedSavables = dirtyEntityRecords.reduce((acc, record) => {
    const {
      name
    } = record;

    if (!acc[name]) {
      acc[name] = [];
    }

    acc[name].push(record);
    return acc;
  }, {}); // Sort entity groups.

  const {
    site: siteSavables,
    wp_template: templateSavables,
    wp_template_part: templatePartSavables,
    ...contentSavables
  } = partitionedSavables;
  const sortedPartitionedSavables = [siteSavables, templateSavables, templatePartSavables, ...Object.values(contentSavables)].filter(Array.isArray);
  const saveEnabled = saveEnabledProp !== null && saveEnabledProp !== void 0 ? saveEnabledProp : isDirty;

  const saveCheckedEntities = () => {
    const saveNoticeId = 'site-editor-save-success';
    removeNotice(saveNoticeId);
    const entitiesToSave = dirtyEntityRecords.filter(({
      kind,
      name,
      key,
      property
    }) => {
      return !unselectedEntities.some(elt => elt.kind === kind && elt.name === name && elt.key === key && elt.property === property);
    });
    close(entitiesToSave);
    const siteItemsToSave = [];
    const pendingSavedRecords = [];
    entitiesToSave.forEach(({
      kind,
      name,
      key,
      property
    }) => {
      if ('root' === kind && 'site' === name) {
        siteItemsToSave.push(property);
      } else {
        if (PUBLISH_ON_SAVE_ENTITIES.some(typeToPublish => typeToPublish.kind === kind && typeToPublish.name === name)) {
          editEntityRecord(kind, name, key, {
            status: 'publish'
          });
        }

        pendingSavedRecords.push(saveEditedEntityRecord(kind, name, key));
      }
    });

    if (siteItemsToSave.length) {
      pendingSavedRecords.push(saveSpecifiedEntityEdits('root', 'site', undefined, siteItemsToSave));
    }

    Promise.all(pendingSavedRecords).then(values => {
      return onSave(values);
    }).then(values => {
      if (values.some(value => typeof value === 'undefined')) {
        createErrorNotice(Object(external_wp_i18n_["__"])('Saving failed.'));
      } else {
        createSuccessNotice((0,external_wp_i18n_namespaceObject.__)('Site updated.'), {
          type: 'snackbar',
          id: saveNoticeId
        });
      }
    }).catch(error => createErrorNotice(`${Object(external_wp_i18n_["__"])('Saving failed.')} ${error}`));

    __unstableMarkLastChangeAsPersistent();
  }; // Explicitly define this with no argument passed.  Using `close` on
  // its own will use the event object in place of the expected saved entities.


  const dismissPanel = Object(external_wp_element_["useCallback"])(() => close(), [close]);
  const [saveDialogRef, saveDialogProps] = Object(external_wp_compose_["__experimentalUseDialog"])({
    onClose: () => dismissPanel()
  });
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    ref: saveDialogRef,
    ...saveDialogProps,
    className: "entities-saved-states__panel"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Flex, {
    className: "entities-saved-states__panel-header",
    gap: 2
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexItem, {
    isBlock: true,
    as: external_wp_components_namespaceObject.Button,
    ref: saveButtonRef,
    variant: "primary",
    disabled: !saveEnabled,
    onClick: saveCheckedEntities,
    className: "editor-entities-saved-states__save-button"
  }, saveLabel), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexItem, {
    isBlock: true,
    as: external_wp_components_namespaceObject.Button,
    variant: "secondary",
    onClick: dismissPanel
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel'))), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "entities-saved-states__text-prompt"
  }, (0,external_wp_element_namespaceObject.createElement)("strong", null, (0,external_wp_i18n_namespaceObject.__)('Are you ready to save?')), additionalPrompt, isDirty && (0,external_wp_element_namespaceObject.createElement)("p", null, (0,external_wp_i18n_namespaceObject.__)('The following changes have been made to your site, templates, and content.'))), sortedPartitionedSavables.map(list => {
    return (0,external_wp_element_namespaceObject.createElement)(EntityTypeList, {
      key: list[0].name,
      list: list,
      closePanel: dismissPanel,
      unselectedEntities: unselectedEntities,
      setUnselectedEntities: setUnselectedEntities
    });
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/error-boundary/index.js


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function getContent() {
  try {
    // While `select` in a component is generally discouraged, it is
    // used here because it (a) reduces the chance of data loss in the
    // case of additional errors by performing a direct retrieval and
    // (b) avoids the performance cost associated with unnecessary
    // content serialization throughout the lifetime of a non-erroring
    // application.
    return (0,external_wp_data_namespaceObject.select)(store_store).getEditedPostContent();
  } catch (error) {}
}

function CopyButton({
  text,
  children
}) {
  const ref = (0,external_wp_compose_namespaceObject.useCopyToClipboard)(text);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "secondary",
    ref: ref
  }, children);
}

class error_boundary_ErrorBoundary extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    (0,external_wp_hooks_namespaceObject.doAction)('editor.ErrorBoundary.errorLogged', error);
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  render() {
    const {
      error
    } = this.state;

    if (!error) {
      return this.props.children;
    }

    const actions = [(0,external_wp_element_namespaceObject.createElement)(CopyButton, {
      key: "copy-post",
      text: getContent
    }, (0,external_wp_i18n_namespaceObject.__)('Copy Post Text')), (0,external_wp_element_namespaceObject.createElement)(CopyButton, {
      key: "copy-error",
      text: error.stack
    }, (0,external_wp_i18n_namespaceObject.__)('Copy Error'))];
    return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.Warning, {
      className: "editor-error-boundary",
      actions: actions
    }, (0,external_wp_i18n_namespaceObject.__)('The editor has encountered an unexpected error.'));
  }

}

/* harmony default export */ var error_boundary = (error_boundary_ErrorBoundary);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/local-autosave-monitor/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const requestIdleCallback = window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame;
let hasStorageSupport;
/**
 * Function which returns true if the current environment supports browser
 * sessionStorage, or false otherwise. The result of this function is cached and
 * reused in subsequent invocations.
 */

const hasSessionStorageSupport = () => {
  if (hasStorageSupport !== undefined) {
    return hasStorageSupport;
  }

  try {
    // Private Browsing in Safari 10 and earlier will throw an error when
    // attempting to set into sessionStorage. The test here is intentional in
    // causing a thrown error as condition bailing from local autosave.
    window.sessionStorage.setItem('__wpEditorTestSessionStorage', '');
    window.sessionStorage.removeItem('__wpEditorTestSessionStorage');
    hasStorageSupport = true;
  } catch {
    hasStorageSupport = false;
  }
});
/**
 * Custom hook which manages the creation of a notice prompting the user to
 * restore a local autosave, if one exists.
 */

function useAutosaveNotice() {
  const {
    postId,
    isEditedPostNew,
    hasRemoteAutosave
  } = Object(external_wp_data_["useSelect"])(select => ({
    postId: select(store).getCurrentPostId(),
    isEditedPostNew: select(store).isEditedPostNew(),
    hasRemoteAutosave: !!select(store).getEditorSettings().autosave
  }), []);
  const {
    getEditedPostAttribute
  } = Object(external_wp_data_["useSelect"])(store);
  const {
    createWarningNotice,
    removeNotice
  } = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]);
  const {
    editPost,
    resetEditorBlocks
  } = Object(external_wp_data_["useDispatch"])(store);
  Object(external_wp_element_["useEffect"])(() => {
    let localAutosave = localAutosaveGet(postId, isEditedPostNew);

    if (!localAutosave) {
      return;
    }

    try {
      localAutosave = JSON.parse(localAutosave);
    } catch {
      // Not usable if it can't be parsed.
      return;
    }

    const {
      post_title: title,
      content,
      excerpt
    } = localAutosave;
    const edits = {
      title,
      content,
      excerpt
    };
    {
      // Only display a notice if there is a difference between what has been
      // saved and that which is stored in sessionStorage.
      const hasDifference = Object.keys(edits).some(key => {
        return edits[key] !== getEditedPostAttribute(key);
      });

      if (!hasDifference) {
        // If there is no difference, it can be safely ejected from storage.
        localAutosaveClear(postId, isEditedPostNew);
        return;
      }
    }

    if (hasRemoteAutosave) {
      return;
    }

    const id = 'wpEditorAutosaveRestore';
    createWarningNotice((0,external_wp_i18n_namespaceObject.__)('The backup of this post in your browser is different from the version below.'), {
      id,
      actions: [{
        label: Object(external_wp_i18n_["__"])('Restore the backup'),

        onClick() {
          const {
            content: editsContent,
            ...editsWithoutContent
          } = edits;
          editPost(editsWithoutContent);
          resetEditorBlocks((0,external_wp_blocks_namespaceObject.parse)(edits.content));
          removeNotice(id);
        }

      }]
    });
  }, [isEditedPostNew, postId]);
}
/**
 * Custom hook which ejects a local autosave after a successful save occurs.
 */


function useAutosavePurge() {
  const {
    postId,
    isEditedPostNew,
    isDirty,
    isAutosaving,
    didError
  } = Object(external_wp_data_["useSelect"])(select => ({
    postId: select(store).getCurrentPostId(),
    isEditedPostNew: select(store).isEditedPostNew(),
    isDirty: select(store).isEditedPostDirty(),
    isAutosaving: select(store).isAutosavingPost(),
    didError: select(store).didPostSaveRequestFail()
  }), []);
  const lastIsDirty = Object(external_wp_element_["useRef"])(isDirty);
  const lastIsAutosaving = Object(external_wp_element_["useRef"])(isAutosaving);
  Object(external_wp_element_["useEffect"])(() => {
    if (!didError && (lastIsAutosaving.current && !isAutosaving || lastIsDirty.current && !isDirty)) {
      localAutosaveClear(postId, isEditedPostNew);
    }

    lastIsDirty.current = isDirty;
    lastIsAutosaving.current = isAutosaving;
  }, [isDirty, isAutosaving, didError]); // Once the isEditedPostNew changes from true to false, let's clear the auto-draft autosave.

  const wasEditedPostNew = Object(external_wp_compose_["usePrevious"])(isEditedPostNew);
  const prevPostId = Object(external_wp_compose_["usePrevious"])(postId);
  Object(external_wp_element_["useEffect"])(() => {
    if (prevPostId === postId && wasEditedPostNew && !isEditedPostNew) {
      localAutosaveClear(postId, true);
    }
  }, [isEditedPostNew, postId]);
}

function LocalAutosaveMonitor() {
  const {
    autosave
  } = Object(external_wp_data_["useDispatch"])(store);
  const deferredAutosave = Object(external_wp_element_["useCallback"])(() => {
    requestIdleCallback(() => autosave({
      local: true
    }));
  }, []);
  useAutosaveNotice();
  useAutosavePurge();
  const localAutosaveInterval = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditorSettings().localAutosaveInterval, []);
  return (0,external_wp_element_namespaceObject.createElement)(autosave_monitor, {
    interval: localAutosaveInterval,
    autosave: deferredAutosave
  });
}

/* harmony default export */ var local_autosave_monitor = (Object(external_wp_compose_["ifCondition"])(hasSessionStorageSupport)(LocalAutosaveMonitor));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function PageAttributesCheck({
  children
}) {
  const supportsPageAttributes = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    const postType = getPostType(getEditedPostAttribute('type'));
    return !!postType?.supports?.['page-attributes'];
  }, []); // Only render fields if post type supports page attributes or available templates exist.

  if (!supportsPageAttributes) {
    return null;
  }

  return children;
}
/* harmony default export */ var page_attributes_check = (PageAttributesCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * A component which renders its own children only if the current editor post
 * type supports one of the given `supportKeys` prop.
 *
 * @param {Object}            props             Props.
 * @param {string}            [props.postType]  Current post type.
 * @param {WPElement}         props.children    Children to be rendered if post
 *                                              type supports.
 * @param {(string|string[])} props.supportKeys String or string array of keys
 *                                              to test.
 *
 * @return {WPComponent} The component to be rendered.
 */

function PostTypeSupportCheck({
  postType,
  children,
  supportKeys
}) {
  let isSupported = true;

  if (postType) {
    isSupported = (Array.isArray(supportKeys) ? supportKeys : [supportKeys]).some(key => !!postType.supports[key]);
  }

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_type_support_check = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getEditedPostAttribute
  } = select(store);
  const {
    getPostType
  } = select(external_wp_coreData_["store"]);
  return {
    postType: getPostType(getEditedPostAttribute('type'))
  };
})(PostTypeSupportCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/order.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const PageAttributesOrder = ({
  onUpdateOrder,
  order = 0
}) => {
  const [orderInput, setOrderInput] = (0,external_wp_element_namespaceObject.useState)(null);

  const setUpdatedOrder = value => {
    setOrderInput(value);
    const newOrder = Number(value);

    if (Number.isInteger(newOrder) && value.trim?.() !== '') {
      onUpdateOrder(Number(value));
    }
  };

  const value = orderInput === null ? order : orderInput;
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Flex, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexBlock, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalNumberControl, {
    label: (0,external_wp_i18n_namespaceObject.__)('Order'),
    value: value,
    onChange: setUpdatedOrder,
    labelPosition: "side",
    onBlur: () => {
      setOrderInput(null);
    }
  })));
};

function PageAttributesOrderWithChecks(props) {
  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "page-attributes"
  }, (0,external_wp_element_namespaceObject.createElement)(PageAttributesOrder, { ...props
  }));
}

/* harmony default export */ var page_attributes_order = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    order: select(store).getEditedPostAttribute('menu_order')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onUpdateOrder(order) {
    dispatch(store).editPost({
      menu_order: order
    });
  }

}))])(PageAttributesOrderWithChecks));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/terms.js
/**
 * WordPress dependencies
 */

/**
 * Returns terms in a tree form.
 *
 * @param {Array} flatTerms Array of terms in flat format.
 *
 * @return {Array} Array of terms in tree format.
 */

function buildTermsTree(flatTerms) {
  const flatTermsWithParentAndChildren = flatTerms.map(term => {
    return {
      children: [],
      parent: null,
      ...term
    };
  }); // All terms should have a `parent` because we're about to index them by it.

  if (flatTermsWithParentAndChildren.some(({
    parent
  }) => parent === null)) {
    return flatTermsWithParentAndChildren;
  }

  const termsByParent = flatTermsWithParentAndChildren.reduce((acc, term) => {
    const {
      parent
    } = term;

    if (!acc[parent]) {
      acc[parent] = [];
    }

    acc[parent].push(term);
    return acc;
  }, {});

  const fillWithChildren = terms => {
    return terms.map(term => {
      const children = termsByParent[term.id];
      return { ...term,
        children: children && children.length ? fillWithChildren(children) : []
      };
    });
  };

  return fillWithChildren(termsByParent['0'] || []);
}
const unescapeString = arg => {
  return (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(arg);
};
/**
 * Returns a term object with name unescaped.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */

const unescapeTerm = term => {
  return { ...term,
    name: unescapeString(term.name)
  };
};
/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */

const unescapeTerms = terms => {
  return (terms !== null && terms !== void 0 ? terms : []).map(unescapeTerm);
};

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/parent.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




function getTitle(post) {
  return post?.title?.rendered ? (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(post.title.rendered) : `#${post.id} (${(0,external_wp_i18n_namespaceObject.__)('no title')})`;
}

const getItemPriority = (name, searchValue) => {
  const normalizedName = Object(external_lodash_["deburr"])(name).toLowerCase();
  const normalizedSearch = Object(external_lodash_["deburr"])(searchValue).toLowerCase();

  if (normalizedName === normalizedSearch) {
    return 0;
  }

  if (normalizedName.startsWith(normalizedSearch)) {
    return normalizedName.length;
  }

  return Infinity;
};
function PageAttributesParent() {
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);
  const [fieldValue, setFieldValue] = Object(external_wp_element_["useState"])(false);
  const {
    isHierarchical,
    parentPost,
    parentPostId,
    items,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _pType$hierarchical;

    const {
      getPostType,
      getEntityRecords,
      getEntityRecord
    } = select(external_wp_coreData_["store"]);
    const {
      getCurrentPostId,
      getEditedPostAttribute
    } = select(store);
    const postTypeSlug = getEditedPostAttribute('type');
    const pageId = getEditedPostAttribute('parent');
    const pType = getPostType(postTypeSlug);
    const postId = getCurrentPostId();
    const postIsHierarchical = (_pType$hierarchical = pType?.hierarchical) !== null && _pType$hierarchical !== void 0 ? _pType$hierarchical : false;
    const query = {
      per_page: 100,
      exclude: postId,
      parent_exclude: postId,
      orderby: 'menu_order',
      order: 'asc',
      _fields: 'id,title,parent'
    }; // Perform a search when the field is changed.

    if (!!fieldValue) {
      query.search = fieldValue;
    }

    return {
      isHierarchical: postIsHierarchical,
      parentPostId: pageId,
      parentPost: pageId ? getEntityRecord('postType', postTypeSlug, pageId) : null,
      items: postIsHierarchical ? getEntityRecords('postType', postTypeSlug, query) : [],
      postType: pType
    };
  }, [fieldValue]);
  const parentPageLabel = postType?.labels?.parent_item_colon;
  const pageItems = items || [];
  const parentOptions = (0,external_wp_element_namespaceObject.useMemo)(() => {
    const getOptionsFromTree = (tree, level = 0) => {
      const mappedNodes = tree.map(treeNode => [{
        value: treeNode.id,
        label: '— '.repeat(level) + (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(treeNode.name),
        rawName: treeNode.name
      }, ...getOptionsFromTree(treeNode.children || [], level + 1)]);
      const sortedNodes = mappedNodes.sort(([a], [b]) => {
        const priorityA = getItemPriority(a.rawName, fieldValue);
        const priorityB = getItemPriority(b.rawName, fieldValue);
        return priorityA >= priorityB ? 1 : -1;
      });
      return Object(external_lodash_["flatten"])(sortedNodes);
    };

    let tree = pageItems.map(item => ({
      id: item.id,
      parent: item.parent,
      name: getTitle(item)
    })); // Only build a hierarchical tree when not searching.

    if (!fieldValue) {
      tree = buildTermsTree(tree);
    }

    const opts = getOptionsFromTree(tree); // Ensure the current parent is in the options list.

    const optsHasParent = opts.find(item => item.value === parentPostId);

    if (parentPost && !optsHasParent) {
      opts.unshift({
        value: parentPostId,
        label: getTitle(parentPost)
      });
    }

    return opts;
  }, [pageItems, fieldValue]);

  if (!isHierarchical || !parentPageLabel) {
    return null;
  }
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */


  const handleKeydown = inputValue => {
    setFieldValue(inputValue);
  };
  /**
   * Handle author selection.
   *
   * @param {Object} selectedPostId The selected Author.
   */


  const handleChange = selectedPostId => {
    editPost({
      parent: selectedPostId
    });
  };

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ComboboxControl, {
    __nextHasNoMarginBottom: true,
    className: "editor-page-attributes__parent",
    label: parentPageLabel,
    value: parentPostId,
    options: parentOptions,
    onFilterValueChange: (0,external_wp_compose_namespaceObject.debounce)(handleKeydown, 300),
    onChange: handleChange
  });
}
/* harmony default export */ var page_attributes_parent = (PageAttributesParent);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostTemplate(_ref) {
  let {} = _ref;
  const {
    availableTemplates,
    selectedTemplate,
    isViewable
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getPostType$viewable;

    const {
      getEditedPostAttribute,
      getEditorSettings,
      getCurrentPostType
    } = select(store);
    const {
      getPostType
    } = select(external_wp_coreData_["store"]);
    return {
      selectedTemplate: getEditedPostAttribute('template'),
      availableTemplates: getEditorSettings().availableTemplates,
      isViewable: (_getPostType$viewable = getPostType(getCurrentPostType())?.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false
    };
  }, []);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);

  if (!isViewable || !availableTemplates || !Object.keys(availableTemplates).length) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Template:'),
    value: selectedTemplate,
    onChange: templateSlug => {
      editPost({
        template: templateSlug || ''
      });
    },
    options: Object.entries(availableTemplates !== null && availableTemplates !== void 0 ? availableTemplates : {}).map(([templateSlug, templateName]) => ({
      value: templateSlug,
      label: templateName
    }))
  });
}
/* harmony default export */ var post_template = (PostTemplate);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/constants.js
const AUTHORS_QUERY = {
  who: 'authors',
  per_page: 50,
  _fields: 'id,name',
  context: 'view' // Allows non-admins to perform requests.

};

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/combobox.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




function PostAuthorCombobox() {
  const [fieldValue, setFieldValue] = Object(external_wp_element_["useState"])();
  const {
    authorId,
    isLoading,
    authors,
    postAuthor
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getUser,
      getUsers,
      isResolving
    } = select(external_wp_coreData_["store"]);
    const {
      getEditedPostAttribute
    } = select(store);
    const author = getUser(getEditedPostAttribute('author'), {
      context: 'view'
    });
    const query = { ...AUTHORS_QUERY
    };

    if (fieldValue) {
      query.search = fieldValue;
    }

    return {
      authorId: getEditedPostAttribute('author'),
      postAuthor: author,
      authors: getUsers(query),
      isLoading: isResolving('core', 'getUsers', [query])
    };
  }, [fieldValue]);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);
  const authorOptions = Object(external_wp_element_["useMemo"])(() => {
    const fetchedAuthors = (authors !== null && authors !== void 0 ? authors : []).map(author => {
      return {
        value: author.id,
        label: Object(external_wp_htmlEntities_["decodeEntities"])(author.name)
      };
    }); // Ensure the current author is included in the dropdown list.

    const foundAuthor = fetchedAuthors.findIndex(({
      value
    }) => postAuthor?.id === value);

    if (foundAuthor < 0 && postAuthor) {
      return [{
        value: postAuthor.id,
        label: Object(external_wp_htmlEntities_["decodeEntities"])(postAuthor.name)
      }, ...fetchedAuthors];
    }

    return fetchedAuthors;
  }, [authors, postAuthor]);
  /**
   * Handle author selection.
   *
   * @param {number} postAuthorId The selected Author.
   */

  const handleSelect = postAuthorId => {
    if (!postAuthorId) {
      return;
    }

    editPost({
      author: postAuthorId
    });
  };
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */


  const handleKeydown = inputValue => {
    setFieldValue(inputValue);
  };

  if (!postAuthor) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ComboboxControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Author'),
    options: authorOptions,
    value: authorId,
    onFilterValueChange: (0,external_wp_compose_namespaceObject.debounce)(handleKeydown, 300),
    onChange: handleSelect,
    isLoading: isLoading,
    allowReset: false
  });
}

/* harmony default export */ var combobox = (PostAuthorCombobox);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/select.js


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




function PostAuthorSelect() {
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    postAuthor,
    authors
  } = Object(external_wp_data_["useSelect"])(select => {
    return {
      postAuthor: select(store).getEditedPostAttribute('author'),
      authors: select(external_wp_coreData_["store"]).getUsers(AUTHORS_QUERY)
    };
  }, []);
  const authorOptions = Object(external_wp_element_["useMemo"])(() => {
    return (authors !== null && authors !== void 0 ? authors : []).map(author => {
      return {
        value: author.id,
        label: Object(external_wp_htmlEntities_["decodeEntities"])(author.name)
      };
    });
  }, [authors]);

  const setAuthorId = value => {
    const author = Number(value);
    editPost({
      author
    });
  };

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SelectControl, {
    __nextHasNoMarginBottom: true,
    className: "post-author-selector",
    label: Object(external_wp_i18n_["__"])('Author'),
    options: authorOptions,
    onChange: setAuthorId,
    value: postAuthor
  });
}

/* harmony default export */ var post_author_select = (PostAuthorSelect);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const minimumUsersForCombobox = 25;

function PostAuthor() {
  const showCombobox = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const authors = select(external_wp_coreData_namespaceObject.store).getUsers(AUTHORS_QUERY);
    return authors?.length >= minimumUsersForCombobox;
  }, []);

  if (showCombobox) {
    return Object(external_wp_element_["createElement"])(combobox, null);
  }

  return Object(external_wp_element_["createElement"])(post_author_select, null);
}

/* harmony default export */ var post_author = (PostAuthor);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/check.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function PostAuthorCheck({
  children
}) {
  const {
    hasAssignAuthorAction,
    hasAuthors
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links$wpActio;

    const post = select(store_store).getCurrentPost();
    const authors = select(external_wp_coreData_namespaceObject.store).getUsers(AUTHORS_QUERY);
    return {
      hasAssignAuthorAction: (_post$_links$wpActio = post._links?.['wp:action-assign-author']) !== null && _post$_links$wpActio !== void 0 ? _post$_links$wpActio : false,
      hasAuthors: authors?.length >= 1
    };
  }, []);

  if (!hasAssignAuthorAction || !hasAuthors) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "author"
  }, children);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-comments/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostComments({
  commentStatus = 'open',
  ...props
}) {
  const onToggleComments = () => props.editPost({
    comment_status: commentStatus === 'open' ? 'closed' : 'open'
  });

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.CheckboxControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Allow comments'),
    checked: commentStatus === 'open',
    onChange: onToggleComments
  });
}

/* harmony default export */ var post_comments = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    commentStatus: select(store).getEditedPostAttribute('comment_status')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  editPost: dispatch(store).editPost
}))])(PostComments));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostExcerpt({
  excerpt,
  onUpdateExcerpt
}) {
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-excerpt"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextareaControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Write an excerpt (optional)'),
    className: "editor-post-excerpt__textarea",
    onChange: value => onUpdateExcerpt(value),
    value: excerpt
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
    href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/page-post-settings-sidebar/#excerpt')
  }, (0,external_wp_i18n_namespaceObject.__)('Learn more about manual excerpts')));
}

/* harmony default export */ var post_excerpt = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    excerpt: select(store).getEditedPostAttribute('excerpt')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onUpdateExcerpt(excerpt) {
    dispatch(store).editPost({
      excerpt
    });
  }

}))])(PostExcerpt));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/check.js


/**
 * Internal dependencies
 */


function PostExcerptCheck(props) {
  return (0,external_wp_element_namespaceObject.createElement)(post_type_support_check, { ...props,
    supportKeys: "excerpt"
  });
}

/* harmony default export */ var post_excerpt_check = (PostExcerptCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function ThemeSupportCheck({
  themeSupports,
  children,
  postType,
  supportKeys
}) {
  const isSupported = (Array.isArray(supportKeys) ? supportKeys : [supportKeys]).some(key => {
    var _themeSupports$key;

    const supported = (_themeSupports$key = themeSupports?.[key]) !== null && _themeSupports$key !== void 0 ? _themeSupports$key : false; // 'post-thumbnails' can be boolean or an array of post types.
    // In the latter case, we need to verify `postType` exists
    // within `supported`. If `postType` isn't passed, then the check
    // should fail.

    if ('post-thumbnails' === key && Array.isArray(supported)) {
      return supported.includes(postType);
    }

    return supported;
  });

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ var theme_support_check = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getThemeSupports
  } = select(external_wp_coreData_["store"]);
  const {
    getEditedPostAttribute
  } = select(store);
  return {
    postType: getEditedPostAttribute('type'),
    themeSupports: getThemeSupports()
  };
})(ThemeSupportCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js


/**
 * Internal dependencies
 */



function PostFeaturedImageCheck(props) {
  return Object(external_wp_element_["createElement"])(theme_support_check, {
    supportKeys: "post-thumbnails"
  }, (0,external_wp_element_namespaceObject.createElement)(post_type_support_check, { ...props,
    supportKeys: "thumbnail"
  }));
}

/* harmony default export */ var post_featured_image_check = (PostFeaturedImageCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/index.js


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



const ALLOWED_MEDIA_TYPES = ['image']; // Used when labels from post type were not yet loaded or when they are not present.

const DEFAULT_FEATURE_IMAGE_LABEL = (0,external_wp_i18n_namespaceObject.__)('Featured image');

const DEFAULT_SET_FEATURE_IMAGE_LABEL = (0,external_wp_i18n_namespaceObject.__)('Set featured image');

const instructions = (0,external_wp_element_namespaceObject.createElement)("p", null, (0,external_wp_i18n_namespaceObject.__)('To edit the featured image, you need permission to upload media.'));

function getMediaDetails(media, postId) {
  var _media$media_details$, _media$media_details$2;

  if (!media) {
    return {};
  }

  const defaultSize = (0,external_wp_hooks_namespaceObject.applyFilters)('editor.PostFeaturedImage.imageSize', 'large', media.id, postId);

  if (defaultSize in ((_media$media_details$ = media?.media_details?.sizes) !== null && _media$media_details$ !== void 0 ? _media$media_details$ : {})) {
    return {
      mediaWidth: media.media_details.sizes[defaultSize].width,
      mediaHeight: media.media_details.sizes[defaultSize].height,
      mediaSourceUrl: media.media_details.sizes[defaultSize].source_url
    };
  } // Use fallbackSize when defaultSize is not available.


  const fallbackSize = (0,external_wp_hooks_namespaceObject.applyFilters)('editor.PostFeaturedImage.imageSize', 'thumbnail', media.id, postId);

  if (fallbackSize in ((_media$media_details$2 = media?.media_details?.sizes) !== null && _media$media_details$2 !== void 0 ? _media$media_details$2 : {})) {
    return {
      mediaWidth: media.media_details.sizes[fallbackSize].width,
      mediaHeight: media.media_details.sizes[fallbackSize].height,
      mediaSourceUrl: media.media_details.sizes[fallbackSize].source_url
    };
  } // Use full image size when fallbackSize and defaultSize are not available.

const DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = Object(external_wp_i18n_["__"])('Remove image');

function PostFeaturedImage({
  currentPostId,
  featuredImageId,
  onUpdateImage,
  onRemoveImage,
  media,
  postType,
  noticeUI,
  noticeOperations
}) {
  const toggleRef = (0,external_wp_element_namespaceObject.useRef)();
  const [isLoading, setIsLoading] = (0,external_wp_element_namespaceObject.useState)(false);
  const mediaUpload = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return select(external_wp_blockEditor_namespaceObject.store).getSettings().mediaUpload;
  }, []);
  const {
    mediaWidth,
    mediaHeight,
    mediaSourceUrl
  } = getMediaDetails(media, currentPostId);

  function onDropFiles(filesList) {
    mediaUpload({
      allowedTypes: ['image'],
      filesList,

      onFileChange([image]) {
        if ((0,external_wp_blob_namespaceObject.isBlobURL)(image?.url)) {
          setIsLoading(true);
          return;
        }

        onUpdateImage(image);
        setIsLoading(false);
      },

      onError(message) {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(message);
      }
    }
  }

  return Object(external_wp_element_["createElement"])(post_featured_image_check, null, noticeUI, Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-featured-image"
  }, media && Object(external_wp_element_["createElement"])("div", {
    id: `editor-post-featured-image-${featuredImageId}-describedby`,
    className: "hidden"
  }, media.alt_text && (0,external_wp_i18n_namespaceObject.sprintf)( // Translators: %s: The selected image alt text.
  (0,external_wp_i18n_namespaceObject.__)('Current image: %s'), media.alt_text), !media.alt_text && (0,external_wp_i18n_namespaceObject.sprintf)( // Translators: %s: The selected image filename.
  (0,external_wp_i18n_namespaceObject.__)('The current image has no alternative text. The file name is: %s'), media.media_details.sizes?.full?.file || media.slug)), (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.MediaUploadCheck, {
    fallback: instructions
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.MediaUpload, {
    title: postType?.labels?.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: ({
      open
    }) => (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "editor-post-featured-image__container"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      ref: toggleRef,
      className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
      onClick: open,
      "aria-label": !featuredImageId ? null : (0,external_wp_i18n_namespaceObject.__)('Edit or replace the image'),
      "aria-describedby": !featuredImageId ? null : `editor-post-featured-image-${featuredImageId}-describedby`
    }, !!featuredImageId && media && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ResponsiveWrapper, {
      naturalWidth: mediaWidth,
      naturalHeight: mediaHeight,
      isInline: true
    }, (0,external_wp_element_namespaceObject.createElement)("img", {
      src: mediaSourceUrl,
      alt: ""
    })), isLoading && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Spinner, null), !featuredImageId && !isLoading && (postType?.labels?.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL)), !!featuredImageId && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalHStack, {
      className: "editor-post-featured-image__actions"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      className: "editor-post-featured-image__action",
      onClick: open // Prefer that screen readers use the .editor-post-featured-image__preview button.
      ,
      "aria-hidden": "true"
    }, (0,external_wp_i18n_namespaceObject.__)('Replace')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      className: "editor-post-featured-image__action",
      onClick: () => {
        onRemoveImage();
        toggleRef.current.focus();
      }
    }, (0,external_wp_i18n_namespaceObject.__)('Remove'))), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.DropZone, {
      onFilesDrop: onDropFiles
    })),
    value: featuredImageId
  }))));
}

const applyWithSelect = Object(external_wp_data_["withSelect"])(select => {
  const {
    getMedia,
    getPostType
  } = select(external_wp_coreData_["store"]);
  const {
    getCurrentPostId,
    getEditedPostAttribute
  } = select(store);
  const featuredImageId = getEditedPostAttribute('featured_media');
  return {
    media: featuredImageId ? getMedia(featuredImageId, {
      context: 'view'
    }) : null,
    currentPostId: getCurrentPostId(),
    postType: getPostType(getEditedPostAttribute('type')),
    featuredImageId
  };
});
const applyWithDispatch = (0,external_wp_data_namespaceObject.withDispatch)((dispatch, {
  noticeOperations
}, {
  select
}) => {
  const {
    editPost
  } = dispatch(store);
  return {
    onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
    },

    onDropImage(filesList) {
      select(external_wp_blockEditor_["store"]).getSettings().mediaUpload({
        allowedTypes: ['image'],
        filesList,

        onFileChange([image]) {
          editPost({
            featured_media: image.id
          });
        },

        onError(message) {
          noticeOperations.removeAllNotices();
          noticeOperations.createErrorNotice(message);
        }

      });
    },

    onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }

  };
});
/* harmony default export */ var post_featured_image = (Object(external_wp_compose_["compose"])(external_wp_components_["withNotices"], applyWithSelect, applyWithDispatch, Object(external_wp_components_["withFilters"])('editor.PostFeaturedImage'))(PostFeaturedImage));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/check.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




function PostFormatCheck({
  disablePostFormats,
  ...props
}) {
  return !disablePostFormats && (0,external_wp_element_namespaceObject.createElement)(post_type_support_check, { ...props,
    supportKeys: "post-formats"
  });
}

/* harmony default export */ var post_format_check = (Object(external_wp_data_["withSelect"])(select => {
  const editorSettings = select(store).getEditorSettings();
  return {
    disablePostFormats: editorSettings.disablePostFormats
  };
})(PostFormatCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


 // All WP post formats, sorted alphabetically by translated name.

const POST_FORMATS = [{
  id: 'aside',
  caption: Object(external_wp_i18n_["__"])('Aside')
}, {
  id: 'audio',
  caption: Object(external_wp_i18n_["__"])('Audio')
}, {
  id: 'chat',
  caption: Object(external_wp_i18n_["__"])('Chat')
}, {
  id: 'gallery',
  caption: Object(external_wp_i18n_["__"])('Gallery')
}, {
  id: 'image',
  caption: Object(external_wp_i18n_["__"])('Image')
}, {
  id: 'link',
  caption: Object(external_wp_i18n_["__"])('Link')
}, {
  id: 'quote',
  caption: Object(external_wp_i18n_["__"])('Quote')
}, {
  id: 'standard',
  caption: Object(external_wp_i18n_["__"])('Standard')
}, {
  id: 'status',
  caption: Object(external_wp_i18n_["__"])('Status')
}, {
  id: 'video',
  caption: Object(external_wp_i18n_["__"])('Video')
}].sort((a, b) => {
  const normalizedA = a.caption.toUpperCase();
  const normalizedB = b.caption.toUpperCase();

  if (normalizedA < normalizedB) {
    return -1;
  }

  if (normalizedA > normalizedB) {
    return 1;
  }

  return 0;
});
function PostFormat() {
  const instanceId = Object(external_wp_compose_["useInstanceId"])(PostFormat);
  const postFormatSelectorId = `post-format-selector-${instanceId}`;
  const {
    postFormat,
    suggestedFormat,
    supportedFormats
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEditedPostAttribute,
      getSuggestedPostFormat
    } = select(store);

    const _postFormat = getEditedPostAttribute('format');

    const themeSupports = select(external_wp_coreData_["store"]).getThemeSupports();
    return {
      postFormat: _postFormat !== null && _postFormat !== void 0 ? _postFormat : 'standard',
      suggestedFormat: getSuggestedPostFormat(),
      // Ensure current format is always in the set.
      // The current format may not be a format supported by the theme.
      supportedFormats: Object(external_lodash_["union"])([_postFormat], Object(external_lodash_["get"])(themeSupports, ['formats'], []))
    };
  }, []);
  const formats = POST_FORMATS.filter(format => {
    // Ensure current format is always in the set.
    // The current format may not be a format supported by the theme.
    return supportedFormats?.includes(format.id) || postFormat === format.id;
  });
  const suggestion = formats.find(format => format.id === suggestedFormat);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);

  const onUpdatePostFormat = format => editPost({
    format
  });

  return Object(external_wp_element_["createElement"])(post_format_check, null, Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-format"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Post Format'),
    value: postFormat,
    onChange: format => onUpdatePostFormat(format),
    id: postFormatSelectorId,
    options: formats.map(format => ({
      label: format.caption,
      value: format.id
    }))
  })), suggestion && suggestion.id !== postFormat && Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-format__suggestion"
  }, Object(external_wp_i18n_["__"])('Suggestion:'), ' ', Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    variant: "link",
    onClick: () => onUpdatePostFormat(suggestion.id)
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: post format */
  Object(external_wp_i18n_["__"])('Apply format: %s'), suggestion.caption)))));
}

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/backup.js


/**
 * WordPress dependencies
 */

const backup = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"
}));
/* harmony default export */ var library_backup = (backup);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostLastRevisionCheck({
  lastRevisionId,
  revisionsCount,
  children
}) {
  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "revisions"
  }, children);
}
/* harmony default export */ var post_last_revision_check = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPostLastRevisionId,
    getCurrentPostRevisionsCount
  } = select(store);
  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(PostLastRevisionCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




function LastRevision({
  lastRevisionId,
  revisionsCount
}) {
  return (0,external_wp_element_namespaceObject.createElement)(post_last_revision_check, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    href: (0,external_wp_url_namespaceObject.addQueryArgs)('revision.php', {
      revision: lastRevisionId,
      gutenberg: true
    }),
    className: "editor-post-last-revision__title",
    icon: library_backup
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %d: number of revisions */
  Object(external_wp_i18n_["_n"])('%d Revision', '%d Revisions', revisionsCount), revisionsCount)));
}

/* harmony default export */ var post_last_revision = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPostLastRevisionId,
    getCurrentPostRevisionsCount
  } = select(store);
  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(LastRevision));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



function writeInterstitialMessage(targetDocument) {
  let markup = Object(external_wp_element_["renderToString"])(Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-preview-button__interstitial-message"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96 96"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Path"], {
    className: "outer",
    d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
    fill: "none"
  }), Object(external_wp_element_["createElement"])(external_wp_components_["Path"], {
    className: "inner",
    d: "M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z",
    fill: "none"
  })), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Generating preview…'))));
  markup += `
		<style>
			body {
				margin: 0;
			}
			.editor-post-preview-button__interstitial-message {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100vh;
				width: 100vw;
			}
			@-webkit-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-moz-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-o-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			.editor-post-preview-button__interstitial-message svg {
				width: 192px;
				height: 192px;
				stroke: #555d66;
				stroke-width: 0.75;
			}
			.editor-post-preview-button__interstitial-message svg .outer,
			.editor-post-preview-button__interstitial-message svg .inner {
				stroke-dasharray: 280;
				stroke-dashoffset: 280;
				-webkit-animation: paint 1.5s ease infinite alternate;
				-moz-animation: paint 1.5s ease infinite alternate;
				-o-animation: paint 1.5s ease infinite alternate;
				animation: paint 1.5s ease infinite alternate;
			}
			p {
				text-align: center;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
			}
		</style>
	`;
  /**
   * Filters the interstitial message shown when generating previews.
   *
   * @param {string} markup The preview interstitial markup.
   */

  markup = Object(external_wp_hooks_["applyFilters"])('editor.PostPreview.interstitialMarkup', markup);
  targetDocument.write(markup);
  targetDocument.title = Object(external_wp_i18n_["__"])('Generating preview…');
  targetDocument.close();
}

class post_preview_button_PostPreviewButton extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.buttonRef = Object(external_wp_element_["createRef"])();
    this.openPreviewWindow = this.openPreviewWindow.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      previewLink
    } = this.props; // This relies on the window being responsible to unset itself when
    // navigation occurs or a new preview window is opened, to avoid
    // unintentional forceful redirects.

    if (previewLink && !prevProps.previewLink) {
      this.setPreviewWindowLink(previewLink);
    }
  }
  /**
   * Sets the preview window's location to the given URL, if a preview window
   * exists and is not closed.
   *
   * @param {string} url URL to assign as preview window location.
   */


  setPreviewWindowLink(url) {
    const {
      previewWindow
    } = this;

    if (previewWindow && !previewWindow.closed) {
      previewWindow.location = url;

      if (this.buttonRef.current) {
        this.buttonRef.current.focus();
      }
    }
  }

  getWindowTarget() {
    const {
      postId
    } = this.props;
    return `wp-preview-${postId}`;
  }

  openPreviewWindow(event) {
    // Our Preview button has its 'href' and 'target' set correctly for a11y
    // purposes. Unfortunately, though, we can't rely on the default 'click'
    // handler since sometimes it incorrectly opens a new tab instead of reusing
    // the existing one.
    // https://github.com/WordPress/gutenberg/pull/8330
    event.preventDefault(); // Open up a Preview tab if needed. This is where we'll show the preview.

    if (!this.previewWindow || this.previewWindow.closed) {
      this.previewWindow = window.open('', this.getWindowTarget());
    } // Focus the Preview tab. This might not do anything, depending on the browser's
    // and user's preferences.
    // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus


    this.previewWindow.focus();

    if ( // If we don't need to autosave the post before previewing, then we simply
    // load the Preview URL in the Preview tab.
    !this.props.isAutosaveable || // Do not save or overwrite the post, if the post is already locked.
    this.props.isPostLocked) {
      this.setPreviewWindowLink(event.target.href);
      return;
    } // Request an autosave. This happens asynchronously and causes the component
    // to update when finished.


    if (this.props.isDraft) {
      this.props.savePost({
        isPreview: true
      });
    } else {
      this.props.autosave({
        isPreview: true
      });
    } // Display a 'Generating preview' message in the Preview tab while we wait for the
    // autosave to finish.


    writeInterstitialMessage(this.previewWindow.document);
  }

  render() {
    const {
      previewLink,
      currentPostLink,
      isSaveable,
      role
    } = this.props; // Link to the `?preview=true` URL if we have it, since this lets us see
    // changes that were autosaved since the post was last published. Otherwise,
    // just link to the post's URL.

    const href = previewLink || currentPostLink;
    const classNames = classnames_default()({
      'editor-post-preview': !this.props.className
    }, this.props.className);
    return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      variant: !this.props.className ? 'tertiary' : undefined,
      className: classNames,
      href: href,
      target: this.getWindowTarget(),
      disabled: !isSaveable,
      onClick: this.openPreviewWindow,
      ref: this.buttonRef,
      role: role
    }, this.props.textContent ? this.props.textContent : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["_x"])('Preview', 'imperative verb'), Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
      as: "span"
    },
    /* translators: accessibility text */
    Object(external_wp_i18n_["__"])('(opens in a new tab)'))));
  }

}
/* harmony default export */ var post_preview_button = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])((select, _ref) => {
  let {
    forcePreviewLink,
    forceIsAutosaveable
  } = _ref;
  const {
    getCurrentPostId,
    getCurrentPostAttribute,
    getEditedPostAttribute,
    isEditedPostSaveable,
    isEditedPostAutosaveable,
    getEditedPostPreviewLink,
    isPostLocked
  } = select(store);
  const {
    getPostType
  } = select(external_wp_coreData_["store"]);
  const previewLink = getEditedPostPreviewLink();
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    postId: getCurrentPostId(),
    currentPostLink: getCurrentPostAttribute('link'),
    previewLink: forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
    isSaveable: isEditedPostSaveable(),
    isAutosaveable: forceIsAutosaveable || isEditedPostAutosaveable(),
    isViewable: Object(external_lodash_["get"])(postType, ['viewable'], false),
    isDraft: ['draft', 'auto-draft'].indexOf(getEditedPostAttribute('status')) !== -1,
    isPostLocked: isPostLocked()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  autosave: dispatch(store).autosave,
  savePost: dispatch(store).savePost
})), Object(external_wp_compose_["ifCondition"])(_ref2 => {
  let {
    isViewable
  } = _ref2;
  return isViewable;
})])(post_preview_button_PostPreviewButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-locked-modal/index.js


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




function PostLockedModal() {
  const instanceId = Object(external_wp_compose_["useInstanceId"])(PostLockedModal);
  const hookName = 'core/editor/post-locked-modal-' + instanceId;
  const {
    autosave,
    updatePostLock
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    isLocked,
    isTakeover,
    user,
    postId,
    postLockUtils,
    activePostLock,
    postType
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isPostLocked,
      isPostLockTakeover,
      getPostLockUser,
      getCurrentPostId,
      getActivePostLock,
      getEditedPostAttribute,
      getEditorSettings
    } = select(store);
    const {
      getPostType
    } = select(external_wp_coreData_["store"]);
    return {
      isLocked: isPostLocked(),
      isTakeover: isPostLockTakeover(),
      user: getPostLockUser(),
      postId: getCurrentPostId(),
      postLockUtils: getEditorSettings().postLockUtils,
      activePostLock: getActivePostLock(),
      postType: getPostType(getEditedPostAttribute('type'))
    };
  }, []);
  Object(external_wp_element_["useEffect"])(() => {
    /**
     * Keep the lock refreshed.
     *
     * When the user does not send a heartbeat in a heartbeat-tick
     * the user is no longer editing and another user can start editing.
     *
     * @param {Object} data Data to send in the heartbeat request.
     */
    function sendPostLock(data) {
      if (isLocked) {
        return;
      }

      data['wp-refresh-post-lock'] = {
        lock: activePostLock,
        post_id: postId
      };
    }
    /**
     * Refresh post locks: update the lock string or show the dialog if somebody has taken over editing.
     *
     * @param {Object} data Data received in the heartbeat request
     */


    function receivePostLock(data) {
      if (!data['wp-refresh-post-lock']) {
        return;
      }

      const received = data['wp-refresh-post-lock'];

      if (received.lock_error) {
        // Auto save and display the takeover modal.
        autosave();
        updatePostLock({
          isLocked: true,
          isTakeover: true,
          user: {
            avatar: received.lock_error.avatar_src
          }
        });
      } else if (received.new_lock) {
        updatePostLock({
          isLocked: false,
          activePostLock: received.new_lock
        });
      }
    }
    /**
     * Unlock the post before the window is exited.
     */


    function releasePostLock() {
      if (isLocked || !activePostLock) {
        return;
      }

      const data = new window.FormData();
      data.append('action', 'wp-remove-post-lock');
      data.append('_wpnonce', postLockUtils.unlockNonce);
      data.append('post_ID', postId);
      data.append('active_post_lock', activePostLock);

      if (window.navigator.sendBeacon) {
        window.navigator.sendBeacon(postLockUtils.ajaxUrl, data);
      } else {
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', postLockUtils.ajaxUrl, false);
        xhr.send(data);
      }
    } // Details on these events on the Heartbeat API docs
    // https://developer.wordpress.org/plugins/javascript/heartbeat-api/


    Object(external_wp_hooks_["addAction"])('heartbeat.send', hookName, sendPostLock);
    Object(external_wp_hooks_["addAction"])('heartbeat.tick', hookName, receivePostLock);
    window.addEventListener('beforeunload', releasePostLock);
    return () => {
      Object(external_wp_hooks_["removeAction"])('heartbeat.send', hookName);
      Object(external_wp_hooks_["removeAction"])('heartbeat.tick', hookName);
      window.removeEventListener('beforeunload', releasePostLock);
    };
  }, []);

  if (!isLocked) {
    return null;
  }

  const userDisplayName = user.name;
  const userAvatar = user.avatar;
  const unlockUrl = Object(external_wp_url_["addQueryArgs"])('post.php', {
    'get-post-lock': '1',
    lockKey: true,
    post: postId,
    action: 'edit',
    _wpnonce: postLockUtils.nonce
  });
  const allPostsUrl = (0,external_wp_url_namespaceObject.addQueryArgs)('edit.php', {
    post_type: postType?.slug
  });

  const allPostsLabel = Object(external_wp_i18n_["__"])('Exit the Editor');

  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    title: isTakeover ? Object(external_wp_i18n_["__"])('Someone else has taken over this post.') : Object(external_wp_i18n_["__"])('This post is already being edited.'),
    focusOnMount: true,
    shouldCloseOnClickOutside: false,
    shouldCloseOnEsc: false,
    isDismissible: false,
    className: "editor-post-locked-modal"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalHStack, {
    alignment: "top",
    spacing: 6
  }, !!userAvatar && (0,external_wp_element_namespaceObject.createElement)("img", {
    src: userAvatar,
    alt: Object(external_wp_i18n_["__"])('Avatar'),
    className: "editor-post-locked-modal__avatar"
  }), !!isTakeover && Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("div", null, userDisplayName ? Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: user's display name */
  (0,external_wp_i18n_namespaceObject.__)('<strong>%s</strong> is currently working on this post (<PreviewLink />), which means you cannot make changes, unless you take over.'), userDisplayName) : (0,external_wp_i18n_namespaceObject.__)('Another user is currently working on this post (<PreviewLink />), which means you cannot make changes, unless you take over.'), {
    strong: (0,external_wp_element_namespaceObject.createElement)("strong", null),
    PreviewLink: (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
      href: previewLink
    }, (0,external_wp_i18n_namespaceObject.__)('preview'))
  })), (0,external_wp_element_namespaceObject.createElement)("p", null, (0,external_wp_i18n_namespaceObject.__)('If you take over, the other user will lose editing control to the post, but their changes will be saved.'))), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalHStack, {
    className: "editor-post-locked-modal__buttons",
    justify: "flex-end"
  }, !isTakeover && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "tertiary",
    href: unlockUrl
  }, (0,external_wp_i18n_namespaceObject.__)('Take over')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "primary",
    href: allPostsUrl
  }, allPostsLabel))), !isTakeover && Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("div", null, userDisplayName ? Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: user's display name */
  Object(external_wp_i18n_["__"])('%s is currently working on this post, which means you cannot make changes, unless you take over.'), userDisplayName) : Object(external_wp_i18n_["__"])('Another user is currently working on this post, which means you cannot make changes, unless you take over.')), Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-locked-modal__buttons"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    variant: "secondary",
    href: allPostsUrl
  }, allPostsLabel), Object(external_wp_element_["createElement"])(post_preview_button, null), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    variant: "primary",
    href: unlockUrl
  }, Object(external_wp_i18n_["__"])('Take Over')))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function PostPendingStatusCheck({
  hasPublishAction,
  isPublished,
  children
}) {
  if (isPublished || !hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_pending_status_check = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withSelect)(select => {
  var _getCurrentPost$_link;

  const {
    isCurrentPostPublished,
    getCurrentPostType,
    getCurrentPost
  } = select(store);
  return {
    hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
    isPublished: isCurrentPostPublished(),
    postType: getCurrentPostType()
  };
}))(PostPendingStatusCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostPendingStatus({
  status,
  onUpdateStatus
}) {
  const togglePendingStatus = () => {
    const updatedStatus = status === 'pending' ? 'draft' : 'pending';
    onUpdateStatus(updatedStatus);
  };

  return (0,external_wp_element_namespaceObject.createElement)(post_pending_status_check, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.CheckboxControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Pending review'),
    checked: status === 'pending',
    onChange: togglePendingStatus
  }));
}
/* harmony default export */ var post_pending_status = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => ({
  status: select(store).getEditedPostAttribute('status')
})), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onUpdateStatus(status) {
    dispatch(store).editPost({
      status
    });
  }

})))(PostPendingStatus));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pingbacks/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostPingbacks({
  pingStatus = 'open',
  ...props
}) {
  const onTogglePingback = () => props.editPost({
    ping_status: pingStatus === 'open' ? 'closed' : 'open'
  });

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.CheckboxControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Allow pingbacks & trackbacks'),
    checked: pingStatus === 'open',
    onChange: onTogglePingback
  });
}

/* harmony default export */ var post_pingbacks = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  return {
    pingStatus: select(store_store).getEditedPostAttribute('ping_status')
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => ({
  editPost: dispatch(store_store).editPost
}))])(PostPingbacks));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



function writeInterstitialMessage(targetDocument) {
  let markup = (0,external_wp_element_namespaceObject.renderToString)((0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-preview-button__interstitial-message"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96 96"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Path, {
    className: "outer",
    d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
    fill: "none"
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Path, {
    className: "inner",
    d: "M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z",
    fill: "none"
  })), (0,external_wp_element_namespaceObject.createElement)("p", null, (0,external_wp_i18n_namespaceObject.__)('Generating preview…'))));
  markup += `
		<style>
			body {
				margin: 0;
			}
			.editor-post-preview-button__interstitial-message {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100vh;
				width: 100vw;
			}
			@-webkit-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-moz-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-o-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			.editor-post-preview-button__interstitial-message svg {
				width: 192px;
				height: 192px;
				stroke: #555d66;
				stroke-width: 0.75;
			}
			.editor-post-preview-button__interstitial-message svg .outer,
			.editor-post-preview-button__interstitial-message svg .inner {
				stroke-dasharray: 280;
				stroke-dashoffset: 280;
				-webkit-animation: paint 1.5s ease infinite alternate;
				-moz-animation: paint 1.5s ease infinite alternate;
				-o-animation: paint 1.5s ease infinite alternate;
				animation: paint 1.5s ease infinite alternate;
			}
			p {
				text-align: center;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
			}
		</style>
	`;
  /**
   * Filters the interstitial message shown when generating previews.
   *
   * @param {string} markup The preview interstitial markup.
   */

  markup = (0,external_wp_hooks_namespaceObject.applyFilters)('editor.PostPreview.interstitialMarkup', markup);
  targetDocument.write(markup);
  targetDocument.title = (0,external_wp_i18n_namespaceObject.__)('Generating preview…');
  targetDocument.close();
}

class PostPreviewButton extends external_wp_element_namespaceObject.Component {
  constructor() {
    super(...arguments);
    this.buttonRef = (0,external_wp_element_namespaceObject.createRef)();
    this.openPreviewWindow = this.openPreviewWindow.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      previewLink
    } = this.props; // This relies on the window being responsible to unset itself when
    // navigation occurs or a new preview window is opened, to avoid
    // unintentional forceful redirects.

    if (previewLink && !prevProps.previewLink) {
      this.setPreviewWindowLink(previewLink);
    }
  }
  /**
   * Sets the preview window's location to the given URL, if a preview window
   * exists and is not closed.
   *
   * @param {string} url URL to assign as preview window location.
   */


  setPreviewWindowLink(url) {
    const {
      previewWindow
    } = this;

    if (previewWindow && !previewWindow.closed) {
      previewWindow.location = url;

      if (this.buttonRef.current) {
        this.buttonRef.current.focus();
      }
    }
  }

  getWindowTarget() {
    const {
      postId
    } = this.props;
    return `wp-preview-${postId}`;
  }

  openPreviewWindow(event) {
    // Our Preview button has its 'href' and 'target' set correctly for a11y
    // purposes. Unfortunately, though, we can't rely on the default 'click'
    // handler since sometimes it incorrectly opens a new tab instead of reusing
    // the existing one.
    // https://github.com/WordPress/gutenberg/pull/8330
    event.preventDefault(); // Open up a Preview tab if needed. This is where we'll show the preview.

    if (!this.previewWindow || this.previewWindow.closed) {
      this.previewWindow = window.open('', this.getWindowTarget());
    } // Focus the Preview tab. This might not do anything, depending on the browser's
    // and user's preferences.
    // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus


    this.previewWindow.focus();

    if ( // If we don't need to autosave the post before previewing, then we simply
    // load the Preview URL in the Preview tab.
    !this.props.isAutosaveable || // Do not save or overwrite the post, if the post is already locked.
    this.props.isPostLocked) {
      this.setPreviewWindowLink(event.target.href);
      return;
    } // Request an autosave. This happens asynchronously and causes the component
    // to update when finished.


    if (this.props.isDraft) {
      this.props.savePost({
        isPreview: true
      });
    } else {
      this.props.autosave({
        isPreview: true
      });
    } // Display a 'Generating preview' message in the Preview tab while we wait for the
    // autosave to finish.


    writeInterstitialMessage(this.previewWindow.document);
  }

  render() {
    const {
      previewLink,
      currentPostLink,
      isSaveable,
      role
    } = this.props; // Link to the `?preview=true` URL if we have it, since this lets us see
    // changes that were autosaved since the post was last published. Otherwise,
    // just link to the post's URL.

    const href = previewLink || currentPostLink;
    const classNames = classnames_default()({
      'editor-post-preview': !this.props.className
    }, this.props.className);
    return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      variant: !this.props.className ? 'tertiary' : undefined,
      className: classNames,
      href: href,
      target: this.getWindowTarget(),
      disabled: !isSaveable,
      onClick: this.openPreviewWindow,
      ref: this.buttonRef,
      role: role
    }, this.props.textContent ? this.props.textContent : (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_i18n_namespaceObject._x)('Preview', 'imperative verb'), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.VisuallyHidden, {
      as: "span"
    },
    /* translators: accessibility text */
    (0,external_wp_i18n_namespaceObject.__)('(opens in a new tab)'))));
  }

}
/* harmony default export */ var post_preview_button = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)((select, {
  forcePreviewLink,
  forceIsAutosaveable
}) => {
  var _postType$viewable;

  const {
    getCurrentPostId,
    getCurrentPostAttribute,
    getEditedPostAttribute,
    isEditedPostSaveable,
    isEditedPostAutosaveable,
    getEditedPostPreviewLink,
    isPostLocked
  } = select(store_store);
  const {
    getPostType
  } = select(external_wp_coreData_namespaceObject.store);
  const previewLink = getEditedPostPreviewLink();
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    postId: getCurrentPostId(),
    currentPostLink: getCurrentPostAttribute('link'),
    previewLink: forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
    isSaveable: isEditedPostSaveable(),
    isAutosaveable: forceIsAutosaveable || isEditedPostAutosaveable(),
    isViewable: (_postType$viewable = postType?.viewable) !== null && _postType$viewable !== void 0 ? _postType$viewable : false,
    isDraft: ['draft', 'auto-draft'].indexOf(getEditedPostAttribute('status')) !== -1,
    isPostLocked: isPostLocked()
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => ({
  autosave: dispatch(store_store).autosave,
  savePost: dispatch(store_store).savePost
})), (0,external_wp_compose_namespaceObject.ifCondition)(({
  isViewable
}) => isViewable)])(PostPreviewButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PublishButtonLabel({
  isPublished,
  isBeingScheduled,
  isSaving,
  isPublishing,
  hasPublishAction,
  isAutosaving,
  hasNonPostEntityChanges
}) {
  if (isPublishing) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Publishing…');
  } else if (isPublished && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Updating…');
  } else if (isBeingScheduled && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Scheduling…');
  }

  if (!hasPublishAction) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Submit for Review…') : Object(external_wp_i18n_["__"])('Submit for Review');
  } else if (isPublished) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Update…') : Object(external_wp_i18n_["__"])('Update');
  } else if (isBeingScheduled) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Schedule…') : Object(external_wp_i18n_["__"])('Schedule');
  }

  return Object(external_wp_i18n_["__"])('Publish');
}
/* harmony default export */ var label = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)((select, {
  forceIsSaving
}) => {
  var _getCurrentPost$_link;

  const {
    isCurrentPostPublished,
    isEditedPostBeingScheduled,
    isSavingPost,
    isPublishingPost,
    getCurrentPost,
    getCurrentPostType,
    isAutosavingPost
  } = select(store);
  return {
    isPublished: isCurrentPostPublished(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isSaving: forceIsSaving || isSavingPost(),
    isPublishing: isPublishingPost(),
    hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
    postType: getCurrentPostType(),
    isAutosaving: isAutosavingPost()
  };
})])(PublishButtonLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



class post_publish_button_PostPublishButton extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.buttonNode = Object(external_wp_element_["createRef"])();
    this.createOnClick = this.createOnClick.bind(this);
    this.closeEntitiesSavedStates = this.closeEntitiesSavedStates.bind(this);
    this.state = {
      entitiesSavedStatesCallback: false
    };
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      // This timeout is necessary to make sure the `useEffect` hook of
      // `useFocusReturn` gets the correct element (the button that opens the
      // PostPublishPanel) otherwise it will get this button.
      this.timeoutID = setTimeout(() => {
        this.buttonNode.current.focus();
      }, 0);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }

  createOnClick(callback) {
    return (...args) => {
      const {
        hasNonPostEntityChanges,
        setEntitiesSavedStatesCallback
      } = this.props; // If a post with non-post entities is published, but the user
      // elects to not save changes to the non-post entities, those
      // entities will still be dirty when the Publish button is clicked.
      // We also need to check that the `setEntitiesSavedStatesCallback`
      // prop was passed. See https://github.com/WordPress/gutenberg/pull/37383

      if (hasNonPostEntityChanges && setEntitiesSavedStatesCallback) {
        // The modal for multiple entity saving will open,
        // hold the callback for saving/publishing the post
        // so that we can call it if the post entity is checked.
        this.setState({
          entitiesSavedStatesCallback: () => callback(...args)
        }); // Open the save panel by setting its callback.
        // To set a function on the useState hook, we must set it
        // with another function (() => myFunction). Passing the
        // function on its own will cause an error when called.

        setEntitiesSavedStatesCallback(() => this.closeEntitiesSavedStates);
        return noop;
      }

      return callback(...args);
    };
  }

  closeEntitiesSavedStates(savedEntities) {
    const {
      postType,
      postId
    } = this.props;
    const {
      entitiesSavedStatesCallback
    } = this.state;
    this.setState({
      entitiesSavedStatesCallback: false
    }, () => {
      if (savedEntities && savedEntities.some(elt => elt.kind === 'postType' && elt.name === postType && elt.key === postId)) {
        // The post entity was checked, call the held callback from `createOnClick`.
        entitiesSavedStatesCallback();
      }
    });
  }

  render() {
    const {
      forceIsDirty,
      forceIsSaving,
      hasPublishAction,
      isBeingScheduled,
      isOpen,
      isPostSavingLocked,
      isPublishable,
      isPublished,
      isSaveable,
      isSaving,
      isAutoSaving,
      isToggle,
      onSave,
      onStatusChange,
      onSubmit = external_lodash_["noop"],
      onToggle,
      visibility,
      hasNonPostEntityChanges,
      isSavingNonPostEntityChanges
    } = this.props;
    const isButtonDisabled = (isSaving || forceIsSaving || !isSaveable || isPostSavingLocked || !isPublishable && !forceIsDirty) && (!hasNonPostEntityChanges || isSavingNonPostEntityChanges);
    const isToggleDisabled = (isPublished || isSaving || forceIsSaving || !isSaveable || !isPublishable && !forceIsDirty) && (!hasNonPostEntityChanges || isSavingNonPostEntityChanges);
    let publishStatus;

    if (!hasPublishAction) {
      publishStatus = 'pending';
    } else if (visibility === 'private') {
      publishStatus = 'private';
    } else if (isBeingScheduled) {
      publishStatus = 'future';
    } else {
      publishStatus = 'publish';
    }

    const onClickButton = () => {
      if (isButtonDisabled) {
        return;
      }

      onSubmit();
      onStatusChange(publishStatus);
      onSave();
    };

    const onClickToggle = () => {
      if (isToggleDisabled) {
        return;
      }

      onToggle();
    };

    const buttonProps = {
      'aria-disabled': isButtonDisabled,
      className: 'editor-post-publish-button',
      isBusy: !isAutoSaving && isSaving,
      variant: 'primary',
      onClick: this.createOnClick(onClickButton)
    };
    const toggleProps = {
      'aria-disabled': isToggleDisabled,
      'aria-expanded': isOpen,
      className: 'editor-post-publish-panel__toggle',
      isBusy: isSaving && isPublished,
      variant: 'primary',
      onClick: this.createOnClick(onClickToggle)
    };
    const toggleChildren = isBeingScheduled ? Object(external_wp_i18n_["__"])('Schedule…') : Object(external_wp_i18n_["__"])('Publish');
    const buttonChildren = Object(external_wp_element_["createElement"])(post_publish_button_label, {
      forceIsSaving: forceIsSaving,
      hasNonPostEntityChanges: hasNonPostEntityChanges
    });
    const componentProps = isToggle ? toggleProps : buttonProps;
    const componentChildren = isToggle ? toggleChildren : buttonChildren;
    return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      ref: this.buttonNode,
      ...componentProps,
      className: classnames_default()(componentProps.className, 'editor-post-publish-button__button', {
        'has-changes-dot': hasNonPostEntityChanges
      })
    }, componentChildren));
  }

}
/* harmony default export */ var post_publish_button = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  var _getCurrentPost$_link;

  const {
    isSavingPost,
    isAutosavingPost,
    isEditedPostBeingScheduled,
    getEditedPostVisibility,
    isCurrentPostPublished,
    isEditedPostSaveable,
    isEditedPostPublishable,
    isPostSavingLocked,
    getCurrentPost,
    getCurrentPostType,
    getCurrentPostId,
    hasNonPostEntityChanges,
    isSavingNonPostEntityChanges
  } = select(store);

  const _isAutoSaving = isAutosavingPost();

  return {
    isSaving: isSavingPost() || _isAutoSaving,
    isAutoSaving: _isAutoSaving,
    isBeingScheduled: isEditedPostBeingScheduled(),
    visibility: getEditedPostVisibility(),
    isSaveable: isEditedPostSaveable(),
    isPostSavingLocked: isPostSavingLocked(),
    isPublishable: isEditedPostPublishable(),
    isPublished: isCurrentPostPublished(),
    hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
    hasNonPostEntityChanges: hasNonPostEntityChanges(),
    isSavingNonPostEntityChanges: isSavingNonPostEntityChanges()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    editPost,
    savePost
  } = dispatch(store);
  return {
    onStatusChange: status => editPost({
      status
    }, {
      undoIgnore: true
    }),
    onSave: savePost
  };
})])(post_publish_button_PostPublishButton));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("bWcr");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/wordpress.js
var wordpress = __webpack_require__("wduq");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js
/**
 * WordPress dependencies
 */

const visibilityOptions = [{
  value: 'public',
  label: Object(external_wp_i18n_["__"])('Public'),
  info: Object(external_wp_i18n_["__"])('Visible to everyone.')
}, {
  value: 'private',
  label: Object(external_wp_i18n_["__"])('Private'),
  info: Object(external_wp_i18n_["__"])('Only visible to site admins and editors.')
}, {
  value: 'password',
  label: Object(external_wp_i18n_["__"])('Password Protected'),
  info: Object(external_wp_i18n_["__"])('Protected with a password you choose. Only those with the password can view this post.')
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function PostVisibility({
  onClose
}) {
  const instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(PostVisibility);
  const {
    status,
    visibility,
    password
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    status: select(store_store).getEditedPostAttribute('status'),
    visibility: select(store_store).getEditedPostVisibility(),
    password: select(store_store).getEditedPostAttribute('password')
  }));
  const {
    editPost,
    savePost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [hasPassword, setHasPassword] = (0,external_wp_element_namespaceObject.useState)(!!password);
  const [showPrivateConfirmDialog, setShowPrivateConfirmDialog] = (0,external_wp_element_namespaceObject.useState)(false);

  setPublic() {
    const {
      visibility,
      onUpdateVisibility,
      status
    } = this.props;
    onUpdateVisibility(visibility === 'private' ? 'draft' : status);
    this.setState({
      hasPassword: false
    });
  }

  setPrivate() {
    if ( // eslint-disable-next-line no-alert
    !window.confirm(Object(external_wp_i18n_["__"])('Would you like to privately publish this post now?'))) {
      return;
    }

    const {
      onUpdateVisibility,
      onSave
    } = this.props;
    onUpdateVisibility('private');
    this.setState({
      hasPassword: false
    });
    onSave();
  }

  setPasswordProtected() {
    const {
      visibility,
      onUpdateVisibility,
      status,
      password
    } = this.props;
    onUpdateVisibility(visibility === 'private' ? 'draft' : status, password || '');
    this.setState({
      hasPassword: true
    });
  }

  updatePassword(event) {
    const {
      status,
      onUpdateVisibility
    } = this.props;
    onUpdateVisibility(status, event.target.value);
  }

  render() {
    const {
      visibility,
      password,
      instanceId
    } = this.props;
    const visibilityHandlers = {
      public: {
        onSelect: this.setPublic,
        checked: visibility === 'public' && !this.state.hasPassword
      },
      private: {
        onSelect: this.setPrivate,
        checked: visibility === 'private'
      },
      password: {
        onSelect: this.setPasswordProtected,
        checked: this.state.hasPassword
      }
    };
    return [Object(external_wp_element_["createElement"])("fieldset", {
      key: "visibility-selector",
      className: "editor-post-visibility__dialog-fieldset"
    }, Object(external_wp_element_["createElement"])("legend", {
      className: "editor-post-visibility__dialog-legend"
    }, Object(external_wp_i18n_["__"])('Post Visibility')), visibilityOptions.map(_ref => {
      let {
        value,
        label,
        info
      } = _ref;
      return Object(external_wp_element_["createElement"])("div", {
        key: value,
        className: "editor-post-visibility__choice"
      }, Object(external_wp_element_["createElement"])("input", {
        type: "radio",
        name: `editor-post-visibility__setting-${instanceId}`,
        value: value,
        onChange: visibilityHandlers[value].onSelect,
        checked: visibilityHandlers[value].checked,
        id: `editor-post-${value}-${instanceId}`,
        "aria-describedby": `editor-post-${value}-${instanceId}-description`,
        className: "editor-post-visibility__dialog-radio"
      }), Object(external_wp_element_["createElement"])("label", {
        htmlFor: `editor-post-${value}-${instanceId}`,
        className: "editor-post-visibility__dialog-label"
      }, label), Object(external_wp_element_["createElement"])("p", {
        id: `editor-post-${value}-${instanceId}-description`,
        className: "editor-post-visibility__dialog-info"
      }, info));
    })), this.state.hasPassword && Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-visibility__dialog-password",
      key: "password-selector"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
      as: "label",
      htmlFor: `editor-post-visibility__dialog-password-input-${instanceId}`
    }, Object(external_wp_i18n_["__"])('Create password')), Object(external_wp_element_["createElement"])("input", {
      className: "editor-post-visibility__dialog-password-input",
      id: `editor-post-visibility__dialog-password-input-${instanceId}`,
      type: "text",
      onChange: this.updatePassword,
      value: password,
      placeholder: Object(external_wp_i18n_["__"])('Use a secure password')
    }))];
  }

}
/* harmony default export */ var post_visibility = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getEditedPostAttribute,
    getEditedPostVisibility
  } = select(store);
  return {
    status: getEditedPostAttribute('status'),
    visibility: getEditedPostVisibility(),
    password: getEditedPostAttribute('password')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    savePost,
    editPost
  } = dispatch(store);
  return {
    onSave: savePost,

    onUpdateVisibility(status) {
      let password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      editPost({
        status,
        password
      });
    }

  };
}), external_wp_compose_["withInstanceId"]])(post_visibility_PostVisibility));

  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-visibility"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
    title: (0,external_wp_i18n_namespaceObject.__)('Visibility'),
    help: (0,external_wp_i18n_namespaceObject.__)('Control how this post is viewed.'),
    onClose: onClose
  }), (0,external_wp_element_namespaceObject.createElement)("fieldset", {
    className: "editor-post-visibility__fieldset"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.VisuallyHidden, {
    as: "legend"
  }, (0,external_wp_i18n_namespaceObject.__)('Visibility')), (0,external_wp_element_namespaceObject.createElement)(PostVisibilityChoice, {
    instanceId: instanceId,
    value: "public",
    label: visibilityOptions["public"].label,
    info: visibilityOptions["public"].info,
    checked: visibility === 'public' && !hasPassword,
    onChange: setPublic
  }), (0,external_wp_element_namespaceObject.createElement)(PostVisibilityChoice, {
    instanceId: instanceId,
    value: "private",
    label: visibilityOptions["private"].label,
    info: visibilityOptions["private"].info,
    checked: visibility === 'private',
    onChange: setPrivate
  }), (0,external_wp_element_namespaceObject.createElement)(PostVisibilityChoice, {
    instanceId: instanceId,
    value: "password",
    label: visibilityOptions.password.label,
    info: visibilityOptions.password.info,
    checked: hasPassword,
    onChange: setPasswordProtected
  }), hasPassword && (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-visibility__password"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.VisuallyHidden, {
    as: "label",
    htmlFor: `editor-post-visibility__password-input-${instanceId}`
  }, (0,external_wp_i18n_namespaceObject.__)('Create password')), (0,external_wp_element_namespaceObject.createElement)("input", {
    className: "editor-post-visibility__password-input",
    id: `editor-post-visibility__password-input-${instanceId}`,
    type: "text",
    onChange: updatePassword,
    value: password,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Use a secure password')
  }))), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalConfirmDialog, {
    isOpen: showPrivateConfirmDialog,
    onConfirm: confirmPrivate,
    onCancel: handleDialogCancel
  }, (0,external_wp_i18n_namespaceObject.__)('Would you like to privately publish this post now?')));
}

function PostVisibilityChoice({
  instanceId,
  value,
  label,
  info,
  ...props
}) {
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-visibility__choice"
  }, (0,external_wp_element_namespaceObject.createElement)("input", {
    type: "radio",
    name: `editor-post-visibility__setting-${instanceId}`,
    value: value,
    id: `editor-post-${value}-${instanceId}`,
    "aria-describedby": `editor-post-${value}-${instanceId}-description`,
    className: "editor-post-visibility__radio",
    ...props
  }), (0,external_wp_element_namespaceObject.createElement)("label", {
    htmlFor: `editor-post-${value}-${instanceId}`,
    className: "editor-post-visibility__label"
  }, label), (0,external_wp_element_namespaceObject.createElement)("p", {
    id: `editor-post-${value}-${instanceId}-description`,
    className: "editor-post-visibility__info"
  }, info));
}

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PostVisibilityLabel() {
  return usePostVisibilityLabel();
}
function usePostVisibilityLabel() {
  const visibility = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostVisibility());
  return visibilityOptions[visibility]?.label;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/toDate/index.js


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfMonth/index.js


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/endOfMonth/index.js


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/constants/index.js
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/parseISO/index.js



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  requiredArgs(1, arguments);
  var additionalDigits = toInteger((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


function PostSchedule({
  onClose
}) {
  const {
    postDate,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    postDate: select(store_store).getEditedPostAttribute('date'),
    postType: select(store_store).getCurrentPostType()
  }), []);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);

  const onUpdateDate = date => editPost({
    date
  });

  const [previewedMonth, setPreviewedMonth] = (0,external_wp_element_namespaceObject.useState)(startOfMonth(new Date(postDate))); // Pick up published and schduled site posts.

  const eventsByPostType = Object(external_wp_data_["useSelect"])(select => select(external_wp_coreData_["store"]).getEntityRecords('postType', postType, {
    status: 'publish,future',
    after: startOfMonth(previewedMonth).toISOString(),
    before: endOfMonth(previewedMonth).toISOString(),
    exclude: [select(store_store).getCurrentPostId()],
    per_page: 100,
    _fields: 'id,date'
  }), [previewedMonth, postType]);
  const events = (0,external_wp_element_namespaceObject.useMemo)(() => (eventsByPostType || []).map(({
    date: eventDate
  }) => ({
    date: new Date(eventDate)
  })), [eventsByPostType]);
  const settings = (0,external_wp_date_namespaceObject.getSettings)(); // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"


  const is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );

  function onChange(newDate) {
    onUpdateDate(newDate);
    const {
      ownerDocument
    } = ref.current;
    ownerDocument.activeElement.blur();
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["DateTimePicker"], {
    ref: ref,
    currentDate: postDate,
    onChange: onChange,
    is12Hour: is12HourTime,
    events: events,
    onMonthPreviewed: date => setPreviewedMonth(parseISO(date)),
    onClose: onClose
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostScheduleLabel(props) {
  return usePostScheduleLabel(props);
}
function usePostScheduleLabel({
  full = false
} = {}) {
  const {
    date,
    isFloating
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    date: select(store_store).getEditedPostAttribute('date'),
    isFloating: select(store_store).isEditedPostDateFloating()
  }), []);
  return full ? getFullPostScheduleLabel(date) : getPostScheduleLabel(date, {
    isFloating
  });
}
function getFullPostScheduleLabel(dateAttribute) {
  const date = (0,external_wp_date_namespaceObject.getDate)(dateAttribute);
  const timezoneAbbreviation = getTimezoneAbbreviation();
  const formattedDate = (0,external_wp_date_namespaceObject.dateI18n)( // translators: If using a space between 'g:i' and 'a', use a non-breaking sapce.
  (0,external_wp_i18n_namespaceObject._x)('F j, Y g:i\xa0a', 'post schedule full date format'), date);
  return (0,external_wp_i18n_namespaceObject.isRTL)() ? `${timezoneAbbreviation} ${formattedDate}` : `${formattedDate} ${timezoneAbbreviation}`;
}
function getPostScheduleLabel(dateAttribute, {
  isFloating = false,
  now = new Date()
} = {}) {
  if (!dateAttribute || isFloating) {
    return (0,external_wp_i18n_namespaceObject.__)('Immediately');
  } // If the user timezone does not equal the site timezone then using words
  // like 'tomorrow' is confusing, so show the full date.


  if (!isTimezoneSameAsSiteTimezone(now)) {
    return getFullPostScheduleLabel(dateAttribute);
  }

  const date = (0,external_wp_date_namespaceObject.getDate)(dateAttribute);

  if (isSameDay(date, now)) {
    return (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %s: Time of day the post is scheduled for.
    (0,external_wp_i18n_namespaceObject.__)('Today at %s'), // translators: If using a space between 'g:i' and 'a', use a non-breaking sapce.
    (0,external_wp_date_namespaceObject.dateI18n)((0,external_wp_i18n_namespaceObject._x)('g:i\xa0a', 'post schedule time format'), date));
  }

  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (isSameDay(date, tomorrow)) {
    return (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %s: Time of day the post is scheduled for.
    (0,external_wp_i18n_namespaceObject.__)('Tomorrow at %s'), // translators: If using a space between 'g:i' and 'a', use a non-breaking sapce.
    (0,external_wp_date_namespaceObject.dateI18n)((0,external_wp_i18n_namespaceObject._x)('g:i\xa0a', 'post schedule time format'), date));
  }

  if (date.getFullYear() === now.getFullYear()) {
    return (0,external_wp_date_namespaceObject.dateI18n)( // translators: If using a space between 'g:i' and 'a', use a non-breaking sapce.
    (0,external_wp_i18n_namespaceObject._x)('F j g:i\xa0a', 'post schedule date format without year'), date);
  }

  return (0,external_wp_date_namespaceObject.dateI18n)( // translators: Use a non-breaking space between 'g:i' and 'a' if appropriate.
  (0,external_wp_i18n_namespaceObject._x)('F j, Y g:i\xa0a', 'post schedule full date format'), date);
}

function getTimezoneAbbreviation() {
  const {
    timezone
  } = (0,external_wp_date_namespaceObject.getSettings)();

  const settings = Object(external_wp_date_["__experimentalGetSettings"])();

  return date && !isFloating ? Object(external_wp_date_["format"])(`${settings.formats.date} ${settings.formats.time}`, date) : Object(external_wp_i18n_["__"])('Immediately');
}
/* harmony default export */ var post_schedule_label = (Object(external_wp_data_["withSelect"])(select => {
  return {
    date: select(store).getEditedPostAttribute('date'),
    isFloating: select(store).isEditedPostDateFloating()
  };
})(PostScheduleLabel));

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__("ywyh");
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wp","a11y"]
var external_wp_a11y_ = __webpack_require__("gdqT");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/most-used-terms.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const MAX_MOST_USED_TERMS = 10;
const DEFAULT_QUERY = {
  per_page: MAX_MOST_USED_TERMS,
  orderby: 'count',
  order: 'desc',
  hide_empty: true,
  _fields: 'id,name,count',
  context: 'view'
};
function MostUsedTerms({
  onSelect,
  taxonomy
}) {
  const {
    _terms,
    showTerms
  } = Object(external_wp_data_["useSelect"])(select => {
    const mostUsedTerms = select(external_wp_coreData_["store"]).getEntityRecords('taxonomy', taxonomy.slug, DEFAULT_QUERY);
    return {
      _terms: mostUsedTerms,
      showTerms: mostUsedTerms?.length >= MIN_MOST_USED_TERMS
    };
  }, [taxonomy.slug]);

  if (!showTerms) {
    return null;
  }

  const terms = unescapeTerms(_terms);
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-taxonomies__flat-term-most-used"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.BaseControl.VisualLabel, {
    as: "h3",
    className: "editor-post-taxonomies__flat-term-most-used-label"
  }, taxonomy.labels.most_used), (0,external_wp_element_namespaceObject.createElement)("ul", {
    role: "list",
    className: "editor-post-taxonomies__flat-term-most-used-list"
  }, terms.map(term => Object(external_wp_element_["createElement"])("li", {
    key: term.id
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    variant: "link",
    onClick: () => onSelect(term)
  }, term.name)))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation.
 *
 * @type {Array<any>}
 */

const flat_term_selector_EMPTY_ARRAY = [];
/**
 * Module constants
 */

const MAX_TERMS_SUGGESTIONS = 20;
const flat_term_selector_DEFAULT_QUERY = {
  per_page: MAX_TERMS_SUGGESTIONS,
  _fields: 'id,name',
  context: 'view'
};

const isSameTermName = (termA, termB) => unescapeString(termA).toLowerCase() === unescapeString(termB).toLowerCase();

const termNamesToIds = (names, terms) => {
  return names.map(termName => terms.find(term => isSameTermName(term.name, termName)).id);
};

function FlatTermSelector({
  slug
}) {
  var _taxonomy$labels$add_, _taxonomy$labels$sing2;

  const [values, setValues] = (0,external_wp_element_namespaceObject.useState)([]);
  const [search, setSearch] = (0,external_wp_element_namespaceObject.useState)('');
  const debouncedSearch = (0,external_wp_compose_namespaceObject.useDebounce)(setSearch, 500);
  const {
    terms,
    termIds,
    taxonomy,
    hasAssignAction,
    hasCreateAction,
    hasResolvedTerms
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links, _post$_links2;

    const {
      getCurrentPost,
      getEditedPostAttribute
    } = select(store);
    const {
      getEntityRecords,
      getTaxonomy,
      hasFinishedResolution
    } = select(external_wp_coreData_["store"]);
    const post = getCurrentPost();

    const _taxonomy = getTaxonomy(slug);

    const _termIds = _taxonomy ? getEditedPostAttribute(_taxonomy.rest_base) : flat_term_selector_EMPTY_ARRAY;

    const query = { ...flat_term_selector_DEFAULT_QUERY,
      include: _termIds.join(','),
      per_page: -1
    };
    return {
      hasCreateAction: _taxonomy ? (_post$_links = post._links?.['wp:action-create-' + _taxonomy.rest_base]) !== null && _post$_links !== void 0 ? _post$_links : false : false,
      hasAssignAction: _taxonomy ? (_post$_links2 = post._links?.['wp:action-assign-' + _taxonomy.rest_base]) !== null && _post$_links2 !== void 0 ? _post$_links2 : false : false,
      taxonomy: _taxonomy,
      termIds: _termIds,
      terms: _termIds.length ? getEntityRecords('taxonomy', slug, query) : flat_term_selector_EMPTY_ARRAY,
      hasResolvedTerms: hasFinishedResolution('getEntityRecords', ['taxonomy', slug, query])
    };
  }, [slug]);
  const {
    searchResults
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEntityRecords
    } = select(external_wp_coreData_["store"]);
    return {
      searchResults: !!search ? getEntityRecords('taxonomy', slug, { ...flat_term_selector_DEFAULT_QUERY,
        search
      }) : flat_term_selector_EMPTY_ARRAY
    };
  }, [search, slug]); // Update terms state only after the selectors are resolved.
  // We're using this to avoid terms temporarily disappearing on slow networks
  // while core data makes REST API requests.

  Object(external_wp_element_["useEffect"])(() => {
    if (hasResolvedTerms) {
      const newValues = terms.map(term => unescapeString(term.name));
      setValues(newValues);
    }
  }, [terms, hasResolvedTerms]);
  const suggestions = Object(external_wp_element_["useMemo"])(() => {
    return (searchResults !== null && searchResults !== void 0 ? searchResults : []).map(term => unescapeString(term.name));
  }, [searchResults]);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    saveEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);

  if (!hasAssignAction) {
    return null;
  }

  async function findOrCreateTerm(term) {
    try {
      const newTerm = await saveEntityRecord('taxonomy', slug, term, {
        throwOnError: true
      });
      return unescapeTerm(newTerm);
    } catch (error) {
      if (error.code !== 'term_exists') {
        throw error;
      }

      return {
        id: error.data.term_id,
        name: term.name
      };
    }
  }

  function onUpdateTerms(newTermIds) {
    editPost({
      [taxonomy.rest_base]: newTermIds
    });
  }

  function onChange(termNames) {
    const availableTerms = [...(terms !== null && terms !== void 0 ? terms : []), ...(searchResults !== null && searchResults !== void 0 ? searchResults : [])];
    const uniqueTerms = termNames.reduce((acc, name) => {
      if (!acc.some(n => n.toLowerCase() === name.toLowerCase())) {
        acc.push(name);
      }

      return acc;
    }, []);
    const newTermNames = uniqueTerms.filter(termName => !availableTerms.find(term => isSameTermName(term.name, termName))); // Optimistically update term values.
    // The selector will always re-fetch terms later.

    setValues(uniqueTerms);

    if (newTermNames.length === 0) {
      return onUpdateTerms(termNamesToIds(uniqueTerms, availableTerms));
    }

    if (!hasCreateAction) {
      return;
    }

    Promise.all(newTermNames.map(termName => findOrCreateTerm({
      name: termName
    }))).then(newTerms => {
      const newAvailableTerms = availableTerms.concat(newTerms);
      return onUpdateTerms(termNamesToIds(uniqueTerms, newAvailableTerms));
    });
  }

  function appendTerm(newTerm) {
    var _taxonomy$labels$sing;

    if (termIds.includes(newTerm.id)) {
      return;
    }

    const newTermIds = [...termIds, newTerm.id];
    const defaultName = slug === 'post_tag' ? (0,external_wp_i18n_namespaceObject.__)('Tag') : (0,external_wp_i18n_namespaceObject.__)('Term');
    const termAddedMessage = (0,external_wp_i18n_namespaceObject.sprintf)(
    /* translators: %s: term name. */
    (0,external_wp_i18n_namespaceObject._x)('%s added', 'term'), (_taxonomy$labels$sing = taxonomy?.labels?.singular_name) !== null && _taxonomy$labels$sing !== void 0 ? _taxonomy$labels$sing : defaultName);
    (0,external_wp_a11y_namespaceObject.speak)(termAddedMessage, 'assertive');
    onUpdateTerms(newTermIds);
  }

  const newTermLabel = (_taxonomy$labels$add_ = taxonomy?.labels?.add_new_item) !== null && _taxonomy$labels$add_ !== void 0 ? _taxonomy$labels$add_ : slug === 'post_tag' ? (0,external_wp_i18n_namespaceObject.__)('Add new tag') : (0,external_wp_i18n_namespaceObject.__)('Add new Term');
  const singularName = (_taxonomy$labels$sing2 = taxonomy?.labels?.singular_name) !== null && _taxonomy$labels$sing2 !== void 0 ? _taxonomy$labels$sing2 : slug === 'post_tag' ? (0,external_wp_i18n_namespaceObject.__)('Tag') : (0,external_wp_i18n_namespaceObject.__)('Term');
  const termAddedLabel = (0,external_wp_i18n_namespaceObject.sprintf)(
  /* translators: %s: term name. */
  Object(external_wp_i18n_["_x"])('%s added', 'term'), singularName);
  const termRemovedLabel = Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: term name. */
  Object(external_wp_i18n_["_x"])('%s removed', 'term'), singularName);
  const removeTermLabel = Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: term name. */
  Object(external_wp_i18n_["_x"])('Remove %s', 'term'), singularName);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["FormTokenField"], {
    value: values,
    suggestions: suggestions,
    onChange: onChange,
    onInputChange: debouncedSearch,
    maxSuggestions: MAX_TERMS_SUGGESTIONS,
    label: newTermLabel,
    messages: {
      added: termAddedLabel,
      removed: termRemovedLabel,
      remove: removeTermLabel
    }
  }), Object(external_wp_element_["createElement"])(MostUsedTerms, {
    taxonomy: taxonomy,
    onSelect: appendTerm
  }));
}

/* harmony default export */ var flat_term_selector = (Object(external_wp_components_["withFilters"])('editor.PostTaxonomyType')(FlatTermSelector));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-tags-panel.js


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




const TagsPanel = () => {
  const panelBodyTitle = [Object(external_wp_i18n_["__"])('Suggestion:'), Object(external_wp_element_["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(external_wp_i18n_["__"])('Add tags'))];
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')), Object(external_wp_element_["createElement"])(flat_term_selector, {
    slug: 'post_tag'
  }));
};

class maybe_tags_panel_MaybeTagsPanel extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      hadTagsWhenOpeningThePanel: props.hasTags
    };
  }
  /*
   * We only want to show the tag panel if the post didn't have
   * any tags when the user hit the Publish button.
   *
   * We can't use the prop.hasTags because it'll change to true
   * if the user adds a new tag within the pre-publish panel.
   * This would force a re-render and a new prop.hasTags check,
   * hiding this panel and keeping the user from adding
   * more than one tag.
   */


  render() {
    if (!this.state.hadTagsWhenOpeningThePanel) {
      return Object(external_wp_element_["createElement"])(TagsPanel, null);
    }

    return null;
  }

}

/* harmony default export */ var maybe_tags_panel = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const postType = select(store).getCurrentPostType();
  const tagsTaxonomy = select(external_wp_coreData_["store"]).getTaxonomy('post_tag');
  const tags = tagsTaxonomy && select(store).getEditedPostAttribute(tagsTaxonomy.rest_base);
  return {
    areTagsFetched: tagsTaxonomy !== undefined,
    isPostTypeSupported: tagsTaxonomy && tagsTaxonomy.types.some(type => type === postType),
    hasTags: tags && tags.length
  };
}), (0,external_wp_compose_namespaceObject.ifCondition)(({
  areTagsFetched,
  isPostTypeSupported
}) => isPostTypeSupported && areTagsFetched))(MaybeTagsPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




const getSuggestion = (supportedFormats, suggestedPostFormat) => {
  const formats = POST_FORMATS.filter(format => supportedFormats?.includes(format.id));
  return formats.find(format => format.id === suggestedPostFormat);
};

const PostFormatSuggestion = ({
  suggestedPostFormat,
  suggestionText,
  onUpdatePostFormat
}) => (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
  variant: "link",
  onClick: () => onUpdatePostFormat(suggestedPostFormat)
}, suggestionText);

function PostFormatPanel() {
  const {
    currentPostFormat,
    suggestion
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getThemeSuppo;

    const {
      getEditedPostAttribute,
      getSuggestedPostFormat
    } = select(store_store);
    const supportedFormats = (_select$getThemeSuppo = select(external_wp_coreData_namespaceObject.store).getThemeSupports().formats) !== null && _select$getThemeSuppo !== void 0 ? _select$getThemeSuppo : [];
    return {
      hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
      isBeingScheduled: isEditedPostBeingScheduled(),
      isRequestingSiteIcon: isResolving('getEntityRecord', ['root', '__unstableBase', undefined]),
      siteIconUrl: siteData.site_icon_url,
      siteTitle: siteData.name,
      siteHome: siteData.home && Object(external_wp_url_["filterURLForDisplay"])(siteData.home)
    };
  }, []);
  let siteIcon = Object(external_wp_element_["createElement"])(external_wp_components_["Icon"], {
    className: "components-site-icon",
    size: "36px",
    icon: wordpress["a" /* default */]
  });

  if (siteIconUrl) {
    siteIcon = Object(external_wp_element_["createElement"])("img", {
      alt: Object(external_wp_i18n_["__"])('Site Icon'),
      className: "components-site-icon",
      src: siteIconUrl
    });
  }

  if (isRequestingSiteIcon) {
    siteIcon = null;
  }

  let prePublishTitle, prePublishBodyText;

  if (!hasPublishAction) {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to submit for review?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to schedule?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to publish?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('Double-check your settings before publishing.');
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-publish-panel__prepublish"
  }, Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("strong", null, prePublishTitle)), Object(external_wp_element_["createElement"])("p", null, prePublishBodyText), Object(external_wp_element_["createElement"])("div", {
    className: "components-site-card"
  }, siteIcon, Object(external_wp_element_["createElement"])("div", {
    className: "components-site-info"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "components-site-name"
  }, Object(external_wp_htmlEntities_["decodeEntities"])(siteTitle) || Object(external_wp_i18n_["__"])('(Untitled)')), Object(external_wp_element_["createElement"])("span", {
    className: "components-site-home"
  }, siteHome))), hasPublishAction && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: [Object(external_wp_i18n_["__"])('Visibility:'), Object(external_wp_element_["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(external_wp_element_["createElement"])(post_visibility_label, null))]
  }, Object(external_wp_element_["createElement"])(post_visibility, null)), Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: [Object(external_wp_i18n_["__"])('Publish:'), Object(external_wp_element_["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(external_wp_element_["createElement"])(post_schedule_label, null))]
  }, Object(external_wp_element_["createElement"])(PostSchedule, null))), Object(external_wp_element_["createElement"])(PostFormatPanel, null), Object(external_wp_element_["createElement"])(maybe_tags_panel, null), children);
}

/* harmony default export */ var prepublish = (PostPublishPanelPrepublish);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/postpublish.js


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



const POSTNAME = '%postname%';
/**
 * Returns URL for a future post.
 *
 * @param {Object} post Post object.
 *
 * @return {string} PostPublish URL.
 */

const getFuturePostUrl = post => {
  const {
    slug
  } = post;

  if (post.permalink_template.includes(POSTNAME)) {
    return post.permalink_template.replace(POSTNAME, slug);
  }

  return post.permalink_template;
};

function findTerm(terms, parent, name) {
  return terms.find(term => {
    return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
  });
}

class postpublish_PostPublishPanelPostpublish extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      showCopyConfirmation: false
    };
    this.onCopy = this.onCopy.bind(this);
    this.onSelectInput = this.onSelectInput.bind(this);
    this.postLink = Object(external_wp_element_["createRef"])();
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.postLink.current.focus();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissCopyConfirmation);
  }

  onCopy() {
    this.setState({
      showCopyConfirmation: true
    });
    clearTimeout(this.dismissCopyConfirmation);
    this.dismissCopyConfirmation = setTimeout(() => {
      this.setState({
        showCopyConfirmation: false
      });
    }, 4000);
  }

function HierarchicalTermSelector({
  slug
}) {
  var _taxonomy$labels$sear, _taxonomy$name;

  const [adding, setAdding] = (0,external_wp_element_namespaceObject.useState)(false);
  const [formName, setFormName] = (0,external_wp_element_namespaceObject.useState)('');
  /**
   * @type {[number|'', Function]}
   */

  const [formParent, setFormParent] = (0,external_wp_element_namespaceObject.useState)('');
  const [showForm, setShowForm] = (0,external_wp_element_namespaceObject.useState)(false);
  const [filterValue, setFilterValue] = (0,external_wp_element_namespaceObject.useState)('');
  const [filteredTermsTree, setFilteredTermsTree] = (0,external_wp_element_namespaceObject.useState)([]);
  const debouncedSpeak = (0,external_wp_compose_namespaceObject.useDebounce)(external_wp_a11y_namespaceObject.speak, 500);
  const {
    hasCreateAction,
    hasAssignAction,
    terms,
    loading,
    availableTerms,
    taxonomy
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links, _post$_links2;

    const {
      getCurrentPost,
      getEditedPostAttribute
    } = select(store_store);
    const {
      getTaxonomy,
      getEntityRecords,
      isResolving
    } = select(external_wp_coreData_namespaceObject.store);

    const _taxonomy = getTaxonomy(slug);

    const post = getCurrentPost();
    return {
      hasCreateAction: _taxonomy ? (_post$_links = post._links?.['wp:action-create-' + _taxonomy.rest_base]) !== null && _post$_links !== void 0 ? _post$_links : false : false,
      hasAssignAction: _taxonomy ? (_post$_links2 = post._links?.['wp:action-assign-' + _taxonomy.rest_base]) !== null && _post$_links2 !== void 0 ? _post$_links2 : false : false,
      terms: _taxonomy ? getEditedPostAttribute(_taxonomy.rest_base) : hierarchical_term_selector_EMPTY_ARRAY,
      loading: isResolving('getEntityRecords', ['taxonomy', slug, hierarchical_term_selector_DEFAULT_QUERY]),
      availableTerms: getEntityRecords('taxonomy', slug, hierarchical_term_selector_DEFAULT_QUERY) || hierarchical_term_selector_EMPTY_ARRAY,
      taxonomy: _taxonomy
    };
  }, [slug]);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    saveEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const availableTermsTree = (0,external_wp_element_namespaceObject.useMemo)(() => sortBySelected(buildTermsTree(availableTerms), terms), // Remove `terms` from the dependency list to avoid reordering every time
  // checking or unchecking a term.
  [availableTerms]);

  if (!hasAssignAction) {
    return null;
  }

}

/* harmony default export */ var postpublish = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getEditedPostAttribute,
    getCurrentPost,
    isCurrentPostScheduled
  } = select(store);
  const {
    getPostType
  } = select(external_wp_coreData_["store"]);
  return {
    post: getCurrentPost(),
    postType: getPostType(getEditedPostAttribute('type')),
    isScheduled: isCurrentPostScheduled()
  };
})(postpublish_PostPublishPanelPostpublish));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/index.js


  const onChange = termId => {
    const hasTerm = terms.includes(termId);
    const newTerms = hasTerm ? terms.filter(id => id !== termId) : [...terms, termId];
    onUpdateTerms(newTerms);
  };

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



  const onAddTerm = async event => {
    var _taxonomy$labels$sing;

    event.preventDefault();




    if (existingTerm) {
      // If the term we are adding exists but is not selected select it.
      if (!terms.some(term => term === existingTerm.id)) {
        onUpdateTerms([...terms, existingTerm.id]);
      }

/**
 * Internal dependencies
 */

    setAdding(true);
    const newTerm = await addTerm({
      name: formName,
      parent: formParent ? formParent : undefined
    });
    const defaultName = slug === 'category' ? (0,external_wp_i18n_namespaceObject.__)('Category') : (0,external_wp_i18n_namespaceObject.__)('Term');
    const termAddedMessage = (0,external_wp_i18n_namespaceObject.sprintf)(
    /* translators: %s: taxonomy name */
    (0,external_wp_i18n_namespaceObject._x)('%s added', 'term'), (_taxonomy$labels$sing = taxonomy?.labels?.singular_name) !== null && _taxonomy$labels$sing !== void 0 ? _taxonomy$labels$sing : defaultName);
    (0,external_wp_a11y_namespaceObject.speak)(termAddedMessage, 'assertive');
    setAdding(false);
    setFormName('');
    setFormParent('');
    onUpdateTerms([...terms, newTerm.id]);
  };




class post_publish_panel_PostPublishPanel extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Automatically collapse the publish sidebar when a post
    // is published and the user makes an edit.
    if (prevProps.isPublished && !this.props.isSaving && this.props.isDirty) {
      this.props.onClose();
    }
  }

  onSubmit() {
    const {
      onClose,
      hasPublishAction,
      isPostTypeViewable
    } = this.props;

  const renderTerms = renderedTerms => {
    return renderedTerms.map(term => {
      return (0,external_wp_element_namespaceObject.createElement)("div", {
        key: term.id,
        className: "editor-post-taxonomies__hierarchical-terms-choice"
      }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.CheckboxControl, {
        __nextHasNoMarginBottom: true,
        checked: terms.indexOf(term.id) !== -1,
        onChange: () => {
          const termId = parseInt(term.id, 10);
          onChange(termId);
        },
        label: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(term.name)
      }), !!term.children.length && (0,external_wp_element_namespaceObject.createElement)("div", {
        className: "editor-post-taxonomies__hierarchical-terms-subchoices"
      }, renderTerms(term.children)));
    });
  };

  const labelWithFallback = (labelProperty, fallbackIsCategory, fallbackIsNotCategory) => {
    var _taxonomy$labels$labe;

    return (_taxonomy$labels$labe = taxonomy?.labels?.[labelProperty]) !== null && _taxonomy$labels$labe !== void 0 ? _taxonomy$labels$labe : slug === 'category' ? fallbackIsCategory : fallbackIsNotCategory;
  };

  const newTermButtonLabel = labelWithFallback('add_new_item', (0,external_wp_i18n_namespaceObject.__)('Add new category'), (0,external_wp_i18n_namespaceObject.__)('Add new term'));
  const newTermLabel = labelWithFallback('new_item_name', (0,external_wp_i18n_namespaceObject.__)('Add new category'), (0,external_wp_i18n_namespaceObject.__)('Add new term'));
  const parentSelectLabel = labelWithFallback('parent_item', (0,external_wp_i18n_namespaceObject.__)('Parent Category'), (0,external_wp_i18n_namespaceObject.__)('Parent Term'));
  const noParentOption = `— ${parentSelectLabel} —`;
  const newTermSubmitLabel = newTermButtonLabel;
  const filterLabel = (_taxonomy$labels$sear = taxonomy?.labels?.search_items) !== null && _taxonomy$labels$sear !== void 0 ? _taxonomy$labels$sear : (0,external_wp_i18n_namespaceObject.__)('Search Terms');
  const groupLabel = (_taxonomy$name = taxonomy?.name) !== null && _taxonomy$name !== void 0 ? _taxonomy$name : (0,external_wp_i18n_namespaceObject.__)('Terms');
  const showFilter = availableTerms.length >= MIN_TERMS_COUNT_FOR_FILTER;
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Flex, {
    direction: "column",
    gap: "4"
  }, showFilter && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextControl, {
    __nextHasNoMarginBottom: true,
    label: filterLabel,
    value: filterValue,
    onChange: setFilter
  }), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-taxonomies__hierarchical-terms-list",
    tabIndex: "0",
    role: "group",
    "aria-label": groupLabel
  }, renderTerms('' !== filterValue ? filteredTermsTree : availableTermsTree)), !loading && hasCreateAction && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexItem, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    onClick: onToggleForm,
    className: "editor-post-taxonomies__hierarchical-terms-add",
    "aria-expanded": showForm,
    variant: "link"
  }, newTermButtonLabel)), showForm && (0,external_wp_element_namespaceObject.createElement)("form", {
    onSubmit: onAddTerm
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Flex, {
    direction: "column",
    gap: "4"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextControl, {
    __nextHasNoMarginBottom: true,
    className: "editor-post-taxonomies__hierarchical-terms-input",
    label: newTermLabel,
    value: formName,
    onChange: onChangeFormName,
    required: true
  }), !!availableTerms.length && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TreeSelect, {
    __nextHasNoMarginBottom: true,
    label: parentSelectLabel,
    noOptionLabel: noParentOption,
    onChange: onChangeFormParent,
    selectedId: formParent,
    tree: availableTermsTree
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexItem, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "secondary",
    type: "submit",
    className: "editor-post-taxonomies__hierarchical-terms-submit"
  }, newTermSubmitLabel)))));
}
/* harmony default export */ var post_publish_panel = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getPostType
  } = select(external_wp_coreData_["store"]);
  const {
    getCurrentPost,
    getEditedPostAttribute,
    isCurrentPostPublished,
    isCurrentPostScheduled,
    isEditedPostBeingScheduled,
    isEditedPostDirty,
    isSavingPost,
    isSavingNonPostEntityChanges
  } = select(store);
  const {
    isPublishSidebarEnabled
  } = select(store);
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPostTypeViewable: Object(external_lodash_["get"])(postType, ['viewable'], false),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isDirty: isEditedPostDirty(),
    isPublished: isCurrentPostPublished(),
    isPublishSidebarEnabled: isPublishSidebarEnabled(),
    isSaving: isSavingPost(),
    isSavingNonPostEntityChanges: isSavingNonPostEntityChanges(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(external_wp_data_["withDispatch"])((dispatch, _ref) => {
  let {
    isPublishSidebarEnabled
  } = _ref;
  const {
    disablePublishSidebar,
    enablePublishSidebar
  } = dispatch(store);
  return {
    onTogglePublishSidebar: () => {
      if (isPublishSidebarEnabled) {
        disablePublishSidebar();
      } else {
        enablePublishSidebar();
      }
    }
  };
}), external_wp_components_["withFocusReturn"], external_wp_components_["withConstrainedTabbing"]])(post_publish_panel_PostPublishPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cloud-upload.js


/**
 * WordPress dependencies
 */

const cloud = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
}));
/* harmony default export */ var library_cloud = (cloud);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function PostSwitchToDraftButton(_ref) {
  let {
    isSaving,
    isPublished,
    isScheduled,
    onClick
  } = _ref;
  const isMobileViewport = Object(external_wp_compose_["useViewportMatch"])('small', '<');

  if (!isPublished && !isScheduled) {
    return null;
  }

  const onSwitch = () => {
    let alertMessage;

function MaybeCategoryPanel() {
  const hasNoCategory = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const postType = select(store_store).getCurrentPostType();
    const {
      canUser,
      getEntityRecord,
      getTaxonomy
    } = select(external_wp_coreData_namespaceObject.store);
    const categoriesTaxonomy = getTaxonomy('category');
    const defaultCategoryId = canUser('read', 'settings') ? getEntityRecord('root', 'site')?.default_category : undefined;
    const defaultCategory = defaultCategoryId ? getEntityRecord('taxonomy', 'category', defaultCategoryId) : undefined;
    const postTypeSupportsCategories = categoriesTaxonomy && categoriesTaxonomy.types.some(type => type === postType);
    const categories = categoriesTaxonomy && select(store_store).getEditedPostAttribute(categoriesTaxonomy.rest_base); // This boolean should return true if everything is loaded
    // ( categoriesTaxonomy, defaultCategory )
    // and the post has not been assigned a category different than "uncategorized".

    return !!categoriesTaxonomy && !!defaultCategory && postTypeSupportsCategories && (categories?.length === 0 || categories?.length === 1 && defaultCategory?.id === categories[0]);
  }, []);
  const [shouldShowPanel, setShouldShowPanel] = (0,external_wp_element_namespaceObject.useState)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // We use state to avoid hiding the panel if the user edits the categories
    // and adds one within the panel itself (while visible).
    if (hasNoCategory) {
      setShouldShowPanel(true);
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "editor-post-switch-to-draft",
    onClick: onSwitch,
    disabled: isSaving,
    variant: "tertiary"
  }, isMobileViewport ? Object(external_wp_i18n_["__"])('Draft') : Object(external_wp_i18n_["__"])('Switch to draft'));
}

/* harmony default export */ var post_switch_to_draft_button = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    isSavingPost,
    isCurrentPostPublished,
    isCurrentPostScheduled
  } = select(store);
  return {
    isSaving: isSavingPost(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    editPost,
    savePost
  } = dispatch(store);
  return {
    onClick: () => {
      editPost({
        status: 'draft'
      });
      savePost();
    }
  };
})])(PostSwitchToDraftButton));

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/upload.js


/**
 * WordPress dependencies
 */

const upload = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ var library_upload = (upload);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-upload-media.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function flattenBlocks(blocks) {
  const result = [];
  blocks.forEach(block => {
    result.push(block);
    result.push(...flattenBlocks(block.innerBlocks));
  });
  return result;
}

function Image(block) {
  const {
    selectBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__unstableMotion.img, {
    tabIndex: 0,
    role: "button",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Select image block.'),
    onClick: () => {
      selectBlock(block.clientId);
    },
    onKeyDown: event => {
      if (event.key === 'Enter' || event.key === ' ') {
        selectBlock(block.clientId);
        event.preventDefault();
      }
    },
    key: block.clientId,
    alt: block.attributes.alt,
    src: block.attributes.url,
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      scale: 0
    },
    style: {
      width: '36px',
      height: '36px',
      objectFit: 'cover',
      borderRadius: '2px',
      cursor: 'pointer'
    },
    whileHover: {
      scale: 1.08
    }
  });
}

function maybe_upload_media_PostFormatPanel() {
  const [isUploading, setIsUploading] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    editorBlocks,
    mediaUpload
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    editorBlocks: select(store_store).getEditorBlocks(),
    mediaUpload: select(external_wp_blockEditor_namespaceObject.store).getSettings().mediaUpload
  }), []);
  const externalImages = flattenBlocks(editorBlocks).filter(block => block.name === 'core/image' && block.attributes.url && !block.attributes.id);
  const {
    updateBlockAttributes
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);

  if (!mediaUpload || !externalImages.length) {
    return null;
  }

  const panelBodyTitle = [(0,external_wp_i18n_namespaceObject.__)('Suggestion:'), (0,external_wp_element_namespaceObject.createElement)("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, (0,external_wp_i18n_namespaceObject.__)('External media'))];

  function uploadImages() {
    setIsUploading(true);
    Promise.all(externalImages.map(image => window.fetch(image.attributes.url.includes('?') ? image.attributes.url : image.attributes.url + '?').then(response => response.blob()).then(blob => new Promise((resolve, reject) => {
      mediaUpload({
        filesList: [blob],
        onFileChange: ([media]) => {
          if ((0,external_wp_blob_namespaceObject.isBlobURL)(media.url)) {
            return;
          }

          updateBlockAttributes(image.clientId, {
            id: media.id,
            url: media.url
          });
          resolve();
        },

        onError() {
          reject();
        }

      });
    })))).finally(() => {
      setIsUploading(false);
    });
  }

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.PanelBody, {
    initialOpen: true,
    title: panelBodyTitle
  }, (0,external_wp_element_namespaceObject.createElement)("p", null, (0,external_wp_i18n_namespaceObject.__)('There are some external images in the post which can be uploaded to the media library. Images coming from different domains may not always display correctly, load slowly for visitors, or be removed unexpectedly.')), (0,external_wp_element_namespaceObject.createElement)("div", {
    style: {
      display: 'inline-flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__unstableAnimatePresence, null, externalImages.map(image => {
    return (0,external_wp_element_namespaceObject.createElement)(Image, {
      key: image.clientId,
      ...image
    });
  })), isUploading ? (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Spinner, null) : (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    icon: library_upload,
    variant: "primary",
    onClick: uploadImages
  }, (0,external_wp_i18n_namespaceObject.__)('Upload all'))));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/prepublish.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */











function PostPublishPanelPrepublish({
  children
}) {
  const {
    isBeingScheduled,
    isRequestingSiteIcon,
    hasPublishAction,
    siteIconUrl,
    siteTitle,
    siteHome
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getCurrentPost$_link;

    const {
      getCurrentPost,
      isEditedPostBeingScheduled
    } = select(store_store);
    const {
      getEntityRecord,
      isResolving
    } = select(external_wp_coreData_namespaceObject.store);
    const siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
      isBeingScheduled: isEditedPostBeingScheduled(),
      isRequestingSiteIcon: isResolving('getEntityRecord', ['root', '__unstableBase', undefined]),
      siteIconUrl: siteData.site_icon_url,
      siteTitle: siteData.name,
      siteHome: siteData.home && (0,external_wp_url_namespaceObject.filterURLForDisplay)(siteData.home)
    };
  }, [forceIsDirty, forceIsSaving]);
  const {
    savePost
  } = Object(external_wp_data_["useDispatch"])(store);
  const wasSaving = Object(external_wp_compose_["usePrevious"])(isSaving);
  Object(external_wp_element_["useEffect"])(() => {
    let timeoutId;

    if (wasSaving && !isSaving) {
      setForceSavedMessage(true);
      timeoutId = setTimeout(() => {
        setForceSavedMessage(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isSaving]); // Once the post has been submitted for review this button
  // is not needed for the contributor role.

  if (!hasPublishAction && isPending) {
    return null;
  }

  if (isPublished || isScheduled) {
    return Object(external_wp_element_["createElement"])(post_switch_to_draft_button, null);
  }
  /* translators: button label text should, if possible, be under 16 characters. */


  const label = isPending ? Object(external_wp_i18n_["__"])('Save as pending') : Object(external_wp_i18n_["__"])('Save draft');
  /* translators: button label text should, if possible, be under 16 characters. */

  const shortLabel = Object(external_wp_i18n_["__"])('Save');

  const isSaved = forceSavedMessage || !isNew && !isDirty;
  const isSavedState = isSaving || isSaved;
  const isDisabled = isSaving || isSaved || !isSaveable;
  let text;

  if (isSaving) {
    text = isAutosaving ? Object(external_wp_i18n_["__"])('Autosaving') : Object(external_wp_i18n_["__"])('Saving');
  } else if (isSaved) {
    text = Object(external_wp_i18n_["__"])('Saved');
  } else if (isLargeViewport) {
    text = label;
  } else if (showIconLabels) {
    text = shortLabel;
  } // Use common Button instance for all saved states so that focus is not
  // lost.


  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: isSaveable || isSaving ? classnames_default()({
      'editor-post-save-draft': !isSavedState,
      'editor-post-saved-state': isSavedState,
      'is-saving': isSaving,
      'is-autosaving': isAutosaving,
      'is-saved': isSaved,
      [Object(external_wp_components_["__unstableGetAnimateClassName"])({
        type: 'loading'
      })]: isSaving
    }) : undefined,
    onClick: isDisabled ? undefined : () => savePost(),
    shortcut: external_wp_keycodes_["displayShortcut"].primary('s'),
    variant: isLargeViewport ? 'tertiary' : undefined,
    icon: isLargeViewport ? undefined : cloud_upload,
    label: label,
    "aria-disabled": isDisabled
  }, isSavedState && Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: isSaved ? library_check["a" /* default */] : library_cloud
  }), text);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostScheduleCheck(_ref) {
  let {
    hasPublishAction,
    children
  } = _ref;

  if (!hasPublishAction) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-publish-panel__prepublish"
  }, (0,external_wp_element_namespaceObject.createElement)("div", null, (0,external_wp_element_namespaceObject.createElement)("strong", null, prePublishTitle)), (0,external_wp_element_namespaceObject.createElement)("p", null, prePublishBodyText), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "components-site-card"
  }, siteIcon, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "components-site-info"
  }, (0,external_wp_element_namespaceObject.createElement)("span", {
    className: "components-site-name"
  }, (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(siteTitle) || (0,external_wp_i18n_namespaceObject.__)('(Untitled)')), (0,external_wp_element_namespaceObject.createElement)("span", {
    className: "components-site-home"
  }, siteHome))), (0,external_wp_element_namespaceObject.createElement)(maybe_upload_media_PostFormatPanel, null), hasPublishAction && (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.PanelBody, {
    initialOpen: false,
    title: [(0,external_wp_i18n_namespaceObject.__)('Visibility:'), (0,external_wp_element_namespaceObject.createElement)("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, (0,external_wp_element_namespaceObject.createElement)(PostVisibilityLabel, null))]
  }, (0,external_wp_element_namespaceObject.createElement)(PostVisibility, null)), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.PanelBody, {
    initialOpen: false,
    title: [(0,external_wp_i18n_namespaceObject.__)('Publish:'), (0,external_wp_element_namespaceObject.createElement)("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, (0,external_wp_element_namespaceObject.createElement)(PostScheduleLabel, null))]
  }, (0,external_wp_element_namespaceObject.createElement)(PostSchedule, null))), (0,external_wp_element_namespaceObject.createElement)(PostFormatPanel, null), (0,external_wp_element_namespaceObject.createElement)(maybe_tags_panel, null), (0,external_wp_element_namespaceObject.createElement)(maybe_category_panel, null), children);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/index.js


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



const POSTNAME = '%postname%';
const PAGENAME = '%pagename%';
/**
 * Returns URL for a future post.
 *
 * @param {Object} post Post object.
 *
 * @return {string} PostPublish URL.
 */

const getFuturePostUrl = post => {
  const {
    slug
  } = post;

  if (post.permalink_template.includes(POSTNAME)) {
    return post.permalink_template.replace(POSTNAME, slug);
  }

  if (post.permalink_template.includes(PAGENAME)) {
    return post.permalink_template.replace(PAGENAME, slug);
  }

  return post.permalink_template;
};

function postpublish_CopyButton({
  text,
  onCopy,
  children
}) {
  const ref = (0,external_wp_compose_namespaceObject.useCopyToClipboard)(text, onCopy);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "secondary",
    ref: ref
  }, children);
}

class post_slug_PostSlug extends external_wp_element_["Component"] {
  constructor(_ref) {
    let {
      postSlug,
      postTitle,
      postID
    } = _ref;
    super(...arguments);
    this.state = {
      editedSlug: Object(external_wp_url_["safeDecodeURIComponent"])(postSlug) || cleanForSlug(postTitle) || postID
    };
    this.setSlug = this.setSlug.bind(this);
  }

  setSlug(event) {
    const {
      postSlug,
      onUpdateSlug
    } = this.props;
    const {
      value
    } = event.target;
    const editedSlug = cleanForSlug(value);

    if (editedSlug === postSlug) {
      return;
    }

    onUpdateSlug(editedSlug);
  }

  render() {
    const {
      instanceId
    } = this.props;
    const postLabel = postType?.labels?.singular_name;
    const viewPostLabel = postType?.labels?.view_item;
    const addNewPostLabel = postType?.labels?.add_new_item;
    const link = post.status === 'future' ? getFuturePostUrl(post) : post.link;
    const addLink = (0,external_wp_url_namespaceObject.addQueryArgs)('post-new.php', {
      post_type: post.type
    });
    const postPublishNonLinkHeader = isScheduled ? (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_i18n_namespaceObject.__)('is now scheduled. It will go live on'), ' ', (0,external_wp_element_namespaceObject.createElement)(PostScheduleLabel, null), ".") : (0,external_wp_i18n_namespaceObject.__)('is now live.');
    return (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "post-publish-panel__postpublish"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.PanelBody, {
      className: "post-publish-panel__postpublish-header"
    }, (0,external_wp_element_namespaceObject.createElement)("a", {
      ref: this.postLink,
      href: link
    }, (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(post.title) || (0,external_wp_i18n_namespaceObject.__)('(no title)')), ' ', postPublishNonLinkHeader), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.PanelBody, null, (0,external_wp_element_namespaceObject.createElement)("p", {
      className: "post-publish-panel__postpublish-subheader"
    }, (0,external_wp_element_namespaceObject.createElement)("strong", null, (0,external_wp_i18n_namespaceObject.__)('What’s next?'))), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "post-publish-panel__postpublish-post-address-container"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextControl, {
      __nextHasNoMarginBottom: true,
      className: "post-publish-panel__postpublish-post-address",
      readOnly: true,
      label: (0,external_wp_i18n_namespaceObject.sprintf)(
      /* translators: %s: post type singular name */
      (0,external_wp_i18n_namespaceObject.__)('%s address'), postLabel),
      value: (0,external_wp_url_namespaceObject.safeDecodeURIComponent)(link),
      onFocus: this.onSelectInput
    }), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "post-publish-panel__postpublish-post-address__copy-button-wrap"
    }, (0,external_wp_element_namespaceObject.createElement)(postpublish_CopyButton, {
      text: link,
      onCopy: this.onCopy
    }, this.state.showCopyConfirmation ? (0,external_wp_i18n_namespaceObject.__)('Copied!') : (0,external_wp_i18n_namespaceObject.__)('Copy')))), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "post-publish-panel__postpublish-buttons"
    }, !isScheduled && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      variant: "primary",
      href: link
    }, viewPostLabel), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      variant: isScheduled ? 'primary' : 'secondary',
      href: addLink
    }, addNewPostLabel))), children);
  }

}
/* harmony default export */ var post_slug = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPost,
    getEditedPostAttribute
  } = select(store);
  const {
    id
  } = getCurrentPost();
  return {
    postSlug: getEditedPostAttribute('slug'),
    postTitle: getEditedPostAttribute('title'),
    postID: id
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    editPost
  } = dispatch(store);
  return {
    onUpdateSlug(slug) {
      editPost({
        slug
      });
    }

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function PostStickyCheck(_ref) {
  let {
    hasStickyAction,
    postType,
    children
  } = _ref;

  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_sticky_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const post = select(store).getCurrentPost();
  return {
    hasStickyAction: Object(external_lodash_["get"])(post, ['_links', 'wp:action-sticky'], false),
    postType: select(store).getCurrentPostType()
  };
})])(PostStickyCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js


/**
 * WordPress dependencies
 */


  render() {
    const {
      forceIsDirty,
      forceIsSaving,
      isBeingScheduled,
      isPublished,
      isPublishSidebarEnabled,
      isScheduled,
      isSaving,
      isSavingNonPostEntityChanges,
      onClose,
      onTogglePublishSidebar,
      PostPublishExtension,
      PrePublishExtension,
      ...additionalProps
    } = this.props;
    const {
      hasPublishAction,
      isDirty,
      isPostTypeViewable,
      ...propsForPanel
    } = additionalProps;
    const isPublishedOrScheduled = isPublished || isScheduled && isBeingScheduled;
    const isPrePublish = !isPublishedOrScheduled && !isSaving;
    const isPostPublish = isPublishedOrScheduled && !isSaving;
    return (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "editor-post-publish-panel",
      ...propsForPanel
    }, (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "editor-post-publish-panel__header"
    }, isPostPublish ? (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      onClick: onClose,
      icon: close_small,
      label: (0,external_wp_i18n_namespaceObject.__)('Close panel')
    }) : (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "editor-post-publish-panel__header-publish-button"
    }, (0,external_wp_element_namespaceObject.createElement)(post_publish_button, {
      focusOnMount: true,
      onSubmit: this.onSubmit,
      forceIsDirty: forceIsDirty,
      forceIsSaving: forceIsSaving
    })), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "editor-post-publish-panel__header-cancel-button"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      disabled: isSavingNonPostEntityChanges,
      onClick: onClose,
      variant: "secondary"
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel'))))), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "editor-post-publish-panel__content"
    }, isPrePublish && (0,external_wp_element_namespaceObject.createElement)(prepublish, null, PrePublishExtension && (0,external_wp_element_namespaceObject.createElement)(PrePublishExtension, null)), isPostPublish && (0,external_wp_element_namespaceObject.createElement)(postpublish, {
      focusOnMount: true
    }, PostPublishExtension && (0,external_wp_element_namespaceObject.createElement)(PostPublishExtension, null)), isSaving && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Spinner, null)), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "editor-post-publish-panel__footer"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.CheckboxControl, {
      __nextHasNoMarginBottom: true,
      label: (0,external_wp_i18n_namespaceObject.__)('Always show pre-publish checks.'),
      checked: isPublishSidebarEnabled,
      onChange: onTogglePublishSidebar
    })));
  }

}
/* harmony default export */ var post_publish_panel = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  var _getCurrentPost$_link;

  const {
    getPostType
  } = select(external_wp_coreData_namespaceObject.store);
  const {
    getCurrentPost,
    getEditedPostAttribute,
    isCurrentPostPublished,
    isCurrentPostScheduled,
    isEditedPostBeingScheduled,
    isEditedPostDirty,
    isSavingPost,
    isSavingNonPostEntityChanges
  } = select(store_store);
  const {
    isPublishSidebarEnabled
  } = select(store_store);
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
    isPostTypeViewable: postType?.viewable,
    isBeingScheduled: isEditedPostBeingScheduled(),
    isDirty: isEditedPostDirty(),
    isPublished: isCurrentPostPublished(),
    isPublishSidebarEnabled: isPublishSidebarEnabled(),
    isSaving: isSavingPost(),
    isSavingNonPostEntityChanges: isSavingNonPostEntityChanges(),
    isScheduled: isCurrentPostScheduled()
  };
}), (0,external_wp_data_namespaceObject.withDispatch)((dispatch, {
  isPublishSidebarEnabled
}) => {
  const {
    disablePublishSidebar,
    enablePublishSidebar
  } = dispatch(store_store);
  return {
    postSticky: select(store).getEditedPostAttribute('sticky')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  return {
    onUpdateSticky(postSticky) {
      dispatch(store).editPost({
        sticky: postSticky
      });
    }

  };
})])(PostSticky));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



/**
 * Module Constants
 */

const hierarchical_term_selector_DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'name',
  order: 'asc',
  _fields: 'id,name,parent',
  context: 'view'
};
const MIN_TERMS_COUNT_FOR_FILTER = 8;
const hierarchical_term_selector_EMPTY_ARRAY = [];
/**
 * Sort Terms by Selected.
 *
 * @param {Object[]} termsTree Array of terms in tree format.
 * @param {number[]} terms     Selected terms.
 *
 * @return {Object[]} Sorted array of terms.
 */

function Icon({
  icon,
  size = 24,
  ...props
}) {
  return (0,external_wp_element_namespaceObject.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

    if (termASelected && !termBSelected) {
      return -1;
    }

    if (!termASelected && termBSelected) {
      return 1;
    }

    return 0;
  };

  const newTermTree = [...termsTree];
  newTermTree.sort(termOrChildIsSelected);
  return newTermTree;
}
/**
 * Find term by parent id or name.
 *
 * @param {Object[]}      terms  Array of Terms.
 * @param {number|string} parent id.
 * @param {string}        name   Term name.
 * @return {Object} Term object.
 */

function findTerm(terms, parent, name) {
  return Object(external_lodash_["find"])(terms, term => {
    return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
  });
}
/**
 * Get filter matcher function.
 *
 * @param {string} filterValue Filter value.
 * @return {(function(Object): (Object|boolean))} Matcher function.
 */

function getFilterMatcher(filterValue) {
  const matchTermsForFilter = originalTerm => {
    if ('' === filterValue) {
      return originalTerm;
    } // Shallow clone, because we'll be filtering the term's children and
    // don't want to modify the original term.


    const term = { ...originalTerm
    }; // Map and filter the children, recursive so we deal with grandchildren
    // and any deeper levels.

    if (term.children.length > 0) {
      term.children = term.children.map(matchTermsForFilter).filter(child => child);
    } // If the term's name contains the filterValue, or it has children
    // (i.e. some child matched at some point in the tree) then return it.


    if (-1 !== term.name.toLowerCase().indexOf(filterValue.toLowerCase()) || term.children.length > 0) {
      return term;
    } // Otherwise, return false. After mapping, the list of terms will need
    // to have false values filtered out.


    return false;
  };

  return matchTermsForFilter;
}
/**
 * Hierarchical term selector.
 *
 * @param {Object} props      Component props.
 * @param {string} props.slug Taxonomy slug.
 * @return {WPElement}        Hierarchical term selector component.
 */

function HierarchicalTermSelector(_ref) {
  let {
    slug
  } = _ref;
  const [adding, setAdding] = Object(external_wp_element_["useState"])(false);
  const [formName, setFormName] = Object(external_wp_element_["useState"])('');
  /**
   * @type {[number|'', Function]}
   */

  const [formParent, setFormParent] = Object(external_wp_element_["useState"])('');
  const [showForm, setShowForm] = Object(external_wp_element_["useState"])(false);
  const [filterValue, setFilterValue] = Object(external_wp_element_["useState"])('');
  const [filteredTermsTree, setFilteredTermsTree] = Object(external_wp_element_["useState"])([]);
  const debouncedSpeak = Object(external_wp_compose_["useDebounce"])(external_wp_a11y_["speak"], 500);
  const {
    hasCreateAction,
    hasAssignAction,
    terms,
    loading,
    availableTerms,
    taxonomy
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getCurrentPost,
      getEditedPostAttribute
    } = select(store);
    const {
      getTaxonomy,
      getEntityRecords,
      isResolving
    } = select(external_wp_coreData_["store"]);

    const _taxonomy = getTaxonomy(slug);

    return {
      hasCreateAction: _taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + _taxonomy.rest_base], false) : false,
      hasAssignAction: _taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + _taxonomy.rest_base], false) : false,
      terms: _taxonomy ? getEditedPostAttribute(_taxonomy.rest_base) : hierarchical_term_selector_EMPTY_ARRAY,
      loading: isResolving('getEntityRecords', ['taxonomy', slug, hierarchical_term_selector_DEFAULT_QUERY]),
      availableTerms: getEntityRecords('taxonomy', slug, hierarchical_term_selector_DEFAULT_QUERY) || hierarchical_term_selector_EMPTY_ARRAY,
      taxonomy: _taxonomy
    };
  }, [slug]);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    saveEntityRecord
  } = Object(external_wp_data_["useDispatch"])(external_wp_coreData_["store"]);
  const availableTermsTree = Object(external_wp_element_["useMemo"])(() => sortBySelected(buildTermsTree(availableTerms), terms), // Remove `terms` from the dependency list to avoid reordering every time
  // checking or unchecking a term.
  [availableTerms]);

  if (!hasAssignAction) {
    return null;
  }
  /**
   * Append new term.
   *
   * @param {Object} term Term object.
   * @return {Promise} A promise that resolves to save term object.
   */


  const addTerm = term => {
    return saveEntityRecord('taxonomy', slug, term);
  };
  /**
   * Update terms for post.
   *
   * @param {number[]} termIds Term ids.
   */


  const onUpdateTerms = termIds => {
    editPost({
      [taxonomy.rest_base]: termIds
    });
  };
  /**
   * Handler for checking term.
   *
   * @param {number} termId
   */


  const onChange = termId => {
    const hasTerm = terms.includes(termId);
    const newTerms = hasTerm ? Object(external_lodash_["without"])(terms, termId) : [...terms, termId];
    onUpdateTerms(newTerms);
  };

  const onChangeFormName = value => {
    setFormName(value);
  };
  /**
   * Handler for changing form parent.
   *
   * @param {number|''} parentId Parent post id.
   */


;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-saved-state/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Component showing whether the post is saved or not and providing save
 * buttons.
 *
 * @param {Object}   props                Component props.
 * @param {?boolean} props.forceIsDirty   Whether to force the post to be marked
 *                                        as dirty.
 * @param {?boolean} props.forceIsSaving  Whether to force the post to be marked
 *                                        as being saved.
 * @param {?boolean} props.showIconLabels Whether interface buttons show labels instead of icons
 * @return {import('@wordpress/element').WPComponent} The component.
 */

function PostSavedState({
  forceIsDirty,
  forceIsSaving,
  showIconLabels = false
}) {
  const [forceSavedMessage, setForceSavedMessage] = (0,external_wp_element_namespaceObject.useState)(false);
  const isLargeViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('small');
  const {
    isAutosaving,
    isDirty,
    isNew,
    isPending,
    isPublished,
    isSaveable,
    isSaving,
    isScheduled,
    hasPublishAction
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getCurrentPost$_link;

    const {
      isEditedPostNew,
      isCurrentPostPublished,
      isCurrentPostScheduled,
      isEditedPostDirty,
      isSavingPost,
      isEditedPostSaveable,
      getCurrentPost,
      isAutosavingPost,
      getEditedPostAttribute
    } = select(store_store);
    return {
      isAutosaving: isAutosavingPost(),
      isDirty: forceIsDirty || isEditedPostDirty(),
      isNew: isEditedPostNew(),
      isPending: 'pending' === getEditedPostAttribute('status'),
      isPublished: isCurrentPostPublished(),
      isSaving: forceIsSaving || isSavingPost(),
      isSaveable: isEditedPostSaveable(),
      isScheduled: isCurrentPostScheduled(),
      hasPublishAction: (_getCurrentPost$_link = getCurrentPost()?._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false
    };
  }, [forceIsDirty, forceIsSaving]);
  const {
    savePost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const wasSaving = (0,external_wp_compose_namespaceObject.usePrevious)(isSaving);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    let timeoutId;

    if (wasSaving && !isSaving) {
      setForceSavedMessage(true);
      timeoutId = setTimeout(() => {
        setForceSavedMessage(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isSaving]); // Once the post has been submitted for review this button
  // is not needed for the contributor role.

  if (!hasPublishAction && isPending) {
    return null;
  }

  if (isPublished || isScheduled) {
    return null;
  }
  /* translators: button label text should, if possible, be under 16 characters. */


  const label = isPending ? (0,external_wp_i18n_namespaceObject.__)('Save as pending') : (0,external_wp_i18n_namespaceObject.__)('Save draft');
  /* translators: button label text should, if possible, be under 16 characters. */

  const shortLabel = (0,external_wp_i18n_namespaceObject.__)('Save');

  const isSaved = forceSavedMessage || !isNew && !isDirty;
  const isSavedState = isSaving || isSaved;
  const isDisabled = isSaving || isSaved || !isSaveable;
  let text;

  if (isSaving) {
    text = isAutosaving ? (0,external_wp_i18n_namespaceObject.__)('Autosaving') : (0,external_wp_i18n_namespaceObject.__)('Saving');
  } else if (isSaved) {
    text = (0,external_wp_i18n_namespaceObject.__)('Saved');
  } else if (isLargeViewport) {
    text = label;
  } else if (showIconLabels) {
    text = shortLabel;
  } // Use common Button instance for all saved states so that focus is not
  // lost.


  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    className: isSaveable || isSaving ? classnames_default()({
      'editor-post-save-draft': !isSavedState,
      'editor-post-saved-state': isSavedState,
      'is-saving': isSaving,
      'is-autosaving': isAutosaving,
      'is-saved': isSaved,
      [(0,external_wp_components_namespaceObject.__unstableGetAnimateClassName)({
        type: 'loading'
      })]: isSaving
    }) : undefined,
    onClick: isDisabled ? undefined : () => savePost()
    /*
     * We want the tooltip to show the keyboard shortcut only when the
     * button does something, i.e. when it's not disabled.
     */
    ,
    shortcut: isDisabled ? undefined : external_wp_keycodes_namespaceObject.displayShortcut.primary('s')
    /*
     * Displaying the keyboard shortcut conditionally makes the tooltip
     * itself show conditionally. This would trigger a full-rerendering
     * of the button that we want to avoid. By setting `showTooltip`,
     & the tooltip is always rendered even when there's no keyboard shortcut.
     */
    ,
    showTooltip: true,
    variant: "tertiary",
    icon: isLargeViewport ? undefined : cloud_upload // Make sure the aria-label has always a value, as the default `text` is undefined on small screens.
    ,
    label: text || label,
    "aria-disabled": isDisabled
  }, isSavedState && (0,external_wp_element_namespaceObject.createElement)(icon, {
    icon: isSaved ? library_check : library_cloud
  }), text);
}
/* harmony default export */ var post_taxonomies = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    postType: select(store).getCurrentPostType(),
    taxonomies: select(external_wp_coreData_["store"]).getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomies));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function PostScheduleCheck({
  hasPublishAction,
  children
}) {
  if (!hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_schedule_check = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  var _getCurrentPost$_link;

  const {
    getCurrentPost,
    getCurrentPostType
  } = select(store_store);
  return {
    hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
    postType: getCurrentPostType()
  };
})])(PostTaxonomiesCheck));

// EXTERNAL MODULE: ./node_modules/react-autosize-textarea/lib/index.js
var lib = __webpack_require__("O6Fj");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-text-editor/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */

function PostSlugCheck({
  children
}) {
  return (0,external_wp_element_namespaceObject.createElement)(post_type_support_check, {
    supportKeys: "slug"
  }, children);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



class PostSlug extends external_wp_element_namespaceObject.Component {
  constructor({
    postSlug,
    postTitle,
    postID
  }) {
    super(...arguments);
    this.state = {
      editedSlug: (0,external_wp_url_namespaceObject.safeDecodeURIComponent)(postSlug) || (0,external_wp_url_namespaceObject.cleanForSlug)(postTitle) || postID
    };
  }, []);
  Object(external_wp_element_["useEffect"])(() => {
    if (!ref.current) {
      return;
    }

    const {
      ownerDocument
    } = ref.current;
    const {
      activeElement,
      body
    } = ownerDocument; // Only autofocus the title when the post is entirely empty. This should
    // only happen for a new post, which means we focus the title on new
    // post so the author can start typing right away, without needing to
    // click anything.

    if (isCleanNewPost && (!activeElement || body === activeElement)) {
      ref.current.focus();
    }
  }, [isCleanNewPost]);

  function onEnterPress() {
    insertDefaultBlock(undefined, undefined, 0);
  }

  render() {
    const {
      editedSlug
    } = this.state;
    return (0,external_wp_element_namespaceObject.createElement)(PostSlugCheck, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextControl, {
      __nextHasNoMarginBottom: true,
      label: (0,external_wp_i18n_namespaceObject.__)('Slug'),
      autoComplete: "off",
      spellCheck: "false",
      value: editedSlug,
      onChange: slug => this.setState({
        editedSlug: slug
      }),
      onBlur: this.setSlug,
      className: "editor-post-slug"
    }));
  }

}
/* harmony default export */ var post_slug = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  const {
    getCurrentPost,
    getEditedPostAttribute
  } = select(store_store);
  const {
    id
  } = getCurrentPost();
  return {
    postSlug: getEditedPostAttribute('slug'),
    postTitle: getEditedPostAttribute('title'),
    postID: id
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    editPost
  } = dispatch(store_store);
  return {
    onUpdateSlug(slug) {
      editPost({
        slug
      });
    }

  };
})])(PostSlug));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function PostStickyCheck({
  hasStickyAction,
  postType,
  children
}) {
  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_sticky_check = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  var _post$_links$wpActio;

  const post = select(store_store).getCurrentPost();
  return {
    hasStickyAction: (_post$_links$wpActio = post._links?.['wp:action-sticky']) !== null && _post$_links$wpActio !== void 0 ? _post$_links$wpActio : false,
    postType: select(store_store).getCurrentPostType()
  };
})])(PostStickyCheck));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostSticky({
  onUpdateSticky,
  postSticky = false
}) {
  return (0,external_wp_element_namespaceObject.createElement)(post_sticky_check, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.CheckboxControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Stick to the top of the blog'),
    checked: postSticky,
    onChange: () => onUpdateSticky(!postSticky)
  }));
}
/* harmony default export */ var post_sticky = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  return {
    postSticky: select(store_store).getEditedPostAttribute('sticky')
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  return {
    onUpdateSticky(postSticky) {
      dispatch(store_store).editPost({
        sticky: postSticky
      });
    }

  };
})])(PostSticky));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function PostSwitchToDraftButton({
  isSaving,
  isPublished,
  isScheduled,
  onClick
}) {
  const [showConfirmDialog, setShowConfirmDialog] = (0,external_wp_element_namespaceObject.useState)(false);

  if (!isPublished && !isScheduled) {
    return null;
  }

  let alertMessage;

  if (isPublished) {
    alertMessage = (0,external_wp_i18n_namespaceObject.__)('Are you sure you want to unpublish this post?');
  } else if (isScheduled) {
    alertMessage = (0,external_wp_i18n_namespaceObject.__)('Are you sure you want to unschedule this post?');
  }

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    onClick();
  };

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    className: "editor-post-switch-to-draft",
    onClick: () => {
      setShowConfirmDialog(true);
    },
    disabled: isSaving,
    variant: "secondary",
    style: {
      flexGrow: '1',
      justifyContent: 'center'
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Switch to draft')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalConfirmDialog, {
    isOpen: showConfirmDialog,
    onConfirm: handleConfirm,
    onCancel: () => setShowConfirmDialog(false)
  }, alertMessage));
}

/* harmony default export */ var post_switch_to_draft_button = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  const {
    isSavingPost,
    isCurrentPostPublished,
    isCurrentPostScheduled
  } = select(store_store);
  return {
    isSaving: isSavingPost(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled()
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    editPost,
    savePost
  } = dispatch(store_store);
  return {
    onClick: () => {
      editPost({
        status: 'draft'
      });
      savePost();
    }
  };
})])(PostSwitchToDraftButton));

;// CONCATENATED MODULE: external ["wp","privateApis"]
var external_wp_privateApis_namespaceObject = window["wp"]["privateApis"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/lock-unlock.js
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,external_wp_privateApis_namespaceObject.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/editor');

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sync-status/index.js

  const {
    ref: richTextRef
  } = Object(external_wp_richText_["__unstableUseRichText"])({
    value: title,
    onChange,
    placeholder: decodedPlaceholder,
    selectionStart: selection.start,
    selectionEnd: selection.end,

/**
 * WordPress dependencies
 */

        if (start === newStart && end === newEnd) {
          return sel;
        }




/**
 * Internal dependencies
 */



function PostSyncStatus() {
  const {
    syncStatus,
    postType,
    meta
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(store_store);
    return {
      syncStatus: getEditedPostAttribute('wp_pattern_sync_status'),
      meta: getEditedPostAttribute('meta'),
      postType: getEditedPostAttribute('type')
    };
  });

  if (postType !== 'wp_block') {
    return null;
  } // When the post is first created, the top level wp_pattern_sync_status is not set so get meta value instead.


  const currentSyncStatus = meta?.wp_pattern_sync_status === 'unsynced' ? 'unsynced' : syncStatus;
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.PanelRow, {
    className: "edit-post-sync-status"
  }, (0,external_wp_element_namespaceObject.createElement)("span", null, (0,external_wp_i18n_namespaceObject.__)('Sync status')), (0,external_wp_element_namespaceObject.createElement)("div", null, currentSyncStatus === 'unsynced' ? (0,external_wp_i18n_namespaceObject.__)('Not synced') : (0,external_wp_i18n_namespaceObject.__)('Fully synced')));
}
function PostSyncStatusModal() {
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [isModalOpen, setIsModalOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const [syncType, setSyncType] = (0,external_wp_element_namespaceObject.useState)(undefined);
  const {
    postType,
    isNewPost
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      isCleanNewPost
    } = select(store_store);
    return {
      postType: getEditedPostAttribute('type'),
      isNewPost: isCleanNewPost()
    };
  }, []);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (isNewPost && postType === 'wp_block') {
      setIsModalOpen(true);
    } // We only want the modal to open when the page is first loaded.
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  const setSyncStatus = () => {
    editPost({
      meta: {
        wp_pattern_sync_status: syncType
      }
    });
  };

  if (postType !== 'wp_block' || !isNewPost) {
    return null;
  }

  const {
    ReusableBlocksRenameHint
  } = unlock(external_wp_blockEditor_namespaceObject.privateApis);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, isModalOpen && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
    title: (0,external_wp_i18n_namespaceObject.__)('Set pattern sync status'),
    onRequestClose: () => {
      setIsModalOpen(false);
    },
    overlayClassName: "reusable-blocks-menu-items__convert-modal"
  }, (0,external_wp_element_namespaceObject.createElement)("form", {
    onSubmit: event => {
      event.preventDefault();
      setIsModalOpen(false);
      setSyncStatus();
    }
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalVStack, {
    spacing: "5"
  }, (0,external_wp_element_namespaceObject.createElement)(ReusableBlocksRenameHint, null), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ToggleControl, {
    label: (0,external_wp_i18n_namespaceObject.__)('Synced'),
    help: (0,external_wp_i18n_namespaceObject.__)('Editing the pattern will update it anywhere it is used.'),
    checked: !syncType,
    onChange: () => {
      setSyncType(!syncType ? 'unsynced' : undefined);
    }
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalHStack, {
    justify: "right"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "primary",
    type: "submit"
  }, (0,external_wp_i18n_namespaceObject.__)('Create')))))));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/index.js


// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/check.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const post_taxonomies_identity = x => x;

function PostTaxonomies({
  postType,
  taxonomies,
  taxonomyWrapper = post_taxonomies_identity
}) {
  const availableTaxonomies = (taxonomies !== null && taxonomies !== void 0 ? taxonomies : []).filter(taxonomy => taxonomy.types.includes(postType));
  const visibleTaxonomies = availableTaxonomies.filter( // In some circumstances .visibility can end up as undefined so optional chaining operator required.
  // https://github.com/WordPress/gutenberg/issues/40326
  taxonomy => taxonomy.visibility?.show_ui);
  return visibleTaxonomies.map(taxonomy => {
    const TaxonomyComponent = taxonomy.hierarchical ? hierarchical_term_selector : flat_term_selector;
    return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, {
      key: `taxonomy-${taxonomy.slug}`
    }, taxonomyWrapper((0,external_wp_element_namespaceObject.createElement)(TaxonomyComponent, {
      slug: taxonomy.slug
    }), taxonomy));
  });
}

/* harmony default export */ var post_trash_check = (Object(external_wp_data_["withSelect"])(select => {
  const {
    isEditedPostNew,
    getCurrentPostId,
    getCurrentPostType
  } = select(store);
  const {
    getPostType,
    canUser
  } = select(external_wp_coreData_["store"]);
  const postId = getCurrentPostId();
  const postType = getPostType(getCurrentPostType());
  const resource = (postType === null || postType === void 0 ? void 0 : postType.rest_base) || ''; // eslint-disable-line camelcase

  return {
    isNew: isEditedPostNew(),
    postId,
    canUserDelete: postId && resource ? canUser('delete', resource, postId) : false
  };
})(PostTrashCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostTaxonomiesCheck({
  postType,
  taxonomies,
  children
}) {
  const hasTaxonomies = taxonomies?.some(taxonomy => taxonomy.types.includes(postType));

  if (!hasTaxonomies) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_visibility_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPost,
    getCurrentPostType
  } = select(store);
  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/info.js
var library_info = __webpack_require__("FnAh");

// EXTERNAL MODULE: external ["wp","wordcount"]
var external_wp_wordcount_ = __webpack_require__("7fqt");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/word-count/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostTextEditor() {
  const postContent = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostContent(), []);
  const {
    editPost,
    resetEditorBlocks
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [value, setValue] = (0,external_wp_element_namespaceObject.useState)(postContent);
  const [isDirty, setIsDirty] = (0,external_wp_element_namespaceObject.useState)(false);
  const instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(PostTextEditor);
  const valueRef = (0,external_wp_element_namespaceObject.useRef)();

  if (!isDirty && value !== postContent) {
    setValue(postContent);
  }
  /**
   * Handles a textarea change event to notify the onChange prop callback and
   * reflect the new value in the component's own state. This marks the start
   * of the user's edits, if not already changed, preventing future props
   * changes to value from replacing the rendered value. This is expected to
   * be followed by a reset to dirty state via `stopEditing`.
   *
   * @see stopEditing
   *
   * @param {Event} event Change event.
   */


  const onChange = event => {
    const newValue = event.target.value;
    editPost({
      content: newValue
    });
    setValue(newValue);
    setIsDirty(true);
    valueRef.current = newValue;
  };
  /**
   * Function called when the user has completed their edits, responsible for
   * ensuring that changes, if made, are surfaced to the onPersist prop
   * callback and resetting dirty state.
   */


  const stopEditing = () => {
    if (isDirty) {
      const blocks = (0,external_wp_blocks_namespaceObject.parse)(value);
      resetEditorBlocks(blocks);
      setIsDirty(false);
    }
  }; // Ensure changes aren't lost when component unmounts.


  (0,external_wp_element_namespaceObject.useEffect)(() => {
    return () => {
      if (valueRef.current) {
        const blocks = (0,external_wp_blocks_namespaceObject.parse)(valueRef.current);
        resetEditorBlocks(blocks);
      }
    };
  }, []);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.VisuallyHidden, {
    as: "label",
    htmlFor: `post-content-${instanceId}`
  }, (0,external_wp_i18n_namespaceObject.__)('Type text or HTML')), (0,external_wp_element_namespaceObject.createElement)(lib/* default */.Z, {
    autoComplete: "off",
    dir: "auto",
    value: value,
    onChange: onChange,
    onBlur: stopEditing,
    className: "editor-post-text-editor",
    id: `post-content-${instanceId}`,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Start writing with text or HTML')
  }));
}

;// CONCATENATED MODULE: external ["wp","dom"]
var external_wp_dom_namespaceObject = window["wp"]["dom"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/index.js

  const wordCountType = Object(external_wp_i18n_["_x"])('words', 'Word count type. Do not translate!');

  return Object(external_wp_element_["createElement"])("span", {
    className: "word-count"
  }, Object(external_wp_wordcount_["count"])(content, wordCountType));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/character-count/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function CharacterCount() {
  const content = Object(external_wp_data_["useSelect"])(select => select(store).getEditedPostAttribute('content'), []);
  return Object(external_wp_wordcount_["count"])(content, 'characters_including_spaces');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/panel.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





function TableOfContentsPanel(_ref) {
  let {
    hasOutlineItemsDisabled,
    onRequestClose
  } = _ref;
  const {
    isCleanNewPost,
    title,
    placeholder,
    hasFixedToolbar
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      isCleanNewPost: _isCleanNewPost
    } = select(store_store);
    const {
      getSettings
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      titlePlaceholder,
      hasFixedToolbar: _hasFixedToolbar
    } = getSettings();
    return {
      isCleanNewPost: _isCleanNewPost(),
      title: getEditedPostAttribute('title'),
      placeholder: titlePlaceholder,
      hasFixedToolbar: _hasFixedToolbar
    };
  }, []);
  (0,external_wp_element_namespaceObject.useImperativeHandle)(forwardedRef, () => ({
    focus: () => {
      ref?.current?.focus();
    }
  }));
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!ref.current) {
      return;
    }

    const {
      defaultView
    } = ref.current.ownerDocument;
    const {
      name,
      parent
    } = defaultView;
    const ownerDocument = name === 'editor-canvas' ? parent.document : defaultView.document;
    const {
      activeElement,
      body
    } = ownerDocument; // Only autofocus the title when the post is entirely empty. This should
    // only happen for a new post, which means we focus the title on new
    // post so the author can start typing right away, without needing to
    // click anything.

    if (isCleanNewPost && (!activeElement || body === activeElement)) {
      ref.current.focus();
    }
  }, [isCleanNewPost]);

  function onEnterPress() {
    insertDefaultBlock(undefined, undefined, 0);
  }

  function onInsertBlockAfter(blocks) {
    insertBlocks(blocks, 0);
  }

  function onUpdate(newTitle) {
    editPost({
      title: newTitle
    });
  }

  const [selection, setSelection] = (0,external_wp_element_namespaceObject.useState)({});

  function onSelect() {
    setIsSelected(true);
    clearSelectedBlock();
  }

  function onUnselect() {
    setIsSelected(false);
    setSelection({});
  }

  function onChange(value) {
    onUpdate(value.replace(REGEXP_NEWLINES, ' '));
  }

  function onKeyDown(event) {
    if (event.keyCode === external_wp_keycodes_namespaceObject.ENTER) {
      event.preventDefault();
      onEnterPress();
    }
  }

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
      className: "table-of-contents__wrapper",
      role: "note",
      "aria-label": Object(external_wp_i18n_["__"])('Document Statistics'),
      tabIndex: "0"
    }, Object(external_wp_element_["createElement"])("ul", {
      role: "list",
      className: "table-of-contents__counts"
    }, Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Characters'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, Object(external_wp_element_["createElement"])(CharacterCount, null))), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Words'), Object(external_wp_element_["createElement"])(WordCount, null)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Headings'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, headingCount)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Paragraphs'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, paragraphCount)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Blocks'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, numberOfBlocks)))), headingCount > 0 && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("hr", null), Object(external_wp_element_["createElement"])("h2", {
      className: "table-of-contents__title"
    }, Object(external_wp_i18n_["__"])('Document Outline')), Object(external_wp_element_["createElement"])(document_outline, {
      onSelect: onRequestClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ var panel = (TableOfContentsPanel);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/index.js



      if (!title && (firstBlock.name === 'core/heading' || firstBlock.name === 'core/paragraph')) {
        onUpdate((0,external_wp_dom_namespaceObject.__unstableStripHTML)(firstBlock.attributes.content));
        onInsertBlockAfter(content.slice(1));
      } else {
        onInsertBlockAfter(content);
      }
    } else {
      const value = { ...(0,external_wp_richText_namespaceObject.create)({
          html: title
        }),
        ...selection
      };
      const newValue = (0,external_wp_richText_namespaceObject.insert)(value, (0,external_wp_richText_namespaceObject.create)({
        html: (0,external_wp_dom_namespaceObject.__unstableStripHTML)(content)
      }));
      onUpdate((0,external_wp_richText_namespaceObject.toHTMLString)({
        value: newValue
      }));
      setSelection({
        start: newValue.start,
        end: newValue.end
      });
    }
  } // The wp-block className is important for editor styles.
  // This same block is used in both the visual and the code editor.


  const className = classnames_default()('wp-block wp-block-post-title block-editor-block-list__block editor-post-title editor-post-title__input rich-text', {
    'is-selected': isSelected,
    'has-fixed-toolbar': hasFixedToolbar
  });




/**
 * Internal dependencies
 */



function TableOfContents(_ref, ref) {
  let {
    hasOutlineItemsDisabled,
    repositionDropdown,
    ...props
  } = _ref;
  const hasBlocks = Object(external_wp_data_["useSelect"])(select => !!select(external_wp_blockEditor_["store"]).getBlockCount(), []);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Dropdown"], {
    position: repositionDropdown ? 'middle right right' : 'bottom',
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({}, props, {
        ref: ref,
        onClick: hasBlocks ? onToggle : undefined,
        icon: library_info["a" /* default */],
        "aria-expanded": isOpen,
        "aria-haspopup": "true"
        /* translators: button label text should, if possible, be under 16 characters. */
        ,
        label: Object(external_wp_i18n_["__"])('Details'),
        tooltipPosition: "bottom",
        "aria-disabled": !hasBlocks
      }));
    },
    renderContent: _ref3 => {
      let {
        onClose
      } = _ref3;
      return Object(external_wp_element_["createElement"])(panel, {
        onRequestClose: onClose,
        hasOutlineItemsDisabled: hasOutlineItemsDisabled
      });
    }
  });
}

/* harmony default export */ var table_of_contents = (Object(external_wp_element_["forwardRef"])(TableOfContents));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/unsaved-changes-warning/index.js
/**
 * WordPress dependencies
 */




/**
 * Warns the user if there are unsaved changes before leaving the editor.
 * Compatible with Post Editor and Site Editor.
 *
 * @return {WPComponent} The component.
 */

function UnsavedChangesWarning() {
  const isDirty = Object(external_wp_data_["useSelect"])(select => {
    return () => {
      const {
        __experimentalGetDirtyEntityRecords
      } = select(external_wp_coreData_["store"]);

      const dirtyEntityRecords = __experimentalGetDirtyEntityRecords();

      return dirtyEntityRecords.length > 0;
    };
  }, []);
  /**
   * Warns the user if there are unsaved changes before leaving the editor.
   *
   * @param {Event} event `beforeunload` event.
   *
   * @return {?string} Warning prompt message, if unsaved changes exist.
   */

  const warnIfUnsavedChanges = event => {
    // We need to call the selector directly in the listener to avoid race
    // conditions with `BrowserURL` where `componentDidUpdate` gets the
    // new value of `isEditedPostDirty` before this component does,
    // causing this component to incorrectly think a trashed post is still dirty.
    if (isDirty()) {
      event.returnValue = Object(external_wp_i18n_["__"])('You have unsaved changes. If you proceed, they will be lost.');
      return event.returnValue;
    }
  };

  Object(external_wp_element_["useEffect"])(() => {
    window.addEventListener('beforeunload', warnIfUnsavedChanges);
    return () => {
      window.removeEventListener('beforeunload', warnIfUnsavedChanges);
    };
  }, []);
  return null;
}

// EXTERNAL MODULE: external ["wp","reusableBlocks"]
var external_wp_reusableBlocks_ = __webpack_require__("diJD");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/with-registry-provider.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const withRegistryProvider = Object(external_wp_compose_["createHigherOrderComponent"])(WrappedComponent => Object(external_wp_data_["withRegistry"])(props => {
  const {
    useSubRegistry = true,
    registry,
    ...additionalProps
  } = props;

function PostTrashCheck({
  isNew,
  postId,
  canUserDelete,
  children
}) {
  if (isNew || !postId || !canUserDelete) {
    return null;
  }

  const [subRegistry, setSubRegistry] = Object(external_wp_element_["useState"])(null);
  Object(external_wp_element_["useEffect"])(() => {
    const newRegistry = Object(external_wp_data_["createRegistry"])({
      'core/block-editor': external_wp_blockEditor_["storeConfig"]
    }, registry);
    newRegistry.registerStore('core/editor', storeConfig);
    setSubRegistry(newRegistry);
  }, [registry]);

/* harmony default export */ var post_trash_check = ((0,external_wp_data_namespaceObject.withSelect)(select => {
  const {
    isEditedPostNew,
    getCurrentPostId,
    getCurrentPostType
  } = select(store_store);
  const {
    getPostType,
    canUser
  } = select(external_wp_coreData_namespaceObject.store);
  const postId = getCurrentPostId();
  const postType = getPostType(getCurrentPostType());
  const resource = postType?.rest_base || ''; // eslint-disable-line camelcase

  return Object(external_wp_element_["createElement"])(external_wp_data_["RegistryProvider"], {
    value: subRegistry
  }, Object(external_wp_element_["createElement"])(WrappedComponent, additionalProps));
}), 'withRegistryProvider');
/* harmony default export */ var with_registry_provider = (withRegistryProvider);

// EXTERNAL MODULE: external ["wp","mediaUtils"]
var external_wp_mediaUtils_ = __webpack_require__("6aBm");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostURL({
  onClose
}) {
  const {
    isEditable,
    postSlug,
    viewPostLabel,
    postLink,
    permalinkPrefix,
    permalinkSuffix
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links$wpActio;

    const post = select(store_store).getCurrentPost();
    const postTypeSlug = select(store_store).getCurrentPostType();
    const postType = select(external_wp_coreData_namespaceObject.store).getPostType(postTypeSlug);
    const permalinkParts = select(store_store).getPermalinkParts();
    const hasPublishAction = (_post$_links$wpActio = post?._links?.['wp:action-publish']) !== null && _post$_links$wpActio !== void 0 ? _post$_links$wpActio : false;
    return {
      isEditable: select(store_store).isPermalinkEditable() && hasPublishAction,
      postSlug: (0,external_wp_url_namespaceObject.safeDecodeURIComponent)(select(store_store).getEditedPostSlug()),
      viewPostLabel: postType?.labels.view_item,
      postLink: post.link,
      permalinkPrefix: permalinkParts?.prefix,
      permalinkSuffix: permalinkParts?.suffix
    };
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [forceEmptyField, setForceEmptyField] = (0,external_wp_element_namespaceObject.useState)(false);
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "editor-post-url"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
    title: (0,external_wp_i18n_namespaceObject.__)('URL'),
    onClose: onClose
  }), isEditable && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Permalink'),
    value: forceEmptyField ? '' : postSlug,
    autoComplete: "off",
    spellCheck: "false",
    help: (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_i18n_namespaceObject.__)('The last part of the URL.'), ' ', (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
      href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/page-post-settings-sidebar/#permalink')
    }, (0,external_wp_i18n_namespaceObject.__)('Learn more.'))),
    onChange: newValue => {
      editPost({
        slug: newValue
      }); // When we delete the field the permalink gets
      // reverted to the original value.
      // The forceEmptyField logic allows the user to have
      // the field temporarily empty while typing.

      if (!newValue) {
        if (!forceEmptyField) {
          setForceEmptyField(true);
        }

        return;
      }

      if (forceEmptyField) {
        setForceEmptyField(false);
      }
    },
    maxUploadFileSize,
    onError: _ref2 => {
      let {
        message
      } = _ref2;
      return onError(message);
    },
    wpAllowedMimeTypes
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/use-block-editor-settings.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function PostURLCheck({
  children
}) {
  const isVisible = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const postTypeSlug = select(store_store).getCurrentPostType();
    const postType = select(external_wp_coreData_namespaceObject.store).getPostType(postTypeSlug);

    if (!postType?.viewable) {
      return false;
    }

function useBlockEditorSettings(settings, hasTemplate) {
  const {
    reusableBlocks,
    hasUploadPermissions,
    canUseUnfilteredHTML,
    userCanCreatePages
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      canUserUseUnfilteredHTML
    } = select(store);
    const isWeb = external_wp_element_["Platform"].OS === 'web';
    const {
      canUser,
      getUnstableBase,
      hasFinishedResolution
    } = select(external_wp_coreData_["store"]);
    const siteData = getUnstableBase();
    const hasFinishedResolvingSiteData = hasFinishedResolution('getUnstableBase');
    return {
      canUseUnfilteredHTML: canUserUseUnfilteredHTML(),
      reusableBlocks: isWeb ? select(external_wp_coreData_["store"]).getEntityRecords('postType', 'wp_block', {
        per_page: -1
      }) : [],
      // Reusable blocks are fetched in the native version of this hook.
      hasUploadPermissions: Object(external_lodash_["defaultTo"])(canUser('create', 'media'), true),
      hasResolvedLocalSiteData: hasFinishedResolvingSiteData,
      baseUrl: (siteData === null || siteData === void 0 ? void 0 : siteData.url) || '',
      userCanCreatePages: canUser('create', 'pages')
    };
  }, []);
  const {
    undo
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    saveEntityRecord
  } = Object(external_wp_data_["useDispatch"])(external_wp_coreData_["store"]);
  /**
   * Creates a Post entity.
   * This is utilised by the Link UI to allow for on-the-fly creation of Posts/Pages.
   *
   * @param {Object} options parameters for the post being created. These mirror those used on 3rd param of saveEntityRecord.
   * @return {Object} the post type object that was created.
   */

  const createPageEntity = options => {
    if (!userCanCreatePages) {
      return Promise.reject({
        message: Object(external_wp_i18n_["__"])('You do not have permission to create Pages.')
      });
    }

    return saveEntityRecord('postType', 'page', options);
  };

  return Object(external_wp_element_["useMemo"])(() => ({ ...Object(external_lodash_["pick"])(settings, ['__experimentalBlockDirectory', '__experimentalBlockPatternCategories', '__experimentalBlockPatterns', '__experimentalFeatures', '__experimentalPreferredStyleVariations', '__experimentalSetIsInserterOpened', '__experimentalGenerateAnchors', '__unstableGalleryWithImageBlocks', 'alignWide', 'allowedBlockTypes', 'bodyPlaceholder', 'codeEditingEnabled', 'colors', 'disableCustomColors', 'disableCustomFontSizes', 'disableCustomGradients', 'enableCustomLineHeight', 'enableCustomSpacing', 'enableCustomUnits', 'focusMode', 'fontSizes', 'gradients', 'hasFixedToolbar', 'hasReducedUI', 'imageDefaultSize', 'imageDimensions', 'imageEditing', 'imageSizes', 'isRTL', 'keepCaretInsideBlock', 'maxWidth', 'onUpdateDefaultBlockStyles', 'styles', 'template', 'templateLock', 'titlePlaceholder', 'supportsLayout', 'widgetTypesToHideFromLegacyWidgetBlock']),
    mediaUpload: hasUploadPermissions ? mediaUpload : undefined,
    __experimentalReusableBlocks: reusableBlocks,
    __experimentalFetchLinkSuggestions: (search, searchOptions) => Object(external_wp_coreData_["__experimentalFetchLinkSuggestions"])(search, searchOptions, settings),
    __experimentalFetchRichUrlData: external_wp_coreData_["__experimentalFetchUrlData"],
    __experimentalCanUserUseUnfilteredHTML: canUseUnfilteredHTML,
    __experimentalUndo: undo,
    outlineMode: hasTemplate,
    __experimentalCreatePageEntity: createPageEntity,
    __experimentalUserCanCreatePages: userCanCreatePages
  }), [settings, hasUploadPermissions, reusableBlocks, canUseUnfilteredHTML, undo, hasTemplate, userCanCreatePages]);
}

/* harmony default export */ var use_block_editor_settings = (useBlockEditorSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/index.js


/**
 * WordPress dependencies
 */



;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function PostVisibilityCheck({
  hasPublishAction,
  render
}) {
  const canEdit = hasPublishAction;
  return render({
    canEdit
  });
}
/* harmony default export */ var post_visibility_check = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  var _getCurrentPost$_link;

  const {
    getCurrentPost,
    getCurrentPostType
  } = select(store_store);
  return {
    hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck));

  Object(external_wp_element_["useLayoutEffect"])(() => {
    // Assume that we don't need to initialize in the case of an error recovery.
    if (recovery) {
      return;
    }

    updatePostLock(settings.postLock);
    setupEditor(post, initialEdits, settings.template);

    if (settings.autosave) {
      createWarningNotice(Object(external_wp_i18n_["__"])('There is an autosave of this post that is more recent than the version below.'), {
        id: 'autosave-exists',
        actions: [{
          label: Object(external_wp_i18n_["__"])('View the autosave'),
          url: settings.autosave.editLink
        }]
      });
    }

    return () => {
      __experimentalTearDownEditor();
    };
  }, []); // Synchronize the editor settings as they change

  Object(external_wp_element_["useEffect"])(() => {
    updateEditorSettings(settings);
  }, [settings]);

  if (!isReady) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_coreData_["EntityProvider"], {
    kind: "root",
    type: "site"
  }, Object(external_wp_element_["createElement"])(external_wp_coreData_["EntityProvider"], {
    kind: "postType",
    type: post.type,
    id: post.id
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockContextProvider"], {
    value: defaultBlockContext
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorProvider"], {
    value: blocks,
    onChange: onChange,
    onInput: onInput,
    selection: selection,
    settings: editorSettings,
    useSubRegistry: false
  }, children, Object(external_wp_element_["createElement"])(external_wp_reusableBlocks_["ReusableBlocksMenuItems"], null)))));
}

/* harmony default export */ var provider = (with_registry_provider(EditorProvider));

// EXTERNAL MODULE: external ["wp","serverSideRender"]
var external_wp_serverSideRender_ = __webpack_require__("JREk");
var external_wp_serverSideRender_default = /*#__PURE__*/__webpack_require__.n(external_wp_serverSideRender_);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/deprecated.js


// Block Creation Components

/**
 * WordPress dependencies
 */





function deprecateComponent(name, Wrapped) {
  let staticsToHoist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const Component = Object(external_wp_element_["forwardRef"])((props, ref) => {
    external_wp_deprecated_default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name
    });
    return Object(external_wp_element_["createElement"])(Wrapped, Object(esm_extends["a" /* default */])({
      ref: ref
    }, props));
  });
  staticsToHoist.forEach(staticName => {
    Component[staticName] = deprecateComponent(name + '.' + staticName, Wrapped[staticName]);
  });
  return Component;
}

function deprecateFunction(name, func) {
  return function () {
    external_wp_deprecated_default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name
    });
    return func(...arguments);
  };
}

const RichText = deprecateComponent('RichText', external_wp_blockEditor_["RichText"], ['Content']);
RichText.isEmpty = deprecateFunction('RichText.isEmpty', external_wp_blockEditor_["RichText"].isEmpty);

const Autocomplete = deprecateComponent('Autocomplete', external_wp_blockEditor_["Autocomplete"]);
const AlignmentToolbar = deprecateComponent('AlignmentToolbar', external_wp_blockEditor_["AlignmentToolbar"]);
const BlockAlignmentToolbar = deprecateComponent('BlockAlignmentToolbar', external_wp_blockEditor_["BlockAlignmentToolbar"]);
const BlockControls = deprecateComponent('BlockControls', external_wp_blockEditor_["BlockControls"], ['Slot']);
const deprecated_BlockEdit = deprecateComponent('BlockEdit', external_wp_blockEditor_["BlockEdit"]);
const BlockEditorKeyboardShortcuts = deprecateComponent('BlockEditorKeyboardShortcuts', external_wp_blockEditor_["BlockEditorKeyboardShortcuts"]);
const BlockFormatControls = deprecateComponent('BlockFormatControls', external_wp_blockEditor_["BlockFormatControls"], ['Slot']);
const BlockIcon = deprecateComponent('BlockIcon', external_wp_blockEditor_["BlockIcon"]);
const BlockInspector = deprecateComponent('BlockInspector', external_wp_blockEditor_["BlockInspector"]);
const BlockList = deprecateComponent('BlockList', external_wp_blockEditor_["BlockList"]);
const BlockMover = deprecateComponent('BlockMover', external_wp_blockEditor_["BlockMover"]);
const BlockNavigationDropdown = deprecateComponent('BlockNavigationDropdown', external_wp_blockEditor_["BlockNavigationDropdown"]);
const BlockSelectionClearer = deprecateComponent('BlockSelectionClearer', external_wp_blockEditor_["BlockSelectionClearer"]);
const BlockSettingsMenu = deprecateComponent('BlockSettingsMenu', external_wp_blockEditor_["BlockSettingsMenu"]);
const BlockTitle = deprecateComponent('BlockTitle', external_wp_blockEditor_["BlockTitle"]);
const BlockToolbar = deprecateComponent('BlockToolbar', external_wp_blockEditor_["BlockToolbar"]);
const ColorPalette = deprecateComponent('ColorPalette', external_wp_blockEditor_["ColorPalette"]);
const ContrastChecker = deprecateComponent('ContrastChecker', external_wp_blockEditor_["ContrastChecker"]);
const CopyHandler = deprecateComponent('CopyHandler', external_wp_blockEditor_["CopyHandler"]);
const DefaultBlockAppender = deprecateComponent('DefaultBlockAppender', external_wp_blockEditor_["DefaultBlockAppender"]);
const FontSizePicker = deprecateComponent('FontSizePicker', external_wp_blockEditor_["FontSizePicker"]);
const Inserter = deprecateComponent('Inserter', external_wp_blockEditor_["Inserter"]);
const InnerBlocks = deprecateComponent('InnerBlocks', external_wp_blockEditor_["InnerBlocks"], ['ButtonBlockAppender', 'DefaultBlockAppender', 'Content']);
const InspectorAdvancedControls = deprecateComponent('InspectorAdvancedControls', external_wp_blockEditor_["InspectorAdvancedControls"], ['Slot']);
const InspectorControls = deprecateComponent('InspectorControls', external_wp_blockEditor_["InspectorControls"], ['Slot']);
const PanelColorSettings = deprecateComponent('PanelColorSettings', external_wp_blockEditor_["PanelColorSettings"]);
const PlainText = deprecateComponent('PlainText', external_wp_blockEditor_["PlainText"]);
const RichTextShortcut = deprecateComponent('RichTextShortcut', external_wp_blockEditor_["RichTextShortcut"]);
const RichTextToolbarButton = deprecateComponent('RichTextToolbarButton', external_wp_blockEditor_["RichTextToolbarButton"]);
const __unstableRichTextInputEvent = deprecateComponent('__unstableRichTextInputEvent', external_wp_blockEditor_["__unstableRichTextInputEvent"]);
const MediaPlaceholder = deprecateComponent('MediaPlaceholder', external_wp_blockEditor_["MediaPlaceholder"]);
const MediaUpload = deprecateComponent('MediaUpload', external_wp_blockEditor_["MediaUpload"]);
const MediaUploadCheck = deprecateComponent('MediaUploadCheck', external_wp_blockEditor_["MediaUploadCheck"]);
const MultiSelectScrollIntoView = deprecateComponent('MultiSelectScrollIntoView', external_wp_blockEditor_["MultiSelectScrollIntoView"]);
const NavigableToolbar = deprecateComponent('NavigableToolbar', external_wp_blockEditor_["NavigableToolbar"]);
const ObserveTyping = deprecateComponent('ObserveTyping', external_wp_blockEditor_["ObserveTyping"]);
const PreserveScrollInReorder = deprecateComponent('PreserveScrollInReorder', external_wp_blockEditor_["PreserveScrollInReorder"]);
const SkipToSelectedBlock = deprecateComponent('SkipToSelectedBlock', external_wp_blockEditor_["SkipToSelectedBlock"]);
const URLInput = deprecateComponent('URLInput', external_wp_blockEditor_["URLInput"]);
const URLInputButton = deprecateComponent('URLInputButton', external_wp_blockEditor_["URLInputButton"]);
const URLPopover = deprecateComponent('URLPopover', external_wp_blockEditor_["URLPopover"]);
const Warning = deprecateComponent('Warning', external_wp_blockEditor_["Warning"]);
const WritingFlow = deprecateComponent('WritingFlow', external_wp_blockEditor_["WritingFlow"]);
const createCustomColorsHOC = deprecateFunction('createCustomColorsHOC', external_wp_blockEditor_["createCustomColorsHOC"]);
const getColorClassName = deprecateFunction('getColorClassName', external_wp_blockEditor_["getColorClassName"]);
const getColorObjectByAttributeValues = deprecateFunction('getColorObjectByAttributeValues', external_wp_blockEditor_["getColorObjectByAttributeValues"]);
const getColorObjectByColorValue = deprecateFunction('getColorObjectByColorValue', external_wp_blockEditor_["getColorObjectByColorValue"]);
const getFontSize = deprecateFunction('getFontSize', external_wp_blockEditor_["getFontSize"]);
const getFontSizeClass = deprecateFunction('getFontSizeClass', external_wp_blockEditor_["getFontSizeClass"]);
const withColorContext = deprecateFunction('withColorContext', external_wp_blockEditor_["withColorContext"]);
const withColors = deprecateFunction('withColors', external_wp_blockEditor_["withColors"]);
const withFontSizes = deprecateFunction('withFontSizes', external_wp_blockEditor_["withFontSizes"]);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/index.js
// Block Creation Components
 // Post Related Components














  const minutesToRead = Math.round((0,external_wp_wordcount_namespaceObject.count)(content, wordCountType) / AVERAGE_READING_RATE);
  const minutesToReadString = minutesToRead === 0 ? (0,external_wp_element_namespaceObject.createInterpolateElement)((0,external_wp_i18n_namespaceObject.__)('<span>< 1</span> minute'), {
    span: (0,external_wp_element_namespaceObject.createElement)("span", null)
  }) : (0,external_wp_element_namespaceObject.createInterpolateElement)((0,external_wp_i18n_namespaceObject.sprintf)(
  /* translators: %s is the number of minutes the post will take to read. */
  (0,external_wp_i18n_namespaceObject._n)('<span>%d</span> minute', '<span>%d</span> minutes', minutesToRead), minutesToRead), {
    span: (0,external_wp_element_namespaceObject.createElement)("span", null)
  });
  return (0,external_wp_element_namespaceObject.createElement)("span", {
    className: "time-to-read"
  }, minutesToReadString);
}

















function TableOfContentsPanel({
  hasOutlineItemsDisabled,
  onRequestClose
}) {
  const {
    headingCount,
    paragraphCount,
    numberOfBlocks
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getGlobalBlockCount
    } = select(external_wp_blockEditor_namespaceObject.store);
    return {
      headingCount: getGlobalBlockCount('core/heading'),
      paragraphCount: getGlobalBlockCount('core/paragraph'),
      numberOfBlocks: getGlobalBlockCount()
    };
  }, []);
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */






/**
 * WordPress dependencies
 */









function TableOfContents({
  hasOutlineItemsDisabled,
  repositionDropdown,
  ...props
}, ref) {
  const hasBlocks = (0,external_wp_data_namespaceObject.useSelect)(select => !!select(external_wp_blockEditor_namespaceObject.store).getBlockCount(), []);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Dropdown, {
    popoverProps: {
      placement: repositionDropdown ? 'right' : 'bottom'
    },
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, { ...props,
      ref: ref,
      onClick: hasBlocks ? onToggle : undefined,
      icon: library_info,
      "aria-expanded": isOpen,
      "aria-haspopup": "true"
      /* translators: button label text should, if possible, be under 16 characters. */
      ,
      label: (0,external_wp_i18n_namespaceObject.__)('Details'),
      tooltipPosition: "bottom",
      "aria-disabled": !hasBlocks
    }),
    renderContent: ({
      onClose
    }) => (0,external_wp_element_namespaceObject.createElement)(panel, {
      onRequestClose: onClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })
  });
}









      return dirtyEntityRecords.length > 0;
    };
  }, []);
  /**
   * Warns the user if there are unsaved changes before leaving the editor.
   *
   * @param {Event} event `beforeunload` event.
   *
   * @return {string | undefined} Warning prompt message, if unsaved changes exist.
   */



 // State Related Components




// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/index.js
/**
 * Internal dependencies
 */





// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/index.js
/**
 * Internal dependencies
 */



  if (!useSubRegistry) {
    return (0,external_wp_element_namespaceObject.createElement)(WrappedComponent, { ...additionalProps
    });
  }

/*
 * Backward compatibility
 */


  return (0,external_wp_element_namespaceObject.createElement)(external_wp_data_namespaceObject.RegistryProvider, {
    value: subRegistry
  }, (0,external_wp_element_namespaceObject.createElement)(WrappedComponent, { ...additionalProps
  }));
}), 'withRegistryProvider');
/* harmony default export */ var with_registry_provider = (withRegistryProvider);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/media-categories/index.js
/**
 * The `editor` settings here need to be in sync with the corresponding ones in `editor` package.
 * See `packages/editor/src/components/media-categories/index.js`.
 *
 * In the future we could consider creating an Openvese package that can be used in both `editor` and `site-editor`.
 * The rest of the settings would still need to be in sync though.
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/** @typedef {import('@wordpress/block-editor').InserterMediaRequest} InserterMediaRequest */

/** @typedef {import('@wordpress/block-editor').InserterMediaItem} InserterMediaItem */

/**
 * Interface for inserter media category labels.
 *
 * @typedef {Object} InserterMediaCategoryLabels
 * @property {string} name                    General name of the media category. It's used in the inserter media items list.
 * @property {string} [search_items='Search'] Label for searching items. Default is ‘Search Posts’ / ‘Search Pages’.
 */

/**
 * Interface for inserter media category.
 *
 * @typedef {Object} InserterMediaCategory
 * @property {string}                                                 name                 The name of the media category, that should be unique among all media categories.
 * @property {InserterMediaCategoryLabels}                            labels               Labels for the media category.
 * @property {('image'|'audio'|'video')}                              mediaType            The media type of the media category.
 * @property {(InserterMediaRequest) => Promise<InserterMediaItem[]>} fetch                The function to fetch media items for the category.
 * @property {(InserterMediaItem) => string}                          [getReportUrl]       If the media category supports reporting media items, this function should return
 *                                                                                         the report url for the media item. It accepts the `InserterMediaItem` as an argument.
 * @property {boolean}                                                [isExternalResource] If the media category is an external resource, this should be set to true.
 *                                                                                         This is used to avoid making a request to the external resource when the user
 *                                                                                         opens the inserter for the first time.
 */

const getExternalLink = (url, text) => `<a ${getExternalLinkAttributes(url)}>${text}</a>`;

const getExternalLinkAttributes = url => `href="${url}" target="_blank" rel="noreferrer noopener"`;

const getOpenverseLicense = (license, licenseVersion) => {
  let licenseName = license.trim(); // PDM has no abbreviation

  if (license !== 'pdm') {
    licenseName = license.toUpperCase().replace('SAMPLING', 'Sampling');
  } // If version is known, append version to the name.
  // The license has to have a version to be valid. Only
  // PDM (public domain mark) doesn't have a version.


  if (licenseVersion) {
    licenseName += ` ${licenseVersion}`;
  } // For licenses other than public-domain marks, prepend 'CC' to the name.


  if (!['pdm', 'cc0'].includes(license)) {
    licenseName = `CC ${licenseName}`;
  }

  return licenseName;
};

const getOpenverseCaption = item => {
  const {
    title,
    foreign_landing_url: foreignLandingUrl,
    creator,
    creator_url: creatorUrl,
    license,
    license_version: licenseVersion,
    license_url: licenseUrl
  } = item;
  const fullLicense = getOpenverseLicense(license, licenseVersion);

  const _creator = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(creator);

  let _caption;

  if (_creator) {
    _caption = title ? (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %1s: Title of a media work from Openverse; %2s: Name of the work's creator; %3s: Work's licence e.g: "CC0 1.0".
    (0,external_wp_i18n_namespaceObject._x)('"%1$s" by %2$s/ %3$s', 'caption'), getExternalLink(foreignLandingUrl, (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(title)), creatorUrl ? getExternalLink(creatorUrl, _creator) : _creator, licenseUrl ? getExternalLink(`${licenseUrl}?ref=openverse`, fullLicense) : fullLicense) : (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %1s: Link attributes for a given Openverse media work; %2s: Name of the work's creator; %3s: Works's licence e.g: "CC0 1.0".
    (0,external_wp_i18n_namespaceObject._x)('<a %1$s>Work</a> by %2$s/ %3$s', 'caption'), getExternalLinkAttributes(foreignLandingUrl), creatorUrl ? getExternalLink(creatorUrl, _creator) : _creator, licenseUrl ? getExternalLink(`${licenseUrl}?ref=openverse`, fullLicense) : fullLicense);
  } else {
    _caption = title ? (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %1s: Title of a media work from Openverse; %2s: Work's licence e.g: "CC0 1.0".
    (0,external_wp_i18n_namespaceObject._x)('"%1$s"/ %2$s', 'caption'), getExternalLink(foreignLandingUrl, (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(title)), licenseUrl ? getExternalLink(`${licenseUrl}?ref=openverse`, fullLicense) : fullLicense) : (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %1s: Link attributes for a given Openverse media work; %2s: Works's licence e.g: "CC0 1.0".
    (0,external_wp_i18n_namespaceObject._x)('<a %1$s>Work</a>/ %2$s', 'caption'), getExternalLinkAttributes(foreignLandingUrl), licenseUrl ? getExternalLink(`${licenseUrl}?ref=openverse`, fullLicense) : fullLicense);
  }

  return _caption.replace(/\s{2}/g, ' ');
};

const coreMediaFetch = async (query = {}) => {
  const mediaItems = await (0,external_wp_data_namespaceObject.resolveSelect)(external_wp_coreData_namespaceObject.store).getMediaItems({ ...query,
    orderBy: !!query?.search ? 'relevance' : 'date'
  });
  return mediaItems.map(mediaItem => ({ ...mediaItem,
    alt: mediaItem.alt_text,
    url: mediaItem.source_url,
    previewUrl: mediaItem.media_details?.sizes?.medium?.source_url,
    caption: mediaItem.caption?.raw
  }));
};
/** @type {InserterMediaCategory[]} */


const inserterMediaCategories = [{
  name: 'images',
  labels: {
    name: (0,external_wp_i18n_namespaceObject.__)('Images'),
    search_items: (0,external_wp_i18n_namespaceObject.__)('Search images')
  },
  mediaType: 'image',

  async fetch(query = {}) {
    return coreMediaFetch({ ...query,
      media_type: 'image'
    });
  }

}, {
  name: 'videos',
  labels: {
    name: (0,external_wp_i18n_namespaceObject.__)('Videos'),
    search_items: (0,external_wp_i18n_namespaceObject.__)('Search videos')
  },
  mediaType: 'video',

  async fetch(query = {}) {
    return coreMediaFetch({ ...query,
      media_type: 'video'
    });
  }

}, {
  name: 'audio',
  labels: {
    name: (0,external_wp_i18n_namespaceObject.__)('Audio'),
    search_items: (0,external_wp_i18n_namespaceObject.__)('Search audio')
  },
  mediaType: 'audio',

  async fetch(query = {}) {
    return coreMediaFetch({ ...query,
      media_type: 'audio'
    });
  }

}, {
  name: 'openverse',
  labels: {
    name: (0,external_wp_i18n_namespaceObject.__)('Openverse'),
    search_items: (0,external_wp_i18n_namespaceObject.__)('Search Openverse')
  },
  mediaType: 'image',

  async fetch(query = {}) {
    const defaultArgs = {
      mature: false,
      excluded_source: 'flickr,inaturalist,wikimedia',
      license: 'pdm,cc0'
    };
    const finalQuery = { ...query,
      ...defaultArgs
    };
    const mapFromInserterMediaRequest = {
      per_page: 'page_size',
      search: 'q'
    };
    const url = new URL('https://api.openverse.engineering/v1/images/');
    Object.entries(finalQuery).forEach(([key, value]) => {
      const queryKey = mapFromInserterMediaRequest[key] || key;
      url.searchParams.set(queryKey, value);
    });
    const response = await window.fetch(url, {
      headers: {
        'User-Agent': 'WordPress/inserter-media-fetch'
      }
    });
    const jsonResponse = await response.json();
    const results = jsonResponse.results;
    return results.map(result => ({ ...result,
      // This is a temp solution for better titles, until Openverse API
      // completes the cleaning up of some titles of their upstream data.
      title: result.title?.toLowerCase().startsWith('file:') ? result.title.slice(5) : result.title,
      sourceId: result.id,
      id: undefined,
      caption: getOpenverseCaption(result),
      previewUrl: result.thumbnail
    }));
  },

  getReportUrl: ({
    sourceId
  }) => `https://wordpress.org/openverse/image/${sourceId}/report/`,
  isExternalResource: true
}];
/* harmony default export */ var media_categories = (inserterMediaCategories);

;// CONCATENATED MODULE: external ["wp","mediaUtils"]
var external_wp_mediaUtils_namespaceObject = window["wp"]["mediaUtils"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js
/**
 * WordPress dependencies
 */

const check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),

/***/ "Rk8H":
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__("jTPX");

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

function mediaUpload({
  additionalData = {},
  allowedTypes,
  filesList,
  maxUploadFileSize,
  onError = media_upload_noop,
  onFileChange
}) {
  const {
    getCurrentPostId,
    getEditorSettings
  } = (0,external_wp_data_namespaceObject.select)(store_store);
  const wpAllowedMimeTypes = getEditorSettings().allowedMimeTypes;
  maxUploadFileSize = maxUploadFileSize || getEditorSettings().maxUploadFileSize;
  (0,external_wp_mediaUtils_namespaceObject.uploadMedia)({
    allowedTypes,
    filesList,
    onFileChange,
    additionalData: {
      post: getCurrentPostId(),
      ...additionalData
    },
    maxUploadFileSize,
    onError: ({
      message
    }) => onError(message),
    wpAllowedMimeTypes
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/use-block-editor-settings.js
/**
 * WordPress dependencies
 */

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/**
 * Internal dependencies
 */

/***/ }),

/***/ "WbBG":
/***/ (function(module, exports, __webpack_require__) {


const EMPTY_BLOCKS_LIST = [];
const BLOCK_EDITOR_SETTINGS = ['__experimentalBlockDirectory', '__experimentalDiscussionSettings', '__experimentalFeatures', '__experimentalGlobalStylesBaseStyles', '__experimentalPreferredStyleVariations', '__experimentalSetIsInserterOpened', '__unstableGalleryWithImageBlocks', 'alignWide', 'allowedBlockTypes', 'blockInspectorTabs', 'allowedMimeTypes', 'bodyPlaceholder', 'canLockBlocks', 'capabilities', 'clearBlockSelection', 'codeEditingEnabled', 'colors', 'disableCustomColors', 'disableCustomFontSizes', 'disableCustomSpacingSizes', 'disableCustomGradients', 'disableLayoutStyles', 'enableCustomLineHeight', 'enableCustomSpacing', 'enableCustomUnits', 'enableOpenverseMediaCategory', 'focusMode', 'distractionFree', 'fontSizes', 'gradients', 'generateAnchors', 'hasFixedToolbar', 'hasInlineToolbar', 'isDistractionFree', 'imageDefaultSize', 'imageDimensions', 'imageEditing', 'imageSizes', 'isRTL', 'keepCaretInsideBlock', 'locale', 'maxWidth', 'onUpdateDefaultBlockStyles', 'postContentAttributes', 'postsPerPage', 'readOnly', 'styles', 'template', 'templateLock', 'titlePlaceholder', 'supportsLayout', 'widgetTypesToHideFromLegacyWidgetBlock', '__unstableHasCustomAppender', '__unstableIsPreviewMode', '__unstableResolvedAssets', '__unstableIsBlockBasedTheme', 'behaviors'];
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



    const {
      canUserUseUnfilteredHTML,
      getCurrentPostType
    } = select(store_store);
    const isWeb = external_wp_element_namespaceObject.Platform.OS === 'web';
    const {
      canUser,
      getEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const siteSettings = canUser('read', 'settings') ? getEntityRecord('root', 'site') : undefined;
    return {
      canUseUnfilteredHTML: canUserUseUnfilteredHTML(),
      reusableBlocks: isWeb ? select(external_wp_coreData_namespaceObject.store).getEntityRecords('postType', 'wp_block', {
        per_page: -1
      }) : EMPTY_BLOCKS_LIST,
      // Reusable blocks are fetched in the native version of this hook.
      hasUploadPermissions: (_canUser = canUser('create', 'media')) !== null && _canUser !== void 0 ? _canUser : true,
      userCanCreatePages: canUser('create', 'pages'),
      pageOnFront: siteSettings?.page_on_front,
      postType: getCurrentPostType()
    };
  }, []);
  const settingsBlockPatterns = (_settings$__experimen = settings.__experimentalAdditionalBlockPatterns) !== null && _settings$__experimen !== void 0 ? _settings$__experimen : // WP 6.0
  settings.__experimentalBlockPatterns; // WP 5.9

module.exports = ReactPropTypesSecret;

  const {
    restBlockPatterns,
    restBlockPatternCategories
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    restBlockPatterns: select(external_wp_coreData_namespaceObject.store).getBlockPatterns(),
    restBlockPatternCategories: select(external_wp_coreData_namespaceObject.store).getBlockPatternCategories()
  }), []);
  const blockPatterns = (0,external_wp_element_namespaceObject.useMemo)(() => [...(settingsBlockPatterns || []), ...(restBlockPatterns || [])].filter((x, index, arr) => index === arr.findIndex(y => x.name === y.name)).filter(({
    postTypes
  }) => {
    return !postTypes || Array.isArray(postTypes) && postTypes.includes(postType);
  }), [settingsBlockPatterns, restBlockPatterns, postType]);
  const blockPatternCategories = (0,external_wp_element_namespaceObject.useMemo)(() => [...(settingsBlockPatternCategories || []), ...(restBlockPatternCategories || [])].filter((x, index, arr) => index === arr.findIndex(y => x.name === y.name)), [settingsBlockPatternCategories, restBlockPatternCategories]);
  const {
    undo
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    saveEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  /**
   * Creates a Post entity.
   * This is utilised by the Link UI to allow for on-the-fly creation of Posts/Pages.
   *
   * @param {Object} options parameters for the post being created. These mirror those used on 3rd param of saveEntityRecord.
   * @return {Object} the post type object that was created.
   */

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

  return (0,external_wp_element_namespaceObject.useMemo)(() => ({ ...Object.fromEntries(Object.entries(settings).filter(([key]) => BLOCK_EDITOR_SETTINGS.includes(key))),
    mediaUpload: hasUploadPermissions ? mediaUpload : undefined,
    __experimentalReusableBlocks: reusableBlocks,
    __experimentalBlockPatterns: blockPatterns,
    __experimentalBlockPatternCategories: blockPatternCategories,
    __experimentalFetchLinkSuggestions: (search, searchOptions) => (0,external_wp_coreData_namespaceObject.__experimentalFetchLinkSuggestions)(search, searchOptions, settings),
    inserterMediaCategories: media_categories,
    __experimentalFetchRichUrlData: external_wp_coreData_namespaceObject.__experimentalFetchUrlData,
    __experimentalCanUserUseUnfilteredHTML: canUseUnfilteredHTML,
    __experimentalUndo: undo,
    outlineMode: hasTemplate,
    __experimentalCreatePageEntity: createPageEntity,
    __experimentalUserCanCreatePages: userCanCreatePages,
    pageOnFront,
    __experimentalPreferPatternsOnRoot: hasTemplate
  }), [settings, hasUploadPermissions, reusableBlocks, blockPatterns, blockPatternCategories, canUseUnfilteredHTML, undo, hasTemplate, userCanCreatePages, pageOnFront]);
}

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "bWcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["a"] = (closeSmall);


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "diJD":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["reusableBlocks"]; }());

/***/ }),

/***/ "g56x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

const {
  ExperimentalBlockEditorProvider
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);
const ExperimentalEditorProvider = with_registry_provider(({
  __unstableTemplate,
  post,
  settings,
  recovery,
  initialEdits,
  children,
  BlockEditorProviderComponent = ExperimentalBlockEditorProvider
}) => {
  const defaultBlockContext = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (post.type === 'wp_template') {
      return {};
    }

    return {
      postId: post.id,
      postType: post.type
    };
  }, [post.id, post.type]);
  const {
    editorSettings,
    selection,
    isReady
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditorSettings,
      getEditorSelection,
      __unstableIsEditorReady
    } = select(store_store);
    return {
      editorSettings: getEditorSettings(),
      isReady: __unstableIsEditorReady(),
      selection: getEditorSelection()
    };
  }, []);
  const {
    id,
    type
  } = __unstableTemplate !== null && __unstableTemplate !== void 0 ? __unstableTemplate : post;
  const [blocks, onInput, onChange] = (0,external_wp_coreData_namespaceObject.useEntityBlockEditor)('postType', type, {
    id
  });
  const blockEditorSettings = use_block_editor_settings(editorSettings, !!__unstableTemplate);
  const {
    updatePostLock,
    setupEditor,
    updateEditorSettings,
    __experimentalTearDownEditor
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    createWarningNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store); // Initialize and tear down the editor.
  // Ideally this should be synced on each change and not just something you do once.

(function() { module.exports = window["wp"]["a11y"]; }());

/***/ }),

/***/ "hF7m":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keyboardShortcuts"]; }());

/***/ }),

/***/ "iClF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_coreData_namespaceObject.EntityProvider, {
    kind: "root",
    type: "site"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_coreData_namespaceObject.EntityProvider, {
    kind: "postType",
    type: post.type,
    id: post.id
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockContextProvider, {
    value: defaultBlockContext
  }, (0,external_wp_element_namespaceObject.createElement)(BlockEditorProviderComponent, {
    value: blocks,
    onChange: onChange,
    onInput: onInput,
    selection: selection,
    settings: blockEditorSettings,
    useSubRegistry: false
  }, children, (0,external_wp_element_namespaceObject.createElement)(external_wp_reusableBlocks_namespaceObject.ReusableBlocksMenuItems, null)))));
});
function EditorProvider(props) {
  return (0,external_wp_element_namespaceObject.createElement)(ExperimentalEditorProvider, { ...props,
    BlockEditorProviderComponent: external_wp_blockEditor_namespaceObject.BlockEditorProvider
  }, props.children);
}
/* harmony default export */ var provider = (EditorProvider);

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

// Block Creation Components.


/***/ }),

/***/ "jTPX":
/***/ (function(module, exports) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

function deprecateComponent(name, Wrapped, staticsToHoist = []) {
  const Component = (0,external_wp_element_namespaceObject.forwardRef)((props, ref) => {
    external_wp_deprecated_default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name,
      version: '6.2'
    });
    return (0,external_wp_element_namespaceObject.createElement)(Wrapped, {
      ref: ref,
      ...props
    });
  });
  staticsToHoist.forEach(staticName => {
    Component[staticName] = deprecateComponent(name + '.' + staticName, Wrapped[staticName]);
  });
  return Component;
}

function deprecateFunction(name, func) {
  return (...args) => {
    external_wp_deprecated_default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name,
      version: '6.2'
    });
    return func(...args);
  };
}

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "onLe":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

/***/ }),

/***/ "pPDe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["a"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),

/***/ "qRz9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["richText"]; }());

/***/ }),

/***/ "rmEH":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "rvQu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const sidebar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (sidebar);


/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());





 // State Related Components.

/***/ "w95h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);


/***/ }),

/***/ "wduq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const wordpress = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (wordpress);


/***/ }),

/***/ "wx14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/private-apis.js
/**
 * Internal dependencies
 */



const privateApis = {};
lock(privateApis, {
  ExperimentalEditorProvider: ExperimentalEditorProvider,
  EntitiesSavedStatesExtensible: EntitiesSavedStatesExtensible
});

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/index.js
/**
 * Internal dependencies
 */

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),


/*
 * Backward compatibility
 */

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ })

/******/ });
