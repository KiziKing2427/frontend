import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo24 from './image/logo24.jpeg';
import logo25 from './image/logo25.jpeg';
import logo26 from './image/logo26.jpeg';
import './Krabi.css';

const HongIslandTourSpeedBoatGroupTour = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo24);
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
            title: "Hong Island Tour by Speed Boat (Group Tour)",
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
        const adultPrice = 1400; // New price for adults
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
                            <img src={logo24} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Hong Island Tour by Speed Boat (Group Tour)<br />
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

            <h3>Hong Island Tour by Speed Boat (Group Tour)</h3>
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
                        <img
                            src={logo26}
                            alt="Place 26"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo26)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,400THB , Child 1,000 THB</p>

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
    <h2>Hong Island Tour by Speedboat (Group Tour)</h2>
    <p>
      Experience the beauty of Hong Island with a speedboat tour that gets you there in just 20 minutes from Ao Nang. This adventure takes you through the breathtaking landscapes of Hong Lagoon, Hong Island, Lading Island, and Pakbia Island. If weather permits, we will also visit the stunning Rai Island. Enjoy swimming, snorkeling, and relaxing on pristine white sandy beaches while taking in the crystal-clear waters and limestone cliffs.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Adult:</strong> 1,400 Baht</li>
      <li><strong>Child (4-11 years):</strong> 1,000 Baht</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>08:00 – 08:30 A.M.</strong> Pickup from your hotel (exact time will be on your voucher)</li>
      <li><strong>09:00 A.M.</strong> Depart from Nopparat Thara Pier by speedboat</li>
      <li><strong>Koh Lading (Paradise Island):</strong> Explore shallow bird caves or go snorkeling, swimming, or sunbathing</li>
      <li><strong>Hong Lagoon:</strong> Sightseeing with towering limestone cliffs and turquoise waters</li>
      <li><strong>Lunch Break:</strong> Enjoy a traditional Thai buffet at a beachside restaurant</li>
      <li><strong>Hong Island Beach:</strong> Relax on the white sandy beach, swim, and snorkel in crystal-clear waters</li>
      <li><strong>15:00 P.M.</strong> Depart from Hong Island by speedboat back to Nopparat Thara Pier</li>
      <li><strong>16:00 P.M.</strong> Return to your hotel in Krabi, Ao Nang, or surrounding areas via air-conditioned minivan</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Speedboat ride</li>
      <li>English-speaking guide</li>
      <li>Snorkeling mask</li>
      <li>Life jacket</li>
      <li>Fruit & bottled water</li>
      <li>Buffet lunch</li>
      <li>Accident insurance</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>National park entrance fee (Adult: 300 Baht, Child: 150 Baht)</li>
      <li>Personal expenses</li>
      <li>Tips and gratuities</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This group tour by speedboat is perfect for those who want a faster, more efficient way to explore the stunning Hong Islands, enjoy thrilling snorkeling, and relax on beautiful beaches.
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

export default HongIslandTourSpeedBoatGroupTour;
