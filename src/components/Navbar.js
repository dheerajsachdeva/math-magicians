import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Calculator">Calculator</Link></li>
      <li><Link to="/Quote">Quote</Link></li>
    </ul>
  </div>
);

export default Navbar;
