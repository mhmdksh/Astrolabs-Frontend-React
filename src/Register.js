import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import styles from './CommonStyles.module.css';
import './RegisterPage.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, { email, password });
      setMessage('Registration successful. Please log in.');

      setTimeout(() => navigate('/login'), 3000); 
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </td>
              </tr>
              <tr>
                <td className="button-container">
                  <button type="submit">Register</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className="register-gif">
        <img src="https://cdn.dribbble.com/users/988448/screenshots/5240042/icon_cadastro_v5.gif" alt="Registration GIF" />
      </div>
      
    </div>
  
  );
}

export default Register;
