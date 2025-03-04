import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo16 from './image/logo16.jpeg';
import logo17 from './image/logo17.jpeg';
import logo18 from './image/logo18.jpeg';
import './KohSamui.css';

const KohMadsumPigIslandKohTanTour = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo16);
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
            title: "Koh Madsum (Pig Island) & Koh Tan Tour",
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
        const adultPrice = 1800; // New price for adults
        const childPrice = 1300;  // New price for children
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
                            <img src={logo16} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Koh Madsum (Pig Island) & Koh Tan Tour<br/>
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

            <h3>Koh Madsum (Pig Island) & Koh Tan Tour</h3>
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
                            src={logo16}
                            alt="Place 16"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo16)}
                        />
                        <img
                            src={logo17}
                            alt="Place 17"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo17)}
                        />
                        <img
                            src={logo18}
                            alt="Place 18"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo18)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,800 THB , Child 1,300 THB</p>

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
    <h2>Koh Madsum (Pig Island) & Koh Tan Tour</h2>

    <h3>Price</h3>
    <ul>
      <li><strong>Adult:</strong> 1,800 Baht</li>
      <li><strong>Child:</strong> 1,300 Baht</li>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      Embark on an unforgettable island-hopping adventure to <strong>Koh Madsum</strong> (Pig Island) and <strong>Koh Tan</strong>.
      This tour offers a perfect blend of <strong>relaxation, adventure, and marine exploration</strong>.
    </p>

    <p>
      At <strong>Koh Madsum</strong>, enjoy its <strong>white sandy beach</strong> and meet the friendly pigs roaming the island.
      Take stunning photos, relax in the sun, or simply enjoy the island’s laid-back atmosphere.
    </p>

    <p>
      Next, head to <strong>Koh Tan</strong>, known for its <strong>pristine coral reefs</strong> and diverse marine life.
      Snorkel in the crystal-clear waters and discover colorful parrotfish and coral formations. 
      Afterward, savor a delicious Thai lunch at a beachfront restaurant before returning to Koh Samui.
    </p>

    <h3>Tour Highlights</h3>
    <ul>
      <li>Relax on the beautiful white-sand beaches of Koh Madsum (Pig Island)</li>
      <li>Play with and take photos with the island’s <strong>friendly pigs</strong></li>
      <li>Snorkeling at <strong>Koh Tan</strong>, home to vibrant coral reefs and marine life</li>
      <li>Enjoy a delicious <strong>Thai lunch</strong> with a scenic view</li>
      <li>Scenic boat ride with breathtaking coastal views</li>
      <li>Convenient hotel transfers and expert local guide</li>
    </ul>

    <h3>Tour Itinerary</h3>
    <ul>
      <li><strong>8:00 - 9:00 AM:</strong> Pick-up from your hotel and transfer to the pier</li>
      <li><strong>9:30 AM:</strong> Departure from the pier with a short introduction to the tour</li>
      <li><strong>9:45 AM:</strong> Arrive at <strong>Koh Madsum (Pig Island)</strong> – relax on the beach and play with the pigs</li>
      <li><strong>11:15 AM:</strong> Snorkeling at <strong>Koh Tan</strong>, explore coral reefs and marine life</li>
      <li><strong>12:15 PM:</strong> Enjoy a <strong>Thai lunch</strong> at Koh Tan and relax with beautiful island views</li>
      <li><strong>1:30 PM:</strong> Return to Koh Samui and transfer back to your hotel</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Travel Insurance</li>
      <li>English-Speaking Guide</li>
      <li>Life Jackets</li>
      <li>Snorkeling Masks</li>
      <li>Thai Lunch & Drinking Water</li>
      <li>Hotel Transfer</li>
      <li>Admission Fee</li>
    </ul>

    <h3>What to Bring</h3>
    <ul>
      <li>Towel</li>
      <li>Camera</li>
      <li>Comfortable Shoes</li>
      <li>Sunscreen Lotion</li>
      <li>Swimwear</li>
    </ul>

    <h3>Child Policy</h3>
    <p>
      Children under the age of 3 travel for free. Children aged 3-9 are charged at the child rate, and those above 9 are charged as adults.
    </p>

    <h3>Cancellation Policy</h3>
    <p>
      Free cancellation up to 24 hours in advance.
    </p>

    <h3>Additional Information</h3>
    <p>
      This tour is a perfect mix of relaxation and adventure, allowing you to <strong>enjoy the beach, interact with animals, 
      and explore marine life</strong> in a single day. Whether you’re a beach lover, a nature enthusiast, or a family traveler, 
      this experience is a must-try while in Koh Samui.
    </p>
  </div>
</div>

  </div>

    );
};

export default KohMadsumPigIslandKohTanTour;
