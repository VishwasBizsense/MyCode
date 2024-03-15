import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loadingC: true,
  errorC: null,
  categories: [],
};

//creating action creator using thunk to fetch categories from fakestore api .
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    console.log("All categories", response.data);
    return response.data;
  }
);

//a slice of the Redux store that contains reducers handling the fetched data.
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loadingC = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loadingC = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loadingC = false;
        state.errorC = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
