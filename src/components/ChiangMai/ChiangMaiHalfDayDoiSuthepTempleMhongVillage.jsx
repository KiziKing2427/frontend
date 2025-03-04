import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo7 from './image/logo7.jpeg';
import logo8 from './image/logo8.jpeg';
import logo9 from './image/logo9.jpeg';
import './ChiangMai.css';

const ChiangMaiHalfDayDoiSuthepTempleMhongVillage = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo7);
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
            title: "Chiang Mai Half Day Doi Suthep Temple and Mhong Village",
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
        const adultPrice = 900; // New price for adults
        const childPrice = 700;  // New price for children
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
                            <img src={logo7} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Chiang Mai Half Day Doi Suthep Temple and Mhong Village<br />
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

            <h3>Chiang Mai Half Day Doi Suthep Temple and Mhong Village</h3>
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
                            src={logo7}
                            alt="Place 7"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo7)}
                        />
                        <img
                            src={logo8}
                            alt="Place 8"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo8)}
                        />
                        <img
                            src={logo9}
                            alt="Place 9"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo9)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 900THB, Child 700 THB</p>

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
    <h2>Chiang Mai Half Day Doi Suthep Temple and Mhong Village</h2>
    <p>
      Explore two fascinating attractions in one half-day tour: the stunning Doi Suthep Temple and the charming Mhong Hill Tribe Village. Discover the history and culture of Chiang Mai in a convenient and compact trip.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li>Adult: 900 Baht</li>
      <li>Child: 700 Baht</li>
    </ul>

    <h3>Descriptions</h3>

    <h3>Doi Suthep Temple</h3>
    <p>
      Located 15 kilometers from Chiang Mai, Doi Suthep Temple (Wat Prathat Doi Suthep) is a holy shrine and one of the most important landmarks in Chiang Mai. According to legend, the temple's location was determined by a sacred relic tied to the back of an elephant, which wandered to the mountaintop before stopping. The temple, commissioned by King Kuena, was constructed in 1386 and offers breathtaking views of the surrounding landscape. Visitors can access the temple via a 306-step staircase or a modern funicular lift.
    </p>

    <h3>Mhong Village</h3>
    <p>
      A picturesque drive takes you to the Meo Hill Tribe Village, where locals live in simple huts and speak their unique language. Located 3 kilometers beyond Phuping Palace, the village offers an opportunity to experience the tribal lifestyle and daily activities of the Mhong people.
    </p>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>Pick up:</strong> From your hotel in Chiang Mai at 8:30 AM (morning tour) or 1:00 PM (afternoon tour).</li>
      <li>Drive 45 minutes up the mountain.</li>
      <li>Visit Doi Suthep Temple, Chiang Mai's most important temple. Walk up 306 steps or take the funicular lift to reach the temple, located 1,100 meters above sea level. Admire the Northern Thai golden pagoda containing relics of the Lord Buddha.</li>
      <li>Visit the Mhong Hill Tribe Village to explore their unique culture and lifestyle.</li>
      <li><strong>Return:</strong> Back to your hotel by 12:30 PM (morning tour) or 5:30 PM (afternoon tour).</li>
    </ul>

    <h3>Clothing</h3>
    <p>
      Polite attire such as trousers or a long skirt is required for visiting Doi Suthep Temple.
    </p>

    <h3>What's Included</h3>
    <ul>
      <li>Air-conditioned transportation</li>
      <li>Licensed English-speaking tour guide</li>
      <li>Entrance fees</li>
      <li>Hotel/guesthouse pickup and drop-off (in city center)</li>
      <li>Travel insurance</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Any personal expenses</li>
      <li>Tips and gratuities</li>
    </ul>

    <h3>Child Policy</h3>
    <p>
      Children under the age of 3 travel for free. Children aged 3-9 are charged at the child rate, and those above 9 are charged as adults.
    </p>

    <h3>Cancellation Policy</h3>
    <p>
      Free cancellation up to 24 hours in advance.
    </p>

    <h3>Private Tour Option</h3>
    <p>
      If you prefer a private tour to spend more time with your family or friends. Contact Us Directly
    </p>
  </div>
</div>

</div>


    );
};

export default ChiangMaiHalfDayDoiSuthepTempleMhongVillage;
