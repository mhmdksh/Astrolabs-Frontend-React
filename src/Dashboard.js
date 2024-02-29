// src/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      // Replace '/user-data' and '/transactions' with your actual backend endpoints
      const userDataResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user-data`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const transactionsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transactions`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBalance(userDataResponse.data.balance);
      setTransactions(transactionsResponse.data);
    };

    fetchUserData();
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>Dashboard :)</h2>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>Account Balance: ${balance}</p>
        <h3 style={{ color: '#333', fontSize: '20px', marginBottom: '10px' }}>Transaction History</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {transactions.map((transaction) => (
            <li key={transaction.id} style={{ fontSize: '16px', marginBottom: '5px' }}>{transaction.amount} - {transaction.type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;