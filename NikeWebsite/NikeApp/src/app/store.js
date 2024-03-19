import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/fetchProducts.js";
import categoriesReducer from "../features/fetchCategories.js";
import categoricalProducts from "../features/fetchCategoricalProducts.js"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    categoricalProducts: categoricalProducts,
  },
});
