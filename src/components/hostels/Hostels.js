import React from 'react';
import hostels from '../hostels/HostelsData';
import '../hostels/Hostels.css';
const Hostels = () => {
  return (
    <div className="app__hostel">
      {hostels.map((hostel) => {
        return (
          <div className="app__hostel-card">
            <div className="app__hostel-img--section">
              <img src={hostel.img} alt={hostel.name} />
            </div>
            <div className="app__hostel-details">
              <h2>{hostel.name}</h2>
              <h3>{hostel.owner}</h3>
              <p>
                {hostel.desc.map((de) => (
                  <p>{de}</p>
                ))}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hostels;
