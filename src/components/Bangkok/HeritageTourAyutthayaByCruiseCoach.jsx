import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo52 from './image/logo52.jpeg';
import logo53 from './image/logo53.jpeg';
import logo54 from './image/logo54.jpeg';
import './Bangkok.css';

const HeritageTourAyutthayaByCruiseCoach = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo52);
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
            title: "Heritage Tour in Ayutthaya by Cruise + Coach",
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
        const adultPrice = 2450; // New price for adults
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
                            <img src={logo52} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Heritage Tour in Ayutthaya by Cruise + Coach<br/>
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

            <h3>Heritage Tour in Ayutthaya by Cruise + Coach</h3>
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
                            src={logo52}
                            alt="Place 52"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo52)}
                        />
                        <img
                            src={logo53}
                            alt="Place 53"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo53)}
                        />
                        <img
                            src={logo54}
                            alt="Place 54"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo54)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 2,450 THB , Child 2,000 THB</p>

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
    <h2>Heritage Tour in Ayutthaya by Cruise + Coach</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Adult:</strong> 2,450 Baht</li>
      <li><strong>Child:</strong> 2,000 Baht</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      Escape the hustle and bustle of Bangkok and step back in time to explore the ancient kingdom of <strong>Ayutthaya</strong>. 
      This UNESCO-listed city is filled with magnificent ruins and historic palaces. 
      With a guided tour, you'll uncover the fascinating history of Thailand’s former capital. 
      The journey is made seamless with <strong>door-to-door transport</strong>, 
      ensuring a stress-free and immersive experience.
    </p>

    <p>
      Enjoy a <strong>full-day cultural tour</strong> featuring visits to significant temples, a delicious <strong>lunch at an authentic restaurant</strong>, 
      and a scenic cruise back to Bangkok. 
      Discover the rich heritage of Thailand in the most comfortable and enjoyable way!
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Travel to <strong>Ayutthaya</strong> in comfort by coach and return by a relaxing <strong>river cruise</strong></li>
      <li>Explore UNESCO-listed sites like <strong>Wat Mahathat</strong> and <strong>Wat Phra Sri Sanphet</strong></li>
      <li>Enjoy a <strong>guided tour</strong> with an English-speaking expert</li>
      <li>Savor an <strong>authentic Thai lunch</strong> at a local restaurant</li>
      <li>Visit multiple historic temples and cultural landmarks</li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li><strong>Total Duration:</strong> 9 - 10 hours</li>
      <li><strong>Meeting Point:</strong> River City Bangkok, 23 Charoen Krung Soi 24, Bangkok 10100 Thailand (3-hour cruise)</li>
      <li><strong>Wat Mahathat:</strong> 1-hour visit</li>
      <li><strong>Wat Phra Sri Sanphet:</strong> 1-hour visit</li>
      <li><strong>Wihan Phra Mongkhon Bophit:</strong> 45-minute visit</li>
      <li><strong>Wat Sutharam:</strong> 45-minute visit</li>
      <li><strong>Wat Chong Lom:</strong> 3-hour visit</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Thai Lunch at an authentic restaurant</li>
      <li>Comfortable <strong>bus/coach transportation</strong></li>
      <li>All admission fees included</li>
      <li>Professional <strong>English-speaking guide</strong></li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li><strong>Hotel pick-up:</strong> Available at 350 Baht per person</li>
      <li>Private transportation</li>
      <li>Personal expenses</li>
      <li>Gratuities and tips</li>
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
      This full-day journey blends <strong>historical discovery</strong> with a <strong>relaxing cruise</strong>, 
      making it the perfect way to experience the grandeur of ancient Siam. 
      Whether you're a history enthusiast or a cultural explorer, 
      this tour offers a <strong>comprehensive and enjoyable</strong> experience of Ayutthaya!
    </p>
  </div>

</div>

  </div>

    );
};

export default HeritageTourAyutthayaByCruiseCoach;
