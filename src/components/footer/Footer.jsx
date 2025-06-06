import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Location Info */}
        <div className="footer-section1">
          <h2 className="footer-title footer-title-lg">Our Location</h2>
          <address className="footer-address footer-address-lg">
            3701 CHESSWOOD DRIVE
            <br />
            SUITE #311 NORTH YORK
            <br />
            ON M3J-2P6
          </address>
          <div className="talk-to-us">
            <h3>Contact Us </h3>
            <a href="tel:+1 416-631-0435">Tel: +1 416-631-0435</a>
          </div>
        </div>

        {/* Email Info */}
        <div className="footer-section2">
          <h2 className="footer-title footer-title-lg">Email us</h2>
          <div className="mail-section1">
            <a href="mailto:moktravel@hotmail.com">moktravel@hotmail.com</a>
            <a href="mailto:info@moktravels.com">info@moktravels.com</a>
          </div>
          <div className="footer-social">
            <p className="footer-subtitle">Talk to us or Follow us on</p>
            <p className="footer-subtitle2">these Social media Platform</p>
            <div className="footer-icons">
              <a
                href="https://www.instagram.com/moktravel?igsh=eTU4YXJ6c3J3Y2lu"
                aria-label="Instagram"
              >
                <img src="./ig.svg" alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/share/16HDTSNko3/"
                aria-label="Facebook"
              >
                <img src="./Facebook.svg" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="footer-section footer-end">
          <img
            src="./MOK1.png"
            alt="MOK Travels Logo"
            className="footer-logo"
          />
          <span className="footer-copy footer-copy-lg">© 2025</span>
        </div>
      </div>
    </footer>
  );
}
