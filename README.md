# deep-clone
Stand-alone deep cloning of Arrays and Objects

[![Build Status](https://travis-ci.org/thebearingedge/deep-clone.svg?branch=master)](https://travis-ci.org/thebearingedge/deep-clone)

```bash
$ npm install --save deep-clone
```

Recursively clone nested objects and arrays containing primitive data or objects and arrays containing primitive data.

```javascript
import deepClone from 'deep-clone'

const obj = { /* ... */ }
const cloneOfObj = deepClone(obj)

const arr = [ /* ... */ ]
const cloneOfArr = deepClone(arr)
```

Other options:
- [clone-deep](https://github.com/jonschlinkert/clone-deep)
- [safe-clone-deep](https://github.com/tracker1/safe-clone-deep)