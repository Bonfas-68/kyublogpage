import React from 'react';
import data from './ContentData';
import { Link } from 'react-router-dom';
import './Content.css';

const Content = () => {
  return (
    <div className="app__content section__padding">
      <div className="app__content-card">
        {data.map((content) => {
          return (
            <div key={content.id} className="content-cards">
              <img src={content.img} alt={content.name} />
              <div className="content-details">
                <h3 className="title">{content.title}</h3>
                <h2 className="author">{content.author}</h2>
                <p className="app__content-text">
                  {content.desc}
                  <Link to="/readMore">
                    <button className="btn" type="button">
                      Read more
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
