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

import Browser from "./utils/browser";

export let ready = callback => {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement("iframe");
  WVJBIframe.style.display = "none";
  if (Browser.isAndroid) {
    WVJBIframe.src = "androidHttps://__bridge_loaded__";
  } else {
    WVJBIframe.src = "https://__bridge_loaded__";
  }
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(() => document.documentElement.removeChild(WVJBIframe), 0);
};

export default {
  ready
};
