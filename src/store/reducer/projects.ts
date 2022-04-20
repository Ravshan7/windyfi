import { createSlice } from "@reduxjs/toolkit"

interface AppInitialState {
    projectList: any[] | null
}

const initialState: AppInitialState = {
    projectList: null
}


const projects = createSlice({
    name: "projects",
    initialState,
    reducers: {
        projectListAC(state, action) {
            state.projectList = action.payload
        }
    }
})

export const {projectListAC} = projects.actions
export default projects.reducer