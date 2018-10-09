// /** @jsx h */
import { h } from './jsx-dom.js'
import { getTitle } from './schema.js'

// export const createNode = (d) => (
//   <tr>
//     {Object.keys(d).map(k => <td>{d[k]}</td>)}
//   </tr>
// )

export const createTableBodyNode = d => h(
  'tr',
  null,
  ...Object.keys(d).map(k => h(
    'td',
    null,
    d[k]
  ))
)

export const createEmptyTableColumnNode = d => h(
  'tr',
  null,
  ...d.map(k => h(
    'td',
    null,
    ''
  ))
)

export const createTableHeadNode = (s, d) => h(
  'tr',
  null,
  ...d.map(k => h(
    'th',
    null,
    getTitle(k, s[k])
  ))
)

export const createTableEmptyRowNode = (l, cls = {}, c = '') => h(
  'tr',
  null,
  h(
    'td',
    { colspan: `${l}`, ...cls },
    c
  )
)

export const createTableNode = s => h(
  'table',
  { class: `table${s.enableHover ? ' table-hover' : ''}` },
  h(
    'thead',
    null
  ),
  h(
    'tbody',
    null
  ),
  h(
    'tfoot',
    null
  )
)

export const createPaginationNode = s => h(
  'nav',
  { ariaLabel: 'Table pagination' },
  h(
    'ul',
    { class: 'pagination' },
    h(
      'li',
      { class: 'page-item' },
      h(
        'a',
        { class: 'page-link', href: '#' },
        'Previous'
      )
    ),
    h(
      'li',
      { class: 'page-item' },
      h(
        'a',
        { class: 'page-link', href: '#' },
        '1'
      )
    ),
    h(
      'li',
      { class: 'page-item' },
      h(
        'a',
        { class: 'page-link', href: '#' },
        'Next'
      )
    )
  )
)

export const createDisplayedEntriesNode = s => h(
  'div',
  { class: 'mb-2 w-25' },
  h(
    'span',
    { class: 'mr-1' },
    'Display'
  ),
  h(
    'select',
    { class: 'form-control d-inline-block w-auto', size: 1 },
    h(
      'option',
      { value: '10', selected: s.size === 10 },
      '10'
    ),
    h(
      'option',
      { value: '25', selected: s.size === 25 },
      '25'
    ),
    h(
      'option',
      { value: '50', selected: s.size === 50 },
      '50'
    )
  ),
  h(
    'span',
    { class: 'ml-1' },
    'rows'
  )
)
