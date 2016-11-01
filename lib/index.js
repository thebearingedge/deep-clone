"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepClone;
exports.formatKeys = formatKeys;
function deepClone(obj, format) {
  var refs = arguments.length <= 2 || arguments[2] === undefined ? new Map() : arguments[2];

  if (!obj) return obj;
  var cloned = refs.get(obj);
  if (cloned) return cloned;
  if (Array.isArray(obj)) {
    var _clone = [];
    refs.set(obj, _clone);
    for (var i = 0; i < obj.length; i++) {
      _clone[i] = deepClone(obj[i], format, refs);
    }
    return _clone;
  }
  if (obj instanceof Date) return new Date(obj.valueOf());
  if (!(Object.getPrototypeOf(obj) === Object.prototype)) return obj;
  var clone = {};
  refs.set(obj, clone);
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = format ? format(keys[i]) : keys[i];
    clone[key] = deepClone(obj[keys[i]], format, refs);
  }
  return clone;
}

function formatKeys(format) {
  return function (obj) {
    return deepClone(obj, format);
  };
}

deepClone.formatKeys = formatKeys;