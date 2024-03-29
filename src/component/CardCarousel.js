import React from 'react'
import Carousel from './Carousel';
import './CardCarousel.css'

const cardData = [
  <div className='card-container-0'>
    <div class="card-content">
      <button class="about-button">ABOUT US</button>
      <h2>Our Commitment to Sustainability</h2>
      <p>We embed sustainability in our core operations, ensuring that each design minimizes environmental impact and promotes eco-friendly practices.</p>
      <ul>
        <li>Sustainable materials in every design.</li>
        <li>Energy-efficient design solutions.</li>
        <li>Promoting green living and workspaces.</li>
      </ul>
      <button class="explore-button">LEARN MORE</button>
    </div>
  </div>,
  <div className="card-container" ><div class="card-content"><button class="about-button">ABOUT US</button><h2>Our Commitment to Sustainability</h2><p>We embed sustainability in our core operations, ensuring that each design minimizes environmental impact and promotes eco-friendly practices.</p><ul><li>Sustainable materials in every design.</li><li>Energy-efficient design solutions.</li><li>Promoting green living and workspaces.</li></ul><button class="explore-button">LEARN MORE</button></div></div>,

  <div class='card-container-1'><div class="card-content"><button class="about-button">ABOUT US</button><h2>Our Commitment to Sustainability</h2><p>We embed sustainability in our core operations, ensuring that each design minimizes environmental impact and promotes eco-friendly practices.</p><ul><li>Sustainable materials in every design.</li><li>Energy-efficient design solutions.</li><li>Promoting green living and workspaces.</li></ul><button class="explore-button">LEARN MORE</button></div></div>,

  // Add more cards as needed
];



const CardCarousel = () => {
  return (
    <div>
      <Carousel cards={cardData} />
    </div>
  )
}

export default CardCarousel