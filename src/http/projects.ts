import { AppDispatch } from "../store"
import { $api } from "./index"
import { alert } from "../utils/notification"
import { projectListAC } from "../store/reducer/projects"

export const getProjectsApi = () => async (dispatch: AppDispatch) =>{
    try {
        const {data} = await $api.get("v1/project")
        dispatch(projectListAC(data))
    } catch (e) {
        console.log(e);
        alert("Wrong username or password!", "error")
    }
}
