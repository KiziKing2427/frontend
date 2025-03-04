import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo46 from './image/logo46.jpeg';
import logo47 from './image/logo47.jpeg';
import logo48 from './image/logo48.jpeg';
import './Pattaya.css';

const TiffanyShowPattayaTickets = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1); // Default 1 adult
    const [children, setChildren] = useState(0);
    const [extraCharge, setExtraCharge] = useState('MezzanineSeat'); // Default extra charge
    const [totalPrice, setTotalPrice] = useState(900); // Default price based on initial extra charge
    const [selectedImage, setSelectedImage] = useState(logo48);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    // Updated extra charges for activities
    const extraCharges = {
        MezzanineSeat: { price: 900 },
        VIPSeat: { price: 1200 },
        GoldVIPSeat: { price: 1400 },
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        window.scrollBy({ top: 300, behavior: 'smooth' });
    };

    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }

        const cartItem = {
            title: "Tiffany's Show Pattaya Tickets",
            date: selectedDate,
            adults,
            children,
            extraCharge,
            totalPrice,
            selectedImage,
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

    // Update total price based on selected extra charge, number of people, and their selected activities
    useEffect(() => {
        let extraChargesAmount = 0;

        if (extraCharge !== 'None') {
            const extra = extraCharges[extraCharge];
            extraChargesAmount = extra?.price || 0;
        }

        // Calculate total price
        const finalTotalPrice = (extraChargesAmount * (adults + children));
        setTotalPrice(finalTotalPrice);
    }, [adults, children, extraCharge]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Thailand-Places">
            {showSuccessWindow && (
                <div className="success-window">
                    <div className="success-content">
                        <div className="success-image-container">
                            <img src={logo48} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Tiffany's Show Pattaya Tickets<br />
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

            <h3>Tiffany's Show Pattaya Tickets</h3>
            <div className="image-with-name">
                <div className="image-container" style={{ textAlign: 'center', border: '3px solid #ccc', padding: '5px' }}>
                    <img
                        src={selectedImage}
                        alt="Selected Place"
                        className="large-image"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '5px' }}
                    />
                    <div className="small-images-container" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
                        {[logo46, logo47, logo48].map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Place ${idx + 4}`}
                                className="small-image"
                                style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Select Extra Activities</p>
                    <select value={extraCharge} onChange={(e) => setExtraCharge(e.target.value)}>
                        <option value="MezzanineSeat">Mezzanine Seat (900 baht)</option>
                        <option value="VIPSeat">VIP Seat (1200 baht)</option>
                        <option value="GoldVIPSeat">Gold VIP Seat (1400 baht)</option>
                    </select>

                    <p className="date-label highlight">Select Date to Travel</p>
                    <input type="date" value={selectedDate} onChange={handleDateChange} />

                    <p className="date-label highlight">How many People</p>
                    <div className="people-count">
                        <label>
                            Adults:
                            <button onClick={() => setAdults(adults - 1)} disabled={adults === 0}>-</button>
                            <input type="number" value={adults} readOnly />
                            <button onClick={() => setAdults(adults + 1)}>+</button>
                        </label>
                        <label>
                            Children:
                            <button onClick={() => setChildren(children - 1)} disabled={children === 0}>-</button>
                            <input type="number" value={children} readOnly />
                            <button onClick={() => setChildren(children + 1)}>+</button>
                        </label>
                    </div>

                    <div className="total-price">
                        <p className="price-highlight">Total Price: {totalPrice} THB</p>
                        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>

                <div className="info-window">
                    <h4>Description</h4>
  <div>
    <h2>Tiffany's Show Pattaya</h2>

    <h3>Experience Overview</h3>
    <p>
      Tiffany’s Show Pattaya is the <strong>world’s first transgender cabaret theatre</strong> and a must-see attraction in Pattaya. It all started as a small birthday performance by Mr. Suparb Sangkumchoo, but soon evolved into a grand theatrical spectacle with dazzling costumes, breathtaking performances, and world-class production.
    </p>
    <p>
      From its humble beginnings as a small bar show, Tiffany’s transformed into a 500-seat theatre, captivating audiences worldwide with iconic performances such as <em>Mirror Mirror, First Be, Big Spender, Coming to America</em>, and <em>The Last Emperor</em>. Today, the show attracts thousands of visitors and remains a global sensation in the world of cabaret.
    </p>

    <h3>Show Timings</h3>
    <ul>
      <li>Show 1: 18:00</li>
      <li>Show 2: 19:30</li>
      <li>Show 3: 21:00</li>
    </ul>
    
    <h3>Seating & Pricing</h3>
    <ul>
      <li><strong>Mezzanine Seat</strong>: 900 Baht</li>
      <li><strong>VIP Seat</strong>: 1,200 Baht</li>
      <li><strong>Gold VIP Seat</strong>: 1,400 Baht</li>
    </ul>

    <h3>Address</h3>
    <p>
      464 Village No. 9 Pattaya Sai Song Rd, Nongprue Subdistrict, Bang Lamung District, Chon Buri 20150
    </p>

    <h3>Inclusions</h3>
    <ul>
      <li>Entrance Ticket</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Food & Beverages</li>
      <li>Tips & Gratuity</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Experience a night of glamour, elegance, and entertainment at Tiffany’s Show Pattaya, where performers deliver an extraordinary mix of music, dance, and extravagant costumes. 
      <strong>Book your tickets now</strong> and immerse yourself in one of Thailand’s most dazzling performances!
    </p>
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

export default TiffanyShowPattayaTickets;
