import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchData from './SearchData';
import { useTranslation } from 'react-i18next';
import './Pattaya.css';

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((names) => names.name.toLowerCase().includes(query.toLowerCase()));
};

const Pattaya = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const { packagesData } = SearchData;
  const { items } = packagesData;
  const filteredItems = getFilteredItems(query, items);
  const location = useLocation();

  // Save and restore scroll position
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    
    // Restore the scroll position if it exists
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    // Save the scroll position before navigating away from the page
    return () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };
  }, [location.key]); // Use location.key to detect when user navigates away

  const renderPlace = (item) => {
    return (
      <div className="content-frame" key={item.id}>
        <Link to={item.link} className="nav-link">
          <img src={item.image} alt={`Place ${item.id}`} className="place-image" />
        </Link>
        <div className="descriptionBkk">
          <span style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
            {item.name.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </span>
          <div className="places">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                &#9733; &#9733; &#9733; &#9733; &#9733; {/* 5-star rating */}
              </span>
              <span style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
              {/* Render prices dynamically */}
              {item.price && <div>{item.price}</div>}
              {item.price1 && <div>{item.price1}</div>}
              {item.price2 && <div>{item.price2}</div>}
              {item.price3 && <div>{item.price3}</div>}
              {item.price4 && <div>{item.price4}</div>}
              {item.price5 && <div>{item.price5}</div>}
              {item.price6 && <div>{item.price6}</div>}
              {item.price7 && <div>{item.price7}</div>}
              {item.price8 && <div>{item.price8}</div>}
              {item.price9 && <div>{item.price9}</div>}
              {item.price10 && <div>{item.price10}</div>}
              {item.price11 && <div>{item.price11}</div>}
              {item.price12 && <div>{item.price12}</div>}
              {item.price13 && <div>{item.price13}</div>}
            </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-wrapper" style={{ cursor: 'pointer' }}>
          <input
            type="text"
            placeholder={t('Search for Packages in Bangkok...')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="fa fa-search" style={{ fontSize: '30px', color: 'red' }}></i>
        </div>
      </div>
      <div className="bangkok-container"></div>
      <div className="section" id="beautiful-places">
        <h2 className="heading">Beautiful Places In Pattaya</h2>
        <div className="places">
        {filteredItems.map((item) => renderPlace(item))}
      </div>
    </div>
   {/* Add Contact Us Link */}
<div className="contact-us-section">
  <p
    style={{
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '24px', // Increased font size
      fontWeight: 'bold', // Bolder text
      color: 'black',
      border: '5px solid gray', // Add a border around the entire text
      padding: '10px', // Optional: adds space between the border and the text
      borderRadius: '5px', // Optional: rounded corners for the border
    }}
  >
    Please{' '}
    <Link
      to="/contactUs"
      style={{
        color: 'blue',
        textDecoration: 'underline',
        fontSize: '26px', // Bigger font size for the link
        fontWeight: 'bold', // Bolder link
      }}
    >
      contact us directly
    </Link>{' '}
    for any Private Tour for Pattaya.
  </p>
</div>


  </div>
);
};

export default Pattaya;
