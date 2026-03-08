// src/pages/Spark/effects/Subjects.tsx

import React, { useEffect, useMemo, useRef } from 'react';
import { EffectProps } from '../types';
import { randomChoice, randomInt, BUZZWORDS, randomRange } from '../utils';

// 1. 巨型故障文字 (Mega Glitch Text)
export const GlitchTypography: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const word = useMemo(() => randomChoice(BUZZWORDS),[triggerKey]);
  const splitOffset = useMemo(() => randomInt(5, 20), [triggerKey]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <h1 className="text-[15vw] font-black italic tracking-tighter uppercase relative z-10"
          style={{ color: palette.fg1 }}>
        {word}
        {/* RGB分离残影 */}
        <span className="absolute top-0 left-0 -z-10 mix-blend-screen opacity-80 animate-[ping_2s_infinite_alternate]" 
              style={{ color: palette.accent, transform: `translate(-${splitOffset}px, ${splitOffset}px)` }}>{word}</span>
        <span className="absolute top-0 left-0 -z-20 mix-blend-screen opacity-80 animate-[ping_3s_infinite_alternate]" 
              style={{ color: palette.fg2, transform: `translate(${splitOffset}px, -${splitOffset}px)` }}>{word}</span>
      </h1>
    </div>
  );
};

// 2. 圣兽/核心能量环 (Sacred Geometry Core)
export const EnergyCore: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const rings = useMemo(() => randomInt(3, 8), [triggerKey]);
  
  return (
    <div className="relative flex items-center justify-center w-[60vmin] h-[60vmin] mix-blend-screen">
      {Array.from({ length: rings }).map((_, i) => (
        <div key={i} className="absolute rounded-full border-[1px] md:border-[3px]"
             style={{
               width: `${(i + 1) * (100 / rings)}%`, height: `${(i + 1) * (100 / rings)}%`,
               borderColor: i % 2 === 0 ? palette.accent : palette.fg2,
               borderStyle: randomChoice(['solid', 'dashed', 'dotted']),
               animation: `spin ${randomRange(5, 20)}s linear infinite ${i % 2 === 0 ? 'normal' : 'reverse'}`,
             }} />
      ))}
      {/* 核心发光体 */}
      <div className="absolute w-[10vmin] h-[10vmin] rounded-full blur-md animate-pulse" 
           style={{ backgroundColor: palette.fg1, boxShadow: `0 0 50px ${palette.accent}` }} />
    </div>
  );
};

// 3. 极繁主义海报贴片 (Brutalist Patches)
export const BrutalistPatches: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const patches = useMemo(() => Array.from({ length: randomInt(3, 7) }).map(() => ({
    text: randomChoice(BUZZWORDS),
    width: `${randomInt(20, 40)}vw`,
    top: `${randomRange(10, 80)}%`,
    left: `${randomRange(10, 70)}%`,
    rotate: `${randomRange(-30, 30)}deg`,
    inverted: Math.random() > 0.5
  })), [triggerKey]);

  return (
    <div className="absolute inset-0">
      {patches.map((p, i) => (
        <div key={i} className="absolute flex items-center justify-center p-4 border-4 font-black text-5xl md:text-8xl hover:scale-110 transition-transform"
             style={{
               top: p.top, left: p.left, transform: `rotate(${p.rotate})`, width: p.width,
               backgroundColor: p.inverted ? palette.fg1 : 'transparent',
               color: p.inverted ? palette.bg : palette.fg1,
               borderColor: palette.fg1,
             }}>
          {p.text}
        </div>
      ))}
    </div>
  );
};

