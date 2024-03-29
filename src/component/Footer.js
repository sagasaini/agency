import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import './Footer.css'; // Make sure the CSS file is linked
// Add icon imports if you are using SVGs
const googleMapEmbedUrlCanada = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.214887824781!2d-114.08529108434225!3d51.037876979563775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x24d6b6f0b3b6c8f0!2s1039%2017%20Ave%20SW%20%23203%2C%20Calgary%2C%20AB%20T2T%200A7%2C%20Canada!5e0!3m2!1sen!2sin!4v1647268871808!5m2!1sen!2sin";
const googleMapEmbedUrlIndia = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.368458865541!2d77.02098831508068!3d28.928773982269428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0298c62da7ff%3A0x7f9f2dc7ce5c78b4!2sSonipat%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1647268930652!5m2!1sen!2sin";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-description">
          <p>Revolutionary Designers is an experienced company of professionals who are actively involved in web design, mobile app development, search engine optimization, and content writing. We have worked with firms providing services in various areas like immigration, education, real estate, E-commerce, and more. So, let's understand your digital needs.</p>
        </div>
        <div className="footer-links-container">
          <div className="footer-links">
            <h4>PRODUCTS</h4>
            <ul>
              <li>Fleet</li>
              <li>Navigation SDK</li>
              <li>Dash</li>
              <li>Search</li>
              <li>Maps</li>
              <li>Mobile Maps SDK</li>
              <li>Studio</li>
              <li>Data</li>
              <li>Vision</li>
              <li>Atlas</li>
              <li>--</li>
              <li>Pricing</li>
              {/* ... other product links */}
            </ul>
          </div>
          <div className="footer-links">
            <h4>RESOURCES</h4>
            <ul>
              <li>Industries</li>
              <li>Use Cases</li>
              <li>Hoe To Videos</li>
              <li>Webinars</li>
              <li>Events</li>
              <li></li>
              {/* ... other resource links */}
            </ul>
          </div>
          <div className="footer-links">
            <h4>SUPPORT</h4>
            <ul>
              <li>Help</li>
              <li>Support Services</li>
              <li>Documentation</li>
              <li>Open Source</li>
              <li></li>
              {/* ... other support links */}
            </ul>
          </div>
          <div className="footer-links">
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Customers</li>
              <li>Community</li>
              <li>Career</li>
              <li>Sustainability</li>
              <li>Divercity & Inclusion</li>
              <li>Team</li>
              <li>Blob</li>
              <li>Press</li>
              <li>Contact</li>
              {/* <li>Dash</li> */}
              {/* ... other company links */}
            </ul>
          </div>
        </div>
       
      </div>
      <div className='footer-bottom-1'>
      <div className="footer-bottom">
        <span>© Intletsky</span>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Security</a>
      </div>
      <div className='maps'>
      <div className="office-map-1">
            <iframe style={{width:'165px'}}
              title="India Office Location"
              src={googleMapEmbedUrlIndia}
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="office-map-1">
            <iframe  style={{width:'165px'}}
              title="Canada Office Location"
              src={googleMapEmbedUrlCanada}
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div></div>
      <div className="footer-social-media">
          {/* Replace # with actual URLs or use <Link> if using react-router */}
          <a href="#" className="footer-social-link"><FaTwitter /></a>
          <a href="#" className="footer-social-link"><FaInstagram /></a>
          <a href="#" className="footer-social-link"><FaFacebookF /></a>
          <a href="#" className="footer-social-link"><FaLinkedinIn /></a>
          <a href="#" className="footer-social-link"><FaGithubAlt /></a>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
