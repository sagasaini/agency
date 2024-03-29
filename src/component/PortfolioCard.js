import React from 'react';
import './PortfolioCard.css'; // Make sure to create this CSS file

const AboutCard = () => {
  return (
    <div className="card-containers">
      <div className="card-contents">
        <button className="about-buttons">Microsoft</button>
        <h1 className="card-headings">Global Reader</h1>
        <p className="card-texts">
          A comprehensive production data exchange software solution that gives you Realtime information on your production capacity.
        </p>
        <ul className="card-list">
          <li>Excellence defines us in the design world.</li>
          <li>Elevating design to revolutionary new heights.</li>
          <li>Innovating design, leading the creative revolution.</li>
        </ul>
        <a href="#" className="card-links">View Portfolio →</a>
      </div>
    </div>
  );
};

export default AboutCard;
