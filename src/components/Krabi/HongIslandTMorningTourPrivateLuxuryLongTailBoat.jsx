import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo39 from './image/logo39.jpeg';
import logo40 from './image/logo40.jpeg';
import logo41 from './image/logo41.jpeg';
import './Krabi.css';

const HongIslandTMorningTourPrivateLuxuryLongTailBoat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo39);
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
            title: "Hong Island Morning Tour by Private Luxury Longtail Boat",
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
        const groupSize = 4; // Each group contains up to 5 people
        const groupPrice = 9000; // Price per group of 5 people
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
                            <img src={logo39} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Hong Island Morning Tour by Private Luxury Longtail Boat<br />
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

            <h3>Hong Island Morning Tour by Private Luxury Longtail Boat</h3>
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
                            src={logo39}
                            alt="Place 39"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo39)}
                        />
                        <img
                            src={logo40}
                            alt="Place 40"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo40)}
                        />
                        <img
                            src={logo41}
                            alt="Place 41"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo41)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price"> 1-4 Persons 9,000 THB</p>

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
    <h2>Hong Island Morning Tour by Private Luxury Longtail Boat</h2>
    <p>
      Enjoy a luxurious private longtail boat tour to Hong Island, one of the most stunning destinations in Krabi. Just a short 20-minute ride from Ao Nang, this exclusive morning tour takes you to breathtaking locations such as Hong Lagoon, Hong Island, Lading Island, and Pakbia Island. If the weather allows, we will also visit the small but picturesque Rai Island. Experience pristine beaches, crystal-clear waters, and excellent snorkeling in a private and comfortable setting.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Private Luxury Boat (1-4 people):</strong> 9,000 Baht</li>
    </ul>

    <h3>Itinerary</h3>
    <ul>
      <li><strong>08:00 – 08:30 A.M.</strong> Pickup from your hotel in Ao Nang or Krabi</li>
      <li><strong>09:00 A.M.</strong> Departure from Nopparat Thara Pier by private luxury longtail boat</li>
      <li><strong>Koh Lading (Paradise Island):</strong> Explore shallow bird caves, sunbathe, swim, or snorkel</li>
      <li><strong>Hong Lagoon:</strong> Sightseeing with high cliffs surrounding the lagoon</li>
      <li><strong>Traditional Thai buffet:</strong> Enjoy lunch at a beachside restaurant</li>
      <li><strong>Hong Island Beach:</strong> Relax on white sand, swim, or snorkel in clear waters</li>
      <li><strong>15:00 P.M.</strong> Depart from Hong Island back to Nopparat Thara Pier</li>
      <li><strong>16:00 P.M.</strong> Transfer back to your hotel in Krabi, Ao Nang, or nearby areas</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Hotel transfer (round trip)</li>
      <li>Private luxury longtail boat</li>
      <li>English-speaking guide</li>
      <li>Accident insurance</li>
      <li>Mask and snorkel</li>
      <li>Life jacket</li>
      <li>Fruit & drinking water</li>
      <li>Lunch</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>National park entrance fee:</li>
      <ul>
        <li>Adult: 300 Baht</li>
        <li>Child (4-11 years): 150 Baht</li>
      </ul>
    </ul>

    <h3>Additional Information</h3>
    <p>
      This morning tour is ideal for travelers looking for a luxurious and private escape to the beautiful Hong Islands. Enjoy the exclusivity of a private luxury longtail boat, soak in the stunning views, and experience a peaceful adventure in paradise.
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

export default HongIslandTMorningTourPrivateLuxuryLongTailBoat;
