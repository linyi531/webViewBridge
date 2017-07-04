import YCEvent from './YCEvent'

export default class YCWebViewBridge {
  static ready (callback) {
    if (window.WebViewJavascriptBridge) {
      callback(WebViewJavascriptBridge)
    } else {
      document.addEventListener('WebViewJavascriptBridgeReady', () => {
        callback(WebViewJavascriptBridge)
      }, false)
    }
  }
}
