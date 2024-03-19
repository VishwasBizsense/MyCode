import React from "react";
import styles from "../../Styles/header.module.css";
import NikeLogo from "../../assets/nike-logo.svg";
import PreNavbar from "./PreNavbar";
import bag from "../../assets/bag.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import Categories from "./Categories";
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <PreNavbar />
      <div className={styles.containerNav}>
        <div className={styles.logo}>
          <Link to="/">
            <span>
              <img src={NikeLogo} alt="Nike logo" width="60px" height="30px" />
            </span>
          </Link>
        </div>
        <div className={styles.navMenu}>
          <Categories />
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchButtonDiv}>
            <button className={styles.searchButton}>
              <img src={search} alt="" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Search Nike.com"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.favBag}>
          <div className={styles.favorites}>
            <NavLink to="/favorite">
              <img src={heart} alt="Favorites" />
            </NavLink>
          </div>
          <div className={styles.bagItems}>
            <NavLink to="/cart">
              <img src={bag} alt="Shopping Bag" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
