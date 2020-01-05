import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="container">
      <Link to="/">
        <button className="btn">Home</button>
      </Link>

      <Link to="/work">
        <button className="btn">Work</button>
      </Link>

      <Link to="/Resume">
        <button className="btn">Resume</button>
      </Link>
    </div>
  );
};

export default NavBar;
