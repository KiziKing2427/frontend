import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo4 from './image/logo4.jpeg';
import logo5 from './image/logo5.jpeg';
import logo6 from './image/logo6.jpeg';
import './KohSamui.css';

const FullDayAroundTheIslandTour = () => {
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
            title: "Full Day Around the Island Tour",
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
        const adultPrice = 1950; // New price for adults
        const childPrice = 1550;  // New price for children
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
                                <strong>Title:</strong>Full Day Around the Island Tour<br/>
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

            <h3>Full Day Around the Island Tour</h3>
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
                    <p className="price">Adult 1,950 THB , Child 1,550 THB</p>

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
    <h2>Full Day Around the Island Tour</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Adult:</strong> 1,950 Baht</li>
      <li><strong>Child:</strong> 1,550 Baht</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      This 8-hour tour is perfect for photography enthusiasts and travelers who want to explore 
      the scenic beauty and cultural treasures of Koh Samui. Our guided tour will take you to 
      iconic landmarks, offering stunning views and the opportunity to capture incredible photos.
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Visit the beautiful temple <strong>Wat Plai Laem</strong></li>
      <li>See the famous <strong>Big Buddha</strong></li>
      <li>Enjoy a breathtaking view from <strong>Chaweng View Point</strong></li>
      <li>Visit <strong>Teepangkorn Temple</strong> on the mountain</li>
      <li>Explore the unique <strong>Magic Garden</strong></li>
      <li>Enjoy a <strong>Thai lunch</strong> at a scenic sea-view restaurant</li>
      <li>Visit a famous <strong>coconut plantation</strong></li>
      <li>Explore the natural rock formations of <strong>Grandfather & Grandmother Rocks</strong></li>
      <li>See the incredible <strong>Mummified Monk</strong> at Wat Khunaram</li>
      <li>Visit the stunning <strong>Namuang Waterfall 1</strong></li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li><strong>8:30 - 9:30 AM:</strong> Hotel pickup</li>
      <li>Visit <strong>Wat Plai Laem</strong></li>
      <li>See the <strong>Big Buddha</strong></li>
      <li>Enjoy the scenic view at <strong>Chaweng View Point</strong></li>
      <li>Visit <strong>Teepangkorn Temple</strong> on the mountain</li>
      <li>Explore the <strong>Magic Garden</strong></li>
      <li>Enjoy <strong>Thai Lunch</strong> at a sea-view restaurant</li>
      <li>Visit a <strong>coconut plantation</strong></li>
      <li>Explore <strong>Grandfather & Grandmother Rocks</strong></li>
      <li>Visit the <strong>Mummified Monk</strong> at Wat Khunaram</li>
      <li>Discover the beauty of <strong>Namuang Waterfall 1</strong></li>
      <li><strong>4:30 - 5:00 PM:</strong> Return to your hotel</li>
    </ul>

    <h3>Tour Inclusions</h3>
    <ul>
      <li>Travel Insurance</li>
      <li>English-speaking tour guide</li>
      <li>Drinking water</li>
      <li>Lunch and drinking water</li>
      <li>Hotel transfer <strong>(Except Avani+ Samui Resort & InterContinental Koh Samui)</strong></li>
      <li>Air-conditioned minivan</li>
    </ul>

    <h3>What to Bring</h3>
    <ul>
      <li>Camera</li>
      <li>Comfortable shoes</li>
      <li>Comfortable clothes</li>
      <li>Sunglasses</li>
      <li>Sunscreen lotion</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Take in the beauty of Koh Samui while capturing amazing photos at each destination. 
      Enjoy a smooth and comfortable journey with our professional tour guide.
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

export default FullDayAroundTheIslandTour;
