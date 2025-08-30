import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // example like "burger" and "pizza"
  },
  reducers: {
    addItem: (state, action) => {

      //Vanilla(older version) Redux => DON'T MUTATE STATE , returning was mandatory 
      // const newState = [...state]
      // newState.items.push(action.payload)
      // return newState;

      // Redux Toolkit(new version) uses immer BTS
      // We have to mutate the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
