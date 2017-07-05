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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _YCEvent = __webpack_require__(1);

var _YCEvent2 = _interopRequireDefault(_YCEvent);

var _bridge = __webpack_require__(14);

var _bridge2 = _interopRequireDefault(_bridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var YCWebViewBridge = function () {
  function YCWebViewBridge(namespance) {
    _classCallCheck(this, YCWebViewBridge);

    this.events = new _YCEvent2.default(namespance);
  }

  _createClass(YCWebViewBridge, [{
    key: 'on',
    value: function on(eventName, callback) {
      var self = this;
      _bridge2.default.ready(function (bridge) {
        self.events.on(eventName, callback);
        // registerHandler 会直接覆盖掉
        bridge.registerHandler(eventName, function (data) {
          self.events.emit(eventName, data);
        });
      });
    }
  }, {
    key: 'one',
    value: function one(eventName, callback) {
      this.events.off(eventName);
      this.on(eventName, callback);
    }
  }, {
    key: 'once',
    value: function once(eventName, callback) {
      var self = this;
      _bridge2.default.ready(function (bridge) {
        self.events.once(eventName, callback);
        bridge.registerHandler(eventName, function (data) {
          self.events.emit(eventName, data);
        });
      });
    }
  }, {
    key: 'off',
    value: function off(eventName, callback) {
      this.events.off(eventName, callback);
    }
  }, {
    key: 'callNative',
    value: function callNative(eventName, data, callback) {
      _bridge2.default.ready(function (bridge) {
        bridge.callHandler(eventName, data, callback);
      });
    }
  }]);

  return YCWebViewBridge;
}();

exports.default = YCWebViewBridge;


window.YCWebViewBridge = YCWebViewBridge;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _remove2 = __webpack_require__(2);

var _remove3 = _interopRequireDefault(_remove2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * YCEvent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * auth: hezhiqiang
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * date: 2017-07-03
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * desc: 支持命名空间的 PUB/SUB Class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _fp = __webpack_require__(12);

var _validation = __webpack_require__(13);

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_SPANCE_NAME = '_global_';
var _namespanceCache = {};

var YCEvent = function () {
  /**
   * 创建一个 YCEvent 对象.
   * @param {string} spaceName 命名空间名字，默认为 _global_
   * @memberof YCEvent
   */
  function YCEvent(spaceName) {
    _classCallCheck(this, YCEvent);

    (0, _validation2.default)(spaceName, ['string', 'undefined']);
    this.spaceName = spaceName || DEFAULT_SPANCE_NAME;
    this.cache = this._getCache();
  }

  _createClass(YCEvent, [{
    key: '_getCache',


    /**
     * 获得该命名空间下的 cache
     *
     * @returns cacheObject
     * @memberof YCEvent
     */
    value: function _getCache() {
      var cache = _namespanceCache[this.spaceName];
      if (!cache) {
        cache = _namespanceCache[this.spaceName] = {};
      }

      return cache;
    }

    /**
     * 订阅一个事件
     *
     * @param {string} eventName 事件名称
     * @param {function} callback 事件回调
     * @memberof YCEvent
     */

  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if ((0, _validation.getType)(this.cache[eventName]) !== 'array') {
        this.cache[eventName] = [];
      }
      this.cache[eventName].push(callback);
    }

    /**
     * 订阅一个一次性事件
     *
     * @param {any} eventName
     * @param {any} callback
     * @memberof YCEvent
     */

  }, {
    key: 'once',
    value: function once(eventName, callback) {
      if ((0, _validation.getType)(eventName) !== 'string') return;
      if ((0, _validation.getType)(callback) !== 'function') return;
      var self = this;
      var newCallback = (0, _fp.after)(callback, function () {
        return self.off(eventName, newCallback);
      });
      this.on(eventName, newCallback);
    }

    /**
     * 删掉同类订阅，然后订阅该回调
     *
     * @param {string} eventName 事件名称
     * @param {function} callback 事件回调
     * @memberof YCEvent
     */

  }, {
    key: 'one',
    value: function one(eventName, callback) {
      if ((0, _validation.getType)(eventName) !== 'string') return;
      if ((0, _validation.getType)(callback) !== 'function') return;
      this.off(eventName);
      this.on(eventName, callback);
    }

    /**
     * 取消订阅一个或一类事件
     *
     * @param {string} eventName 事件名称
     * @param {function} callback [可选] 需要取消订阅的回调，如果不提供此参数，则取消此 eventName 下的全部回调
     * @memberof YCEvent
     */

  }, {
    key: 'off',
    value: function off(eventName, callback) {
      if ((0, _validation.getType)(eventName) !== 'string') return;
      if ((0, _validation.getType)(callback) === 'function') {
        (0, _remove3.default)(this.cache[eventName], function (item) {
          return item === callback;
        });
      } else {
        this.cache[eventName] = null;
      }
    }

    /**
     * 发布一类事件
     *
     * @param {string} eventName 事件名称
     * @param {function} data 事件携带的数据
     * @memberof YCEvent
     */

  }, {
    key: 'emit',
    value: function emit(eventName) {
      var _this = this;

      for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      if ((0, _validation.getType)(eventName) !== 'string') return;
      if ((0, _validation.getType)(this.cache[eventName]) !== 'array') return;

      this.cache[eventName].forEach(function (item) {
        item.apply(_this, data);
      });
    }
  }], [{
    key: 'getCache',
    value: function getCache(spanceName) {
      return _namespanceCache[spanceName];
    }
  }]);

  return YCEvent;
}();

exports.default = YCEvent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(3),
    basePullAt = __webpack_require__(4);

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = baseIteratee(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

module.exports = remove;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(5),
    isIndex = __webpack_require__(11);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

module.exports = basePullAt;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(6),
    last = __webpack_require__(8),
    parent = __webpack_require__(9),
    toKey = __webpack_require__(10);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(7);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * fp.js
 * author: hezhiqiang
 * date: 2017-07-03
 * desc: 一些函数式工具
 */

var after = exports.after = function after(originFn, afterFn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var ret = originFn.apply(undefined, args);
    afterFn.apply(undefined, args);
    return ret;
  };
};

var before = exports.before = function before(originFn, beforeFn) {
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    beforeFn.apply(undefined, args);
    return originFn.apply(undefined, args);
  };
};

