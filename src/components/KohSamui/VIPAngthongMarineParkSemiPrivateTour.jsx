import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo13 from './image/logo13.jpeg';
import logo14 from './image/logo14.jpeg';
import logo15 from './image/logo15.jpeg';
import './KohSamui.css';

const VIPAngthongMarineParkSemiPrivateTour = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo13);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

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



    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }

        const cartItem = {
            title: "VIP Angthong Marine Park (Semi-Private Tour)",
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

    // Update total price based on new pricing rules
    useEffect(() => {
        const adultPrice = 4200; // New price for adults
        const childPrice = 3700;  // New price for children
        setTotalPrice(adults * adultPrice + children * childPrice);
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
                            <img src={logo13} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>VIP Angthong Marine\n Park (Semi-Private Tour)<br/>
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

            <h3>VIP Angthong Marine\n Park (Semi-Private Tour)</h3>
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
                            src={logo13}
                            alt="Place 13"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo13)}
                        />
                        <img
                            src={logo14}
                            alt="Place 14"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo14)}
                        />
                        <img
                            src={logo15}
                            alt="Place 15"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo15)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 4,200 THB , Child 3,700 THB</p>

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
  <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>VIP Angthong Marine Park (Semi-Private Tour)</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Adult:</strong> 4,200 Baht</li>
      <li><strong>Child:</strong> 3,700 Baht</li>
    </ul>

    <h3>Operating Days</h3>
    <p><strong>Monday, Wednesday, Saturday Only</strong></p>

    <h3>Experience Overview</h3>
    <p>
      Discover the breathtaking beauty of Ang Thong National Marine Park, a paradise of 
      <strong>42 stunning islands</strong> scattered across the Gulf of Thailand.
      This <strong>semi-private tour</strong> ensures a more personalized and exclusive experience, 
      allowing you to fully immerse yourself in the beauty of nature.
    </p>

    <p>
      Begin your journey with a morning hotel pickup and head to the pier. 
      Your adventure starts with <strong>snorkeling at Koh Wao</strong>, where you will explore vibrant coral reefs 
      and swim alongside tropical marine life. 
    </p>
    
    <p>
      Next, visit <strong>Koh Mae Ko</strong> and enjoy a short hike to the panoramic viewpoint overlooking 
      the breathtaking <strong>Emerald Lagoon</strong>. Since swimming is prohibited, 
      you can simply admire its untouched beauty.
    </p>

    <p>
      Afterward, head to <strong>Koh Phaluai</strong> for a delicious seaside Thai lunch, followed by some relaxation 
      time on the beach before returning to Koh Samui.
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Personalized small-group tour with a semi-private experience</li>
      <li>Snorkeling at <strong>Koh Wao</strong> with diverse coral reefs and tropical fish</li>
      <li>Scenic cruise through Angthong National Marine Park</li>
      <li>Kayaking and exploring the <strong>hidden Emerald Lagoon</strong> at Koh Mae Ko</li>
      <li>Hiking to a <strong>panoramic viewpoint</strong> for stunning island views</li>
      <li>Enjoying a delicious <strong>buffet lunch</strong> at Koh Phaluai</li>
      <li>Relaxing on a pristine beach before returning</li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li>Hotel pickup and transfer to the pier</li>
      <li>Boarding and safety briefing</li>
      <li>Snorkeling at <strong>Koh Wao</strong></li>
      <li>Scenic cruising and photography around Angthong National Park</li>
      <li>Kayaking and hiking to the <strong>Emerald Lagoon</strong></li>
      <li>Buffet lunch at <strong>Koh Phaluai</strong></li>
      <li>Beach relaxation time</li>
      <li>Return to Koh Samui and hotel drop-off</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Travel Insurance</li>
      <li><strong>National Park Fee</strong> (included in price)</li>
      <li>English-Speaking Tour Guide</li>
      <li>Sea Kayaking Experience</li>
      <li>Life Jackets</li>
      <li>Snorkeling Masks</li>
      <li>Buffet Lunch</li>
      <li>Seasonal Fruit</li>
      <li>Soft Drinks and Drinking Water</li>
      <li>Minivan Hotel Transfer</li>
    </ul>

    <h3>What to Bring</h3>
    <ul>
      <li>Towel</li>
      <li>Camera</li>
      <li>Comfortable Shoes</li>
      <li>Comfortable Clothes</li>
      <li>Sunglasses</li>
      <li>Sun Hat</li>
      <li>Sunscreen Lotion</li>
      <li>Swimwear</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This tour is ideal for those seeking a more <strong>intimate and premium experience</strong> 
      while exploring the breathtaking Angthong National Marine Park. With a small group, 
      you’ll enjoy a relaxed atmosphere and exclusive access to some of the most scenic spots.
    </p>
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

    );
};

export default VIPAngthongMarineParkSemiPrivateTour;
