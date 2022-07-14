import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="notfound">
      <div>
        <h1>Page Not Found</h1>
        <p>
          Uh oh, we can’t seem to find the page you’re looking for. Try going
          back to the previous page or see our Help Center for more information
        </p>
        <Link to="/events">
          <button type="buttoon" className="notfound-btn">
            Go to our events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
