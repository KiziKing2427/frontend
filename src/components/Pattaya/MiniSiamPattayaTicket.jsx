import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo34 from './image/logo34.jpeg';
import logo35 from './image/logo35.jpeg';
import logo36 from './image/logo36.jpeg';
import './Pattaya.css';

const MiniSiamPattayaTicket = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo34);
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
            title: "Mini Siam Pattaya Tickets",
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
        const adultPrice = 250; // New price for adults
        const childPrice = 150;  // New price for children
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
                            <img src={logo34} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Mini Siam Pattaya Tickets<br />
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

            <h3>Mini Siam Pattaya Tickets</h3>
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
                            src={logo34}
                            alt="Place 34"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo34)}
                        />
                        <img
                            src={logo35}
                            alt="Place 35"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo35)}
                        />
                        <img
                            src={logo36}
                            alt="Place 36"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo36)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 250 THB   Child 150 THB</p>

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
    <h2>Mini Siam Pattaya</h2>

    <h3>Experience Overview</h3>
    <p>
      <strong>Mini Siam</strong> in Pattaya offers a journey around the world—not in 80 days, but in just 80 minutes! This unique attraction, located behind the Pattaya Boxing World stadium, features nearly <strong>100 miniature replicas</strong> of famous landmarks from around the world, all displayed at a <strong>1:25 scale</strong>.
    </p>
    <p>
      Founded in 1985 as part of a research project, Mini Siam spans <strong>46,400 square meters</strong> and is divided into two main zones:
    </p>
    <ul>
      <li><strong>Mini Siam</strong> – Featuring iconic Thai landmarks, including the <strong>Temple of the Emerald Buddha</strong>.</li>
      <li><strong>Mini Europe</strong> – Representing the rest of the world, with famous structures like the <strong>Statue of Liberty</strong>.</li>
    </ul>
    <p>
      The park's vast, beautifully landscaped grounds include water features and detailed models of the world’s most <strong>iconic landmarks</strong>, making it feel like a true global village. It's the perfect place to explore different cultures and play a real-life version of <em>Gulliver’s Travels</em>!
    </p>

    <h3>Address</h3>
    <p>387 Sukhumvit Rd, Muang Pattaya, Bang Lamung District, Chon Buri 20150</p>

    <h3>Opening Hours</h3>
    <p>Daily: 7:00 AM – 9:00 PM</p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Adult Ticket</strong>: 250 Baht</li>
      <li><strong>Child Ticket</strong>: 150 Baht</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Mini Siam is a fantastic spot for families, photographers, and travelers looking to experience the world’s greatest landmarks in one place. 
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

  <div>
    
  </div>
</div>


    );
};

export default MiniSiamPattayaTicket;
