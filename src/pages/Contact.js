import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import contactData from '../contact.json';
import './Contact.css';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, just show an alert
    alert('Thank you for your message! Myra will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav className="main-header">
        <div className="header-inner">
          <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <img alt="Bleu Orleans Logo" className="nav-logo" src="/BleuOrleans/assets/logo_crop.jpg" />
            {contactData.business.name}
          </div>
          <button 
            className="hamburger-menu" 
            aria-label="Open menu" 
            aria-expanded={isMenuOpen}
            aria-controls="main-nav-links"
            onClick={toggleMenu}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`} id="main-nav-links">
            <li className="nav-home-dropdown">
              <Link to="/">Home</Link>
              <ul className="submenu">
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#notify">Email Notify</Link></li>
                <li><Link to="/#reviews">Reviews</Link></li>
                <li><Link to="/#featured">Featured Products</Link></li>
              </ul>
            </li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <div style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          maxWidth: '500px',
          margin: '40px auto',
          padding: '24px',
          background: 'rgb(255, 255, 255)',
          borderRadius: '8px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px'
        }}>
          <h2>Contact {contactData.owner.name}</h2>
          <p>Have a question or want to inquire about a piece? Fill out the form below and your message will be sent to {contactData.owner.name}.</p>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label>
                Name<br />
                <input
                  required
                  type="text"
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid rgb(204, 204, 204)'
                  }}
                />
              </label>
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <label>
                Email<br />
                <input
                  required
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid rgb(204, 204, 204)'
                  }}
                />
              </label>
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <label>
                Message<br />
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid rgb(204, 204, 204)'
                  }}
                />
              </label>
            </div>
            
            <button
              type="submit"
              style={{
                background: 'rgb(45, 45, 45)',
                color: 'rgb(255, 255, 255)',
                padding: '10px 24px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Send Inquiry
            </button>
          </form>
          
          <div style={{ marginTop: '32px', fontSize: '14px', color: 'rgb(136, 136, 136)' }}>
            Or email {contactData.owner.name} directly at{' '}
            <a href={`mailto:${contactData.contact.primary_email}`}>{contactData.contact.primary_email}</a>
          </div>
        </div>
      </div>

      <footer className="main-footer">
        <div className="footer-inner">
          <div className="footer-brand">{contactData.business.name}</div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            <a href="/#about">About</a>
            <a href="/#notify">Notify</a>
          </div>
          <div className="footer-social">
            <a
              href={contactData.social.facebook_marketplace.url}
              aria-label="Facebook Marketplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" fill="#1877F3"></path>
                <path d="M16.671 24v-9.294h3.12l.467-3.622h-3.587V8.771c0-1.048.293-1.763 1.797-1.763l1.918-.001v-3.24c-.334-.044-1.472-.143-2.797-.143-2.766 0-4.659 1.688-4.659 4.788v2.671H9.692v3.622h3.128V24h3.851z" fill="#fff"></path>
              </svg>
            </a>
            <a
              href={`mailto:${contactData.contact.primary_email}`}
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.01-8-5.01V6h16zM4 20v-9.489l7.445 4.653a1 1 0 0 0 1.11 0L20 10.511V20H4z" fill="#1976d2"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-copy">© 2025 {contactData.business.name}. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Contact; 