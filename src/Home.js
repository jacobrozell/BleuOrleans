import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from './products.json';
import contactData from './contact.json';
import './Home.css';
import Header from './components/Header';
import './components/Header.css';
import Footer from './components/Footer';
import './components/Footer.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get a few featured products for the homepage
  const featuredProducts = productsData.products.slice(0, 3);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
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
                <li><a href="#about">About</a></li>
                <li><a href="#notify">Email Notify</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#featured">Featured Products</a></li>
              </ul>
            </li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-photo-container">
            <img alt={contactData.owner.name} className="about-photo" src="/BleuOrleans/assets/myra_showcase.jpg" />
          </div>
          <div>
            <h1>About {contactData.owner.name}</h1>
            <div className="about-divider"></div>
            <p>{contactData.owner.bio}</p>
            <div className="about-quote">"{contactData.owner.quote}"</div>
            <p style={{ marginTop: '1rem' }}>
              <Link className="about-email" to="/contact">Contact {contactData.owner.name.split(' ')[0]}</Link>
            </p>
          </div>
        </div>
      </section>

      <section id="notify" style={{
        margin: '3rem auto',
        maxWidth: '700px',
        background: 'rgb(255, 255, 255)',
        borderRadius: '16px',
        boxShadow: 'rgba(30, 40, 80, 0.08) 0px 2px 12px',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{
          color: 'rgb(26, 35, 64)',
          fontFamily: '"Playfair Display", serif',
          fontSize: '2rem',
          marginBottom: '10px'
        }}>Get Notified</h2>
        <div style={{
          marginBottom: '18px',
          color: 'rgb(68, 68, 68)',
          fontSize: '1.08rem',
          textAlign: 'center'
        }}>
          Enter your email below and we'll notify you when the shop is ready, send you updates about new product drops, 
          and in the future, exclusive promo codes!
        </div>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
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
          <button type="submit" style={{
            background: 'rgb(26, 35, 64)',
            color: 'rgb(255, 255, 255)',
            padding: '0.7rem 1.5rem',
            borderRadius: '6px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1.08rem',
            cursor: 'pointer'
          }}>
            Notify Me
          </button>
        </form>
        <div style={{
          marginTop: '12px',
          color: 'rgb(136, 136, 136)',
          fontSize: '0.87rem',
          textAlign: 'center',
          maxWidth: '420px',
          padding: '12px 0px 8px'
        }}>
          <em>Your email will <b>never</b> be shared or sold. It will only be used to send you updates from {contactData.business.name}.</em>
        </div>
      </section>

      <section id="reviews" className="reviews-section" style={{
        margin: '3rem auto',
        maxWidth: '700px',
        background: 'rgb(255, 255, 255)',
        borderRadius: '16px',
        boxShadow: 'rgba(30, 40, 80, 0.08) 0px 2px 12px',
        padding: '2.5rem 2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <h2 style={{
            margin: '0px',
            color: 'rgb(26, 35, 64)',
            fontFamily: '"Playfair Display", serif',
            fontSize: '2rem'
          }}>Customer Reviews</h2>
          <a
            href={contactData.social.facebook_personal.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgb(24, 119, 243)',
              textDecoration: 'none',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4em',
              fontSize: '1.1rem'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#1877F3" style={{ verticalAlign: 'middle' }}>
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"></path>
            </svg>
            See all reviews on Facebook
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{
            padding: '1.2rem',
            background: 'rgb(246, 251, 255)',
            borderRadius: '12px',
            boxShadow: 'rgba(30, 40, 80, 0.06) 0px 1px 6px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '6px',
              flexWrap: 'wrap',
              gap: '0.7em'
            }}>
              <span style={{ fontWeight: '700', color: 'rgb(26, 35, 64)' }}>Carol</span>
              <span style={{ color: 'rgb(136, 136, 136)', fontSize: '0.98em' }}>2/19/2025</span>
              <span style={{ color: 'rgb(255, 215, 0)', fontSize: '1.1em', marginLeft: '8px' }}>★★★★★</span>
            </div>
            <div style={{ marginBottom: '8px', color: 'rgb(34, 34, 34)', fontSize: '1.08em' }}>
              Myra is the best to work with! Absolutely recommend!
            </div>
          </div>
          <div style={{
            padding: '1.2rem',
            background: 'rgb(246, 251, 255)',
            borderRadius: '12px',
            boxShadow: 'rgba(30, 40, 80, 0.06) 0px 1px 6px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '6px',
              flexWrap: 'wrap',
              gap: '0.7em'
            }}>
              <span style={{ fontWeight: '700', color: 'rgb(26, 35, 64)' }}>Aurora</span>
              <span style={{ color: 'rgb(136, 136, 136)', fontSize: '0.98em' }}>12/12/2024</span>
              <span style={{ color: 'rgb(255, 215, 0)', fontSize: '1.1em', marginLeft: '8px' }}>★★★★★</span>
            </div>
            <div style={{ marginBottom: '8px', color: 'rgb(34, 34, 34)', fontSize: '1.08em' }}>
              Myra was absolutely fantastic to communicate with. She made this purchase so convenient for me! I think I have a forever friend!
            </div>
          </div>
          <div style={{
            padding: '1.2rem',
            background: 'rgb(246, 251, 255)',
            borderRadius: '12px',
            boxShadow: 'rgba(30, 40, 80, 0.06) 0px 1px 6px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '6px',
              flexWrap: 'wrap',
              gap: '0.7em'
            }}>
              <span style={{ fontWeight: '700', color: 'rgb(26, 35, 64)' }}>Britt</span>
              <span style={{ color: 'rgb(136, 136, 136)', fontSize: '0.98em' }}>9/28/2024</span>
              <span style={{ color: 'rgb(255, 215, 0)', fontSize: '1.1em', marginLeft: '8px' }}>★★★★★</span>
            </div>
            <div style={{ marginBottom: '8px', color: 'rgb(34, 34, 34)', fontSize: '1.08em' }}>
              Beautiful handmade shell art, seller actually made 2 new for me because she already sold the original!!
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.2rem' }}>
          <a
            href={contactData.social.facebook_personal.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgb(24, 119, 243)',
              color: 'rgb(255, 255, 255)',
              padding: '0.8rem 2.2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.08rem',
              display: 'inline-block',
              boxShadow: 'rgba(30, 40, 80, 0.1) 0px 2px 8px',
              letterSpacing: '1px'
            }}
          >
            Read More Reviews on Facebook
          </a>
        </div>
      </section>

      <section id="featured" className="featured-products">
        <h3>Newest Products</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <Link to="/product/vintage-sparkly-rhinestone-brooch-chain" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card" style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  className="product-card-image" 
                  alt="Vintage Sparkly Rhinestone Brooch & Vtg Chain Custom Made Necklace" 
                  src="/BleuOrleans/assets/vintageSparklyRhinestoneBroochAndVTGChain.jpg" 
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
                  $160
                </span>
              </div>
              <h2 className="product-card-title">Vintage Sparkly Rhinestone Brooch & Vtg Chain Custom Made Necklace</h2>
              <p className="product-card-description">
                A dazzling custom necklace made from a vintage rhinestone brooch bursting with brilliant blues, 
                greens, reds, and pinks. Paired with a vintage link chain. No missing stones or color loss—just pure sparkle.
              </p>
            </div>
          </Link>
          
          <Link to="/product/triple-layered-brass-silver-bead-pendant" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card" style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  className="product-card-image" 
                  alt="Tripple Layered Vintage Brass & Silver Tone Large Bead Pendant Necklace" 
                  src="/BleuOrleans/assets/brassSilverToneLargeBeadPendantNecklace.jpg" 
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
                  $40
                </span>
              </div>
              <h2 className="product-card-title">Tripple Layered Vintage Brass & Silver Tone Large Bead Pendant Necklace</h2>
              <p className="product-card-description">
                Triple-layered necklace featuring vintage brass and silver-tone chains with a bold vintage bead pendant. 
                Shortest strand is approx. 17". Custom lengths available upon request.
              </p>
            </div>
          </Link>
          
          <Link to="/product/carnelian-watch-fob-brass-chain" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card" style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  className="product-card-image" 
                  alt="Antique Translucent Carnelian Stone Watch Fob Charm on a Vintage Double Layered Brass Chain" 
                  src="/BleuOrleans/assets/carnelianStoneWatchFobcharmVintageBrassChain.jpg" 
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
                  $48
                </span>
              </div>
              <h2 className="product-card-title">Antique Translucent Carnelian Stone Watch Fob Charm on a Vintage Double Layered Brass Chain</h2>
              <p className="product-card-description">
                One-of-a-kind necklace showcasing a large translucent Carnelian sphere cradled in brass petals—originally 
                part of an antique watch fob. Hung on a double-layered vintage brass chain, approx. 17" long. 
                Custom sizing available upon request.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <div style={{ textAlign: 'center', margin: '2rem 0px' }}>
        <Link
          to="/products"
          style={{
            display: 'inline-block',
            background: 'rgb(26, 35, 64)',
            color: 'rgb(255, 255, 255)',
            padding: '0.8rem 2.2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1.08rem',
            boxShadow: 'rgba(30, 40, 80, 0.1) 0px 2px 8px',
            letterSpacing: '1px'
          }}
        >
          View All Products
        </Link>
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

export default Home; 