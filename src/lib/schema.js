import validate from '../gen/validate.js'

export function validateOptions (options) {
  const valid = validate(options)
  if (!valid) {
    console.error(validate.errors)
    throw new Error('Options are not valid!')
  }
}

export function getTitle (k, v) {
  return (v && v.title) || k
}
