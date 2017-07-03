/**
 * 数据验证类
 * author: hezhiqiang
 * date: 2017-07-03
 * desc: 验证数据类型是否正确
 */

/**
 * 获得参数的数据类型
 *
 * @export
 * @param {any} target
 * @returns {string} 目标数据的数据类型
 */
export function getType (target) {
  return Object.prototype.toString
               .call(target)
               .slice(8, -1)
               .toLowerCase()
}

/**
 * 检验类型
 *
 * @export
 * @param {any} target 目标数据
 * @param {string | array} type 期望的类型 string: 期望的数据类型， array: 期望数据类型之一
 */
export default function validation (target, types) {
  let expectTypes = getType(types)
  if (expectTypes === 'string') {
    if (getType(target) === types.toLowerCase()) return
    throw new Error(`target type should be a ${expectTypes}`)
  } else if (expectTypes === 'array') {
    if (types.some(type => getType(target) === type)) return
    throw new Error(`target type should be included in [${types}]`)
  }

  throw new Error('validation parameter types should be string or array')
}
