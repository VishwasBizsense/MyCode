import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loadingProduct: false,
  productDetails: {},
  errorProduct: null,
};

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    console.log("Individual Product Details", response.data);
    return response.data;
  }
);

const productDetailsSlice = createSlice({
  name: "products/productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loadingProduct = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loadingProduct = false;
        state.productDetails = action.payload;
        console.log("payload data", action.payload);
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loadingProduct = false;
        state.errorProduct = action.error.message;
      });
  },
});

export default productDetailsSlice.reducer;
