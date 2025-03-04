import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo7 from './image/logo7.jpeg';
import logo8 from './image/logo8.jpeg';
import logo9 from './image/logo9.jpeg';
import './KohSamui.css';

const ElephantJungleFullDayTour = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo7);
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
            title: "Elephant & Jungle Full-Day Tour",
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
        const adultPrice = 2100; // New price for adults
        const childPrice = 1650;  // New price for children
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
                            <img src={logo7} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Elephant & Jungle Full-Day Tour<br/>
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

            <h3>Elephant & Jungle Full-Day Tour</h3>
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
                            src={logo7}
                            alt="Place 7"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo7)}
                        />
                        <img
                            src={logo8}
                            alt="Place 8"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo8)}
                        />
                        <img
                            src={logo9}
                            alt="Place 9"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo9)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 2,100 THB , Child 1,650 THB</p>

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
    <h2>Elephant & Jungle Full-Day Tour</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Adult:</strong> 2,100 Baht</li>
      <li><strong>Child:</strong> 1,650 Baht</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      Discover the natural beauty of Koh Samui’s forests and learn about elephant conservation. 
      This tour takes you to an elephant orphanage dedicated to rescuing and caring for abused elephants, 
      run by a passionate group of elephant lovers. You'll learn about elephant care from expert guides and 
      have the chance to interact with these gentle giants in their natural environment.
    </p>

    <p>
      In addition to the elephant experience, you’ll explore Koh Samui’s stunning jungle landscapes 
      and famous attractions with skilled 4x4 drivers navigating the hills.
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Visit the beautiful <strong>Namuang Waterfall</strong> and relax by the natural pool</li>
      <li>Arrive at <strong>Samui Elephant Home</strong> and participate in making nutritional food for the elephants</li>
      <li>Feed the elephants and take memorable photos with them</li>
      <li>Explore the enchanting <strong>Magic Garden (Secret Garden)</strong></li>
      <li>Enjoy a delicious lunch with breathtaking island views</li>
      <li>Visit the spectacular <strong>Teepangkorn Temple</strong> at the peak viewpoint of Koh Samui</li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li><strong>Pick-up:</strong> From your accommodation</li>
      <li>Visit the stunning <strong>Namuang Waterfall</strong> to cool off or relax by the stream</li>
      <li>Arrive at <strong>Samui Elephant Home</strong> and participate in preparing nutritious food for the elephants</li>
      <li>Feed the elephants with the food you prepared and take photos</li>
      <li>Explore the famous <strong>Magic Garden (Secret Garden)</strong> and its unique stone statues</li>
      <li>Enjoy a delicious <strong>lunch</strong> with scenic island views</li>
      <li>Visit the <strong>Teepangkorn Temple</strong> and enjoy breathtaking views</li>
      <li><strong>Return:</strong> Transfer back to your accommodation with wonderful memories</li>
    </ul>

    <h3>Tour Inclusions</h3>
    <ul>
      <li>Travel Insurance</li>
      <li>English-speaking guide</li>
      <li>Lunch</li>
      <li>Drinking water</li>
      <li>Hotel transfer</li>
      <li>Food for the elephants</li>
      <li>All entrance fees</li>
    </ul>

    <h3>What to Bring</h3>
    <ul>
      <li>Camera</li>
      <li>Comfortable shoes</li>
      <li>Comfortable clothes</li>
      <li>Sunglasses</li>
      <li>Sun hat</li>
      <li>Sunscreen lotion</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This is a unique opportunity to connect with nature and learn about elephant conservation 
      while exploring Koh Samui’s lush landscapes.
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

export default ElephantJungleFullDayTour;