// 在 Subjects.tsx 中添加
export const BauhausPopShapes: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const shapes = useMemo(() => {
    const types =['circle', 'square', 'cross', 'barcode'];
    return Array.from({ length: randomInt(8, 20) }).map(() => ({
      type: randomChoice(types),
      size: `${randomInt(5, 30)}vw`,
      top: `${randomRange(-10, 90)}%`,
      left: `${randomRange(-10, 90)}%`,
      delay: randomRange(0, 1),
      color: randomChoice([palette.fg1, palette.fg2, palette.accent])
    }));
  }, [triggerKey, palette]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-difference">
      {shapes.map((s, i) => {
        const baseStyle = {
          position: 'absolute' as const, top: s.top, left: s.left, width: s.size, height: s.size,
          animation: `popElastic 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both ${s.delay}s`,
        };
        if (s.type === 'circle') return <div key={i} style={{ ...baseStyle, backgroundColor: s.color, borderRadius: '50%' }} />;
        if (s.type === 'square') return <div key={i} style={{ ...baseStyle, border: `1vw solid ${s.color}` }} />;
        if (s.type === 'cross') return (
          <div key={i} style={baseStyle} className="flex items-center justify-center">
            <div className="absolute w-full h-[20%]" style={{ backgroundColor: s.color }} />
            <div className="absolute h-full w-[20%]" style={{ backgroundColor: s.color }} />
          </div>
        );
        if (s.type === 'barcode') return (
          <div key={i} style={{ ...baseStyle, display: 'flex', gap: '4px' }}>
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j} style={{ width: `${randomRange(2, 10)}px`, height: '100%', backgroundColor: s.color }} />
            ))}
          </div>
        );
        return null;
      })}
      <style>{`@keyframes popElastic { 0% { transform: scale(0) rotate(-45deg); opacity: 0; } 100% { transform: scale(1) rotate(0); opacity: 1; } }`}</style>
    </div>
  );
};

// 在 Subjects.tsx 中添加
export const LaserSpanningLines: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const lines = useMemo(() => Array.from({ length: randomInt(5, 15) }).map(() => {
    const isCurve = Math.random() > 0.5;
    // 随机生成贯穿屏幕的路径点
    const path = isCurve 
      ? `M ${randomRange(-20, 0)} ${randomRange(0, 100)} Q ${randomRange(20, 80)} ${randomRange(-50, 150)} 120 ${randomRange(0, 100)}`
      : `M -10 ${randomRange(0, 100)} L ${randomRange(30, 70)} ${randomRange(0, 100)} L 110 ${randomRange(0, 100)}`;
    return {
      path,
      strokeWidth: randomRange(1, 8),
      color: Math.random() > 0.6 ? palette.accent : palette.fg2,
      dash: `${randomRange(10, 100)} ${randomRange(10, 50)}`,
      animSpeed: randomRange(2, 10)
    };
  }), [triggerKey, palette]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen" viewBox="0 0 100 100" preserveAspectRatio="none">
      {lines.map((line, i) => (
        <path key={i} d={line.path} fill="none"
              stroke={line.color} strokeWidth={line.strokeWidth}
              strokeDasharray={line.dash}
              style={{ animation: `dashMove ${line.animSpeed}s linear infinite` }} />
      ))}
      <style>{`@keyframes dashMove { to { stroke-dashoffset: -200; } }`}</style>
    </svg>
  );
};


export const KineticWaveText: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const { words, scaleMax, animSpeed } = useMemo(() => {
    // 随机抽取 1-3 个单词组合在一起
    const selectedWords = Array.from({ length: randomInt(1, 3) }).map(() => randomChoice(BUZZWORDS));
    return {
      words: selectedWords,
      scaleMax: randomRange(1.5, 3), // 拉伸的极限比例
      animSpeed: randomRange(1, 2.5) // 波浪速度
    };
  }, [triggerKey]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 mix-blend-difference overflow-hidden">
      {words.map((word, wIdx) => (
        <div key={wIdx} className="flex font-sans text-[10vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none">
          {word.split('').map((char, i) => (
            <span key={i} className="inline-block origin-bottom transform-gpu"
                  style={{
                    color: i % 2 === 0 ? palette.fg1 : palette.accent,
                    animation: `textWave ${animSpeed}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.1 + wIdx * 0.2}s`,
                  }}>
              {char}
            </span>
          ))}
        </div>
      ))}
      <style>{`
        @keyframes textWave { 
          0% { transform: scaleY(1) scaleX(1) translateY(0); font-weight: 900; } 
          100% { transform: scaleY(${scaleMax}) scaleX(0.7) translateY(-30px); font-weight: 100; color: ${palette.fg2}; } 
        }
      `}</style>
    </div>
  );
};

