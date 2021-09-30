import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Nav.css'

export const Nav = () => {
  return (
    <nav className="nav">
      <a className="nav__logo" href="#home">LOGO</a> 
      <ul className="nav__links">
        <li><a className="nav__links-link" href="#home">Home</a></li>
        <li><a className="nav__links-link" href="#details">Details</a></li>
        <li><a className="nav__links-link" href="#projects">Projects</a></li>
      </ul>
    </nav>
  )
}
