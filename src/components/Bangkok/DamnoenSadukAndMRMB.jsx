import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo29 from './image/logo29.jpeg';
import logo29b from './image/logo29b.jpeg';
import logo29c from './image/logo29c.jpeg';
import './Bangkok.css';

const DamnoenSadukAndMRMB = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo29);
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
            const sourceParam = encodeURIComponent('DamnoenSadukAndMRMB');
            navigate(`/damnoenSadukAndMRMBPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Damnoen Saduk and\n Maeklong Railway \nMarket Bangkok (Group Tour)",
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
        <img src={logo29b} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Damnoen Saduk and Maeklong Railway Market Bangkok (Group Tour)<br />
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
            <h3>Damnoen Saduk and Maeklong Railway Market Bangkok (Group Tour)</h3>
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
                            src={logo29}
                            alt="Place 29"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo29)}
                        />
                        <img
                            src={logo29b}
                            alt="Place 29b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo29b)}
                        />
                        <img
                            src={logo29c}
                            alt="Place 29c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo29c)}
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
        <h2>Damnoen Saduak and Maeklong Railway Market Tour (Group Tour)</h2>
        <p>
          Discover the essence of Bangkok's culture and cuisine on our immersive full-day tour of the Damnoen Saduak Floating Market and the Maeklong Railway Market. Led by our experienced guides, you'll delve into the vibrant tapestry of Thai life, sampling authentic dishes such as the iconic tom yum soup, sweet mango sticky rice, and tropical fruits bursting with flavor.
        </p>
        <p>
          As you explore these bustling markets, you'll gain insight into local traditions and customs, deepening your understanding of Thai culture. Glide along the tranquil waterways of Damnoen Saduak aboard a traditional long-tail boat, soaking in the sights and sounds of this unique floating market. Then, marvel at the remarkable sight of vendors swiftly retracting their stalls to make way for passing trains at the Maeklong Railway Market.
        </p>
        <p>
          Travel in comfort and style throughout the day in our air-conditioned vehicle, ensuring a relaxed and enjoyable experience from start to finish. Don't miss this opportunity to immerse yourself in the heart and soul of Thailand's cultural heritage. Reserve your spot on this unforgettable journey today!
        </p>
      </div>

      <h3>Itinerary:</h3>
      <ul>
        <li>08:30 AM - Departure from Pratunam Area, (We will confirm the Pick up location) in Bangkok</li>
        <li>08:40 AM - 09:30 AM - Arrive at Maeklong Railway Market (Talad Rom Hub), Samut Songkhram Province</li>
        <li>
          <strong>Stop At:</strong> Maeklong Railway Market (Talad Rom Hub)
          <p>
            Experience the unique charm of the Maeklong Railway Market, famously known as the "umbrella pull-down market." Watch as vendors swiftly move their awnings and shop fronts to make way for passing trains along the market's railway track.
          </p>
        </li>
        <li>10:45 AM - Departure to Damnoen Saduak Floating Market</li>
        <li>12:00 PM - Arrive at Damnoen Saduak Floating Market, Ratchaburi Province</li>
        <li>
          <strong>Stop At:</strong> Damnoen Saduak Floating Market
          <p>
            Explore the vibrant Damnoen Saduak Floating Market, renowned for its bustling atmosphere and traditional Thai commerce. Witness vendors navigating long-tail boats filled with fresh produce, souvenirs, and delectable street food.
          </p>
        </li>
        <li>01:30 PM - Return to Bangkok.</li>
      </ul>

      <h3>Child Policy:</h3>
      <ul>
        <li>Child rates are only applicable for individuals with a height under 120 cm.</li>
        <li>Adult rates are only applicable for individuals with a height over 120 cm.</li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). 
        <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Admission Ticket to Maeklong Railway Market (Talad Rom Hub)</li>
        <li>Admission Ticket to Damnoen Saduak Floating Market</li>
        <li>Local English-speaking guide</li>
        <li>Long-tail boat ride to Damnoen Saduak Floating Market</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Gratuities (optional)</li>
        <li>Souvenir photos (available to purchase)</li>
        <li>Personal expenses</li>
      </ul>
    </div>
    </div>
    
    );
};

export default DamnoenSadukAndMRMB;
