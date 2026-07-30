// src/hooks/useScrambleText.ts
import { useState, useEffect } from 'react';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export const useScrambleText = (text: string, duration: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const textChars = Array.from(text);

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText(
          textChars
            .map((letter, index) => {
              if (index < iteration) {
                return letter;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= textChars.length && interval) {
          clearInterval(interval);
          interval = null;
        }

        iteration += 1; // 控制解码速度
      }, duration);
    };

    const timeout = setTimeout(startScramble, delay);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
      clearTimeout(timeout);
    };
  }, [text, duration, delay]);

  return displayText;
};
