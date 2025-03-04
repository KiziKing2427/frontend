import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo32 from './image/logo32.jpeg';
import logo33 from './image/logo33.jpeg';
import logo34 from './image/logo34.jpeg';
import './Phuket.css';

const CarnivalMagicPhuketTicket = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo32);
    const [selectedOption, setSelectedOption] = useState("Shows Only: 1800 THB");
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const [adultSeatType, setAdultSeatType] = useState('Shows Only');
    const [childSeatType, setChildSeatType] = useState('Shows Only');
    const [selectedPrice, setSelectedPrice] = useState(0);

    const navigate = useNavigate();

    const ticketOptions = [
        "Shows Only: 1800 THB",
        "Shows Only (Royal Seat): 2050 THB",
        "Shows + Buffet Dinner: 2150 THB",
        "Shows (Royal Seat) + Buffet Dinner: 2450 THB",
        "Shows + Transfer: 2150 THB",
        "Shows (Royal Seat) + Transfer: 2450 THB",
        "Shows + Buffet Dinner + Transfer: 2550 THB",
        "Shows (Royal Seat) + Buffet Dinner + Transfer: 2850 THB",
    ];

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        window.scrollBy({
            top: 300,
            behavior: 'smooth',
        });
    };

    const handleAdultsChange = (event) => {
        setAdults(parseInt(event.target.value));
    };

    const handleChildrenChange = (event) => {
        setChildren(parseInt(event.target.value));
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
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
            title: "Carnival Magic Phuket Ticket",
            date: selectedDate,
            adults,
            children,
            totalPrice,
            option: selectedOption,
            image: selectedImage,
        };

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        setShowSuccessWindow(true);
    };

    const handleGoToCart = () => {
        setShowSuccessWindow(false);
        navigate('/cart');
    };

    // Update total price based on the selected option
    useEffect(() => {
        const priceMap = {
            "Shows Only: 1800 THB": 1800,
            "Shows Only (Royal Seat): 2050 THB": 2050,
            "Shows + Buffet Dinner: 2150 THB": 2150,
            "Shows (Royal Seat) + Buffet Dinner: 2450 THB": 2450,
            "Shows + Transfer: 2150 THB": 2150,
            "Shows (Royal Seat) + Transfer: 2450 THB": 2450,
            "Shows + Buffet Dinner + Transfer: 2550 THB": 2550,
            "Shows (Royal Seat) + Buffet Dinner + Transfer: 2850 THB": 2850,
        };

        setTotalPrice((adults + children) * priceMap[selectedOption]);
    }, [adults, children, selectedOption]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Thailand-Places">
            {showSuccessWindow && (
                <div className="success-window">
                    <div className="success-content">
                        <div className="success-image-container">
                            <img src={logo32} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Carnival Magic Phuket Ticket<br />
                                <strong>Date:</strong> {selectedDate}<br />
                                <strong>Option:</strong> {selectedOption}<br />
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
                                    window.scrollTo(0, 0);
                                    navigate('/');
                                }}
                            >
                                Add More Product
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <h3>Carnival Magic Phuket Ticket</h3>
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
                                        src={logo32}
                                        alt="Place 32"
                                        className="small-image"
                                        style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                                        onClick={() => setSelectedImage(logo32)}
                                    />
                                    <img
                                        src={logo33}
                                        alt="Place 33"
                                        className="small-image"
                                        style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                                        onClick={() => setSelectedImage(logo33)}
                                    />
                                    <img
                                        src={logo34}
                                        alt="Place 34"
                                        className="small-image"
                                        style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                                        onClick={() => setSelectedImage(logo34)}
                                    />
                                </div>
                            </div>
            

                            <div className="sticky-container">
  <p className="date-label highlight">Price</p>
  <p className="price">
    Shows Only: 1,800 THB<br />
    Shows Only (Royal Seat): 2,050 THB<br />
    Shows + Buffet Dinner: 2,150 THB<br />
    Shows (Royal Seat) + Buffet Dinner: 2,450 THB<br />
    Shows + Transfer: 2,150 THB<br />
    Shows (Royal Seat) + Transfer: 2,450 THB<br />
    Shows + Buffet Dinner + Transfer: 2,550 THB<br />
    Shows (Royal Seat) + Buffet Dinner + Transfer: 2,850 THB
  </p>

  <p className="date-label highlight">Select Seat Type for Adults</p>
  <select value={adultSeatType} onChange={(e) => setAdultSeatType(e.target.value)}>
    <option value="Shows Only">Shows Only</option>
    <option value="Shows Only (Royal Seat)">Shows Only (Royal Seat)</option>
    <option value="Shows + Buffet Dinner">Shows + Buffet Dinner</option>
    <option value="Shows (Royal Seat) + Buffet Dinner">Shows (Royal Seat) + Buffet Dinner</option>
    <option value="Shows + Transfer">Shows + Transfer</option>
    <option value="Shows (Royal Seat) + Transfer">Shows (Royal Seat) + Transfer</option>
    <option value="Shows + Buffet Dinner + Transfer">Shows + Buffet Dinner + Transfer</option>
    <option value="Shows (Royal Seat) + Buffet Dinner + Transfer">Shows (Royal Seat) + Buffet Dinner + Transfer</option>
  </select>

  <p className="date-label highlight">Select Seat Type for Children</p>
  <select value={childSeatType} onChange={(e) => setChildSeatType(e.target.value)}>
    <option value="Shows Only">Shows Only</option>
    <option value="Shows Only (Royal Seat)">Shows Only (Royal Seat)</option>
    <option value="Shows + Buffet Dinner">Shows + Buffet Dinner</option>
    <option value="Shows (Royal Seat) + Buffet Dinner">Shows (Royal Seat) + Buffet Dinner</option>
    <option value="Shows + Transfer">Shows + Transfer</option>
    <option value="Shows (Royal Seat) + Transfer">Shows (Royal Seat) + Transfer</option>
    <option value="Shows + Buffet Dinner + Transfer">Shows + Buffet Dinner + Transfer</option>
    <option value="Shows (Royal Seat) + Buffet Dinner + Transfer">Shows (Royal Seat) + Buffet Dinner + Transfer</option>
  </select>

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
      <p>Price: {selectedPrice}</p>
    </div>
    <div className="detail-item">
      <p>Number of Adults: {adults} ({adultSeatType} Seat)</p>
    </div>
    <div className="detail-item">
      <p>Number of Children: {children} ({childSeatType} Seat)</p>
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
            <div className="info-window">
            <div>
    <h2>Carnival Magic Phuket Ticket</h2>
    
    <h3>Ticket Prices</h3>
    <ul>
        <li><strong>Shows Only:</strong> 1800 Baht</li>
        <li><strong>Shows Only (Royal Seat):</strong> 2050 Baht</li>
        <li><strong>Shows + Buffet Dinner:</strong> 2150 Baht</li>
        <li><strong>Shows (Royal Seat) + Buffet Dinner:</strong> 2450 Baht</li>
        <li><strong>Shows + Transfer:</strong> 2150 Baht</li>
        <li><strong>Shows (Royal Seat) + Transfer:</strong> 2450 Baht</li>
        <li><strong>Shows + Buffet Dinner + Transfer:</strong> 2550 Baht</li>
        <li><strong>Shows (Royal Seat) + Buffet Dinner + Transfer:</strong> 2850 Baht</li>
    </ul>
    
    <h3>Highlights</h3>
    <ul>
        <li>A combination of carnival-style parade, illuminations, games, entertainment, and shopping</li>
        <li>Optional buffet dinner featuring Thai, Western, Indian, and vegetarian dishes</li>
        <li>Halal buffet options available</li>
        <li>Suitable for everyone in the family</li>
        <li>Optional round-trip transfer to your hotel</li>
    </ul>
    
    <h3>Operating Hours</h3>
    <ul>
        <li>Open on Monday, Wednesday, and Saturday</li>
        <li>Attraction operating hours: 5:30 - 11:30 PM</li>
        <li><strong>Parade Showtime:</strong> 9:00 PM at River Palace Theatre (Parade gate opens at 8:30 PM, duration: 50 minutes)</li>
        <li><strong>Kingdom of Lights:</strong> Opens after the parade ends</li>
        <li><strong>Bird of Paradise Buffet Restaurant:</strong> Open from 5:30 - 9:00 PM</li>
    </ul>
    <h3>Child Policy</h3>
    <p>
      Children under the age of 3 travel for free. Children aged 3-9 are charged at the child rate, and those above 9 are charged as adults.
    </p>

    <h3>Cancellation Policy</h3>
    <p>
      Free cancellation up to 24 hours in advance.
    </p>
</div>
</div>
        </div>
    );
};

export default CarnivalMagicPhuketTicket;
