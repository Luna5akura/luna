import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-12 relative"
      >
        {/* 装饰角标 */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

        <h1 className="text-4xl font-black mb-6 tracking-widest uppercase text-white mix-blend-difference">
          Subject: Luna
        </h1>
        
        <p className="text-gray-400 font-mono leading-loose mb-8">
          Love is murderous utopia.
        </p>

        <div className="text-xs font-mono text-cyan-500 animate-pulse">
          _ END_OF_TRANSMISSION
        </div>
      </motion.div>
    </div>
  );
};

export default About;