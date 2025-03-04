import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo11 from './image/logo11.jpeg';
import logo12 from './image/logo12.jpeg';
import logo13 from './image/logo13.jpeg';
import './Phuket.css';

const PhiPhiMayaBayBambooIsland = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo11);
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
            title: "Phi Phi Islands, Maya Bay & Khai Islands by Speedboat",
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
        const adultPrice = 1700; // New price for adults
        const childPrice = 1500;  // New price for children
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
                            <img src={logo11} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Phi Phi, Maya Bay & Bamboo Island Tour by Speedboat<br />
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

            <h3>Phi Phi, Maya Bay & Bamboo Island Tour by Speedboat</h3>
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
                            src={logo11}
                            alt="Place 11"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo11)}
                        />
                        <img
                            src={logo12}
                            alt="Place 12"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo12)}
                        />
                        <img
                            src={logo13}
                            alt="Place 13"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo13)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,700 THB, Child 1,500 THB</p>

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
    <h2>Phi Phi, Maya Bay & Bamboo Island Tour by Speedboat</h2>
    <p>
        Embark on an exciting speedboat journey to the stunning Phi Phi Islands, Maya Bay, Bamboo Island, and more! This tour includes visits to iconic spots like Maya Bay, known for its role in the movie "The Beach," and Pileh Lagoon, famously referred to as the "swimming pool in the ocean." Explore Monkey Beach, Viking Cave, and relax on white sandy beaches while enjoying snorkeling in vibrant coral reefs. A delicious Thai buffet lunch on Phi Phi Don and snacks throughout the day are included to make your experience unforgettable.
    </p>
    <p>
        Enjoy hassle-free travel with roundtrip hotel transfers, professional guides, and all the amenities needed for a memorable Andaman Sea adventure. 
    </p>
</div>

<h3>Child Policy</h3>
<ul>
    <li>Children under 3 years: <strong>Free of charge</strong>.</li>
    <li>Children aged 3-11 years: <strong>Charged at the child rate</strong>.</li>
    <li>Adult price applicable for anyone over 11 years.</li>
</ul>

<h3>Cancellation Policy</h3>
<p>
    To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). 
    <strong>No refunds</strong> will be given after this period.
</p>

<h3>Inclusions & Exclusions</h3>
<h4>What's Included:</h4>
<ul>
    <li>Round-trip hotel transfers</li>
    <li>Thai-style buffet lunch (vegetarian/halal options available)</li>
    <li>Snacks at check-in and during the day</li>
    <li>Water, soft drinks, and fresh fruits</li>
    <li>Snorkeling gear (mask and snorkel)</li>
    <li>Life jackets</li>
    <li>Accident insurance</li>
    <li>Professional Thai/English-speaking guide</li>
</ul>

<h4>What's Excluded:</h4>
<ul>
    <li>National Park fee: <strong>400 THB/adult</strong>, <strong>200 THB/child</strong></li>
    <li>Alcoholic beverages</li>
    <li>Personal expenses</li>
</ul>

<h3>Departure & Return</h3>
<p>
    <strong>07:00-08:00 am:</strong> Pickup from your hotel, depending on your location. Enjoy an air-conditioned ride to the departure pier at Royal Phuket Marina.
</p>
<p>
    <strong>09:00 am:</strong> Complimentary breakfast with coffee, tea, and snacks at the pier before departure.
</p>
<p>
    <strong>17:00 pm:</strong> Return to Royal Phuket Marina and transfer back to your hotel.
</p>

<h3>Itinerary</h3>
<p><strong>09:30 am:</strong> Arrive at Phi Phi Leh. Sightseeing at the scenic curved bay with steep cliffs.</p>
<p><strong>Maya Bay:</strong> Enjoy the iconic beach from October to July (swimming/snorkeling prohibited for conservation).</p>
<p><strong>Pileh Lagoon:</strong> Swim, paddleboard, snorkel, or enjoy the picturesque surroundings.</p>
<p><strong>Viking Cave:</strong> Take photos of bird nest harvesting sites and wall paintings.</p>
<p><strong>Phi Phi Don:</strong> Savor a buffet-style lunch and explore the island.</p>
<p><strong>Bamboo Island:</strong> Relax on sandy beaches and snorkel in vibrant coral reefs.</p>

<h3>What to Bring</h3>
<ul>
    <li>Camera</li>
    <li>Swimming suit</li>
    <li>Beach shoes</li>
    <li>A set of dry clothes</li>
    <li>Sunscreen</li>
    <li>Hat and sunglasses</li>
    <li>Cash for personal expenses</li>
</ul>

</div>

        </div>
    );
};

export default PhiPhiMayaBayBambooIsland;
