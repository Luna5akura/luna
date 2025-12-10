// src/components/RotatingQuotes.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 在这里设定你的句子
const QUOTES = [
  "Love is murderous utopia.",
  "Live fast, die young.",
  "Think more, speak less.",
  "Trust yourself, trust now.",
  "Be no one, be very one.",
];

export const RotatingQuotes: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 随机选择下一个句子，确保不重复
      setIndex((prev) => {
        let next = Math.floor(Math.random() * QUOTES.length);
        while (next === prev) {
          next = Math.floor(Math.random() * QUOTES.length);
        }
        return next;
      });
    }, 4000); // 4秒轮换一次

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-lg font-mono text-cyan-500/80 tracking-wide"
        >
          {`> ${QUOTES[index]}`}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};