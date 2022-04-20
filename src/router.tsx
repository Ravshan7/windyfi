import { Auth } from "./pages/Auth/Auth"
import Landing from "./views/Landing"

export const router = (isAuth: boolean) => {
    if (!isAuth) {
        return <Auth />
    } else {
        return <Landing />
    }
}