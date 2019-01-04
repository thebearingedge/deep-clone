
export default function deepClone(obj, format, refs = new Map()) {
  const cloned = refs.get(obj)
  if (cloned) return cloned
  if (Array.isArray(obj)) {
    const clone = []
    refs.set(obj, clone)
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i], format, refs)
    }
    return clone
  }
  if (obj instanceof Date) return new Date(obj.valueOf())
  if (!(obj instanceof Object)) return obj
  if (obj instanceof RegExp) return RegExp(obj.source, obj.flags);
  const clone = {}
  refs.set(obj, clone)
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const key = format ? format(keys[i]) : keys[i]
    clone[key] = deepClone(obj[keys[i]], format, refs)
  }
  return clone
}

export function formatKeys(format) {
  return obj => deepClone(obj, format)
}

deepClone.formatKeys = formatKeys
