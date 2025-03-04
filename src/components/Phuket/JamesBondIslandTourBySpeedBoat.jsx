import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo26 from './image/logo26.jpeg';
import logo27 from './image/logo27.jpeg';
import logo28 from './image/logo28.jpeg';
import './Phuket.css';

const JamesBondIslandTourBySpeedBoat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo26);
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
            title: "James Bond Island Tour by Speed Boat",
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
                            <img src={logo26} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>James Bond Island Tour by Speed Boat <br />
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

            <h3>James Bond Island Tour by Speed Boat</h3>
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
                            src={logo26}
                            alt="Place 26"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo26)}
                        />
                        <img
                            src={logo27}
                            alt="Place 27"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo27)}
                        />
                        <img
                            src={logo28}
                            alt="Place 28"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo28)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,650 THB, Child 1,200 THB</p>

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
    <h2>James Bond Island Tour by Speed Boat</h2>
    <p>
        James Bond island by speed boat from Phuket with us and enjoy a full day of sightseeing, swimming, and canoeing! The James Bond island tour by speedboat takes you around Phang Nga Bay, where we visit multiple islands. It’s a relaxing cruise on a big, stable cruise boat and suitable for children and older persons.
    </p>
    <p>
        Our experienced crew will take you canoeing around the beautiful Hong and Panak Islands. You can go swimming at the white, sandy shores of Nakae Beach and enjoy the views at James Bond Island. The James Bond island tour from Phuket includes hotel transfers from most locations on Phuket. If you’re in a remote location, we can organize a private pickup for an extra fee (see the pickup zones). During the day, we will take good care of you. A delicious Thai-style buffet lunch on board and several refreshments during the day are included. Life vests and accident insurance are also provided.
    </p>
</div>

<h3>Price</h3>
<ul>
    <li>Adult: <strong>1650 THB per person</strong></li>
    <li>Child: <strong>1200 THB per person</strong></li>
</ul>

<h3>Itinerary</h3>
<ul>
    <li><strong>07:45 - 08:00 AM:</strong> Pick up time at your hotel and transfer to the pier.</li>
    <li>Complimentary Coffee, Tea, and Cookies. Briefing by the tour guide.</li>
    <li><strong>Depart from the pier:</strong> Visit "Phi Phi Lay Island" for sightseeing at "Maya Bay", "Loh Samah Bay", "Viking Cave" and swim at "Pileh Lagoon".</li>
    <li><strong>Arrive at "Monkey Beach":</strong> Snorkeling at a beautiful coral reef point.</li>
    <li><strong>Arrive at "Phi Phi Don Island":</strong> Have lunch at the beach and relax or enjoy shopping at the famous walking street.</li>
    <li><strong>Arrive at the pier to "Khai Island":</strong> Snorkel at a coral reef-rich area.</li>
    <li><strong>05:00 PM:</strong> Arrive at the pier and transfer back to your hotel.</li>
</ul>

<h3>Inclusions</h3>
<ul>
    <li>Round-trip transfers from your hotel (see pickup zones)</li>
    <li>Thai-style buffet lunch on board (vegetarian/halal options available)</li>
    <li>Professional English-speaking guide</li>
    <li>Canoeing with experienced guide</li>
    <li>Pier entry fees</li>
    <li>Small refreshments at the pier and on board</li>
    <li>Life jacket</li>
    <li>Accident insurance</li>
</ul>

<h3>Exclusions</h3>
<ul>
    <li>National park fees: <strong>THB 300/adult, THB 150/child</strong></li>
    <li>Alcoholic drinks</li>
    <li>Personal expenses</li>
</ul>

<h3>What Should You Bring?</h3>
<ul>
    <li>Swimwear</li>
    <li>Sunglasses</li>
    <li>Beach towel</li>
    <li>Sunscreen</li>
    <li>Flip-flops</li>
    <li>Pocket money</li>
    <li>Camera</li>
</ul>

<h3>Child Policy</h3>
<p>Free entrance for children below 100 cm.</p>

<h3>Cancellation Policy</h3>
<p>
    To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date in the local time zone. No refunds will be given after that time period.
</p>


        </div>
        </div>
    );
};

export default JamesBondIslandTourBySpeedBoat;
