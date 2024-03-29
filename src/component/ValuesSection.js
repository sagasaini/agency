import React from 'react';
// import ValueCard from './ValueCard';
import './ValuesSection.css'; // CSS file for the section layout

// const ValueCard = ({ title, content }) => {
//     return (
//       <div className="value-card">
//         <h2 className="value-title">{title}</h2>
//         <p className="value-content">{content}</p>
//       </div>
//     );
//   };

const ValuesSection = () => {
  return (
    <div className='values-section'>
    <div class="container">
  <div class="section">
    <div class="title">Our Mission</div>
    <div class="content-1">
      Inspire innovation and redefine industry standards through groundbreaking creativity.
    </div>
  </div>
  <div class="section middle-section">
    <div class="title">Our Vision</div>
    <div class="content-1 mid-content">
      Transform industries with cutting-edge, visionary creativity and design excellence.
    </div>
  </div>
  <div class="section">
    <div class="title">Our Values</div>
    <div class="content-1">
      Integrity, innovation, collaboration—guiding us toward design excellence.
    </div>
  </div>
</div>
</div>
  );
};

export default ValuesSection;
