import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import cartReducer from "./features/cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
