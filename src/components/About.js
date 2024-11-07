import React from 'react';
import './About.css';
import about from '../assets/about.jpg'; // Use the correct case


const About = () => (
  <section className="about">
    <div className="about-content">
      <img src={about} alt="Profile" className="profile-pic" />
      <div className="text-content">
        <h2>About Me</h2>
        <p>
          I’m a passionate developer with a love for creating dynamic web applications. 
          With experience in React, Node.js, and more, I strive to build solutions that are 
          both functional and visually appealing. I enjoy tackling complex problems and 
          turning them into intuitive, user-friendly designs.
        </p>
        <p>
          In addition to my technical skills, I am an avid learner and always eager to 
          explore new technologies and tools. When I’m not coding, you can find me 
          exploring new hiking trails, reading science fiction, or experimenting with 
          new recipes in the kitchen.
        </p>
        <p>
          Feel free to connect with me on <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
          or <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>
    </div>
  </section>
);

export default About;
