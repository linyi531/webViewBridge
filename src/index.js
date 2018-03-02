import YCDefaultWebViewBridge from './defaultBridge'
import YCAndroidWebViewBridge from './androidV2Bridge'
import { getInterfaceObject } from './utils/android'

/**
 * 根据环境返回合适的 Bridge 对象
 */
function initBridge () {
  let bridge = null
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
