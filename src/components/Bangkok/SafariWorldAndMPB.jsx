import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo27 from './image/logo27.jpeg';
import logo27b from './image/logo27b.jpeg';
import logo27c from './image/logo27c.jpeg';
import './Bangkok.css';

const SafariWorldAndMPB = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo27);
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
            const sourceParam = encodeURIComponent('SafariWorldAndMPB');
            navigate(`/safariWorldAndMPBPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Safari World and Marine Park Bangkok with Group Transportation",
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
        const pricePerPerson = 1500;
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
        <img src={logo27c} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Safari World and Marine Park Bangkok with Group Transportation<br />
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
            <h3>Safari World and Marine Park Bangkok with Group Transportation</h3>
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
                            src={logo27}
                            alt="Place 27"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo27)}
                        />
                        <img
                            src={logo27b}
                            alt="Place 27b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo27b)}
                        />
                        <img
                            src={logo27c}
                            alt="Place 27c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo27c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">1,500.00 Baht</p>

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
      <div>
        <h2>Safari World and Marine Park Bangkok with Group Transportation</h2>
        <p>
          Safari World is arguably the most popular and most visited tourist attraction in Bangkok, welcoming visitors from all over the world every year. It consists of two parks: Safari World and Marine Park. The parks cover a large area and are considered some of the best parks in Thailand. Visitors will see an unbelievably large variety of land and marine animals.
        </p>
        <p>
          The major highlight of the park is the thrilling and adventurous safari ride that allows you to observe wild animals in their natural habitat. If you are lucky, you may even get a closer look at these majestic creatures if they decide to approach your vehicle. The marine park features a vast collection of sea creatures, with one of the main attractions being the dolphin and seal show!
        </p>
      </div>

      <h3>Itinerary:</h3>
      <ul>
        <li>Pick up from your hotel (please check the Additional Info for pick-up details).</li>
        <li>Stop at Safari World, 99 Panyaintra Road, Samwatawantok, Klongsamwa, Bangkok 10510, Thailand.</li>
        <li>Discover rare and exotic animals in Safari World!</li>
        <li>Enjoy a thrilling safari ride and watch the animals closely!</li>
        <li>Watch amazing shows at Safari World and have a lot of fun!</li>
        <li>Enjoy a delicious lunch buffet!</li>
        <li>Explore beautiful sea creatures at the Marine Park.</li>
        <li>Return to your hotel once your time is up!</li>
      </ul>

      <h3>Show Times:</h3>
      <h3>Weekdays:</h3>
      <ul>
        <li><strong>Orangutan Show:</strong> 11:10 AM & 03:40 PM</li>
        <li><strong>Sea Lion Show:</strong> 11:45 AM & 03:00 PM</li>
        <li><strong>Cowboy Stunt:</strong> 10:20 AM</li>
        <li><strong>Elephant Show:</strong> 01:30 PM onwards & 02:15 PM</li>
        <li><strong>Dolphin Show:</strong> 11:45 AM & 02:40 PM</li>
        <li><strong>Spy War:</strong> 02:00 PM</li>
        <li><strong>Bird Show:</strong> 02:00 PM</li>
      </ul>

      <h3>Weekends:</h3>
      <ul>
        <li><strong>Orangutan Show:</strong> 11:00 AM & 04:30 PM</li>
        <li><strong>Sea Lion Show:</strong> 11:00 AM & 04:15 PM</li>
        <li><strong>Cowboy Stunt:</strong> 11:50 AM</li>
        <li><strong>Elephant Show:</strong> 02:15 PM & 03:45 PM</li>
        <li><strong>Dolphin Show:</strong> 10:20 AM & 04:30 PM</li>
        <li><strong>Spy War:</strong> Not Available</li>
        <li><strong>Bird Show:</strong> 02:30 PM</li>
      </ul>

      <h3>Child Policy:</h3>
      <ul>
        <li>Children under the height of 100 cm: <strong>No entrance fee</strong></li>
        <li>Children above the height of 100 cm: <strong>Charged at the adult rate</strong></li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local timezone). 
        <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Join roundtrip transfer</li>
        <li>All fees and taxes</li>
        <li>Entry/Admission to Safari World</li>
        <li>Buffet lunch</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Personal expenses and gratuities</li>
      </ul>
    </div>
    </div>  
    
    );
};

export default SafariWorldAndMPB;
