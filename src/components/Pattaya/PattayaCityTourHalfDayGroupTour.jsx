import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo55 from './image/logo55.jpeg';
import logo56 from './image/logo56.jpeg';
import logo57 from './image/logo57.jpeg';
import './Pattaya.css';

const PattayaCityTourHalfDayGroupTour= () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo55);
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
            title: "Pattaya City Tour – Half-Day Group Tour",
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
        const adultPrice = 850; // New price for adults
        const childPrice = 850;  // New price for children
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
                            <img src={logo55} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Pattaya City Tour – Half-Day Group Tour<br />
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

            <h3>Pattaya City Tour – Half-Day Group Tour</h3>
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
                            src={logo55}
                            alt="Place 55"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo55)}
                        />
                        <img
                            src={logo56}
                            alt="Place 56"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo56)}
                        />
                        <img
                            src={logo57}
                            alt="Place 57"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo57)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 850 THB   Child 850 THB</p>

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
    <h2>Pattaya City Tour – Half-Day Group Tour</h2>

    <h3>Experience Overview</h3>
    <p>
      This half-day tour is designed for maximum comfort and enjoyment, allowing guests to explore key highlights of Pattaya. 
      Choose between two time slots: <strong>09:00 AM - 02:00 PM</strong> or <strong>02:00 PM - 07:00 PM</strong>. 
      The itinerary includes hotel pick-up and drop-off, along with visits to iconic landmarks.
    </p>

    <h3>Price</h3>
    <p><strong>850 Baht per person</strong></p>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>10:00 AM</strong>: Pick-up from hotel</li>
      <li><strong>10:30 AM</strong>: Visit Gems Gallery</li>
      <li><strong>11:30 AM</strong>: Visit Tiger Park (Optional Entry Fee)</li>
      <li><strong>01:00 PM</strong>: Visit Big Buddha Temple</li>
      <li><strong>01:30 PM</strong>: Visit Pattaya Viewpoint</li>
      <li><strong>02:00 PM</strong>: Return to hotel</li>
    </ul>

    <h3>Destinations Covered</h3>
    <ul>
      <li><strong>Big Buddha Temple</strong> – Home to an 18-meter-tall golden Buddha, the largest in the region.</li>
      <li><strong>Pattaya Viewpoint</strong> – The best spot to capture the stunning crescent bay of Pattaya.</li>
      <li><strong>Tiger Park Pattaya</strong> – Experience a close encounter with tigers (optional cage entry at own expense).</li>
      <li><strong>Kali Mata Temple</strong> – A sacred Maa Kali temple where visitors can seek blessings.</li>
      <li><strong>Central Pattaya</strong> – A popular international shopping destination.</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Air-conditioned vehicle</li>
      <li>English-speaking guide</li>
      <li>Round-trip transfer from Pattaya hotel</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Entrance fees</li>
      <li>Food and drinks</li>
      <li>Tips and gratuities</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Enjoy a well-planned half-day exploration of Pattaya's famous landmarks with this convenient and comfortable group tour. 
      <strong>Book now</strong> for an unforgettable experience!
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

export default PattayaCityTourHalfDayGroupTour;
