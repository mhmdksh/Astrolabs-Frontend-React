import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommonStyles.module.css'; // Import the shared styles
import './LandingPage.css'; // Import external CSS file for button styles


function LandingPage() {
  return (
    <div className={styles.container}> {/* Use the shared styles */}
      <img src="https://careers.recruiteecdn.com/image/upload/q_auto,f_auto,w_400,c_limit/production/images/A2sf/3Q3QAjS_b-D9.jpeg" alt="Astrolabs Logo" style={{ width: '200px', height: 'auto' }} /> {/* Add the image */}
      <h1 style={{ color: '0f3864' }}>Welcome to Our Astrolabs App1</h1> {/* Adjusted title color */}
      <div className="buttons"> {/* Use custom class for button container */}
        <Link to="/login" className="button">Login</Link> {/* Use custom class for button */}
        {' '}
        <Link to="/register" className="button">Register</Link> {/* Use custom class for button */}
      </div>
    </div>
  );
}

export default LandingPage;

