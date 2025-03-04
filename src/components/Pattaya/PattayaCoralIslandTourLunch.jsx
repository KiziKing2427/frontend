import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo49 from './image/logo49.jpeg';
import logo50 from './image/logo50.jpeg';
import logo51 from './image/logo51.jpeg';
import './Pattaya.css';

const PattayaCoralIslandTourLunch = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1); // Default 1 adult
    const [children, setChildren] = useState(0);
    const [extraCharge, setExtraCharge] = useState('Indianlunch'); // Default extra charge
    const [totalPrice, setTotalPrice] = useState(300); // Default price based on initial extra charge
    const [selectedImage, setSelectedImage] = useState(logo49);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    // Updated extra charges for activities
    const extraCharges = {
        Indianlunch: { price: 300 },
        Thailunch: { price: 800 },
    };


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
            title: "Pattaya Coral Island Tour with Lunch",
            date: selectedDate,
            adults,
            children,
            extraCharge,
            totalPrice,
            selectedImage,
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

    // Update total price based on selected extra charge, number of people, and their selected activities
    useEffect(() => {
        let extraChargesAmount = 0;

        if (extraCharge !== 'None') {
            const extra = extraCharges[extraCharge];
            extraChargesAmount = extra?.price || 0;
        }

        // Calculate total price
        const finalTotalPrice = (extraChargesAmount * (adults + children));
        setTotalPrice(finalTotalPrice);
    }, [adults, children, extraCharge]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Thailand-Places">
            {showSuccessWindow && (
                <div className="success-window">
                    <div className="success-content">
                        <div className="success-image-container">
                            <img src={logo49} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Pattaya Coral Island Tour with Lunch<br />
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

            <h3>Pattaya Coral Island Tour with Lunch</h3>
            <div className="image-with-name">
                <div className="image-container" style={{ textAlign: 'center', border: '3px solid #ccc', padding: '5px' }}>
                    <img
                        src={selectedImage}
                        alt="Selected Place"
                        className="large-image"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '5px' }}
                    />
                    <div className="small-images-container" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
                        {[logo49, logo50, logo51].map((img, idx) => (
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
                    <p className="date-label highlight">Select Extra Activities</p>
                    <select value={extraCharge} onChange={(e) => setExtraCharge(e.target.value)}>
                        <option value="Indianlunch">Indian lunch (300 baht)</option>
                        <option value="Thailunch">Thai lunch (800 baht)</option>
                    </select>

                    <p className="date-label highlight">Select Date to Travel</p>
                    <input type="date" value={selectedDate} onChange={handleDateChange} />

                    <p className="date-label highlight">How many People</p>
                    <div className="people-count">
                        <label>
                            Adults:
                            <button onClick={() => setAdults(adults - 1)} disabled={adults === 0}>-</button>
                            <input type="number" value={adults} readOnly />
                            <button onClick={() => setAdults(adults + 1)}>+</button>
                        </label>
                        <label>
                            Children:
                            <button onClick={() => setChildren(children - 1)} disabled={children === 0}>-</button>
                            <input type="number" value={children} readOnly />
                            <button onClick={() => setChildren(children + 1)}>+</button>
                        </label>
                    </div>

                    <div className="total-price">
                        <p className="price-highlight">Total Price: {totalPrice} THB</p>
                        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>

  <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>Pattaya Coral Island Tour with Lunch</h2>

    <h3>Experience Overview</h3>
    <p>
      Escape to <strong>Koh Larn (Coral Island)</strong>, a paradise known for its <strong>crystal-clear waters, white sandy beaches, and vibrant coral reefs</strong>. Whether you want to relax under the sun or engage in thrilling water activities, this island has something for everyone. 
    </p>
    <p>
      Enjoy optional water sports such as <strong>parasailing, water-skiing, jet skiing, snorkeling, and deep-sea diving</strong>. For a more immersive experience, explore the coral and marine life around nearby islands <em>Koh Krok</em> and <em>Koh Sak</em>.
    </p>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>09:30 - 10:00 AM</strong>: Hotel pick-up</li>
      <li><strong>10:30 AM</strong>: Arrival at <strong>Tawean Beach</strong></li>
      <li><strong>11:00 AM</strong>: Arrival at <strong>Koh Larn (Coral Island)</strong> – Enjoy the beach & optional water activities</li>
      <li><strong>12:30 PM For Thai </strong>: Lunch in the Island and Indian Lunch at Indian Restaurant in the City</li>
      <li><strong>15 hours retun back to your hotels</strong></li>
    </ul>

    <h3>Lunch Options & Pricing</h3>
    <ul>
      <li><strong>Indian Lunch</strong>: 300 Baht per person</li>
      <li><strong>Thai Lunch</strong>: 800 Baht per person</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>English-speaking guide</li>
      <li>Lunch (as per selection)</li>
      <li>Round-trip air-conditioned vehicle</li>
      <li>PA Insurance provided by the operator</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Gratuities</li>
      <li>Water sports activities (parasailing, jet ski, snorkeling, etc.)</li>
      <li>Personal expenses</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Enjoy a <strong>relaxing island getaway</strong> with this Coral Island tour! Whether you're looking to unwind by the beach or engage in exciting activities, this trip offers an unforgettable experience. 
      <strong>Book now</strong> to secure your spot!
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
</div>
    );
};

export default PattayaCoralIslandTourLunch;
