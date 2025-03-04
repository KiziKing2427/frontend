import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo38 from './image/logo38.jpeg';
import logo39 from './image/logo39.jpeg';
import logo40 from './image/logo40.jpeg';
import './Phuket.css';

const PhuketFantaSeaUltimateShow = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo38);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('price1'); // Default package
    const navigate = useNavigate();

    // Package prices
    const prices = {
        price1: 1600, // Regular Seat
        price2: 1850, // Gold Seat
        price3: 1800, // Regular Seat + Buffet Dinner
        price4: 2100, // Gold Seat + Buffet Dinner
        price5: 2000, // Regular Seat + Join Transfer
        price6: 2300, // Gold Seat + Join Transfer
        price7: 2200, // Regular Seat + Buffet Dinner + Join Transfer
        price8: 2500  // Gold Seat + Buffet Dinner + Join Transfer
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        window.scrollBy({
            top: 300,
            behavior: 'smooth',
        });
    };

    const handleAdultsChange = (event) => {
        setAdults(parseInt(event.target.value));
    };

    const handleChildrenChange = (event) => {
        setChildren(parseInt(event.target.value));
    };

    const handlePackageChange = (event) => {
        setSelectedPackage(event.target.value);
    };

    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }

        const cartItem = {
            title: "Phuket FantaSea - The ultimate show ",
            date: selectedDate,
            adults,
            children,
            totalPrice,
            image: selectedImage,
        };

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        setShowSuccessWindow(true);
    };

    const handleGoToCart = () => {
        setShowSuccessWindow(false);
        navigate('/cart');
    };

    // Update total price based on selected package and number of people
    useEffect(() => {
        const selectedPackagePrice = prices[selectedPackage] || 0;
        const adultPrice = selectedPackagePrice;
        const childPrice = selectedPackagePrice; // Assuming the same price for children
        setTotalPrice(adults * adultPrice + children * childPrice);
    }, [adults, children, selectedPackage]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Thailand-Places">
            {showSuccessWindow && (
                <div className="success-window">
                    <div className="success-content">
                        <div className="success-image-container">
                            <img src={logo38} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Phuket FantaSea - The ultimate show  <br />
                                <strong>Date:</strong> {selectedDate}<br />
                                <strong>Adults:</strong> {adults}<br />
                                <strong>Children:</strong> {children}<br />
                                <strong>Total Price:</strong> {totalPrice} Baht
                            </p>
                            <button className="go-to-cart-button" onClick={handleGoToCart}>
                                Go to Cart
                            </button>
                            <button
                                className="go-to-home-button"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate('/');
                                }}
                            >
                                Add More Product
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <h3>Phuket FantaSea - The ultimate show </h3>
            <div className="image-with-name">
                <div className="image-container" style={{ textAlign: 'center', border: '3px solid #ccc', padding: '5px' }}>
                    <img
                        src={selectedImage}
                        alt="Selected Place"
                        className="large-image"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '5px' }}
                    />
                    <div className="small-images-container" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
                        <img
                            src={logo38}
                            alt="Place 38"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo38)}
                        />
                        <img
                            src={logo39}
                            alt="Place 39"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo39)}
                        />
                        <img
                            src={logo40}
                            alt="Place 40"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo40)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Select Package</p>
                    <select value={selectedPackage} onChange={handlePackageChange}>
                        <option value="price1">Regular Seat (1600 Baht)</option>
                        <option value="price2">Gold Seat (1850 Baht)</option>
                        <option value="price3">Regular Seat + Buffet Dinner (1800 Baht)</option>
                        <option value="price4">Gold Seat + Buffet Dinner (2100 Baht)</option>
                        <option value="price5">Regular Seat + Join Transfer (2000 Baht)</option>
                        <option value="price6">Gold Seat + Join Transfer (2300 Baht)</option>
                        <option value="price7">Regular Seat + Buffet Dinner + Join Transfer (2200 Baht)</option>
                        <option value="price8">Gold Seat + Buffet Dinner + Join Transfer (2500 Baht)</option>
                    </select>

                    <p className="date-label highlight">Select Date to Travel</p>
                    <input type="date" value={selectedDate} onChange={handleDateChange} />

                    <p className="date-label highlight">How many People</p>
                    <div className="people-selection">
                        <div className="person-container">
                            <label htmlFor="adults">Adults:</label>
                            <div className="increment-decrement">
                                <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                                <span>{adults}</span>
                                <button onClick={() => setAdults(adults + 1)}>+</button>
                            </div>
                        </div>
                        <div className="person-container">
                            <label htmlFor="children">Children:</label>
                            <div className="increment-decrement">
                                <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                                <span>{children}</span>
                                <button onClick={() => setChildren(children + 1)}>+</button>
                            </div>
                        </div>
                    </div>

                    <p>Check the result of Selected Items below</p>
                </div>

                <div className="results">
                    <h4>Your Selection:</h4>
                    <div className="selection-details">
                        <div className="detail-item">
                            <p>Date: {selectedDate}</p>
                        </div>
                        <div className="detail-item">
                            <p>Number of Adults: {adults}</p>
                        </div>
                        <div className="detail-item">
                            <p>Number of Children: {children}</p>
                        </div>
                        <div className="detail-item">
                            <p>Total Price: {totalPrice} Baht</p>
                        </div>
                    </div>
                    {totalPrice > 0 && (
                        <div className="payment-container-button">
                            <button className="pay-now-button" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    )}
                </div>
            </div>

  <div>
    
  <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>Phuket FantaSea - The Ultimate Show</h2>
    <p>
      Immerse yourself in the magical world of Phuket FantaSea, where culture, mythology, and history come alive through the spectacular "Fantasy of a Kingdom" show. Choose from a variety of seating and dining options for an unforgettable experience.
    </p>
    <ul>
      <li><strong>Regular Seat:</strong> 1600 Baht</li>
      <li><strong>Gold Seat:</strong> 1850 Baht</li>
      <li><strong>Regular Seat + Buffet Dinner:</strong> 1800 Baht</li>
      <li><strong>Gold Seat + Buffet Dinner:</strong> 2100 Baht</li>
      <li><strong>Regular Seat + Join Transfer:</strong> 2000 Baht</li>
      <li><strong>Gold Seat + Join Transfer:</strong> 2300 Baht</li>
      <li><strong>Regular Seat + Buffet Dinner + Join Transfer:</strong> 2200 Baht</li>
      <li><strong>Gold Seat + Buffet Dinner + Join Transfer:</strong> 2500 Baht</li>
    </ul>

    <h3>Highlights</h3>
    <ul>
      <li>Explore Thailand's culture, mythology, and history through the "Fantasy of a Kingdom" show</li>
      <li>Walk through the Festival Village to enjoy shopping, shows, and activities</li>
      <li>Optional Thai and international buffet dinner (halal food available) prepared by top chefs</li>
      <li>Recommended for people of all ages</li>
      <li>Optional round-trip hotel transfer</li>
    </ul>

    <h3>Itinerary</h3>
    <p><strong>Attraction Operating Hours:</strong> 17:30 - 23:30</p>
    <p><strong>Kinaree Restaurant Operating Hours:</strong> 17:30 - 21:00</p>
    <p><strong>Theater Gate Open:</strong> 20:40</p>
    <p><strong>Showtime:</strong> 21:00 - 22:10 (Approximately)</p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Adult and Child prices are the same</strong></li>
      <li>
        Infants under 100 cm tall can join the attraction <strong>free of charge</strong>, 
        but transportation costs 350 THB (pay on the spot).
      </li>
    </ul>
    <h3>Child Policy</h3>
    <p>
      Children under the age of 3 travel for free. Children aged 3-9 are charged at the child rate, and those above 9 are charged as adults.
    </p>

    <h3>Cancellation Policy</h3>
    <p>
      Free cancellation up to 24 hours in advance.
    </p>
  </div>
</div>

  </div>
</div>
        
    );
};

export default PhuketFantaSeaUltimateShow;
