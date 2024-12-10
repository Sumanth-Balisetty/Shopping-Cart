import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from './redux/CartSlicing';

export const reactstore = configureStore({
    reducer:{
        cartnumber : CartSliceReducer
    }
}) 