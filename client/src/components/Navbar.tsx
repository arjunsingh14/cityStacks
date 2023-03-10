import React from "react";
import logo from "../assets/CN.svg";
const Navbar = () => {
  return (
    <div className="nav-container">
    <div className="logo">
        <img src={logo} alt="logo" />
        <h1><span className="colored-text">City</span>Stacks</h1>
    </div>
    </div>
  );
};

export default Navbar;
