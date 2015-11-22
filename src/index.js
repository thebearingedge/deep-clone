
export default function deepClone(obj) {
  if (!obj || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) {
    const clone = new Array(obj.length)
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i])
    }
    return clone
  }
  const clone = {}
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    clone[keys[i]] = deepClone(obj[keys[i]])
  }
  return clone
}
