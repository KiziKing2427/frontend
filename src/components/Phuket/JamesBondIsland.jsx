import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo14 from './image/logo14.jpeg';
import logo15 from './image/logo15.jpeg';
import logo16 from './image/logo16.jpeg';
import './Phuket.css';

const JamesBondIsland = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo14);
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

    const handlePayNow = () => {
        const totalPeople = adults + children;
        if (!selectedDate || adults === 0) {
            alert('Date and at least one person traveling must be filled.');
        } else {
            const totalPricePayable = encodeURIComponent(totalPrice);
            const totalPeopleParam = encodeURIComponent(totalPeople);
            const dateParam = encodeURIComponent(selectedDate);
            const sourceParam = encodeURIComponent('BangkokMSW');
            navigate(`/bangkokMSWPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };

    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }

        const cartItem = {
            title: "James Bond Island by Big Boat",
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
        const adultPrice = 1500; // New price for adults
        const childPrice = 1200;  // New price for children
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
                            <img src={logo14} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> James Bond Island by Big Boat<br />
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

            <h3>James Bond Island by Big Boat</h3>
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
                        <img
                            src={logo16}
                            alt="Place 16"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo16)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,500 THB, Child 1,200 THB</p>

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
    <h2>James Bond Island by Big Boat</h2>
    <p>
        Experience the beauty of Phang Nga Bay on this exciting James Bond Island tour by big boat. Cruise through one of Thailand's most stunning scenic areas, featuring dramatic limestone cliffs rising straight from the sea. The highlight of the tour is a visit to James Bond Island, famously featured in the 1974 movie "The Man with the Golden Gun."
    </p>
</div>

<h3>Itinerary</h3>
<ul>
    <li><strong>07:00 - 08:00 am:</strong> Pick up from your hotel and transfer to the pier. Enjoy complimentary coffee and tea upon arrival.</li>
    <li><strong>09:00 am:</strong> Depart from the pier.</li>
    <li><strong>Panak Island & Hong Island:</strong> Canoeing with a paddle guide through beautiful caves and mangrove forests.</li>
    <li><strong>Lunch:</strong> Enjoy a buffet lunch on board while cruising to Naka Island for swimming and self-canoeing.</li>
    <li><strong>James Bond Island & Khao Phing Kan:</strong> Sightseeing and a walking tour of these iconic locations.</li>
    <li><strong>17:30 pm:</strong> Return to the pier and transfer back to your hotel.</li>
</ul>

<h3>Inclusions</h3>
<ul>
    <li>National Park Fee</li>
    <li>Life jacket</li>
    <li>Buffet lunch</li>
    <li>Seasonal fruits, soft drinks, coffee, and tea</li>
    <li>Canoe equipment with a professional paddler</li>
    <li>English-speaking guide</li>
    <li>Life insurance</li>
</ul>

<h3>Child Policy</h3>
<ul>
    <li>Children aged 3-11 years: <strong>Charged at the child rate</strong> (1200 THB).</li>
    <li>Adult price (1500 THB) applies to anyone over 11 years.</li>
</ul>

<h3>Cancellation Policy</h3>
<p>
    To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). 
    <strong>No refunds</strong> will be given after this period.
</p>

<h3>What to Bring</h3>
<ul>
    <li>Swimwear</li>
    <li>Shorts and a light T-shirt</li>
    <li>Light deck shoes</li>
    <li>Beach towel</li>
    <li>Sunscreen</li>
    <li>Sun hat</li>
    <li>Sunglasses</li>
    <li>Camera</li>
    <li>Small cash for personal expenses</li>
</ul>

        </div>
        </div>
    );
};

export default JamesBondIsland;
