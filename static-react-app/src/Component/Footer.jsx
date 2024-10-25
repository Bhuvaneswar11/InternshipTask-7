// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Innomatics Research Labs. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.innomatics.in" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="https://www.innomatics.in" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
