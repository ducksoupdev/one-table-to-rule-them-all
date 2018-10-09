import validate from '../gen/validate'

export function validateOptions (options) {
  const valid = validate(options)
  if (!valid) {
    console.error(validate.errors)
    throw new Error('Invalid options supplied!')
  }
}

export function getTitle (k, v) {
  return (v && v.title) || k
}
