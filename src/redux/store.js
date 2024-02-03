import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"

const store = configureStore({
    reducer:{
        countMan: counterSlice
    }
})

export default store

