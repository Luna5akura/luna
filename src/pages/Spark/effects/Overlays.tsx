// src/pages/Spark/effects/Overlays.tsx

import React, { useMemo } from 'react';
import { EffectProps } from '../types';
import { randomInt, randomRange } from '../utils';

// 1. CRT电视扫描线 + 暗角
export const CRTEffect: React.FC<EffectProps> = ({ palette }) => (
  <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]">
    <div className="w-full h-full" 
         style={{ 
           backgroundImage: `linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)`, 
           backgroundSize: '100% 4px' 
         }} />
  </div>
);

// 2. 噪点与胶片颗粒 (SVG滤镜)
export const FilmGrain: React.FC<EffectProps> = () => (
  <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-soft-light">
    <svg className="w-full h-full">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export const MotionSpeedBlur: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const isZoom = useMemo(() => Math.random() > 0.5,[triggerKey]);

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden mix-blend-screen opacity-50">
      {/* 边缘速度线拖影 (Radial Speed Lines) */}
      <div className="absolute inset-0" 
           style={{ 
             background: `radial-gradient(circle, transparent 20%, ${palette.bg} 90%)`,
             animation: isZoom ? 'rapidZoom 2s cubic-bezier(0.8, 0, 0.2, 1) infinite alternate' : 'none'
           }} />
           
      {/* 水平位移与色差拖影 (Horizontal Motion Blur) */}
      {!isZoom && (
        <div className="w-[200%] h-full flex opacity-30">
          <div className="w-full h-full animate-[shake_0.1s_linear_infinite]" 
               style={{ background: `linear-gradient(90deg, transparent, ${palette.accent} 50%, transparent)` }} />
        </div>
      )}
      
      <style>{`
        @keyframes rapidZoom {
          0% { transform: scale(1); backdrop-filter: blur(0px); opacity: 0; }
          100% { transform: scale(2); backdrop-filter: blur(10px); opacity: 1; box-shadow: inset 0 0 100px ${palette.fg2}; }
        }
        @keyframes shake {
          0% { transform: translateX(-2%); }
          100% { transform: translateX(2%); }
        }
      `}</style>
    </div>
  );
};


// 在 Overlays.tsx 中添加
export const SignalGlitchOverlay: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const lines = useMemo(() => Array.from({ length: randomInt(3, 8) }).map(() => ({
    top: `${randomRange(0, 100)}%`,
    height: `${randomRange(1, 10)}px`,
    delay: randomRange(0, 5)
  })), [triggerKey]);

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden mix-blend-screen">
      {/* 周期性全局色差闪烁 */}
      <div className="absolute inset-0 bg-transparent animate-[rgbSplit_4s_steps(2,end)_infinite]" />
      
      {/* 横向撕裂线 */}
      {lines.map((line, i) => (
        <div key={i} className="absolute w-full bg-white opacity-20 animate-[glitchSlice_2s_infinite]"
             style={{ 
               top: line.top, height: line.height, animationDelay: `${line.delay}s`,
               boxShadow: `10px 0 0 ${palette.accent}, -10px 0 0 ${palette.fg2}`
             }} />
      ))}
      <style>{`
        @keyframes rgbSplit {
          0%, 95% { box-shadow: none; transform: translate(0, 0); }
          96% { box-shadow: -5px 0 0 red, 5px 0 0 cyan; transform: translate(2px, -2px); }
          98% { box-shadow: 5px 0 0 red, -5px 0 0 cyan; transform: translate(-2px, 2px); }
        }
        @keyframes glitchSlice {
          0%, 90% { transform: translateX(0); opacity: 0; }
          92% { transform: translateX(${randomRange(-50, 50)}px); opacity: 1; }
          96% { transform: translateX(${randomRange(-20, 20)}px); opacity: 0.8; }
          100% { transform: translateX(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};