/** @jsx h */
import { h } from './jsx-dom.js'
import { getTitle } from './schema.js'
import { ClassBuilder } from './class-builder'

export const createTableBodyNode = d => (
  <tr>
    {Object.keys(d).map(k => <td>{d[k]}</td>)}
  </tr>
)

export const createEmptyTableColumnNode = d => (
  <tr>
    {d.map(k => <td />)}
  </tr>
)

const createTitle = (f, k, s) => {
  if (f) {
    return <div>{getTitle(k, s[k])}</div>
  } else {
    return getTitle(k, s[k])
  }
}

export const createTableHeadNode = (f, s, d) => (
  <tr>
    {d.map(k => <th>{createTitle(f, k, s)}</th>)}
  </tr>
)

export const createTableFootNode = (f, s, d) => (
  <tr>
    {d.map(k => <th>{createTitle(f, k, s)}</th>)}
  </tr>
)

export const createEmptyTableRowNode = (l, cls = {}, c = '') => (
  <tr>
    <td colspan={l} {...cls}>{c}</td>
  </tr>
)

const createFixedHeightTable = s => (
  <div class={`tfh-c tfh-h tfh-f${s.footers ? ' mb-3' : ''}`}>
    <div class='tfh'>
      {createDefaultTable(s)}
    </div>
  </div>
)

const buildTableClasses = s => {
  const cb = new ClassBuilder()
  s.striped && cb.addClass('table-striped')
  s.bordered && cb.addClass('table-bordered')
  s.dark && cb.addClass('table-dark')
  s.hover && cb.addClass('table-hover')
  return cb.build()
}

const createDefaultTable = s => (
  <table class={`table ${buildTableClasses(s)}`}>
    <thead />
    <tbody />
    {s.footers ? <tfoot /> : ''}
  </table>
)

export const createTableNode = s => s.fixedHeight ? createFixedHeightTable(s) : createDefaultTable(s)

export const createPaginationList = s => (
  <ul class='pagination'>
    <li class={`page-item${!s.isTherePreviousPage ? ' disabled' : ''}`}>
      <a class='page-link previous-link' href='#' tabindex={!s.isTherePreviousPage ? -1 : 0}>Previous</a>
    </li>
    {s.pageIndices.map(i => (
      <li class='page-item'>
        <a class='page-link goto-link' href='#' data-page-index={i}>{i + 1}</a>
      </li>
    ))}
    <li class={`page-item${!s.isThereNextPage ? ' disabled' : ''}`}>
      <a class='page-link next-link' href='#' tabindex={!s.isThereNextPage ? -1 : 0}>Next</a>
    </li>
  </ul>
)

export const createPaginationNode = s => (
  <nav aria-label='Table pagination' class='pagination-container'>
    {createPaginationList(s)}
  </nav>
)

export const createDisplayedEntriesNode = s => (
  <div class='mb-2 w-25'>
    <span class='mr-1'>Display</span>
    <select class='form-control d-inline-block w-auto' size='1'>
      <option value='10' selected={s.size === 10}>10</option>
      <option value='25' selected={s.size === 25}>25</option>
      <option value='50' selected={s.size === 50}>50</option>
    </select>
    <span class='ml-1'>rows</span>
  </div>
)
