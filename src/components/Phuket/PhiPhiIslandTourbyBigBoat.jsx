import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo7 from './image/logo7.jpeg';
import logo8 from './image/logo8.jpeg';
import logo9 from './image/logo9.jpeg';
import logo10 from './image/logo10.jpeg';
import './Phuket.css';

const PhiPhiIslandTourbyBigBoat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [adultSeatType, setAdultSeatType] = useState('Economy'); // New state for adult seat type
    const [childSeatType, setChildSeatType] = useState('Economy'); // New state for child seat type
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo8);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        window.scrollBy({
            top: 300,
            behavior: 'smooth',
        });
    };

    const handlePayNow = () => {
        const totalPeople = adults + children;
        if (!selectedDate || adults === 0) {
            alert('Date and at least one person traveling must be filled.');
        } else {
            const totalPricePayable = encodeURIComponent(totalPrice);
            const totalPeopleParam = encodeURIComponent(totalPeople);
            const dateParam = encodeURIComponent(selectedDate);
            const adultSeatTypeParam = encodeURIComponent(adultSeatType);
            const childSeatTypeParam = encodeURIComponent(childSeatType);
            navigate(
                `/phiPhiIslandPay?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&adultSeatType=${adultSeatTypeParam}&childSeatType=${childSeatTypeParam}`
            );
        }
    };

    const handleAddToCart = () => {
        if (!selectedDate || adults === 0) {
            alert('Please select a date and add at least one adult.');
            return;
        }

        const cartItem = {
            title: "Phi Phi Island Tour by Big Boat: Sea Angel Ferry",
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

    // Update total price based on selected seat types and number of people
    useEffect(() => {
        const seatPricing = {
            Economy: { adult: 1200, child: 900 },
            Silver: { adult: 1500, child: 1200 },
            Gold: { adult: 2000, child: 1500 },
        };

        const adultPrice = seatPricing[adultSeatType].adult;
        const childPrice = seatPricing[childSeatType].child;

        setTotalPrice(adults * adultPrice + children * childPrice);
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
                            <img src={logo7} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Phi Phi Island Tour by Big Boat: Sea Angel Ferry<br />
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

            <h3>Phi Phi Island Tour by Big Boat: Sea Angel Ferry</h3>
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
                            src={logo7}
                            alt="Place 7"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo7)}
                        />
                        <img
                            src={logo9}
                            alt="Place 9"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo9)}
                        />
                        <img
                            src={logo10}
                            alt="Place 10"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo10)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Economy: Adult 1,200 THB, Child 900 THB<br />
                        Silver: Adult 1,500 THB, Child 1,200 THB<br />
                        Gold: Adult 2,000 THB, Child 1,500 THB
                    </p>

                    <p className="date-label highlight">Select Seat Type for Adults</p>
                    <select value={adultSeatType} onChange={(e) => setAdultSeatType(e.target.value)}>
                        <option value="Economy">Economy</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                    </select>

                    <p className="date-label highlight">Select Seat Type for Children</p>
                    <select value={childSeatType} onChange={(e) => setChildSeatType(e.target.value)}>
                        <option value="Economy">Economy</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
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
            <h4>Description</h4>
    <h1>Phi Phi Island Tour by Big Boat: Sea Angel Ferry</h1>

    <h2>Highlights</h2>
    <ul>
        <li>Spacious Big Boat: Enjoy a comfortable and stable journey with ample space to relax.</li>
        <li>Iconic Destinations: Visit Maya Bay, Pileh Lagoon, and other stunning Phi Phi locations.</li>
        <li>Snorkeling Paradise: Discover a vibrant underwater world teeming with marine life.</li>
        <li>Pristine Beaches: Relax on soft white sands and soak up the tropical sun.</li>
        <li>Unforgettable Experience: Create lasting memories in a true island paradise.</li>
    </ul>
    <p><strong>Book your Phi Phi Islands Big Boat Tour today!</strong></p>

    <h2>Included</h2>
    <ul>
        <li>Lunch at Phi Phi Don (Indian food/Vegetarian/Gluten-Free and Halal food available)</li>
        <li>Seasonal Fruit</li>
        <li>Professional Crew</li>
        <li>Professional English guide on the tour</li>
        <li>Snorkelling equipment</li>
        <li>Life Jacket</li>
        <li>Free roundtrip transfer from Patong, Kata, Karon, Phuket Town</li>
    </ul>

    <h2>Excluded</h2>
    <ul>
        <li>Entrance fee (National park fee): 400 THB/adult, 200 THB/child</li>
        <li>Other personal expenses</li>
        <li>Alcoholic beverages</li>
        <li>Fin</li>
        <li>Towels</li>
        <li>Extra maintenance fee of 20 THB/person at Ton Sai pier</li>
    </ul>

    <h2>Departure & Return</h2>
    <p><strong>Free Pick-up Zones:</strong> Phuket town, Patong, Kata, Karon, Chalong, Siray Bay</p>
    <p><strong>Extra Charge Zones:</strong></p>
    <ul>
        <li>Rawai, Cape Panwa, Naiharn, Kamala: 200 THB/person</li>
        <li>Surin, Bang Tao, Laguna: 300 THB/person</li>
        <li>Royal Marina, Villa Zolitude, Ko Kaew: 1000 THB/car</li>
        <li>Naithon, Naiyang, Layan, Airport, Mai Khao: 1500 THB/car</li>
    </ul>

    <h2>What to Bring</h2>
    <ul>
        <li>Camera</li>
        <li>Swimming suit</li>
        <li>Beach shoes</li>
        <li>Set of dry clothes</li>
        <li>Insect repellant</li>
        <li>Sunscreen</li>
        <li>Hat</li>
        <li>Sunglasses</li>
        <li>Cash for personal expenses on Phi Phi Don</li>
    </ul>

    <h3>Itineary</h3>
    <ul>
        <li>
            <strong>07:00-07:30 am:</strong> Pick-up from your hotel with shared transfer and head to the pier with a warm welcome.
        </li>
        <li>
            <strong>08:00 am:</strong> Check-in at Sea Angel pier, our private pier. Enjoy a morning briefing by our friendly tour guide with safety instructions and program details. National Park Fee is paid at the pier.
        </li>
        <li>
            <strong>08:45 am:</strong> Depart from the pier to Phi Phi Leh for sightseeing. Visit Maya Bay, Loh Samah Bay, Pileh Lagoon, Viking Cave, and enjoy snorkeling at Monkey Beach (depending on water conditions).
        </li>
        <li>
            <strong>01:15 pm:</strong> Relish a delicious lunch at Phi Phi Don and relax along the beach.
        </li>
        <li>
            <strong>03:15 pm:</strong> Depart from Phi Phi Islands back to Phuket.
        </li>
        <li>
            <strong>05:00 pm:</strong> Arrive safely at the pier and transfer back to your hotel.
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
    );
};

export default PhiPhiIslandTourbyBigBoat;
