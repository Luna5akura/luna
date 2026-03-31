// src/components/RotatingQuotes.tsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES = [
  "Love is murderous utopia.",
  "Live fast, die young.",
  "You only live once.",
  "Think more, speak less.",
  "Make it exist, refine it later.",
];

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

const CryptographicText = ({ text }: { text: string }) => {
  const lockedRef = useRef<HTMLSpanElement>(null);
  const scrambledRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const ptrRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let rAF: number;
    const startTime = performance.now();
    const duration = 2000;
    const len = text.length;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      let lockedStr = "";
      let scrambledStr = "";
      const lockedCharsCount = Math.floor(progress * len);

      for (let i = 0; i < len; i++) {
        if (i < lockedCharsCount) lockedStr += text[i];
        else {
          if (text[i] === " ") scrambledStr += " ";
          else scrambledStr += CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
        }
      }

      if (lockedRef.current) lockedRef.current.textContent = lockedStr;
      if (scrambledRef.current) scrambledRef.current.textContent = scrambledStr;
      if (progress === 1 && cursorRef.current) cursorRef.current.classList.add('animate-pulse');
      if (ptrRef.current && progress < 1) {
        if (Math.random() > 0.7) ptrRef.current.textContent = `0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0')}`;
      } else if (ptrRef.current && progress === 1) {
        ptrRef.current.textContent = "0xALLOC";
        ptrRef.current.className = "text-black font-bold";
      }

      if (progress < 1) rAF = requestAnimationFrame(animate);
    };
    rAF = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rAF);
  }, [text]);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
      <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-gray-600 shrink-0 select-none">
        <span className="text-gray-800">root@LUNA:~#</span>
        <span className="border border-gray-400 px-1 py-0.5 bg-gray-200" ref={ptrRef}>0x0000</span>
        <span className="text-gray-600">&gt;</span>
      </div>
      <span className="font-mono text-sm md:text-xl tracking-wide uppercase whitespace-pre-wrap break-all flex items-center">
        <span ref={lockedRef} className="text-black"></span>
        <span ref={scrambledRef} className="text-gray-400"></span>
        <span ref={cursorRef} className="inline-block w-[0.6em] h-[1em] bg-gray-700 ml-1 translate-y-[0.15em]"></span>
      </span>
    </div>
  );
};

export const RotatingQuotes: React.FC = () => {
  const [index, setIndex] = useState(0);
  const systemInfo = useMemo(() => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Tokyo',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return { loc: "AP-NORTHEAST-1 [TYO]", time: formatter.format(new Date()) };
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        let next = Math.floor(Math.random() * QUOTES.length);
        while (next === prev) next = Math.floor(Math.random() * QUOTES.length);
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-start mt-8">
      <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2 mb-4 text-[9px] font-mono text-gray-600 uppercase tracking-wider select-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-gray-600 animate-pulse" />
          SYS.DEC_ENGINE // {systemInfo.loc}
        </div>
        <div className="hidden md:block">LAST_SYNC: {systemInfo.time}</div>
      </div>

      <div className="relative h-16 md:h-12 w-full overflow-visible flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(2px)' }}
            transition={{ duration: 0.3 }}
            className="w-full transform-gpu will-change-transform flex items-center"
          >
            <CryptographicText text={QUOTES[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full h-1 border-l border-r border-gray-400 mt-2 flex justify-between px-1">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-gray-400" />
        ))}
      </div>
    </div>
  );
};