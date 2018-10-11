/** @jsx h */
import { h } from '../lib/jsx-dom.js'

export const BodyColumn = d => (
  <tr>
    {Object.keys(d).map(k => <td>{d[k]}</td>)}
  </tr>
)
