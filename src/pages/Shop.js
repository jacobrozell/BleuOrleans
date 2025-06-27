import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import contactData from '../contact.json';
import './Shop.css';

const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      <nav className="main-header">
        <div className="header-inner">
          <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <img alt="Bleu Orleans Logo" className="nav-logo" src="/assets/logo_crop.jpg" />
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
              <a href="/#about">Home</a>
              <ul className="submenu">
                <li><a href="/#about">About</a></li>
                <li><a href="/#notify">Email Notify</a></li>
                <li><a href="/#reviews">Reviews</a></li>
                <li><a href="/#featured">Featured Products</a></li>
              </ul>
            </li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section style={{
        maxWidth: '700px',
        margin: '4rem auto',
        background: 'rgb(255, 255, 255)',
        borderRadius: '16px',
        boxShadow: 'rgba(30, 40, 80, 0.08) 0px 2px 12px',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: 'rgb(26, 35, 64)',
          marginBottom: '1.5rem',
          fontFamily: '"Playfair Display", serif'
        }}>
          Shop - Coming Soon!
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'rgb(68, 68, 68)',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          We are excited to announce that {contactData.business.name} is migrating from Facebook Marketplace to our very own custom-made online shop!
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgb(68, 68, 68)',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Soon, you will be able to browse and purchase our unique jewelry pieces directly from this website, with a smoother and more personalized experience.
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgb(68, 68, 68)',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Thank you for your patience and support during this transition. In the meantime, you can still view and purchase items on our{' '}
          <a 
            href={contactData.social.facebook_marketplace.url}
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'rgb(24, 119, 243)', fontWeight: '600', textDecoration: 'none' }}
          >
            Facebook Marketplace
          </a>{' '}
          page.
        </p>
        <div style={{
          fontSize: '1.1rem',
          color: 'rgb(25, 118, 210)',
          marginTop: '2rem',
          marginBottom: '2rem',
          fontWeight: '600'
        }}>
          Stay tuned for updates and follow us on social media!
        </div>
        <div style={{
          fontSize: '1.08rem',
          color: 'rgb(68, 68, 68)',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Enter your email below and we'll notify you when the shop is ready, send you updates about new product drops, and in the future, exclusive promo codes!
        </div>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          marginTop: '16px'
        }}>
          <input
            placeholder="Enter your email for updates"
            required
            type="email"
            style={{
              padding: '0.7rem 1rem',
              borderRadius: '6px',
              border: '1px solid rgb(187, 187, 187)',
              fontSize: '1.08rem',
              width: '260px',
              marginBottom: '4px'
            }}
          />
          <button 
            type="submit" 
            style={{
              background: 'rgb(26, 35, 64)',
              color: 'rgb(255, 255, 255)',
              padding: '0.7rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '600',
              fontSize: '1.08rem',
              cursor: 'pointer'
            }}
          >
            Notify Me
          </button>
        </form>
        <div style={{
          marginTop: '12px',
          color: 'rgb(136, 136, 136)',
          fontSize: '0.87rem',
          textAlign: 'center',
          maxWidth: '420px',
          padding: '12px 0px 8px',
          margin: '0 auto'
        }}>
          <em>Your email will <b>never</b> be shared or sold. It will only be used to send you updates from {contactData.business.name}.</em>
        </div>
      </section>

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

export default Shop; 