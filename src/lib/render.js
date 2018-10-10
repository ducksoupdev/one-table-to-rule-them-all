import {
  createTableHeadNode,
  createTableNode,
  createPaginationNode,
  createEmptyTableRowNode,
  createDisplayedEntriesNode, createTableFootNode
} from './nodes'

function renderHead (element, store) {
  if (store.state.headers) {
    const thead = element.querySelector('thead')
    if (thead) {
      thead.textContent = ''
      thead.appendChild(createTableHeadNode(store.state.fixedHeight, store.state.schema.properties, Object.keys(store.state.schema.properties)))
      renderDisplayEntries(element, store)
      store.setState({ headRendered: true }, false)
    }
  }
}

function renderFoot (element, store) {
  if (store.state.footers) {
    const tfoot = element.querySelector('tfoot')
    if (tfoot) {
      tfoot.textContent = ''
      tfoot.appendChild(createTableFootNode(store.state.fixedHeight, store.state.schema.properties, Object.keys(store.state.schema.properties)))
      store.setState({ footRendered: true }, false)
    }
  }
}

function renderTable (element, store) {
  const tn = createTableNode(store.state)
  element.textContent = ''
  element.appendChild(tn)
  store.setState({ tableRendered: true }, false)
}

function renderBody (element, store) {
  const tbody = element.querySelector('tbody')
  if (store.state.rows && Array.isArray(store.state.rows)) {
    const pd = store.state.rows.slice(store.state.start, store.state.size).map(p => store.state.pr[p.id])
    tbody.textContent = ''
    pd.forEach(d => tbody.appendChild(d))
  } else {
    tbody.textContent = ''
    tbody.appendChild(createEmptyTableRowNode(Object.keys(store.state.schema.properties).length, { class: 'text-center' }, 'Loading...'))
  }
}

function renderPagination (element, store) {
  if (store.state.rows && store.state.rows.length > store.state.size) {
    const epg = element.querySelector('nav.pagination-container')
    if (epg) {
      epg.remove()
    }
    const pg = createPaginationNode(store.state)
    element.appendChild(pg)
    store.setState({ paginationRendered: true }, false)
  }
}

function renderDisplayEntries (element, store) {
  if (store.state.displayedEntries || (store.state.rows && store.state.rows.length > 50)) {
    const de = createDisplayedEntriesNode(store.state)
    const select = de.querySelector('select')
    select.addEventListener('change', e => {
      store.setState({
        size: Number(e.target.value),
        paginationRendered: false
      })
    })
    element.insertBefore(de, element.firstChild)
    store.setState({ displayedEntriesRendered: true }, false)
  }
}

export function render (element, store) {
  console.time('render')

  if (!store.state.tableRendered) {
    renderTable(element, store)
  }

  if (!store.state.headRendered) {
    renderHead(element, store)
  }

  if (!store.state.displayedEntriesRendered) {
    renderDisplayEntries(element, store)
  }

  if (!store.state.footRendered) {
    renderFoot(element, store)
  }

  if (!store.state.paginationRendered) {
    renderPagination(element, store)
  }

  renderBody(element, store)

  console.timeEnd('render')
}
