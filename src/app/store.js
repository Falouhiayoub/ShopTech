import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"
import wishlistReducer from "../features/wishlist/wishlistSlice"
import cartUIReducer from '../features/cart/cartUISlice'
import { saveCartToStorage } from "./utils/cartStorage";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        cartUI: cartUIReducer,
    },
})

store.subscribe(() => {
    const state = store.getState()
    saveCartToStorage(state.cart.items)
})