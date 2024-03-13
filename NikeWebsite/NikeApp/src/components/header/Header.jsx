import React from "react";
import styles from "./header.module.css";
import NikeLogo from "../../assets/nike-logo.svg";
import PreNavbar from "./PreNavbar";

export default function Header() {
  return (
    <>
      <PreNavbar />
      <div className={styles.containerNav}>
        <div className={styles.logo}>
          <a href="">
            <span>
              <img src={NikeLogo} alt="" width="60px" height="30px" />
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
              <i className="fa fa-search"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search Nike.com"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.favorites}></div>
        <div className={styles.bagItems}></div>
      </div>
    </>
  );
}
