// src/components/Card.tsx
// 这是一个通用卡片，比如用在 Skill 页或 Magic 页
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

  return (
    <motion.div
      layout
      className="
        relative overflow-hidden
        bg-white/60 backdrop-blur-md 
        border border-white/50 rounded-2xl 
        shadow-sm hover:shadow-xl hover:shadow-sky-200/40
        cursor-pointer transition-shadow duration-300
      "
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
        <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white shadow-black drop-shadow-md">{name}</h2>
      </div>
      
      <div className="p-5">
        <p className="text-slate-600 font-medium leading-relaxed">{shortDescription}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-slate-200/60 text-slate-500 text-sm leading-7">
                {longDescription}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Card;