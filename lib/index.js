'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepClone;
exports.formatKeys = formatKeys;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function deepClone(obj, format) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return obj;
  if (Array.isArray(obj)) {
    var _clone = [];
    for (var i = 0; i < obj.length; i++) {
      _clone[i] = deepClone(obj[i], format);
    }
    return _clone;
  }
  var clone = {};
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = format ? format(keys[i]) : keys[i];
    clone[key] = deepClone(obj[keys[i]], format);
  }
  return clone;
}

function formatKeys(fn) {
  return function (obj) {
    return deepClone(obj, fn);
  };
}