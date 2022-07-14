import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { HiX } from 'react-icons/hi';
import { HiMenu } from 'react-icons/hi';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar flex  ">
      <div className="app__navbar-wrapper ">
        {/* Logo */}
        <div className="app__navbar-logo">
          <h1>KyUblog</h1>
          <div />
        </div>
        {/* Links */}
        <ul className="app__navbar-nav">
          <li className="app__navbar-nav_item">
            <Link to="/" className="app_active_link app__navbar-nav_link">
              Home
            </Link>
          </li>
          <li className="app__navbar-nav_item">
            <Link to="/events" className="app__navbar-nav_link">
              Events
            </Link>
          </li>
          <li className="app__navbar-nav_item">
            <Link to="/hostels" className="app__navbar-nav_link">
              Hostels
            </Link>
          </li>
          <li className="app__navbar-nav_item">
            <Link to="/blog" className="app__navbar-nav_link">
              Blog
            </Link>
          </li>
          <li className="app__navbar-nav_item">
            <Link to="/contact" className="app__navbar-nav_link">
              Contacts
            </Link>
          </li>
        </ul>
        {/* Login */}
        <div className="app__navbar-login">
          <button className="app__btn" type="button">
            Log in / signUp
          </button>
        </div>
        {toggleMenu ? (
          <HiX
            style={{ color: '#fff', fontSize: '2.7rem', cursor: 'pointer' }}
            className="app__navbar-icon"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <HiMenu
            className="app__navbar-icon"
            style={{ color: '#fff', fontSize: '2.7rem', cursor: 'pointer' }}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}

        {toggleMenu && (
          <div className="app__navbar-smallscreen">
            <ul className="app__navbar-smallscreen-nav">
              <li className="app__navbar-nav_item">
                <Link to="/" className="app_active_link app__navbar-nav_link">
                  Home
                </Link>
              </li>
              <li className="app__navbar-nav_item">
                <Link to="/events" className="app__navbar-nav_link">
                  Events
                </Link>
              </li>
              <li className="app__navbar-nav_item">
                <Link to="/hostels" className="app__navbar-nav_link">
                  Hostels
                </Link>
              </li>
              <li className="app__navbar-nav_item">
                <Link to="/blog" className="app__navbar-nav_link">
                  Blog
                </Link>
              </li>
              <li className="app__navbar-nav_item">
                <Link to="/contact" className="app__navbar-nav_link">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
