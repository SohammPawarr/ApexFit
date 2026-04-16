import React, { useRef, useState } from 'react';
import withResponsive from './withResponsive';
import { productsData } from './data/products';
import CartView from './CartView';
import './SupplementShop.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <div>
          {product.tag && <div className="badge">{product.tag}</div>}
          <div className="brand">{product.brand}</div>
          <h3 className="name">{product.name}</h3>
          <p className="desc">{product.description}</p>
        </div>
        <div className="bottom-row">
          <div className="price">{product.price}</div>
          <button className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ id, title, products, addToCart }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="category-wrapper">
      <div className="section-header-container">
        <h2 className="section-title">{title}</h2>
        <div className="carousel-controls">
          <button onClick={scrollLeft} className="carousel-btn" aria-label="Scroll left">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <button onClick={scrollRight} className="carousel-btn" aria-label="Scroll right">
            <svg viewBox="0 0 24 24"><path d="M10.59 6L9.17 7.41 13.76 12l-4.59 4.59L10.59 18l6-6z"/></svg>
          </button>
        </div>
      </div>
      <div className="carousel-section" ref={scrollRef}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

const SupplementShop = ({ deviceType }) => {
  const isMobile = deviceType === 'mobile' || deviceType === 'tablet'; // Show hamburger on tablet too
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [currentView, setCurrentView] = useState('shop');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="shop-container">
      {/* Sticky Header Nav */}
      <header className="header-sticky">
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: isMobile ? '15px 20px' : '20px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            fontFamily: '"Outfit", "Monument Extended", sans-serif',
            fontWeight: '900',
            fontSize: isMobile ? '1.5rem' : '2rem',
            letterSpacing: '-1px',
            color: '#1A1A1A'
          }}>
            APEX
            <span style={{ color: '#E63946' }}>FIT</span>
          </div>
          
          {isMobile ? (
            <button className="hamburger-btn" onClick={toggleMenu} aria-label="Open menu">
              <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </button>
          ) : (
            <nav className="nav-desktop">
              <a href="#whey" className="nav-anchor" onClick={() => setCurrentView('shop')}>Shop</a>
              <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} className="nav-anchor" onClick={() => setCurrentView('cart')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                {cartItemCount > 0 && <span style={{ background: '#E63946', color: '#fff', borderRadius: '50%', padding: '2px 8px', fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '4px' }}>{cartItemCount}</span>}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className={`sidebar-panel ${isMenuOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
          <div className="sidebar-header">
            <div style={{
              fontFamily: '"Outfit", "Monument Extended", sans-serif',
              fontWeight: '900',
              fontSize: '1.5rem',
              letterSpacing: '-0.5px'
            }}>
              APEX<span style={{ color: '#E63946' }}>FIT</span>
            </div>
            <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
               <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
          </div>
          
          <nav className="sidebar-nav">
            <button className="sidebar-anchor" style={{ background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit' }} onClick={() => { setCurrentView('shop'); closeMenu(); }}>Shop</button>
            <div className="sidebar-anchor" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={() => { setCurrentView('cart'); closeMenu(); }}>
              <span>Cart</span>
              {cartItemCount > 0 && <span style={{ background: '#E63946', color: '#fff', borderRadius: '50%', padding: '2px 10px', fontSize: '0.9rem', fontWeight: 'bold' }}>{cartItemCount}</span>}
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Header Area */}
      {currentView === 'shop' && (
        <div style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: isMobile ? '60px 20px' : '100px 40px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: '"Outfit", "Monument Extended", sans-serif', fontWeight: '900', fontSize: isMobile ? '2.5rem' : '4.5rem', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '-1.5px', lineHeight: '1.1' }}>
            Fuel Your <br/> <span style={{ color: '#E63946' }}>Potential</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', opacity: '0.8', lineHeight: '1.6' }}>
            Premium supplements from elite brands. Explore the ultimate lineup.
          </p>
        </div>
      )}

      {currentView === 'shop' ? (
        <>
          {/* Product Sections */}
          <ProductSection id="whey" title="Whey Protein" products={productsData.wheyProtein} addToCart={addToCart} />
          <ProductSection id="creatine" title="Creatine" products={productsData.creatine} addToCart={addToCart} />
          <ProductSection id="vitamins" title="Vitamins" products={productsData.vitamins} addToCart={addToCart} />
          <ProductSection id="essentials" title="Essentials" products={productsData.essentials} addToCart={addToCart} />
        </>
      ) : (
        <CartView cart={cart} setCart={setCart} onBack={() => setCurrentView('shop')} isMobile={isMobile} />
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#1A1A1A', color: '#fff', padding: '60px 40px', textAlign: 'center', fontFamily: '"Outfit", "Monument Extended", sans-serif' }}>
        <h3 style={{ fontSize: '1.5rem', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>APEX<span style={{color: '#E63946'}}>FIT</span></h3>
        <p style={{ opacity: 0.5, fontSize: '0.9rem', margin: '0', fontWeight: '400', fontFamily: 'Inter, sans-serif' }}>© 2026 APEXFIT NUTRITION. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default withResponsive(SupplementShop);
