import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navs">
      <div className="navbar">
        <div className="heading">Tour Trekker</div>

        <ul class="navbarcontent">
          <NavLink to="/" className="navcontent1 underline-transition">
            Home
          </NavLink>
          <NavLink to="/about" className="navcontent underline-transition">
            About Us
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
