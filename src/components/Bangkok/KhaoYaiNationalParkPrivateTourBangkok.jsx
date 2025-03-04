import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo55 from './image/logo55.jpeg';
import logo56 from './image/logo56.jpeg';
import logo57 from './image/logo57.jpeg';
import './Bangkok.css';

const KhaoYaiNationalParkPrivateTourBangkok = () => {
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
            title: "Khao Yai National Park Private Tour from Bangkok",
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
        const adultPrice = 2950; // New price for adults
        const childPrice = 2950;  // New price for children
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
                                <strong>Title:</strong>Khao Yai National Park Private Tour from Bangkok<br/>
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

            <h3>Khao Yai National Park Private Tour from Bangkok</h3>
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
                    <p className="price">Adult 2,950 THB , Child 2,950 THB</p>

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
    <h2>Khao Yai National Park Private Tour from Bangkok</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Price:</strong> 2,950 Baht per person</li>
      <li><strong>Minimum Requirement:</strong> 2 persons</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      Spend a full day surrounded by breathtaking nature at <strong>Khao Yai National Park</strong>, 
      one of Thailand’s largest and oldest national parks. 
      Recognized as a <strong>UNESCO World Heritage Site</strong>, 
      this park is home to lush forests, scenic waterfalls, and diverse wildlife. 
      Walk along serene nature trails, admire vibrant flora and fauna, and capture stunning photographs of the picturesque landscapes.
    </p>

    <p>
      Experience the wonder of <strong>Haew Suwat Waterfall</strong> and <strong>Haew Narok Waterfall</strong>, 
      spot exotic birds and animals, and if you're lucky, 
      witness a herd of wild elephants in their natural habitat.
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Explore the lush forests of <strong>Khao Yai National Park</strong></li>
      <li>Admire the stunning <strong>Haew Suwat Waterfall</strong> and <strong>Haew Narok Waterfall</strong></li>
      <li>Discover diverse wildlife including birds, mammals, and reptiles</li>
      <li>Enjoy a peaceful nature trek along scenic trails</li>
      <li>Travel in comfort with a private air-conditioned vehicle</li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li><strong>08:00 AM:</strong> Pick-up from hotels in Bangkok</li>
      <li><strong>Explore Khao Yai National Park</strong>, a UNESCO World Heritage Site with diverse wildlife</li>
      <li><strong>Enjoy hiking and sightseeing</strong> along nature trails</li>
      <li><strong>Visit waterfalls:</strong> Haew Suwat & Haew Narok</li>
      <li><strong>18:00 PM:</strong> Return to hotel in Bangkok</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Private <strong>air-conditioned vehicle</strong></li>
      <li>English-speaking driver</li>
      <li>Entrance fee to Khao Yai National Park</li>
      <li>Drinking water</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Gratuities and tips</li>
      <li>Personal expenses</li>
      <li>Food and snacks</li>
    </ul>

    <h3>Cancellation Policy</h3>
    <p>
      Travelers can cancel up to <strong>24 hours before</strong> the experience start time (local timezone) for a full refund. 
      No refunds will be issued after that time.
    </p>

    <h3>Child Policy</h3>
    <ul>
      <li>Children under <strong>3 years old</strong> travel for free</li>
      <li>Children aged <strong>3-9</strong> are charged at the child rate</li>
      <li>Children above <strong>9 years old</strong> are charged as adults</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Whether you're a nature enthusiast, wildlife lover, or adventure seeker, 
      this tour is the perfect escape from the city. 
      Experience the beauty of Thailand's <strong>largest monsoon forest</strong> 
      and immerse yourself in the tranquility of Khao Yai National Park!
    </p>
  </div>

</div>

  </div>

    );
};

export default KhaoYaiNationalParkPrivateTourBangkok;
