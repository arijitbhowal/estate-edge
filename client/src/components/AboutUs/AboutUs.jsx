import React from 'react';
import './AboutUs.css'; 
import { FaHandshake, FaRobot, FaUserFriends } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div id="about-us" className='aboutUs-wrapper'>
      <div className="aboutUs-container aboutUs-paddings">
        <section className="aboutUs-intro aboutUs-flexColCenter">
          <h1 className="aboutUs-primaryText">Welcome to EstateEdge</h1>
          <p className="aboutUs-secondaryText">
            Where your dream property meets innovation. At EstateEdge, we're redefining the real estate experience with cutting-edge technology and personalized service.
          </p>
        </section>
        
        <section className="aboutUs-mission-vision">
          <div className="aboutUs-mission aboutUs-vision-item">
            <FaHandshake size={50} color="#4CAF50" />
            <h2 className="aboutUs-primaryText">Our Mission</h2>
            <p className="aboutUs-secondaryText">To transform the property market with our innovative approach, ensuring seamless transactions and complete client satisfaction.</p>
          </div>
          <div className="aboutUs-vision aboutUs-vision-item">
            <FaRobot size={50} color="#FFC107" />
            <h2 className="aboutUs-primaryText">Our Vision</h2>
            <p className="aboutUs-secondaryText">To be the most trusted real estate platform, leveraging technology to offer unmatched efficiency and reliability in property dealings.</p>
          </div>
        </section>
        
        <section className="aboutUs-values">
          <h2 className="aboutUs-primaryText">What Sets Us Apart</h2>
          <div className="aboutUs-value-item">
            <FaUserFriends size={40} color="#2196F3" />
            <h3 className="aboutUs-primaryText">Expert Team</h3>
            <p className="aboutUs-secondaryText">Our professionals bring years of experience and a deep understanding of the market to ensure you make informed decisions.</p>
          </div>
          <div className="aboutUs-value-item">
            <FaRobot size={40} color="#FF5722" />
            <h3 className="aboutUs-primaryText">Innovative Solutions</h3>
            <p className="aboutUs-secondaryText">We use the latest technology to provide accurate, real-time data and streamline your property search and management.</p>
          </div>
          <div className="aboutUs-value-item">
            <FaHandshake size={40} color="#9C27B0" />
            <h3 className="aboutUs-primaryText">Personalized Service</h3>
            <p className="aboutUs-secondaryText">Your needs are unique, and our services are tailored to fit your specific requirements, ensuring a personal touch in every interaction.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
