import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../Layout.jsx";
import HomePage from "./components/header/HomePage.jsx";
import ProductByCategory from "./components/header/ProductByCategories.jsx";
import Favorite from "./components/header/Favorite.jsx";
import Cart from "./components/header/Cart.jsx";
import IndividualProduct from "./components/header/IndividualProduct.jsx";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<HomePage />} />
      <Route path="electronics" element={<ProductByCategory category="electronics" title='Electronics' />} />
      <Route path="jewelery" element={<ProductByCategory category="jewelery" title="Men's Clothing" />} />
      <Route path="men's clothing" element={<ProductByCategory category="men's clothing" title="Women's Clothing" />} />
      <Route path="women's clothing" element={<ProductByCategory category="women's clothing" title="Women's Clothing" />} />
      <Route path="favorite" element={<Favorite />} />
      <Route path="cart" element={<Cart />} />
      <Route path="individual" element={<IndividualProduct />} />

    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
