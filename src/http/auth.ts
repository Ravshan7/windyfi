import { $api } from "./index"
import { isAuthAC } from "../store/reducer/app"
import { alert } from "../utils/notification"
import { AppDispatch } from "../store"



export const loginApi = (payload: any) => async (dispatch: AppDispatch) =>{
    try {
        const urlencoded = new URLSearchParams();
        for (let el in payload) {
            urlencoded.append(el, payload[el]);
        }
        const {data} = await $api.post("v1/auth/login", urlencoded, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        localStorage.setItem('access_token', data.access_token)
        dispatch(isAuthAC(true))
    } catch (e) {
        console.log(e);
        alert("Wrong username or password!", "error")
    }
}


export const registrationApi = (payload: any) => async (dispatch: AppDispatch) => {
    try {
        const {data} = await $api.post("v1/auth/registration", payload)
        console.log(data)
        dispatch(loginApi({
            username: payload.email,
            password: payload.password1
        }))
    } catch (e) {
        console.log(e);
        alert("Wrong username or password!", "error")
    }
}