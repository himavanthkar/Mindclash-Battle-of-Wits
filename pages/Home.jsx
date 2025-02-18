import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const sunnyAudio = new Audio(sunnySound);
    const rainAudio = new Audio(rainSound);
    sunnyAudio.play();
    rainAudio.play();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className="navbar">
        <h1 className="navbar-title">Dashboard</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/lobby">Lobby</Link></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </nav>
      <main className="main-content">
        <h2>Welcome to Mind Clash</h2>
        <p>This is a game of your wits about different themes like Harry Potter, Batman, or Cricket. We offer a great experience for you guys. Disclaimer: once you get into it, you don't wanna get out of it.</p>
        <footer className="team-info">
          <p>CREATED BY TEAM: Manchi Peru Pettandi Ayya</p>
          <p>The Founder and Leader: Pranay</p>
          <p>The Tech Geek: Prudhvi</p>
          <p>That CS Student: Hima</p>
        </footer>
      </main>
    </div>
  );
};

export default Home; 