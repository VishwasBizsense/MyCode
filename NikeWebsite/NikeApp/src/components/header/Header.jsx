import React from "react";
import styles from "../../Styles/header.module.css";
import NikeLogo from "../../assets/nike-logo.svg";
import PreNavbar from "./PreNavbar";
import bag from "../../assets/bag.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <PreNavbar />
      <div className={styles.containerNav}>
        <div className={styles.logo}>
          <a href="">
            <span>
              <img src={NikeLogo} alt="Nike logo" width="60px" height="30px" />
            </span>
          </a>
        </div>
        <div className={styles.navMenu}>
          <ul>
            <li>
              <a href="">New & Featured</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">Kids</a>
            </li>
            <li>
              <a href="">Sale</a>
            </li>
          </ul>
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
            <img src={heart} alt="Favorites" />
          </div>
          <div className={styles.bagItems}>
            <img src={bag} alt="Shopping Bag" />
          </div>
        </div>
      </div>
    </div>
  );
}
