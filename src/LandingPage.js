import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommonStyles.module.css'; // Import the shared styles

function LandingPage() {
  return (
    <div className={styles.container}>
      <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#007bff', fontSize: '48px', marginBottom: '30px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Welcome to My Page</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px', marginRight: '20px', padding: '15px 30px', border: 'none', borderRadius: '30px', backgroundColor: '#28a745', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s' }}>Login</Link>
          <span style={{ color: '#333', fontSize: '20px' }}>|</span>
          <Link to="/register" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px', marginLeft: '20px', padding: '15px 30px', border: 'none', borderRadius: '30px', backgroundColor: '#28a745', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s' }}>Register</Link>
        </div>
        <p style={{ color: '#6c757d', fontSize: '18px' }}>Not a member yet? Join us today!</p>
        <img src="https://astrolabs.com/wp-content/uploads/2022/11/AL_LogoHorizontal.png" alt="Illustration" style={{ marginTop: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
      </div>
    </div>
  );
}

export default LandingPage;
