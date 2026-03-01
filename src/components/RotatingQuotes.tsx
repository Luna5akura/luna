import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES =[
  "Love is murderous utopia.",
  "Live fast, die young.",
  "Think more, speak less.",
  "Trust yourself, trust now.",
  "Be no one, be very one.",
];

// 用于生成乱码的字符库 (包含符号、大写字母和数字)
const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>[]{}";

// ==========================================
// 【炫技点 1 & 2：字符级矩阵解密组件】
// 将一句话拆成单个字符，并在挂载时执行高频乱码运算
// ==========================================
const DecryptingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let iteration = 0;
    let animationFrameId: number;

    const animate = () => {
      setDisplayedText((prev) => 
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " "; // 保持空格不变
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join("")
      );

      if (iteration < text.length) {
        iteration += 1 / 3; 
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  },[text]);

  return (
    <span className="relative flex items-center flex-wrap justify-center font-mono">
      {displayedText.split("").map((char, index) => (
        <motion.span
          key={index}
          // 【修复核心】：加入了 whitespace-pre 强制保留空格宽度
          className={`whitespace-pre ${
            char === text[index] && char !== " "
              ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
              : "text-gray-500/50"
          }`}
        >
          {/* 如果是空格，也可以进一步转为无断点空格确保万无一失 */}
          {char}
        </motion.span>
      ))}
      
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-2 h-4 bg-cyan-400 ml-1 translate-y-[2px]"
      />
    </span>
  );
};
// ==========================================
// 主组件：RotatingQuotes
// ==========================================
export const RotatingQuotes: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        let next = Math.floor(Math.random() * QUOTES.length);
        while (next === prev) {
          next = Math.floor(Math.random() * QUOTES.length);
        }
        return next;
      });
    }, 5000); // 因为解密动画需要时间，建议延长到 5秒 轮换

    return () => clearInterval(interval);
  },[]);

  return (
    <div className="relative h-12 overflow-visible flex items-center justify-center perspective-[800px]">
      {/* 极客风：左侧固定的命令提示符 */}
      <div className="absolute left-0 lg:left-[-40px] top-1/2 -translate-y-1/2 text-cyan-800 font-mono text-sm hidden lg:block animate-pulse">
        root@LUNA:~# 
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          // 【炫技点 3：CRT 硬件故障进退场动画】
          // 进入时：从高斯模糊和 Y 轴极度拉伸中恢复
          initial={{ 
            opacity: 0, 
            scaleY: 3, 
            scaleX: 0.8, 
            filter: 'blur(10px) drop-shadow(0 0 20px rgba(255,0,0,0.8))',
            textShadow: '-5px 0px 0px rgba(255,0,0,0.8), 5px 0px 0px rgba(0,255,255,0.8)'
          }}
          // 正常状态：取消滤镜，消除色差
          animate={{ 
            opacity: 1, 
            scaleY: 1, 
            scaleX: 1, 
            filter: 'blur(0px) drop-shadow(0 0 0px rgba(255,0,0,0))',
            textShadow: '0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)'
          }}
          // 退出时：CRT 断电关机特效（Y轴瞬间压扁，X轴拉伸，爆闪色差）
          exit={{ 
            opacity: 0, 
            scaleY: 0.05, 
            scaleX: 1.5, 
            filter: 'blur(2px)',
            textShadow: '-10px 0px 0px rgba(255,0,0,1), 10px 0px 0px rgba(0,255,255,1)',
            transition: { duration: 0.2, ease: "circIn" }
          }}
          transition={{ duration: 0.6, ease:[0.22, 1, 0.36, 1] }} // 顶级贝塞尔曲线 (Apple 风格)
          className="text-sm md:text-xl font-mono tracking-widest text-center flex items-center transform-gpu will-change-transform"
        >
          <span className="text-cyan-600 mr-2 opacity-50">&gt;</span>
          <DecryptingText text={QUOTES[index]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};