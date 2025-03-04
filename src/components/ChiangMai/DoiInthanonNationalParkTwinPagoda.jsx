import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from './image/logo1.jpeg';
import logo2 from './image/logo2.jpeg';
import logo3 from './image/logo3.jpeg';
import './ChiangMai.css';

const DoiInthanonNationalParkTwinPagoda = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo1);
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
            title: "Doi Inthanon National Park Visit with Twin Pagoda",
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
                            <img src={logo1} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Doi Inthanon National Park Visit with Twin Pagoda<br />
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

            <h3>Doi Inthanon National Park Visit with Twin Pagoda</h3>
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
                            src={logo1}
                            alt="Place 1"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo1)}
                        />
                        <img
                            src={logo2}
                            alt="Place 2"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo2)}
                        />
                        <img
                            src={logo3}
                            alt="Place 3"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo3)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,800 THB, Child 1,300 THB</p>

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
    <h2>Doi Inthanon National Park Visit with Twin Pagoda</h2>
    <p>
      Discover Thailand's highest peak and take in the stunning vistas of Doi Inthanon National Park. Experience cool temperatures, which can drop as low as -8°C at night during the cold/dry season. Frosts are common at this altitude, and the climate at the peak is closer to Canada than Thailand. Even daytime temperatures can be chilly, so bring a long-sleeved jumper.
    </p>
    <p>
      On the journey, visit the Wachiritharn and Siritharn Waterfalls, the Hmong hill tribe market offering local produce, and the iconic King and Queen Chedis, which provide breathtaking views of the park. At the peak of Doi Inthanon, enjoy the Angkha nature trail, surrounded by unique flora and forest. The tour also includes a visit to the Karen hill tribe village (non-long-neck).
    </p>

    <h3>Pricing</h3>
    <ul>
      <li>Adult: 1,800 Baht</li>
      <li>Child: 1,300 Baht</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>8:30 AM:</strong> Pick-up from your hotel in Chiang Mai</li>
      <li>Visit Wachiritharn Waterfall</li>
      <li>Visit Siritharn Waterfall</li>
      <li>Visit the Hmong hill tribe market</li>
      <li>Visit the Chedis of the King and Queen</li>
      <li>Lunch</li>
      <li>Visit Thailand’s highest mountain</li>
      <li>Nature trail walk at Angkha</li>
      <li>Visit Karen hill tribe village (not long-neck)</li>
      <li><strong>5:00 PM:</strong> Return to your hotel in Chiang Mai</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Air-conditioned vehicle</li>
      <li>English-speaking guide</li>
      <li>Admission fees as mentioned</li>
      <li>Lunch</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Private transportation</li>
      <li>Gratuities</li>
      <li>Hiking</li>
      <li>Any personal expenses</li>
    </ul>

    <h3>Cancellation Policy</h3>
    <p>
      Free cancellation up to 24 hours in advance.
    </p>

    <h3>Child Policy</h3>
    <p>
      Children under the age of 3 travel for free. Children aged 3-9 are charged at the child rate, and those above 9 are charged as adults.
    </p>
  </div>
</div>

    
</div>

    );
};

export default DoiInthanonNationalParkTwinPagoda ;
