import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";

const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        itemsInCart:<Product[]>[]
    },
    reducers: {
        setItemsInCart (state, action)  {
            state.itemsInCart.push(action.payload)
        },
        deleteItemsFromCart (state, action) {
            state.itemsInCart.filter(item=>item.id !==action.payload)
        }
    }
})

export const {setItemsInCart, deleteItemsFromCart} = cartSlice.actions
export default cartSlice.reducer