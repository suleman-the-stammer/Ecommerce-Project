// - this store will hold all the application state
// - created for redux purpose
// - for every different portion we will create different slice like for authontication we create auth slide 
//    * for admin side we create different slice 
// - we combine all the slice into One Slice to create global reducers
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice/index'

const store = configureStore({
    // This will be our Global reducer in which all reducer from different Slices are imported
    reducer:{
        auth: authReducer, 
    }
})

export default store