import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo53 from './image/logo53.jpeg';
import logo54 from './image/logo54.jpeg';
import logo55 from './image/logo55.jpeg';
import './Phuket.css';

const TigerParkTicketPhuket = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo53);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('price9'); // Default package
    const navigate = useNavigate();

    // Package prices
    const prices = {
        price1: 1020, // 
        price2: 920, // 
        price3: 920, // 
        price4: 1020, // 
        price5: 1320, // 
        price6: 1320, // 
        price7: 1320, // 
        price8: 1320,  // 
        price9: 750,  // 
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
            title: "Tiger Park Ticket Phuket",
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
        const childPrice = selectedPackagePrice; // Assuming the same price for children
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
                            <img src={logo53} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Tiger Park Ticket Phuket  <br />
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

            <h3>Tiger Park Ticket Phuket </h3>
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
                            src={logo53}
                            alt="Place 53"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo53)}
                        />
                        <img
                            src={logo54}
                            alt="Place 54"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo54)}
                        />
                        <img
                            src={logo55}
                            alt="Place 55"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo55)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Select Package</p>
                    <select value={selectedPackage} onChange={handlePackageChange}>
                    <option value="price1">Big Tiger (1020 Baht)</option>
                    <option value="price2">Medium Tiger (920 Baht)</option>
                    <option value="price3">Small Tiger (920 Baht)</option>
                    <option value="price4">Smallest Tiger (1020 Baht)</option>
                    <option value="price5">New Born Tiger (1320 Baht)</option>
                    <option value="price6">White Tiger (1320 Baht)</option>
                    <option value="price7">Giant Tiger (1320 Baht)</option>
                    <option value="price8">Cheetah (1320 Baht)</option>
                    <option value="price9">Canopy Forest Safari (750 Baht)</option>

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

  <div>
    
  <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>Tiger Park Ticket Phuket</h2>
    <p>
      At Tiger Park, the welfare of our animals is our top priority. We are committed to providing the best care possible—our tigers are never chained, sedated, declawed, or defanged. Daily human contact fosters a bond between the tigers and their keepers, ensuring the big cats are comfortable and responsive to positive reinforcement training. The tigers are relaxed around humans, as they do not perceive us as prey or feel aggression towards people.
    </p>
    <p>
      Our goal is to educate visitors about the plight of wild tigers, while offering a once-in-a-lifetime experience. Come and explore this unique interaction with majestic creatures in a safe and ethical environment.
    </p>

    <h3>Pricing</h3>
    <ul>
      <li>Big Tiger: 1,020 Baht</li>
      <li>Medium Tiger: 920 Baht</li>
      <li>Small Tiger: 920 Baht</li>
      <li>Smallest Tiger: 1,020 Baht</li>
      <li>Newborn Tiger: 1,320 Baht</li>
      <li>White Tiger: 1,320 Baht</li>
      <li>Giant Tiger: 1,320 Baht</li>
      <li>Cheetah: 1,320 Baht</li>
      <li>Canopy Forest Safari: 750 Baht</li>
    </ul>

    <h3>Details</h3>
    <ul>
      <li>Operating Hours: 9:00 AM - 5:30 PM</li>
      <li>Package includes: 10 minutes photo session with tigers (using the customer's camera)</li>
      <li>
        <strong>Height and Age Restrictions:</strong>
        <ul>
          <li>Giant Tiger / Big Tiger / Medium Tiger: Height 160 cm / Age 18+ years</li>
          <li>Small Tiger: Height 150 cm / Age 16+ years</li>
          <li>Cheetah: Height 110 cm / Age 4+ years</li>
        </ul>
      </li>
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
</div>

        
    );
};

export default TigerParkTicketPhuket;
