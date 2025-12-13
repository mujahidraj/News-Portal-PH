import React from 'react';

import classroom from '../../assets/class.png';
import swimming from '../../assets/swimming.png';
import playground from '../../assets/playground.png';


const QZone = () => {
  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold text-lg">QZone</h2>
        <p className="text-gray-600">Share your moments with us!</p>
      </div>
      <div>
        <img
          src={classroom} alt="QZone 1"
          className="w-full my-2 rounded-lg"
        />
        <img
          src={swimming} alt="QZone 2"
          className="w-full mb-2 rounded-lg"
        />
        <img
          src={playground} alt="QZone 3"
          className="w-full mb-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default QZone;