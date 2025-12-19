import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"
import wishlistReducer from "../features/wishlist/wishlistSlice"
import cartUIReducer from '../features/cart/cartUiSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        cartUI: cartUIReducer,
    },
})