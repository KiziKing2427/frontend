import React, { useState, useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './Home.css';
import Tour from './Tour'; 
import Transportation from './Transportation'; 
import logo1 from './image/logo1.jpeg';
import logo2 from './image/logo2.jpeg';
import logo3 from './image/logo3.jpeg';
import logo4 from './image/logo4.jpeg';
import logo8 from './image/logo8.jpeg';
import logo7 from './image/logo7.jpeg';
import logo13 from './image/logo13.jpeg';
import logo14 from './image/logo14.jpeg';
import logo15 from './image/logo15.jpeg';
import logo16 from './image/logo16.jpeg';
import logo17 from './image/logo17.jpeg';
import { FaFacebook, FaInstagram, FaTripadvisor, FaViadeo, FaGetPocket } from "react-icons/fa";
import logo20 from './image/logo20.jpeg'; // Add your new logo for Phuket City Tour

const Home = () => {
  const imageContainerRef = useRef(null);
  const packagesImageContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [packagesCurrentIndex, setPackagesCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  const images = [logo1, logo2, logo3, logo4, logo8, logo7];
  const numImages = images.length;
  const imageWidth = 200; // Increased from 270 to 400
  const transitionDuration = 500;
  const waitDuration = 1000;


  const imagesPackages = [logo13, logo14, logo15, logo16, logo17, logo20];
  const numPackageImages = imagesPackages.length;
  const imageWidthPackages = 175; // Increased from 175 to 300
  const transitionDurationPackages = 500;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWaiting) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
        }, waitDuration);
      } else {
        setIsWaiting(false);
      }
    }, transitionDuration + waitDuration);

    return () => clearInterval(interval);
  }, [currentIndex, isWaiting, numImages, waitDuration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWaiting) {
        setPackagesCurrentIndex((prevIndex) => (prevIndex + 1) % numPackageImages);
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
        }, waitDuration);
      } else {
        setIsWaiting(false);
      }
    }, transitionDuration + waitDuration);

    return () => clearInterval(interval);
  }, [packagesCurrentIndex, isWaiting, numPackageImages, waitDuration]);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numImages) % numImages);
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, waitDuration);
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, waitDuration);
  };

  const packagesScrollLeft = () => {
    setPackagesCurrentIndex((prevIndex) => (prevIndex - 1 + numPackageImages) % numPackageImages);
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, waitDuration);
  };

  const packagesScrollRight = () => {
    setPackagesCurrentIndex((prevIndex) => (prevIndex + 1) % numPackageImages);
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, waitDuration);
  };

  return (
    <div className="home-container">
      <div className="section" id="image-carousel">
        <div className="image-container" ref={imageContainerRef}>
          <button className="scroll-button prev" onClick={scrollLeft}>&#9664;</button>
          <div className="images" style={{
            transform: `translateX(-${currentIndex * imageWidth}px)`,
            transition: `transform ${transitionDuration}ms ease-in-out`
          }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`logo ${index + 1}`} />
            ))}
          </div>
          <button className="scroll-button next" onClick={scrollRight}>&#9654;</button>
        </div>
      </div>

      <div className="section" id="beautiful-places">
        <Tour />
      </div>

      <div className="section" id="about-us">
        <div className="about-frame">
          <h2 className="aboutheading">About Us</h2>
          <p className="about-text">
            My Trip Maker is a full-service travel agency that specializes in creating custom travel experiences for its clients. Whether you’re looking for a romantic getaway, a family vacation, or an adventurous trip, My Trip Maker can help make it happen. . . {' '}
            <Link to="/learn-more" className="learn-more-link">Learn More</Link>
          </p>
        </div>
      </div>

      <div className="section" id="our-packages">
        <Transportation />
      </div>
      <div className="section" id="our-packages-reverse">
        <h2 className="heading">Our Packages</h2> 
        <div className="package-image-container" ref={packagesImageContainerRef}>
          <button className="scroll-button prev" onClick={packagesScrollRight}>&#9664;</button>
          <div className="imagesPackages" style={{
            display: 'flex',
            transform: `translateX(-${packagesCurrentIndex * imageWidthPackages}px)`,
            transition: `transform ${transitionDurationPackages}ms ease-in-out`
          }}>
            {imagesPackages.map((image, index) => (
              <div className="image-container-packages" key={index}>
                <img src={image} alt={`logo ${index + 1}`} />
                <div className="image-description">
                  {index === 0 && (
                    <span>
                      Daytime Mahanakhon Sky Walk Admission Ticket
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
                          &#9733; &#9733; &#9733; &#9733; &#9733;
                        </span>
                      </div>
                      <div>
                        <span style={{ color: 'black' }}>1,000 THB Per Person</span>
                      </div>
                    </span>
                  )}
                  {index === 1 && (
                    <span>
                      Chao Phraya Dinner Cruise
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
                          &#9733; &#9733; &#9733; &#9733; &#9733;
                        </span>
                      </div>
                      <div>
                        <span style={{ color: 'black' }}>1,400 THB Per Person</span>
                      </div>
                    </span>
                  )}
                  {index === 2 && (
                    <span>
                      Private Phuket City Tour
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
                          &#9733; &#9733; &#9733; &#9733; &#9733;
                        </span>
                      </div>
                      <div>
                        <span style={{ color: 'black' }}>1,800 THB Per Person</span>
                      </div>
                    </span>
                  )}
                  {index === 3 && (
                    <span>
                      Chiang Rai full day tour from chiang mai
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
                          &#9733; &#9733; &#9733; &#9733; &#9733;
                        </span>
                      </div>
                      <div>
                        <span style={{ color: 'black' }}>1,950 THB Per Person</span>
                      </div>
                    </span>
                  )}
                  {index === 4 && (
                    <span>
                      Doi inthanon national park
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
                          &#9733; &#9733; &#9733; &#9733; &#9733;
                        </span>
                      </div>
                      <div>
                        <span style={{ color: 'black' }}>1,850 THB Per Person</span>
                      </div>
                    </span>
                  )}
                  {index === 5 && (
                    <span>
                      One day Kanchanaburi Bridge
                      on the River kwai from Bangkok
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
                          &#9733; &#9733; &#9733; &#9733; &#9733;
                        </span>
                      </div>
                      <div>
                        <span style={{ color: 'black' }}>1,800 THB Per Person</span>
                      </div>
                    </span>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-button next" onClick={packagesScrollLeft}>&#9654;</button>
        </div>

        <div className="section" id="our-packages">
  <Transportation />
</div>
<div className="section" id="reviews">
  <h2 className="heading">Reviews</h2>
  <p>
    <a
      href="https://www.tripadvisor.com/Attraction_Review-g293916-d21075029-Reviews-My_Trip_Maker_Thailand-Bangkok.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Check more reviews on TripAdvisor
    </a>
  </p>
  <div className="reviews-container">
    {/* Review 1 */}
    <div className="review">
      <h3>Sharon P</h3>
      <p><strong>Location:</strong> Rotterdam, The Netherlands</p>
      <p><strong>Contributions:</strong> 6</p>
      <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
      <h4>Awesome Experience</h4>
      <p>
        It was a very beautiful experience and it was really exciting to be that close to those very big, beautiful animals. The guide was very sweet, and they were all very friendly. I really enjoyed myself.
      </p>
      <p><strong>Review of:</strong> Elephant Sanctuary Pattaya Half-Day Tour</p>
      <p><strong>Date:</strong> December 3, 2024</p>
      <p><strong>Management Response:</strong> Thank you so much for your valuable review. We will continue to provide the best service in the future.</p>
    </div>

    {/* Review 2 */}
    <div className="review">
      <h3>Chris T</h3>
      <p><strong>Contributions:</strong> 3</p>
      <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
      <h4>Perfect Night Show</h4>
      <p>
        Group of 6 booked for Siam Niramit Show. The company provided complete details and correct information. The show was perfect, and we even requested two vegan dinners. Everything was perfect; we enjoyed it! Thanks.
      </p>
      <p><strong>Review of:</strong> Siam Niramit Show with Dinner Phuket</p>
      <p><strong>Date:</strong> December 1, 2024</p>

      <h4>Fast and Easy Transportation</h4>
      <p>
        Fast communication, easy to locate. Our flight was delayed, but thanks to good communication, the driver still waited for us. The airport staff was exactly where they said they'd be, holding our name sign.
      </p>
      <p><strong>Review of:</strong> Private Transfer from Bangkok Airport to Hotel in Bangkok</p>
      <p><strong>Date:</strong> December 1, 2024</p>
    </div>
  </div>
</div>


<footer className="footer">
  <div className="footer-content">
    <h3>Follow us</h3>
    <ul className="social-links">
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
      </li>
      <li>
        <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer">
          <FaTripadvisor size={24} />
        </a>
      </li>
      <li>
        <a href="https://www.viator.com" target="_blank" rel="noopener noreferrer">
          <FaViadeo size={24} />
        </a>
      </li>
      <li>
        <a href="https://www.getyourguide.com" target="_blank" rel="noopener noreferrer">
          <FaGetPocket size={24} />
        </a>
      </li>
    </ul>
  </div>
</footer>

      </div>
    </div>
  );
};

export default Home;
