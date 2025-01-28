import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* <h1>Interlock Factory</h1> */}
      {/* Logo Section */}
      <div className="header-logo">
        <i className="fas fa-cubes"></i> {/* Add an icon */}
        <h1>Interlock Factory</h1>
      </div>
      {/*nav section*/}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
