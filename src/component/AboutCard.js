import React from 'react';
import './AboutCard.css'; // Make sure to create this CSS file

const AboutCard = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <button className="about-button">ABOUT US</button>
        <h1 className="card-heading">How We Became Best Among Others?</h1>
        <p className="card-text">
          As Revolutionary Designers, we crafted innovation into every project, pushing
          boundaries, and redefining aesthetics. Our relentless pursuit of excellence
          led us to become the industry’s best, setting new standards in design.
        </p>
        <ul className="card-list">
          <li>Excellence defines us in the design world.</li>
          <li>Elevating design to revolutionary new heights.</li>
          <li>Innovating design, leading the creative revolution.</li>
        </ul>
        <a href="#" className="card-link">EXPLORE MORE →</a>
      </div>
    </div>
  );
};

export default AboutCard;
