import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const userDataResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user-data`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const transactionsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transactions`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBalance(userDataResponse.data.balance);
        setTransactions(transactionsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'rgb(202, 236, 255)', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '800px', width: '90%', backdropFilter: 'blur(10px)', }}>
        <h2 style={{ color: '#007bff', fontSize: '36px', marginBottom: '30px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Welcome to Your Dashboard</h2>
        <p style={{ fontSize: '24px', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold', color: '#28a745', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Account Balance: ${balance}</p>
        <hr style={{ border: '1px solid #ccc', marginBottom: '30px', opacity: '0.5' }} />
        <h3 style={{ color: '#333', fontSize: '28px', marginBottom: '30px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Transaction History</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {transactions.map((transaction) => (
            <li key={transaction.id} style={{ fontSize: '22px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.3s', cursor: 'pointer' }}>
              <span style={{ fontWeight: 'bold', marginRight: '20px', maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{transaction.type}</span>
              <span style={{ color: transaction.amount >= 0 ? '#28a745' : '#dc3545', fontWeight: 'bold', fontSize: '24px' }}>${Math.abs(transaction.amount)}</span>
            </li>
          ))}
        </ul>
        <img src="https://careers.recruiteecdn.com/image/upload/q_auto,f_auto,w_1920,c_limit/production/images/A2sE/v_bxcJ_i7iSH.png" alt="Illustration" style={{ marginTop: '40px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '100%', width: '100%', height: 'auto', transition: 'transform 0.3s', filter: 'brightness(100%)', ':hover': { transform: 'scale(1.05)', filter: 'brightness(90%)' } }} />
      </div>
    </div>
  );
}

export default Dashboard;