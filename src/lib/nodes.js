// /** @jsx h */
// import { h } from './jsx-dom.js'
// import { getTitle } from './schema.js'
// // import { ClassBuilder } from './class-builder'
// import { createDefaultTable } from '../components/default-table'
// import { createFixedHeightTable } from '../components/fixed-height-table'

// export const createTableBodyNode = d => (
//   <tr>
//     {Object.keys(d).map(k => <td>{d[k]}</td>)}
//   </tr>
// )

// export const createEmptyTableColumnNode = d => (
//   <tr>
//     {d.map(k => <td />)}
//   </tr>
// )
//
// const createTitle = (f, k, s) => {
//   if (f) {
//     return <div>{getTitle(k, s[k])}</div>
//   } else {
//     return getTitle(k, s[k])
//   }
// }
//
// export const createTableHeadNode = (f, s, d) => (
//   <tr>
//     {d.map(k => <th>{createTitle(f, k, s)}</th>)}
//   </tr>
// )
//
// export const createTableFootNode = (f, s, d) => (
//   <tr>
//     {d.map(k => <th>{createTitle(f, k, s)}</th>)}
//   </tr>
// )

// export const createEmptyTableRowNode = (l, cls = {}, c = '') => (
//   <tr>
//     <td colspan={l} {...cls}>{c}</td>
//   </tr>
// )

// const createFixedHeightTable = s => (
//   <div class={`tfh-c tfh-h tfh-f${s.footers ? ' mb-3' : ''}`}>
//     <div class='tfh'>
//       {createDefaultTable(s)}
//     </div>
//   </div>
// )

// const buildTableClasses = s => {
//   const cb = new ClassBuilder()
//   s.striped && cb.addClass('table-striped')
//   s.bordered && cb.addClass('table-bordered')
//   s.dark && cb.addClass('table-dark')
//   s.hover && cb.addClass('table-hover')
//   return cb.build()
// }

// const createTableHead = s => s.headClassName ? <thead class={s.headClassName} /> : <thead />
//
// const createTableFoot = s => s.footClassName ? <tfoot class={s.footClassName} /> : <tfoot />
//
// const createDefaultTable = s => (
//   <table class={`table ${buildTableClasses(s)}`}>
//     {createTableHead(s)}
//     <tbody />
//     {s.footers ? createTableFoot(s) : ''}
//   </table>
// )

// export const createTableNode = s => s.fixedHeight ? createFixedHeightTable(s) : createDefaultTable(s)

// export const createPaginationList = s => (
//   <div class='row'>
//     <div class='col-sm'>
//       <div class='pagination-info mb-2'>{s.info}</div>
//     </div>
//     <div class='col-sm'>
//       <ul class='pagination mb-0 float-right'>
//         <li class={`page-item${!s.isTherePreviousPage ? ' disabled' : ''}`}>
//           <a class='page-link previous-link' href='#' tabindex={!s.isTherePreviousPage ? -1 : 0} aria-label='Previous'>Previous</a>
//         </li>
//         {s.pageIndices.map(i => (
//           <li class={`page-item${i === s.currentPageIndex ? ' active' : ''}`}>
//             <a class='page-link goto-link' href='#' data-page-index={s.pageIndex} data-goto-page-index={i}>{i + 1}</a>
//           </li>
//         ))}
//         <li class={`page-item${!s.isThereNextPage ? ' disabled' : ''}`}>
//           <a class='page-link next-link' href='#' tabindex={!s.isThereNextPage ? -1 : 0} aria-label='Next'>Next</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// )
//
// export const createPaginationNode = s => (
//   <nav aria-label='Table pagination' class='pagination-container mb-3 clearfix'>
//     {createPaginationList(s)}
//   </nav>
// )

// export const createDisplayedEntriesNode = s => (
//   <div class='mb-2 w-25'>
//     <span class='mr-1'>Display</span>
//     <select class='form-control d-inline-block w-auto' size='1'>
//       <option value='10' selected={s.pageSize === 10}>10</option>
//       <option value='25' selected={s.pageSize === 25}>25</option>
//       <option value='50' selected={s.pageSize === 50}>50</option>
//     </select>
//     <span class='ml-1'>rows</span>
//   </div>
// )
