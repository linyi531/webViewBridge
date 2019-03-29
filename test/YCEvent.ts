/// <reference types="../typings/globals" />
import * as assert from 'assert'
import YCEvent from '../src/YCEvent'
// const assert = require('assert')
// const YCEvent = require('../src/YCEvent')

describe('YCEvent', () => {
  describe('#nameSpance', () => {
    it('create and get', () => {
      const foo = new YCEvent('foo')
      const cache = YCEvent.getCache('foo')
      assert.equal(true, !!cache)
    })
  })

  describe('#on', () => {
    it('can register event', () => {
      const foo = new YCEvent('foo')
      const fn = () => true
      foo.on('testEvent', fn)
      assert.equal(true, foo._getCache().testEvent[0] === fn)
    })
  })

  describe('#off', () => {
    it('can remove register', () => {
      const foo = new YCEvent('foo')
      const fn = () => true
      foo.on('testEvent', fn)
      assert.equal(true, foo._getCache().testEvent[1] === fn)
      foo.off('testEvent', fn)
      assert.equal(true, foo._getCache().testEvent.length === 1)
      assert.equal(false, foo._getCache().testEvent.some(x => x === fn))
    })
  })

  describe('#one', () => {
    it('can register only', () => {
      const foo = new YCEvent('foo')
      const fn = () => true
      assert.equal(true, foo._getCache().testEvent.length === 1)
      foo.one('testEvent', fn)
      assert.equal(true, foo._getCache().testEvent.length === 1)
      assert.equal(true, foo._getCache().testEvent[0] === fn)
    })
  })

  describe('#emit', () => {
    it('dispatch register callback', done => {
      const foo = new YCEvent('foo')
      foo.off('testEvent')
      const p1 = new Promise((resolve, reject) => {
        foo.on('emitEvent', (x, y) => {
          const numberA = x + y
          assert.equal(true, numberA === 3)
          resolve()
        })
      })
      const p2 = new Promise(resolve => {
        foo.on('emitEvent', (x, y) => {
          const numberB = x - y
          assert.equal(true, numberB === 1)
          resolve()
        })
      })
      Promise.all([p1, p2]).then(() => {
        done()
      })
      foo.emit('emitEvent', 2, 1)
    })
  })

  describe('#once', () => {
    it('dispatch register and remove register callback', done => {
      const foo = new YCEvent('foo')
      foo.off('emitEvent')
      new Promise(resolve => {
        foo.once('onceEvent', (x, y) => {
          assert.equal(true, x + y === 10)
          resolve()
        })
      }).then(() => {
        assert.equal(true, foo._getCache().onceEvent.length === 0)
        done()
      })

      foo.emit('onceEvent', 5, 5)
    })
  })
})
