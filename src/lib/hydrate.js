const letters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '1234567890'
const charset = letters + letters.toUpperCase() + numbers

function randomElement (array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generate (length = 8) {
  let r = ''
  for (let i = 0; i < length; i++) {
    r += randomElement(charset)
  }
  return r
}

function isObject (obj) {
  return obj === Object(obj)
}

function addIdsToArray (data) {
  const nd = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (isObject(item)) {
      nd.push(addIdTo(item))
    }
  }
  return nd
}

function addIdTo (o) {
  return { ...o, id: generate() }
}

export function hydrateWithIds (d) {
  if (Array.isArray(d)) {
    return addIdsToArray(d)
  } else if (isObject(d)) {
    return addIdTo(d)
  }
  return d
}

export function generateId (prefix) {
  return `${prefix ? prefix + '-' : ''}${generate()}`
}
