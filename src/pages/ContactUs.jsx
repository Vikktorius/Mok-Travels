import React from "react";
import "./ContactUs.css"; // Make sure to import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=3701+CHESSWOOD+DRIVE+SUITE+%23311+NORTH+YORK+ON+M3J-2P6+Canada&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contact-info">
        <p>
          For inquiries, feel free to{" "}
          <a href="mailto:moktravel@hotmail.com" className="email-button">
            email us
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
