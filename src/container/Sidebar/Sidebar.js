import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css';

import { HiChevronDown } from 'react-icons/hi';
const Sidebar = () => {
  return (
    <div className="text__center app__sidebar">
      <Link to="/" className="app__sidebar-link">
        <h2>KyU Home</h2>
      </Link>
      <Link to="/events" className="app__sidebar-link">
        <h2>Events</h2>
        <HiChevronDown style={{ fontSize: '2rem' }} />
      </Link>
      <Link to="/clubs" className="app__sidebar-link">
        <h2>Clubs & Societies</h2>
        <HiChevronDown style={{ fontSize: '2rem' }} />
      </Link>
      <Link to="/innovation" className="app__sidebar-link">
        <h2>Innovation</h2>
        <HiChevronDown style={{ fontSize: '2rem' }} />
      </Link>
      <Link to="/gallery" className="app__sidebar-link">
        <h2>Gallery</h2>
        <HiChevronDown style={{ fontSize: '2rem' }} />
      </Link>
      <Link to="/business" className="app__sidebar-link">
        <h2>Business</h2>
        <HiChevronDown style={{ fontSize: '2rem' }} />
      </Link>
    </div>
  );
};

export default Sidebar;
