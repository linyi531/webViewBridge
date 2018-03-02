import YCEvent from './YCEvent'
import {
  getInterfaceObject,
  getBridgeParameter,
  encodeData,
  decodeData
} from './utils/android'
import uuid from './utils/uuid'

const CALLBACK_EVENTS_NAMESPANCE = '__callbackEmiter'

export default class YCAndroidWebViewBridge {
  constructor (namespance) {
    this.events = new YCEvent(namespance)
    this.callbackEmiter = new YCEvent(CALLBACK_EVENTS_NAMESPANCE)
    window.__YCBridge__ = {
      dispatch: this._YCDispatch.bind(this),
      responseCallback: this._YCResponseCallback.bind(this)
    }
  }

  /**
   * 订阅事件
   * @param eventName
   * @param callback
   */
  on (eventName, callback) {
    this.events.on(eventName, callback)
  }

  one (eventName, callback) {
    this.events.off(eventName, null)
    this.on(eventName, callback)
  }

  once (eventName, callback) {
    this.events.once(eventName, callback)
  }

  off (eventName, callback) {
    this.events.off(eventName, callback)
  }

  callNative (eventName, data, callback) {
    getInterfaceObject((err, jsBridge) => {
      if (err) {
        // TODO: YCJSBridge 不存在，需要上报异常
        console.error(err)
        return
      }
      let params
      const callNativeFunction = window.YCJSBridge.evaluateJava
      /**
       * 如果 callback 有值并且是 function, 则需要注册回调函数
       * 这个回调函数的 eventName 对应 dispatchId 参数
       */
      if (typeof callNativeFunction !== 'function') {
        console.error(new Error('YCJSBridge.evaluateJava is not a function'))
        return
      }
      if (typeof callback !== 'function') {
        params = getBridgeParameter(eventName, data)
      } else {
        const dispatchId = `${eventName}_${uuid()}`
        this.callbackEmiter.once(dispatchId, data => {
          callback(data)
        })
        params = getBridgeParameter(eventName, data, dispatchId)
      }
      this.__AndroidEvaluateJava(params)
    })
  }

  _YCDispatch (data) {
    const dataObj = decodeData(data)
    const { eventName, params = {}, dispatchId } = dataObj
    console.log('dispatchEventName', eventName)
    console.log('dispatchData', dataObj)
    let callback = x => x
    if (dispatchId !== 'NOOP') {
      // 需要回调值
      callback = data => {
        const param = getBridgeParameter(eventName, data, dispatchId)
        this.__AndroidResponseCallback(param)
      }
    }
    const effectCount = this.events.emit(eventName, params, callback)
    console.log('effectCount:', effectCount)
    if (effectCount === 0) {
      // 如果受影响数量为 0 ，则证明没有这个事件
      // 给 native 返回错误信息
      const dontRegisterData = { ok: false, errCode: 404 }
      const param = getBridgeParameter(eventName, dontRegisterData, dispatchId)
      console.log('effectData:', param)
      this.__AndroidResponseCallback(param)
    }
  }

  _YCResponseCallback (data) {
    const dataObj = decodeData(data)
    const { eventName, params = {} } = dataObj
    this.callbackEmiter.emit(eventName, params)
  }

  __AndroidResponseCallback (data) {
    const params = encodeData(data)
    window.YCJSBridge.responseCallback(params)
  }

  __AndroidEvaluateJava (data) {
    const params = encodeData(data)
    window.YCJSBridge.evaluateJava(params)
  }
}
