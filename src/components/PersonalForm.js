import React, { useState } from 'react';
import './PersonalForm.css';

const PersonalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <section className="personal-form">
      <h2>Personal Details Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <label>
          Upload Resume:
          <input type="file" name="resume" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default PersonalForm;
