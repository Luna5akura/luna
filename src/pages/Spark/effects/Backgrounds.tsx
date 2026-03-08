// src/pages/Spark/effects/Backgrounds.tsx

import React, { useEffect, useMemo, useRef } from 'react';
import { EffectProps } from '../types';
import { randomChoice, randomInt, randomRange } from '../utils';

// 1. 流体渐变深渊 (Liquid Gradient)
export const LiquidGradient: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const orbs = useMemo(() => Array.from({ length: randomInt(3, 6) }).map(() => ({
    width: `${randomInt(40, 120)}vw`,
    height: `${randomInt(40, 120)}vh`,
    top: `${randomRange(-20, 80)}%`,
    left: `${randomRange(-20, 80)}%`,
    color: Math.random() > 0.5 ? palette.fg2 : palette.accent,
    animDuration: `${randomRange(10, 30)}s`,
  })), [palette, triggerKey]);

  return (
    <div className="w-full h-full filter blur-[80px] opacity-70">
      {orbs.map((orb, i) => (
        <div key={i} className="absolute rounded-full mix-blend-screen animate-pulse"
             style={{
               width: orb.width, height: orb.height, top: orb.top, left: orb.left,
               backgroundColor: orb.color,
               animationDuration: orb.animDuration,
               animationIterationCount: 'infinite'
             }} />
      ))}
    </div>
  );
};

// 2. 骇客帝国ASCII阵列 (ASCII Matrix Rain)
export const AsciiMatrix: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const columns = useMemo(() => Array.from({ length: randomInt(20, 50) }).map(() => ({
    left: `${randomRange(0, 100)}%`,
    delay: `${randomRange(0, -20)}s`,
    duration: `${randomRange(3, 15)}s`,
    fontSize: `${randomInt(10, 30)}px`,
    text: Array.from({ length: randomInt(10, 30) }).map(() => String.fromCharCode(0x30A0 + Math.random() * 96)).join('\n')
  })), [triggerKey]);

  return (
    <div className="w-full h-full overflow-hidden opacity-30 font-mono font-bold leading-none break-all text-center">
      {columns.map((col, i) => (
        <div key={i} className="absolute whitespace-pre text-center"
             style={{
               left: col.left, color: i % 3 === 0 ? palette.accent : palette.fg1,
               fontSize: col.fontSize,
               animation: `matrixFall ${col.duration} linear infinite ${col.delay}`
             }}>
          {col.text}
        </div>
      ))}
      <style>{`@keyframes matrixFall { 0% { top: -100%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }`}</style>
    </div>
  );
};


export const ConstellationNet: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 每次触发生成不同的物理参数
  const config = useMemo(() => ({
    count: randomInt(60, 150),
    maxDist: randomRange(100, 200),
    speedMult: randomRange(0.2, 1.5),
    lineWidth: randomRange(0.5, 2)
  }), [triggerKey]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    
    let particles = Array.from({ length: config.count }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * config.speedMult, 
      vy: (Math.random() - 0.5) * config.speedMult,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? palette.fg1 : palette.accent
    }));

    let id: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.fill();
      });

      ctx.lineWidth = config.lineWidth;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < config.maxDist) {
            ctx.strokeStyle = palette.fg2;
            ctx.globalAlpha = 1 - dist / config.maxDist;
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      id = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(id);
  }, [palette, config]);

  return <canvas ref={canvasRef} className="w-full h-full opacity-60 mix-blend-screen" />;
};

