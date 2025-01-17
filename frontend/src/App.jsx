
import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import Add from './components/Add';  
import PrivateRouter from './components/PrivateRouter';


export const context = createContext();

const App = () => {
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, []);

  return (
    <Router>
      <context.Provider value={{ isToken, setIsToken }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRouter><Dashboard /></PrivateRouter>} />
          <Route path="/add" element={<PrivateRouter><Add /></PrivateRouter>} />
        </Routes>
      </context.Provider>
    </Router>
  );
};

export default App;


