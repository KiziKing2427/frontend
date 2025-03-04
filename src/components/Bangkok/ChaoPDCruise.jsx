import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo21 from './image/logo21.jpeg';
import logo21b from './image/logo21b.jpeg';
import logo21c from './image/logo21c.jpeg';
import './Bangkok.css';

const ChaoPDCruise = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo21b);
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
            const sourceParam = encodeURIComponent('ChaoPDCruise');
            navigate(`/chaoPDCruisePay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Chao Phraya Dinner Cruise",
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
        const pricePerPerson = 1000;
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
        <img src={logo21c} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Chao Phraya Dinner Cruise<br />
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
            <h3>Chao Phraya Dinner Cruise</h3>
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
                            src={logo21b}
                            alt="Place 21b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo21b)}
                        />
                        <img
                            src={logo21}
                            alt="Place 21"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo21)}
                        />
                        <img
                            src={logo21c}
                            alt="Place 21c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo21c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">1,000.00 Baht</p>

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
  <h2>Bangkok's Premier Dinner Cruise</h2>
  
  <p>
    Savor an unforgettable evening aboard Bangkok's premier dinner cruise! Arrive 15 to 30 minutes before departure 
    to ensure a smooth start to your experience. Indulge in a feast of delightful delicacies from our buffet, surrounded by fellow guests. 
    Let the enchanting melodies of a violinist and saxophonist serenade you, setting the perfect ambiance for your evening. 
    From traditional jazz tunes to hits from the 1980s and 1990s, our music selection guarantees a lively atmosphere.
  </p>

  <p>
    Feeling the rhythm? Take to the dance floor and sway to the beat with your partner. 
    As you glide along the Chao Phraya River, marvel at iconic landmarks such as the Grand Palace, 
    Thammasat University, and the majestic Rama VIII Bridge. Don't miss this opportunity to create unforgettable memories. 
    Book your dinner cruise now and embark on an evening of elegance and excitement!
  </p>
  
  <h3>Itinerary</h3>
  <ul>
    <li><strong>18:30</strong> - Check-in at ICONSIAM Pier (Sooksiam zone, ground floor, behind the Naraya shop).</li>
    <li><strong>19:30</strong> - Embark on the Chao Phraya Princess River Cruise and begin your unforgettable journey.</li>
    <li><strong>21:30</strong> - Return to ICONSIAM Pier and conclude your cruise experience.</li>
    <li><strong>22:30</strong> - Arrive back at your hotel, reflecting on the wonderful memories made during the cruise.</li>
  </ul>

  <h3>Child Policy</h3>
  <ul>
    <li>Children under 3 years old: <strong>Free of charge</strong>.</li>
    <li>Children aged 4 to 10: <strong>Charged at the child rate</strong>.</li>
    <li>Children and adults aged 11 and above: <strong>Charged at the adult rate</strong>.</li>
  </ul>

  <h3>How to Use</h3>
  <p>Show your <strong>mobile ticket</strong> at the ticketing counter. Tickets are valid <strong>only</strong> for the booked date.</p>

  <h3>Cancellation Policy</h3>
  <p>
    Full refund for cancellations up to <strong>24 hours before</strong> the experience start date (local time zone). 
    <strong>No refunds</strong> will be given after this period.
  </p>

  <h3>Inclusions & Exclusions</h3>
  <h3>What's Included:</h3>
  <ul>
    <li>Buffet Dinner</li>
    <li>Two-hour Cruise Ride</li>
    <li>Dance and Live Music</li>
  </ul>

  <h3>What's Excluded:</h3>
  <ul>
    <li>Guide (English Speaking)</li>
    <li>Personal expenses</li>
    <li>Tips and Gratitude</li>
  </ul>
</div>

</div>


        </div>
    );
};

export default ChaoPDCruise;
