import React, { useState, useRef } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import logo38 from './image/logo38.jpeg';
import logo37 from './image/logo37.png';
import QueryString from 'query-string';
import './Bangkok.css';
import emailjs from '@emailjs/browser';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const NavbarComponent = () => {
  const [currentUser, setCurrentUser] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [package_name, setPackageName] = useState('');
  const [customerwhatsApp_mobile, setCustomerWhatsAppMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false); // New state for showing PayPal button
  const navigate = useNavigate();
  const location = useLocation();
  const form = useRef();

  const queryParams = QueryString.parse(location.search);
  const amount = queryParams.totalPrice ? queryParams.totalPrice.toString() : "0";
  const date_of_travel = queryParams.date || '';
  const number_of_people = queryParams.totalPeople || 0;

  const sendEmail = async () => {
    setLoading(true);
    try {
      await emailjs.sendForm('service_w2uyvtn', 'template_6fcif9p', form.current, '_j3t_WboxlyPIb6dn');
      console.log('SUCCESS!');
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
    const emailSuccess = await sendEmail();
    if (emailSuccess) {
      setShowPayPal(true); // Show PayPal button if email is sent successfully
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
                    src={logo37} 
                    alt="Place 37" 
                    style={{ width: '100px', height: 'auto' }} 
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
            </div>
            <section>
              <div className="image-container">
                <img src={logo38} alt="Place 38" />
                <div className='description'>
                  <h4>Daytime Mahanakhon Sky<br />Walk Admission Ticket</h4>
                  <p>Total Price Payable: <strong>{amount} THB</strong></p>
                  <p>Date: <strong>{date_of_travel}</strong></p>
                  <p>Total People: <strong>{number_of_people}</strong></p>
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
                      maxWidth: '500px'
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

          {/* PayPal Payment Integration */}
          {showPayPal && (
           <PayPalScriptProvider options={{ "client-id": "ASrRlrRUhXs2o_DJSHg53z0YhQb64OOLbj37UrndbWcdtlfvPs4rZ_aqJs0ZnOXE-fxpxZy1Ea2QyOVL", currency: "THB" }}>
 {/* Replace with Live Client ID */}
              <PayPalButtons
                style={{ color: 'gold', shape: 'rect', label: 'checkout' }}
                fundingSource={window.paypal.FUNDING.PAYPAL}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: amount.toString(), // Ensure amount is a string
                          currency_code: 'THB', // Set currency to Thai Baht
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(`Transaction completed by ${details.payer.name.given_name}`);
                    // Optionally navigate to a success page here
                  });
                }}
              />
            </PayPalScriptProvider>
          )}
        </>
      ) : (
        <Navigate to="/home" />
      )}
    </>
  );
}

export default NavbarComponent;

