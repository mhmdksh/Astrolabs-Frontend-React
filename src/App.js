import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateTransaction from './CreateTransaction';
import Login from './Login';
import Register from './Register';
import LandingPage from './LandingPage';
// Import other components

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-transaction" element={<CreateTransaction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;