import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo30 from './image/logo30.jpeg';
import logo30b from './image/logo30b.jpeg';
import logo30c from './image/logo30c.jpeg';
import './Bangkok.css';

const SiamAmazingThemePark = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo30b);
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
            const sourceParam = encodeURIComponent('SiamAmazingThemePark');
            navigate(`/siamAmazingThemeParkPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Siam Amazing Theme Park Ticket Only",
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
        const pricePerPerson = 750;
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
        <img src={logo30c} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Siam Amazing Theme Park Ticket Only<br />
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
            <h3>Siam Amazing Theme Park Ticket Only</h3>
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
                            src={logo30}
                            alt="Place 30"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo30)}
                        />
                        <img
                            src={logo30b}
                            alt="Place 30b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo30b)}
                        />
                        <img
                            src={logo30c}
                            alt="Place 30c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo30c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">750.00 Baht</p>

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
        <h2>Siam Amazing Theme Park Ticket Only</h2>
        <p>
          Discover Thailand's Premier Amusement Oasis at Siam Park City! With 120 acres full of excitement, it's home to the world's largest wave pool, Southeast Asia's tallest rainbow slide, and endless water adventures. Explore the open zoo, bird park, and lush botanical gardens. Whether you seek thrills or tranquility, Siam Park City is open year-round in Bangkok, offering a man-made sea with surf, whirlpools, and more. Don't miss this peaceful paradise with water sports galore!
        </p>
      </div>

      <h3>Itinerary:</h3>
      <ul>
        <li>
          <strong>Stop At:</strong> Siam AMAZING Park, 203 Suan Siam Rd Khwaeng Khan Na Yao, Khet Khan Na Yao, Bangkok 10230 Thailand
          <ul>
            <li><strong>Water Park:</strong> Step into the largest waterpark in Asia and unwind under the tropical coconut shades. Elevate your holiday spirit with a range of water rides, including the Guinness World Records-certified world's biggest wave pool.</li>
            <li><strong>Super Spiral:</strong> Experience the thrill of the colorful spiral slide, as tall as a 3-story building, suitable for all family members.</li>
            <li><strong>Club House:</strong> Your hub for a carefree day, offering food, beverages, swimsuit rentals, swimming rings, restroom facilities, and changing rooms.</li>
            <li><strong>Flowing Pool:</strong> Drift along the lazy river and create cherished memories with your family.</li>
            <li><strong>Speed Slide:</strong> Adventure awaits on the 7-story-high rainbow slide, once recognized by Guinness World Records.</li>
            <li><strong>Wave Pool:</strong> Immerse yourself in the world's largest wave pool, certified by Guinness World Records, with colossal waves in the heart of Bangkok.</li>
          </ul>
        </li>
      </ul>

      <p>Enjoy an unforgettable and fun-filled day at Siam's AMAZING Park!</p>

      <h3>Remark:</h3>
      <p>Special Complimentary Buffet Lunch for 1 Hour!</p>

      <h3>Child Policy:</h3>
      <ul>
        <li>Children over 130 cm in height will be charged at the adult rate.</li>
        <li>Infants under 100 cm in height can enter free of charge.</li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Admission Ticket</li>
        <li>Lunch</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Personal Expenses</li>
        <li>Gratuities</li>
      </ul>
    </div>
    </div>
    
    );
};

export default SiamAmazingThemePark;
