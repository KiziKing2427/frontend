import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo49 from './image/logo49.jpeg';
import logo50 from './image/logo50.jpeg';
import logo51 from './image/logo51.jpeg';
import './Bangkok.css';

const FullDayHeritageAyutthayaTempleTourByRoad = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo49);
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
            title: "Full-Day Heritage of Ayutthaya Temple Tour by Road",
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
        const adultPrice = 1650; // New price for adults
        const childPrice = 1250;  // New price for children
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
                            <img src={logo49} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Full-Day Heritage of Ayutthaya Temple Tour by Road<br/>
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

            <h3>Full-Day Heritage of Ayutthaya Temple Tour by Road</h3>
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
                            src={logo49}
                            alt="Place 49"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo49)}
                        />
                        <img
                            src={logo50}
                            alt="Place 50"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo50)}
                        />
                        <img
                            src={logo51}
                            alt="Place 51"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo51)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,650 THB , Child 1,250 THB</p>

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
    <h2>Full-Day Heritage of Ayutthaya Temple Tour by Road</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Adult:</strong> 1,650 Baht</li>
      <li><strong>Child:</strong> 1,250 Baht</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      Discover the ancient city of <strong>Ayutthaya</strong>, the former capital of Thailand from B.E. 1350 to 1767 and a 
      <strong>UNESCO World Heritage Site</strong> since December 13, 1991. 
      This historical journey will take you through <strong>the most important temples, ruins, and monasteries</strong> of Ayutthaya, 
      offering a glimpse into the city's glorious past.
    </p>

    <p>
      Led by an expert local guide, this full-day tour includes <strong>visits to multiple temples</strong>, 
      each with its own unique history and architecture. 
      Enjoy a <strong>Thai buffet lunch</strong> before continuing your exploration. 
      Your adventure concludes as you board back to the cruise, filled with historical insights and unforgettable experiences.
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Explore <strong>Ayutthaya</strong>, Thailand’s ancient capital and a UNESCO World Heritage Center</li>
      <li>Visit <strong>historical temples and monasteries</strong>, including Wat Mahathat and Wat Phra Sri Sanphet</li>
      <li>Learn about Thailand’s rich history from an <strong>expert local guide</strong></li>
      <li>Enjoy a <strong>delicious Thai international buffet lunch</strong></li>
      <li>Travel in an <strong>air-conditioned vehicle</strong> with all taxes and fees included</li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li><strong>Total Duration:</strong> 7 - 8 hours</li>
      <li><strong>Meeting Point:</strong> River City Pier, Bangkok</li>
      <li><strong>Bang Pa-In Palace:</strong> 45-minute visit</li>
      <li><strong>Wat Phu Khao Thong (Golden Mount):</strong> 30-minute visit</li>
      <li><strong>Wat Mahathat:</strong> 30-minute visit</li>
      <li><strong>Wat Lokayasutharam (Temple of the Reclining Buddha):</strong> 30-minute visit</li>
      <li><strong>Ayutthaya Province:</strong> 1-hour exploration</li>
      <li><strong>Wihan Phra Mongkhon Bophit:</strong> 30-minute visit</li>
      <li><strong>Wat Phra Sri Sanphet:</strong> 30-minute visit</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Thai International Buffet Lunch</li>
      <li>Air-conditioned vehicle for comfortable travel</li>
      <li>All fees and taxes covered</li>
      <li>Toll tax and parking fees included</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Hotel transfers or private transportation</li>
      <li>Snacks or drinks</li>
      <li>Gratuities and tips</li>
      <li>Anything not mentioned in inclusions</li>
    </ul>

    <h3>Cancellation Policy</h3>
    <p>
      To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start time (local timezone). 
      No refunds will be given after that time period.
    </p>

    <h3>Child Policy</h3>
    <ul>
      <li>Children under <strong>3 years old</strong> travel for free</li>
      <li>Children aged <strong>3-9</strong> are charged at the child rate</li>
      <li>Children above <strong>9 years old</strong> are charged as adults</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Experience a deep dive into Thailand’s history with this full-day tour to <strong>Ayutthaya</strong>. 
      Walk through the grand ruins of the ancient capital, admire centuries-old Buddha statues, 
      and soak in the spiritual energy of sacred temples. 
      This journey is perfect for history lovers and cultural explorers.
    </p>
  </div>

</div>

  </div>

    );
};

export default FullDayHeritageAyutthayaTempleTourByRoad;
