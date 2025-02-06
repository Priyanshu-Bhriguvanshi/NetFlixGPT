import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name: "auth",
    initialState:{
        userData:null,
        authentic :false
    },
    reducers:{
        login:(state,action)=>{
            state.userData= action.payload
            state.authentic= true
        },
        logout:(state)=>{
           state.userData = null
           state.authentic= false
        }
    }

})
export const {login, logout} = userSlice.actions
export default  userSlice.reducer