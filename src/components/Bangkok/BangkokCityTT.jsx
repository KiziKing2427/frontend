import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo25 from './image/logo25.jpeg';
import logo25b from './image/logo25b.jpeg';
import logo25c from './image/logo25c.jpeg';
import './Bangkok.css';

const BangkokCityTT = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo25c);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false); // New state for success window
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    
        // Automatically scroll down by 200 pixels
        window.scrollBy({
            top: 300, // Scroll down by 200px
            behavior: 'smooth' // Smooth scroll animation
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
            const sourceParam = encodeURIComponent('BangkokCityTT');
            navigate(`/bangkokCityTTPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Bangkok City \nand Temple Tour (Group Tour)",
            date: selectedDate,
            adults,
            children,
            totalPrice,
            image: selectedImage
        };
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        setShowSuccessWindow(true); // Show the success window
    };

    const handleGoToCart = () => {
        setShowSuccessWindow(false); // Hide the success window
        navigate('/cart'); // Redirect to the cart page
    };

    useEffect(() => {
        const pricePerPerson = 900;
        setTotalPrice((adults + children) * pricePerPerson);
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
        <img src={logo25c} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Bangkok City And Temple Tour (Group Tour)<br />
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
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/');
  }}
>
  Add More Product
</button>

                    </div>
                    </div>
                </div>
            )}
            <h3>Bangkok City And Temple Tour (Group Tour)</h3>
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
                            src={logo25}
                            alt="Place 25"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo25)}
                        />
                        <img
                            src={logo25b}
                            alt="Place 25b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo25b)}
                        />
                        <img
                            src={logo25c}
                            alt="Place 25c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo25c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">900.00 Baht</p>

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
{/* The description and info window section */}
<div className="info-window">
<h4>Description</h4>
      <div>
        <h2>Group and Join Tour (Group Tour)</h2>
        <p>
          A Group and Join tour is exclusively for those who enjoy traveling with a group. Most Indian groups participate in these tours. Our Bangkok City Tour also takes you to the Gems Gallery, where you can see and purchase the most precious gems with confidence.
        </p>
        
        <h3>Highlights:</h3>
        <ul>
          <li><strong>Wat Trimit (Golden Buddha):</strong> Visit the temple of the golden Buddha, which features 5.5 tons of solid gold sculpted in the Sukhothai style. Pickup from multiple hotels.</li>
          <li><strong>City Drive:</strong> Pass through China Town (Yaowarat Road), India Town, and more famous landmarks.</li>
          <li><strong>Wat Maha Phruettharam Worawihan (Mini Reclining Buddha):</strong> Explore this small reclining Buddha temple near the Bangkokian Museum. A must-see with its combination of a Reclining Buddha and a stupa similar to Wat Arun.</li>
          <li><strong>Gems Gallery:</strong> Appreciate the craftsmanship and high-quality gems available for purchase, complete with certification and a tax refund at the airport.</li>
        </ul>
      </div>

      <h3>Itinerary:</h3>
      <ul>
        <li><strong>08:00 AM:</strong> Pickup from various hotels (4-5 stops).</li>
        <li><strong>09:00 AM:</strong> Visit Golden Buddha (Wat Traimit).</li>
        <li><strong>10:00 AM:</strong> Visit Mini Reclining Buddha (Wat Noi or Mahapruttaram Temple).</li>
        <li><strong>11:00 AM:</strong> Gems Gallery for shopping.</li>
        <li><strong>12:00 PM:</strong> Return to hotel.</li>
      </ul>

      <p>
        <strong>Note:</strong> We provide roundtrip transfers from Sukhumvit Soi 1-39, Ploenchit, Chitlom, Pratunam, Silom, and Sathorn. 
        Tourists can choose between a morning tour (8 AM) and an afternoon tour (1 PM). Please note that our Join Tours may have a waiting time of 15-30 minutes due to multiple hotel pickups.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Roundtrip transfer</li>
        <li>Entry ticket</li>
        <li>English-speaking guide</li>
        <li>Air-conditioned vehicle</li>
        <li>Daily operation</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Personal expenses</li>
        <li>Tips and gratitude</li>
      </ul>

      <h3>Child Policy:</h3>
      <ul>
        <li>Children aged 0-2: <strong>Free of charge</strong></li>
        <li>Children aged 3-7: <strong>Charged at the child rate</strong></li>
        <li>Everyone else: <strong>Charged at the adult rate</strong></li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local timezone). 
        <strong>No refunds</strong> will be given after this period.
      </p>
    </div>
</div>    
    
    );
};

export default BangkokCityTT;
