
import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Program from './components/Program';  
import Devotees from './components/Devotees';  
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
          <Route path="/program" element={<PrivateRouter><Program /></PrivateRouter>} />
          <Route path="/devotees" element={<PrivateRouter><Devotees /></PrivateRouter>} />
          <Route path="/add" element={<PrivateRouter><Add /></PrivateRouter>} />
        </Routes>
      </context.Provider>
    </Router>
  );
};

export default App;



// import React, { createContext, useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import Program from './components/Program';  
// import Devotees from './components/Devotees';  
// import Add from './components/Add';  
// import PrivateRouter from './components/PrivateRouter';

// export const context = createContext();

// const App = () => {
//   const [isToken, setIsToken] = useState(false);

//   useEffect(() => {
//     const token = sessionStorage.getItem('token');
//     if (token) {
//       setIsToken(true);
//     }
//   }, []);  // This effect only runs on page load and checks if a token exists

//   return (
//     <Router>
//       <context.Provider value={{ isToken, setIsToken }}>
//          <Navbar /> 
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<PrivateRouter><Dashboard /></PrivateRouter>} />
//           <Route path="/program" element={<PrivateRouter><Program /></PrivateRouter>} />
//           <Route path="/devotees" element={<PrivateRouter><Devotees /></PrivateRouter>} />
//           <Route path="/add" element={<PrivateRouter><Add /></PrivateRouter>} />
//         </Routes>
//       </context.Provider>
//     </Router>
//   );
// };

// export default App;
