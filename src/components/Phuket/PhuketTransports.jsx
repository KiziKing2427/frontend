import React from 'react';
import logo44 from './image/logo44.jpeg';
import logo45 from './image/logo45.jpeg';
import './Phuket.css';

const PhuketTransports = () => {
  const imagesTransfers = [
    logo44,
    logo45, 
  ];

  const descriptions = [
    {
      title: 'Private Transfer from Suvarnabhumi Airport to Bangkok Hotel',
      rating: 5,
      price: '800 - 1,200 THB Per Person',
      link: '/phuketAirportADPTransfers',
    },
    {
      title: 'Phuket hotel to krabi hotel Private transportation',
      rating: 4,
      price: '2,500 - 2,800 THB Per Person',
      link: '/phuketHotelToKrabi',
    },
  ];

  return (
    <div className="transfers-component">
      <h2 className="heading">Popular Phuket Transfers</h2>
      <div className="transfers-image-container">
        <div className="imagesTransfers">
          {imagesTransfers.map((image, index) => (
            <div className="image-container-transfers" key={index}>
              <a href={descriptions[index].link}>
                <img src={image} alt={`Transfers ${index + 1}`} className="transfer-image" />
              </a>
              <div className="image-descriptionTransfers">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: descriptions[index].title.replace(/\n/g, '<br />'),
                  }}
                />
                <div style={{ textAlign: 'center' }}>
                  <span className="rating">
                    {Array(descriptions[index].rating).fill('★').join(' ')}
                  </span>
                </div>
                <div>
                  <span className="price">{descriptions[index].price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhuketTransports;
