

import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../App.css';
import { context } from '../App';

const Navbar = () => {
  const navigate = useNavigate();
  const { isToken, setIsToken } = useContext(context);

  const navbar = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Add', link: '/add' },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsToken(false); 
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <div className="container-fluid">
        <Link to="/dashboard" className="navbar-brand fw-bold">
          PostaGRAM
        </Link>
        {isToken ? (<>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon border-0"></span>
        </button>
        
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navbar.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              {/* Logout button inside the collapsible menu */}
              <li className="nav-item d-lg-none">
                <button
                  className="btn btn-outline-danger btn-sm w-100"
                  onClick={handleLogout}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"> Logout</i>
                </button>
              </li>
            </ul>
          </div></>
        ) : null}

        {/* Logout button visible on large screens */}
        {isToken && (
          <button
            className="btn btn-outline-danger btn-sm d-none d-lg-block"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

