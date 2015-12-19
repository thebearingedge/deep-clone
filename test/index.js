
import { expect } from 'chai'
import camelCase from 'lodash.camelcase'
import snakeCase from 'lodash.snakecase'
import deepClone, { formatKeys } from '../src/index.js'

describe('deepClone(obj)', () => {

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
      bar: ['baz']
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
    const arr = [{ foo: 'bar' }, { baz: 'qux' }]
    const clone = deepClone(arr)
    expect(clone).to.deep.equal(arr)
    expect(clone).not.to.equal(arr)
    expect(clone[0]).to.deep.equal(arr[0])
    expect(clone[0]).not.to.equal(arr[0])
    expect(clone[1]).to.deep.equal(arr[1])
    expect(clone[1]).not.to.equal(arr[1])
  })

  it('formats keys', () => {
    const obj = { foo_bar: 'baz' }
    const clone = deepClone(obj, camelCase)
    expect(clone).to.deep.equal({ fooBar: 'baz' })
  })

  it('stores a key format function', () => {
    const snakeKeys = formatKeys(snakeCase)
    const obj = { fooBar: 'baz' }
    const clone = snakeKeys(obj)
    expect(clone).to.deep.equal({ foo_bar: 'baz' })
  })

})

