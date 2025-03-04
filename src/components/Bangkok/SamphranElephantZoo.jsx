import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo31 from './image/logo31.jpeg';
import logo31b from './image/logo31b.jpeg';
import logo31c from './image/logo31c.jpeg';
import './Bangkok.css';

const SamphranElephantZoo = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo31c);
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
            const sourceParam = encodeURIComponent('SamphranElephantZoo');
            navigate(`/samphranElephantZooPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Samphran Elephant Zoo",
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
        <img src={logo31b} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Samphran Elephant Zoo<br />
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
            <h3>Samphran Elephant Zoo</h3>
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
                            src={logo31}
                            alt="Place 31"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo31)}
                        />
                        <img
                            src={logo31b}
                            alt="Place 31b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo31b)}
                        />
                        <img
                            src={logo31c}
                            alt="Place 31c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo31c)}
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
        <h2>Samphran Elephant Zoo</h2>
        <p>
          Samphran Elephant Ground & Zoo is the perfect relaxing getaway for the entire family, just a short one-hour drive from Bangkok or the Damnoen Saduak Floating Market. It's a place where you can witness adorable trained elephants play soccer, dance, and perform 'YuthaHatthi', an exciting historical battle scene. 
          The zoo also boasts a renowned crocodile farm, hailed by CITES as "One of the cleanest and most impressive public displays of crocodiles in the world.” Don’t miss the chance to see these incredible animals up close!
        </p>
      </div>

      <h3>Show Times:</h3>
      <ul>
        <li><strong>Crocodile Wrestling Show:</strong> 12:45 PM & 2:20 PM (Duration: 20 minutes)</li>
        <li><strong>Magic Show:</strong> 1:15 PM (Duration: 30 minutes)</li>
        <li><strong>Elephant Theme Show:</strong> 1:45 PM (Duration: 30 minutes)</li>
      </ul>

      <h3>Elephant Riding Schedule:</h3>
      <ul>
        <li><strong>Monday - Saturday:</strong> 10:30 AM - 1:00 PM, 2:30 PM - 3:00 PM</li>
        <li><strong>Sunday & Public Holidays:</strong> 10:00 AM - 11:00 AM, 2:30 PM - 3:00 PM</li>
      </ul>

      <h3>Buffet Lunch at Erawan Restaurant:</h3>
      <p>11:00 AM - 2:00 PM</p>

      <h3>Child Policy:</h3>
      <ul>
        <li>Children under 100 cm in height enter free of charge.</li>
        <li>Children over 100 cm will be charged at the regular rate.</li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Admission Ticket</li>
        <li>Elephant Show</li>
        <li>Crocodile Wrestling Show</li>
        <li>Magic Show</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Elephant Riding (optional)</li>
        <li>Personal Expenses</li>
        <li>Gratuities</li>
      </ul>
    </div>
    </div>
    
    );
};

export default SamphranElephantZoo;
