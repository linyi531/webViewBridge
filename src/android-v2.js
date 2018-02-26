import YCEvent from './YCEvent'
import {
  CALL_NATIVE_KEY,
  getInterfaceObject,
  getBridgeParameter
} from './utils/android'

export default class YCAndroidWebViewBridge {
  constructor (namespance) {
    this.events = new YCEvent(namespance)
  }

  on (eventName, callback) {
    this.events.on(eventName, callback)
  }

  one (eventName, callback) {
    this.events.off(eventName)
    this.on(eventName, callback)
  }

  once (eventName, callback) {
    this.events.once(eventName, callback)
  }

  off (eventName, callback) {
    this.events.off(eventName, callback)
  }

  callNative (eventName, data, callback = () => {}) {
    getInterfaceObject((err, YCJSBridge) => {
      if (err) {
        // TODO: YCJSBridge 不存在，需要上报异常
        console.error(err)
        return
      }
      const callNativeFunction = YCJSBridge[CALL_NATIVE_KEY]
      const params = getBridgeParameter(eventName, data)
      callNativeFunction && callNativeFunction.call()
    })
  }

}

