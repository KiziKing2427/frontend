import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo22 from './image/logo22.jpeg';
import logo22b from './image/logo22b.jpeg';
import logo22c from './image/logo22c.jpeg';
import './Bangkok.css';

const ThreeTempleAndGPTB = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo22c);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false); // New state for success window
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    
        // Automatically scroll down by 200 pixels
        window.scrollBy({
            top: 300, // Scroll down by 200px
            behavior: 'smooth' // Smooth scroll animation
        });
    };
    const handleAdultsChange = (event) => {
        setAdults(parseInt(event.target.value));
    };

    const handleChildrenChange = (event) => {
        setChildren(parseInt(event.target.value));
    };

    const handlePayNow = () => {
        const totalPeople = adults + children;
        if (!selectedDate || adults === 0) {
            alert('Date and at least one person traveling must be filled.');
        } else {
            const totalPricePayable = encodeURIComponent(totalPrice);
            const totalPeopleParam = encodeURIComponent(totalPeople);
            const dateParam = encodeURIComponent(selectedDate);
            const sourceParam = encodeURIComponent('ThreeTempleAndGPTB');
            navigate(`/threeTempleAndGPTBPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Three Temple and Grand\n Palace Tour Bangkok (min 2 pax.)",
            date: selectedDate,
            adults,
            children,
            totalPrice,
            image: selectedImage
        };
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        setShowSuccessWindow(true); // Show the success window
    };

    const handleGoToCart = () => {
        setShowSuccessWindow(false); // Hide the success window
        navigate('/cart'); // Redirect to the cart page
    };

    useEffect(() => {
        const pricePerPerson = 3000;
        setTotalPrice((adults + children) * pricePerPerson);
    }, [adults, children]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="Thailand-Places">
  {showSuccessWindow && (
    <div className="success-window">
      <div className="success-content">
        <div className="success-image-container">
        <img src={logo22b} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Three Temple And Grand Palace Tour Bangkok (min 2 pax.)<br />
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
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/');
  }}
>
  Add More Product
</button>

                    </div>
                    </div>
                </div>
            )}
            <h3>Three Temple And Grand Palace Tour Bangkok (min 2 pax.)</h3>
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
                            src={logo22}
                            alt="Place 22"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo22)}
                        />
                        <img
                            src={logo22b}
                            alt="Place 22b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo22b)}
                        />
                        <img
                            src={logo22c}
                            alt="Place 22c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo22c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">3,000.00 Baht</p>

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
{/* The description and info window section */}
<div className="info-window">
<h4>Description</h4>
      <div>
        <h2>Three Temple and Grand Palace Tour (min 2 pax.)</h2>
        <p>
          Explore the most important landmarks of Bangkok. This is a private tour for small groups, family members, friends, etc., up to 9 people. The tour operates with an English-speaking professional guide, a private minivan, and a driver. Learn every detail of the heritage and history of Thailand with a unique cultural experience.
        </p>
      </div>

      <h3>Itinerary</h3>
      <ul>
        <li><strong>07:30</strong> - Bangkok City Hotel Pick-up</li>
        <li><strong>Grand Palace</strong> - Depart from the Grand Palace</li>
        <li>Visit the Grand Palace, Wat Traimit, Wat Pho, and Wat Arun</li>
        <li>Pass by Chinatown, Flower Market, Democracy Monument, and The Parliament House of Thailand</li>
        <li>Spend enough time at each destination, no rush</li>
        <li>This is a 9-hour tour with a guide and transportation service</li>
      </ul>

      <h3>Child Policy</h3>
      <ul>
        <li>Children under 3 years old: <strong>Free of charge</strong>.</li>
        <li>Children aged 4 to 10: <strong>Charged at the child rate</strong>.</li>
        <li>Children and adults aged 11 and above: <strong>Charged at the adult rate</strong>.</li>
      </ul>

      <h3>Cancellation Policy</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). 
        <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions & Exclusions</h3>
      <h3>What's Included:</h3>
      <ul>
        <li>Air-conditioned vehicle</li>
        <li>Private transportation</li>
        <li>Experienced English Guide</li>
      </ul>

      <h3>What's Excluded:</h3>
      <ul>
        <li>Lunch</li>
        <li>Snacks</li>
        <li>Tips and Gratitude</li>
        <li>Personal expenses</li>
        <li>Entrance fees</li>
      </ul>
    </div>
</div>
    
    );
};

export default ThreeTempleAndGPTB;
