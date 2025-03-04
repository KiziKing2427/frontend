import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo32 from './image/logo32.jpeg';
import logo32b from './image/logo32b.jpeg';
import logo32c from './image/logo32c.jpeg';
import './Bangkok.css';

const AmphawaFloatingMarketBangkok = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo32c);
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
            const sourceParam = encodeURIComponent('AmphawaFloatingMarketBangkok');
            navigate(`/amphawaFloatingMarketBangkokPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Amphawa Floating Market Bangkok (Group Tour)",
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
        const pricePerPerson = 1500;
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
        <img src={logo32} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong> Amphawa Floating Market Bangkok (Group Tour)<br />
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
            <h3>Amphawa Floating Market Bangkok (Group Tour)</h3>
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
                            src={logo32}
                            alt="Place 32"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo32)}
                        />
                        <img
                            src={logo32b}
                            alt="Place 32b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo32b)}
                        />
                        <img
                            src={logo32c}
                            alt="Place 32c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo32c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">1,500.00 Baht</p>

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
        <h2>Amphawa Floating and Railway Market Private Tour (Group Tour)</h2>
        <p>
          Seize the opportunity to explore Amphawa, one of the most popular floating markets near Bangkok, visited almost exclusively by locals. Located 50 km from Bangkok, this once-small village has transformed into a bustling hub. The market features food stalls stretching from the riverbanks to the surrounding streets, attracting Thai weekenders in droves.
        </p>
        <p>
          On this immersive half-day trip from Bangkok, you’ll explore Thailand's floating markets by boat along the riverbank. Discover and buy traditional Thai snacks that make for perfect souvenirs. Additionally, witness the remarkable scene of a train passing through the middle of the bustling Maeklong Railway Market!
        </p>
      </div>

      <h3>Stop At: Maeklong Railway Market (Talad Rom Hub)</h3>
      <p>
        The tour starts with a pick-up at 6:00 AM and a drive to Maeklong Railway Market, also known as "Talad Rom Hub" or "umbrella pull-down market." Famous for its seafood and fresh produce, this unique market stretches along a railway track. Witness vendors pulling their awnings and stalls back when a train approaches and setting them up again once the train passes.
      </p>

      <h3>Itinerary:</h3>
      <ul>
        <li>11:30 AM - Pick up from various hotels</li>
        <li>12:30 PM - Depart for Samutsongkram Province</li>
        <li>2:00 PM - Visit Maeklong Railway Market (Talad Rom Hub)</li>
        <li>2:30 PM - Watch the train pass through the busy market</li>
        <li>3:30 PM - Drive to Amphawa Floating Market</li>
        <li>4:00 PM - Take a long-tail boat ride along the canal</li>
        <li>5:00 PM - Free time at Amphawa Floating Market</li>
        <li>6:00 PM - Depart for Bangkok</li>
        <li>8:00 PM - Return to your hotel</li>
      </ul>

      <p><strong>Tour Available:</strong> Only on Friday, Saturday, and Sunday</p>

      <h3>Child Policy:</h3>
      <ul>
        <li>Adult Price: 2650 Baht per person (minimum 2 pax)</li>
        <li>Adult Rate: Applicable for guests over 120 cm in height</li>
        <li>Child Rate: Applicable for children under 120 cm in height</li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Private transport in an air-conditioned vehicle</li>
        <li>Local English-speaking guide</li>
        <li>Long-tail boat ride at Amphawa Floating Market</li>
        <li>Hotel pickup and drop-off (for selected hotels)</li>
        <li>Entry/Admission to Maeklong Railway Market</li>
        <li>Entry/Admission to Amphawa Floating Market</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Gratuities (optional)</li>
        <li>Souvenir photos (available for purchase)</li>
        <li>Jungle Walk</li>
      </ul>
      </div>
    </div>
    
    );
};

export default AmphawaFloatingMarketBangkok;
