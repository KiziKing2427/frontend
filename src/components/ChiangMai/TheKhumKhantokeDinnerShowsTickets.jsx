import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo10 from './image/logo10.jpeg';
import logo11 from './image/logo11.jpeg';
import logo12 from './image/logo12.jpeg';
import './ChiangMai.css';

const TheKhumKhantokeDinnerShowsTickets = () => {
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
            title: "The Khum Khantoke dinner and shows tickets ",
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
        const adultPrice = 750; // New price for adults
        const childPrice = 750;  // New price for children
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
                                <strong>Title:</strong> The Khum Khantoke dinner and shows tickets  <br />
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

            <h3>The Khum Khantoke dinner and shows tickets  </h3>
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
                    <p className="price">Adult 750 THB, Child 750 THB</p>

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

  <div>
  <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>The Khum Khantoke Dinner and Shows</h2>
    <p>
      Experience the rich cultural heritage of Northern Thailand at the Khum Khantoke dinner. Set in a traditional Lanna-style setting, guests dine around low "kantoke" tables while enjoying a variety of authentic Northern Thai dishes. This event offers a unique blend of gastronomy and culture in a warm, communal atmosphere.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li>Price: 750 Baht per person</li>
    </ul>

    <h3>Descriptions</h3>
    <p>
      The Khum Khantoke dinner is more than just a meal—it's a cultural experience. Guests sit on the floor around kantoke tables and enjoy a feast of Northern Thai cuisine. The dishes, served in small bowls, encourage communal dining and a sense of togetherness.
    </p>
    <p>
      While dining, guests are entertained with traditional Thai performances. These include live music, elegant classical dances, and folk dances that showcase the unique Lanna culture. The vibrant costumes and graceful movements add to the enchanting experience.
    </p>
    <p>
      The Khum Khantoke dinner offers not only a delicious meal but also an opportunity to immerse oneself in Northern Thailand's cultural heritage. It is the perfect way to enjoy authentic food and entertainment in a traditional setting.
    </p>

    <h3>What's Included</h3>
    <ul>
      <li>Traditional Khantoke menu</li>
      <li>Vegetarian options available upon request</li>
      <li>Halal meals available for an additional charge of 50 THB (please notify during booking)</li>
      <li>Drinking water (jug) provided</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Additional drinks</li>
      <li>Hotel pick-up and drop-off</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Please inform us of any dietary requirements, such as vegetarian or halal meals, during booking to ensure we can accommodate your needs.
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

    
</div>

    );
};

export default TheKhumKhantokeDinnerShowsTickets;
