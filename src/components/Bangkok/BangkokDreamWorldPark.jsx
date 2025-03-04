import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo33 from './image/logo33.jpeg';
import logo33b from './image/logo33b.jpeg';
import logo33c from './image/logo33c.jpeg';
import './Bangkok.css';

const BangkokDreamWorldPark = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo33c);
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
            const sourceParam = encodeURIComponent('BangkokDreamWorldPark');
            navigate(`/bangkokDreamWorldParkPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }
        
        const cartItem = {
            title: "Bangkok Dream World Park",
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
        <img src={logo33b} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Bangkok Dream World Park<br />
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
            <h3>Bangkok Dream World Park</h3>
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
                            src={logo33}
                            alt="Place 33"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo33)}
                        />
                        <img
                            src={logo33b}
                            alt="Place 33b"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo33b)}
                        />
                        <img
                            src={logo33c}
                            alt="Place 33c"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo33c)}
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
        <h2>Bangkok Dream World Park</h2>
        <p>
          Dream World is a paradise for kids! It’s packed with thrilling rides and attractions that will keep them entertained for hours. This American-style theme park has everything: Corkscrews, Bumping Cars, Swinging Viking Boat, Roller Coasters, and more.
        </p>
        <p>
          A crowd favorite is the Giant's House, where everything is 50 times larger than normal – it's a fantastic spot for fun and imaginative play. Get ready for water rides like Super Splash and White Water Rapids – but be warned, you will get wet! Dream World also has a full-fledged go-kart track and Snow Land, which features artificial snow (note: Snow Land is not included in the main ticket).
        </p>
        <p>
          The park also offers a live ‘Hollywood Action Show’ featuring an exciting SWAT team invasion of a criminal’s den, a thrilling spectacle. Dream World is not just a place for rides but also features the colorful ‘The Colors of the World Parade,’ where you can meet your favorite cartoon characters, including Dreamy!
        </p>
      </div>

      <h3>Itinerary:</h3>
      <p>Stop at: 62 Moo 1, Randsit-Ongkarak Road, Bungyeetho, Thanyaburi, Pathum Thani, 12130 Thailand</p>
      <ul>
        <li>Experience unlimited fun with various amazing rides!</li>
        <li>Dream World offers a variety of exciting attractions:</li>
        <ul>
          <li><strong>Cable Car</strong>: Get a bird’s-eye view of the park with this peaceful ride, perfect for families.</li>
          <li><strong>Tornado</strong>: A thrilling experience with donut-style seating that spins high in the air – perfect for adrenaline junkies!</li>
          <li><strong>Sky Coaster</strong>: For thrill-seekers, this bottomless roller coaster is a must-ride.</li>
          <li><strong>Grand Canyon</strong>: Prepare to get soaked on this exciting water ride through a canal.</li>
          <li><strong>Animal Farm</strong>: Spend some time feeding and petting friendly animals like teacup pigs, ponies, and deer.</li>
        </ul>
      </ul>
      <p>Once your adventure is over, you can head toward the exit.</p>

      <h3>How to reach:</h3>
      <p>
        Dream World is easily accessible by buses from Bangkok. Guests can also take the subway, taxi, or a private car for added convenience.
      </p>

      <h3>Child Policy:</h3>
      <ul>
        <li>Children shorter than 145 cm or aged between 4-12 years (proof may be required) qualify for the child rate.</li>
        <li>Children under 90 cm can enter for free if they share a seat with their parents.</li>
      </ul>

      <h3>Cancellation Policy:</h3>
      <p>
        To receive a full refund, travelers must cancel at least <strong>24 hours before</strong> the experience start date (local time zone). No refunds will be given after this period.
      </p>

      <h3>Inclusions:</h3>
      <ul>
        <li>Entrance Ticket for all rides</li>
        <li>Snow Town Ticket</li>
        <li>International and Indian Buffet Lunch</li>
      </ul>

      <h3>Exclusions:</h3>
      <ul>
        <li>Roundtrip Hotel Transfer</li>
        <li>Carnival Games</li>
        <li>Any Personal Expenses</li>
      </ul>
      
      </div>
    </div>
    
    );
};

export default BangkokDreamWorldPark;
