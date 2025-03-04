import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo36 from './image/logo36.jpeg';
import logo36b from './image/logo36b.jpeg';
import logo36c from './image/logo36c.jpeg';
import './Bangkok.css';

const SealifeOceanWorldMTB = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo36b);
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
            const sourceParam = encodeURIComponent('SealifeOceanWorldMTB');
            navigate(`/sealifeOceanWorldMTBPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Sealife Ocean World and \n Madam Tussaud Bangkok",
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
        const pricePerPerson = 2000;
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
        <img src={logo36c} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Sealife Ocean world and Madam Tussaud bangkok<br />
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
            <h3>Sealife Ocean world and Madam Tussaud bangkok</h3>
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
                            src={logo36}
                            alt="Place 36"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo36)}
                        />
                        <img
                            src={logo36b}
                            alt="Place 36b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo36b)}
                        />
                        <img
                            src={logo36c}
                            alt="Place 36c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo36c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">2,000.00 Baht</p>

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
        <h2>Sealife Ocean World and Madame Tussauds Bangkok Ticket</h2>
        <p>
          Embark on an aquatic adventure at Sea Life Aquarium Bangkok, where you'll be mesmerized by the wonders of the underwater world. Dive into Southeast Asia's largest underwater aquarium and explore a diverse range of marine species. From the thrilling underwater tunnel to encounters with sharks and over 30,000 fascinating creatures, get ready for an immersive experience like no other!
        </p>
        <p>
          After exploring the deep, get up close and personal with your favorite celebrities at Madame Tussauds in Bangkok. Interact with lifelike wax figures of stars from various fields and snap incredible selfies that will leave your friends in awe. With over 90 wax figures spread across different themed zones, this star-studded adventure is packed with excitement and interactive features.
        </p>
        <p>
          From the depths of the ocean at Sea Life Aquarium to the glamour of Madame Tussauds, this tour offers a unique and fun-filled experience full of memorable photo opportunities. Dive in, strike a pose, and let your imagination run wild!
        </p>
      </div>

      <h3>Itinerary:</h3>
      <ul>
        <li>
          <strong>Stop 1: Sea Life Aquarium</strong>
          <p>Explore the aquarium and discover a wide range of fascinating underwater creatures. Take your time to visit all these amazing sea creatures.</p>
        </li>
        <li>
          <strong>Stop 2: Madame Tussauds Wax Museum</strong>
          <p>
            Visit the various themed zones at Madame Tussauds:
            <ul>
              <li><strong>Music:</strong> Hop on stage with your favorite artists.</li>
              <li><strong>TV Studio:</strong> Step into the studio with the biggest stars.</li>
              <li><strong>Leaders:</strong> Interact with influential spiritual and political leaders.</li>
              <li><strong>Film:</strong> Step inside scenes of popular movies.</li>
              <li><strong>A-list:</strong> Mingle with A-list celebrities and pose for the paparazzi.</li>
              <li><strong>Sports:</strong> Shoot hoops and play interactive games with sports stars.</li>
              <li><strong>Bollywood:</strong> Get close to the biggest Bollywood stars.</li>
              <li><strong>History:</strong> Meet notable historical figures.</li>
              <li><strong>Arts & Science:</strong> Encounter the great minds who shaped the world.</li>
            </ul>
          </p>
        </li>
      </ul>

      <h3>Addresses & Opening Hours:</h3>
      <p>
        <strong>Madame Tussauds:</strong> 989 Siam Discovery, 4th Floor, Rama I Road, Pathum Wan District, Bangkok, 10330, Thailand.<br />
        <strong>Sea Life Aquarium:</strong> 991 Siam Paragon, B1 Floor, Rama I Road, Pathum Wan, Bangkok, 10330, Thailand.<br />
        <strong>Opening Hours:</strong> 10:00 AM - 08:00 PM (Last entry at 07:00 PM)
      </p>

      <h3>Child Policy:</h3>
      <ul>
        <li>Children under 3 years old enter for free.</li>
        <li>Children aged 3-11 years are charged at the child rate.</li>
        <li>Children over 11 years old are considered adults and will be charged the adult rate.</li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers must cancel at least <strong>24 hours before</strong> the experience start date (local time zone). No refunds will be provided after that period.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Madame Tussauds admission fee</li>
        <li>Sea Life Aquarium admission fee</li>
        <li>Free admission for guides (must show ID)</li>
        <li>Digital photo</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Personal expenses</li>
        <li>Roundtrip transfer</li>
        <li>Food, snacks, and beverages</li>
      </ul>
    </div>
      </div>
    
    );
};

export default SealifeOceanWorldMTB;
