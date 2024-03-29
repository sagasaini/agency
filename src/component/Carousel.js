import React, { useState } from 'react';
import './Carousel.css'; // Make sure to create a CSS file with the styles

const Carousel = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the middle card active

  const moveCarousel = (direction) => {
    if (direction === 'next') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else {
      setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }
  };

  const renderCards = () => {
    return cards.map((card, index) => {
      let position = 'side'; // Side cards
      if (index === activeIndex) position = 'center'; // Center card

      return (
        <div key={index} className={`card ${position}`}>
          {card}
        </div>
      );
    });
  };

  return (
    <div className="carousel">
     
      <div className="cards-container">{renderCards()}</div>
      <div className='buttons'>
      <div class="button-container">
  <button class="arrow-button" onClick={() => moveCarousel('prev')}>
    <span class="arrow">&#x25C0;</span>
  </button>
  <div class="connector"></div>
  <button class="arrow-button" onClick={() => moveCarousel('next')}>
    <span class="arrow">&#x25B6;</span>
  </button>
</div>
      </div>
    </div>
  );
};

export default Carousel;
