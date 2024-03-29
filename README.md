# deep-clone

[![Github Actions Test Status](https://github.com/thebearingedge/deep-clone/workflows/test/badge.svg?branch=main)](https://github.com/thebearingedge/deep-clone/actions?query=workflow%3Atest+branch%3Amain)
[![codecov](https://codecov.io/gh/thebearingedge/deep-clone/branch/main/graph/badge.svg?token=PDH8IGTF1A)](https://codecov.io/gh/thebearingedge/deep-clone)

Deep cloning of data.

```bash
$ npm i -S deep-clone
```

`deepClone(obj, [stringFormatter])`
---

Recursively clone nested objects and arrays containing primitive data or nested objects and arrays containing primitive data. Clones `Date` objects too.

```javascript
import deepClone from 'deep-clone'

const foo = { bar: 'baz' }
const fooClone = deepClone(foo)

assert.deepEqual(foo, fooClone)
assert.notEqual(foo, fooClone)

const arr = [{ foo: 'bar'}, { baz: 'qux'}]
const arrClone = deepClone(arr)

assert.deepEqual(arr, arrClone)
assert.notEqual(arr, arrClone)
```

Deep clone an Object or Array and format the keys.

```javascript
import camelCase from 'camelcase'
import deepClone from 'deep-clone'

const foo = { bar_baz: 'qux' }
const fooClone = deepClone(foo, camelCase)

assert.deepEqual(fooClone, { barBaz: 'qux' })
```

Or...

```javascript
import camelCase from 'camelcase'
import { formatKeys } from 'deep-clone'

const camelKeys = formatKeys(camelCase)
const arr = [{ foo_bar: 'baz' }, { qux_quux: 'corge' }]
const camelClone = camelKeys(arr)

assert.deepEqual(camelClone, [{ fooBar: 'baz' }, { quxQuux: 'corge' }])
```

Circular references are handled using a Map.

```javascript
const foo = { bar: 'baz' }

foo.qux = [foo]

const clone = deepClone(foo)

assert.deepEqual(clone, foo)
assert.equal(clone.qux[0], clone)
```

Other options:
- [clone-deep](https://github.com/jonschlinkert/clone-deep)
- [safe-clone-deep](https://github.com/tracker1/safe-clone-deep)
