import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo35 from './image/logo35.jpeg';
import logo36 from './image/logo36.jpeg';
import logo37 from './image/logo37.jpeg';
import './Phuket.css';

const SiamNiramitPhuket = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo35);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('price1');  // Default package
    const navigate = useNavigate();

    // Package prices
    const prices = {
        price1: 1530,
        price2: 1700,
        price3: 1870,
        price4: 1870,
        price5: 2040,
        price6: 2210,
        price7: 1880,
        price8: 2050,
        price9: 2220,
        price10: 2220,
        price11: 2390,
        price12: 2560
    };

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

    const handlePackageChange = (event) => {
        setSelectedPackage(event.target.value);
    };

    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }

        const cartItem = {
            title: "Siam Niramit (Phuket) ",
            date: selectedDate,
            adults,
            children,
            totalPrice,
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

    // Update total price based on selected package and number of people
    useEffect(() => {
        const selectedPackagePrice = prices[selectedPackage] || 0;
        const adultPrice = selectedPackagePrice;
        const childPrice = selectedPackagePrice;  // Assuming the same price for children
        setTotalPrice(adults * adultPrice + children * childPrice);
    }, [adults, children, selectedPackage]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Thailand-Places">
            {showSuccessWindow && (
                <div className="success-window">
                    <div className="success-content">
                        <div className="success-image-container">
                            <img src={logo35} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Siam Niramit (Phuket)  <br />
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

            <h3>Siam Niramit (Phuket) </h3>
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
                            src={logo35}
                            alt="Place 35"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo35)}
                        />
                        <img
                            src={logo36}
                            alt="Place 36"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo36)}
                        />
                        <img
                            src={logo37}
                            alt="Place 37"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo37)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Select Package</p>
                    <select value={selectedPackage} onChange={handlePackageChange}>
                        <option value="price1">Silver Seat: ฿1530</option>
                        <option value="price2">Gold Seat: ฿1700</option>
                        <option value="price3">Platinum Seat: ฿1870</option>
                        <option value="price4">Silver Seat + Buffet Dinner: ฿1870</option>
                        <option value="price5">Gold Seat + Buffet Dinner: ฿2040</option>
                        <option value="price6">Platinum Seat + Buffet Dinner: ฿2210</option>
                        <option value="price7">Silver Seat + Join Transfer: ฿1880</option>
                        <option value="price8">Gold Seat + Join Transfer: ฿2050</option>
                        <option value="price9">Platinum Seat + Join Transfer: ฿2220</option>
                        <option value="price10">Silver Seat + Buffet Dinner + Join Transfer: ฿2220</option>
                        <option value="price11">Gold Seat + Buffet Dinner + Join Transfer: ฿2390</option>
                        <option value="price12">Platinum Seat + Buffet Dinner + Join Transfer: ฿2560</option>
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
            <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>Siam Niramit (Phuket)</h2>
    <p>
      Experience the breathtaking Siam Niramit show in Phuket with various seating options:
    </p>
    <ul>
      <li><strong>Silver Seat:</strong> ฿1530</li>
      <li><strong>Gold Seat:</strong> ฿1700</li>
      <li><strong>Platinum Seat:</strong> ฿1870</li>
      <li><strong>Silver Seat + Buffet Dinner:</strong> ฿1870</li>
      <li><strong>Gold Seat + Buffet Dinner:</strong> ฿2040</li>
      <li><strong>Platinum Seat + Buffet Dinner:</strong> ฿2210</li>
      <li><strong>Silver Seat + Join Transfer:</strong> ฿1880</li>
      <li><strong>Gold Seat + Join Transfer:</strong> ฿2050</li>
      <li><strong>Platinum Seat + Join Transfer:</strong> ฿2220</li>
      <li><strong>Silver Seat + Buffet Dinner + Join Transfer:</strong> ฿2220</li>
      <li><strong>Gold Seat + Buffet Dinner + Join Transfer:</strong> ฿2390</li>
      <li><strong>Platinum Seat + Buffet Dinner + Join Transfer:</strong> ฿2560</li>
    </ul>

    <h3>Highlights</h3>
    <ul>
      <li>World-class, stunning stage performance show</li>
      <li>Learn about Thailand's history, culture, and mythology in style</li>
      <li>Enjoy pre-show activities such as traditional dances, Thai food, paddle boat riding, and more</li>
      <li>Optional Thai and International buffet</li>
      <li>Optional joined transfer service (in the pre-defined area)</li>
    </ul>

    <h3>Child Policy</h3>
    <p>
      Children under the age of 3 travel for free. Children aged 3-9 are charged at the child rate, and those above 9 are charged as adults.
    </p>

    <h3>Cancellation Policy</h3>
    <p>
      Free cancellation up to 24 hours in advance.
    </p>
    <ul>
      <li>Applicable to children of 100 - 140 cm in height</li>
      <li>Children under 100 cm in height can enter the theatre free of charge by sharing an adult seat</li>
    </ul>

    <h3>Opening Hours</h3>
    <p>
      Every day except Tuesday from 5:30 PM - 10:30 PM.
      <br />
      Show time: 8:30 PM - 9:50 PM
      <br />
      Pre-show entertainment: 7:20 PM - 8:05 PM
      <br />
      Optional Buffet Dinner: 6:00 PM - 8:30 PM (last serving time 8:00 PM)
    </p>
  </div>
</div>

        </div>
        
    );
};

export default SiamNiramitPhuket;
