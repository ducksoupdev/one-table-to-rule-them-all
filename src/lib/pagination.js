import { createPaginationNode, createPaginationList } from './nodes'

let pg = null

function getInfo () {
  return {
    isTherePreviousPage: false,
    isThereNextPage: false,
    pageIndices: [],
    currentPageIndex: 0
  }
}

function previousClicked (e) {}

function nextClicked (e) {}

function pageClicked (e) {}

export function createPagination (store) {
  const info = getInfo(store.state)
  pg = createPaginationNode(info)
  const pl = pg.querySelector('previous-link')
  const nl = pg.querySelector('next-link')
  const gl = pg.querySelectorAll('goto-link')
  if (info.isTherePreviousPage) {
    pl.addEventListener('click', previousClicked)
  }
  if (info.isThereNextPage) {
    nl.addEventListener('click', nextClicked)
  }
  gl.forEach(l => l.addEventListener('click', pageClicked))
  return pg
}

export function updatePagination (store) {
  const info = getInfo(store.state)
  const pl = createPaginationList(info)
  pg.textContent = ''
  pg.appendChild(pl)
}
