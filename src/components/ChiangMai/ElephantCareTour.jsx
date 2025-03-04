import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo22 from './image/logo22.jpeg';
import './ChiangMai.css';

const ElephantCareTour = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo22);
    const [selectedPackage, setSelectedPackage] = useState('A'); // New state to hold the selected package
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    const prices = {
        A: { adult: 1300, child: 650 },
        B: { adult: 1800, child: 900 },
        C: { adult: 1800, child: 900 },
        D: { adult: 2200, child: 1100 },
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
        setSelectedPackage(event.target.value); // Update the selected package
    };

    const handlePayNow = () => {
        const totalPeople = adults + children;
        if (!selectedDate || adults === 0) {
            alert('Date and at least one person traveling must be filled.');
        } else {
            const totalPricePayable = encodeURIComponent(totalPrice);
            const totalPeopleParam = encodeURIComponent(totalPeople);
            const dateParam = encodeURIComponent(selectedDate);
            const sourceParam = encodeURIComponent('ElephantCareTour');
            navigate(`/elephantCareTourPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };

    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }

        const cartItem = {
            title: "Elephant Care Tour",
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
        const adultPrice = prices[selectedPackage].adult;
        const childPrice = prices[selectedPackage].child;
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
                            <img src={logo22} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Elephant Care Tour <br />
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

            <h3>Elephant Care Tour</h3>
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
                            src={logo22}
                            alt="Place 22"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo22)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Select Package</p>
                    <select value={selectedPackage} onChange={handlePackageChange}>
                        <option value="A">Package A (Adult: 1300 Baht, Child: 650 Baht)</option>
                        <option value="B">Package B (Adult: 1800 Baht, Child: 900 Baht)</option>
                        <option value="C">Package C (Adult: 1800 Baht, Child: 900 Baht)</option>
                        <option value="D">Package D (Adult: 2200 Baht, Child: 1100 Baht)</option>
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

                <div className="info-window">
                    <h4>Description</h4>
                    <div>
                        <h2>Elephant Care Tour Packages</h2>
                        <p>
                            Experience an unforgettable journey into the world of elephants with our specially designed Elephant Care Tour. Each package is tailored to provide a unique and immersive experience, perfect for families, individuals, and groups. Choose the package that best suits your interests and enjoy spending time with these majestic creatures.
                        </p>

                        <h3>Packages and Pricing</h3>

                        <h3>Package A</h3>
                        <ul>
                            <li>Price - Adult: 1,300 Baht</li>
                            <li>Price - Child (4-10 years): 650 Baht</li>
                        </ul>

                        <h3>Package B</h3>
                        <ul>
                            <li>Price - Adult: 1,800 Baht</li>
                            <li>Price - Child (4-10 years): 900 Baht</li>
                        </ul>

                        <h3>Package C</h3>
                        <ul>
                            <li>Price - Adult: 1,800 Baht</li>
                            <li>Price - Child (4-10 years): 900 Baht</li>
                        </ul>

                        <h3>Package D</h3>
                        <ul>
                            <li>Price - Adult: 2,200 Baht</li>
                            <li>Price - Child (4-10 years): 1,100 Baht</li>
                        </ul>
                        <h3>Child Policy</h3>
    <p>
      Children under the age of 3 travel for free. Children aged 3-9 are charged at the child rate, and those above 9 are charged as adults.
    </p>

    <h3>Cancellation Policy</h3>
    <p>
      Free cancellation up to 24 hours in advance.
    </p>
                        <h3>Additional Information</h3>
                        <p>
                            All packages are designed to ensure the well-being of the elephants, providing ethical and responsible interactions. Activities may include feeding, bathing, and learning about elephant conservation efforts. 
                        </p>
                        <p>
                            Please bring comfortable clothing, sunscreen, and a change of clothes for water-related activities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElephantCareTour;
