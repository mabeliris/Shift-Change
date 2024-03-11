import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        
        <img src="src/assets/Bhp_logo_PNG1-1.png" alt="Logo" />
      </div>
      <div className="navbar-right">
        <p>{currentDateTime}</p>
      </div>
    </div>
  );
}

export default Navbar;
