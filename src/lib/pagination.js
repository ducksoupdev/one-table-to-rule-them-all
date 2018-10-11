import { PaginationList, Pagination } from '../components'

let pg = null
let store = null

function getPaginationState (state) {
  return {
    info: getInfo(state.pageSize, state.pageIndex, state.rows.length),
    pageIndex: state.pageIndex,
    isTherePreviousPage: isTherePreviousPage(),
    isThereNextPage: isThereNextPage(),
    pageIndices: getPageIndices(state.firstVisiblePageIndex, state.rows.length, state.visiblePageCount),
    currentPageIndex: state.pageIndex
  }
}

function getInfo (pageSize, pageIndex, totalCount) {
  const i = {
    firstOnPage: totalCount === 0
      ? 0
      : pageIndex * pageSize + 1,
    lastOnPage: Math.min(totalCount, (pageIndex + 1) * pageSize),
    total: totalCount
  }
  return `Showing entries ${i.firstOnPage}-${i.lastOnPage} of ${i.total}`
}

function isTherePreviousPage () {
  return store.state.pageIndex > 0
}

function isThereNextPage () {
  return store.state.pageIndex + 1 < getPageCount(store.state.rows.length, store.state.pageSize)
}

function getPageCount (totalCount, pageSize) {
  return Math.floor(totalCount / pageSize) + Math.sign(totalCount % pageSize)
}

function getPageIndices (firstVisiblePageIndex, totalPageCount, visiblePageCount) {
  const result = []
  for (let i = firstVisiblePageIndex; i < totalPageCount; i++) {
    result.push(i)
    if (result.length >= visiblePageCount) {
      break
    }
  }
  return result
}

function previousClicked () {
  isTherePreviousPage() && setPageIndex(store.state.pageIndex - 1)
}

function nextClicked () {
  isThereNextPage() && setPageIndex(store.state.pageIndex + 1)
}

function pageClicked (e) {
  const cpi = Number(e.target.dataset.pageIndex)
  const pageIndex = Number(e.target.dataset.gotoPageIndex)
  if (pageIndex !== cpi) {
    setPageIndex(pageIndex)
  }
}

function setPageIndex (pageIndex) {
  // Make sure that the new page index is within the visible page range
  let firstVisiblePageIndex = store.state.firstVisiblePageIndex
  if (pageIndex < firstVisiblePageIndex) {
    firstVisiblePageIndex = pageIndex
  }
  if (pageIndex >= firstVisiblePageIndex + store.state.visiblePageCount) {
    firstVisiblePageIndex = Math.max(pageIndex - store.state.visiblePageCount + 1, 0)
  }

  store.setState({
    pageIndex,
    firstVisiblePageIndex
  })
}

function setupEventHandlers (element, state) {
  const pl = element.querySelector('.previous-link')
  const nl = element.querySelector('.next-link')
  const gl = element.querySelectorAll('.goto-link')
  if (state.isTherePreviousPage) {
    pl.addEventListener('click', previousClicked)
  }
  if (state.isThereNextPage) {
    nl.addEventListener('click', nextClicked)
  }
  gl.forEach(l => l.addEventListener('click', pageClicked))
}

export function createPagination (storeRef) {
  store = storeRef
  const state = getPaginationState(store.state)
  pg = Pagination(state)
  setupEventHandlers(pg, state)
  return pg
}

export function updatePagination (store) {
  const state = getPaginationState(store.state)
  const pl = PaginationList(state)
  setupEventHandlers(pl, state)
  pg.textContent = ''
  pg.appendChild(pl)
}
