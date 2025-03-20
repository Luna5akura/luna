// src/components/Card.tsx
import React, { useState } from 'react';

interface CardProps {
  imageUrl: string;
  name: string;
  shortDescription: string;
  longDescription: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, name, shortDescription, longDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
      onClick={toggleExpand}
    >
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{shortDescription}</p>
        {isExpanded && (
          <div className="mt-4 text-gray-800">
            <p>{longDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;