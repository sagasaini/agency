import React from 'react';
import './Offices.css'; // Link to the CSS file for styling

const Offices = () => {
  // Embed URLs for the Google Maps locations
  // Please generate actual embed URLs from Google Maps for the specific locations
  const googleMapEmbedUrlCanada = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.214887824781!2d-114.08529108434225!3d51.037876979563775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x24d6b6f0b3b6c8f0!2s1039%2017%20Ave%20SW%20%23203%2C%20Calgary%2C%20AB%20T2T%200A7%2C%20Canada!5e0!3m2!1sen!2sin!4v1647268871808!5m2!1sen!2sin";
  const googleMapEmbedUrlIndia = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.368458865541!2d77.02098831508068!3d28.928773982269428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0298c62da7ff%3A0x7f9f2dc7ce5c78b4!2sSonipat%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1647268930652!5m2!1sen!2sin";

  return (
    <div className="offices-section">
      <div className="offices-header">
        <h2>Offices</h2>
      </div>
      <div className="offices-content">
        <div className="office-entry">
          <div className="office-details">
            <p className="office-phone">+604-376-6423</p>
            <p className="office-email">info@revolutionarydesigners.com</p>
            <p className="office-address">203, 1039 17th Avenue S.W., Calgary, Alberta, T2T 0B1</p>
          </div>
          <div className="office-map">
            <iframe
              title="Canada Office Location"
              src={googleMapEmbedUrlCanada}
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="office-entry">
          <div className="office-details">
            <p className="office-phone">+604-376-6423</p>
            <p className="office-email">info@revolutionarydesigners.com</p>
            <p className="office-address">Some address in Sonipat, Haryana, India</p>
          </div>
          <div className="office-map">
            <iframe
              title="India Office Location"
              src={googleMapEmbedUrlIndia}
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;
