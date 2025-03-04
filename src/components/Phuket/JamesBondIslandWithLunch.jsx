import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo23 from './image/logo23.jpeg';
import logo24 from './image/logo24.jpeg';
import logo25 from './image/logo25.jpeg';
import './Phuket.css';

const JamesBondIslandWithLunch = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo23);
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
            title: "James Bond island by long tail boat with Lunch ",
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
        const adultPrice = 1450; // New price for adults
        const childPrice = 1000;  // New price for children
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
                            <img src={logo23} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>James Bond island by long tail boat with Lunch <br />
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

            <h3>James Bond island by long tail boat with Lunch </h3>
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
                            src={logo23}
                            alt="Place 23"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo23)}
                        />
                        <img
                            src={logo24}
                            alt="Place 24"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo24)}
                        />
                        <img
                            src={logo25}
                            alt="Place 25"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo25)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,450 THB, Child 1,000 THB</p>

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
    <h2>James Bond Island by Long Tail Boat with Lunch</h2>
    <p>
        Ready for a day filled with adventure, exploration, and breathtaking sights? One of the highlights of this tour is the opportunity to witness the famous needle-formed limestone rock, featured in the iconic movie "The Man with the Golden Gun." We'll also take you to the enchanting Muslim fishing village on Koh Panyee, known for its rich culture and captivating history. 
    </p>
    <p>
        Brace yourself for an exhilarating canoeing experience, where you'll navigate through limestone caves and immerse yourself in the mystical mangrove forests. It's a chance to connect with nature and create memories that will last a lifetime. Phang Nga is a haven for eco-minded travelers, with its magnificent mangrove and evergreen forests, stunning mountains, secluded coves, and grotto monasteries. To complete this incredible day, we'll also visit the Muslim community at Panyee Island, offering a unique cultural experience that adds depth to your journey. Join us on this fun-filled James Bond Island tour, where you'll cruise through Phang Nga Bay.
    </p>
</div>

<h3>Price</h3>
<ul>
    <li>Adult: <strong>1450 THB per person</strong></li>
    <li>Child: <strong>1000 THB per person</strong></li>
</ul>

<h3>Itinerary</h3>
<ul>
    <li><strong>09:00 - 09:45 AM:</strong> Pick up from the hotel and transfer to the pier.</li>
    <li><strong>Arrive at Kasom Pier:</strong> Embark on a scenic tour of Phang Nga Bay National Park by long-tail boat.</li>
    <li><strong>Visit:</strong> The famous James Bond Island and Khao Ping Kan, known for their stunning natural beauty.</li>
    <li><strong>Lunch:</strong> Enjoy a delicious lunch at Panyee Island, a charming Muslim fishing village.</li>
    <li><strong>Explore:</strong> Suwankuha Temple, also known as the Monkey Cave Temple.</li>
    <li><strong>06:00 PM:</strong> Return to the hotel, concluding an eventful and memorable day.</li>
</ul>

<h3>Inclusions</h3>
<ul>
    <li>Sightseeing tour by air-conditioned vehicle with English-speaking guide</li>
    <li>Boat Fee</li>
    <li>All admission fees as mentioned in the program</li>
    <li>Transfer from/to hotel</li>
    <li>National Park Fee</li>
</ul>

<h3>Exclusions</h3>
<ul>
    <li>Personal Expenses</li>
    <li>Gratuities and Tips</li>
</ul>

<h3>Child Policy</h3>
<p>
    Children with a height over 120 cm will be charged at the adult rate.
</p>

<h3>Cancellation Policy</h3>
<p>
    To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date in the local time zone.
</p>

        </div>
        </div>
    );
};

export default JamesBondIslandWithLunch;
