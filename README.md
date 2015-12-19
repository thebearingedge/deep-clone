# deep-clone
Deep cloning of Arrays and Objects

[![Build Status](https://travis-ci.org/thebearingedge/deep-clone.svg?branch=master)](https://travis-ci.org/thebearingedge/deep-clone)

```bash
$ npm i -S deep-clone
```

deepClone(obj, [fn keyFormatter])
---

Recursively clone nested objects and arrays containing primitive data or objects and arrays containing primitive data.

```javascript
import assert from 'assert'
import deepClone from 'deep-clone'

const foo = { bar: 'baz' }
const fooClone = deepClone(foo)

assert.deepEqual(foo, fooClone) // true
assert.notEqual(foo, fooClone) // true

const arr = [{ foo: 'bar'}, { baz: 'qux'}]
const arrClone = deepClone(arr)

assert.deepEqual(arr, arrClone) // true
assert.notEqual(arr, arrClone) // true
```

Deep clone an Object or Array and format the keys.

```javascript
import assert from 'assert'
import camelCase from 'camelcase'
import deepClone from 'deep-clone'

const foo = { bar_baz: 'qux' }
const fooClone = deepClone(foo, camelCase)

assert.deepEqual(fooClone, { barBaz: 'qux' }) // true
```

Or.

```javascript
import assert from 'assert'
import camelCase from 'camelcase'
import { formatKeys } from 'deep-clone'

const camelKeys = formatKeys(camelCase)
const arr = [{ foo_bar: 'baz' }, { qux_quux: 'corge' }]
const arrClone = camelKeys(arr)

assert.deepEqual(arrClone, [{ fooBar: 'baz' }, { quxQuux: 'corge' }]) // true
```

Other options:
- [clone-deep](https://github.com/jonschlinkert/clone-deep)
- [safe-clone-deep](https://github.com/tracker1/safe-clone-deep)