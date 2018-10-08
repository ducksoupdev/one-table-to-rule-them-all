// /** @jsx h */
import { h } from './jsx-dom.js'
import { getTitle } from './schema.js'

// export const createNode = (d) => (
//   <tr>
//     {Object.keys(d).map(k => <td>{d[k]}</td>)}
//   </tr>
// )

export const createBodyNode = d => h(
  'tr',
  null,
  ...Object.keys(d).map(k => h(
    'td',
    null,
    d[k]
  ))
)

export const createEmptyBodyNode = d => h(
  'tr',
  null,
  ...d.map(k => h(
    'td',
    null,
    ''
  ))
)

export const createHeadNode = (s, d) => h(
  'tr',
  null,
  ...d.map(k => h(
    'th',
    null,
    getTitle(k, s[k])
  ))
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
