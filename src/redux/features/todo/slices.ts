import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type toDo = {
  id: null | number,
  name: string
  status: "slacking" | "done",
  level: number
}

type TodoState = {
  todoList: Array<toDo>,
  todo: toDo

}


const initialState: TodoState = {
  todoList: [],
  todo: {
    id: null,
    name: "",
    status: "slacking",
    level: 1
  },
}

export const toDoSlice = createSlice({
  initialState,
  name: 'toDoSlice',
  reducers: {
    addToDo: (state, { payload }: PayloadAction<toDo>) => {

    }
  }
})

export default toDoSlice.reducer

export const { addToDo } = toDoSlice.actions
