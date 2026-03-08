// src/pages/Spark/index.tsx

import React, { useState, useEffect } from 'react';
import { BACKGROUNDS, SUBJECTS, OVERLAYS, HUD_LAYERS } from './registry';
import { Palette } from './types';
import { randomInt, shuffle } from './utils';

const PALETTES: Palette[] =[
  { bg: '#050505', fg1: '#ffffff', fg2: '#ff003c', accent: '#00e5ff' }, // 赛博朋克
  { bg: '#e0e0e0', fg1: '#111111', fg2: '#ff4500', accent: '#0000ff' }, // 瑞士国际主义/粗野主义
  { bg: '#1a0b2e', fg1: '#ff007f', fg2: '#7f00ff', accent: '#00ffff' }, // 蒸汽波/合成器
  { bg: '#d4ed31', fg1: '#000000', fg2: '#ffffff', accent: '#ff00ff' }, // 酸性设计 (Acid Graphics)
  { bg: '#000000', fg1: '#ffffff', fg2: '#444444', accent: '#ffffff' }, // 极简黑白
  { bg: '#0a192f', fg1: '#64ffda', fg2: '#ccd6f6', accent: '#8892b0' }, // 极客终端
];

const SparkEngine = () => {
  const [combo, setCombo] = useState({
    bg: 0,
    subs: [] as number[], // 现在允许叠加多个主体
    ov: 0,
    hud: 0,
    color: 0
  });
  const[triggerKey, setTriggerKey] = useState(0);

  const randomize = () => {
    // 随机挑选 1 到 3 个不重复的主体，制造丰富的层次
    const subjectCount = randomInt(1, 3); 
    const availableSubs = Array.from({ length: SUBJECTS.length }, (_, i) => i);
    const selectedSubs = shuffle(availableSubs).slice(0, subjectCount);

    setCombo({
      bg: Math.floor(Math.random() * BACKGROUNDS.length),
      subs: selectedSubs,
      ov: Math.floor(Math.random() * OVERLAYS.length),
      hud: Math.floor(Math.random() * HUD_LAYERS.length),
      color: Math.floor(Math.random() * PALETTES.length),
    });
    setTriggerKey(prev => prev + 1);
  };

  useEffect(() => { randomize(); },[]);

  if (combo.subs.length === 0) return null;

  const currentPalette = PALETTES[combo.color];
  const BgComponent = BACKGROUNDS[combo.bg];
  const OvComponent = OVERLAYS[combo.ov];
  const HudComponent = HUD_LAYERS[combo.hud];

  return (
    <div 
      className="relative w-full h-[calc(100vh-80px)] overflow-hidden transition-colors duration-700" 
      style={{ backgroundColor: currentPalette.bg, color: currentPalette.fg1 }}
    >
      {/* 0. 背景层 */}
      <div className="absolute inset-0 z-0">
        <BgComponent palette={currentPalette} triggerKey={triggerKey} />
      </div>
      
      {/* 1. 主体混合层 (支持多个主体叠加) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {combo.subs.map((subIndex, idx) => {
          const SubComponent = SUBJECTS[subIndex];
          return (
            <div key={`${triggerKey}-${idx}`} className="absolute inset-0 flex items-center justify-center mix-blend-difference">
               <SubComponent palette={currentPalette} triggerKey={triggerKey} />
            </div>
          );
        })}
      </div>

      {/* 2. HUD/排版UI层 (让画面看起来有设计感) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <HudComponent palette={currentPalette} triggerKey={triggerKey} />
      </div>
      
      {/* 3. 后期特效滤镜层 (噪点、扫描线、色差等) */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <OvComponent palette={currentPalette} triggerKey={triggerKey} />
      </div>

      {/* 交互控制 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center group">
        <button 
          onClick={randomize}
          className="px-8 py-3 bg-white text-black font-black tracking-widest uppercase 
                     hover:bg-black hover:text-white border-2 border-white
                     transition-all duration-300 active:scale-90"
        >[ Generate / {triggerKey} ]
        </button>
      </div>
    </div>
  );
};

export default SparkEngine;