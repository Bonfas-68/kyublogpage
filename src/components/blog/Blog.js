import React, { useState } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Blogs from './Blogs';
import blogs from '../blog/Blogdata';
import '../blog/Blog.css';
const Blog = () => {
  const [index, setIndex] = useState(0);
  const { id, img, desc, title } = blogs[index];

  const checkNumber = (number) => {
    if (number > blogs.length - 1) {
      return 0;
    }
    if (number < 0) {
      return blogs.length - 1;
    }
    return number;
  };

  const nextBlog = (index) => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevBlog = (index) => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomBlog = () => {
    let randomNumber = Math.floor(Math.random() * blogs.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
      setIndex(checkNumber(randomNumber));
    }
  };

  return (
    <div className="app__blog">
      <div className="app__blog--intro">
        <div className="app__blog--intro-slider">
          <div className="overlay"></div>
          <img src={img} alt="slide images" />
          <div className="slide--content">
            <h2>{title}</h2>
            <p>
              <FaQuoteRight
                style={{
                  color: '#311701',
                  fontSize: '3rem',
                  transform: 'rotate(180deg)',
                  padding: '0.2rem',
                }}
              />
              {desc}
            </p>
            <button className="app__blog--btn">read more</button>
          </div>
          <div className="btn--container">
            <button className="prev-btn" onClick={prevBlog}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextBlog}>
              <FaChevronRight />
            </button>
            {/* <button className="next-btn" onClick={randomBlog}>
              suprise me{' '}
            </button> */}
          </div>
        </div>
      </div>
      <Blogs />
    </div>
  );
};

export default Blog;
