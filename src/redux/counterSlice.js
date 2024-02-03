import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers:{
        ADD: (state, action)=>{
            state.counter += 1
        },
        SUB: (state, action)=>{
            state.counter -= 1
        },
    }
}) 

export const {ADD, SUB} = counterSlice.actions
export default counterSlice.reducer