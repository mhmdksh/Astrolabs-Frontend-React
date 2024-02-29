import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link component
import styles from './CommonStyles.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful.');
      navigate('/dashboard');
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className={styles.backToHome}>
        <Link to="/">Back to Home</Link> {/* Link to the home page */}
      </div>
    </div>
  );
}

export default Login;
