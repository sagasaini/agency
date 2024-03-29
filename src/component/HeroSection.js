import React from 'react';
import './HeroSection.css';
// import skyscrapersImage from './path-to-your-image.jpg'; 
const ValueCard = ({ title, content, className }) => (
  <div className={`value-block ${className}`}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

// Values Grid Component
// const ValuesGrid = () => (
//   <div className="values-container">
//     <ValueCard
//       className="quality"
//       title="QUALITY"
//       content="As a Digital Marketing company, we don't compromise on the quality of our services. We are committed to providing the highest quality IT products and solutions that continuously enhance and maintain your company's image."
//     />
//     <ValueCard
//       className="sustainability"
//       title="SUSTAINABILITY"
//       content="Our strength is in providing our clients with sustainable and results-driven solutions with a focus on maximum performance every time."
//     />
//     <ValueCard
//       className="excellence"
//       title="EXCELLENCE"
//       content="We strive to be the best team in the industry every day to provide our clients with the best products and services available."
//     />
//     <ValueCard
//       className="teamwork"
//       title="TEAMWORK"
//       content="Integrity and teamwork are the foundation of our business. Motivate us to break through, conquer any obstacle we face, and encourage us to do our best to meet our client's expectations and exceed them."
//     />
//   </div>
// );
const HeroSection = () => {
  return (
    <div className='herosection-1'>
      <div className="hero-section">
        <div className="left-column">
          <div className="data-point">
            <img className='hero-image' src='../../images/sem.jpg'></img>
          </div>

        </div>
        <div className="right-column">
          <div className="quality-section">
            <div className="vision-container">
              <div className="vision-circle"></div>
              <div id="wrapper">
                <div
                  className='text-animation'
                  id="text-container">

                  <h1>The vision behind Intletsy</h1>
                </div>
              </div>
            </div>
            <h2>QUALITY</h2>
            <p>As a Digital Marketing company, we don't compromise on the quality of our services. We are committed to providing the highest quality IT products and solutions that continuously enhance and maintain your company's image.</p>
            <a href="/vision">DISCOVER VISION →</a>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="left-column">
          <div className="data-point">
          <div id="wrapper">
                <div
                  className='text-animation'
                  id="text-container">

                  <h1>Your data is our responsibility</h1>
                </div>
              </div>
            {/* <p>Your data is our responsibility</p> */}
            <h1>SUSTAINABILITY</h1>
            <p>Our strength is in providing our clients with sustainable and results-driven solutions with a focus on maximum performance every time.</p>
            <a href="/data">MORE ABOUT DATA →</a>
          </div>

        </div>
        <div className="right-column">
          <div className="quality-section">
            <img className='hero-image' src='../../images/figma.jpg'></img>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="left-column">
          <div className="data-point">
            <img className='hero-image' src='../../images/mindset.jpg'></img>
          </div>

        </div>
        <div className="right-column">
          <div className="quality-section">
          <div id="wrapper">
                <div
                  className='text-animation'
                  id="text-container">

                  <h1>The vision behind Intletsy</h1>
                </div>
              </div>
            <h1>TEAMWORK</h1>
            <p>Integrity and teamwork are the foundation of our business. Motivate us to break through, conquer any obstacle we face, and encourage us to do our best to meet our client's expectations and exceed them.</p>
            <a href="/data">MORE ABOUT DATA →</a>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="left-column">
          <div className="data-point">
          <div id="wrapper">
                <div
                  className='text-animation'
                  id="text-container">

                  <h1>Our Newest Product</h1>
                </div>
              </div>
            <h1>EXCELLENCE</h1>
            <p>We strive to be the best team in the industry every day to provide our clients with the best products and services available.</p>
            <a href="/atlas">TRY ATLAS →</a>
          </div>

        </div>
        <div className="right-column">
          <div className="quality-section">
            <img className='hero-image' src='../../images/design.jpg'></img>
          </div>
        </div>
      </div>
    </div>
  );
};



export default HeroSection;
