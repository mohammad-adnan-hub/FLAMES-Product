import React, { useState } from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add sign-up logic here (e.g., send to backend)
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <header>Sign Up</header>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Name"
            autoComplete="off"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Email"
            autoComplete="off"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            className="input-field"
            placeholder="Password"
            autoComplete="off"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-submit">
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </div>
      </form>
      <div className="sign-up-link">
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;