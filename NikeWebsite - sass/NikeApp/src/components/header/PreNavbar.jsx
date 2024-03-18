import React from "react";
import "../../Styles/preNavbar.scss";
import Jordan from "../../assets/jordan-2.svg";
export default function PreNavbar() {
  return (
    <div className="pre-navbar">
      <div className="left-content">
        <img
          className="Jordan"
          src={Jordan}
          alt=""
          width="60px"
          height="30px"
        />
      </div>
      <div className="right-content">
        <div className="nav-link">
          <a href="#">Join Us</a>
        </div>
        <span>|</span>
        <div className="nav-link">
          <a href="#">Help</a>
        </div>
        <span>|</span>
        <div className="nav-link">
          <a href="#">Sign In</a>
        </div>
        <span>|</span>
        <div className="nav-link">
          <a href="#">Find a Store</a>
        </div>
      </div>
    </div>
  );
}