var currying = exports.currying = function currying(fn) {
  var _args = [];
  return function foo() {
    var _this = this;

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (args.length === 0) {
      return after(function () {
        return fn.apply(_this, _args);
      }, function () {
        return _args.splice(0, _args.length);
      })();
    } else {
      [].push.apply(_args, args);
      return foo;
    }
  };
};

var compose = exports.compose = function compose() {
  for (var _len4 = arguments.length, funcs = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    funcs[_key4] = arguments[_key4];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getType = getType;
exports.default = validation;
/**
 * 数据验证类
 * author: hezhiqiang
 * date: 2017-07-03
 * desc: 验证数据类型是否正确
 */

/**
 * 获得参数的数据类型
 *
 * @export
 * @param {any} target
 * @returns {string} 目标数据的数据类型
 */
function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}

/**
 * 检验类型
 *
 * @export
 * @param {any} target 目标数据
 * @param {string | array} type 期望的类型 string: 期望的数据类型， array: 期望数据类型之一
 */
function validation(target, types) {
  var expectTypes = getType(types);
  if (expectTypes === 'string') {
    if (getType(target) === types.toLowerCase()) return;
    throw new Error('target type should be a ' + expectTypes);
  } else if (expectTypes === 'array') {
    if (types.some(function (type) {
      return getType(target) === type;
    })) return;
    throw new Error('target type should be included in [' + types + ']');
  }

  throw new Error('validation parameter types should be string or array');
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * native 注入代码包装
 * window.WebViewJavascriptBridge = {
     registerHandler, // 订阅一个 native 事件
     callHandler, // 给 native 发布一个 带 handlerName 的事件
     disableJavscriptAlertBoxSafetyTimeout, // 禁用 setTimeout 安全检查，增加桥接速度
     _fetchQueue, // native 自用，用来获取 js 推送
     _handleMessageFromObjC // native 自用，用来回调 js callback
   }
 */

var ready = exports.ready = function ready(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    return document.documentElement.removeChild(WVJBIframe);
  }, 0);
};

exports.default = {
  ready: ready
};

/***/ })
/******/ ]);
//# sourceMappingURL=YCWebViewBridge.js.map