import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import logo40 from './image/logo40.jpeg';
import logo7 from './image/logo7.jpeg';
import logo8 from './image/logo8.jpeg';
import logo10 from './image/logo10.jpeg';
import logo11 from './image/logo11.jpeg';
import logo44 from './image/logo44.jpeg';

const Transportation = () => {
  return (
    <div className="section" id="beautiful-places">
      <h2 className="heading">Popular Transfers</h2>
      <div className="places">
        <div className="image-with-name"> 
          <Link to="/bangkokTransports" className="nav-link">
            <img src={logo40} alt="Place 40" />
            <div className="place-name">Bangkok</div> 
          </Link>
        </div>
        <div className="image-with-name">
        <Link to="/phuketTransports" className="nav-link">
          <img src={logo44} alt="Place 44" />
          <div className="place-name">Phuket</div>
          </Link>
        </div>
        <div className="image-with-name">
        <Link to="/pattayaTransports" className="nav-link">
          <img src={logo11} alt="Place 11" />
          <div className="place-name">Pattaya</div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
