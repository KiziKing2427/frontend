import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo4 from './image/logo4.jpeg';
import logo5 from './image/logo5.jpeg';
import logo6 from './image/logo6.jpeg';
import './Phuket.css';

const PhiPhiIslandsMayaBay = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo4);
    const [showSuccessWindow, setShowSuccessWindow] = useState(false);
    const navigate = useNavigate();

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
            title: "Phi Phi Islands, Maya Bay & Khai Islands by Speedboat",
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

    // Update total price based on new pricing rules
    useEffect(() => {
        const adultPrice = 1900; // New price for adults
        const childPrice = 1300;  // New price for children
        setTotalPrice(adults * adultPrice + children * childPrice);
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
                            <img src={logo4} alt="Success Image" className="success-image" />
                        </div>
                        <div className="success-text">
                            <h3>Item Added to Cart Successfully!</h3>
                            <p className="success-details">
                                <strong>Title:</strong> Phi Phi Islands, Maya Bay & Khai Islands by Speedboat<br />
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

            <h3>Phi Phi Islands, Maya Bay & Khai Islands by Speedboat</h3>
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
                            src={logo4}
                            alt="Place 4"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo4)}
                        />
                        <img
                            src={logo5}
                            alt="Place 5"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo5)}
                        />
                        <img
                            src={logo6}
                            alt="Place 6"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}
                            onClick={() => setSelectedImage(logo6)}
                        />
                    </div>
                </div>

                <div className="sticky-container">
                    <p className="date-label highlight">Price</p>
                    <p className="price">Adult 1,900 THB, Child 1,300 THB</p>

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
    <h2>Phi Phi Islands, Maya Bay & Khai Islands by Speedboat</h2>
    <p>
      Embark on a thrilling speedboat adventure to the breathtaking Phi Phi Islands, Maya Bay, and Khai Islands! This tour combines iconic destinations, incredible snorkeling experiences, and unforgettable encounters with nature. Explore the famous Maya Bay, known for its stunning beauty and its feature in the movie "The Beach." Enjoy snorkeling in vibrant coral reefs at Pileh Cove and Khai Island, relax on white sandy beaches, and even interact with playful monkeys at Monkey Beach.
    </p>
    <p>
      Witness the captivating Viking Cave with its limestone cliffs and ancient paintings, then savor a delicious lunch before continuing your journey. This tour also ensures hassle-free travel with roundtrip hotel transfers and professional guides, making it a perfect choice for an unforgettable Andaman Sea adventure.
    </p>
  </div>

  <h3>Child Policy</h3>
  <ul>
    <li>Children under 3 years: <strong>Free of charge</strong>.</li>
    <li>Children aged 3-11 years: <strong>Charged at the child rate</strong>.</li>
    <li>Adult price applicable for anyone over 11 years.</li>
  </ul>

  <h3>Cancellation Policy</h3>
  <p>
    To receive a full refund, travelers may cancel up to <strong>24 hours before</strong> the experience start date (local time zone). 
    <strong>No refunds</strong> will be given after this period.
  </p>

  <h3>Inclusions & Exclusions</h3>
  <h3>What's Included:</h3>
  <ul>
    <li>Coffee, tea, and juice with bakery and fresh fruits at the pier</li>
    <li>Bottle of water</li>
    <li>Lunch</li>
    <li>Seasonal fruits</li>
    <li>Professional crew and English-speaking guide</li>
    <li>Snorkeling equipment and life jacket</li>
    <li>Travel insurance</li>
    <li>Paddleboard</li>
  </ul>

  <h3>What's Excluded:</h3>
  <ul>
    <li>National Park fee: <strong>400 THB/adult</strong>, <strong>200 THB/child</strong></li>
    <li>Other personal expenses</li>
    <li>Alcoholic beverages</li>
    <li>Fins and towels</li>
    <li>Beach chair</li>
  </ul>

  <h3>Departure & Return</h3>
  <p>
    <strong>Free Pickup Zones:</strong> Phuket Town, Patong, Kata, Karon, Kalim, Tri Trang, Siray Bay, Kathu, Chalong.  
    <strong>Extra Charge Zones:</strong> Rawai, Naiharn, Cape Panwa, Kamala - 200 THB/person; Bang Tao, Surin, Laguna, Cherngtalay - 300 THB/person; Mai Khao, Layan, Naithon, Ao Por, Airport, By-Pass, Laem Hin - 1600 THB/car.
  </p>

  <h3>What to Bring</h3>
  <ul>
    <li>Camera</li>
    <li>Swimming suit</li>
    <li>Beach shoes</li>
    <li>A set of dry clothes</li>
    <li>Insect repellent</li>
    <li>Sunscreen</li>
    <li>Hat and sunglasses</li>
    <li>Cash for personal expenses on Phi Phi Don</li>
  </ul>

  <h3>Itineary</h3>
  <p><strong>07:00-09:00 am:</strong> Pickup from your hotel or meeting point, depending on your location. Arrive at Sea Angel pier, register for insurance, and collect snorkeling equipment. Complimentary coffee, tea, snacks, and seasick pills provided.</p>
  <p><strong>Departure:</strong> Speedboat departs for Phi Phi Islands, a 45-minute journey.</p>
  <p><strong>Maya Bay:</strong> Sightseeing and photo opportunities at this iconic location. (Note: Entry restricted during August-September.)</p>
  <p><strong>Pileh Lagoon:</strong> Swim or paddleboard in crystal-clear waters. Optional longtail boat photography available for an additional charge.</p>
  <p><strong>Viking Cave:</strong> Explore the ancient cave with fascinating limestone cliffs and paintings.</p>
  <p><strong>Monkey Beach:</strong> Interact with nature’s playful monkeys. Sightseeing may be restricted based on tide levels.</p>
  <p><strong>Phi Phi Don:</strong> Snorkeling enthusiasts remain on the boat, while others enjoy lunch at Alida Restaurant. Relax on the beach after snorkeling.</p>
  <p><strong>Khai Nai Islands:</strong> Snorkel among vibrant coral reefs or relax on the beautiful beach.</p>
  <p><strong>16:30-17:00 pm:</strong> Return to Sea Angel pier and transfer back to your hotel.</p>
</div>

        </div>
    );
};

export default PhiPhiIslandsMayaBay;
