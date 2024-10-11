import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // dispatcher: function
        // here dispatcher is addItem written on the left side and function(reducer) is on the right side
        addItem:(state,action)=>{
            //modifying state based on action
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            return {items:[]}
        }
    }
})
 

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer