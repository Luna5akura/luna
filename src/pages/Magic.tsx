// src/pages/Magic.tsx
import React from 'react';
import Card from '../components/Card';

const Magic: React.FC = () => {
  const cardsData = [
    {
      imageUrl: '/assets/magic/Dice.jpg',
      name: '打扁骰子',
      shortDescription: '打扁骰子123456',
      longDescription: '打扁骰子123456789123456789',
    },
    {
      imageUrl: '/assets/magic/Handcuff.jpg',
      name: '千里眼1',
      shortDescription: '千里眼123455678',
      longDescription: '千里眼1123145468794651231',
    },
    {
      imageUrl: '/assets/magic/SeeThrough.jpg',
      name: '逃脱手铐',
      shortDescription: '逃脱手铐12654',
      longDescription: '逃脱手铐45645498465123',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            name={card.name}
            shortDescription={card.shortDescription}
            longDescription={card.longDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Magic;