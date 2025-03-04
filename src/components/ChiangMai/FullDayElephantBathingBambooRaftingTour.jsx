import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo16 from './image/logo16.jpeg';
import logo17 from './image/logo17.jpeg';
import logo18 from './image/logo18.jpeg';
import './ChiangMai.css';

const FullDayElephantBathingBambooRaftingTour = () => {
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
            title: "Full Day Elephant Bathing and Bamboo Rafting Tour in Chiang Mai ",
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
        const adultPrice = 1950; // New price for adults
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
                            <img src={logo16} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Full Day Elephant Bathing and Bamboo Rafting Tour in Chiang Mai <br />
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

            <h3>Full Day Elephant Bathing and Bamboo Rafting Tour in Chiang Mai </h3>
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
                    <p className="price">Adult 1,950 THB, Child 1,550 THB</p>

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
  <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>Full Day Elephant Bathing and Bamboo Rafting Tour in Chiang Mai</h2>
    <p>
      Immerse yourself in the beauty of Chiang Mai's jungles with this full-day tour packed with exciting activities. From getting up close with elephants to bamboo rafting and swimming in the picturesque Mae Wang waterfall, this tour offers a memorable experience for nature lovers and adventure seekers alike.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li>Price - Adult: 1,950 Baht</li>
      <li>Price - Child: 1,550 Baht</li>
    </ul>

    <h3>Descriptions</h3>
    <p>
      Begin your day with a convenient hotel pickup, then venture into the jungle for an unforgettable experience. Your day will include:
    </p>
    <ul>
      <li>Getting up close with elephants in their natural habitat and learning about their care and behavior.</li>
      <li>A serene bamboo rafting trip on the Taeng River, where you can soak in the lush surroundings.</li>
      <li>A refreshing swim at the Mae Wang waterfall, a perfect way to cool off amidst the jungle's beauty.</li>
    </ul>
    <p>
      The tour is fully guided, ensuring a hassle-free experience with everything from transportation to lunch provided. This is an excellent choice for families, couples, or solo travelers seeking to explore the best of Chiang Mai in one day.
    </p>

    <h3>Itinerary</h3>
    <h3>8:00 to 8:30 Pick up from your Hotels</h3>
    <ul>
      <li>Mae Taman, Kuet Chang, Mae Taeng District, Chiang Mai: 1 hour</li>
      <li>Maetaman Elephant Camp & Bamboo Rafting: 30 minutes</li>
      <li>Taeng River (Bamboo Rafting): 3 hours</li>
      <li>Taeng River (Swimming): 1 hour</li>
      <li>Bai Orchid and Butterfly Farm: 30 minutes</li>
      <li>Chiang Mai (Return): 1 hour 30 minutes</li>
    </ul>
    <h3>16:30 to 17:30 Return back to your Hotels</h3>
    <h3>What's Included</h3>
    <ul>
      <li>Roundtrip hotel transfers</li>
      <li>Entrance fees to all mentioned locations</li>
      <li>Lunch</li>
      <li>English-speaking guide</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Personal expenses</li>
      <li>Tips and gratitude</li>
    </ul>

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

export default FullDayElephantBathingBambooRaftingTour;
