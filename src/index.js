
export default function deepClone(obj, format) {
  if (!obj || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) {
    const clone = []
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i], format)
    }
    return clone
  }
  const clone = {}
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const key = format ? format(keys[i]) : keys[i]
    clone[key] = deepClone(obj[keys[i]], format)
  }
  return clone
}

export function formatKeys(fn) {
  return obj => deepClone(obj, fn)
}
