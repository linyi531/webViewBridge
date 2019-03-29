import { Base64 } from 'js-base64'
import { getType, isEmpty } from './validation'

export const ANDROID_JAVASCRIPT_INTERFACE_OBJECT_NAME = 'YCJSBridge'
export const CALL_NATIVE_KEY = 'evaluateJava'

export function getInterfaceObject(callback: Function) {
  const interfaceObject = window.YCJSBridge // 使用 [] 获取 bridge 引用方式会报异常
  const isExist = getType(interfaceObject) === 'object'
  if (isExist) {
    callback(null, interfaceObject)
  } else {
    callback(
      new Error(ANDROID_JAVASCRIPT_INTERFACE_OBJECT_NAME + `don't exist`)
    )
  }
}

export function getBridgeParameter(
  eventName: string,
  params: object,
  dispatchId: string = 'NOOP'
): object | undefined {
  if (isEmpty(eventName)) {
    console.error('eventName must be a string and not empty')
    return
  }
  let data = {}
  if (getType(params) === 'object') {
    data = params
  }
  return {
    eventName,
    params: data,
    dispatchId,
  }
}

export function decodeData(base64Str: string): object {
  if (getType(base64Str) === 'string' && !isEmpty(base64Str)) {
    const jsonStr = Base64.decode(base64Str)
    const json = JSON.parse(jsonStr)
    return json
  } else {
    const err = 'decodeData is not a string'
    console.error(err)
    return { err }
  }
}

export function encodeData(jsonObj?: object): string {
  if (getType(jsonObj) === 'object') {
    const jsonStr = JSON.stringify(jsonObj)
    const base64Str = Base64.encode(jsonStr)
    return base64Str
  } else {
    const err = 'encodeData is not a json object'
    console.error(err)
    return err
  }
}
