import { createSlice } from '@reduxjs/toolkit'
import { templateModel } from '@models/template'
type TemplateState = {
  templateList: Array<templateModel>,
  template: templateModel
}


const initialState: TemplateState = {
  templateList: [],
  template: {
    id: null,
    title: "",
    desc: "",
    image: "",
    infoTemplate: "",
    tags: []
  },
}

export const templateSlice = createSlice({
  initialState,
  name: 'templateSlice',
  reducers: {

  }
})

export default templateSlice.reducer

export const { } = templateSlice.actions
