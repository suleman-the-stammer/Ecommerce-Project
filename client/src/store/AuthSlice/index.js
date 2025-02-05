// our parent directory name is unique so that's way we set its name to index.js otherwise if this file is outside of directory then we write its name to AuthSlice.js like that. I think you will understand the concept.


import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
    setUser: (state , action) =>{ },
    }
})

export const {setUser} = authSlice.actions;
export default authSlice.reducer