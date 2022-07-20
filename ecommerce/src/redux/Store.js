import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./catRedux"

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})
