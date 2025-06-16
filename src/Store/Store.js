import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
import moviesReducer from "./MoviesSlice"
import toggleReducer from "./GptSlice"

const store = configureStore({
  reducer: {
    auth: userReducer,
    movies: moviesReducer,
    gpt: toggleReducer
  }
})
export default store;