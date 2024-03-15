import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loadingPc: true,
  categoricalProducts: [],
  errorPc: null,
};

//creating action creator using thunk to fetch products from fakestore api .

export const fetchCategoricalProducts = createAsyncThunk(
  "products/fetchCategoricalProducts",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    console.log("Electronics ", response.data);
    return response.data;
  }
);

//a slice of the Redux store that contains reducers handling the fetched data.
const productsSlice = createSlice({
  name: "categoricalProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoricalProducts.pending, (state) => {
        state.loadingPc = true;
      })
      .addCase(fetchCategoricalProducts.fulfilled, (state, action) => {
        state.loadingPc = false;
        state.categoricalProductsw = action.payload;
      })
      .addCase(fetchCategoricalProducts.rejected, (state, action) => {
        state.loadingPc = false;
        state.errorPc = action.error.message;
      });
  },
});

export default productsSlice.reducer;
