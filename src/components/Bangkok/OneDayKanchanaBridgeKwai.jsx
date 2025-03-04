import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo20 from './image/logo20.jpeg';
import logo20b from './image/logo20b.jpeg';
import logo20c from './image/logo20c.jpeg';
import './Bangkok.css';

const OneDayKanchanaBridgeKwai = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo20);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false); // New state for success window
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    
        // Automatically scroll down by 200 pixels
        window.scrollBy({
            top: 300, // Scroll down by 200px
            behavior: 'smooth' // Smooth scroll animation
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
            const sourceParam = encodeURIComponent('OneDayKanchanaBridgeKwai');
            navigate(`/oneDayKanchanaBridgeKwaiPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "One day Kanchanaburi Bridge on the river kwai",
            date: selectedDate,
            adults,
            children,
            totalPrice,
            image: selectedImage
        };
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        setShowSuccessWindow(true); // Show the success window
    };

    const handleGoToCart = () => {
        setShowSuccessWindow(false); // Hide the success window
        navigate('/cart'); // Redirect to the cart page
    };

    useEffect(() => {
        const pricePerPerson = 1800;
        setTotalPrice((adults + children) * pricePerPerson);
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
        <img src={logo20c} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>"One day Kanchanaburi "Bridge on the river kwai"<br />
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
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/');
  }}
>
  Add More Product
</button>

                    </div>
                    </div>
                </div>
            )}
            <h3>"One day Kanchanaburi "Bridge on the river kwai"</h3>
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
                            src={logo20}
                            alt="Place 20"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo20)}
                        />
                        <img
                            src={logo20b}
                            alt="Place 20b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo20b)}
                        />
                        <img
                            src={logo20c}
                            alt="Place 20c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo20c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">1,800.00 Baht</p>

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
{/* The description and info window section */}
<div className="info-window">
    <h4>Description</h4>
    <p>
        Kanchanaburi is a popular tourist destination for travelers that are looking for a day trip from Bangkok. It has not only amazing landscapes and natural beauty to explore but also a rich history from World War 2. The death railway is the icon of Kanchanaburi, which was forcefully built by the prisoners of war and took away thousands of innocent lives.
    </p>
    <p>
        Kanchanaburi trip will let you explore important landmarks, remember the memories of the incident at the museums, and take a train ride from the Bridge over the River Kwai to Krasae Cave for more exploring. You will spend a magnificent day in the past with this full-day Kanchanaburi day trip.
    </p>
    <p>
        As your Kanchanaburi travel guide, we will do our best to ensure you have a great time from the beginning to the end of your 1-day trip to Kanchanaburi. You just enjoy the Kanchanaburi local tour, we will take care of everything else.
    </p>

    <h3>Kanchanaburi Tour Details</h3>
    <p>06:00-06:30 Bangkok hotel pick up. Get ready at your address just in time and depart for Kanchanaburi.</p>
    <p>Arrive at the immaculately maintained cemetery containing the remains of 6,982 allied prisoners of war who perished during the construction of the Death Railway.</p>
    <p>Visitation at the JEATH War Museum, built in the form of a prisoner of war camp during World War II. There is a collection of paintings and photographs as well as tools used in those days.</p>
    <p>Continue to Death Railway, which was built by allied prisoners forced by Japanese forces during WW2.</p>
    <p>Take a 1-hour and 45-minute train ride on the Death Railway to Tham Krasae Railway Bridge.</p>
    <p>Explore Krasae Cave, which was a shelter for Allied prisoners of war during the construction of the Thai-Burmese Railway in WW2.</p>
    <p>Enjoy lunch at the restaurant.</p>
    <p>Depart from Kanchanaburi back to Bangkok.</p>
    <p>Arrive in Bangkok around 17:30-18:00.</p>
    <p>Children aged 3-12 will be charged according to the child rate.</p>
    <p>Children aged 0-2 will be allowed free of charge.</p>
    <p>Seniors above the age of 60 will also be charged the same amount as the child.</p>

    <h3>Cancellation Policy</h3>
    <p>
        To receive a full refund, travelers may cancel up to 24 hours before the experience start date in the local time zone. No refunds will be given after that time period.
    </p>

    <h3>Inclusions & Exclusions</h3>
    <p><strong>What's included</strong></p>
    <ul>
        <li>Round trip Transfer</li>
        <li>English Speaking Guide</li>
        <li>Entry Admission fee - Jeath museum</li>
        <li>Entry admission fee – Train journey at death railway</li>
    </ul>
    <p><strong>What's excluded</strong></p>
    <ul>
        <li>Tip & Gratitude</li>
    </ul>
</div>


        </div>
    );
};

export default OneDayKanchanaBridgeKwai;
