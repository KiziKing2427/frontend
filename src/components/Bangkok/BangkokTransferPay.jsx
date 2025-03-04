import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import logo40 from './image/logo40.jpeg';
import logo41 from './image/logo41.jpeg';
import QueryString from 'query-string';
import './Bangkok.css';
import emailjs from '@emailjs/browser';

const NavbarComponent = () => {
  const [currentUser, setCurrentUser] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [package_name, setPackageName] = useState('');
  const [vehicle_type, setVehicleType] = useState(''); // State for vehicle type
  const [customerwhatsApp_mobile, setCustomerWhatsAppMobile] = useState(''); // State for WhatsApp number
  const [loading, setLoading] = useState(false); // Loading state for email sending
  const navigate = useNavigate();
  const location = useLocation();
  const form = useRef(); // Create a ref for the form

  // Parse query parameters from the URL
  const queryParams = QueryString.parse(location.search);
  const amount = queryParams.totalPrice || 0;
  const date_of_travel = queryParams.date || '';  // 'date' matches the parameter in the URL
  const number_of_people = queryParams.totalPeople || 0;
  const vehicle_name  = queryParams.vehicle || ''; // Extract the 'vehicle' from query params

  // Set vehicle type on component mount using useEffect
  useEffect(() => {
    if (vehicle_name) {
      setVehicleType(vehicle_name); // Set the vehicle type from URL
    }
  }, [vehicle_name]);

  const sendEmail = async () => {
    setLoading(true);
    try {
      // Send email using EmailJS
      await emailjs.sendForm('service_w2uyvtn', 'template_6fcif9p', form.current, '_j3t_WboxlyPIb6dn');
      console.log('SUCCESS!');
      alert('Message sent successfully!');
      form.current.reset();
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      alert(`Failed to send message: ${error.text || error.message || 'Unknown error'}`);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    const emailSuccess = await sendEmail(); // Send email first
    if (emailSuccess) {
      navigate("https://buy.stripe.com/test_14k5og0uzbYH7m0dQR", { replace: true }); // Navigate to Stripe checkout
    }
  };

  return (
    <>
      {currentUser ? (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Welcome</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <img 
                    src={logo41} 
                    alt="Logo" 
                    style={{ width: '100px', height: 'auto' }} // Adjust the width, height will scale automatically
                  />
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <form ref={form} className="contact-form">
  <div className="form-group">
    <input type="hidden" name="amount" value={amount} />
    <input type="hidden" name="date_of_travel" value={date_of_travel} />
    <input type="hidden" name="number_of_people" value={number_of_people} />
    <input type="hidden" name="vehicle_type" value={vehicle_type} /> {/* Add this hidden field */}
  </div>
            <section>
              <div className="image-container">
                <img src={logo40} alt="Place 40" />
                <div className='description'>
                  <h4>Private Transfer from Suvarnabhumi <br />Airport to Hotel in Bangkok</h4>
                  <p>Total Price Payable: <strong>{amount} THB</strong></p>
                  <p>Date: <strong>{date_of_travel}</strong></p>
                  <p>Total People: <strong>{number_of_people}</strong></p>
                  <p>Vehicle Type: <strong>{vehicle_type || 'Not Selected'}</strong></p> {/* Display vehicle type, or 'Not Selected' if none chosen */}
                  <div><h5>Please Complete:</h5></div>

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
                    value={customerwhatsApp_mobile}
                    onChange={(e) => setCustomerWhatsAppMobile(e.target.value)}
                    required
                    style={{ 
                      border: '2px solid #007bff', 
                      borderRadius: '5px', 
                      padding: '10px', 
                      fontSize: '16px', 
                      outline: 'none', 
                      width: '100%',
                      maxWidth: '500px' /* Enforce a maximum width */
                    }}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />

                  <input
                    className="form-input"
                    type="text"
                    name="package_name"
                    placeholder="Confirm Package name"
                    value={package_name}
                    onChange={(e) => setPackageName(e.target.value)}
                    required
                    style={{ border: '2px solid #007bff', borderRadius: '5px', padding: '10px', fontSize: '16px', outline: 'none' }}
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
                  <button type="button" className='buttonCheckout' onClick={handleCheckout} disabled={loading}>
                    {loading ? 'Sending...' : 'Checkout'}
                  </button>
                </div>
              </div>
            </section>
          </form>
        </>
      ) : (
        <Navigate to="/home" />
      )}
    </>
  );
}

export default NavbarComponent;
