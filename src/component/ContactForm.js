import React, { useState } from 'react';
import './ContactForm.css'; // This is your CSS file to style the component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    seekingFor: '',
    hearAbout: '',
    message: '',
    agreeTerms: false,
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the server or handle it as per your requirements
    console.log(formData);
  };

  return (
    <div className='form-head-container'>

     <div className="explore-button-container1">
          <button className="explore-button1">Let Us Know What you're Looking For</button>
        </div>
        <div className='icon-information'><h1>Contact Us</h1> </div>
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
       
        <div className="input-row">
          <div className="input-group">
            <input type="text" name="name" id="name" required onChange={handleChange} />
            <label htmlFor="name" className="floating-label">Name*</label>
          </div>
          <div className="input-group">
            <input type="email" name="email" id="email" required onChange={handleChange} />
            <label htmlFor="email" className="floating-label">Email*</label>
          </div>
        </div>
        <div className="input-group">
          <select name="seekingFor" id="seekingFor" required onChange={handleChange}>
            <option value=""></option>
            {/* Add more options here */}
          </select>
          <label htmlFor="seekingFor" className="floating-label">What are you seeking for?</label>
        </div>
        <div className="input-group">
          <select name="hearAbout" id="hearAbout" required onChange={handleChange}>
            <option value=""></option>
            {/* Add more options here */}
          </select>
          <label htmlFor="hearAbout" className="floating-label">How did you hear about us?</label>
        </div>
        <div className="input-group">
          <textarea name="message" id="message" rows="4" onChange={handleChange}></textarea>
          <label htmlFor="message" className="floating-label">Message</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" name="agreeTerms" id="agreeTerms" required onChange={handleChange} />
          <label htmlFor="agreeTerms">I agree to the Terms & Conditions*</label>
        </div>
        <div className="button-container">
          <button type="submit">SEND MESSAGE</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
