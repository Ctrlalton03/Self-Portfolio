import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/header.css';

const Header = () => {
  return (
    <header className='Header-container'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/reflections">Reflections</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;