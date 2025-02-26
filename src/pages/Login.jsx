import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Login.css';
import './Home.css'; // Share some styles with Home

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${Math.random() * 3 + 2}s`
    };
    stars.push(<div key={i} className="star" style={style} />);
  }
  return stars;
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', formData);
  };

  return (
    <div className={`login-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Stars Background */}
      <div className="stars-container">
        {isDarkMode && generateStars(100)}
      </div>

      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="floating-circle floating-circle-1"></div>
        <div className="floating-circle floating-circle-2"></div>
        <div className="floating-circle floating-circle-3"></div>
      </div>

      {/* Quiz-themed animated particles */}
      <div className="quiz-particle quiz-particle-1"></div>
      <div className="quiz-particle quiz-particle-2"></div>
      <div className="quiz-particle quiz-particle-3"></div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element-1"></div>
        <div className="floating-element-2"></div>
        <div className="floating-element-3"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Mind Clash</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      {/* Main Content */}
      <div className="login-content-wrapper">
        <div className="login-content">
          {/* Logo */}
          <img src={logo} alt="Mind Clash Logo" className="login-logo" />
          
          {/* Form Card */}
          <div className="login-form-card">
            <h2>Login to Your Account</h2>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-fields">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="login-input"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="login-input"
                  required
                />
              </div>

              <button
                type="submit"
                className="login-button"
              >
                Login
              </button>

              <div className="separator">
                <span>Or continue with</span>
              </div>

              <button
                type="button"
                className="social-login-button"
              >
                <FaGoogle />
                <span>Google</span>
              </button>
            </form>

            <p className="signup-link">
              Don't have an account?
              <Link to="/signup" className="signup-text">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 