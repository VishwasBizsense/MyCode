import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/fetchProducts.js";
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
