import { createHeadNode, createTableNode } from './nodes.js'

let tableRendered = false
let headRendered = false

function renderHead (element, state) {
  const thead = element.querySelector('thead')
  if (thead) {
    thead.textContent = ''
    thead.appendChild(createHeadNode(state.schema.properties, Object.keys(state.data[0])))
    headRendered = true
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

export function render (element, state) {
  console.time('render')

  if (!tableRendered) {
    renderTable(element, state)
  }

  if (!headRendered) {
    renderHead(element, state)
  }

  renderBody(element, state)

  console.timeEnd('render')
}
