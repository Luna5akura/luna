// src/pages/Spark/index.tsx
import React, { useState, useEffect } from 'react';
import { EffectStyles, EFFECT_REGISTRY, EFFECTS } from './effectRegistry';
import { SCENES, BACKGROUND_REGISTRY } from './scenes'; 
import { PALETTES, FALLBACK_PHRASES, fetchDynamicLyrics } from './utils';

// ★ 全局 CRT 鱼眼电视机遮罩组件 (纯 SVG 绘制球面边缘)
const CRTOverlay = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="absolute inset-0 z-[999] pointer-events-none">
      {/* 边缘鱼眼扭曲黑框 */}
      <svg width="100%" height="100%" preserveAspectRatio="none" className="absolute inset-0">
        <defs>
          <mask id="crt-mask">
            <rect width="100%" height="100%" fill="white" />
            <rect width="100%" height="100%" fill="black" rx="10%" ry="10%" />
          </mask>
        </defs>
        {/* 四周的黑色球面边框 */}
        <rect width="100%" height="100%" fill="#0a0a0a" mask="url(#crt-mask)" />
      </svg>
      {/* CRT 屏幕反光与扫描线 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)', backgroundSize: '100% 4px' }} />
      {/* 顶部与底部的 WATERMARK 标签 */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-mono px-2 py-0.5 border border-white/30">WATERMARK</div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-mono px-2 py-0.5 border border-white/30">WATERMARK</div>
    </div>
  );
};

