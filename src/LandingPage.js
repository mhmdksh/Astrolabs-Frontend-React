import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CommonStyles.module.css'; // Import the shared styles
import './LandingPage.css'; // Import external CSS file for button styles

function LandingPage() {
  const backgroundImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/20/Riyadh_Skyline.jpg';
  const newLogoUrl = 'https://astrolabs.com/wp-content/uploads/2022/11/AL_LogoHorizontal.png';

  const welcomeMessage = "Welcome to Astrolabs!";
  const [typedMessage, setTypedMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < welcomeMessage.length) {
        setTypedMessage(prevMessage => prevMessage + welcomeMessage[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed (milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex]); // Trigger effect whenever currentIndex changes

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      {/* Logo */}
      <div className="logo-container">
        <img src={newLogoUrl} alt="Astrolabs Logo" className="logo" /> {/* Use the new logo URL */}
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        
      </nav>

      {/* Typed Message */}
      <div className="typed-message">
        {typedMessage}
      </div>

      {/* Buttons */}
      <div className="buttons">
        <Link to="/login" className="button">Login</Link> {/* Use custom class for button */}
        {' '}
        <Link to="/register" className="button">Register</Link> {/* Use custom class for button */}
      </div>
    </div>
  );
}

export default LandingPage;
