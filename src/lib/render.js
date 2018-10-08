import { createTableHeadNode, createTableNode, createPaginationNode, createTableFootNode } from './nodes.js'

let tableRendered = false
let headRendered = false
let footRendered = false

function renderHead (element, state) {
  const thead = element.querySelector('thead')
  if (thead) {
    thead.textContent = ''
    thead.appendChild(createTableHeadNode(state.schema.properties, Object.keys(state.data[0])))
    headRendered = true
  }
}

function renderFoot (element, state) {
  const tfoot = element.querySelector('tfoot')
  if (tfoot) {
    tfoot.textContent = ''
    tfoot.appendChild(createTableFootNode(state, Object.keys(state.data[0]).length))
    footRendered = true
  }
}

function renderTable (element, state) {
  const tn = createTableNode(state)
  element.textContent = ''
  element.appendChild(tn)
  tableRendered = true
}

function renderBody (element, state) {
  if (Array.isArray(state.data)) {
    const pd = state.data.slice(state.start, state.size).map(p => state.pr[p.id])
    const tbody = element.querySelector('tbody')
    tbody.textContent = ''
    pd.forEach(d => tbody.appendChild(d))
  }
}

function renderPagination (element, state) {
  const pg = createPaginationNode(state)
  const pgc = element.querySelector('tfoot > nav')
  const tfoot = element.querySelector('tfoot > tr > td')
  if (pgc) {
    pgc.remove()
  }
  tfoot.appendChild(pg)
}

export function render (element, state) {
  console.time('render')

  if (!tableRendered) {
    renderTable(element, state)
  }

  if (!headRendered) {
    renderHead(element, state)
  }

  if (!footRendered) {
    renderFoot(element, state)
  }

  renderBody(element, state)
  renderPagination(element, state)

  console.timeEnd('render')
}
