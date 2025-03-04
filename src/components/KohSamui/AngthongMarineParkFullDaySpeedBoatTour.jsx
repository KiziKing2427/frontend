import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo10 from './image/logo10.jpeg';
import logo11 from './image/logo11.jpeg';
import logo12 from './image/logo12.jpeg';
import './KohSamui.css';

const AngthongMarineParkFullDaySpeedBoatTour = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo10);
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
            title: "Angthong Marine Park Full-Day Speed Boat Tour",
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
        const adultPrice = 2100; // New price for adults
        const childPrice = 1500;  // New price for children
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
                            <img src={logo10} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Angthong Marine Park Full-Day Speed Boat Tour<br/>
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

            <h3>Angthong Marine Park Full-Day Speed Boat Tour</h3>
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
                            src={logo10}
                            alt="Place 10"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo10)}
                        />
                        <img
                            src={logo11}
                            alt="Place 11"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo11)}
                        />
                        <img
                            src={logo12}
                            alt="Place 12"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo12)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 2,100 THB , Child 1,650 THB</p>

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
    <h2>Angthong Marine Park Full-Day Speed Boat Tour</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Adult:</strong> 2,100 Baht</li>
      <li><strong>Child:</strong> 1,500 Baht</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      This full-day boat tour is one of the most breathtaking and popular sea adventures in Thailand. 
      Explore the stunning Angthong Marine Park, also known as the "Golden Basin," which consists of 
      42 beautiful islands. 
    </p>
    
    <p>
      Enjoy a variety of activities, including kayaking through unique rock formations and caves, 
      visiting the breathtaking Green Emerald Lagoon, and hiking to the viewpoint on 
      <strong>Wua Talap Island</strong> for an incredible panoramic view of the entire park. 
      You’ll also have time to relax, sunbathe, swim, and snorkel at some of the most picturesque beaches.
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Scenic speedboat ride through the stunning <strong>Angthong Marine Park</strong></li>
      <li>Kayaking through rock formations and caves</li>
      <li>Visit the breathtaking <strong>Green Emerald Lagoon</strong></li>
      <li>Hike to the <strong>Wua Talap Island viewpoint</strong> for a panoramic view</li>
      <li>Explore the <strong>stalactite cave</strong> on Wua Talap Island</li>
      <li>Enjoy snorkeling, swimming, and sunbathing on pristine beaches</li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li><strong>Ko Samui:</strong> Departure from Samui (2 hours)</li>
      <li><strong>Ko Wao Yai:</strong> Snorkeling and exploration (1 hour 30 minutes)</li>
      <li><strong>Ko Mae Ko:</strong> Visit the Green Emerald Lagoon (1 hour)</li>
      <li><strong>Ko Sam Sao:</strong> Kayaking and beach relaxation (2 hours)</li>
      <li><strong>Ko Wua Talap:</strong> Hike to the viewpoint and explore the stalactite cave (1 hour 30 minutes)</li>
      <li><strong>Ko Samui:</strong> Return to Samui (2 hours)</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Travel Insurance</li>
      <li>Lunch and Soft Drinks</li>
      <li>Snorkeling Equipment</li>
      <li>Roundtrip Hotel Transfer</li>
      <li>English-Speaking Guide</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Marine Park Entrance Fee: <strong>Adult: 300฿ / Child: 150฿</strong></li>
      <li>Personal Expenses</li>
    </ul>

    <h3>What to Bring</h3>
    <ul>
      <li>Towel</li>
      <li>Camera</li>
      <li>Comfortable Shoes</li>
      <li>Comfortable Clothes</li>
      <li>Sunglasses</li>
      <li>Sun Hat</li>
      <li>Sunscreen Lotion</li>
      <li>Swimwear</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This tour is perfect for adventure seekers and nature lovers who want to explore 
      the beauty of Angthong Marine Park while enjoying exciting activities like kayaking and snorkeling.
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

export default AngthongMarineParkFullDaySpeedBoatTour;
