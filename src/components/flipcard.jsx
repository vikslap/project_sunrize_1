import React, { useState } from 'react';
import './FlipCard.css'; // includes custom 3D transform styles

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective w-64 h-40 mx-auto cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-white border rounded-lg shadow p-4 flex items-center justify-center">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden bg-blue-100 border rounded-lg shadow p-4 transform rotate-y-180 flex items-center justify-center">
          {back}
        </div>
      </div>
    </div>
  );
}
