// src/components/fullnavbar/FullNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FullNavbar.css";

const FullNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo-section">
        <img src="/sg-icon.svg" alt="MOK Travels logo" className="logo" />
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {menuOpen && (
        <nav className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="contact-button"
          >
            Contact Us
          </Link>
        </nav>
      )}

      <nav className="nav-links desktop-only">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
       
      </nav>

      <button className="contact-button desktop-only">Contact us</button>
    </header>
  );
};

export default FullNavBar;
