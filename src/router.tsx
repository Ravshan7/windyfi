import { Auth } from "./pages/Auth/Auth"
import Dashboard from "./pages/Dashboard/Dashboard"

export const router = (isAuth: boolean) => {
    if (!isAuth) {
        return <Auth />
    } else {
        return <Dashboard />
    }
}