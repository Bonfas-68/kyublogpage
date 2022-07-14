import React from 'react';
import clubs from '../clubs/clubsData';
import './clubs.css';

const Clubs = () => {
  return (
    <div className="app__clubs section__padding">
      <div className="app__intro">
        <h3 className="head">KyU clubs and Societies</h3>
        <p className="text">
          Happy to see you. Join clubs you're interested in.
        </p>
      </div>
      <div className="app__clubs-wrapper">
        {clubs.map((club) => (
          <div key={club.id} className="app__clubs-card">
            <h3 className="app__clubs-name">{club.name}</h3>
            <img className="club_img" src={club.img} alt="club-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
