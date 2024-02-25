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
    <div>
      <h2>Dashboard</h2>
      <p>Account Balance: ${balance}</p>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.amount} - {transaction.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;