import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import sunnySound from '../assets/sunny.mp3';
import rainSound from '../assets/rain.mp3';
import './Home.css';

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

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const sunnyAudioRef = useRef(null);
  const rainAudioRef = useRef(null);

  useEffect(() => {
    sunnyAudioRef.current = new Audio(sunnySound);
    rainAudioRef.current = new Audio(rainSound);
    sunnyAudioRef.current.volume = volume;
    rainAudioRef.current.volume = volume;
    if (volume > 0) {
      if (isDarkMode) {
        rainAudioRef.current.play();
        sunnyAudioRef.current.pause();
      } else {
        sunnyAudioRef.current.play();
        rainAudioRef.current.pause();
      }
    } else {
      sunnyAudioRef.current.pause();
      rainAudioRef.current.pause();
    }
    return () => {
      sunnyAudioRef.current.pause();
      rainAudioRef.current.pause();
    };
  }, [volume, isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Stars Background */}
      <div className="stars-container absolute inset-0">
        {generateStars(50)}
      </div>

      <nav className="navbar">
        <h1 className="navbar-title">Mind Clash</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/lobby">Lobby</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </nav>
      <main className="main-content">
        <img src="../assets/logo.png" alt="Mind Clash Logo" className="logo" />
        <h2>Welcome to Mind Clash - Your Ultimate Quiz Experience!</h2>
        <p>This is a game of your wits about different themes like Harry Potter, Batman, or Cricket. We offer a great experience for you guys. Disclaimer: once you get into it, you don't wanna get out of it.</p>
        <div className="game-modules">
          <button className="game-button">Join Game</button>
          <button className="game-button">Create Game</button>
        </div>
      </main>
      <footer className="team-info">
        <p>CREATED BY TEAM: Manchi Peru Pettandi Ayya</p>
        <p>The Founder and Leader: Pranay</p>
        <p>The Tech Geek: Prudhvi</p>
        <p>That CS Student: Hima</p>
      </footer>
    </div>
  );
};

export default Home;
