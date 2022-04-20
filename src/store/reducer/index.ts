import { combineReducers } from "@reduxjs/toolkit"
import app from "./app"
import projects from "./projects"

export const reducer = combineReducers({
    app,
    projects
})

export type RootReducer = ReturnType<typeof reducer>
