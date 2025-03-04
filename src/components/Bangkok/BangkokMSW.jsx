import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo38 from './image/logo38.jpeg';
import logo39 from './image/logo39.jpeg';
import logo13 from './image/logo13.jpeg';
import './Bangkok.css';

const BangkokMSW = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo38);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false); // New state for success window
    const navigate = useNavigate();

    const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    window.scrollBy({
        top: 300, // Adjust this value as needed
        behavior: 'smooth'
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
            title: "Daytime Mahanakhon Sky Walk Admission Ticket",
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
        const pricePerPerson = 1150;
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
        <img src={logo39} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong> Daytime Mahanakhon Sky Walk Admission Ticket<br />
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

            <h3>Daytime Mahanakhon Sky Walk Admission Ticket</h3>
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
                            src={logo38}
                            alt="Place 38"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo38)}
                        />
                        <img
                            src={logo39}
                            alt="Place 39"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo39)}
                        />
                        <img
                            src={logo13}
                            alt="Place 13"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo13)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">1,150.00 Baht</p>

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

            {/* Additional Info Section */}
            <div className="info-window">
            <h4>Description</h4>
    <p>
        The Mahanakhon Skywalk is one of the most exciting and thrilling attractions in Bangkok. The Glass tray is located on the 78th floor at a height of 310 meters and is the perfect place for adventure seekers. The visitors will get a bird’s eye view of the whole city of Bangkok; they can even spot famous landmarks located miles away. The outdoor deck at the Mahanakhon Skywalk is considered the highest outdoor observation area in Thailand with a height of 314 meters.
    </p>
    <p>
        The King Power Mahankhon building is the highest building in Thailand built in a modern architectural style, with top-notch technology and many attractive features. The elevator will lead to the 74th floor within 50 seconds. The elevator is equipped to provide guests with a video-themed digital experience displaying landmarks in Bangkok. The Indoor Observation deck gives you a 360-degree view of the Bangkok skyline.
    </p>
    <p>
        The King Power Mahanakhon Building gives an opportunity to learn more about landmarks by using an Interactive Augmented Reality experience and dynamic Interactive touch screens. The building boasts an unparalleled view of the city where guests might even be able to spot the major highlight of the city. The sunset view observed from a height of 310 meters is a visual treat to the eyes of the visitors.
    </p>

    <h3>Daytime Ticket Timing:</h3>
    <p>Operating Hours: 10:00 AM - 04:00 PM</p>
    <p>Last Admission: 03:30 PM</p>

    <h3>Sunset Ticket Timing:</h3>
    <p>Opening Hours: 04:00 PM - 07:00 PM</p>
    <p>Last Admission: 06:30 PM</p>

    <h3>Package Details:</h3>
    <ul>
        <li>Play Package: Indoor and Outdoor Observation Deck, Skywalk with 1 Skyride</li>
        <li>Eat Package: Indoor and Outdoor Observation Deck, Skywalk with a Cash Coupon*</li>
        <li>Drink Package: Indoor and Outdoor Observation Deck, Skywalk with Soft Drink at 74th Floor</li>
        <li>Digital Package: Indoor and Outdoor Observation Deck, Skywalk with 1 Photo Album</li>
    </ul>
    <p>* The Cash Coupon valued at THB 200 is applicable for Thai Taste Hub Mahanakhon CUBE or Mahanaknon eatery only. Thai Taste Hub Mahanakhon CUBE: 10:00 AM - 08:30 PM (Last order at 07:00 PM). Mahanakhon Eatery: 11:00 AM - 08:00 PM (Last order at 07:00 PM). </p>
    <p><h4>*** Please note that the above packages are not included in this Ticket, but can buy on request *** </h4></p>
    <h3>Child Policy:</h3>
    <p>Children aged 3 - 12 years will be charged at a child rate.</p>

    <h3>Address:</h3>
    <p>King Power Mahanakhon Building, 114 Narathiwas Road, Silom, Bangrak, Bangkok, 10500 Thailand.</p>

    <h3>How to Reach:</h3>
    <p>By BTS: Mahanakhon Skywalk is located next to Chong Nonsi BTS Station. After exiting the station, you will find the King Power Mahanakhon building just a short walk away.</p>
    <p>By Taxi: You can also take a taxi to the King Power Mahanakhon building.</p>

    <h3>Cancellation Policy:</h3>
    <p>Full refund for cancellation 24 hours before the scheduled time. No refund for cancellations made less than 24 hours in advance.</p>

    <h3>Inclusions:</h3>
    <ul>
        <li>Admission to Mahanakhon Skywalk</li>
        <li>Indoor and Outdoor Observation Deck Access</li>
        <li>Use of Interactive Augmented Reality Experience</li>
        <li>Cash Coupon for Eat Package</li>
    </ul>

    <h3>Exclusions:</h3>
    <ul>
        <li>Transportation to the attraction</li>
        <li>Food and beverages (unless included in the package)</li>
        <li>Personal expenses</li>
    </ul>
                {/* Remaining content here */}
            </div>
        </div>
    );
};

export default BangkokMSW;
