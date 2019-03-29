import YCEvent from "./YCEvent";
import Bridge from "./bridge";
// import { getType } from "./utils/validation";

const noop = () => {};
const noopData = { ok: true, data: { signal: "noop" } };

export default class YCWebViewBridge implements IBridge {
  events: IEvent;
  constructor(namespance: string) {
    this.events = new YCEvent(namespance);
  }

  ready(callback: Function) {
    Bridge.ready(callback);
  }

  on(eventName: string, callback: Function) {
    let self = this;
    this.ready(bridge => {
      self.events.on(eventName, callback);
      // registerHandler 会直接覆盖掉, 不 care
      bridge.registerHandler(eventName, (data, responseCallback) => {
        self.events.emit(eventName, data, responseCallback);
      });
    });
  }

  one(eventName: string, callback: Function) {
    this.events.off(eventName, null);
    this.on(eventName, callback);
  }

  once(eventName: string, callback: Function) {
    let self = this;
    this.ready(bridge => {
      self.events.once(eventName, callback);
      bridge.registerHandler(eventName, (data, responseCallback) => {
        self.events.emit(eventName, data, responseCallback);
      });
    });
  }

  off(eventName: string, callback?: Function | null) {
    this.events.off(eventName, callback);
  }

  callNative(eventName: string, data?: object, callback?: Function) {
    let callData = data;
    let callHandler = callback;
    if (data === undefined && callback === undefined) {
      callData = noopData;
      callHandler = noop;
    } else if (data === undefined) {
      callData = noopData;
      callHandler = callback;
    }

    this.ready(bridge => {
      bridge.callHandler(eventName, callData, callHandler);
    });
  }
  // callNative(eventName: string, data: Object, callback: Function = () => {}) {
  //   let callData = data;
  //   let callHandler = callback;
  //   if (getType(data) === "function") {
  //     callData = noopData;
  //     callHandler = data;
  //   } else if (!data) {
  //     callData = noopData;
  //     callHandler = noop;
  //   }
  //   this.ready(bridge => {
  //     bridge.callHandler(eventName, callData, callHandler);
  //   });
  // }
}
