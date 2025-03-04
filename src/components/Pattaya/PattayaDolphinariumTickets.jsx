import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo31 from './image/logo31.jpeg';
import logo32 from './image/logo32.jpeg';
import logo33 from './image/logo33.jpeg';
import './Pattaya.css';

const PattayaDolphinariumTickets = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [adultSeatType, setAdultSeatType] = useState('Regular');
    const [childSeatType, setChildSeatType] = useState('Regular');
    const [extraCharge, setExtraCharge] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo31);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    // Prices for seat types
    const seatPricing = {
        Regular: { adult: 600, child: 480 },
        DeluxeTicket: { adult: 800, child: 600 },
        VIPTicket: { adult: 1100, child: 850 },
        SwimWithDolphin: { adult: 4500, child: 4500 },
        PhotoWithDolphin: { adult: 400, child: 400 },
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
            title: "Pattaya Dolphinarium Tickets",
            date: selectedDate,
            adults,
            children,
            adultSeatType,
            childSeatType,
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

    // Update total price based on selected seat types, number of people, and extra charges
    useEffect(() => {
        const adultPrice = seatPricing[adultSeatType]?.adult || 0;
        const childPrice = seatPricing[childSeatType]?.child || 0;

        const totalAdultsPrice = adults * adultPrice;
        const totalChildrenPrice = children * childPrice;

        // Calculate extra charges for selected extras

        const finalTotalPrice = totalAdultsPrice + totalChildrenPrice;
        setTotalPrice(finalTotalPrice);

    }, [adults, children, adultSeatType, childSeatType]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Thailand-Places">
            {showSuccessWindow && (
                <div className="success-window">
                    <div className="success-content">
                        <div className="success-image-container">
                            <img src={logo31} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong>Pattaya Dolphinarium Tickets<br />
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

            <h3>Pattaya Dolphinarium Tickets</h3>
            <div className="image-with-name">
                <div className="image-container" style={{ textAlign: 'center', border: '3px solid #ccc', padding: '5px' }}>
                    <img
                        src={selectedImage}
                        alt="Selected Place"
                        className="large-image"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '5px' }}
                    />
                    <div className="small-images-container" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
                        {[logo31, logo32, logo33].map((img, idx) => (
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
                    <p className="date-label highlight">Price</p>
                    <p className="price">
                        Regular: adult: 600, child: 480 <br />
                        DeluxeTicket: adult: 800, child: 600 <br />
                        VIPTicket: adult: 1100, child: 850 <br />
                        SwimWithDolphin: adult: 4500, child: 4500<br />
                        PhotoWithDolphin: adult: 400, child: 400<br />
                    </p>

                    <p className="date-label highlight">Select Seat Type for Adults</p>
                    <select value={adultSeatType} onChange={(e) => setAdultSeatType(e.target.value)}>
                        <option value="Regular">Regular Ticket</option>
                        <option value="DeluxeTicket">Deluxe Ticket</option>
                        <option value="VIPTicket">VIP Ticket</option>
                        <option value="SwimWithDolphin">SwimWith Dolphin</option>
                        <option value="PhotoWithDolphin">Photo With Dolphin</option>
                    </select>

                    <p className="date-label highlight">Select Seat Type for Children</p>
                    <select value={childSeatType} onChange={(e) => setChildSeatType(e.target.value)}>
                    <option value="Regular">Regular Ticket</option>
                        <option value="DeluxeTicket">Deluxe Ticket</option>
                        <option value="VIPTicket">VIP Ticket</option>
                        <option value="SwimWithDolphin">SwimWith Dolphin</option>
                        <option value="PhotoWithDolphin">Photo With Dolphin</option>
                    </select>

                    <p className="date-label highlight">Select Date to Travel</p>
                    <input type="date" value={selectedDate} onChange={handleDateChange} />

                    <p className="date-label highlight">How many People</p>
                    <div className="people-selection">
                        {[{ label: 'Adults', value: adults, setter: setAdults, min: 1 },
                            { label: 'Children', value: children, setter: setChildren, min: 0 }].map(({ label, value, setter, min }) => (
                            <div key={label}>
                                <label>{label}</label>
                                <button onClick={() => setter(value - 1)} disabled={value <= min}>-</button>
                                <span>{value}</span>
                                <button onClick={() => setter(value + 1)}>+</button>
                            </div>
                        ))}
                    </div>

                    <div className="total-price">
                        <p className="price-highlight">Total Price: {totalPrice} THB</p>
                        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
                
                <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>Pattaya Dolphinarium</h2>

    <h3>Experience Overview</h3>
    <p>
      Welcome to <strong>Pattaya Dolphinarium</strong>, a world-class attraction in Pattaya and a proud member of an international network of dolphinariums from Ukraine, Russia, Belarus, Moldova, Kazakhstan, and Thailand.
    </p>
    <p>
      Designed and built according to international standards, the dolphinarium ensures top-tier care for its animals. It offers the best dolphin show in Southeast Asia, featuring intelligent <strong>Bottlenose Dolphins</strong> and adorable <strong>South American Fur Seals</strong>. 
    </p>
    <p>
      You can not only enjoy their incredible tricks and acrobatics during the show but also interact with them through photo sessions or even swimming experiences. Dolphins have a therapeutic effect, improving mood, reducing stress, and boosting self-confidence.
    </p>
    <p>
      Meet the stars of the show: <strong>Tomi, Antey, Barcelona, Raduga, Phil</strong>, and our playful seals, <strong>Lilo and Stitch</strong>. Each of them has a unique personality, and together they create an unforgettable experience.
    </p>
    <p>
      Looking for a unique gift? Surprise your loved ones with a gift certificate for an extraordinary dolphin encounter!
    </p>

    <h3>Address</h3>
    <p>555/5 Village No. 1, Bang Lamung District, Chon Buri 20150</p>

    <h3>Opening Hours</h3>
    <p>Please check available time slots on the official website or ticketing office.</p>

    <h3>Pricing</h3>
    <ul>
      <li><strong>Regular Ticket</strong>: Adult - 600 Baht | Child - 480 Baht</li>
      <li><strong>Deluxe Ticket</strong>: Adult - 800 Baht | Child - 600 Baht</li>
      <li><strong>VIP Ticket</strong>: Adult - 1100 Baht | Child - 850 Baht</li>
      <li><strong>Swim with Dolphins</strong>: 4500 Baht</li>
      <li><strong>Photo with Dolphin</strong>: 400 Baht</li>
    </ul>

    <h3>Includes</h3>
    <ul>
      <li>Entrance ticket + your extra choice</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Hotel transfer</li>
      <li>Food</li>
      <li>Tips & Gratitude</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Tickets can be purchased in advance through our website or at the ticketing office. We also offer dolphin-assisted therapy courses, birthday party experiences, and more!
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

export default PattayaDolphinariumTickets;
