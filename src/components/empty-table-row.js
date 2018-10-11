/** @jsx h */
import { h } from '../lib/jsx-dom.js'

export const EmptyTableRow = (l, cls = {}, c = '') => (
  <tr>
    <td colspan={l} {...cls}>{c}</td>
  </tr>
)
