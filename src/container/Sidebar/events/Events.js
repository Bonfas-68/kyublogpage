import React from 'react';
import { Link } from 'react-router-dom';
import data from './EventsData';
import './Events.css';

const Events = () => {
  return (
    <div className="app__events section__padding">
      <div className="app__events-wrapper">
        {data.map((ev) => (
          <div className="app__events-card">
            <Link className="app__event-link" to="/events" key={ev.id}>
              <div className="app__events-img">
                <img src={ev.img} className="event_img" alt="event_img" />
                <h3 className="name">{ev.name}</h3>
              </div>
            </Link>
            <div className="desc">
              <h3 className="title">{ev.title}</h3>
              <h4 className="leader">Leader: Mr. {ev.leader}</h4>
              <p className="desc-text">{ev.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
