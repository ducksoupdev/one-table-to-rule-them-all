/** @jsx h */
import { h } from '../lib/jsx-dom.js'

export const PaginationList = s => (
  <div class='row'>
    <div class='col-sm'>
      <div class='pagination-info mb-2'>{s.info}</div>
    </div>
    <div class='col-sm'>
      <ul class='pagination mb-0 float-right'>
        <li class={`page-item${!s.isTherePreviousPage ? ' disabled' : ''}`}>
          <a class='page-link previous-link' href='#' tabindex={!s.isTherePreviousPage ? -1 : 0} aria-label='Previous'>Previous</a>
        </li>
        {s.pageIndices.map(i => (
          <li class={`page-item${i === s.currentPageIndex ? ' active' : ''}`}>
            <a class='page-link goto-link' href='#' data-page-index={s.pageIndex} data-goto-page-index={i}>{i + 1}</a>
          </li>
        ))}
        <li class={`page-item${!s.isThereNextPage ? ' disabled' : ''}`}>
          <a class='page-link next-link' href='#' tabindex={!s.isThereNextPage ? -1 : 0} aria-label='Next'>Next</a>
        </li>
      </ul>
    </div>
  </div>
)

export const Pagination = s => (
  <nav aria-label='Table pagination' class='pagination-container mb-3 clearfix'>
    {PaginationList(s)}
  </nav>
)
