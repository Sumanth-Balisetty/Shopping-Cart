import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : 'cartnumber',
    initialState: {
        value : 0
    },
    reducers:{
        increment:(state)=>{
            state.value = state.value+1
        }
    }
}
)
export const {increment} = CartSlice.actions
export default CartSlice.reducer