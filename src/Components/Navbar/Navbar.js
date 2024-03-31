import React, { useState } from "react";
import "../../App.css";
import menu from "../../assets/images/menuicon.png"
import "./Navbar.css";

const Navbar = ({ handleNavigation, toggleMobileMenu, mobileMenu }) => {
  // const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <span
          className="navbar-brand mb-0 h1"
          onClick={() => handleNavigation("Home")}
        >
          Election Hub
        </span>
        <ul className="navlink">
          <li className="navlink-item" onClick={() => handleNavigation("Home")}>
            Home
          </li>
          <li
            className="navlink-item"
            onClick={() => handleNavigation("Parties")}
          >
            Political Parties
          </li>
          <li
            className="navlink-item"
            onClick={() => handleNavigation("Dates")}
          >
            Election Dates
          </li>
          <li className="navlink-item" onClick={() => handleNavigation("Info")}>
            Voter's Guide
          </li>
        </ul>
        <span className="mobile-menu" onClick={() => toggleMobileMenu(!mobileMenu)}>
          <img src={menu} alt="menu" height={20} width={20} />
        </span>
      </nav>
    </>
  );
};

export default Navbar;
