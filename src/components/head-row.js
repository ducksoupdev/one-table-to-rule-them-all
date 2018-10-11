/** @jsx h */
import { h } from '../lib/jsx-dom.js'
import { Title } from './title'

export const HeadRow = (f, s, d) => (
  <tr>
    {d.map(k => <th>{Title(f, k, s)}</th>)}
  </tr>
)
