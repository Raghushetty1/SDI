import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <h1>SDI</h1>
      </div>

      {/* Menu Button for Mobile */}
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation Section */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/jobs" onClick={closeMenu}>
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
