import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json';
import contactData from '../contact.json';
import './Products.css';

const Products = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add default categories to products that don't have them
  const productsWithCategories = productsData.products.map(product => ({
    ...product,
    category: product.category || 'Vintage Jewelry', // Default category
    available: product.available !== undefined ? product.available : true // Default availability
  }));

  const filteredProducts = productsWithCategories.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories, filtering out any undefined values
  const uniqueCategories = [...new Set(productsWithCategories.map(product => product.category).filter(Boolean))];
  const categories = ['all', ...uniqueCategories];

  return (
    <div className="products-container">
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

      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover unique vintage jewelry pieces curated with love and attention to detail</p>
      </div>

      <div className="search-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : 
                 (category && category.charAt ? category.charAt(0).toUpperCase() + category.slice(1) : 'Vintage Jewelry')}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <Link 
            key={index} 
            to={`/product/${product.id}`} 
            className="product-card-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="product-card" style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  className="product-card-image" 
                  alt={product.name} 
                  src={`/assets/${product.assets[0]}`} 
                />
                <span style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(25, 118, 210, 0.92)',
                  color: 'rgb(255, 255, 255)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '1.08rem',
                  boxShadow: 'rgba(30, 40, 80, 0.1) 0px 2px 8px'
                }}>
                  ${product.price}
                </span>
              </div>
              <h2 className="product-card-title">{product.name}</h2>
              <p className="product-card-description">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found matching your search criteria.</p>
          <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
            Clear Filters
          </button>
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

export default Products; 