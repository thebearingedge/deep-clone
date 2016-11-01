
import { expect } from 'chai'
import { camelCase, snakeCase } from 'lodash'
import deepClone, { formatKeys } from '../src/index.js'

describe('deepClone(obj, [stringFormatter])', () => {

  it('clones flat objects', () => {
    const obj = { foo: 'bar', baz: 'qux' }
    const clone = deepClone(obj)
    expect(clone).to.deep.equal(obj)
    expect(clone).not.to.equal(obj)
  })

  it('clones nested objects', () => {
    const obj = {
      foo: 'bar',
      baz: {
        qux: 'quux'
      }
    }
    const clone = deepClone(obj)
    expect(clone.baz).to.deep.equal(obj.baz)
    expect(clone.baz).not.to.equal(obj.baz)
  })

  it('clones flat arrays', () => {
    const arr = ['foo', 'bar', 'baz']
    const clone = deepClone(arr)
    expect(clone).to.deep.equal(arr)
    expect(clone).not.to.equal(arr)
  })

  it('clones multi-dimensional arrays', () => {
    const arr = [['foo', 'bar'], ['baz', 'qux']]
    const clone = deepClone(arr)
    expect(clone).to.deep.equal(arr)
    expect(clone).not.to.equal(arr)
    expect(clone[0]).to.deep.equal(arr[0])
    expect(clone[0]).not.to.equal(arr[0])
    expect(clone[1]).to.deep.equal(arr[1])
    expect(clone[1]).not.to.equal(arr[1])
  })

  it('clones objects containing arrays', () => {
    const obj = {
      foo: ['bar'],
      bar: [null]
    }
    const clone = deepClone(obj)
    expect(clone).to.deep.equal(obj)
    expect(clone).not.to.equal(obj)
    expect(clone.foo).to.deep.equal(obj.foo)
    expect(clone.foo).not.to.equal(obj.foo)
    expect(clone.bar).to.deep.equal(obj.bar)
    expect(clone.bar).not.to.equal(obj.bar)
  })

  it('clones arrays of objects', () => {
    const arr = [{ foo: 1 }, { baz: 2 }]
    const clone = deepClone(arr)
    expect(clone).to.deep.equal(arr)
    expect(clone).not.to.equal(arr)
    expect(clone[0]).to.deep.equal(arr[0])
    expect(clone[0]).not.to.equal(arr[0])
    expect(clone[1]).to.deep.equal(arr[1])
    expect(clone[1]).not.to.equal(arr[1])
  })

  it('clones circular references', () => {
    const foo = { bar: 'baz' }
    foo.qux = [foo]
    const clone = deepClone(foo)
    expect(clone).to.deep.equal(foo)
    expect(clone.qux).not.to.equal(foo.qux)
    expect(clone.qux).to.deep.equal(foo.qux)
    expect(clone.qux[0]).to.equal(clone)
  })

  it('clones Dates', () => {
    const foo = new Date()
    const clone = deepClone(foo)
    expect(clone.toString()).to.equal(foo.toString())
    expect(clone).not.to.equal(foo)
  })

  it('formats keys', () => {
    const obj = { foo_bar: 'baz' }
    const clone = deepClone(obj, camelCase)
    expect(clone).to.deep.equal({ fooBar: 'baz' })
  })

  describe('formatKeys(stringFormatter)', () => {

    it('returns a key format function', () => {
      const snakeKeys = formatKeys(snakeCase)
      const obj = { fooBar: 'baz' }
      const clone = snakeKeys(obj)
      expect(clone).to.deep.equal({ foo_bar: 'baz' })
    })

  })

})
