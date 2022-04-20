import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer"
import { useDispatch } from 'react-redux'

const store = configureStore({
    reducer,
    devTools: true
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
