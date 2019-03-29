/**
 * fp.js
 * author: hezhiqiang
 * date: 2017-07-03
 * desc: 一些函数式工具
 */

export let after = (originFn, afterFn) => (...args) => {
  const ret = originFn(...args) // .apply(this, args)
  afterFn(...args)
  return ret
}

export let before = (originFn, beforeFn) => (...args) => {
  beforeFn(...args)
  return originFn.apply(null, args)
}

export let currying = fn => {
  const _args: any[] = []
  return function foo(...args) {
    if (args.length === 0) {
      return after(
        () => fn.apply(null, _args),
        () => _args.splice(0, _args.length)
      )()
    } else {
      _args.push(...args)
      // [].push.apply(_args, args)
      return foo
    }
  }
}

export let compose = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
