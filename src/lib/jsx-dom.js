/* global Node */
import { flatten } from './flatten'
import { forEach } from './foreach'

const h = (tag, attrs, ...children) => {
  const elm = document.createElement(tag)
  for (let key in attrs) {
    if (key.slice(0, 2) === 'on') {
      const evtName = key.slice(2)
      const cb = attrs[key]
      if (cb == null) continue // we can use null or undefined to suppress
      elm.addEventListener(evtName, cb)
    } else if (['disabled', 'autocomplete', 'selected', 'checked'].indexOf(key) > -1) {
      if (attrs[key]) {
        elm.setAttribute(key, key)
      }
    } else {
      if (attrs[key] == null) continue // Don't set undefined or null attributes
      elm.setAttribute(key, attrs[key])
    }
  }
  if (children.length === 0) {
    return elm
  }
  forEach(flatten(children), child => {
    if (child instanceof Node) {
      elm.appendChild(child)
    } else {
      elm.appendChild(document.createTextNode(child))
    }
  })
  return elm
}

export { h }
