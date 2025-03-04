import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'; // Import PayPal dependencies
import emailjs from '@emailjs/browser';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [customerWhatsAppMobile, setCustomerWhatsAppMobile] = useState('');
    const [email, setEmail] = useState('');
    const [showPayPal, setShowPayPal] = useState(false);
    const form = useRef();
    const navigate = useNavigate();

    // Fetch the cart items from localStorage on component mount
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
        calculateTotalAmount(cart);
    }, []);

    const calculateTotalAmount = (cart) => {
        const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        setAmount(total);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((item, i) => i !== index);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart); // Update the state
        calculateTotalAmount(updatedCart); // Update the total amount
    };
    const saveBookingToLocalStorage = (booking) => {
        // Retrieve existing bookings from localStorage or start with an empty array
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        
        // Add the new booking to the existing array
        existingBookings.push(booking);
        
        // Save the updated array back to localStorage
        localStorage.setItem('bookings', JSON.stringify(existingBookings));
    };
    const booking = {
        name,
        email,
        customerWhatsAppMobile,
        cartItems,
        amount,
    };

    // Save booking to localStorage
    saveBookingToLocalStorage(booking);

    const sendEmail = async () => {
        setLoading(true);
        try {
            await emailjs.sendForm('service_w2uyvtn', 'template_6fcif9p', form.current, '_j3t_WboxlyPIb6dn');
            console.log('SUCCESS!');
            form.current.reset();
            setShowPayPal(true);  // Show PayPal after sending email
        } catch (error) {
            console.error('Failed to send email:', error);
            alert(`Failed to send message: ${error.text || error.message || 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h4>Selected Packages</h4>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.slice().reverse().map((item, index) => (  // Reverse the array here
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                            <div>
                                <h3>{item.title}</h3>
                                <p>Vehicle Type: {item.vehicleType}</p>
                                <p>Date: {item.date}</p>
                                <p>Number of Adults: {item.adults}</p>
                                <p>Number of Children: {item.children}</p>
                                <p>Total Number Of People: {item.number_of_people}</p>
                                <p>Total Price: {item.totalPrice} Baht</p>
                                <button onClick={() => handleRemoveItem(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="total-amount">
                        <h3>Total Amount: {amount} Baht</h3>
                    </div>
                    <h4 style={{ backgroundColor: 'yellow', fontWeight: 'bold', padding: '5px', borderRadius: '5px' }} >
                        Please Carefully Complete!!
                    </h4>

                    <div className="checkout-section">
                        <form ref={form} className="contact-form">
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    type="text"
                                    name="name"
                                    placeholder="Please Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    style={{ border: '2px solid #007bff', borderRadius: '5px', padding: '10px', fontSize: '16px', outline: 'none' }}
                                />
                                <input
                                    className="form-input"
                                    type="tel"
                                    name="customerwhatsApp_mobile"
                                    placeholder="Enter WhatsApp Number Plus Country Code"
                                    value={customerWhatsAppMobile}
                                    onChange={(e) => setCustomerWhatsAppMobile(e.target.value)}
                                    required
                                    style={{ border: '2px solid #007bff', borderRadius: '5px', padding: '10px', fontSize: '16px', outline: 'none', width: '100%', maxWidth: '500px' }}
                                />
                                <input
                                    className="form-input"
                                    type="email"
                                    name="email"
                                    placeholder="Confirm your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ border: '2px solid #007bff', borderRadius: '5px', padding: '10px', fontSize: '16px', outline: 'none' }}
                                />

                                <button type="button" className='buttonCheckout' onClick={sendEmail} disabled={loading}>
                                    {loading ? 'Sending...' : 'Checkout'}
                                </button>
                            </div>

                            {/* Hidden inputs for EmailJS */}
                            <input type="hidden" name="vehicle_type" value={cartItems.map(item => item.vehicleType).join(', ') || 'N/A'} />
                            <input type="hidden" name="children" value={cartItems.map(item => item.children || '0').join(', ')} />
                            <input type="hidden" name="adult" value={cartItems.map(item => item.adults || '0').join(', ')} />
                            <input type="hidden" name="amount" value={amount} />
                            <input type="hidden" name="number_of_people" value={cartItems.map(item => item.number_of_people || 'N/A').join(', ')} />
                            <input type="hidden" name="date_of_travel" value={cartItems.map(item => item.date).join(', ')} />
                            <input type="hidden" name="package_name" value={cartItems.map(item => item.title).join(', ')} />
                        </form>

                        {/* PayPal Payment Integration */}
                        {showPayPal && (
                            <PayPalScriptProvider options={{ "client-id": "ASrRlrRUhXs2o_DJSHg53z0YhQb64OOLbj37UrndbWcdtlfvPs4rZ_aqJs0ZnOXE-fxpxZy1Ea2QyOVL", currency: "THB" }}>
                                <PayPalButtons
                                    style={{ color: 'gold', shape: 'rect', label: 'checkout' }}
                                    fundingSource={window.paypal.FUNDING.PAYPAL}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: amount.toString(),
                                                        currency_code: 'THB',
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            alert(`Transaction completed by ${details.payer.name.given_name}`);
                                            navigate('/success');
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
