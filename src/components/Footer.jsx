import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="newsletter container">
        <div className="newsletter-left">
          <strong>SIGN UP FOR OUR DAILY INSIDER</strong>
        </div>
        <form
          className="newsletter-right"
          onSubmit={(e) => e.preventDefault()}
        >
          <input placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-main container">
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Stay connected</h4>
          <div className="socials">🐦Twitter 📘Facebook 📸Instagram </div>
        </div>
      </div>

      <div className="footer-bottom container">
        DEV@Deakin 2022 — Privacy · Terms · Code of Conduct
      </div>
    </footer>
  );
};

export default Footer;
