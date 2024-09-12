import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "white",
              }}
            >
              <li>About</li>
            </Link>
            <Link
              to="/services"
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "white",
              }}
            >
              <li>Services</li>
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "white",
              }}
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Help</li>
            <li>Support Center</li>
            <li>Community</li>
            <li>Forums</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Address: 98 West 21th Street, Suite 721</p>
          <p>New York NY 10016</p>
          <p>Phone: (+1) 435 3533</p>
          <p>Email: info@yourdomain.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Hepta. All Rights Reserved.</p>

        <p>Designed & Developed by You</p>
      </div>
    </footer>
  );
};

export default Footer;
