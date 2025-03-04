import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo20 from './image/logo20.jpeg';
import logo21 from './image/logo21.jpeg';
import logo22 from './image/logo22.jpeg';
import './Phuket.css';

const ElephantCareCamp = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo20);
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
            title: "Elephant Care Camp: Half day Program",
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
        const adultPrice = 2500; // New price for adults
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
                            <img src={logo20} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Elephant Care Camp: Half day Program<br />
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

            <h3>Elephant Care Camp: Half day Program</h3>
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
                        <img
                            src={logo22}
                            alt="Place 22"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo22)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 2,500 THB, Child 2,000 THB</p>

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
    <h2>Elephant Care Camp: Half Day Program</h2>
    <p>
        Embark on an unforgettable journey to meet the gentle giants of Phuket at the Elephant Care Camp. This immersive program combines a variety of enriching activities into one incredible package, allowing you to connect deeply with these magnificent creatures. Experience the joy of feeding the elephants while learning about their stories and the care they receive. 
    </p>
    <p>
        Enjoy a scenic walk along a cliffside path that leads to the beach, where you’ll have the opportunity to bathe and scrub the elephants in the refreshing sea. Venture into the jungle for a serene walk, and cool off with a thrilling rain shower atop a cliff, surrounded by stunning views. Get hands-on with herbal medicine preparation, and indulge in a traditional Thai cooking class where you’ll create one delightful dish. Afterward, savor the flavors of your culinary creation, along with two additional dishes for a delicious lunch.
    </p>
</div>

<h3>Price</h3>
<ul>
    <li>Adult: <strong>2500 THB per person</strong></li>
    <li>Child: <strong>2000 THB per person</strong></li>
</ul>

<h3>Tour Times</h3>
<ul>
    <li>Morning Tour Pick-Up Time: <strong>8:00 AM - 8:30 AM</strong></li>
    <li>Afternoon Tour Pick-Up Time: <strong>11:00 AM - 11:30 AM</strong></li>
    <li>Tour Duration: <strong>3.5 hours</strong></li>
</ul>

<h3>Inclusions</h3>
<ul>
    <li>Round-trip transfer from your hotel (Patong, Kata area)</li>
    <li>Learn the individual stories of the elephants</li>
    <li>Feed, interact, and observe elephants in a natural environment</li>
    <li>Walk to the beach</li>
    <li>Bath and brush with resident elephants in the sea on our private beach</li>
    <li>Mountainside jungle walk</li>
    <li>Traditional Thai cooking class (Pad Thai)</li>
    <li>Lunch</li>
    <li>Drinking water</li>
</ul>

<h3>Exclusions</h3>
<ul>
    <li>Tips and gratuities</li>
    <li>Any personal expenses</li>
</ul>

<h3>Child Policy</h3>
<ul>
    <li>Infants aged 0-3 years: <strong>Free of charge</strong></li>
    <li>Children aged 4-10 years: <strong>Charged at the child rate</strong></li>
</ul>

<h3>Cancellation Policy</h3>
<p>
    To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date in the local time zone. <strong>No refunds</strong> will be given after this time period.
</p>
 
        </div>
        </div>
    );
};

export default ElephantCareCamp;
