import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo19 from './image/logo19.jpeg';
import logo20 from './image/logo20.jpeg';
import logo21 from './image/logo21.jpeg';
import './ChiangMai.css';

const PrivateTourChiangMaiDoiSuthepTempleStickyWaterfall= () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo19);
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
            title: "Private Tour of Chiang Mai Doi Suthep Temple & Sticky Waterfall ",
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
        const adultPrice = 3500; // New price for adults
        const childPrice = 2500;  // New price for children
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
                            <img src={logo19} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Private Tour of Chiang Mai Doi Suthep Temple & Sticky Waterfall <br />
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

            <h3>Private Tour of Chiang Mai Doi Suthep Temple & Sticky Waterfall</h3>
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
                            src={logo19}
                            alt="Place 19"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo19)}
                        />
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
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 3,500 THB, Child 2,500 THB</p>

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

                <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>Private Tour of Chiang Mai Doi Suthep Temple & Sticky Waterfall</h2>
    <p>
      Explore the beauty of Chiang Mai on this full-day private tour, where you’ll visit the iconic Doi Suthep Temple and the unique Sticky Waterfall. This tour combines cultural, scenic, and adventurous experiences, perfect for those seeking fun, delicious food, and incredible photo opportunities.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li>Price - Adult: 3,500 Baht</li>
      <li>Price - Child: 2,500 Baht</li>
    </ul>

    <h3>Tour Highlights</h3>
    <p>
      The tour begins with a convenient private pickup from your hotel in a comfortable, air-conditioned vehicle. You’ll visit:
    </p>
    <ul>
      <li><strong>Doi Suthep Temple:</strong> Marvel at one of Chiang Mai’s most iconic temples, receive a holy blessing, and take part in a wrist-tying ceremony.</li>
      <li><strong>Bua Tong Waterfalls:</strong> Also known as the Sticky Waterfall, where you can climb the limestone rocks and enjoy the natural beauty.</li>
      <li><strong>Nam Pu Chet Si Spring:</strong> Stroll along the boardwalk to this stunning spring and enjoy its serene atmosphere.</li>
    </ul>

    <h3>Tour Schedule</h3>
    <ul>
      <li><strong>8:30 AM:</strong> Pick up at your hotel (exact time may vary by location)</li>
      <li><strong>9:30 AM:</strong> Arrive at Doi Suthep Temple</li>
      <li><strong>10:30 AM:</strong> Participate in a holy blessing and wrist-tying ceremony</li>
      <li><strong>12:30 PM:</strong> Arrive at Bua Tong Waterfalls</li>
      <li><strong>12:45 PM:</strong> Lunch time (delicious Thai food)</li>
      <li><strong>1:30 PM:</strong> Walk the boardwalk and visit Nam Pu Chet Si Spring</li>
      <li><strong>2:00 PM:</strong> Swim, take photos, and climb the Sticky Waterfall</li>
      <li><strong>3:30 PM:</strong> Depart and head back to your hotel</li>
      <li><strong>4:30 PM:</strong> Arrive back at your hotel (exact time may vary by location)</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Private round-trip transportation from your hotel</li>
      <li>English-speaking driver and tour guide</li>
      <li>Private car with A/C</li>
      <li>Lunch (Thai food)</li>
      <li>All entrance fees</li>
      <li>Mineral water</li>
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

export default PrivateTourChiangMaiDoiSuthepTempleStickyWaterfall;
