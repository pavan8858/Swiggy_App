import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // Ensure this matches the reducer's name in cartSlice
  },
});

export default appStore;
