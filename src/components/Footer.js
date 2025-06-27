import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Bleu Orleans</h3>
          <p className="footer-description">
            Curated vintage jewelry and unique accessories for the discerning collector.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text">Email: info@bleuorleans.com</p>
          <p className="footer-text">Phone: (555) 123-4567</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-links">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Bleu Orleans. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 