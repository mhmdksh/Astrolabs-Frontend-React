import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './CommonStyles.module.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, { email, password });
      setMessage('Registration successful. Please log in.');
      // Optionally, navigate to the login page after successful registration
      setTimeout(() => navigate('/login'), 3000); // Use navigate function to redirect
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>{}
    <div style={{ textAlign: 'center', marginTop: '50px' }}> {/* Apply inline styles */}
      <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>Register</h2> {/* Apply inline styles */}
      {message && <p style={{ color: 'green', marginBottom: '20px' }}>{message}</p>} {/* Apply inline styles */}
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}> {/* Apply inline styles */}
        <input style={{ width: '300px', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> {/* Apply inline styles */}
        <input style={{ width: '300px', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> {/* Apply inline styles */}
        <button style={{ width: '150px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} type="submit">Register</button> {/* Apply inline styles */}
      </form>
      <img src="https://astrolabs.com/wp-content/uploads/2022/11/AL_LogoHorizontal.png" alt="Illustration" style={{ marginTop: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
    </div>
    </div>
  );
}

export default Register;