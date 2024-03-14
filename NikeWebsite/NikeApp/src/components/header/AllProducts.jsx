import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/fetchProducts";
import Product from "./Product";
import styles from "../../Styles/allProducts.module.css";

export default function AllProducts() {
  const dispatch = useDispatch();
  const { loading, allProducts, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("All products", allProducts);

  return (
    <div className={StyleSheet.allProducts}>
      {allProducts.map(() => {})}
      <Product />
    </div>
  );
}
