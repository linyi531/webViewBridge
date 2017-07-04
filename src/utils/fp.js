/**
 * fp.js
 * author: hezhiqiang
 * date: 2017-07-03
 * desc: 一些函数式工具
 */

export let after = (originFn, afterFn) => (...args) => {
  let ret = originFn.apply(this, args)
  afterFn(...args)
  return ret
}

export let before = (originFn, beforeFn) => (...args) => {
  beforeFn(...args)
  return originFn.apply(this, args)
}

export let currying = fn => {
  let _args = []
  return function foo (...args) {
    if (args.length === 0) {
      return after(
        () => fn.apply(this, _args),
        () => _args.splice(0, _args.length)
      )()
    } else {
      [].push.apply(_args, args)
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
