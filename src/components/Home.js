import React from 'react';
import './Home.css';
import backgroundImage from '../assets/background-home.jpg'; // Adjust path if necessary

const Home = () => (
  <section className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="home-content">
      <h1>Welcome to My Portfolio</h1>
      <div className="card-container">
        <div className="card">
          <h3>Skills</h3>
          <p>Html,css,javascript,Reactjs,Nodejs,Express js,Mongodb,Python</p>
        </div>
        <div className="card">
          <h3>Projects</h3>
          <p>Human activity tracker,Portfolio,Online Voting System,Education System</p>
        </div>
        <div className="card">
          <h3>Languages</h3>
          <p>English,Telugu</p>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
