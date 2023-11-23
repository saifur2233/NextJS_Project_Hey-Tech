import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.products[existingIndex].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },
    removeOne: (state, action) => {
      const existingIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (existingIndex !== -1 && state.products[existingIndex].quantity > 1) {
        state.products[existingIndex].quantity -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }

      state.total -= action.payload.price;
    },
    removeFromCart: (state, action) => {
      const removedProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (removedProduct) {
        state.total -= removedProduct.price * removedProduct.quantity;
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
