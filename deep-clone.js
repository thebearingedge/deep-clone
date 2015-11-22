
export default function deepClone(obj) {
  if (!obj || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) {
    const copy = new Array(obj.length)
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i])
    }
    return copy
  }
  const copy = {}
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    copy[keys[i]] = deepClone(obj[keys[i]])
  }
  return copy
}
