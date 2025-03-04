import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo4 from './image/logo4.jpeg';
import logo5 from './image/logo5.jpeg';
import logo6 from './image/logo6.jpeg';
import './ChiangMai.css';

const FullDayTourChiangRaiWhiteTempleGoldenTriangle = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo4);
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
            title: "Full Day Tour in Chiang Rai White Temple and Golden Triangle",
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
        const adultPrice = 2250; // New price for adults
        const childPrice = 1850;  // New price for children
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
                            <img src={logo4} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Full Day Tour in Chiang Rai White Temple and Golden Triangle<br />
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

            <h3>Full Day Tour in Chiang Rai White Temple and Golden Triangle</h3>
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
                            src={logo4}
                            alt="Place 4"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo4)}
                        />
                        <img
                            src={logo5}
                            alt="Place 5"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo5)}
                        />
                        <img
                            src={logo6}
                            alt="Place 6"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo6)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 2,250THB, Child 1,850 THB</p>

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
    <h2>Full Day Tour in Chiang Rai White Temple and Golden Triangle</h2>
    <p>
      No trip to Chiang Mai is complete without visiting Wat Rong Khun, famously known as the White Temple. This hassle-free day trip from Chiang Mai is ideal for first-time visitors with limited time. Explore iconic landmarks in a single day, including the 7th-century Chiang Saen and the Golden Triangle, and enjoy a scenic boat ride on the Khong River. Benefit from the convenience of hotel pickup and drop-off in an air-conditioned minivan, and get personalized attention from your guide in a small group of no more than nine people.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li>Adult: 2,250 Baht</li>
      <li>Child: 1,850 Baht</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>Total Duration:</strong> 12 - 14 hours</li>
      <li><strong>7:00 AM:</strong> Hotel pickup in Chiang Mai</li>
      <li>Travel to Chiang Rai (3 hours)</li>
      <li>Visit Mae Khachan Hot Spring (1 hour)</li>
      <li>Explore Wat Rong Khun (White Temple) (1 hour 30 minutes)</li>
      <li>Visit the Golden Triangle (1 hour)</li>
      <li>Stop at Sop Ruak, the center of the Golden Triangle (1 hour)</li>
      <li>Pass by The Thai-Burmese Border Gate in Mae Sai (no stop)</li>
      <li>Return to Chiang Mai (3 hours), arriving at your hotel around 9:00 PM</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Lunch</li>
      <li>Professional guide</li>
      <li>Hotel pickup and drop-off (selected hotels)</li>
      <li>Entrance tickets</li>
      <li>Boat ride at Golden Triangle</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Additional food and drinks</li>
      <li>Gratuities</li>
      <li>Boat trip fees and tax to Laos (20-minute boat trip) - 300 Baht</li>
      <li>Crossing border and visit cost - 300 Baht</li>
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

    );
};

export default FullDayTourChiangRaiWhiteTempleGoldenTriangle;
