
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../App';

const Login = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setIsToken } = useContext(context);  

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const values = { username: phoneNo ,  password: password };
      sessionStorage.setItem('token', JSON.stringify(values)); 
      setIsToken(true);  
      navigate('/dashboard');
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 p-4">
      <div className="card shadow-sm p-4 bg-light login" style={{ width: '24rem' }}>
        <h2 className="text-center text-dark">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">UserName</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Enter your UserName"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
