import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Roots.css';
import logo from './image/logo.jpeg';

const Root = () => {
  const { t } = useTranslation();
  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count from local storage
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  };

  // Fetch cart count on component mount and set up an event listener
  useEffect(() => {
    updateCartCount();

    const handleStorageChange = () => {
      updateCartCount();
    };

    // Listen for changes in localStorage across browser tabs
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '', padding: '20px' }}>
      <header className="header">
        <div className="header-content">
          <div className="search-bar">
            <div>
              <img src={logo} alt="" height="100px" width="100px" style={{
                borderRadius: '80%',
                position: 'relative',
                top: '-10px',
                right: '-10px'
              }} />
            </div>
          </div>
          <nav>
            <div className="nav-links">
              <Link to="/" className="nav-link">{t('home')}</Link> 
              <Link to="/tour" className="nav-link">{t('tours')}</Link> 
              <Link to="/transportation" className="nav-link">{t('transportation')}</Link> 
              <Link to="/contactUs" className="nav-link">{t('contactUs')}</Link> 
              <Link to="/cart" className="nav-link">
                {t('cart')} <span style={{ color: 'red' }}>({cartCount} {cartCount === 1 ? 'item' : 'items'})</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p className="footer-text">{t('footerText')}</p> 
      </footer>
    </div>
  );
};

export default Root;
