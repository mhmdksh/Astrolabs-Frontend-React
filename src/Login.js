import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './CommonStyles.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful.');
      navigate('/dashboard'); // Navigate to the dashboard after successful login
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className={styles.container}>{}
    <div style={{ textAlign: 'center', marginTop: '50px' }}> {/* Apply inline styles */}
      <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>Login</h2> {/* Apply inline styles */}
      {message && <p style={{ color: message.includes('failed') ? 'red' : 'green', marginBottom: '20px' }}>{message}</p>} {/* Apply inline styles */}
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}> {/* Apply inline styles */}
        <input style={{ width: '300px', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> {/* Apply inline styles */}
        <input style={{ width: '300px', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> {/* Apply inline styles */}
        <button style={{ width: '150px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} type="submit">Login</button> {/* Apply inline styles */}
      </form>
    </div>
    </div>
  );
}

export default Login;