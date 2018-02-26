export const ANDROID_JAVASCRIPT_INTERFACE_OBJECT_NAME = 'YCJSBridge'
export const CALL_NATIVE_KEY = 'evaluateJava'

export function getInterfaceObject (callback) {
  const interfaceObject = window[ANDROID_JAVASCRIPT_INTERFACE_OBJECT_NAME]
  const isExist = Object
    .prototype
    .toString
    .call(interfaceObject) === '[object Object]'
  if (isExist) {
    callback(null, interfaceObject)
  } else {
    callback(new Error(ANDROID_JAVASCRIPT_INTERFACE_OBJECT_NAME + 'don\'t exist'))
  }
}


export function getBridgeParameter (eventName, params, dispatchId = 'NOOP') {
  return JSON.stringify({
    eventName,
    params,
    dispatchId
  })
}

