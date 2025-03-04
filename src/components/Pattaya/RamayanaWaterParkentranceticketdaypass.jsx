import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo22 from './image/logo22.jpeg';
import logo23 from './image/logo23.jpeg';
import logo24 from './image/logo24.jpeg';
import './Pattaya.css';

const RamayanaWaterParkentranceticketdaypass = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo22);
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
            title: "Ramayana Water Park Entrance Ticket + Day Pass",
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
        const adultPrice = 1250; // New price for adults
        const childPrice = 1250;  // New price for children
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
                            <img src={logo22} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Ramayana Water Park Entrance Ticket + Day Pass<br />
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

            <h3>Ramayana Water Park Entrance Ticket + Day Pass</h3>
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
                            src={logo22}
                            alt="Place 22"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo22)}
                        />
                        <img
                            src={logo23}
                            alt="Place 23"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo23)}
                        />
                        <img
                            src={logo24}
                            alt="Place 24"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo24)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,250THB   Child 1,250 THB</p>

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
    <h2>Ramayana Water Park</h2>

    <h3>Experience Overview</h3>
    <p>
      Get ready to dive into an exhilarating day at <strong>Ramayana Water Park</strong>—one of Thailand’s top waterparks! Experience a mix of thrilling water rides, gentle swings, and unique attractions that promise an unforgettable adventure. With two dedicated kids' zones, a massive double wave pool, and an exciting lazy river featuring mystical caves, geysers, and bubbles, there's something for everyone.
    </p>
    <p>
      But that’s not all! Ramayana Water Park is built on the site of an ancient, forgotten city, so you can explore remnants of ancient buildings, sculptures, waterfalls, and more. Visit the floating market, enjoy the lush natural surroundings, and take in the beauty of the green hills, lakes, and rivers that surround the park.
    </p>
    <p>
      Rated #1 Water Park in Thailand, #2 in Asia, and #12 in the world by TripAdvisor, Ramayana Water Park promises fun, adventure, and safety—thanks to its premium equipment and certified lifeguard team.
    </p>

    <h3>Address</h3>
    <p>9 Village No. 7 Ban Yen Rd, Na Chom Thian, Sattahip District, Chon Buri 20250</p>

    <h3>Pricing</h3>
    <p><strong>Price:</strong> 1250 Baht (Adult/Child)</p>

    <h3>Inclusions</h3>
    <ul>
      <li>Admission Ticket</li>
      <li>Unlimited access to waterslides and pools</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Food and Beverages</li>
      <li>Rental Towels</li>
      <li>Cabana Rental</li>
      <li>Locker</li>
      <li>Hotel Transfer</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Ramayana Water Park offers a mix of thrilling adventures and serene relaxation, all in a beautiful setting. Book your day pass and enjoy unlimited access to its wide array of water slides, pools, and more!
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

export default RamayanaWaterParkentranceticketdaypass;
