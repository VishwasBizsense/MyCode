import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/fetchCategories";
import styles from "../../Styles/categories.module.css";
import Product from "./Product";

export default function Categories() {
  const dispatch = useDispatch();
  const { loadingC, categories, errorC } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {categories.map((category, i) => (
          <li key={i} className={styles.category}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
