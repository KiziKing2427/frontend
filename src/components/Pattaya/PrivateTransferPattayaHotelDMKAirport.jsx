import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo61 from './image/logo61.jpeg';
import logo62 from './image/logo62.jpeg';
import logo63 from './image/logo63.jpeg';
import './Pattaya.css';

const PrivateTransferPattayaHotelDMKAirport  = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(logo61);
    const [number_of_people, setNumberOfPeople] = useState(0); 
    const [vehicleOptions, setVehicleOptions] = useState([]); // Array to hold suitable vehicle options
    const [vehicle_type, setSelectedVehicle] = useState(''); // Default vehicle type
    const [showSuccessWindow, setShowSuccessWindow] = useState(false); // New state for success window
    const navigate = useNavigate();

    const vehiclePrices = {
        Sedan: 1700,
        SUV: 1800,
        Van: 2200,
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
            title: "Private Transfer from Pattaya Hotel to DMK Airport",
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
        <img src={logo61} alt="Success Image" className="success-image" />
        </div>
        <div className="success-text">
          <h3>Item Added to Cart Successfully!</h3>
          <p className="success-details">
            <strong>Title:</strong>Private Transfer from Pattaya Hotel to DMK Airport<br />
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
            <h1>Private Transfer from Pattaya Hotel to DMK Airport</h1>
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
                            src={logo61}
                            alt="Place 61"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer' }}
                            onClick={() => setSelectedImage(logo61)} 
                        />
                        <img
                            src={logo62}
                            alt="Place 62"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer' }}
                            onClick={() => setSelectedImage(logo62)}
                        />
                        <img
                            src={logo63}
                            alt="Place 63"
                            className="small-image"
                            style={{ width: '100px', height: '100px', borderRadius: '5px', cursor: 'pointer' }}
                            onClick={() => setSelectedImage(logo63)}
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
  <h4>Description</h4>
  <div>
    <h2>Private Transfer from Pattaya Hotel to DMK Airport</h2>

    <h3>Experience Overview</h3>
    <p>
      Enjoy a convenient and stress-free transfer from your hotel in Pattaya to Don Mueang International Airport (DMK). 
      Travel in comfort with a professional English-speaking driver and a well-maintained air-conditioned vehicle. 
      Take advantage of free luggage pickup service and one of the most reliable transport operators in Thailand.
    </p>

    <h3>Price</h3>
    <ul>
      <li><strong>Sedan:</strong> 1,700 Baht</li>
      <li><strong>SUV:</strong> 1,800 Baht</li>
      <li><strong>Van:</strong> 2,200 Baht</li>
    </ul>

    <h3>Total Duration</h3>
    <p><strong>2 - 3 hours</strong></p>

    <h3>Pickup Information</h3>
    <ul>
      <li>Please be ready at the hotel lobby at least <strong>15 minutes</strong> before the scheduled pickup time.</li>
      <li>Delays on your side may be accommodated later (subject to availability), otherwise, the booking will be canceled 
      with a <strong>100% charge</strong>.</li>
      <li>The driver may be delayed by <strong>15 - 45 minutes</strong> due to traffic or other unforeseen circumstances.</li>
      <li>No need for a printed voucher—simply show your mobile voucher or booking confirmation.</li>
    </ul>

    <h3>Important Notes</h3>
    <ul>
      <li>Service timing may be affected by weather conditions, equipment maintenance, or safety protocols.</li>
      <li>Bookings may be canceled in case of extreme weather conditions or natural disasters.</li>
      <li>After checking in to your hotel, please update us with your room number.</li>
      <li>Carefully review the inclusions and exclusions before booking.</li>
    </ul>

    <h3>Inclusions</h3>
    <ul>
      <li>One-way private air-conditioned transportation</li>
      <li>Highway tolls</li>
      <li>Fuel fees</li>
      <li>Private transportation</li>
    </ul>

    <h3>Exclusions</h3>
    <ul>
      <li>Additional child seats (200 Baht per seat)</li>
      <li>Additional waiting charge (300 Baht per hour)</li>
      <li>Gratuities</li>
    </ul>

    <h3>Additional Information</h3>
    <p>
      Secure your private transfer in advance for a smooth and comfortable journey to DMK Airport. 
      <strong>Book now</strong> and enjoy a hassle-free ride!
    </p>
  </div>
</div>

  </div>
</div>
        
    );
};

export default PrivateTransferPattayaHotelDMKAirport;
