import React from 'react';
import hostels from '../hostels/HostelsData';
const Hostels = () => {
  return (
    <div>
      {hostels.map((hostel) => {
        return (
          <div className="hostel-app">
            <h2>{hostel.name}</h2>
            <h2>{hostel.owner}</h2>
            <p>
              {hostel.desc.map((de) => (
                <p>{de}</p>
              ))}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Hostels;
