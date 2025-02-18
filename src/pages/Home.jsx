import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import sunnySound from '../assets/sunny.mp3';
import rainSound from '../assets/rain.mp3';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  useEffect(() => {
    const sunnyAudio = new Audio(sunnySound);
    const rainAudio = new Audio(rainSound);
    sunnyAudio.play();
    rainAudio.play();
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="navbar-title">Dashboard</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/lobby">Lobby</Link></li>
        </ul>
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
