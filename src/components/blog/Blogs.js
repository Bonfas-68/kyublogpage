import React, { useState } from 'react';
import Data from './Data';
const Blogs = () => {
  return (
    <div className="app__blogs">
      {Data.map((blog) => {
        return (
          <article>
            <div className="blogs--image">
              <img src={blog.img} alt="images of blogs" />
            </div>
            <div className="description">
              <h2>{blog.heading}</h2>
              <p>{blog.text}</p>
              <button className="btn">View</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Blogs;
