// src/hooks/useScrambleText.ts
import { useState, useEffect } from 'react';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export const useScrambleText = (text: string, duration: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let iteration = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let interval: any = null;

    const startScramble = () => {
        interval = setInterval(() => {
          setDisplayText(
            text
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join("")
          );
    
          if (iteration >= text.length) { 
            clearInterval(interval);
          }
          
          iteration += 1; // 控制解码速度
        }, duration);
    };

    const timeout = setTimeout(startScramble, delay);

    return () => {
        clearInterval(interval);
        clearTimeout(timeout);
    };
  }, [text, duration, delay]);

  return displayText;
};