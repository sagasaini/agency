import React from 'react';
import './CompleteSolution.css';

// const images = [
//   { src: '../../images/Screenshot 2024-03-26 164526.png', caption: 'Caption 1' },
//   { src: '../../images/Screenshot 2024-03-26 164526.png', caption: 'Caption 2' },
//   // ...more images
// ];

const CompleteSolution = () => {
  return (
    <div className="complete-solution-container">
      <div className="image-collage">
      <img src='../../images/design.jpg'></img>
        {/* {images.map((image, index) => (
          <div key={index} className={`image-wrapper image-${index + 1}`}>
            <img src={image.src} alt={`Image ${index + 1}`} />
            <p className="image-caption">{image.caption}</p>
          </div>
        ))} */}
      </div>
      <div className="content-section">
      <button className="custom-button">
      say goodbye to labeling
    </button>
        <h2>Complete Solution</h2>
        <p>Boost online visibility and rankings with our Search Engine Optimization expertise. Drive organic traffic, dominate SERPs, and achieve digital success.</p>
      </div>
    </div>
  );
};

export default CompleteSolution;
