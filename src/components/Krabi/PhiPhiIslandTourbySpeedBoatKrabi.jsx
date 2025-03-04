import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo4 from './image/logo4.jpeg';
import logo5 from './image/logo5.jpeg';
import logo6 from './image/logo6.jpeg';
import './Krabi.css';

const PhiPhiIslandTourbySpeedBoatKrabi = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo4);
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
            title: "PHI PHI Island Tour by Speed Boat from Krabi",
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
        const childPrice = 1200;  // New price for children
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
                            <img src={logo4} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>PHI PHI Island Tour by Speed Boat from Krabi<br />
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

            <h3>PHI PHI Island Tour by Speed Boat from Krabi</h3>
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
                            src={logo4}
                            alt="Place 4"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo4)}
                        />
                        <img
                            src={logo5}
                            alt="Place 5"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo5)}
                        />
                        <img
                            src={logo6}
                            alt="Place 6"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo6)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1500THB , Child 1200 THB</p>

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
  <h2>Phi Phi Island Tour by Speed Boat from Krabi</h2>
    <p>
      Explore the world-famous Phi Phi Islands, known for their breathtaking scenery, white sandy beaches, and turquoise waters. These islands gained international fame as the setting for Leonardo DiCaprio’s movie *The Beach*. The tour covers six islands, including Phi Phi Don and Phi Phi Le, along with smaller gems like Koh Yung, Koh Mai Phai, Koh Bida Nok, and Koh Pida Nai.
    </p>
    <h3>Pricing</h3>
    <ul>
      <li><strong>Adult:</strong> 1,500 Baht</li>
      <li><strong>Child:</strong> 1,200 Baht</li>
    </ul>
    <h3>Tour Schedule</h3>
    <ul>
      <li><strong>08:00:</strong> Pick-up from your hotel</li>
      <li><strong>09:00:</strong> Depart from Ao Nang Pier</li>
      <li><strong>Bamboo Island:</strong> Enjoy swimming and snorkeling activities</li>
      <li><strong>Monkey Beach:</strong> Visit this iconic beach</li>
      <li><strong>Tonsai Bay:</strong> Enjoy a delicious Thai lunch at a beachside restaurant</li>
      <li><strong>Viking Cave:</strong> Explore this unique natural attraction</li>
      <li><strong>Pi Leh Bay:</strong> Marvel at the crystal-clear waters</li>
      <li><strong>Loh Samah Bay:</strong> Snorkel in pristine waters</li>
      <li><strong>Maya Beach:</strong> Visit the famous movie setting of *The Beach*</li>
      <li><strong>16:30:</strong> Arrive back at the pier and transfer to your hotel</li>
    </ul>
    <p>
      * The menu is subject to change based on the season and ingredient availability.
      * The schedule is subject to change based on weather and traffic conditions on your activity date.
    </p>
    <h3>Inclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Accident insurance</li>
      <li>English-speaking guide</li>
      <li>Mask and snorkel</li>
      <li>Life jacket</li>
      <li>Fresh fruit and water</li>
      <li>Lunch</li>
    </ul>
    <h3>Exclusions</h3>
    <ul>
      <li>National park entrance fee:</li>
      <ul>
        <li>Adult: 400 Baht</li>
        <li>Child (4-11 years): 200 Baht</li>
      </ul>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Don’t forget to bring swimwear, sunscreen, a hat, and a towel for this full-day adventure. Perfect for families, couples, and solo travelers looking to explore Thailand's natural wonders.
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

export default PhiPhiIslandTourbySpeedBoatKrabi;
