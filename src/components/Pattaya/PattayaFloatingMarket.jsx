import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo4 from './image/logo4.jpeg';
import logo5 from './image/logo5.jpeg';
import logo6 from './image/logo6.jpeg';
import './Pattaya.css';

const PattayaFloatingMarket = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [adultSeatType, setAdultSeatType] = useState('EntranceTicket'); // Match key in seatPricing
    const [childSeatType, setChildSeatType] = useState('EntranceTicket'); // Match key in seatPricing
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo4);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        window.scrollBy({ top: 300, behavior: 'smooth' });
    };

    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }

        const cartItem = {
            title: "Pattaya Floating Market",
            date: selectedDate,
            adults,
            children,
            adultSeatType,
            childSeatType,
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

    // Update total price based on selected seat types and number of people
    useEffect(() => {
        const seatPricing = {
            EntranceTicket: { adult: 120, child: 80 },
            EntrancePlusRowBoat: { adult: 300, child: 150 },
        };

        const adultPrice = seatPricing[adultSeatType]?.adult || 0;
        const childPrice = seatPricing[childSeatType]?.child || 0;

        setTotalPrice(adults * adultPrice + children * childPrice);
    }, [adults, children, adultSeatType, childSeatType]);

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
                                <strong>Title:</strong> Pattaya Floating Market<br />
                                <strong>Date:</strong> {selectedDate}<br />
                                <strong>Adults:</strong> {adults} ({adultSeatType} Seat)<br />
                                <strong>Children:</strong> {children} ({childSeatType} Seat)<br />
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

            <h3>Pattaya Floating Market</h3>
            <div className="image-with-name">
                <div className="image-container" style={{ textAlign: 'center', border: '3px solid #ccc', padding: '5px' }}>
                    <img
                        src={selectedImage}
                        alt="Selected Place"
                        className="large-image"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '5px' }}
                    />
                    <div className="small-images-container" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
                        {[logo4, logo5, logo6].map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Place ${idx + 4}`}
                                className="small-image"
                                style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">
                        Entrance ticket: Adult 120 THB, Child 80 THB<br />
                        Entrance + rowing boat: Adult 300 THB, Child 150 THB<br />
                    </p>

                    <p className="date-label highlight">Select Seat Type for Adults</p>
                    <select value={adultSeatType} onChange={(e) => setAdultSeatType(e.target.value)}>
                        <option value="EntranceTicket">Entrance ticket</option>
                        <option value="EntrancePlusRowBoat">Entrance + rowing boat</option>
                    </select>

                    <p className="date-label highlight">Select Seat Type for Children</p>
                    <select value={childSeatType} onChange={(e) => setChildSeatType(e.target.value)}>
                        <option value="EntranceTicket">Entrance ticket</option>
                        <option value="EntrancePlusRowBoat">Entrance + rowing boat</option>
                    </select>

                    <p className="date-label highlight">Select Date to Travel</p>
                    <input type="date" value={selectedDate} onChange={handleDateChange} />

                    <p className="date-label highlight">How many People</p>
                    <div className="people-selection">
                        {[
                            { label: 'Adults', value: adults, setter: setAdults, min: 1 },
                            { label: 'Children', value: children, setter: setChildren, min: 0 },
                        ].map(({ label, value, setter, min }) => (
                            <div className="person-container" key={label}>
                                <label>{label}:</label>
                                <div className="increment-decrement">
                                    <button onClick={() => setter(Math.max(min, value - 1))}>-</button>
                                    <span>{value}</span>
                                    <button onClick={() => setter(value + 1)}>+</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p>Check the result of Selected Items below</p>
                </div>

                <div className="results">
                    <h4>Your Selection:</h4>
                    <div className="selection-details">
                        <p>Date: {selectedDate}</p>
                        <p>Number of Adults: {adults} ({adultSeatType} Seat)</p>
                        <p>Number of Children: {children} ({childSeatType} Seat)</p>
                        <p>Total Price: {totalPrice} Baht</p>
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
    <h2>Pattaya Floating Market</h2>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Entrance Ticket:</strong></li>
      <ul>
        <li>Adult: 120 Baht</li>
        <li>Child (90-120 cm): 80 Baht</li>
      </ul>
      <li><strong>Entrance + Rowing Boat:</strong></li>
      <ul>
        <li>Adult: 300 Baht</li>
        <li>Child (90-120 cm): 150 Baht</li>
      </ul>
    </ul>

    <h3>Experience Overview</h3>
    <p>
      Established in 2008, Pattaya Floating Market is a vibrant riverside attraction that showcases Thailand’s traditional riverside living communities. Visitors can explore authentic Thai culture, local handicrafts, and traditional ways of life. The market features live demonstrations of Thai arts, crafts, and wisdom from various regions. Guests can also try making handicrafts themselves or enjoy a scenic rowing boat ride through the market while sampling unique Thai street food.
    </p>

    <h3>Inclusions</h3>
    <ul>
      <li>Entrance ticket to Pattaya Floating Market</li>
      <li>Pre-booking required (tickets must be booked 24 hours in advance)</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Food and beverages</li>
    </ul>

    <h3>Child Policy</h3>
    <p>
      Children under the age of 3 travel for free. Children aged 3-9 are charged at the child rate, and those above 9 are charged as adults.
    </p>

    <h3>Cancellation Policy</h3>
    <p>
      Free cancellation up to 24 hours in advance.
    </p>

    <h3>Additional Information</h3>
    <p>
      Discover a unique Thai floating market experience with cultural performances, boat rides, and authentic local shopping. 
    </p>
  </div>
</div>

        </div>
    );
};

export default PattayaFloatingMarket;
