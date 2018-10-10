import { generateId } from './hydrate'
import { createTableBodyNode } from './nodes'

export class Store {
  constructor (state) {
    this.state = {
      striped: false,
      dark: false,
      bordered: false,
      hover: false,
      fixedHeight: false,
      headers: true,
      footers: false,
      displayedEntries: false,
      page: 1,
      size: 50,
      pr: null,
      rows: null,
      tableRendered: false,
      headRendered: false,
      footRendered: false,
      paginationRendered: false,
      displayedEntriesRendered: false
    }
    this.observers = []
    Object.assign(this.state, state)
    if (state.data && typeof state.data === 'object') {
      this.createNodes(state.data)
    }
  }

  registerObserver (observer) {
    this.observers.push(observer)
  }

  setState (state, notify = true) {
    Object.assign(this.state, state)
    if (state.data && typeof state.data === 'object') {
      this.createNodes(state.data)
    }
    if (notify) {
      this.notifyObservers()
    }
  }

  notifyObservers () {
    this.observers.forEach(o => o.update(this))
  }

  createNodes (data) {
    this.state.pr = {}
    this.state.rows = []
    if (data.rows.length > this.state.size && data.rows.length < 50) {
      this.state.size = data.rows.length
    }
    for (let i = 0; i < data.rows.length; i++) {
      const item = data.rows[i]
      const id = generateId()
      const vd = {
        id,
        data: item
      }
      this.state.rows.push(vd)
      this.state.pr[vd.id] = createTableBodyNode(item)
    }
  }
}