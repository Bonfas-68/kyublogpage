import React from 'react';
import './Home.css';
import Sidebar from '../../container/Sidebar/Sidebar';
import Content from '../../container/content/Content';

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-wrapper ">
        <div className="app__home-sidebar">
          <Sidebar />
        </div>
        <div className="app__home-content">
          <Content />
        </div>
        <div className="app__home-latest">
          <h1>Latests Blogs</h1>
        </div>
        <div className="app__home-pages">
          <h1>Most Visited</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
