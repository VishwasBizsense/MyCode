import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/fetchCategories";
import styles from "../../Styles/categories.module.css";
import { NavLink } from 'react-router-dom';
import Error from "./Error";
import load from '../../assets/1486.gif'

export default function Categories() {
  const dispatch = useDispatch();
  const { loadingC, categories, errorC } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingC) {
    return <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={load}
        alt="Loading..."
        style={{ width: "50px", height: "50px" }} // Adjust width and height as needed
      />
    </div>
  };

  errorC ? <Error message={errorC.message} /> : "";
  return (<>
    <div>
      <ul>
        {categories.map((category, i) => (
          <li key={i} className={styles.category}>
            <NavLink to={`/${category}`} className={({ isActive }) => `${isActive ? styles.active : styles.inActive}`}>
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </div></>
  );
}
