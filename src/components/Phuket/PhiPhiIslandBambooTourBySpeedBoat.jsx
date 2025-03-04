import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo56 from './image/logo56.jpeg';
import logo57 from './image/logo57.jpeg';
import logo58 from './image/logo58.jpeg';
import './Phuket.css';

const PhiPhiIslandBambooTourBySpeedBoat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo56);
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
            title: "Phi Phi Island and Bamboo Island Tour by Speed Boat",
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
        const adultPrice = 2200; // New price for adults
        const childPrice = 1800;  // New price for children
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
                                <strong>Title:</strong> Phi Phi Island and Bamboo Island Tour by Speed Boat"<br />
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

            <h3>Phi Phi Island and Bamboo Island Tour by Speed Boat"</h3>
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
                            src={logo56}
                            alt="Place 56"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo56)}
                        />
                        <img
                            src={logo57}
                            alt="Place 57"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo57)}
                        />
                        <img
                            src={logo58}
                            alt="Place 58"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo58)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 2,200 THB, Child 1,800 THB</p>

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
    <h2>Phi Phi Island and Bamboo Island Tour by Speed Boat</h2>
    <p>
      Discover the natural wonders of the Phi Phi Islands on this exciting boat tour from Phuket. Snorkel through vibrant marine life at Bamboo Island and Maya Bay. Marvel at the stunning limestone formations of the Viking Cave and the breathtaking turquoise waters of Pileh Lagoon.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li>Adult: 2,200 Baht</li>
      <li>Child: 1,800 Baht</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li>
        <strong>8:00 AM:</strong> Following pickup in a minivan, head to the marina. At the marina, your guide will provide a brief introduction to the day.
      </li>
      <li>
        Take a speedboat ride to Bamboo Island. Swim in the crystal-clear waters, snorkel to explore the vibrant underwater world, or stroll along the white sandy beach.
      </li>
      <li>
        Visit Yong Kasem, also known as Monkey Beach, to continue snorkeling and discover stunning coral reefs.
      </li>
      <li>
        Enjoy a delicious lunch at a beach-side restaurant on Phi Phi Don.
      </li>
      <li>
        Explore Phi Phi Island, including the Viking Cave, the turquoise waters of Pileh Lagoon, and swim in a natural pool surrounded by cliffs.
      </li>
      <li>
        Stop at Maya Bay, famous for the movie "The Beach," and relax on the pristine white sand beach.
      </li>
      <li>
        <strong>5:30 PM:</strong> Return to the marina and transfer back to your hotel in Phuket.
      </li>
    </ul>

    <h3>Tour Includes</h3>
    <ul>
      <li>Snorkel mask</li>
      <li>Accident insurance</li>
      <li>Coffee, tea, and snacks</li>
      <li>Life jacket</li>
      <li>Lunch</li>
      <li>English-speaking tour guide</li>
      <li>Soft drink</li>
      <li>National park fee</li>
    </ul>

    <h3>Excludes</h3>
    <ul>
      <li>Any personal expenses</li>
      <li>Tips and gratuity</li>
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
   
</div>
    );
};

export default PhiPhiIslandBambooTourBySpeedBoat;
