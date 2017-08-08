!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(1),a=r(u),c=t(14),f=r(c),s=function(){function e(n){i(this,e),this.events=new a.default(n)}return o(e,[{key:"ready",value:function(e){f.default.ready(e)}},{key:"on",value:function(e,n){var t=this;this.ready(function(r){t.events.on(e,n),r.registerHandler(e,function(n,r){t.events.emit(e,n,r)})})}},{key:"one",value:function(e,n){this.events.off(e),this.on(e,n)}},{key:"once",value:function(e,n){var t=this;this.ready(function(r){t.events.once(e,n),r.registerHandler(e,function(n,r){t.events.emit(e,n,r)})})}},{key:"off",value:function(e,n){this.events.off(e,n)}},{key:"callNative",value:function(e,n,t){this.ready(function(r){r.callHandler(e,n,t)})}}]),e}();n.default=s,window.YCWebViewBridge=s},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),u=r(o),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t(12),f=t(13),s=r(f),l="_global_",d={},p=function(){function e(n){i(this,e),(0,s.default)(n,["string","undefined"]),this.spaceName=n||l,this.cache=this._getCache()}return a(e,[{key:"_getCache",value:function(){var e=d[this.spaceName];return e||(e=d[this.spaceName]={}),e}},{key:"on",value:function(e,n){"array"!==(0,f.getType)(this.cache[e])&&(this.cache[e]=[]),this.cache[e].push(n)}},{key:"once",value:function(e,n){if("string"===(0,f.getType)(e)&&"function"===(0,f.getType)(n)){var t=this,r=(0,c.after)(n,function(){return t.off(e,r)});this.on(e,r)}}},{key:"one",value:function(e,n){"string"===(0,f.getType)(e)&&"function"===(0,f.getType)(n)&&(this.off(e),this.on(e,n))}},{key:"off",value:function(e,n){"string"===(0,f.getType)(e)&&("function"===(0,f.getType)(n)?(0,u.default)(this.cache[e],function(e){return e===n}):this.cache[e]=null)}},{key:"emit",value:function(e){for(var n=this,t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];"string"===(0,f.getType)(e)&&"array"===(0,f.getType)(this.cache[e])&&this.cache[e].forEach(function(e){e.apply(n,r)})}}],[{key:"getCache",value:function(e){return d[e]}}]),e}();n.default=p},function(e,n,t){function r(e,n){var t=[];if(!e||!e.length)return t;var r=-1,u=[],a=e.length;for(n=i(n,3);++r<a;){var c=e[r];n(c,r,e)&&(t.push(c),u.push(r))}return o(e,u),t}var i=t(3),o=t(4);e.exports=r},function(e,n){function t(e){return e}e.exports=t},function(e,n,t){function r(e,n){for(var t=e?n.length:0,r=t-1;t--;){var u=n[t];if(t==r||u!==c){var c=u;o(u)?a.call(e,u,1):i(e,u)}}return e}var i=t(5),o=t(11),u=Array.prototype,a=u.splice;e.exports=r},function(e,n,t){function r(e,n){return n=i(n,e),null==(e=u(e,n))||delete e[a(o(n))]}var i=t(6),o=t(8),u=t(9),a=t(10);e.exports=r},function(e,n,t){function r(){if(!arguments.length)return[];var e=arguments[0];return i(e)?e:[e]}var i=t(7);e.exports=r},function(e,n){var t=Array.isArray;e.exports=t},function(e,n){function t(e){var n=null==e?0:e.length;return n?e[n-1]:void 0}e.exports=t},function(e,n){function t(e){return e}e.exports=t},function(e,n){function t(e){return e}e.exports=t},function(e,n){function t(e,n){return!!(n=null==n?r:n)&&("number"==typeof e||i.test(e))&&e>-1&&e%1==0&&e<n}var r=9007199254740991,i=/^(?:0|[1-9]\d*)$/;e.exports=t},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=n.after=function(e,n){return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];var o=e.apply(void 0,r);return n.apply(void 0,r),o}};n.before=function(e,n){return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return n.apply(void 0,r),e.apply(void 0,r)}},n.currying=function(e){var n=[];return function t(){for(var i=this,o=arguments.length,u=Array(o),a=0;a<o;a++)u[a]=arguments[a];return 0===u.length?r(function(){return e.apply(i,n)},function(){return n.splice(0,n.length)})():([].push.apply(n,u),t)}},n.compose=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return 0===n.length?function(e){return e}:1===n.length?n[0]:n.reduce(function(e,n){return function(){return e(n.apply(void 0,arguments))}})}},function(e,n,t){"use strict";function r(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function i(e,n){var t=r(n);if("string"===t){if(r(e)===n.toLowerCase())return;throw new Error("target type should be a "+t)}if("array"===t){if(n.some(function(n){return r(e)===n}))return;throw new Error("target type should be included in ["+n+"]")}throw new Error("validation parameter types should be string or array")}Object.defineProperty(n,"__esModule",{value:!0}),n.getType=r,n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ready=void 0;var r=t(15),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n.ready=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var n=document.createElement("iframe");n.style.display="none",i.default.isAndroid?n.src="androidHttps://__bridge_loaded__":n.src="https://__bridge_loaded__",document.documentElement.appendChild(n),setTimeout(function(){return document.documentElement.removeChild(n)},0)};n.default={ready:o}},function(e,n,t){"use strict";function r(){var e=navigator.userAgent.toLowerCase(),n=-1!==e.indexOf("android")?1:0;return{isAndroid:n,isiOS:!!e.match(/\(i[^;]+;( u;)? cpu.+mac os x/),isiPhone:e.indexOf("iphone")>-1||e.indexOf("mac")>-1,isiPad:e.indexOf("ipad")>-1,isWeChat:-1!==e.indexOf("micromessenger")?1:0,isQQ:"qq/"===e.match(/qq\//i),androidVersion:!!n&&e.substr(e.indexOf("android")+8,1)}}Object.defineProperty(n,"__esModule",{value:!0}),n.BROWSER=r,n.default=r()}]);