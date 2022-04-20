import {TypedUseSelectorHook, useSelector} from "react-redux";
import { RootReducer } from "../store/reducer"

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector