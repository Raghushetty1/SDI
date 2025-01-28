import React from "react";
import "../Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-about">
          <h2>Sri Durga Interlock </h2>
          <p>
            Premium interlocking solutions for home, factories, hospitals, cummercial spaces, driveways, 
            walkways, and outdoor spaces. 
            Designed to last, built for beauty.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Sri Durga Interlocks Mullugudde</p>
          <p>Email: info@interlockfactory.com</p>
          <p>Phone:9480615553<br></br>9663094253</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3> Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Sri Durga Industries. All rights reserved.</p>
      </div>
    </footer>
  );
};


