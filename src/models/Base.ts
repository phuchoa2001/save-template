/**
 * Base
 * Use to storeage options values
 */
export type ScalableModel = {
  [propName: string | number]: any
}

/**
 * Catgegory entity
 * Use to storeage options values
 */
export type Category = {
  id: string | number
  name: string
}

export type Entity = Category & {
  content: string
  active: boolean
}

export type RouterParams = { id: string }

export type ValueChanged = {
  name: string
  value: string | number | boolean | Category
}

export interface BaseFilterRequest<T> {
  filter?: T
  skip?: number
  limit?: number
  startDate?: string
  endDate?: string
  searchText?: string
  order?: {
    key: string
    value: 'desc' | 'asc'
  }
}

export interface BaseFilterStateModel<T> {
  data?: T
  currentPage: number
  dateString?: string
  searchText?: string
}

export interface BaseSelectOption {
  value: string | number
  label: string
}
