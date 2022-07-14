import React from 'react';
import '../gallery/Gallery.css';
import images from '../images/images';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const Gallery = () => {
  return (
    <div className="app_gallery">
      <div className="app__gallery-container">
        {images.map((img) => (
          <>
            <div className="img__container">
              <img src={img.img} />
              <h3>{img.name}</h3>
            </div>
            <div className="app__gallery-btn">
              <button type="button" className="btn-left">
                <HiArrowNarrowLeft className="app__gallery-icon" />
              </button>
              <button type="button" className="btn-right">
                <HiArrowNarrowRight className="app__gallery-icon" />
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
