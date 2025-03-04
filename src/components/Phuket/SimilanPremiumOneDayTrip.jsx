import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo29 from './image/logo29.jpeg';
import logo30 from './image/logo30.jpeg';
import logo31 from './image/logo31.jpeg';
import './Phuket.css';

const SimilanPremiumOneDayTrip = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo29);
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
            title: "Similan Premium One Day Trip (Phuket)",
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
        const adultPrice = 2800; // New price for adults
        const childPrice = 2000;  // New price for children
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
                            <img src={logo29} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Similan Premium One Day Trip (Phuket) <br />
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

            <h3>Similan Premium One Day Trip (Phuket) </h3>
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
                            src={logo29}
                            alt="Place 29"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo29)}
                        />
                        <img
                            src={logo30}
                            alt="Place 30"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo30)}
                        />
                        <img
                            src={logo31}
                            alt="Place 31"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo31)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 2,800 THB, Child 2,000 THB</p>

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
    <h2>Similan Premium One Day Trip (Phuket)</h2>
    <p><strong>Price:</strong></p>
    <ul>
        <li>Adult: <strong>2800 THB</strong></li>
        <li>Child: <strong>2000 THB</strong></li>
    </ul>

    <h3>Description</h3>
    <p>
        The Similans are comprised of nine granite islands that run roughly north to south, along with numerous small rock outcroppings, white beaches, and tropical jungle above the water. Beneath the surface, there are spectacular dive sites in warm, clear waters. 
    </p>
    <p>
        The scuba diving in the Similan Islands varies from gently sloping coral reefs to deep rocky gorges and dizzying landscapes. In general, the east coast dive sites are hard coral reef dives, with some soft corals and a huge variety and abundance of marine life. The diving is fairly relaxed, with weak currents and 30m visibility. The west coast sites of the Similan Islands are slightly more challenging due to their depths and variable currents.
    </p>
</div>

<h3>Itinerary (Estimated Times)</h3>
<ul>
    <li><strong>5:30 - 7:00 AM:</strong> Hotel pickup (Pickup time depends on your hotel location; please check the confirmation email)</li>
    <li><strong>7:30 AM:</strong> Arrive at Wow Andaman's private pier. Check in and enjoy breakfast, coffee & tea.</li>
    <li><strong>8:15 AM:</strong> Trip briefing, then depart for Similan Island National Park.</li>
    <li><strong>9:30 AM:</strong> Arrive at Koh Miang (Island No.4). Walk on the soft white sand beach and see the island's beauty.</li>
    <li><strong>10:30 AM:</strong> Snorkeling in crystal-clear water at Payu Island (Island No.7). Note: This snorkeling spot is currently unavailable for nature rehabilitation. Extended snorkeling sessions at Islands 8 and 9 are provided.</li>
    <li><strong>11:30 AM:</strong> Snorkeling at Koh Ba Ngu (Island No.9), a spectacular point in nature-rich seawater.</li>
    <li><strong>12:15 PM:</strong> Enjoy a delicious lunch on Similan Island (Island No.8).</li>
    <li><strong>1:15 PM:</strong> Relax on the beach, swim in emerald-clear water, or walk up to the viewpoint on the famous Sailing Rock.</li>
    <li><strong>2:00 PM:</strong> Explore the rich ecosystem of Similan Island with a guide introducing various local animals and plants.</li>
    <li><strong>3:30 PM:</strong> Enjoy the last snorkeling point at Similan Island.</li>
    <li><strong>4:15 PM:</strong> Depart from Similan Island.</li>
    <li><strong>5:30 PM:</strong> Arrive at Wow Andaman's private pier. Enjoy a "southern Thailand" style dinner before returning to your hotel.</li>
</ul>

<h3>Inclusions</h3>
<ul>
    <li>Transfer by speedboat</li>
    <li>Round-trip transfer from Phuket</li>
    <li>English-speaking guide</li>
    <li>Breakfast, lunch, and snacks in the evening</li>
    <li>Soft drinks and fruits</li>
    <li>National park fees</li>
    <li>Mask, snorkel, and fins</li>
    <li>Insurance</li>
</ul>

<h3>Exclusions</h3>
<ul>
    <li>Personal expenses</li>
    <li>Gratuities and tips</li>
</ul>

<h3>What to Bring</h3>
<ul>
    <li>Sunscreen (coral reef-safe type)</li>
    <li>Sunglasses and hat</li>
    <li>Camera</li>
    <li>Photo of your passport on your mobile phone</li>
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
    );
};

export default SimilanPremiumOneDayTrip;
