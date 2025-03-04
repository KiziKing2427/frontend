import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo24 from './image/logo24.jpeg';
import logo24b from './image/logo24b.jpeg';
import logo24c from './image/logo24c.jpeg';
import './Bangkok.css';

const BangkokAncientCityAndEM = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo24b);
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
            const sourceParam = encodeURIComponent('BangkokAncientCityAndEM');
            navigate(`/bangkokAncientCityAndEMPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Bangkok Ancient City and Erawan Museum",
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
        const pricePerPerson = 900;
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
        <img src={logo24c} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Bangkok Ancient City And Erawan Museum<br />
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
            <h3>Bangkok Ancient City And Erawan Museum</h3>
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
                            src={logo24}
                            alt="Place 24"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo24)}
                        />
                        <img
                            src={logo24b}
                            alt="Place 24b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo24b)}
                        />
                        <img
                            src={logo24c}
                            alt="Place 24c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo24c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">900.00 Baht</p>

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
        <h2>Ancient City and Erawan Museum Combo Ticket</h2>
        <p>
          Book a combo ticket to Thailand's famous attraction - the Erawan Museum and Ancient City. This ticket will allow you to visit the iconic Erawan Museum, a breathtaking tribute to Thailand’s vibrant cultural and artistic heritage. Spanning 12 acres, this architectural gem beautifully combines traditional symbols, exquisite craftsmanship, and natural landscapes. At its heart, the iconic three-headed elephant statue captures your imagination and invites you to explore. Inside, captivating collections reveal the depth of Thailand’s traditions and artistry, making every corner a discovery.
        </p>
        <p>
          Additionally, you will also get to visit Muang Boran, the Ancient City, an extraordinary open-air museum in Bangkok. Covering 200 acres, it features over 100 meticulously crafted replicas of Thailand’s most famous landmarks and architectural wonders. This unique site plays a vital role in preserving Thailand’s architectural and cultural heritage while promoting tourism and maintaining the country’s identity for future generations.
        </p>
        <p>
          Both attractions offer more than just history; they provide tranquil gardens, peaceful ponds, and serene walking paths for a calming escape from the city’s hustle and bustle. Enjoy traditional villages, art exhibitions, and replica landmarks that enrich your visit. Don’t forget to indulge in delicious traditional Thai cuisine at one of the charming cafes or restaurants on-site.
        </p>
      </div>

      <h3>Child Policy</h3>
      <ul>
        <li>Children aged 0-5: <strong>Free of charge</strong>.</li>
        <li>Children aged 6-14: <strong>Charged at the child rate</strong>.</li>
        <li>Everyone else: <strong>Charged at the adult rate</strong>.</li>
      </ul>

      <h3>Cancellation Policy</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). 
        <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions & Exclusions</h3>
      <h3>What's Included:</h3>
      <ul>
        <li>Admission Ticket - Erawan Museum</li>
        <li>Admission Ticket - Ancient City (Muang Boran)</li>
        <li>Buffet Lunch</li>
      </ul>

      <h3>What's Excluded:</h3>
      <ul>
        <li>Roundtrip Transportation</li>
        <li>English Guide</li>
        <li>Tips and Gratitude</li>
        <li>Any Personal Expenses</li>
      </ul>
    </div>
      
    </div>
    
    );
};

export default BangkokAncientCityAndEM ;
