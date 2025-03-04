import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo13 from './image/logo13.jpeg';
import logo14 from './image/logo14.jpeg';
import logo15 from './image/logo15.jpeg';
import './Pattaya.css';

const TheSanctuaryOfTruthEntranceTicketEveningSession = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo13);
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
            title: "The Sanctuary of Truth - Entrance Ticket [Morning Session : 8:00-18:00]",
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
        const adultPrice = 699; // New price for adults
        const childPrice = 349;  // New price for children
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
                            <img src={logo13} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>The Sanctuary of Truth - Entrance Ticket [Morning Session : 8:00-18:00]<br />
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

            <h3>The Sanctuary of Truth - Entrance Ticket [Morning Session : 8:00-18:00]</h3>
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
                            src={logo13}
                            alt="Place 13"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo13)}
                        />
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
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 699 THB  Child 349 THB</p>

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
    <h2>The Sanctuary of Truth - Entrance Ticket (Evening Session)</h2>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Adult:</strong> 699 Baht</li>
      <li><strong>Child:</strong> 349 Baht</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      Located at Laem Ratchawet on Na Klua Road, North Pattaya, The Sanctuary of Truth is a breathtaking wooden castle by the sea, adorned with intricate sculptures and carvings that reflect the philosophy of wisdom. 
    </p>
    <p>
      Built by Mr. Lek Viriyaphan, the founder of the Ancient City and the Erawan Elephant Museum, this grand wooden sanctuary is the largest in Thailand, constructed entirely from wood using ancient Thai carpentry techniques. Inside, visitors can admire detailed wood carvings that narrate the philosophy of life and the interconnectedness of humanity, culture, and faith. This awe-inspiring masterpiece was awarded the Thailand Best Travel Industrial Award in 2008.
    </p>
    <p>
      The evening session offers a unique perspective of the sanctuary, illuminated under the night sky, creating a mystical and serene ambiance for visitors.
    </p>

    <h3>Address</h3>
    <p>
      206/2 Pattaya-Na Kluea Rd, Muang Pattaya, Bang Lamung District, Chon Buri 20150
    </p>

    <h3>Inclusions</h3>
    <ul>
      <li>Entrance Ticket to The Sanctuary of Truth</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Elephant Ride</li>
      <li>Horse Riding</li>
      <li>Horse Carriage</li>
      <li>Drive ATV (2 Rounds)</li>
      <li>Row Boat Ride</li>
      <li>Speed Boat Ride</li>
      <li>Hotel Transfer</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Experience the beauty of The Sanctuary of Truth under the stars, where the intricate wooden carvings and architecture come alive with a unique nighttime charm.
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

export default  TheSanctuaryOfTruthEntranceTicketEveningSession;
