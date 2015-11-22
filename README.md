# deep-clone
Stand-alone deep cloning of Arrays and Objects

[![Build Status](https://travis-ci.org/thebearingedge/deep-clone.svg?branch=master)](https://travis-ci.org/thebearingedge/deep-clone)

```bash
$ npm install --save deep-clone
```

Recursively copy nested objects and arrays.

```javascript
import deepClone from 'deep-clone'

const obj = { /* ... */ }
const cloneObj = deepClone(obj)

const arr = [ /* ... */ ]
const cloneArr = deepClone(arr)
```
