import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

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
        <NavLink className="link" to="/admin" activeClassName="selected-page">
          Admin
        </NavLink>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
