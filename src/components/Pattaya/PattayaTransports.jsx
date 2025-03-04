import React from 'react';
import logo58 from './image/logo58.jpeg';
import logo60 from './image/logo60.jpeg';
import logo63 from './image/logo63.jpeg';
import './Pattaya.css';

const PattayaTransports = () => {
  const imagesTransfers = [
    logo58,
    logo60, 
    logo63, 
  ];

  const descriptions = [
    {
      title: 'Private Transfer from Pattaya to Suvarnabhumi Airport',
      rating: 5,
      price: '1,600 - 2,200 THB Per Person',
      link: '/privateTransferPattayaToSuvarnabhumiAirport',
    },
    {
      title: 'Private Transfer from Pattaya Hotel to DMK Airport',
      rating: 5,
      price: '1,700 - 2,200 THB Per Person',
      link: '/privateTransferPattayaHotelDMKAirport',
    },
    {
      title: 'Pattaya Hotel to Bangkok Hotel Private Transfer',
      rating: 5,
      price: '1,600 - 2,400 THB Per Person',
      link: '/pattayaHotelangkokHotelPrivateTransfer',
    },
  ];

  return (
    <div className="transfers-component">
      <h2 className="heading">Popular Pattaya Transfers</h2>
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

export default PattayaTransports;
