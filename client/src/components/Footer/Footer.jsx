import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side */}
        <div className="flexColStart f-left">
          <div className="logo-container">
            <img src="./logo.png" alt="EstateEdge logo" width={50} className="logo-icon" />
            <span className="logo-text">EstateEdge</span>
          </div>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* Right Side */}
        <div className="flexColStart f-right">
          <span className="primaryText">EstateEdge Services Ltd.</span>
          <span className="secondaryText">Arijit Bhowal &copy; 2024</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
