// src/components/Card.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.div
      className="bg-sky-100 border border-sky-200 rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:bg-sky-200"
      onClick={toggleExpand}
      layout // 启用布局动画
    >
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-sky-900">{name}</h2>
        <p className="text-sky-700 mt-1">{shortDescription}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-sky-800"
            >
              <p>{longDescription}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Card;