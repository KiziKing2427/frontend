import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo23 from './image/logo23.jpeg';
import logo23b from './image/logo23b.jpeg';
import logo23c from './image/logo23c.jpeg';
import './Bangkok.css';

const GrandPearlDinnerCruiseB = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo23);
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
            const sourceParam = encodeURIComponent('GrandPearlDinnerCruiseB');
            navigate(`/grandPearlDinnerCruiseBPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Grand Pearl Dinner Cruise Bangkok",
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
        const pricePerPerson = 1200;
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
        <img src={logo23b} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Grand Pearl Dinner Cruise Bangkok<br />
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
            <h3>Grand Pearl Dinner Cruise Bangkok</h3>
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
                            src={logo23}
                            alt="Place 23"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo23)}
                        />
                        <img
                            src={logo23b}
                            alt="Place 23b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo23b)}
                        />
                        <img
                            src={logo23c}
                            alt="Place 23c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo23c)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">1,200.00 Baht</p>

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
        <h2>Grand Pearl Dinner Cruise</h2>
        <p>
          Embark on an unforgettable journey with the Grand Pearl Dinner Cruise; immerse yourself in luxury aboard one of Bangkok's finest boat restaurants. Experience the essence of Thai hospitality while indulging in authentic candlelit Thai cuisine. Glide along the Chao Phraya River, witnessing the mesmerizing sunset and vibrant river life.
        </p>
        <p>
          Book your enchanting dinner cruise now and treat yourself to an evening filled with Thai classical dances, live music, and a sumptuous buffet of Thai and International cuisine. Discover the beauty of Bangkok's skyline from the water and create memories that will last a lifetime. Don't miss out on this extraordinary experience! Reserve your spot today.
        </p>
      </div>

      <h3>Itinerary</h3>
      <ul>
        <li><strong>19:00</strong> - Check-in at La Grande Perle Restaurant, River City Shopping Complex.</li>
        <li><strong>19:20</strong> - Board the luxurious Grand Pearl cruise liner. Enjoy a special Grand Pearl cocktail.</li>
        <li><strong>19:30</strong> - Depart from River City Pier, admire stunning views of Wat Arun and the Grand Palace.</li>
        <li><strong>20:00</strong> - Dinner under the moonlight with live music and Thai Classical Dance Show. Enjoy a sumptuous buffet with Thai and International cuisine, including sushi.</li>
        <li><strong>21:30</strong> - Return to River City Pier, concluding the Amazing Dinner Cruise.</li>
      </ul>

      <h3>Child Policy</h3>
      <ul>
        <li>Infants below 100 cm: <strong>Free entrance</strong>.</li>
        <li>Children 100-140 cm (2-12 years old): <strong>Charged at the child rate</strong>.</li>
        <li>Infants aged 0-2: <strong>Join for free</strong> if no additional seat is occupied.</li>
        <li>Children aged 3-8: <strong>Charged according to child rate</strong>.</li>
        <li>Children over 8 years old: <strong>Charged at the adult rate</strong>.</li>
      </ul>

      <h3>Cancellation Policy</h3>
      <p>
        To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). 
        <strong>No refunds</strong> will be given after this period.
      </p>

      <h3>Inclusions & Exclusions</h3>
      <h3>What's Included:</h3>
      <ul>
        <li>Dinner</li>
        <li>All Fees and Taxes</li>
        <li>International Buffet</li>
        <li>Live Music, Dancing, and Singing Show</li>
      </ul>

      <h3>What's Excluded:</h3>
      <ul>
        <li>Private transportation</li>
        <li>Tips and Gratitude</li>
        <li>English Speaking Guide</li>
        <li>This price does not include New Year, Christmas, and Loy Khatong periods</li>
      </ul>
    </div>

    </div>
    
    );
};

export default GrandPearlDinnerCruiseB;
