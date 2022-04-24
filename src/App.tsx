import "antd/dist/antd.css"
import { useTypedSelector } from "./hooks/useTypedSelector"
import { router } from "./router"
import { useEffect } from "react"
import { useAppDispatch } from "./store"
import { isAuthAC } from "./store/reducer/app"

function App() {
    const {isAuth} = useTypedSelector(state => state.app)
    const routerApp = router(isAuth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token")
        if (accessToken) {
            dispatch(isAuthAC(true))
        }
    }, [])


    return <div>
        {routerApp}
    </div>
}

export default App
