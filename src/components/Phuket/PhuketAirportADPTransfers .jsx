import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo44 from './image/logo44.jpeg';
import logo45 from './image/logo45.jpeg';
import logo46 from './image/logo46.jpeg';
import './Phuket.css';

const PhuketAirportADPTransfers  = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo44);
    const [number_of_people, setNumberOfPeople] = useState(0); 
    const [vehicleOptions, setVehicleOptions] = useState([]); // Array to hold suitable vehicle options
    const [vehicle_type, setSelectedVehicle] = useState(''); // Default vehicle type
    const [showSuccessWindow, setShowSuccessWindow] = useState(false); // New state for success window
    const navigate = useNavigate();

    const vehiclePrices = {
        Sedan: 800,
        SUV: 1000,
        Van: 1200,
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleNumberOfPeopleChange = (event) => {
        const value = event.target.value;
        setNumberOfPeople(value);
        updateVehicleOptions(value); // Update vehicle options based on the number of people
    };

    const updateVehicleOptions = (numPeople) => {
        const peopleCount = parseInt(numPeople, 10);
        const options = [];

        // Determine vehicle options based on number of people 
        if (peopleCount >= 1 && peopleCount <= 3) { 
            options.push('Sedan'); 
        } else if (peopleCount > 3 && peopleCount <= 4) { 
            options.push('SUV'); 
        } else if (peopleCount > 4 && peopleCount <= 10) { 
            options.push('Van'); 
        } else if (peopleCount > 10 && peopleCount <= 13) { 
            options.push('1 Van and 1 Sedan'); 
        } else if (peopleCount > 13 && peopleCount <= 14) { 
            options.push('1 Van and 1 SUV'); 
        } else if (peopleCount > 14 && peopleCount <= 20) { 
            options.push('2 Vans'); 
        } else if (peopleCount > 20 && peopleCount <= 23) { 
            options.push('2 Vans and 1 Sedan'); 
        } else if (peopleCount === 24) { 
            options.push('2 Vans and 1 SUV'); 
        } else if (peopleCount > 24 && peopleCount <= 30) { 
            options.push('3 Vans'); 
        } else if (peopleCount > 30 && peopleCount <= 33) { 
            options.push('3 Vans and 1 Sedan'); 
        } else if (peopleCount === 34) { 
            options.push('3 Vans and 1 SUV'); 
        } else if (peopleCount > 34 && peopleCount <= 40) { 
            options.push('4 Vans'); 
        } else if (peopleCount > 40 && peopleCount <= 43) { 
            options.push('4 Vans and 1 Sedan'); 
        } else if (peopleCount === 44) { 
            options.push('4 Vans and 1 SUV'); 
        } else if (peopleCount > 44 && peopleCount <= 50) { 
            options.push('5 Vans'); 
        } else if (peopleCount > 50 && peopleCount <= 53) { 
            options.push('5 Vans and 1 Sedan'); 
        } else if (peopleCount === 54) { 
            options.push('5 Vans and 1 SUV'); 
        } else if (peopleCount > 54 && peopleCount <= 60) { 
            options.push('6 Vans'); 
        } else if (peopleCount > 60 && peopleCount <= 63) { 
            options.push('6 Vans and 1 Sedan'); 
        } else if (peopleCount === 64) { 
            options.push('6 Vans and 1 SUV'); 
        } else if (peopleCount > 64 && peopleCount <= 70) { 
            options.push('7 Vans'); 
        } else if (peopleCount > 70 && peopleCount <= 73) { 
            options.push('7 Vans and 1 Sedan'); 
        } else if (peopleCount === 74) { 
            options.push('7 Vans and 1 SUV'); 
        } else if (peopleCount > 74 && peopleCount <= 80) { 
            options.push('8 Vans'); 
        } else if (peopleCount > 80 && peopleCount <= 83) { 
            options.push('8 Vans and 1 Sedan'); 
        } else if (peopleCount === 84) { 
            options.push('8 Vans and 1 SUV'); 
        } else if (peopleCount > 84 && peopleCount <= 90) { 
            options.push('9 Vans'); 
        } else if (peopleCount > 90 && peopleCount <= 93) { 
            options.push('9 Vans and 1 Sedan'); 
        } else if (peopleCount === 94) { 
            options.push('9 Vans and 1 SUV'); 
        } else if (peopleCount > 94 && peopleCount <= 100) { 
            options.push('10 Vans'); 
        } 

        setVehicleOptions(options); // Update the state with suitable vehicle options
        setSelectedVehicle(options[0] || ''); // Set the default selected vehicle based on options
    };

    // Calculate total price automatically based on number of people and selected vehicle
    useEffect(() => {
        const totalPeople = parseInt(number_of_people, 10);
        let totalPrice = 0;

        // Calculate total price based on the number of vehicles needed
        if (totalPeople >= 1 && totalPeople <= 3) {
            totalPrice = vehiclePrices.Sedan; // 1 Sedan
        } else if (totalPeople > 3 && totalPeople <= 4) {
            totalPrice = vehiclePrices.SUV; // 1 SUV
        } else if (totalPeople > 4 && totalPeople <= 10) {
            totalPrice = vehiclePrices.Van; // 1 Van
        } else if (totalPeople > 10 && totalPeople <= 13) {
            totalPrice = vehiclePrices.Van + vehiclePrices.Sedan; // 1 Van and 1 Sedan
        } else if (totalPeople > 13 && totalPeople <= 14) {
            totalPrice = vehiclePrices.Van + vehiclePrices.SUV; // 1 Van and 1 SUV
        } else if (totalPeople > 14 && totalPeople <= 20) {
            totalPrice = vehiclePrices.Van * 2; // 2 Vans
        } else if (totalPeople > 20 && totalPeople <= 23) {
            totalPrice = vehiclePrices.Van * 2 + vehiclePrices.Sedan; // 2 Vans and 1 Sedan
        } else if (totalPeople === 24) {
            totalPrice = vehiclePrices.Van * 2 + vehiclePrices.SUV; // 2 Vans and 1 SUV
        } else if (totalPeople > 24 && totalPeople <= 30) {
            totalPrice = vehiclePrices.Van * 3; // 3 Vans
        } else if (totalPeople > 30 && totalPeople <= 33) {
            totalPrice = vehiclePrices.Van * 3 + vehiclePrices.Sedan; // 3 Vans and 1 Sedan
        } else if (totalPeople === 34) {
            totalPrice = vehiclePrices.Van * 3 + vehiclePrices.SUV; // 3 Vans and 1 SUV
        } else if (totalPeople > 34 && totalPeople <= 40) {
            totalPrice = vehiclePrices.Van * 4; // 4 Vans
        } else if (totalPeople > 40 && totalPeople <= 43) {
            totalPrice = vehiclePrices.Van * 4 + vehiclePrices.Sedan; // 4 Vans and 1 Sedan
        } else if (totalPeople === 44) {
            totalPrice = vehiclePrices.Van * 4 + vehiclePrices.SUV; // 4 Vans and 1 SUV
        } else if (totalPeople > 44 && totalPeople <= 50) {
            totalPrice = vehiclePrices.Van * 5; // 5 Vans
        } else if (totalPeople > 50 && totalPeople <= 53) {
            totalPrice = vehiclePrices.Van * 5 + vehiclePrices.Sedan; // 5 Vans and 1 Sedan
        } else if (totalPeople === 54) {
            totalPrice = vehiclePrices.Van * 5 + vehiclePrices.SUV; // 5 Vans and 1 SUV
        } else if (totalPeople > 54 && totalPeople <= 60) {
            totalPrice = vehiclePrices.Van * 6; // 6 Vans
        } else if (totalPeople > 60 && totalPeople <= 63) {
            totalPrice = vehiclePrices.Van * 6 + vehiclePrices.Sedan; // 6 Vans and 1 Sedan
        } else if (totalPeople === 64) {
            totalPrice = vehiclePrices.Van * 6 + vehiclePrices.SUV; // 6 Vans and 1 SUV
        } else if (totalPeople > 64 && totalPeople <= 70) {
            totalPrice = vehiclePrices.Van * 7; // 7 Vans
        } else if (totalPeople > 70 && totalPeople <= 73) {
            totalPrice = vehiclePrices.Van * 7 + vehiclePrices.Sedan; // 7 Vans and 1 Sedan
        } else if (totalPeople === 74) {
            totalPrice = vehiclePrices.Van * 7 + vehiclePrices.SUV; // 7 Vans and 1 SUV
        } else if (totalPeople > 74 && totalPeople <= 80) {
            totalPrice = vehiclePrices.Van * 8; // 8 Vans
        } else if (totalPeople > 80 && totalPeople <= 83) {
            totalPrice = vehiclePrices.Van * 8 + vehiclePrices.Sedan; // 8 Vans and 1 Sedan
        } else if (totalPeople === 84) {
            totalPrice = vehiclePrices.Van * 8 + vehiclePrices.SUV; // 8 Vans and 1 SUV
        } else if (totalPeople > 84 && totalPeople <= 90) {
            totalPrice = vehiclePrices.Van * 9; // 9 Vans
        } else if (totalPeople > 90 && totalPeople <= 93) {
            totalPrice = vehiclePrices.Van * 9 + vehiclePrices.Sedan; // 9 Vans and 1 Sedan
        } else if (totalPeople === 94) {
            totalPrice = vehiclePrices.Van * 9 + vehiclePrices.SUV; // 9 Vans and 1 SUV
        } else if (totalPeople > 94 && totalPeople <= 100) {
            totalPrice = vehiclePrices.Van * 10; // 10 Vans
        }

        setTotalPrice(totalPrice); // Update the total price state
    }, [number_of_people, vehicle_type]); // Dependencies

    const handleVehicleSelection = (event) => {
        setSelectedVehicle(event.target.value); // Update selected vehicle
    };

    const handleAddToCart = () => {
        if (!selectedDate || number_of_people === 0 || !vehicle_type) {
            alert('Please select a date, add at least one person, and choose a vehicle.');
            return;
        }
    
        const bookingData = {
            title: "Phuket Airport Arrival / Departure Private Transfer  ",
            vehicleType: vehicle_type, // Using vehicle_type here, which holds the selected value
            date: selectedDate,
            number_of_people,
            totalPrice,
            image: selectedImage
        };
    
        // Get existing cart from localStorage or initialize an empty array
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(bookingData); // Push the bookingData object to the cart
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    
        setShowSuccessWindow(true); // Show the success window
    };
    

const handleGoToCart = () => {
    setShowSuccessWindow(false); // Hide the success window
    navigate('/cart'); // Redirect to the cart page
};

    return (
        <div className="Thailand-Places">
  {showSuccessWindow && (
    <div className="success-window">
      <div className="success-content">
        <div className="success-image-container">
        <img src={logo44} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong> Phuket Airport Arrival / Departure Private Transfer  <br />
            <strong>Vehicle Type:</strong> {vehicle_type}<br />
            <strong>Date:</strong> {selectedDate}<br />
            <strong>Total Number Of People:</strong> {number_of_people}<br />
            <strong>Total Price:</strong> {totalPrice} Baht
          </p>
          <button className="go-to-cart-button" onClick={handleGoToCart}>
            Go to Cart
          </button>
          <button
  className="go-to-home-button"
  onClick={() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/');
  }}
>
  Add More Product
</button>

                    </div>
                    </div>
                </div>
            )}
            <h1>Phuket Airport Arrival / Departure Private Transfer  </h1>
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
                            src={logo44}
                            alt="Place 44"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer' }}
                            onClick={() => setSelectedImage(logo44)} 
                        />
                        <img
                            src={logo45}
                            alt="Place 45"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer' }}
                            onClick={() => setSelectedImage(logo45)}
                        />
                        <img
                            src={logo46}
                            alt="Place 46"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer' }}
                            onClick={() => setSelectedImage(logo46)}
                        />
                    </div>
                </div>
                </div>
                
                <div className="sticky-container">
            <label>Select Date:</label>
            <input type="date" value={selectedDate} onChange={handleDateChange} />
            <label>Number of People:</label>
            <input 
                type="number" 
                value={number_of_people} 
                onChange={handleNumberOfPeopleChange} 
                min="1" 
                max="100" 
            />
            <label>Select Vehicle:</label>
            <select value={vehicle_type} onChange={handleVehicleSelection}>
                {vehicleOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <h2>Total Price: {totalPrice} THB</h2>
            <div className="payment-container-button">
                            <button className="pay-now-button" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                        <div className="info-window">
            <div className="description">
            <div className="info-window">
  <h4>Description</h4>
  <div>
    <h2>Phuket Airport Arrival/Departure Private Transfer</h2>
    <p>
      Enjoy a seamless transfer experience from Phuket Airport to your hotel or back, with an air-conditioned private vehicle and an experienced driver. The journey takes approximately 45-90 minutes, depending on your destination. Transfers are available year-round, 24 hours a day.
    </p>
    <p><strong>Pricing:</strong></p>
    <ul>
      <li>Sedan: 800 Baht</li>
      <li>SUV: 1000 Baht</li>
      <li>Van: 1200 Baht</li>
    </ul>
    <p>
      <strong>Total Duration:</strong> 1 - 2 hours
    </p>

    <h3>Pick-up/Drop-off Locations</h3>
    <ul>
      <li><strong>Phuket Airport:</strong></li>
      <ul>
        <li>Domestic: Exit Gate at Paging Area (Gate 1)</li>
        <li>International: Exit Gate at Paging Area (Gate 3 & 4)</li>
      </ul>
      <li><strong>Free Drop-off Areas:</strong></li>
      <ul>
        <li>Patong District area (3 KM radius), including:</li>
        <ul>
          <li>Patong Beach</li>
          <li>Kata Beach</li>
          <li>Karon Beach</li>
        </ul>
      </ul>
      <li><strong>Note:</strong> Water transport to any island is not included; drop-off will be at the nearest pier.</li>
    </ul>

    <h3>What's Included</h3>
    <ul>
      <li>Air-conditioned private vehicle (Car/Van)</li>
      <li>Parking fees</li>
      <li>Toll tax</li>
      <li>Fuel surcharge</li>
    </ul>

    <h3>What's Excluded</h3>
    <ul>
      <li>Snacks</li>
      <li>Gratuities and tips</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Upon arrival, airport representatives will be waiting for you in the paging area with a sign displaying your name. The paging area is located at the exit gate of the International Arrival Hall, after the Baggage Collection Area and Customs Check Point. Enjoy your transfer worry-free and take in the beautiful city views during your journey.
    </p>
  </div>
</div>

            </div>
            </div>
        </div>
        
        </div>
        
    );
};

export default PhuketAirportADPTransfers ;
