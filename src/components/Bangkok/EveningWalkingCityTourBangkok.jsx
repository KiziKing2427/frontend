import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo35 from './image/logo35.jpeg';
import logo35b from './image/logo35b.jpeg';
import logo35c from './image/logo35c.jpeg';
import './Bangkok.css';

const EveningWalkingCityTourBangkok = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo35c);
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
            const sourceParam = encodeURIComponent('EveningWalkingCityTourBangkok');
            navigate(`/eveningWalkingCityTourBangkokPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Evening Walking City Tour Bangkok (Group Tour)",
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
        const pricePerPerson = 1000;
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
        <img src={logo35b} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Evening Walking City Tour Bangkok (Group Tour)<br />
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
            <h3>Evening Walking City Tour Bangkok (Group Tour)</h3>
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
                            src={logo35}
                            alt="Place 35"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo35)}
                        />
                        <img
                            src={logo35b}
                            alt="Place 35b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo35b)}
                        />
                        <img
                            src={logo35c}
                            alt="Place 35c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo35c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">1000.00 Baht</p>

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
        <h2>Evening Walking City Tour Bangkok (Group Tour)</h2>
        <p>
          This is an invitation to an exceptional evening in Bangkok filled with fun, memories, and excitement. We will travel through the Chao Phraya River to capture the stunning sunset near Wat Arun, also known as the Temple of the Sun. As we sail along, you'll witness the legendary art of flower folding at Bangkok's biggest flower market. Learn how flowers are skillfully folded and offered to the gods, creating a cultural and scenic adventure you'll never forget.
        </p>
      </div>

      <h3>Itinerary:</h3>
      <ul>
        <li>
          <strong>05:15 PM:</strong> Meet at Saphan Taksin BTS station, Exit Gate No. 02.
        </li>
        <li>
          <strong>05:30 PM:</strong> Take a public boat to visit Pak Klong Talat (Flower Market) and enjoy the sunset near Wat Arun (Temple of the Sun).
        </li>
        <li>
          <strong>06:00 PM:</strong> Experience the art of flower folding at Pak Klong Talat (Flower Market).
        </li>
        <li>
          <strong>06:30 PM:</strong> Walk towards the Reclining Buddha and the Royal Grand Palace for some cultural sightseeing.
        </li>
        <li>
          <strong>07:30 PM:</strong> Enjoy a food hopping tour, customized to your tastes, at some of the best riverside restaurants.
        </li>
        <li>
          <strong>08:30 PM:</strong> Return to Sanam Chai MRT station.
        </li>
      </ul>

      <h3>Departure & Return:</h3>
      <p>
        <strong>Departure Point:</strong> From the provided pickup area point.<br />
        <strong>Departs:</strong> Check availability for specific dates and times.<br />
        <strong>Departure Time:</strong> 05:15 PM sharp. Booking cutoff at 08:00 AM on the day of the tour.
      </p>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers must cancel at least <strong>24 hours before</strong> the experience start date (local time zone). No refunds will be provided after that period.
      </p>
    </div>
      
      </div>
    
    );
};

export default EveningWalkingCityTourBangkok;
