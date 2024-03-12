import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/productSlice";
export const store = configureStore({ reducer: reducer });
