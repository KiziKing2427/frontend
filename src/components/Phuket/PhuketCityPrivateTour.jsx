import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo17 from './image/logo17.jpeg';
import logo18 from './image/logo18.jpeg';
import logo19 from './image/logo19.jpeg';
import './Phuket.css';

const PhuketCityPrivateTour = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo17);
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
            title: "Phuket City Private tour ( Min 2 pax)    ",
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
        const adultPrice = 1500; // New price for adults
        const childPrice = 1000;  // New price for children
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
                            <img src={logo17} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Phuket City Private tour ( Min 2 pax)<br />
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

            <h3>Phuket City Private tour ( Min 2 pax)    </h3>
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
                        <img
                            src={logo19}
                            alt="Place 19"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo19)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,500 THB, Child 1,000 THB</p>

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
    <h2>Phuket City Private Tour (Min 2 Pax)</h2>
    <p>
        Explore the beauty and cultural richness of Phuket on this guided private tour. Begin your adventure with a convenient hotel pickup, and set off to discover renowned landmarks such as the majestic Big Buddha statue and the sacred Wat Chalong temple. Gain fascinating insights from your knowledgeable local guide as you explore Phuket's picturesque beaches, uncovering the island's hidden treasures.
    </p>
    <p>
        This immersive journey allows you to deepen your connection with Phuket’s history, traditions, and natural wonders. Embark on an unforgettable adventure, creating lasting memories while embracing the allure of the island.
    </p>
</div>

<h3>Price</h3>
<ul>
    <li>Adult: <strong>1500 THB per person</strong></li>
    <li>Child: <strong>1000 THB per person</strong></li>
</ul>

<h3>Inclusions</h3>
<ul>
    <li>Sightseeing tour by air-conditioned vehicle</li>
    <li>Professional guide</li>
    <li>Hotel pickup and drop-off (from Karon, Kata, and Patong)</li>
    <li>Entry/Admission to Chaithararam Temple (Wat Chalong)</li>
    <li>View of the iconic Big Buddha from Wat Chalong</li>
    <li>Explore Old Phuket Town (1 hour stop) with Punte Food Market</li>
</ul>

<h3>Exclusions</h3>
<ul>
    <li>Tips and gratuities</li>
    <li>Any personal expenses</li>
</ul>

<h3>Child Policy</h3>
<ul>
    <li>Child rate applies to children under <strong>120 cm</strong> in height.</li>
    <li>Adult rate applies to individuals of height <strong>121 cm or more</strong>.</li>
</ul>

<h3>Cancellation Policy</h3>
<p><strong>Pre-Paid Booking:</strong></p>
<ul>
    <li>Before 3 days of the excursion: <strong>No charge for cancellation</strong></li>
    <li>Before 2 days of the excursion: <strong>50% charge applies</strong></li>
    <li>Before 1 day of the excursion: <strong>100% charge applies</strong></li>
</ul>
<p>
    In case the activity is canceled due to natural causes, we will offer you the option to shift your booking to another date or apply for a full refund.
</p>

        </div>
        </div>
    );
};

export default PhuketCityPrivateTour;
