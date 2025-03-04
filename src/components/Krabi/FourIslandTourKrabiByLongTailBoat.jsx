import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo10 from './image/logo10.jpeg';
import logo11 from './image/logo11.jpeg';
import logo12 from './image/logo12.jpeg';
import './Krabi.css';

const FourIslandTourKrabiByLongTailBoat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo10);
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
            title: "4 Island Tour from Krabi by Long Tail Boat",
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
        const adultPrice = 900; // New price for adults
        const childPrice = 700;  // New price for children
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
                            <img src={logo10} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>4 Island Tour from Krabi by Long Tail Boat<br />
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

            <h3>4 Island Tour from Krabi by Long Tail Boat</h3>
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
                            src={logo10}
                            alt="Place 10"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo10)}
                        />
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
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 900 THB , Child 700 THB</p>

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
    <h2>4 Island Tour from Krabi by Long Tail Boat</h2>
    <p>
      Experience the breathtaking beauty of Krabi’s four famous islands on this longtail boat tour. Start with a visit to Railay Beach and Phra Nang Cave, home to stunning limestone cliffs and a revered holy site. Then, explore the scenic wonders of Thap Island, Kai Island, and Mo Island—part of Thailand’s "Unseen Thailand" gems. Enjoy a delicious lunch at Poda Island, take in the view of Tangming Island, and finish the tour with swimming and snorkeling in crystal-clear waters, surrounded by colorful coral and fish.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Adult:</strong> 900 Baht</li>
      <li><strong>Child:</strong> 700 Baht</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>08:00 A.M.</strong> Hotel transfer (Krabi Town, Klong Muang Beach, Tub Keak Beach)</li>
      <li><strong>08:50 A.M.</strong> Hotel transfer (Ao Nang Area)</li>
      <li><strong>09:00 A.M.</strong> Arrive at Anda Krabi Seatour Pier, board longtail boat</li>
      <li><strong>09:30 A.M.</strong> Pass small islands on the way to Railay Bay</li>
      <li><strong>10:00 A.M.</strong> Visit Phra Nang Cave Beach—swim, snorkel, and explore the sacred cave</li>
      <li><strong>11:00 A.M.</strong> Arrive at Thale Waek, explore Tup, Mo, and Chicken Islands</li>
      <li><strong>12:00 P.M.</strong> Lunch at Poda Island, enjoy scenic views of Tangming Island</li>
      <li><strong>01:00 P.M.</strong> Depart to Chicken Island—take photos, snorkel, and explore</li>
      <li><strong>02:00 P.M.</strong> End of tour, return to the pier</li>
      <li><strong>03:00 P.M.</strong> Transfer back to hotel</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Longtail boat transportation</li>
      <li>Picnic lunch</li>
      <li>Fruit and bottled water</li>
      <li>Life jacket</li>
      <li>Snorkeling mask</li>
      <li>Insurance</li>
      <li>Experienced licensed guide</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>National park entrance fee</li>
      <li>Personal expenses</li>
      <li>Tips and gratuities</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This tour offers an unforgettable experience exploring Krabi’s famous islands, with opportunities to swim, snorkel, and admire stunning rock formations. Don’t forget to bring sunscreen, a towel, and a camera to capture the beauty of Thailand’s pristine beaches.
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

    );
};

export default FourIslandTourKrabiByLongTailBoat;
