import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommonStyles.module.css'; // Import the shared styles

function LandingPage() {
  return (
    <div className={styles.container}>{}
    <div style={{ textAlign: 'center', marginTop: '50px' }}> {/* Apply inline styles */}
      <h1 style={{ color: '#333', fontSize: '32px', marginBottom: '20px' }}>WELCOME TO MY PAGE</h1> {/* Apply inline styles */}
      <div style={{ marginTop: '20px' }}> {/* Apply inline styles */}
        <Link to="/login" style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px', marginRight: '5px' }}>Login</Link> {/* Apply inline styles */}
        <span style={{ color: '#333', fontSize: '18px' }}>|</span> {/* Apply inline styles */}
        <Link to="/register" style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px', marginLeft: '5px' }}>Register</Link> {/* Apply inline styles */}
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
