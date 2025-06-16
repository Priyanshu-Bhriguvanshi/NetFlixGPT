import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptactive: false,
        movies:null
    },
    reducers: {
        toggleGpt: (state) => {
            state.gptactive = !state.gptactive;
        },
        addMovies:(state,action)=>{
            state.movies = action.payload
        }
    },
});

export const { toggleGpt,addMovies } = GptSlice.actions;
export default GptSlice.reducer;
