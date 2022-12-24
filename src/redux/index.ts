import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


import { toDoSlice } from './features/todo/slices';



const store = configureStore({
  reducer: {
    toDo: toDoSlice.reducer
  },
  devTools: process.env.NODE_ENV === 'development',
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
