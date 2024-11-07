import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import PersonalForm from './components/PersonalForm';
import Home from './components/Home';
import './styles.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal-form" element={<PersonalForm />} />
      </Routes>
    </main>
  </Router>
);


export default App;
