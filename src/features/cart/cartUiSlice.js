import { createSlice } from "@reduxjs/toolkit";

const cartUISlice = createSlice ({
    name: "carteUI",
    initialState: {
        isOpen: false,
    },
    reducers: {
        openCart(state) {
            state.isOpen = true
        },

        closeCart(state) {
            state.isOpen = false
        },

        toggleCart(state) {
            state.isOpen = !state.isOpen
        }
    }
})

export const {openCart, closeCart, toggleCart} = cartUISlice.actions
export default cartUISlice.reducer