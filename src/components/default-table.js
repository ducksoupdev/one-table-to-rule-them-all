/** @jsx h */
import { h } from '../lib/jsx-dom.js'
import { ClassBuilder } from '../lib/class-builder'

const buildTableClasses = s => {
  const cb = new ClassBuilder()
  s.striped && cb.addClass('table-striped')
  s.bordered && cb.addClass('table-bordered')
  s.dark && cb.addClass('table-dark')
  s.hover && cb.addClass('table-hover')
  return cb.build()
}

const TableHead = s => s.headClassName ? <thead class={s.headClassName} /> : <thead />

const TableFoot = s => s.footClassName ? <tfoot class={s.footClassName} /> : <tfoot />

export const DefaultTable = s => (
  <table class={`table ${buildTableClasses(s)}`}>
    {TableHead(s)}
    <tbody />
    {s.footers ? TableFoot(s) : ''}
  </table>
)
