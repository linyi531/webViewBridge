import YCEvent from './YCEvent'
import Bridge from './bridge'
import { getType } from './utils/validation'

const noop = () => {}

export default class YCWebViewBridge {
  constructor (namespance) {
    this.events = new YCEvent(namespance)
  }

  ready (callback) {
    Bridge.ready(callback)
  }

  on (eventName, callback) {
    let self = this
    this.ready(bridge => {
      self.events.on(eventName, callback)
      // registerHandler 会直接覆盖掉, 不 care
      bridge.registerHandler(eventName, (data, responseCallback) => {
        self.events.emit(eventName, data, responseCallback)
      })
    })
  }

  one (eventName, callback) {
    this.events.off(eventName)
    this.on(eventName, callback)
  }

  once (eventName, callback) {
    let self = this
    this.ready(bridge => {
      self.events.once(eventName, callback)
      bridge.registerHandler(eventName, (data, responseCallback) => {
        self.events.emit(eventName, data, responseCallback)
      })
    })
  }

  off (eventName, callback) {
    this.events.off(eventName, callback)
  }

  callNative (eventName, data, callback = () => {}) {
    let callData = data
    let callHandler = callback
    if (getType(data) === 'function') {
      callData = { ok: true, data: { signal: 'noop' } }
      callHandler = data
    } else if (!data) {
      callData = { ok: true, data: { signal: 'noop' } }
      callHandler = noop
    }
    this.ready(bridge => {
      bridge.callHandler(eventName, callData, callHandler)
    })
  }
}
