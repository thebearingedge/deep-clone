'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepClone;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function deepClone(obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return obj;
  if (Array.isArray(obj)) {
    var _clone = new Array(obj.length);
    for (var i = 0; i < obj.length; i++) {
      _clone[i] = deepClone(obj[i]);
    }
    return _clone;
  }
  var clone = {};
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    clone[keys[i]] = deepClone(obj[keys[i]]);
  }
  return clone;
}