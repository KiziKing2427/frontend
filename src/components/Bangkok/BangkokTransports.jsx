import React from 'react';
import logo40 from './image/logo40.jpeg';
import logo41 from './image/logo41.jpeg';
import logo43 from './image/logo43.jpeg';
import './Bangkok.css';

const BangkokTransports = () => {
  const imagesTransfers = [
    logo40,
    logo41,
    logo43,
  ];

  const descriptions = [
    {
      title: 'Private Transfer from Suvarnabhumi Airport to Bangkok Hotel',
      rating: 5,
      price: '800 - 1,200 THB Per Person',
      link: '/bangkokTransfers',
    },
    {
      title: 'Bangkok hotel to Pattaya hotel transportation',
      rating: 4,
      price: '1,300 - 1,800 THB Per Person',
      link: '/bangkokPattayaTransfers',
    },
    {
      title: 'Private Transfer from DMK Airport to Bangkok Hotels',
      rating: 5,
      price: '800 - 1,200 THB Per Person',
      link: '/dmkHotelTransfers',
    },
  ];

  return (
    <div className="transfers-component">
      <h2 className="heading">Popular Bangkok Transfers</h2>
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

export default BangkokTransports;
