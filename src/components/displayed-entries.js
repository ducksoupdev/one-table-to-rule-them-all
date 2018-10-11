/** @jsx h */
import { h } from '../lib/jsx-dom.js'

export const DisplayedEntries = s => (
  <div class='mb-2 w-25'>
    <span class='mr-1'>Display</span>
    <select class='form-control d-inline-block w-auto' size='1'>
      <option value='10' selected={s.pageSize === 10}>10</option>
      <option value='25' selected={s.pageSize === 25}>25</option>
      <option value='50' selected={s.pageSize === 50}>50</option>
    </select>
    <span class='ml-1'>rows</span>
  </div>
)
