import { FixedHeightTable } from './fixed-height-table'
import { DefaultTable } from './default-table'

export const Table = s => s.fixedHeight ? FixedHeightTable(s) : DefaultTable(s)
