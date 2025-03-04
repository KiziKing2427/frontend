import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo19 from './image/logo19.jpeg';
import logo20 from './image/logo20.jpeg';
import logo21 from './image/logo21.jpeg';
import './KohSamui.css';

const VIPKohTaoKohNangYuanSmallGroupSemiPrivateTour = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo19);
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
            title: "VIP Koh Tao & Koh Nang Yuan (Small Group - Semi-Private) Tour",
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
        const adultPrice = 4200; // New price for adults
        const childPrice = 3800;  // New price for children
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
                            <img src={logo19} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>VIP Koh Tao & Koh Nang Yuan (Small Group - Semi-Private) Tour<br/>
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

            <h3>VIP Koh Tao & Koh Nang Yuan (Small Group - Semi-Private) Tour</h3>
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
                            src={logo19}
                            alt="Place 19"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo19)}
                        />
                        <img
                            src={logo20}
                            alt="Place 20"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo20)}
                        />
                        <img
                            src={logo21}
                            alt="Place 21"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo21)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 4,200 THB , Child 3,800 THB</p>

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
    <h2>VIP Koh Tao & Koh Nang Yuan (Small Group - Semi-Private) Tour</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Adult:</strong> 4,200 Baht</li>
      <li><strong>Child:</strong> 3,800 Baht</li>
    </ul>

    <h3>Tour Operates On</h3>
    <ul>
      <li>Tuesday</li>
      <li>Thursday</li>
      <li>Sunday</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      Explore a tropical paradise in the Gulf of Thailand with this exclusive small-group tour to 
      <strong>Koh Tao & Koh Nang Yuan</strong>. This experience combines <strong>snorkeling, scenic viewpoints, and a delicious Thai buffet lunch</strong>.
    </p>

    <p>
      Start your journey with a <strong>morning hotel pickup</strong> and head to the pier, where you’ll be warmly welcomed by our staff.
      Enjoy a short briefing before setting off on a speedboat ride to <strong>Koh Nang Yuan</strong>. Here, you can <strong>relax on the white sandy beach, snorkel in crystal-clear waters, or hike up to a breathtaking viewpoint</strong>.
    </p>

    <p>
      Continue to <strong>Koh Tao</strong>, where you’ll savor a delicious <strong>Thai-style buffet lunch</strong> while admiring the island’s beauty. 
      After lunch, explore the best snorkeling spots around Koh Tao and witness its stunning <strong>marine life and coral ecosystems</strong>. 
      End your adventure with a scenic ride back to Koh Samui.
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Exclusive small-group experience (semi-private)</li>
      <li>Visit <strong>Koh Nang Yuan</strong>, home to one of Thailand’s most beautiful viewpoints</li>
      <li>Relax on pristine white-sand beaches and snorkel in clear waters</li>
      <li>Enjoy a <strong>Thai buffet lunch</strong> with stunning ocean views</li>
      <li>Snorkel at <strong>Koh Tao</strong> – a top spot for marine life and coral reefs</li>
      <li>Travel in comfort with round-trip <strong>hotel transfers</strong> and a professional guide</li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li><strong>Hotel Pickup:</strong> Transfer from your hotel/accommodation to the pier</li>
      <li><strong>At the Pier:</strong> Tour briefing and departure to Koh Nang Yuan</li>
      <li><strong>Koh Nang Yuan:</strong> Relax on the beach, snorkel, or climb to the famous viewpoint</li>
      <li><strong>Koh Tao:</strong> Enjoy a delicious <strong>Thai buffet lunch</strong> with scenic island views</li>
      <li><strong>Snorkeling at Koh Tao:</strong> Explore vibrant coral reefs and marine life</li>
      <li><strong>Return:</strong> Depart from Koh Tao to Koh Samui and transfer back to your hotel</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Travel Insurance</li>
      <li>Entrance Fee</li>
      <li>English-Speaking Tour Guide</li>
      <li>Life Jackets</li>
      <li>Snorkeling Masks</li>
      <li>Buffet Lunch</li>
      <li>Seasonal Fresh Fruits</li>
      <li>Soft Drinks & Drinking Water</li>
      <li>Minivan Hotel Transfer</li>
    </ul>

    <h3>What to Bring</h3>
    <ul>
      <li>Towel</li>
      <li>Camera</li>
      <li>Comfortable Shoes</li>
      <li>Light & Comfortable Clothes</li>
      <li>Sunglasses</li>
      <li>Sun Hat</li>
      <li>Sunscreen Lotion</li>
      <li>Swimwear</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This tour is designed for those looking for an <strong>exclusive and more personalized experience</strong>. 
      With a limited group size, you’ll have <strong>more time to relax, explore, and enjoy the stunning islands</strong>. 
      Whether you're a snorkeling enthusiast or a beach lover, this trip offers the perfect island escape!
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

export default VIPKohTaoKohNangYuanSmallGroupSemiPrivateTour;
