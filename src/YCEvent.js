/**
 * YCEvent
 * auth: hezhiqiang
 * date: 2017-07-03
 * desc: 支持命名空间的 PUB/SUB Class
 */

import _ from 'lodash'
import { after } from './utils/fp'
import validation, { getType } from './utils/validation'

const DEFAULT_SPANCE_NAME = '_global_'
let _namespanceCache = {}

export default class YCEvent {
  /**
   * 创建一个 YCEvent 对象.
   * @param {string} spaceName 命名空间名字，默认为 _global_
   * @memberof YCEvent
   */
  constructor (spaceName) {
    validation(spaceName, ['string', 'undefined'])
    this.spaceName = spaceName || DEFAULT_SPANCE_NAME
    this.cache = this._getCache()
  }

  static getCache (spanceName) {
    return _namespanceCache[spanceName]
  }

  /**
   * 获得该命名空间下的 cache
   *
   * @returns cacheObject
   * @memberof YCEvent
   */
  _getCache () {
    let cache = _namespanceCache[this.spaceName]
    if (!cache) {
      cache = _namespanceCache[this.spaceName] = {}
    }

    return cache
  }

  /**
   * 订阅一个事件
   *
   * @param {string} eventName 事件名称
   * @param {function} callback 事件回调
   * @memberof YCEvent
   */
  on (eventName, callback) {
    if (getType(this.cache[eventName]) !== 'array') {
      this.cache[eventName] = []
    }
    this.cache[eventName].push(callback)
  }

  /**
   * 订阅一个一次性事件
   *
   * @param {any} eventName
   * @param {any} callback
   * @memberof YCEvent
   */
  once (eventName, callback) {
    if (getType(eventName) !== 'string') return
    if (getType(callback) !== 'function') return
    let self = this
    let newCallback = after(
      callback,
      () => self.off(eventName, newCallback)
    )
    this.on(eventName, newCallback)
  }

  /**
   * 删掉同类订阅，然后订阅该回调
   *
   * @param {string} eventName 事件名称
   * @param {function} callback 事件回调
   * @memberof YCEvent
   */
  one (eventName, callback) {
    if (getType(eventName) !== 'string') return
    if (getType(callback) !== 'function') return
    this.off(eventName)
    this.on(eventName, callback)
  }

  /**
   * 取消订阅一个或一类事件
   *
   * @param {string} eventName 事件名称
   * @param {function} callback [可选] 需要取消订阅的回调，如果不提供此参数，则取消此 eventName 下的全部回调
   * @memberof YCEvent
   */
  off (eventName, callback) {
    if (getType(eventName) !== 'string') return
    if (getType(callback) === 'function') {
      _.remove(this.cache[eventName], item => item === callback)
    } else {
      this.cache[eventName] = null
    }
  }

  /**
   * 发布一类事件
   *
   * @param {string} eventName 事件名称
   * @param {function} data 事件携带的数据
   * @memberof YCEvent
   */
  emit (eventName, ...data) {
    if (getType(eventName) !== 'string') return
    if (getType(this.cache[eventName]) !== 'array') return

    this.cache[eventName].forEach(item => {
      item.apply(this, data)
    })
  }
}
