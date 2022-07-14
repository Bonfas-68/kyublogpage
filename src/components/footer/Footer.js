import React, { useState } from 'react';
import './Footer.css';
import { HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    alert('Thanks for Subscribing');
  };

  return (
    <div className="app__footer">
      <div className="app__footer-wrapper">
        <div className="app__footer-about">
          <h2 className="app__footer-heading">About Us</h2>
          <p className="app__footer-about_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            necessitatibus?
          </p>
        </div>
        <div className="app__footer-quiklinks">
          <h2 className="app__footer-heading">Quick Links</h2>
          <ul className="app__footer-links">
            <li className="app__footer-items">
              <Link className="app__footer-link" to="/">
                Home
              </Link>
            </li>
            <li className="app__footer-items">
              <Link className="app__footer-link" to="/about">
                About
              </Link>
            </li>
            <li className="app__footer-items">
              <Link className="app__footer-link" to="/location">
                Location
              </Link>
            </li>
            <li className="app__footer-items">
              <Link className="app__footer-link" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className="app__footer-subscribe">
          <div className="app__footer-heading">Subscribe for newsletter</div>
          <form className="app__footer-form">
            <div className="form-control">
              <label htmlFor="Name">Name: </label>
              <input
                type="text"
                placeholder="Enter name..."
                name="name"
                id="name"
              />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email: </label>
              <input
                type="emial"
                placeholder="Enter email..."
                name="email"
                id="email"
              />
            </div>
            <input
              type="submit"
              value="subscribe"
              className="app__footer-btn"
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
      <hr />
      <div className="app__footer-copyright">
        <p className="app_footer-text">
          &copy; 2021 &mdash; 2022 copyright all rights reserved. <br />
          Made by <HiHeart className="app__footer-icon" /> Bonfas Oluoch <br />
          KyU blog page
        </p>
      </div>
    </div>
  );
};

export default Footer;
