import { createPagination, updatePagination } from './pagination'
import {
  DisplayedEntries,
  EmptyTableRow,
  FootRow,
  HeadRow,
  Table
} from '../components'

function renderHead (element, store) {
  if (store.state.headers) {
    const thead = element.querySelector('thead')
    if (thead) {
      thead.textContent = ''
      thead.appendChild(HeadRow(store.state.fixedHeight, store.state.schema.properties, Object.keys(store.state.schema.properties)))
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
      tfoot.appendChild(FootRow(store.state.fixedHeight, store.state.schema.properties, Object.keys(store.state.schema.properties)))
      store.setState({ footRendered: true }, false)
    }
  }
}

function renderTable (element, store) {
  const tn = Table(store.state)
  element.textContent = ''
  element.appendChild(tn)
  store.setState({ tableRendered: true }, false)
}

function renderBody (element, store) {
  const tbody = element.querySelector('tbody')
  if (store.state.rows && Array.isArray(store.state.rows)) {
    const start = store.state.pageIndex === 0 ? 0 : store.state.pageIndex * store.state.pageSize
    const end = Math.min(store.state.rows.length, (store.state.pageIndex + 1) * store.state.pageSize)
    const pd = store.state.rows.slice(start, end).map(p => store.state.pr[p.id])
    tbody.textContent = ''
    pd.forEach(d => tbody.appendChild(d))
  } else {
    tbody.textContent = ''
    tbody.appendChild(EmptyTableRow(Object.keys(store.state.schema.properties).length, { class: 'text-center' }, 'Loading...'))
  }
}

function renderPagination (element, store) {
  if (store.state.rows && store.state.rows.length > store.state.pageSize) {
    if (!store.state.paginationRendered) {
      const pg = createPagination(store)
      element.appendChild(pg)
      store.setState({ paginationRendered: true }, false)
    } else {
      updatePagination(store)
    }
  }
}

function renderDisplayEntries (element, store) {
  if (store.state.displayedEntries || (store.state.rows && store.state.rows.length > 50)) {
    const de = DisplayedEntries(store.state)
    const select = de.querySelector('select')
    select.addEventListener('change', e => {
      store.setState({
        pageSize: Number(e.target.value),
        pageIndex: 0
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

  renderPagination(element, store)
  renderBody(element, store)

  console.timeEnd('render')
}
