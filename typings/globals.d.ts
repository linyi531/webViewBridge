declare interface IBridge {
  events: IEvent;
  on: (eventName: string, callback: Function) => void;
  one: (eventName: string, callback: Function) => void;
  once: (eventName: string, callback: Function) => void;
  off: (eventName: string, callback?: Function) => void;
  callNative: (eventName: string, data?: object, callback?: Function) => void;
}
declare interface IAndroidBridge extends IBridge {
  callbackEmiter: IEvent;
  _YCDispatch: (data: string) => void;
  _YCResponseCallback: (data: string) => void;
  __AndroidResponseCallback: (data: object) => void;
  __AndroidEvaluateJava: (data: object) => void;
}

declare interface IEvent {
  spaceName: string;
  cache: Array;
  on: (eventName: string, callback: Function) => void;
  one: (eventName: string, callback: Function) => void;
  once: (eventName: string, callback: Function) => void;
  off: (eventName: string, callback?: Function | null) => void;
  emit: (eventName: string, ...data: any[]) => number;
}

declare interface Window {
  __YCBridge__: {
    dispatch: Function;
    responseCallback: Function;
  };
  YCJSBridge: {
    evaluateJava: (params: string) => void;
    responseCallback: (params: string) => void;
  };
  WebViewJavascriptBridge: {
    registerHandler: (handlerName: string, handler: Function) => void;
    callHandler: (
      handlerName: string,
      data?: object,
      responseCallback?: Function
    ) => void;
    disableJavscriptAlertBoxSafetyTimeout: () => void;
    _fetchQueue: () => string;
    _handleMessageFromObjC: (messageJSON: string) => void;
  };
  WVJBCallbacks: Function[];
}
