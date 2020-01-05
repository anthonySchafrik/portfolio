import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>

      <Link to="/work">
        <div>Work</div>
      </Link>

      <Link to="/Resume">
        <div>Resume</div>
      </Link>
    </div>
  );
};

export default NavBar;
