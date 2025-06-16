import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailor:null,
        popularMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailor:(state, action)=>{
            state.movieTrailor = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies= action.payload
        }
    }
})
export const {addNowPlayingMovies,addMovieTrailor, addPopularMovies } = MoviesSlice.actions
export default MoviesSlice.reducer