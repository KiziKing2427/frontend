import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo43 from './image/logo43.jpeg';
import logo44 from './image/logo44.jpeg';
import logo45 from './image/logo45.jpeg';
import './Pattaya.css';

const ElephantSanctuaryTourPattayaHalfDay= () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo43);
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
            title: "Elephant Sanctuary Tour Pattaya (Half-Day)",
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
        const adultPrice = 2800; // New price for adults
        const childPrice = 2000;  // New price for children
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
                            <img src={logo43} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Elephant Sanctuary Tour Pattaya (Half-Day)<br />
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

            <h3>Elephant Sanctuary Tour Pattaya (Half-Day)</h3>
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
                            src={logo43}
                            alt="Place 43"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo43)}
                        />
                        <img
                            src={logo44}
                            alt="Place 44"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo44)}
                        />
                        <img
                            src={logo45}
                            alt="Place 45"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo45)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 2,800 THB   Child 2,000 THB</p>

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
    <h2>Elephant Sanctuary Tour Pattaya (Half-Day)</h2>

    <h3>Experience Overview</h3>
    <p>
      At <strong>Pattaya Elephant Sanctuary</strong>, our mission is to provide a loving and ethical home for elephants, allowing them to live as naturally as possible. Unlike traditional elephant tourism, we follow an ethical model—<strong>no chains, no bullhooks, no riding, and no performances</strong>. 
    </p>
    <p>
      Guests can witness elephants engaging in their natural behaviors, such as <strong>foraging in the jungle, playing in the mud, and bathing in the pool</strong>. This sanctuary is dedicated to rescuing elephants from previous hardships, including elephant riding, street begging, and circus performances, and offering them a peaceful life free from labor.
    </p>
    <h3>Pricing</h3>
    <ul>
      <li><strong>Adult</strong>: 2,800 Baht</li>
      <li><strong>Child</strong>: 2,000 Baht</li>
    </ul>

    <h3>Tour Timings</h3>
    <ul>
      <li><strong>Morning Tour</strong>: 07:30 AM</li>
      <li><strong>Afternoon Tour</strong>: 12:30 PM</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li>Pick up from your hotel in Pattaya by minivan.</li>
      <li>Introduction to the project and rescued elephants.</li>
      <li>Prepare fruits and vegetables for feeding.</li>
      <li>Meet and feed the elephants.</li>
      <li>Walk with elephants in their natural habitat.</li>
      <li>Observe them foraging, playing, and cooling off in their custom-built pool.</li>
      <li>Watch elephants take a mud bath.</li>
      <li>Enjoy a freshly prepared vegetarian buffet lunch or dinner.</li>
      <li>Relax and soak in the peaceful environment of the sanctuary.</li>
      <li>Transfer back to your hotel.</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Roundtrip hotel transfer</li>
      <li>English-speaking guide</li>
      <li>Thai Buffet Lunch/Dinner</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Personal expenses</li>
      <li>Tips and gratuity</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This experience is perfect for those who wish to see elephants treated with kindness and dignity while enjoying a serene and meaningful interaction with these gentle giants. A visit to Pattaya Elephant Sanctuary is a must for nature lovers and ethical travelers.
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

export default ElephantSanctuaryTourPattayaHalfDay;
