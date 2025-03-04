import React, { useState, useEffect } from 'react';
import './AdminBookings.css'; // Ensure this file is created if not already

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);

    // Fetch all bookings from localStorage on component mount
    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        setBookings(storedBookings);
    }, []);

    // Function to handle deleting a booking
    const handleDelete = (index) => {
        const updatedBookings = bookings.filter((_, i) => i !== index);
        setBookings(updatedBookings);
        // Update localStorage after deleting
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    };

    return (
        <div className="admin-container">
            <h2>Admin - All Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings found</p>
            ) : (
                <div className="bookings-list">
                    {bookings.map((booking, index) => (
                        <div key={index} className="booking-item">
                            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                            
                            {/* Only display details for the booking's cartItems */}
                            {booking.cartItems.length > 0 && (
                                <div className="cart-items">
                                    <h4>Booked Packages:</h4>
                                    {booking.cartItems.map((item, idx) => (
                                        <div key={idx} className="cart-item">
                                            <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px' }} />
                                            <div>
                                                <p><strong>Package:</strong> {item.title}</p>
                                                <p><strong>Vehicle Type:</strong> {item.vehicleType}</p>
                                                <p><strong>Date:</strong> {item.date}</p>
                                                <p><strong>Adults:</strong> {item.adults}</p>
                                                <p><strong>Children:</strong> {item.children}</p>
                                                <p><strong>Total People:</strong> {item.number_of_people}</p>
                                                <p><strong>Total Price:</strong> {item.totalPrice} Baht</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Only display the total amount if it's greater than 0 */}
                           
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminBookings;
