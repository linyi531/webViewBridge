/**
 * 用来确保一个页面中同名事件中的 dispatchId 唯一
 */
let seed = 0

export default function uuid () {
  return ++seed
}
