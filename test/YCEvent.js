import * as assert from 'assert'
import YCEvent from '../src/YCEvent'
// const assert = require('assert')
// const YCEvent = require('../src/YCEvent')

describe('YCEvent', () => {
  describe('#nameSpance', () => {
    it('create and get', () => {
      let foo = new YCEvent('foo')
      console.log(foo.__YCBridge__)
      let cache = YCEvent.getCache('foo')
      assert.equal(true, !!cache)
    })
  })

  describe('#on', () => {
    it('can register event', () => {
      let foo = new YCEvent('foo')
      let fn = () => true
      foo.on('testEvent', fn)
      assert.equal(true, foo._getCache()['testEvent'][0] === fn)
    })
  })

  describe('#off', () => {
    it('can remove register', () => {
      let foo = new YCEvent('foo')
      let fn = () => true
      foo.on('testEvent', fn)
      assert.equal(true, foo._getCache()['testEvent'][1] === fn)
      foo.off('testEvent', fn)
      assert.equal(true, foo._getCache()['testEvent'].length === 1)
      assert.equal(false, foo._getCache()['testEvent'].some(x => x === fn))
    })
  })

  describe('#one', () => {
    it('can register only', () => {
      let foo = new YCEvent('foo')
      let fn = () => true
      assert.equal(true, foo._getCache()['testEvent'].length === 1)
      foo.one('testEvent', fn)
      assert.equal(true, foo._getCache()['testEvent'].length === 1)
      assert.equal(true, foo._getCache()['testEvent'][0] === fn)
    })
  })

  describe('#emit', () => {
    it('dispatch register callback', done => {
      let foo = new YCEvent('foo')
      foo.off('testEvent')
      let p1 = new Promise((resolve, reject) => {
        foo.on('emitEvent', (x, y) => {
          let numberA = x + y
          assert.equal(true, numberA === 3)
          resolve()
        })
      })
      let p2 = new Promise(resolve => {
        foo.on('emitEvent', (x, y) => {
          let numberB = x - y
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
      let foo = new YCEvent('foo')
      foo.off('emitEvent')
      new Promise(resolve => {
        foo.once('onceEvent', (x, y) => {
          assert.equal(true, x + y === 10)
          resolve()
        })
      }).then(() => {
        assert.equal(true, foo._getCache()['onceEvent'].length === 0)
        done()
      })

      foo.emit('onceEvent', 5, 5)
    })
  })
})
