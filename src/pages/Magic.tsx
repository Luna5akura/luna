// src/pages/Magic.tsx
import React from 'react';
import Card from '../components/Card';

const Magic: React.FC = () => {
  const cardsData = [
    {
      imageUrl: '/src/assets/magic/Dice.jpg',
      name: '张三',
      shortDescription: '一个有趣的人',
      longDescription: '张三是一个热爱编程和旅行的开发者，喜欢探索新技术，梦想走遍世界。',
    },
    {
      imageUrl: '/src/assets/magic/Handcuff.jpg',
      name: '李四',
      shortDescription: '设计师',
      longDescription: '李四是一位才华横溢的设计师，擅长 UI/UX，作品充满创意和美感。',
    },
    {
      imageUrl: '/src/assets/magic/SeeThrough.jpg',
      name: '王五',
      shortDescription: '自由职业者',
      longDescription: '王五是一个自由职业者，喜欢挑战自我，专注于前端开发和写作。',
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