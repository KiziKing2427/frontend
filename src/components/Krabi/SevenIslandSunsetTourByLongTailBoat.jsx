import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from './image/logo1.jpeg';
import logo2 from './image/logo2.jpeg';
import logo3 from './image/logo3.jpeg';
import './Krabi.css';

const SevenIslandSunsetTourByLongTailBoat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo1);
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
            title: "7 Island Sunset Tour by Long Tail Boat",
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
        const adultPrice = 1200; // New price for adults
        const childPrice = 950;  // New price for children
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
                            <img src={logo1} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>7 Island Sunset Tour by Long Tail Boat<br />
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

            <h3>7 Island Sunset Tour by Long Tail Boat</h3>
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
                            src={logo1}
                            alt="Place 1"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo1)}
                        />
                        <img
                            src={logo2}
                            alt="Place 2"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo2)}
                        />
                        <img
                            src={logo3}
                            alt="Place 3"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo3)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1200THB , Child 950 THB</p>

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
    <h2>7 Island Sunset Tour by Long Tail Boat</h2>
    <p>
      Experience the beauty of Thailand's islands and enjoy breathtaking sunset views with the 7 Island Sunset Tour. This tour offers a perfect blend of adventure, relaxation, and unforgettable experiences, including snorkeling, swimming, and dining on the beach.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Adult:</strong> 1,200 Baht</li>
      <li><strong>Child:</strong> 950 Baht</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>13:00 - 13:30 PM:</strong> Pick-up from your hotel</li>
      <li><strong>14:00 PM:</strong> Departure from the pier</li>
      <li>
        <strong>Koh Tan Ming Island:</strong> Snorkeling near this small island in front of Koh Poda. Explore underwater reefs and caves near Koh Si.
      </li>
      <li>
        <strong>Puya Bay:</strong> Relax on the beach.
      </li>
      <li>
        <strong>Chicken Island:</strong> Snorkel around beautiful coral reefs. A scenic and idyllic spot for photography.
      </li>
      <li>
        <strong>Tup Island:</strong> Explore the island, walk to Chicken Island on the natural sandbank, or relax on the white sandy beach.
      </li>
      <li>
        <strong>Poda Island:</strong> Enjoy the stunning white sandy beach and crystal-clear waters.
      </li>
      <li>
        <strong>Railay Beach and Phra Nang Cave:</strong> Take great photos and relax on the white sandy beach.
      </li>
      <li>
        <strong>Dinner:</strong> Halal food served on the beach while watching the sunset.
      </li>
      <li>
        <strong>Swimming with Luminescent Plankton:</strong> A magical swimming spot near Railay Beach.
      </li>
      <li>Return to the hotel after the tour.</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Accident insurance</li>
      <li>English-speaking guide</li>
      <li>Mask and snorkel</li>
      <li>Life jacket</li>
      <li>Fruit and water</li>
      <li>BBQ dinner</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>National park entrance fee:</li>
      <ul>
        <li>Adult: 200 Baht</li>
        <li>Child (4-11 years): 100 Baht</li>
      </ul>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Please bring sunscreen, swimwear, and a towel for water-related activities. The tour provides a combination of adventure and relaxation, perfect for families and groups.
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

export default SevenIslandSunsetTourByLongTailBoat;
