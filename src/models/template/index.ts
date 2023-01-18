export type templateModel = {
  id: null | number | string,
  title: string
  desc: string,
  image: string,
  infoTemplate: string,
  tags: string[]
}

export type FilterTemplateModel = {
  search?: string,
  limit : number ,
  page : number
}