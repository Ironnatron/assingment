import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";

const Navbar = ({ handleNavigation }) => {

  return (
    <nav className="navbar">
      <span className="navbar-brand mb-0 h1">Election Hub</span>
      <ul className="navlink">
      <li className="navlink-item" onClick={() => handleNavigation('Home')} >Home</li>
        <li className="navlink-item" onClick={() => handleNavigation('Parties')}>Political Parties</li>
        <li className="navlink-item" onClick={() => handleNavigation('Dates')}>Election Dates</li>
        <li className="navlink-item" onClick={() => handleNavigation('Info')}>Voter Education</li>
      </ul>
    </nav>
  );
};

export default Navbar;