// 在 Backgrounds.tsx 中添加
export const SynthwaveTerrain: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const config = useMemo(() => ({
    gridSize: randomInt(30, 80),
    speed: randomRange(2, 8),
    angle: randomInt(60, 85),
    sunSize: randomInt(20, 50)
  }), [triggerKey]);

  return (
    <div className="w-full h-full overflow-hidden perspective-[1000px] bg-gradient-to-b"
         style={{ backgroundImage: `linear-gradient(to bottom, ${palette.bg}, ${palette.fg2} 200%)` }}>
      {/* 赛博太阳 */}
      <div className="absolute left-1/2 bottom-[40%] -translate-x-1/2 rounded-t-full mix-blend-screen"
           style={{ 
             width: `${config.sunSize}vw`, height: `${config.sunSize / 2}vw`, 
             background: `linear-gradient(to bottom, ${palette.accent}, transparent)`,
             boxShadow: `0 -20px 100px ${palette.accent}`
           }} />
      {/* 3D 移动网格 */}
      <div className="absolute bottom-0 w-[200vw] h-[150vh] left-1/2 -translate-x-1/2 transform-gpu"
           style={{
             transformOrigin: 'top center',
             transform: `rotateX(${config.angle}deg) translateY(0)`,
             backgroundImage: `
               linear-gradient(transparent 95%, ${palette.fg1} 100%), 
               linear-gradient(90deg, transparent 95%, ${palette.accent} 100%)
             `,
             backgroundSize: `${config.gridSize}px ${config.gridSize}px`,
             animation: `terrainMove ${config.speed}s linear infinite`
           }} />
      <style>{`@keyframes terrainMove { 0% { background-position: 0 0; } 100% { background-position: 0 ${config.gridSize}px; } }`}</style>
    </div>
  );
};

// 在 Backgrounds.tsx 中添加
export const HyperspaceWarp: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const stars = useMemo(() => Array.from({ length: randomInt(50, 200) }).map(() => ({
    angle: randomRange(0, 360),
    distance: randomRange(10, 100),
    length: randomRange(5, 30),
    speed: randomRange(1, 3),
    color: Math.random() > 0.5 ? palette.fg1 : palette.accent,
    delay: randomRange(0, -5)
  })), [triggerKey]);

  return (
    <div className="w-full h-full absolute flex items-center justify-center overflow-hidden mix-blend-screen">
      {stars.map((star, i) => (
        <div key={i} className="absolute origin-left transform-gpu"
             style={{
               width: `${star.length}vw`, height: `${randomRange(1, 4)}px`,
               backgroundColor: star.color,
               transform: `rotate(${star.angle}deg) translateX(${star.distance}vw)`,
               animation: `warpDrive ${star.speed}s linear infinite ${star.delay}s`,
               boxShadow: `0 0 10px ${star.color}`
             }} />
      ))}
      <style>{`@keyframes warpDrive { 0% { opacity: 0; transform: rotate(var(--r)) translateX(10vw) scaleX(0.1); } 50% { opacity: 1; } 100% { opacity: 0; transform: rotate(var(--r)) translateX(150vw) scaleX(2); } }`}</style>
    </div>
  );
};

// 在 Backgrounds.tsx 中添加
export const PixelTessellationGrid: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const config = useMemo(() => {
    const cols = randomInt(10, 30);
    const rows = randomInt(10, 20);
    const total = cols * rows;
    return {
      cols, rows,
      cells: Array.from({ length: total }).map(() => ({
        delay: randomRange(0, 2),
        duration: randomRange(0.5, 2),
        color: randomChoice([palette.fg1, palette.fg2, palette.bg, palette.accent]),
        clipType: randomChoice(['none', 'circle(50%)', 'polygon(0 0, 100% 100%, 0 100%)'])
      }))
    };
  },[triggerKey, palette]);

  return (
    <div className="w-full h-full grid opacity-40 mix-blend-overlay"
         style={{ gridTemplateColumns: `repeat(${config.cols}, 1fr)`, gridTemplateRows: `repeat(${config.rows}, 1fr)` }}>
      {config.cells.map((cell, i) => (
        <div key={i} className="w-full h-full"
             style={{ 
               backgroundColor: cell.color, 
               clipPath: cell.clipType,
               animation: `pixelBlink ${cell.duration}s steps(2, end) infinite ${cell.delay}s` 
             }} />
      ))}
      <style>{`@keyframes pixelBlink { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0; transform: scale(0.9); } }`}</style>
    </div>
  );
};

