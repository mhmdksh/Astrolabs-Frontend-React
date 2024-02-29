import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommonStyles.module.css'; // Import the shared styles

function LandingPage() {
  return (
    <div className={styles.container}> {/* Use the shared styles */}
     <h1 className={styles.title}>Welcome to Astrolabs</h1> {/* Added 'title' class for flashing effect */}
  
      <div className="links">
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default LandingPage;
/*<h1>Welcome to Our Astrolabs App1</h1>*/