const SparkEngine = () => {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const[effectIndex, setEffectIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0); 
  const [phase, setPhase] = useState<'ENTER' | 'EXIT'>('ENTER');
  const [triggerKey, setTriggerKey] = useState(0);
  const [isAuto, setIsAuto] = useState(false);
  const [nextAction, setNextAction] = useState<{ action: 'NEXT' | 'RANDOM' | 'SELECT', payload?: number, type?: 'FX' | 'BG' } | null>(null);

  // ★ 新增 CRT 全局模式开关 (默认开启让你体验)
  const[isCRT, setIsCRT] = useState(true);

  const [textPool, setTextPool] = useState<string[][]>(FALLBACK_PHRASES);
  const [currentSong, setCurrentSong] = useState("LOCAL_FALLBACK_DB");
  const [isCrawling, setIsCrawling] = useState(false);

  useEffect(() => { handleCrawlDatabase(); },[]);

  const handleCrawlDatabase = async () => {
    setIsCrawling(true); setPhase('EXIT'); 
    await new Promise(resolve => setTimeout(resolve, 800)); 
    const result = await fetchDynamicLyrics();
    setTextPool(result.lines); setCurrentSong(result.songName);
    setIsCrawling(false);
    setEffectIndex(Math.floor(Math.random() * EFFECTS.length));
    setBgIndex(Math.floor(Math.random() * BACKGROUND_REGISTRY.length));
    setPaletteIndex(Math.floor(Math.random() * PALETTES.length));
    setTriggerKey(prev => prev + 1); setPhase('ENTER');
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === 'EXIT' && !isCrawling) {
      timer = setTimeout(() => {
        if (nextAction?.action === 'RANDOM') {
          setEffectIndex(Math.floor(Math.random() * EFFECTS.length));
          setBgIndex(Math.floor(Math.random() * BACKGROUND_REGISTRY.length));
        } else if (nextAction?.action === 'SELECT' && nextAction.payload !== undefined) {
          if (nextAction.type === 'FX') setEffectIndex(nextAction.payload);
          if (nextAction.type === 'BG') setBgIndex(nextAction.payload);
        } else {
          setEffectIndex(prev => (prev + 1) % EFFECTS.length);
        }
        setPaletteIndex(Math.floor(Math.random() * PALETTES.length));
        setTriggerKey(prev => prev + 1); setPhase('ENTER'); setNextAction(null);
      }, 800);
    } else if (phase === 'ENTER' && isAuto && !isCrawling) {
      timer = setTimeout(() => { setNextAction({ action: 'NEXT' }); setPhase('EXIT'); }, 3500);
    }
    return () => clearTimeout(timer);
  },[phase, isAuto, nextAction, isCrawling]);

  const handleManualTrigger = (action: 'NEXT' | 'RANDOM' | 'SELECT', payload?: number, type?: 'FX' | 'BG') => {
    if (phase === 'EXIT' || isCrawling) return; 
    setNextAction({ action, payload, type }); setPhase('EXIT');
  };

  const currentPalette = PALETTES[paletteIndex];
  const CurrentScene = SCENES[0];
  const displayEffectIndex = (nextAction?.action === 'SELECT' && nextAction.type === 'FX' && nextAction.payload !== undefined) ? nextAction.payload : effectIndex;
  const displayBgIndex = (nextAction?.action === 'SELECT' && nextAction.type === 'BG' && nextAction.payload !== undefined) ? nextAction.payload : bgIndex;
  const currentEffectName = EFFECT_REGISTRY[displayEffectIndex]?.name || EFFECTS[displayEffectIndex];

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden font-sans bg-black selection:bg-white selection:text-black">
      <EffectStyles />
      {/* 注入全局滤镜 */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <defs>
          <filter id="liquid-ripple">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.1" numOctaves="1" result="warp" />
            <feDisplacementMap in="SourceGraphic" in2="warp" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {isCrawling && (
        <div className="absolute inset-0 z-[200] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-green-400 font-mono">
          <div className="text-2xl animate-pulse mb-2 tracking-widest">CRAWLING DB...</div>
        </div>
      )}

      {/* 核心场景 */}
      <div key={triggerKey} className="w-full h-full absolute inset-0">
        <CurrentScene palette={currentPalette} phase={phase} effect={EFFECTS[effectIndex]} bgIndex={displayBgIndex} textPool={textPool} />
      </div>

      {/* ★ 独立的全局 CRT 遮罩 */}
      <CRTOverlay active={isCRT} />

      {/* 底部控制台 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex flex-col items-center gap-4 w-full px-8 pointer-events-none">
        
        <div className="flex flex-col md:flex-row items-center gap-4 opacity-90 font-mono text-xs md:text-sm uppercase text-white mix-blend-difference bg-black/20 px-4 py-2 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor] ${phase === 'ENTER' ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`} />
            <span>FX: {currentEffectName}</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/30" />
          <span className="text-cyan-300 font-bold tracking-wider max-w-[200px] md:max-w-md truncate">SRC: {currentSong}</span>
        </div>

        <div className="flex gap-2 md:gap-4 pointer-events-auto font-mono text-xs md:text-sm flex-wrap justify-center items-center">
          <button onClick={() => setIsAuto(!isAuto)} className={`px-4 py-1.5 border transition-all ${isAuto ? 'border-green-400 text-green-400 bg-green-400/10' : 'border-white/30 text-white bg-black/50'}`}>AUTO: {isAuto ? 'ON' : 'OFF'}</button>
          
          {/* ★ 全局 CRT 开关 */}
          <button onClick={() => setIsCRT(!isCRT)} className={`px-4 py-1.5 border transition-all ${isCRT ? 'border-purple-400 text-purple-400 bg-purple-400/20' : 'border-white/30 text-white bg-black/50'}`}>
            CRT: {isCRT ? 'ON' : 'OFF'}
          </button>
          
          <select value={displayBgIndex} onChange={(e) => { setIsAuto(false); handleManualTrigger('SELECT', Number(e.target.value), 'BG'); }} className="px-4 py-1.5 pr-8 border border-blue-500/50 text-blue-400 bg-black/50 hover:bg-blue-500/20 transition-all outline-none cursor-pointer appearance-none uppercase max-w-[150px] truncate">
            {BACKGROUND_REGISTRY.map((bg, idx) => ( <option key={bg.id} value={idx} className="bg-gray-900 text-white">{bg.name}</option> ))}
          </select>
          <select value={displayEffectIndex} onChange={(e) => { setIsAuto(false); handleManualTrigger('SELECT', Number(e.target.value), 'FX'); }} className="px-4 py-1.5 pr-8 border border-yellow-500/50 text-yellow-500 bg-black/50 hover:bg-yellow-500/20 transition-all outline-none cursor-pointer appearance-none uppercase max-w-[150px] truncate">
            {EFFECT_REGISTRY.map((fx, idx) => ( <option key={fx.id} value={idx} className="bg-gray-900 text-white">{fx.name}</option> ))}
          </select>
          <button onClick={() => { setIsAuto(false); handleManualTrigger('NEXT'); }} className="px-4 py-1.5 border border-white/30 text-white bg-black/50 hover:bg-white/20">NEXT</button>
        </div>
      </div>
    </div>
  );
};
export default SparkEngine;