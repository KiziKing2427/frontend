import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo16 from './image/logo16.jpeg';
import logo17 from './image/logo17.jpeg';
import logo18 from './image/logo18.jpeg';
import './Pattaya.css';

const NongNoochTropicalGarden = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [adultSeatType, setAdultSeatType] = useState('EntranceTicketOnly');
    const [childSeatType, setChildSeatType] = useState('EntranceTicketOnly');
    const [extraCharge, setExtraCharge] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo16);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    // Prices for seat types
    const seatPricing = {
        EntranceTicketOnly: { adult: 550, child: 350 },
        EntranceTicketPlusSightseeingBus: { adult: 650, child: 550 },
        EntranceTicketPlusShow: { adult: 750, child: 600 },
        EntranceTicketPlusSightseeingBusPlusShow: { adult: 950, child: 700 },
        EntranceTicketPlusSightseeingBusPlusLunch: { adult: 950, child: 700 },
        EntranceTicketPlusLunchPlusShow: { adult: 1000, child: 800 },
        EntranceTicketPlusSightseeingBusPlusShowPlusLunch: { adult: 1250, child: 950 }
    };

    // Extra charges
    const extraCharges = {
        SightseeingBus: { adult: 200, child: 150 },
        VIPSeatForShow: { adult: 100, child: 100 },
        ElephantRide: { adult: 400, child: 300 }
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
            title: "Nong Nooch Tropical Garden",
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
        let extraChargePrice = 0;
        extraCharge.forEach((charge) => {
            if (charge === 'SightseeingBus') {
                extraChargePrice += extraCharges.SightseeingBus.adult * adults + extraCharges.SightseeingBus.child * children;
            }
            if (charge === 'VIPSeatForShow') {
                extraChargePrice += extraCharges.VIPSeatForShow.adult * adults + extraCharges.VIPSeatForShow.child * children;
            }
            if (charge === 'ElephantRide') {
                extraChargePrice += extraCharges.ElephantRide.adult * adults + extraCharges.ElephantRide.child * children;
            }
        });

        const finalTotalPrice = totalAdultsPrice + totalChildrenPrice + extraChargePrice;
        setTotalPrice(finalTotalPrice);

    }, [adults, children, adultSeatType, childSeatType, extraCharge]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Thailand-Places">
            {showSuccessWindow && (
                <div className="success-window">
                    <div className="success-content">
                        <div className="success-image-container">
                            <img src={logo16} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Nong Nooch Tropical Garden<br />
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

            <h3>Nong Nooch Tropical Garden</h3>
            <div className="image-with-name">
                <div className="image-container" style={{ textAlign: 'center', border: '3px solid #ccc', padding: '5px' }}>
                    <img
                        src={selectedImage}
                        alt="Selected Place"
                        className="large-image"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '5px' }}
                    />
                    <div className="small-images-container" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
                        {[logo16, logo17, logo18].map((img, idx) => (
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
                        Entrance Ticket only: Adult 550 THB, Child 350 THB<br />
                        Entrance ticket + sightseeing bus: Adult 650 THB, Child 550 THB<br />
                        Entrance ticket + show: Adult 750 THB, Child 600 THB<br />
                        Entrance ticket + sightseeing bus + show: Adult 950 THB, Child 700 THB<br />
                        Entrance ticket + sightseeing bus + lunch: Adult 950 THB, Child 700 THB<br />
                        Entrance ticket + lunch + show: Adult 1000 THB, Child 800 THB<br />
                        Entrance ticket + sightseeing bus + show + lunch: Adult 1250 THB, Child 950 THB<br />
                    </p>

                    <p className="date-label highlight">Select Seat Type for Adults</p>
                    <select value={adultSeatType} onChange={(e) => setAdultSeatType(e.target.value)}>
                        <option value="EntranceTicketOnly">Entrance ticket only</option>
                        <option value="EntranceTicketPlusSightseeingBus">Entrance ticket + sightseeing bus</option>
                        <option value="EntranceTicketPlusShow">Entrance ticket + show</option>
                        <option value="EntranceTicketPlusSightseeingBusPlusShow">Entrance ticket + sightseeing bus + show</option>
                        <option value="EntranceTicketPlusSightseeingBusPlusLunch">Entrance ticket + sightseeing bus + lunch</option>
                        <option value="EntranceTicketPlusLunchPlusShow">Entrance ticket + lunch + show</option>
                        <option value="EntranceTicketPlusSightseeingBusPlusShowPlusLunch">Entrance ticket + sightseeing bus + show + lunch</option>
                    </select>

                    <p className="date-label highlight">Select Seat Type for Children</p>
                    <select value={childSeatType} onChange={(e) => setChildSeatType(e.target.value)}>
                        <option value="EntranceTicketOnly">Entrance ticket only</option>
                        <option value="EntranceTicketPlusSightseeingBus">Entrance ticket + sightseeing bus</option>
                        <option value="EntranceTicketPlusShow">Entrance ticket + show</option>
                        <option value="EntranceTicketPlusSightseeingBusPlusShow">Entrance ticket + sightseeing bus + show</option>
                        <option value="EntranceTicketPlusSightseeingBusPlusLunch">Entrance ticket + sightseeing bus + lunch</option>
                        <option value="EntranceTicketPlusLunchPlusShow">Entrance ticket + lunch + show</option>
                        <option value="EntranceTicketPlusSightseeingBusPlusShowPlusLunch">Entrance ticket + sightseeing bus + show + lunch</option>
                    </select>

                    <p className="date-label highlight">Select Extra Charges</p>
                    <div className="extra-charges">
                        {Object.keys(extraCharges).map((charge, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={charge}
                                    value={charge}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setExtraCharge([...extraCharge, charge]);
                                        } else {
                                            setExtraCharge(extraCharge.filter(item => item !== charge));
                                        }
                                    }}
                                />
                                <label htmlFor={charge}>{charge.replace(/([A-Z])/g, ' $1')} - {extraCharges[charge].adult} THB (Adult), {extraCharges[charge].child} THB (Child)</label>
                            </div>
                        ))}
                    </div>

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
    <h2>Nong Nooch Tropical Garden</h2>

    <h3>Experience Overview</h3>
    <p>
      Nong Nooch Tropical Garden, a world-renowned tourist destination in Pattaya, has been enchanting visitors for over 30 years. This botanical paradise features vibrant flower gardens, lush orchid displays, and intricately landscaped grounds. 
    </p>
    <p>
      Visitors can explore various attractions such as the <strong>Animal Kingdom</strong>, mesmerizing <strong>Thai cultural performances</strong>, and a captivating <strong>elephant show</strong>. Car enthusiasts will be delighted by the unique <strong>Car Garden</strong>, which showcases an impressive collection of vehicles. A must-visit highlight is <strong>Dinosaur Valley</strong>, where life-sized replicas of various dinosaur species bring prehistoric times to life.
    </p>
    <p>
      Whether you're a nature lover, a culture enthusiast, or an adventure seeker, Nong Nooch Tropical Garden offers an unforgettable experience for all.
    </p>

    <h3>Address</h3>
    <p>
      34 Na Chom Thian, Sattahip District, Chon Buri 20250
    </p>

    <h3>Opening Hours</h3>
    <p>Open Daily: 08:00 - 18:00</p>

    <h3>Show Timings</h3>
    <ul>
      <li>10:30 AM</li>
      <li>11:30 AM</li>
      <li>1:30 PM</li>
      <li>3:30 PM</li>
    </ul>

    <h3>Pricing</h3>
    <h3>Entrance Ticket Options</h3>
    <ul>
      <li><strong>Entrance Only:</strong> Adult - 550 Baht | Child - 350 Baht</li>
      <li><strong>Entrance + Sightseeing Bus:</strong> Adult - 650 Baht | Child - 550 Baht</li>
      <li><strong>Entrance + Show:</strong> Adult - 750 Baht | Child - 600 Baht</li>
      <li><strong>Entrance + Sightseeing Bus + Show:</strong> Adult - 950 Baht | Child - 700 Baht</li>
      <li><strong>Entrance + Sightseeing Bus + Lunch:</strong> Adult - 950 Baht | Child - 700 Baht</li>
      <li><strong>Entrance + Lunch + Show:</strong> Adult - 1000 Baht | Child - 800 Baht</li>
      <li><strong>Entrance + Sightseeing Bus + Show + Lunch:</strong> Adult - 1250 Baht | Child - 950 Baht</li>
    </ul>

    <h3>Extra Charges</h3>
    <ul>
      <li><strong>Sightseeing Bus:</strong> Adult - 200 Baht | Child - 150 Baht</li>
      <li><strong>VIP Seat for Thai Show:</strong> Adult - 100 Baht | Child - 100 Baht</li>
      <li><strong>Elephant Ride (20 Minutes):</strong> Adult - 400 Baht | Child - 300 Baht</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>Entrance Ticket</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Sightseeing Bus</li>
      <li>Thai Cultural Show & Elephant Show</li>
      <li>Buffet Lunch</li>
      <li>Elephant Ride (20 Minutes)</li>
      <li>Food and Beverages</li>
      <li>Hotel Transfer</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Nong Nooch Tropical Garden is a must-visit attraction in Pattaya, offering breathtaking gardens, exciting cultural performances, and unique activities for all ages.
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

export default NongNoochTropicalGarden;
