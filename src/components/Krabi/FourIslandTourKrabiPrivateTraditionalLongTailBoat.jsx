import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo15 from './image/logo15.jpeg';
import logo16 from './image/logo16.jpeg';
import logo17 from './image/logo17.jpeg';
import './Krabi.css';

const FourIslandTourKrabiPrivateTraditionalLongTailBoat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo15);
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
            title: "4 Island Tour from Krabi by Private Traditional Long Tail Boat",
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
        const groupPrice = 3750; // Price per group of 5 people
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
                            <img src={logo10} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>4 Island Tour from Krabi by Private Traditional Long Tail Boat<br />
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

            <h3>4 Island Tour from Krabi by Private Traditional Long Tail Boat</h3>
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
                            src={logo15}
                            alt="Place 15"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo15)}
                        />
                        <img
                            src={logo16}
                            alt="Place 16"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo16)}
                        />
                        <img
                            src={logo17}
                            alt="Place 17"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo17)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price"> 1-5 Persons 3,750 THB</p>

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
    <h2>4 Island Tour from Krabi by Private Traditional Longtail Boat</h2>
    <p>
      Explore Krabi’s stunning islands on a private traditional longtail boat. Begin your journey at Railay Beach and Phra Nang Cave, home to some of the world's most beautiful limestone cliffs and a sacred site revered by locals. Experience the breathtaking sea nature of Thap Island, Kai Island, and Mo Island—part of "Unseen Thailand." Visit Poda Island and Tangming Island for a delicious beachside lunch, then enjoy sightseeing, swimming, and snorkeling among colorful coral and tropical fish.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>1-5 Persons:</strong> 3,750 Baht (Private Tour)</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>08:00 A.M.</strong> Pick up from hotel, transfer to the pier</li>
      <li><strong>08:30 A.M.</strong> Depart for Krabi’s 4 Islands by private longtail boat</li>
      <li><strong>09:00 A.M.</strong> Railay Beach – free time for sunbathing, swimming, and exploring</li>
      <li><strong>10:00 A.M.</strong> Visit Tup Island – ideal for snorkeling and exploring on foot</li>
      <li><strong>11:00 A.M.</strong> Stop at Chicken Island – excellent snorkeling spot</li>
      <li><strong>12:00 P.M.</strong> Arrive at Poda Island – enjoy a beachside lunch and relax</li>
      <li><strong>02:00 P.M.</strong> Return to the hotel</li>
      <li><strong>Note:</strong> The schedule may change depending on weather and sea conditions.</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Private longtail boat</li>
      <li>Picnic lunch</li>
      <li>Fruit and bottled water</li>
      <li>Life jacket</li>
      <li>Snorkeling mask</li>
      <li>English-speaking guide</li>
      <li>BBQ dinner</li>
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
      Enjoy a private traditional longtail boat experience, immersing yourself in the beauty of Krabi’s iconic islands. Be sure to bring sunscreen, a towel, and a camera to capture the stunning views.
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

export default FourIslandTourKrabiPrivateTraditionalLongTailBoat;
