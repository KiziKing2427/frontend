import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import logo6 from './image/logo6.jpeg';
import logo7 from './image/logo7.jpeg';
import logo8 from './image/logo8.jpeg';
import logo10 from './image/logo10.jpeg';
import logo11 from './image/logo11.jpeg';
import logo12 from './image/logo12.jpeg';

const Tour = () => {
  return (
    <div className="section" id="beautiful-places">
      <h2 className="heading">Beautiful Places In Thailand</h2>
      <div className="places">
        <div className="image-with-name">
          <Link to="/bangkok" className="nav-link">
            <img src={logo6} alt="Place 6" />
            <div className="place-name">Bangkok</div>
          </Link>
        </div>
        <div className="image-with-name">
          <Link to="/phuket" className="nav-link">
            <img src={logo12} alt="Place 12" />
            <div className="place-name">Phuket</div>
          </Link>
        </div>
        <div className="image-with-name">
        <Link to="/chiangMai" className="nav-link">
          <img src={logo7} alt="Place 7" />
          <div className="place-name">Chiang Mai</div>
        </Link>
        </div>
        <div className="image-with-name">
        <Link to="/krabi" className="nav-link">
          <img src={logo10} alt="Place 10" />
          <div className="place-name">Krabi</div>
          </Link>
        </div>
        <div className="image-with-name">
        <Link to="/pattaya" className="nav-link">
          <img src={logo11} alt="Place 11" />
          <div className="place-name">Pattaya</div>
          </Link>
        </div>
        <div className="image-with-name">
        <Link to="/kohSamui" className="nav-link">
          <img src={logo8} alt="Place 8" />
          <div className="place-name">Koh Samui</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tour;
