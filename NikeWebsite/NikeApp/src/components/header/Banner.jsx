import React from "react";
import styles from "../../Styles/banner.module.css";
import banner from "../../assets/bannerimage.jpg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className={styles.bannerDiv}>
      <div className={styles.bannerImage}>
        <img src={banner} alt="Nike Banner" />
      </div>
      <div className={styles.bannerText}>
        <p>Coming Soon</p>
        <h3>NIKE AIR MAX</h3>
        <p>The next generation shoes of Nike are soon gonna be yours.</p>
        <Link to="/notify">Get Notified</Link>
      </div>
    </div>
  );
}
