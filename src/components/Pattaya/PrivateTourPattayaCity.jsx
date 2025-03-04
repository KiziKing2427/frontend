import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo52 from './image/logo52.jpeg';
import logo53 from './image/logo53.jpeg';
import logo54 from './image/logo54.jpeg';
import './Pattaya.css';

const PrivateTourPattayaCity= () => {
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
            title: "Private Pattaya City Tour (Min 2 Pax)",
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
        const adultPrice = 1550; // New price for adults
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
                            <img src={logo52} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Private Pattaya City Tour (Min 2 Pax)<br />
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

            <h3>Private Pattaya City Tour (Min 2 Pax)</h3>
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
                    <p className="price">Adult 1,550 THB   Child 1,550 THB</p>

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
    <h2>Private Pattaya City Tour (Min 2 Pax)</h2>

    <h3>Experience Overview</h3>
    <p>
      Explore <strong>Pattaya City</strong> at your own pace with a private guided tour. Visit iconic landmarks, breathtaking viewpoints, and cultural sites such as the <strong>Big Buddha Temple</strong>, <strong>Wat Yansangwararam</strong>, and <strong>Pattaya Viewpoint</strong>. 
      Discover the beauty of Mini Siam and end your journey with a visit to the <strong>largest Gems Museum & Gallery</strong> in Pattaya.
    </p>

    <h3>Tour Duration</h3>
    <p><strong>8 - 9 hours</strong></p>

    <h3>Price</h3>
    <p><strong>1550 Baht per person</strong> (Minimum 2 people required)</p>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>09:00 Am</strong>: Pick-up from hotel</li>
      <li><strong>Big Buddha Temple (Wat Phra Yai)</strong> – 1 hour 30 minutes</li>
      <li><strong>Pattaya City Sign - Viewpoint</strong> (Khao Pattaya Viewpoint) – 1 hour 30 minutes</li>
      <li><strong>Gems Gallery Pattaya</strong> – 1 hour 40 minutes</li>
      <li><strong>Wat Yansangwararam</strong> – 1 hour 40 minutes</li>
      <li><strong>Mini Siam</strong> – 1 hour 40 minutes</li>
      <li><strong>16:00 return back to the hotel</strong></li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>English-speaking guide</li>
      <li>Round-trip hotel transfer</li>
      <li>Insurance provided by the operator</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Food and snacks</li>
      <li>Entrance tickets</li>
      <li>Tips and gratuities</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This private tour allows you to experience Pattaya's highlights in a comfortable and flexible way. 
      <strong>Book now</strong> and enjoy an unforgettable journey through this vibrant city!
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

export default PrivateTourPattayaCity;
