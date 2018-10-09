import {
  createTableHeadNode,
  createTableNode,
  createPaginationNode,
  createTableEmptyRowNode,
  createDisplayedEntriesNode
} from './nodes'

let tableRendered = false
let headRendered = false
let footRendered = false

function renderHead (element, store) {
  const thead = element.querySelector('thead')
  if (thead) {
    thead.textContent = ''
    thead.appendChild(createTableHeadNode(store.state.schema.properties, Object.keys(store.state.schema.properties)))
    renderDisplayEntries(element, store)
    headRendered = true
  }
}

function renderFoot (element, store) {
  const tfoot = element.querySelector('tfoot')
  if (tfoot) {
    tfoot.textContent = ''
    tfoot.appendChild(createTableEmptyRowNode(Object.keys(store.state.schema.properties).length))
    footRendered = true
  }
}

function renderTable (element, store) {
  const tn = createTableNode(store.state)
  element.textContent = ''
  element.appendChild(tn)
  tableRendered = true
}

function renderBody (element, store) {
  const tbody = element.querySelector('tbody')
  if (store.state.rows && Array.isArray(store.state.rows)) {
    const pd = store.state.rows.slice(store.state.start, store.state.size).map(p => store.state.pr[p.id])
    tbody.textContent = ''
    pd.forEach(d => tbody.appendChild(d))
  } else {
    tbody.textContent = ''
    tbody.appendChild(createTableEmptyRowNode(Object.keys(store.state.schema.properties).length, { class: 'text-center' }, 'Loading...'))
  }
}

function renderPagination (element, store) {
  if (store.state.rows && store.state.rows.length > store.state.size) {
    const pg = createPaginationNode(store.state)
    const pgc = element.querySelector('tfoot > nav')
    const tfoot = element.querySelector('tfoot > tr > td')
    if (pgc) {
      pgc.remove()
    }
    tfoot.appendChild(pg)
  }
}

function renderDisplayEntries (element, store) {
  const de = createDisplayedEntriesNode(store.state)
  const select = de.querySelector('select')
  select.addEventListener('change', e => {
    store.setState({
      size: Number(e.target.value)
    })
  })
  element.insertBefore(de, element.firstChild)
}

export function render (element, store) {
  console.time('render')

  if (!tableRendered) {
    renderTable(element, store)
  }

  if (!headRendered) {
    renderHead(element, store)
  }

  if (!footRendered) {
    renderFoot(element, store)
  }

  renderBody(element, store)
  renderPagination(element, store)

  console.timeEnd('render')
}
