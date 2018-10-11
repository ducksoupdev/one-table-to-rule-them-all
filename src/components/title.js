/** @jsx h */
import { h } from '../lib/jsx-dom.js'
import { getTitle } from '../lib/get-title'

export const Title = (f, k, s) => {
  if (f) {
    return <div>{getTitle(k, s[k])}</div>
  } else {
    return getTitle(k, s[k])
  }
}
