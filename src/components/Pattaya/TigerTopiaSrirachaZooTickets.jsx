import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo25 from './image/logo25.jpeg';
import logo26 from './image/logo26.jpeg';
import logo27 from './image/logo27.jpeg';
import './Pattaya.css';

const TigerTopiaSrirachaZooTickets = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1); // Default 1 adult
    const [children, setChildren] = useState(0);
    const [extraCharge, setExtraCharge] = useState('TigerAndCrocodile'); // Default extra charge
    const [totalPrice, setTotalPrice] = useState(450); // Default price based on initial extra charge
    const [selectedImage, setSelectedImage] = useState(logo25);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    // Updated extra charges for activities
    const extraCharges = {
        TigerAndCrocodile: { price: 450 },
        ForestWalkWithTiger: { price: 1500 },
        PhotoWithTiger: { price: 250 },
        PhotoWithLion: { price: 250 },
        PhotoWithBabyAndLargeCrocodile: { price: 250 },
        ShootAndFeedTigers: { price: 150 },
        FeedingCrocodiles: { price: 150 }
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
            title: "Tiger Topia Sriracha Zoo",
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
                            <img src={logo25} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Tiger Topia Sriracha Zoo<br />
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

            <h3>Tiger Topia Sriracha Zoo</h3>
            <div className="image-with-name">
                <div className="image-container" style={{ textAlign: 'center', border: '3px solid #ccc', padding: '5px' }}>
                    <img
                        src={selectedImage}
                        alt="Selected Place"
                        className="large-image"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '5px' }}
                    />
                    <div className="small-images-container" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
                        {[logo25, logo26, logo27].map((img, idx) => (
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
                        <option value="TigerAndCrocodile">Tiger + Crocodile (450 baht)</option>
                        <option value="ForestWalkWithTiger">Forest walk with tiger (1500 baht)</option>
                        <option value="PhotoWithTiger">Photo with tiger (250 baht)</option>
                        <option value="PhotoWithLion">Photo with lion (250 baht)</option>
                        <option value="PhotoWithBabyAndLargeCrocodile">Photo with baby + Large crocodile (250 baht)</option>
                        <option value="ShootAndFeedTigers">Shoot & feed tigers (150 baht)</option>
                        <option value="FeedingCrocodiles">Feeding crocodiles (150 baht)</option>
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
                    <h2>Tiger Topia Sriracha Zoo</h2>

<h3>Experience Overview</h3>
<p>
  Welcome to <strong>Tiger Topia Sriracha Zoo</strong>—an exciting wildlife experience where you can engage with magnificent tigers, lions, and crocodiles! Previously known as the Tiger Zoo, the park offers thrilling activities such as walking with tigers, taking photos with them, and even feeding them in a unique shooting-target activity. Don’t miss the opportunity to hand-feed baby tigers or crocodiles. 
</p>
<p>
  Enjoy 3 rounds of thrilling tiger and crocodile shows throughout the day—it's an adventure you won't forget!
</p>
<h3>Address</h3>
    <p>Tiger Topia Zoo, Sriracha, Chonburi, Chon Buri, Thailand, Chon Buri</p>

    <h3>Showtime</h3>
    <ul>
      <li><strong>Tiger Show:</strong> 10:30 / 12:10 / 13:40</li>
      <li><strong>Crocodile Show:</strong> 09:50 / 11:20 / 13:00 / 14:30</li>
    </ul>

    <h3>Pricing</h3>
    <p><strong>Price:</strong></p>
    <ul>
      <li>Tiger + Crocodile Show: 450 Baht</li>
      <li>Forest Walk with Tiger: 1500 Baht</li>
      <li>Photo with Tiger: 250 Baht</li>
      <li>Photo with Lion: 250 Baht</li>
      <li>Photo with Baby + Large Crocodile: 250 Baht</li>
      <li>Shoot & Feed Tigers: 150 Baht</li>
      <li>Feeding Crocodiles: 150 Baht</li>
    </ul>
    <h3>Children Policy</h3>
    <p>Children under 140 cm must be accompanied by a paying adult.</p>

    <h3>Cancellation Policy</h3>
    <p>
      <strong>Cancellations:</strong> Allowed up to 48 hours before departure. 
      <strong>No Refund:</strong> If absent at the time of departure. 
      <strong>Voucher Usage:</strong> Valid only for the specified date and time.
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

export default TigerTopiaSrirachaZooTickets;
