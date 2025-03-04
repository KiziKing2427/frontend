import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo19 from './image/logo19.jpeg';
import logo20 from './image/logo20.jpeg';
import logo21 from './image/logo21.jpeg';
import './Pattaya.css';

const TigerParkPattaya = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1); // Default 1 adult
    const [children, setChildren] = useState(0);
    const [adultSeatType, setAdultSeatType] = useState('EntranceTicketOnly');
    const [childSeatType, setChildSeatType] = useState('EntranceTicket');
    const [extraCharge, setExtraCharge] = useState('WalkAround'); // Default extra charge is WalkAround (320 baht)
    const [totalPrice, setTotalPrice] = useState(320); // Default price is 320 baht
    const [selectedImage, setSelectedImage] = useState(logo19);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    // Updated extra charges for activities
    const extraCharges = {
        WalkAround: { price: 320 },
        ForestSafari: { price: 510 },
        BigTiger: { price: 810 },
        MediumTiger: { price: 710 },
        SmallTiger: { price: 710 },
        SmallestTiger: { price: 810 },
        NewBornTiger: { price: 1010 },
        GoldenTabby: { price: 1010 },
        GiantTiger: { price: 910 },
        PackageA: { price: 1270 },
        PackageB: { price: 1620 },
        PackageC: { price: 1920 },
        PackageD: { price: 2520 },
        PackageE: { price: 4520 }
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
            title: "Tiger Park Pattaya Tickets",
            date: selectedDate,
            adults,
            children,
            adultSeatType,
            childSeatType,
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

    // Update total price based on selected seat types, number of people, and extra charges
    useEffect(() => {
        // Calculate extra charges for adults and children
        let extraAdultCharges = 0;
        let extraChildCharges = 0;

        if (extraCharge !== 'None') {
            const extra = extraCharges[extraCharge];
            extraAdultCharges = extra?.price * adults || 0;
            extraChildCharges = extra?.price * children || 0;
        }

        // Calculate total price (no need for adult/child seat type pricing anymore)
        const finalTotalPrice = extraAdultCharges + extraChildCharges;
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
                            <img src={logo19} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Tiger Park Pattaya Tickets<br />
                                <strong>Date:</strong> {selectedDate}<br />
                                <strong>Adults:</strong> {adults} ({adultSeatType} Seat)<br />
                                <strong>Children:</strong> {children} ({childSeatType} Seat)<br />
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

            <h3>Tiger Park Pattaya Tickets</h3>
            <div className="image-with-name">
                <div className="image-container" style={{ textAlign: 'center', border: '3px solid #ccc', padding: '5px' }}>
                    <img
                        src={selectedImage}
                        alt="Selected Place"
                        className="large-image"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '5px' }}
                    />
                    <div className="small-images-container" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
                        {[logo19, logo20, logo21].map((img, idx) => (
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
                        <option value="WalkAround">Walk Around (320 baht)</option>
                        <option value="ForestSafari">Forest Safari (510 baht)</option>
                        <option value="BigTiger">Big Tiger (810 baht)</option>
                        <option value="MediumTiger">Medium Tiger (710 baht)</option>
                        <option value="SmallTiger">Small Tiger (710 baht)</option>
                        <option value="SmallestTiger">Smallest Tiger (810 baht)</option>
                        <option value="NewBornTiger">New Born Tiger (1010 baht)</option>
                        <option value="GoldenTabby">Golden Tabby (1010 baht)</option>
                        <option value="GiantTiger">Giant Tiger (910 baht)</option>
                        <option value="PackageA">Package A (1270 baht)</option>
                        <option value="PackageB">Package B (1620 baht)</option>
                        <option value="PackageC">Package C (1920 baht)</option>
                        <option value="PackageD">Package D (2520 baht)</option>
                        <option value="PackageE">Package E (4520 baht)</option>
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
    <h2>Tiger Park Pattaya</h2>

    <h3>Experience Overview</h3>
    <p>
      Experience the thrill of encountering magnificent tigers up close with our <strong>Tiger Park Pattaya Admission Ticket</strong>! Home to over 50 awe-inspiring tigers, this park offers a unique opportunity to meet, play, and capture unforgettable moments with these majestic creatures.
    </p>
    <p>
      Under the watchful eye of qualified staff, enjoy safe and exhilarating interactions in a well-maintained, natural-like habitat. For over 20 years, <strong>Tiger Park Pattaya</strong> has been a must-visit destination, providing ethical and responsible care to more than 300 tigers.
    </p>
    <p>
      With expert trainers ensuring safety, this is an adventure you won't want to miss!
    </p>

    <h3>Address</h3>
    <p>349/9 Moo 12 Nongprue, Banglamung, Chonburi, Thailand 20150</p>

    <h3>Opening Hours</h3>
    <p>Open Daily: 09:00 - 18:00</p>

    <h3>Pricing</h3>
    <h3>Individual Experiences</h3>
    <ul>
      <li><strong>Walk Around:</strong> 320 Baht</li>
      <li><strong>Forest Safari (15-minute electric car ride):</strong> 510 Baht</li>
      <li><strong>Big Tiger (2-5 years, play or enclosed for 10 minutes):</strong> 810 Baht</li>
      <li><strong>Medium Tiger (1-2 years, play or enclosed for 10 minutes):</strong> 710 Baht</li>
      <li><strong>Small Tiger (7-12 months, play or enclosed for 10 minutes):</strong> 710 Baht</li>
      <li><strong>Smallest Tiger (3-4 months, play or enclosed for 10 minutes):</strong> 810 Baht</li>
      <li><strong>Newborn Tiger (1-2 months, play or enclosed for 10 minutes):</strong> 1010 Baht</li>
      <li><strong>Golden Tabby (play or enclosed for 10 minutes):</strong> 1010 Baht</li>
      <li><strong>Giant Tiger (more than 5 years, play or enclosed for 10 minutes):</strong> 910 Baht</li>
    </ul>

    <h3>Package Deals</h3>
    <ul>
      <li><strong>Package A:</strong> (Big + Small Tiger) OR (Medium + Smallest Tiger) OR (Small + Smallest Tiger) - 1270 Baht</li>
      <li><strong>Package B:</strong> (Golden Tabby + Giant Tiger) - 1620 Baht</li>
      <li><strong>Package C:</strong> (Big + Medium + Smallest Tigers) OR (Big + Small + Smallest Tigers) - 1920 Baht</li>
      <li><strong>Package D:</strong> (Big + Medium + Small + Smallest Tigers) - 2520 Baht</li>
      <li><strong>Package E:</strong> (Big + Small + Smallest + Medium + Golden Tabby + Giant Tiger + Free Cargo Photo) - 4520 Baht</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Walk Around Tiger Park</li>
      <li>Must book Tiger Park Pattaya tickets 24 hours in advance</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Photo & Video</li>
      <li>Hotel Transfer</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Tiger Park Pattaya is a safe and well-managed destination for visitors looking to interact with tigers. Book your tickets in advance for a seamless experience!
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

export default TigerParkPattaya;
