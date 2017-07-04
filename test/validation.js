import assert from 'assert'
import validation from '../src/utils/validation'

const Q = () => true

describe('validation', () => {
  describe('#string type', () => {
    it('string type validation be ok', () => {
      assert.doesNotThrow(() => validation([1, 2], 'array'))
      assert.doesNotThrow(() => validation('test', 'string'))
      assert.throws(() => validation([1, 2], 'string'), Q)
      assert.throws(() => validation('test', 'array'), Q)
    })
  })

  describe('#array type', () => {
    it('array type validation be ok', () => {
      assert.doesNotThrow(() => validation([1, 2], ['string', 'array']))
      assert.doesNotThrow(() => validation('test', ['string', 'array']))
      assert.throws(() => validation([1, 2], ['string']), Q)
      assert.throws(() => validation('test', ['array', 'object']), Q)
    })
  })
})
