import React from 'react';
import './ServiceCard.css';

const serviceData = [
  {
    icon: '🔍', // Replace with actual SVG or image icon
    title: 'Visual Communication',
    description: 'Visual Communication design is the art of communicating using various forms of media, through designs.'
  },
  {
    icon: '🔄', // Replace with actual SVG or image icon
    title: '360° Marketing',
    description: 'Digital Marketing has more often been conceived as marketing activities targeted for search Engine Rankings.'
  },
  {
    icon: '🌐', // Replace with actual SVG or image icon
    title: 'Web Portals',
    description: 'Partner with netsky to leverage the competency to host web apps in the cloud, which provides additional benefits such as scale, affordability, security, and high uptime.'
  },
  {
    icon: '☁️', // Replace with actual SVG or image icon
    title: 'Cloud-Based Web Applications',
    description: 'Hire our developers to leverage the competency of hosting web apps in the cloud, which provides additional benefits such as scale, affordability, security, and high uptime.'
  },
  {
    icon: '⛓️', // Replace with actual SVG or image icon
    title: 'Supply Chain Management Web Apps',
    description: 'Outsource web app development services to us and develop automated software to streamline the interconnected network of suppliers, manufacturers, warehouses, distributors and retailers.'
  },
  {
    icon: '🔧', // Replace with actual SVG or image icon
    title: 'Web Application Consulting',
    description: 'Our team enjoys the challenge of working on uncharted prospects and helps with brainstorming, analysis, and finalizing the solution landscape for web application development.'
  }
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <a href="/read-more" className="service-link">Read More</a>
    <div className="service-line"></div>
  </div>
  
);

// const servicesData = [
//   {
//     title: 'Visual Communication',
//     description: 'Visual Communication design is the art of communicating using various forms of media, through designs.',
//     icon: '/path-to-visual-communication-icon.svg' // Replace with actual path
//   },
//   { 
//     title: '360° Marketing',
//     description: 'Digital Marketing has more often been conceived as marketing activities targeted for search Engine Rankings.',
//     icon: '/path-to-360-marketing-icon.svg' // Replace with actual path
//   },
//   {
//     title: 'Visual Communication',
//     description: 'Visual Communication design is the art of communicating using various forms of media, through designs.',
//     icon: '/path-to-visual-communication-icon.svg' // Replace with actual path
//   },
//   {
//     title: '360° Marketing',
//     description: 'Digital Marketing has more often been conceived as marketing activities targeted for search Engine Rankings.',
//     icon: '/path-to-360-marketing-icon.svg' // Replace with actual path
//   },
//   {
//     title: 'Visual Communication',
//     description: 'Visual Communication design is the art of communicating using various forms of media, through designs.',
//     icon: '/path-to-visual-communication-icon.svg' // Replace with actual path
//   },
//   {
//     title: '360° Marketing',
//     description: 'Digital Marketing has more often been conceived as marketing activities targeted for search Engine Rankings.',
//     icon: '/path-to-360-marketing-icon.svg' // Replace with actual path
//   },
//   // ... Add other service objects here
// ];

// const ServiceCard = ({ title, description, icon }) => {
//   return (
//     <div className="service-card">
//       <img src={icon} alt={title} className="service-icon" />
//       <h3 className="service-title">{title}</h3>
//       <p className="service-description">{description}</p>
//       <a href="#" className="service-read-more">Read More</a>
//     </div>
//   );
// };

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
      <div className="explore-button-container-2">
          <button className="explore-button-2">Explore what's new with intellisky</button>
        </div>
        <h2 className="services-title">Our Services</h2>
        <p className="services-intro">Light years ahead of our competitors, Intelsky offers custom web app development services and uses the latest technologies that will compel your customers to spend lavishly on your products.</p>
      </div>
      <div className="services-container">
      {serviceData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
    </section>
  );
};

export default Services;
