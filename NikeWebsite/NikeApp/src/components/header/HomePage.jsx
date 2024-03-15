import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/fetchProducts";
import Product from "./Product";
import "../../Styles/homepage.css";
import MVPProducts from "./MVPProducts";
import SaleProducts from "./SaleProducts";
import AllProducts from "./AllProducts";

export default function HomePage() {
  const dispatch = useDispatch();
  const { loading, allProducts, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <MVPProducts allProducts={allProducts} title="Our MVP Products" />
      <SaleProducts
        allProducts={allProducts}
        discount={10}
        title="Flat 10% Off"
      />
      <AllProducts allProducts={allProducts} title="All Products" />
    </div>
  );
}
