import React from 'react';
import './CartView.css';

const CartView = ({ cart, setCart, onBack, isMobile }) => {
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button className="btn-back" onClick={onBack}>
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
           Continue Shopping
        </button>
        <h2 className="cart-title">Your Cart</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, marginBottom: '20px' }}>
             <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p>Your cart is empty.</p>
          <button className="btn-primary" onClick={onBack}>Start Fueling</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={item.id} className="cart-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={process.env.PUBLIC_URL + item.image.split(' ').join('%20')} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <div className="brand">{item.brand}</div>
                  <h3 className="name">{item.name}</h3>
                  <div className="price">{item.price}</div>
                </div>
                <div className="cart-item-controls">
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span className="qty">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr className="summary-divider" />
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <button className="btn-checkout">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
