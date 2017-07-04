import YCEvent from './YCEvent'
import Bridge from './bridge'
import { compose } from './utils/fp'

export default class YCWebViewBridge {
  constructor (namespance) {
    this.events = new YCEvent(namespance)
  }

  on (eventName, callback) {
    let self = this
    compose(Bridge.ready, bridge => {
      self.events.on(eventName, callback)
      // registerHandler 会直接覆盖掉
      bridge.registerHandler(eventName, data => {
        self.events.emit(eventName, data)
      })
    })
  }

  one (eventName, callback) {
    this.events.off(eventName)
    this.on(eventName, callback)
  }

  once (eventName, callback) {
    let self = this
    compose(Bridge.ready, bridge => {
      self.events.once(eventName, callback)
      bridge.registerHandler(eventName, data => {
        self.events.emit(eventName, data)
      })
    })
  }

  off (eventName, callback) {
    this.events.off(eventName, callback)
  }

  callNative (eventName, data, callback) {
    compose(Bridge.ready, bridge => {
      bridge.callHandler(eventName, data, callback)
    })
  }
}
