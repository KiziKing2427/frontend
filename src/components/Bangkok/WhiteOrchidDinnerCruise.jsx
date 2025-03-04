import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo28 from './image/logo28.jpeg';
import logo28b from './image/logo28b.jpeg';
import logo28c from './image/logo28c.jpeg';
import './Bangkok.css';

const WhiteOrchidDinnerCruise = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo28);
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
            const sourceParam = encodeURIComponent('WhiteOrchidDinnerCruise');
            navigate(`/whiteOrchidDinnerCruisePay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "White Orchid Dinner Cruise",
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
        const pricePerPerson = 950;
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
        <img src={logo28b} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>White Orchid Dinner Cruise<br />
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
            <h3>White Orchid Dinner Cruise</h3>
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
                            src={logo28}
                            alt="Place 28"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo28)}
                        />
                        <img
                            src={logo28b}
                            alt="Place 28b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo28b)}
                        />
                        <img
                            src={logo28c}
                            alt="Place 28c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo28c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">950.00 Baht</p>

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
        <h2>White Orchid Dinner Cruise</h2>
        <p>
          Experience an exciting and memorable 2-hour evening cruising and dining along the enchanting Chaophraya River. This is an experience you shouldn’t miss! Enjoy a luscious buffet dinner while taking in Bangkok’s riverside sights onboard a cruise boat.
        </p>
        <p>
          Sip on a welcome drink as you depart from Si Phraya Pier, heading upriver to iconic landmarks such as Rama I Bridge, the Temple of Dawn (Wat Arun), The Royal Grand Palace (Wat Pra Kaew), and Rama VIII Bridge. The Chaophraya River is the heart of Bangkok, showcasing all things Thai. Indulge in a delicious Thai/Western buffet while enjoying live music and Thai classical dancing.
        </p>
        <p>
          Simply soak in the stunning sights of the city from the open-air deck—this tour presents the best of both the river and the city. Enjoy!
        </p>
      </div>

      <h3>Itinerary:</h3>
      <ul>
        <li>18:30 - Check-in time.</li>
        <li>19:45 - Departure from the Pier. A welcome drink will be served while cruising along the Chaophraya River past landmarks like Rama I Bridge, Temple of Dawn (Wat Arun), The Royal Grand Palace (Wat Pra Kaew), and Rama VIII Bridge.</li>
        <li>20:00 - Enjoy Thai classical dance, with a buffet dinner served featuring a variety of delightful Thai/Western cuisines alongside our entertainer.</li>
        <li>21:00 - Enjoy live music, disco on the cruise, and a special "CABARET SHOW ON CRUISE." Relax on the open-air deck, enjoying a 360-degree view.</li>
        <li>21:45 - Arrival back at the IconSiam Pier.</li>
      </ul>
      <p>
        <strong>Please note:</strong> This price is not applicable on Loy Krathong, Valentine's Day, New Year's Day, and Christmas Day; additional charges will apply.
      </p>

      <h3>Child Policy:</h3>
      <ul>
        <li>Children under 4 years of age can enter for free.</li>
        <li>Children between 4 and 10 years of age are eligible for the child rate.</li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). 
        <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Entry/Admission - Dinner Cruise by White Orchid River Cruise</li>
        <li>Dinner</li>
        <li>Welcome drink</li>
        <li>Live music and dance entertainment</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Hotel transfer</li>
        <li>Alcoholic and non-alcoholic drinks (available for purchase; minimum age 18)</li>
      </ul>
    </div>
    </div> 
    
    );
};

export default WhiteOrchidDinnerCruise;
