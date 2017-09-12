!function (e, n) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = n();
  else if ("function" == typeof define && define.amd)
    define([], n);
  else {
    var t = n();
    for (var r in t)
      ("object" == typeof exports
        ? exports
        : e)[r] = t[r]
    }
}(this, function () {
  return function (e) {
    function n(r) {
      if (t[r])
        return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n),
      o.l = !0,
      o.exports
    }
    var t = {};
    return n.m = e,
    n.c = t,
    n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    },
    n.n = function (e) {
      var t = e && e.__esModule
        ? function () {
          return e.default
        }
        : function () {
          return e
        };
      return n.d(t, "a", t),
      t
    },
    n.o = function (e, n) {
      return Object
        .prototype
        .hasOwnProperty
        .call(e, n)
    },
    n.p = "",
    n(n.s = 0)
  }([
    function (e, n, t) {
      "use strict";
      function r(e) {
        return e && e.__esModule
          ? e
          : {
            default: e
          }
      }
      function o(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var i = function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t),
            r && e(n, r),
            n
          }
        }(),
        u = t(1),
        a = r(u),
        c = t(14),
        f = r(c),
        s = function () {
          function e(n) {
            o(this, e),
            this.events = new a.default(n)
          }
          return i(e, [
            {
              key: "ready",
              value: function (e) {
                f
                  .default
                  .ready(e)
              }
            }, {
              key: "on",
              value: function (e, n) {
                var t = this;
                this.ready(function (r) {
                  t
                    .events
                    .on(e, n),
                  r.registerHandler(e, function (n, r) {
                    t
                      .events
                      .emit(e, n, r)
                  })
                })
              }
            }, {
              key: "one",
              value: function (e, n) {
                this
                  .events
                  .off(e),
                this.on(e, n)
              }
            }, {
              key: "once",
              value: function (e, n) {
                var t = this;
                this.ready(function (r) {
                  t
                    .events
                    .once(e, n),
                  r.registerHandler(e, function (n, r) {
                    t
                      .events
                      .emit(e, n, r)
                  })
                })
              }
            }, {
              key: "off",
              value: function (e, n) {
                this
                  .events
                  .off(e, n)
              }
            }, {
              key: "callNative",
              value: function (e, n, t) {
                var r = n;
                n || (r = {
                  ok: !0,
                  data: {
                    message: "nothing"
                  }
                }),
                this.ready(function (n) {
                  n.callHandler(e, r, t)
                })
              }
            }
          ]),
          e
        }();
      n.default = s
    },
    function (e, n, t) {
      "use strict";
      function r(e) {
        return e && e.__esModule
          ? e
          : {
            default: e
          }
      }
      function o(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var i = t(2),
        u = r(i),
        a = function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
            }
          }
          return function (n, t, r) {
            return t && e(n.prototype, t),
            r && e(n, r),
            n
          }
        }(),
        c = t(12),
        f = t(13),
        s = r(f),
        l = "_global_",
        d = {},
        p = function () {
          function e(n) {
            o(this, e),
            (0, s.default)(n, ["string", "undefined"]),
            this.spaceName = n || l,
            this.cache = this._getCache()
          }
          return a(e, [
            {
              key: "_getCache",
              value: function () {
                var e = d[this.spaceName];
                return e || (e = d[this.spaceName] = {}),
                e
              }
            }, {
              key: "on",
              value: function (e, n) {
                "array" !== (0, f.getType)(this.cache[e]) && (this.cache[e] = []),
                this
                  .cache[e]
                  .push(n)
              }
            }, {
              key: "once",
              value: function (e, n) {
                if ("string" === (0, f.getType)(e) && "function" === (0, f.getType)(n)) {
                  var t = this,
                    r = (0, c.after)(n, function () {
                      return t.off(e, r)
                    });
                  this.on(e, r)
                }
              }
            }, {
              key: "one",
              value: function (e, n) {
                "string" === (0, f.getType)(e) && "function" === (0, f.getType)(n) && (this.off(e), this.on(e, n))
              }
            }, {
              key: "off",
              value: function (e, n) {
                "string" === (0, f.getType)(e) && ("function" === (0, f.getType)(n)
                  ? (0, u.default)(this.cache[e], function (e) {
                    return e === n
                  })
                  : this.cache[e] = null)
              }
            }, {
              key: "emit",
              value: function (e) {
                for (var n = this, t = arguments.length, r = Array(t > 1
                  ? t - 1
                  : 0), o = 1; o < t; o++)
                  r[o - 1] = arguments[o];

                "string" === (0, f.getType)(e) && "array" === (0, f.getType)(this.cache[e]) && this
                  .cache[e]
                  .forEach(function (e) {
                    e.apply(n, r)
                  })
              }
            }
          ], [
            {
              key: "getCache",
              value: function (e) {
                return d[e]
              }
            }
          ]),
          e
        }();
      n.default = p
    },
    function (e, n, t) {
      function r(e, n) {
        var t = [];
        if (!e || !e.length)
          return t;
        var r = -1,
          u = [],
          a = e.length;
        for (n = o(n, 3); ++r < a;) {
          var c = e[r];
          n(c, r, e) && (t.push(c), u.push(r))
        }
        return i(e, u),
        t
      }
      var o = t(3),
        i = t(4);
      e.exports = r
    },
    function (e, n) {
      function t(e) {
        return e
      }
      e.exports = t
    },
    function (e, n, t) {
      function r(e, n) {
        for (var t = e
          ? n.length
          : 0, r = t - 1; t--;) {
          var u = n[t];
          if (t == r || u !== c) {
            var c = u;
            i(u)
              ? a.call(e, u, 1)
              : o(e, u)
          }
        }
        return e
      }
      var o = t(5),
        i = t(11),
        u = Array.prototype,
        a = u.splice;
      e.exports = r
    },
    function (e, n, t) {
      function r(e, n) {
        return n = o(n, e),
        null == (e = u(e, n)) || delete e[a(i(n))]
      }
      var o = t(6),
        i = t(8),
        u = t(9),
        a = t(10);
      e.exports = r
    },
    function (e, n, t) {
      function r() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return o(e)
          ? e
          : [e]
      }
      var o = t(7);
      e.exports = r
    },
    function (e, n) {
      var t = Array.isArray;
      e.exports = t
    },
    function (e, n) {
      function t(e) {
        var n = null == e
          ? 0
          : e.length;
        return n
          ? e[n - 1]
          : void 0
      }
      e.exports = t
    },
    function (e, n) {
      function t(e) {
        return e
      }
      e.exports = t
    },
    function (e, n) {
      function t(e) {
        return e
      }
      e.exports = t
    },
    function (e, n) {
      function t(e, n) {
        return !!(n = null == n
          ? r
          : n) && ("number" == typeof e || o.test(e)) && e > -1 && e % 1 == 0 && e < n
      }
      var r = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
      e.exports = t
    },
    function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var r = n.after = function (e, n) {
        return function () {
          for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          var i = e.apply(void 0, r);
          return n.apply(void 0, r),
          i
        }
      };
      n.before = function (e, n) {
        return function () {
          for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          return n.apply(void 0, r),
          e.apply(void 0, r)
        }
      },
      n.currying = function (e) {
        var n = [];
        return function t() {
          for (var o = this, i = arguments.length, u = Array(i), a = 0; a < i; a++)
            u[a] = arguments[a];
          return 0 === u.length
            ? r(function () {
              return e.apply(o, n)
            }, function () {
              return n.splice(0, n.length)
            })()
            : ([].push.apply(n, u), t)
        }
      },
      n.compose = function () {
        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return 0 === n.length
          ? function (e) {
            return e
          }
          : 1 === n.length
            ? n[0]
            : n.reduce(function (e, n) {
              return function () {
                return e(n.apply(void 0, arguments))
              }
            })
      }
    },
    function (e, n, t) {
      "use strict";
      function r(e) {
        return Object
          .prototype
          .toString
          .call(e)
          .slice(8, -1)
          .toLowerCase()
      }
      function o(e, n) {
        var t = r(n);
        if ("string" === t) {
          if (r(e) === n.toLowerCase())
            return;
          throw new Error("target type should be a " + t)
        }
        if ("array" === t) {
          if (n.some(function (n) {
            return r(e) === n
          }))
            return;
          throw new Error("target type should be included in [" + n + "]")
        }
        throw new Error("validation parameter types should be string or array")
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      }),
      n.getType = r,
      n.default = o
    },
    function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }),
      n.ready = void 0;
      var r = t(15),
        o = function (e) {
          return e && e.__esModule
            ? e
            : {
              default: e
            }
        }(r),
        i = n.ready = function (e) {
          if (window.WebViewJavascriptBridge)
            return e(WebViewJavascriptBridge);
          if (window.WVJBCallbacks)
            return window.WVJBCallbacks.push(e);
          window.WVJBCallbacks = [e];
          var n = document.createElement("iframe");
          n.style.display = "none",
          o.default.isAndroid
            ? n.src = "androidHttps://__bridge_loaded__"
            : n.src = "https://__bridge_loaded__",
          document
            .documentElement
            .appendChild(n),
          setTimeout(function () {
            return document
              .documentElement
              .removeChild(n)
          }, 0)
        };
      n.default = {
        ready: i
      }
    },
    function (e, n, t) {
      "use strict";
      function r() {
        var e = navigator
            .userAgent
            .toLowerCase(),
          n = -1 !== e.indexOf("android")
            ? 1
            : 0;
        return {
          isAndroid: n,
          isiOS: !!e.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
          isiPhone: e.indexOf("iphone") > -1 || e.indexOf("mac") > -1,
          isiPad: e.indexOf("ipad") > -1,
          isWeChat: -1 !== e.indexOf("micromessenger")
            ? 1
            : 0,
          isQQ: "qq/" === e.match(/qq\//i),
          androidVersion: !!n && e.substr(e.indexOf("android") + 8, 1)
        }
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      }),
      n.BROWSER = r,
      n.default = r()
    }
  ])
});