import React from 'react'
import Carousel from './Carousel';
import './TestimonialCard.css'

const cardData = [
  <div className='review-container-0'>
  <div class="review-content">
  <p>We embed sustainability in our core operations, ensuring that each design minimizes environmental impact and promotes eco-friendly practices.</p>
  <h2>John Wick</h2>
  <p>★★★★</p>
  </div>
  </div>,
   <div className='review-container-0'>
   <div class="review-content">
   <p>We embed sustainability in our core operations, ensuring that each design minimizes environmental impact and promotes eco-friendly practices.</p>
   <h2>John Wick</h2>
   <p>★★★★</p>
   </div>
   </div>,
    <div className='review-container-0'>
    <div class="review-content">
    <p>We embed sustainability in our core operations, ensuring that each design minimizes environmental impact and promotes eco-friendly practices.</p>
    <h2>John Wick</h2>
    <p>★★★★</p>
    </div>
    </div>,
     <div className='review-container-0'>
     <div class="review-content">
     <p>We embed sustainability in our core operations, ensuring that each design minimizes environmental impact and promotes eco-friendly practices.</p>
     <h2>John Wick</h2>
     <p>★★★★</p>
     </div>
     </div>,
      <div className='review-container-0'>
      <div class="review-content">
      <p>We embed sustainability in our core operations, ensuring that each design minimizes environmental impact and promotes eco-friendly practices.</p>
      <h2>John Wick</h2>
      <p>★★★★</p>
      </div>
      </div>,
  
  // Add more cards as needed
];



const Testimonials = () => {
  return (
    <div className='review-section'>
       <Carousel cards={cardData} />
    </div>
  )
}

export default Testimonials