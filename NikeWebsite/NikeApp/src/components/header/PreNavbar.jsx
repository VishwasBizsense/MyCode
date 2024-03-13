import React from "react";
import "./preNavbar.module.css";
import Jordan from "../../assets/jordan-2.svg";
export default function PreNavbar() {
  return (
    <div className="pre-navbar">
      <div className="left-content">
        <img src={Jordan} alt="" width="60px" height="30px" />
      </div>
      <div className="right-content">
        <div className="nav-link">
          <a href="#">Join Us</a>
        </div>
        <div className="nav-link">
          <a href="#">Help</a>
        </div>
        <div className="nav-link">
          <a href="#">Join/Log In</a>
        </div>
        <div className="nav-link">
          <a href="#">Find a Store</a>
        </div>
      </div>
    </div>
  );
}
