import { render } from './render.js'

export function initPagination (state) {
  const ps = document.querySelectorAll('select[name=pagination]')
  ps.forEach(s => {
    s.addEventListener('change', e => {
      state.size = Number(e.target.value)
      render(state)
      updatePagination(state.size)
    })
  })
  updatePagination(state.size)
}

export function updatePagination (size) {
  // TODO: save page size - cookie, local storage etc
  const ps = document.querySelectorAll('select[name=pagination]')
  ps.forEach(s => {
    s.value = String(size)
  })
}
