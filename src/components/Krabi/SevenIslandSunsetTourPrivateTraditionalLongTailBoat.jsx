import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo18 from './image/logo18.jpeg';
import logo19 from './image/logo19.jpeg';
import logo20 from './image/logo20.jpeg';
import './Krabi.css';

const SevenIslandSunsetTourPrivateTraditionalLongTailBoat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo18);
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
            title: "7 Island Sunset Tour by Private Traditional Longtail Boat",
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

    useEffect(() => {
        const groupSize = 5; // Each group contains up to 5 people
        const groupPrice = 5500; // Price per group of 5 people
        const totalPeople = adults + children; // Total number of people
    
        // Calculate the number of groups needed (rounding up)
        const numberOfGroups = Math.ceil(totalPeople / groupSize);
    
        // Set the total price based on the number of groups
        setTotalPrice(numberOfGroups * groupPrice);
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
                            <img src={logo18} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>7 Island Sunset Tour by Private Traditional Longtail Boat<br />
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

            <h3>7 Island Sunset Tour by Private Traditional Longtail Boat</h3>
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
                            src={logo18}
                            alt="Place 18"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo18)}
                        />
                        <img
                            src={logo19}
                            alt="Place 19"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo19)}
                        />
                        <img
                            src={logo20}
                            alt="Place 20"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo20)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price"> 1-5 Persons 5,500 THB</p>

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
  <div>
  <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>7 Island Sunset Tour by Private Traditional Longtail Boat</h2>
    <p>
      Experience the magic of Krabi’s breathtaking islands on this exclusive private longtail boat tour. Snorkel in crystal-clear waters, relax on pristine beaches, and witness a stunning sunset while enjoying a delicious Halal BBQ dinner. End the night with a unique experience—swimming among luminescent plankton near Railay Beach.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>1-5 Persons:</strong> 5,500 Baht (Private Tour)</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>13:00 - 13:30 P.M.</strong> Pick up from hotel, transfer to the pier</li>
      <li><strong>14:00 P.M.</strong> Depart by private longtail boat</li>
      <li><strong>Koh Tan Ming Island:</strong> Snorkeling near small islands with underwater reefs and caves</li>
      <li><strong>Puya Bay:</strong> Relax on a beautiful beach</li>
      <li><strong>Chicken Island:</strong> Snorkeling among colorful coral reefs, perfect for photography</li>
      <li><strong>Tup Island:</strong> Walk on the natural sandbank connecting to Chicken Island</li>
      <li><strong>Poda Island:</strong> Enjoy white sandy beaches and clear turquoise waters</li>
      <li><strong>Railay Beach & Phra Nang Cave:</strong> Take amazing photos and relax on the white sand beach</li>
      <li><strong>Dinner on the Beach:</strong> Enjoy a Halal BBQ dinner while watching the sunset</li>
      <li><strong>Swimming with Luminescent Plankton:</strong> A magical nighttime swim near Railay Beach</li>
      <li><strong>Return to hotel</strong></li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Private longtail boat</li>
      <li>English-speaking guide</li>
      <li>Snorkeling mask</li>
      <li>Life jacket</li>
      <li>Fruit & bottled water</li>
      <li>BBQ dinner (Halal food)</li>
      <li>Accident insurance</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>National park entrance fee (Adult: 200 Baht, Child: 100 Baht)</li>
      <li>Personal expenses</li>
      <li>Tips and gratuities</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Enjoy a full-day island-hopping experience with snorkeling, sightseeing, and a sunset beach dinner. End the night with a magical swim among bioluminescent plankton for an unforgettable adventure.
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

export default SevenIslandSunsetTourPrivateTraditionalLongTailBoat;
