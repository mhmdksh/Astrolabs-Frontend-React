// src/CreateTransaction.js

import React, { useState } from 'react';
import axios from 'axios';

function CreateTransaction() {
  const [amount, setAmount] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/transaction`, 
        { amount, receiverId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Transaction successful');
      setAmount('');
      setReceiverId('');
    } catch (error) {
      setMessage('Transaction failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Transaction</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="text"
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
          placeholder="Receiver ID"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default CreateTransaction;