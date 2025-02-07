import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
const store = configureStore({
    reducer:{
        auth:userReducer,
    }
})
export default store;