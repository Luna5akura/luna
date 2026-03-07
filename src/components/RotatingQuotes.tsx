// src/components/RotatingQuotes.tsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES =[
  "Love is murderous utopia.",
  "Live fast, die young.",
  "Think more, speak less.",
  "Trust yourself, trust now.",
  "Be no one, be very one.",
];

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>[]{}!~?";

// ==========================================
// 【极致优化点 1：剔除 HTML Parser (DOM 节点池化)】
// 原代码在 requestAnimationFrame 中高频调用 innerHTML，强迫浏览器每秒执行 60 次昂贵的 C++ 级 HTML 词法解析与 DOM 树重建。
// 现改为一次性挂载静态 DOM 结构，通过提取独立的 textContent 引用进行 O(1) 物理内存覆写！
// ==========================================
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
        if (i < lockedCharsCount) {
          lockedStr += text[i];
        } else {
          if (text[i] === " ") {
            scrambledStr += " ";
          } else {
            if (progress < 0.2) {
              scrambledStr += Math.random() > 0.5 ? '0' : '1';
            } else {
              scrambledStr += CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
            }
          }
        }
      }

      // 直接跨过 React 和 HTML 解释器，触达 V8 底层修改节点文本
      if (lockedRef.current) lockedRef.current.textContent = lockedStr;
      if (scrambledRef.current) scrambledRef.current.textContent = scrambledStr;

      if (progress === 1 && cursorRef.current) {
        cursorRef.current.classList.add('animate-pulse');
      }

      if (ptrRef.current && progress < 1) {
         if (Math.random() > 0.7) {
            ptrRef.current.textContent = `0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0')}`;
         }
      } else if (ptrRef.current && progress === 1) {
         ptrRef.current.textContent = "0xALLOC";
         ptrRef.current.className = "text-cyan-500 font-bold";
      }

      if (progress < 1) {
        rAF = requestAnimationFrame(animate);
      }
    };

    rAF = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rAF);
  }, [text]);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
      <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-cyan-800 shrink-0 select-none">
        <span className="text-red-500/80">root@LUNA:~#</span>
        <span className="border border-cyan-900/50 px-1 py-0.5" ref={ptrRef}>0x0000</span>
        <span className="text-cyan-600">&gt;</span>
      </div>
      
      <span className="font-mono text-sm md:text-xl tracking-[0.15em] uppercase whitespace-pre-wrap break-all flex items-center">
        <span ref={lockedRef} className="text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
        <span ref={scrambledRef} className="text-slate-600"></span>
        <span ref={cursorRef} className="inline-block w-[0.6em] h-[1em] bg-cyan-400 ml-1 translate-y-[0.15em]"></span>
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
      fractionalSecondDigits: 3
    });
    return {
      loc: "AP-NORTHEAST-1 [TYO]",
      time: formatter.format(new Date())
    };
  }, [index]); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        let next = Math.floor(Math.random() * QUOTES.length);
        while (next === prev) {
          next = Math.floor(Math.random() * QUOTES.length);
        }
        return next;
      });
    }, 6000); 

    return () => clearInterval(interval);
  },[]);

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-start perspective-[1000px] mt-8">
      
      <style>{`
        .crt-shutdown {
          animation: crt-glitch-skew 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        @keyframes crt-glitch-skew {
          0% { transform: skew(0deg); text-shadow: 0 0 0 transparent; }
          20% { transform: skew(-20deg); text-shadow: -4px 0 0 rgba(255,0,0,0.8), 4px 0 0 rgba(0,255,255,0.8); }
          40% { transform: skew(15deg); text-shadow: 4px 0 0 rgba(255,0,0,0.8), -4px 0 0 rgba(0,255,255,0.8); }
          60% { transform: skew(-5deg); text-shadow: -2px 0 0 rgba(255,0,0,0.8), 2px 0 0 rgba(0,255,255,0.8); }
          100% { transform: skew(0deg); text-shadow: 0 0 0 transparent; }
        }
      `}</style>

      <div className="w-full flex justify-between items-end border-b border-cyan-900/40 pb-2 mb-4 text-[9px] font-mono text-cyan-700/60 uppercase tracking-widest select-none">
        <div className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
           SYS.DEC_ENGINE // {systemInfo.loc}
        </div>
        <div className="hidden md:block">
           LAST_SYNC: {systemInfo.time}
        </div>
      </div>

      <div className="relative h-16 md:h-12 w-full overflow-visible flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              scaleY: 0.1, 
              scaleX: 1.5, 
              filter: 'blur(10px) brightness(2)',
            }}
            animate={{ 
              opacity: 1, 
              scaleY: 1, 
              scaleX: 1, 
              filter: 'blur(0px) brightness(1)',
            }}
            exit={{ 
              opacity: 0, 
              scaleY: 0.02, 
              scaleX: 2, 
              filter: 'blur(4px) brightness(3)',
              className: "crt-shutdown" 
            }}
            transition={{ 
              duration: 0.4, 
              ease:[0.16, 1, 0.3, 1] 
            }}
            className="w-full transform-gpu will-change-transform flex items-center"
          >
            <CryptographicText text={QUOTES[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="w-full h-1 border-l border-r border-cyan-900/40 mt-2 flex justify-between px-1">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-cyan-900/20" />
        ))}
      </div>
    </div>
  );
};