// 在 Subjects.tsx 中添加
export const OrbitingMonoliths: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const config = useMemo(() => {
    return {
      centerSize: randomInt(10, 30),
      objects: Array.from({ length: randomInt(8, 20) }).map(() => ({
        size: randomInt(4, 15),
        radius: randomInt(20, 50), // 环绕半径 (vw)
        angleX: randomInt(0, 360),
        angleY: randomInt(0, 360),
        speed: randomRange(5, 15),
        reverse: Math.random() > 0.5,
        isCircle: Math.random() > 0.5,
        color: randomChoice([palette.fg1, palette.fg2, palette.accent])
      }))
    };
  },[triggerKey, palette]);

  return (
    <div className="w-full h-full flex items-center justify-center perspective-[1200px] mix-blend-screen">
      <div className="relative transform-style-3d" style={{ transformStyle: 'preserve-3d', animation: `spin3D 20s linear infinite` }}>
        {/* 中心核心 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_80px_currentColor]"
             style={{ width: `${config.centerSize}vmin`, height: `${config.centerSize}vmin`, backgroundColor: palette.fg1, color: palette.accent }} />
        
        {/* 环绕的卫星物体 */}
        {config.objects.map((obj, i) => (
          <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-90"
               style={{
                 width: `${obj.size}vmin`, height: `${obj.size}vmin`,
                 backgroundColor: obj.isCircle ? 'transparent' : obj.color,
                 border: obj.isCircle ? `4px solid ${obj.color}` : 'none',
                 borderRadius: obj.isCircle ? '50%' : '0',
                 transform: `rotateX(${obj.angleX}deg) rotateY(${obj.angleY}deg) translateZ(${obj.radius}vw)`,
                 animation: `orbitSelf ${obj.speed}s linear infinite ${obj.reverse ? 'reverse' : 'normal'}`
               }} />
        ))}
      </div>
      <style>{`
        @keyframes spin3D { 100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); } }
        @keyframes orbitSelf { 100% { transform: rotateX(var(--rx)) rotateY(var(--ry)) translateZ(var(--tz)) rotateX(360deg); } }
      `}</style>
    </div>
  );
};

// 在 Subjects.tsx 中添加
export const NoiseFormations: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const shapeConfig = useMemo(() => ({
    text: randomChoice(["NOISE", "VOID", "GRAIN", "FLUX", "RAW"]),
    shapeSize: randomInt(30, 60),
    isCircle: Math.random() > 0.5,
  }), [triggerKey]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* 隐藏的 SVG 噪点滤镜定义 */}
      <svg className="hidden">
        <filter id={`heavy-noise-${triggerKey}`}>
          <feTurbulence type="fractalNoise" baseFrequency={randomRange(0.5, 1.5).toFixed(2)} numOctaves="4" result="noise" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 3 -1" in="noise" result="coloredNoise" />
          <feComposite operator="in" in="SourceGraphic" in2="coloredNoise" />
        </filter>
      </svg>

      <div className="absolute mix-blend-screen opacity-90 animate-pulse"
           style={{ 
             width: `${shapeConfig.shapeSize}vmin`, height: `${shapeConfig.shapeSize}vmin`,
             backgroundColor: palette.accent,
             borderRadius: shapeConfig.isCircle ? '50%' : '0',
             filter: `url(#heavy-noise-${triggerKey})` 
           }} />
           
      <h1 className="text-[18vw] font-black mix-blend-overlay filter drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] tracking-tighter" 
          style={{ color: palette.fg1, filter: `url(#heavy-noise-${triggerKey})` }}>
        {shapeConfig.text}
      </h1>
    </div>
  );
};

export const CipherHackerText: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const blocks = useMemo(() => Array.from({ length: randomInt(1, 4) }).map(() => ({
    length: randomInt(8, 20),
    size: `${randomInt(4, 15)}vw`,
    top: `${randomRange(10, 80)}%`,
    left: `${randomRange(5, 70)}%`,
    color: Math.random() > 0.5 ? palette.fg1 : palette.accent,
    speed: randomInt(30, 100) // 刷新毫秒数
  })), [triggerKey, palette]);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*/\\|{}[]<>";
    const intervals = blocks.map((block, i) => {
      return setInterval(() => {
        if (textRefs.current[i]) {
          let newStr = "";
          for(let j=0; j<block.length; j++) newStr += chars[Math.floor(Math.random() * chars.length)];
          textRefs.current[i]!.innerText = newStr;
        }
      }, block.speed);
    });
    return () => intervals.forEach(clearInterval);
  }, [blocks]);

  return (
    <div className="absolute inset-0 pointer-events-none mix-blend-difference overflow-hidden">
      {blocks.map((block, i) => (
        <div key={i}
             ref={el => textRefs.current[i] = el}
             className="absolute font-mono font-black break-all tracking-widest leading-none opacity-90"
             style={{
               top: block.top, left: block.left, fontSize: block.size, color: block.color,
               width: `${randomInt(30, 80)}vw`
             }}
        />
      ))}
    </div>
  );
};