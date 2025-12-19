import { createSlice } from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        toggleWishlist(state, action) {
            const exist = state.find(i => i.id === action.payload.id)
            if(exist){
                return state.filter(i => i.id !== action.payload.id)
            }
            state.push(action.payload)
        }
    }
})

export const {toggleWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer