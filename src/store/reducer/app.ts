import { createSlice } from "@reduxjs/toolkit"

interface AppInitialState {
    isAuth: boolean
}

const initialState: AppInitialState = {
    isAuth: false
}


const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        isAuthAC(state, action) {
            state.isAuth = action.payload
        }
    }
})

export const {isAuthAC} = app.actions
export default app.reducer