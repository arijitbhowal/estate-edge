import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-box">
          <h1 className="hero-title">Discover Your Perfect Space</h1>
          <p className="hero-description">Find the best properties in the city with EstateEdge</p>
          <button className="cta-button">Explore Listings</button>
        </div>
        <div className="image-box">
          <div className="image-frame">
            <img
              src="hero-image.jpeg"
              alt="Modern Living Space"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
