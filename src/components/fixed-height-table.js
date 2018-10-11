/** @jsx h */
import { h } from '../lib/jsx-dom.js'

import { DefaultTable } from './default-table'

export const FixedHeightTable = s => (
  <div class={`tfh-c tfh-h tfh-f${s.footers ? ' mb-3' : ''}`}>
    <div class='tfh'>
      {DefaultTable(s)}
    </div>
  </div>
)
