import React from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import backgroundImage from '../assets/contact.jpg'; // Adjust path if necessary


const Contact = () => (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
  <div className="contact">
    <h2>Contact Me</h2>
    <p>
      Feel free to reach out to me via email at 
      <a href="mailto:indhuanandhan70@gmail.com">indhuanandhan70@gmail.com</a>.
    </p>
    <p>
      You can also contact me by phone at 
      <a href="tel:9966391769" className="contact-link"><i className="fas fa-phone"></i> 9966391769</a>.
    </p>
    <p>
      Connect with me on <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
    </p>
  </div>
  </div>
);

export default Contact;
