import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import productsData from '../products.json';
import contactData from '../contact.json';
import '../Home.css';
import Header from '../components/Header';
import '../components/Header.css';
import Footer from '../components/Footer';
import '../components/Footer.css';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const product = productsData.products.find(p => p.id === id);
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const touchStartX = useRef(null);
  const fullscreenTouchStartX = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!product) return <div className="product-not-found">Product not found.</div>;

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? product.assets.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === product.assets.length - 1 ? 0 : prev + 1));

  // Touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) handlePrev();
    if (diff < -50) handleNext();
    touchStartX.current = null;
  };

  // Fullscreen modal handlers
  const handleOpenFullscreen = () => setFullscreen(true);
  const handleCloseFullscreen = (e) => {
    e.stopPropagation();
    setFullscreen(false);
  };
  const handleFullscreenKey = (e) => {
    if (e.key === 'Escape') setFullscreen(false);
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  // Fullscreen swipe handlers
  const handleFullscreenTouchStart = (e) => {
    fullscreenTouchStartX.current = e.touches[0].clientX;
  };
  const handleFullscreenTouchEnd = (e) => {
    if (fullscreenTouchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - fullscreenTouchStartX.current;
    if (diff > 50) handlePrev();
    if (diff < -50) handleNext();
    fullscreenTouchStartX.current = null;
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

      <div style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column' }}>
        <div className="product-detail-container" style={{
          maxWidth: '1100px',
          margin: '3rem auto',
          background: 'rgb(255, 255, 255)',
          borderRadius: '16px',
          boxShadow: 'rgba(30, 40, 80, 0.08) 0px 2px 12px',
          padding: '3rem 2rem'
        }}>
          <div className="product-detail-flex" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="product-carousel">
              {product.assets.length > 1 && (
                <button 
                  onClick={handlePrev} 
                  aria-label="Previous image" 
                  className="product-carousel-btn left"
                >
                  &lt;
                </button>
              )}
              {product.assets[current].endsWith('.mp4') ? (
                <video
                  controls
                  className="product-carousel-media"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onClick={handleOpenFullscreen}
                  style={{ cursor: 'zoom-in' }}
                >
                  <source src={`/assets/${product.assets[current]}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={`/assets/${product.assets[current]}`}
                  alt={`${product.name} asset ${current + 1}`}
                  className="product-carousel-media"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onClick={handleOpenFullscreen}
                  style={{ cursor: 'zoom-in' }}
                />
              )}
              {product.assets.length > 1 && (
                <button 
                  onClick={handleNext} 
                  aria-label="Next image" 
                  className="product-carousel-btn right"
                >
                  &gt;
                </button>
              )}
            </div>
            
            {product.assets.length > 1 && (
              <div className="product-carousel-indicators" style={{ position: 'static', marginTop: '12px', marginBottom: '0px' }}>
                {product.assets.map((_, idx) => (
                  <span
                    key={idx}
                    className={idx === current ? 'active' : ''}
                    onClick={() => setCurrent(idx)}
                  ></span>
                ))}
              </div>
            )}
            
            <div style={{ flex: '1 1 0%', textAlign: 'center' }}>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '2rem',
                color: 'rgb(26, 35, 64)',
                marginBottom: '1rem'
              }}>
                {product.name}
              </h2>
              <p style={{
                color: 'rgb(90, 90, 90)',
                fontSize: '1.08rem',
                marginBottom: '1.2rem'
              }}>
                {product.description}
              </p>
              <div style={{
                color: 'rgb(26, 35, 64)',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginBottom: '1.5rem'
              }}>
                ${product.price}
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', margin: '2.5rem 0px 1.5rem' }}>
          <a 
            href={product.shop_link} 
            target="_blank" 
            rel="noopener noreferrer" 
            role="button" 
            aria-label="Buy this product on Facebook Marketplace"
            style={{
              background: 'rgb(26, 35, 64)',
              color: 'rgb(255, 255, 255)',
              padding: '0.7rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.08rem',
              letterSpacing: '1px',
              display: 'inline-block',
              border: 'none',
              cursor: 'pointer',
              boxShadow: 'rgba(30, 40, 80, 0.1) 0px 2px 8px',
              transition: 'background 0.18s, box-shadow 0.18s'
            }}
          >
            Buy on Facebook Marketplace
          </a>
        </div>
      </div>
      
      {fullscreen && (
        <div
          className="fullscreen-modal"
          tabIndex={0}
          onKeyDown={handleFullscreenKey}
          onClick={handleCloseFullscreen}
        >
          <button
            onClick={handleCloseFullscreen}
            aria-label="Close fullscreen"
            className="fullscreen-close-btn"
          >
            &#10005;
          </button>
          <div className="fullscreen-content">
            <button onClick={e => {e.stopPropagation(); handlePrev();}} aria-label="Previous image" className="fullscreen-nav-btn left">&lt;</button>
            {product.assets[current].endsWith('.mp4') ? (
              <video
                controls
                autoPlay
                className="fullscreen-media"
                onClick={e => e.stopPropagation()}
                onTouchStart={handleFullscreenTouchStart}
                onTouchEnd={handleFullscreenTouchEnd}
              >
                <source src={`/assets/${product.assets[current]}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={`/assets/${product.assets[current]}`}
                alt={`${product.name} asset ${current + 1}`}
                className="fullscreen-media"
                onClick={e => e.stopPropagation()}
                onTouchStart={handleFullscreenTouchStart}
                onTouchEnd={handleFullscreenTouchEnd}
              />
            )}
            <button onClick={e => {e.stopPropagation(); handleNext();}} aria-label="Next image" className="fullscreen-nav-btn right">&gt;</button>
          </div>
          <div className="product-carousel-indicators fullscreen-indicators">
            {product.assets.map((_, idx) => (
              <span
                key={idx}
                className={idx === current ? 'active' : ''}
                onClick={e => {e.stopPropagation(); setCurrent(idx);}}
              ></span>
            ))}
          </div>
        </div>
      )}

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

export default ProductDetail; 