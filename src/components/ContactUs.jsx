import React from 'react';

const ContactUs = () => {
  
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  };

  const detailsStyle = {
    padding: '15px 20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '6px',
  };

  const paragraphStyle = {
    fontSize: '1.1em',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#333',
    display: 'flex',
    justifyContent: 'flex-start',
  };

  const labelStyle = {
    display: 'inline-block',
    width: '160px',
    color: '#007BFF',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Information</h1>
      <div style={detailsStyle}>
        <p style={paragraphStyle}>
          <strong style={labelStyle}>WhatsApp:</strong> +66613146753
        </p>
        <p style={paragraphStyle}>
          <strong style={labelStyle}>Line:</strong> +66613146753
        </p>
        <p style={paragraphStyle}>
          <strong style={labelStyle}>Email Address:</strong>  rsvn@mytripmaker.com
        </p>
        <p style={paragraphStyle}>
          <strong style={labelStyle}>Office Address:</strong> 3rd floor, 202 BK condo town, Bang khae 1 10160.
        </p>
        <p style={paragraphStyle}>
          <strong style={labelStyle}>Working Hours:</strong> Monday - Friday: 8 AM - 5 PM
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
