import { initTable } from './lib/table.js'
import { render } from './lib/render.js'
import { validateOptions } from './lib/schema.js'

export function mosaicTable (options = {}) {
  const defaultOptions = {
    inElement: null,
    enableHover: true,
    data: null
  }

  // validate passed options
  validateOptions(options)

  // override local vars
  Object.assign(defaultOptions, options)

  let element = defaultOptions.inElement

  if (typeof defaultOptions.inElement === 'string') {
    element = document.querySelector(defaultOptions.inElement)
  }

  const table = initTable(defaultOptions)

  render(element, table)
}

window._moduleLoaded = true
window.mosaic = window.mosaic || {}
window.mosaic.table = mosaicTable
