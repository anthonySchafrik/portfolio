import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="container">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/work">
        <button>Work</button>
      </Link>

      <Link to="/Resume">
        <button>Resume</button>
      </Link>
    </div>
  );
};

export default NavBar;
