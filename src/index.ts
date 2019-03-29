import YCAndroidWebViewBridge from './androidV2Bridge'
import YCDefaultWebViewBridge from './defaultBridge'
import { getInterfaceObject } from './utils/android'

/**
 * 根据环境返回合适的 Bridge 对象
 */
function initBridge(): IBridge | IAndroidBridge {
  let bridge
  getInterfaceObject((err, interfaceObj) => {
    if (err) {
      bridge = YCDefaultWebViewBridge
    } else {
      bridge = YCAndroidWebViewBridge
    }
  })
  return bridge
}

const YCWebViewBridge = initBridge()

export default YCWebViewBridge
