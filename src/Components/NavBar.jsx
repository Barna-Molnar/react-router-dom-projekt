import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink activeClassName="selected-page" className="logo" to="/">
        Brand Logo
      </NavLink>
      <div className="nav-links">
        <NavLink className="link" to="/about" activeClassName="selected-page">
          About
        </NavLink>
        <NavLink className="link" to="/contact" activeClassName="selected-page">
          Contact
        </NavLink>
        <NavLink className="link" to="/blog" activeClassName="selected-page">
          Blog
        </NavLink>
      </div>
    </nav>
    // <ul>
    //   <li>
    //     <Link to="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link to="/about">About</Link>
    //   </li>
    //   <li>
    //     <Link to="/contact">Contact</Link>
    //   </li>
    //   <li>
    //     <Link to="/blog">Blog</Link>
    //   </li>
    // </ul>
  );
}

export default NavBar;
