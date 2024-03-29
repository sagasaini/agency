// MainLayout.js
import React from 'react';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-container">
      
      <main className="content">
      <div className="explore-button-container">
          <button className="explore-button">Explore what's new with intellisky</button>
        </div>
        <div className="title">Digital age adventure</div>
       
        <div className="globe-container">
        {/* <img src='../../images/glob-1.png'></img> */}
          {/* Here you would embed a globe graphic, either as an image or using a library */}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
// const cardsData = [
//     {
//       title: 'How We Became Best Among Others?',
//       content: `As Revolutionary Designers, we crafted innovation into every project, pushing boundaries, and redefining aesthetics. Our relentless pursuit of excellence led us to become the industry's best, setting new standards in design.`,
//       points: [
//         'Excellence defines us in the design world.',
//         'Elevating design to revolutionary new heights.',
//         'Innovating design, leading the creative revolution.',
//       ],
//     },
//     {
//       title: 'How We Became Best Among Others?',
//       content: `As Revolutionary Designers, we crafted innovation into every project, pushing boundaries, and redefining aesthetics. Our relentless pursuit of excellence led us to become the industry's best, setting new standards in design.`,
//       points: [
//         'Excellence defines us in the design world.',
//         'Elevating design to revolutionary new heights.',
//         'Innovating design, leading the creative revolution.',
//       ],
//     },
//     {
//       title: 'How We Became Best Among Others?',
//       content: `As Revolutionary Designers, we crafted innovation into every project, pushing boundaries, and redefining aesthetics. Our relentless pursuit of excellence led us to become the industry's best, setting new standards in design.`,
//       points: [
//         'Excellence defines us in the design world.',
//         'Elevating design to revolutionary new heights.',
//         'Innovating design, leading the creative revolution.',
//       ],
//     },
//     // ...add more card data here
//   ];