// 在 Backgrounds.tsx (也可以放 Subjects) 中添加
export const DynamicFractalMirrors: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const config = useMemo(() => ({
    depth: randomInt(4, 8),
    baseShape: randomChoice(['50%', '0%', '20%']), // 圆形、方形、倒角
    spinSpeed: randomRange(10, 30)
  }), [triggerKey]);

  // 递归生成嵌套的分形结构
  const renderFractalLayer = (currentDepth: number): React.ReactNode => {
    if (currentDepth === 0) return null;
    const isEven = currentDepth % 2 === 0;
    
    return (
      <div className="w-[85%] h-[85%] border-2 flex items-center justify-center transition-all"
           style={{
             borderColor: isEven ? palette.fg1 : palette.accent,
             borderRadius: config.baseShape,
             borderStyle: randomChoice(['solid', 'dashed', 'dotted']),
             animation: `spinFractal ${config.spinSpeed / currentDepth}s linear infinite ${isEven ? 'normal' : 'reverse'}`
           }}>
        {renderFractalLayer(currentDepth - 1)}
      </div>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center opacity-50 mix-blend-difference overflow-hidden">
      <div className="w-[90vmin] h-[90vmin] flex items-center justify-center">
        {renderFractalLayer(config.depth)}
      </div>
      <style>{`@keyframes spinFractal { 100% { transform: rotate(360deg) scale(0.95); } }`}</style>
    </div>
  );
};


// 在 Backgrounds.tsx 中添加
export const FluidGooJets: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const particles = useMemo(() => Array.from({ length: randomInt(15, 30) }).map(() => ({
    size: randomInt(50, 150),
    left: `${randomRange(20, 80)}%`,
    delay: randomRange(0, -5),
    duration: randomRange(3, 8),
    color: randomChoice([palette.fg1, palette.accent])
  })), [triggerKey, palette]);

  return (
    <div className="w-full h-full bg-black overflow-hidden relative">
      <svg className="hidden">
        <filter id={`goo-${triggerKey}`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      
      <div className="w-full h-full absolute" style={{ filter: `url(#goo-${triggerKey})` }}>
        {/* 底部母体/发射源 */}
        <div className="absolute bottom-[-10%] left-0 w-full h-[20%] rounded-[50%]" style={{ backgroundColor: palette.fg2 }} />
        
        {/* 喷射出的气体/液体粒子 */}
        {particles.map((p, i) => (
          <div key={i} className="absolute rounded-full"
               style={{
                 width: `${p.size}px`, height: `${p.size}px`, backgroundColor: p.color,
                 left: p.left, bottom: '-20%',
                 animation: `jetUp ${p.duration}s ease-in infinite ${p.delay}s`
               }} />
        ))}
      </div>
      <style>{`@keyframes jetUp { 0% { transform: translateY(0) scale(1); opacity: 1; } 100% { transform: translateY(-120vh) scale(0.2) translateX(${randomRange(-100, 100)}px); opacity: 0; } }`}</style>
    </div>
  );
};

// 在 Backgrounds.tsx 中添加
export const InfinitePanBlueprint: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const config = useMemo(() => ({
    bgSize: randomInt(40, 100),
    directionX: randomChoice(['-50%', '0%', '50%']),
    directionY: randomChoice(['-50%', '0%', '50%']),
    speed: randomRange(20, 60),
    isRadial: Math.random() > 0.5
  }),[triggerKey]);

  // 确保镜头一定会移动
  const x = config.directionX === '0%' && config.directionY === '0%' ? '-50%' : config.directionX;

  return (
    <div className="w-full h-full overflow-hidden bg-black relative opacity-50 mix-blend-screen">
      <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%]"
           style={{
             backgroundImage: config.isRadial 
               ? `radial-gradient(circle at center, ${palette.fg1} 2px, transparent 2px)` 
               : `linear-gradient(${palette.fg2} 1px, transparent 1px), linear-gradient(90deg, ${palette.fg2} 1px, transparent 1px)`,
             backgroundSize: `${config.bgSize}px ${config.bgSize}px`,
             animation: `cameraPan ${config.speed}s linear infinite alternate`
           }} />
      <style>{`
        @keyframes cameraPan { 
          0% { transform: translate(0, 0); } 
          100% { transform: translate(${x}, ${config.directionY}); } 
        }
      `}</style>
    </div>
  );
};