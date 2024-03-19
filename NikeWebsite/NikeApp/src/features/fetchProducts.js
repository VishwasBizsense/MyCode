import { useState } from 'react';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: true,
  allProducts: [],
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log("All Products", response.data);
    return response.data.map((product) => ({
      ...product,
      isInCart: false,
      isInFavorite: false,
    }));
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleIsInCart: (state, action) => {
      const { id } = action.payload;
      const product = state.allProducts.find((product) => product.id === id);
      if (product) {
        product.isInCart = !product.isInCart;
      }
    },
    toggleIsInFavorite: (state, action) => {
      const { id } = action.payload;
      const product = state.allProducts.find((product) => product.id === id);
      if (product) {
        product.isInFavorite = !product.isInFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleIsInCart, toggleIsInFavorite } = productsSlice.actions;

export default productsSlice.reducer;