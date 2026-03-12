// src/pages/Spark/index.tsx

import React, { useState, useEffect } from 'react';
import { PVKeyframes } from './styles';
import { SCENES } from './scenes';
import { EFFECTS, FALLBACK_PHRASES, fetchDynamicLyrics } from './utils';

const PALETTES =[
  { bg: '#050505', fg1: '#FFFFFF', fg2: '#222222', accent: '#FF003C' }, 
  { bg: '#EFEFEF', fg1: '#0F0F0F', fg2: '#CCCCCC', accent: '#0044FF' }, 
  { bg: '#0D1117', fg1: '#E94560', fg2: '#161B22', accent: '#00E5FF' }, 
  { bg: '#FACC15', fg1: '#000000', fg2: '#EAB308', accent: '#FFFFFF' }, 
];

const SparkEngine = () => {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [effectIndex, setEffectIndex] = useState(0);
  const[phase, setPhase] = useState<'ENTER' | 'EXIT'>('ENTER');
  const [triggerKey, setTriggerKey] = useState(0);
  
  const [isAuto, setIsAuto] = useState(false);
  
  // ★ 修改：升级状态机，使其支持携带载荷（也就是你选择的具体特效索引）
  const [nextAction, setNextAction] = useState<{ action: 'NEXT' | 'RANDOM' | 'SELECT', payload?: number } | null>(null);

  const [textPool, setTextPool] = useState<string[][]>(FALLBACK_PHRASES);
  const [currentSong, setCurrentSong] = useState("LOCAL_FALLBACK_DB");
  const [isCrawling, setIsCrawling] = useState(false);

  useEffect(() => {
    handleCrawlDatabase();
  },[]);

  const handleCrawlDatabase = async () => {
    setIsCrawling(true);
    setPhase('EXIT'); 
    
    await new Promise(resolve => setTimeout(resolve, 800)); 
    
    const result = await fetchDynamicLyrics();
    setTextPool(result.lines);
    setCurrentSong(result.songName);
    
    setIsCrawling(false);
    setEffectIndex(Math.floor(Math.random() * EFFECTS.length));
    setPaletteIndex(Math.floor(Math.random() * PALETTES.length));
    setTriggerKey(prev => prev + 1);
    setPhase('ENTER');
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === 'EXIT' && !isCrawling) {
      timer = setTimeout(() => {
        // ★ 修改：根据传入的动作类型，决定下一个特效的索引
        if (nextAction?.action === 'RANDOM') {
          setEffectIndex(Math.floor(Math.random() * EFFECTS.length));
        } else if (nextAction?.action === 'SELECT' && nextAction.payload !== undefined) {
          setEffectIndex(nextAction.payload); // 精准跳转至你选择的特效
        } else {
          setEffectIndex(prev => (prev + 1) % EFFECTS.length); // 默认 NEXT
        }
        
        setPaletteIndex(Math.floor(Math.random() * PALETTES.length));
        setTriggerKey(prev => prev + 1);
        setPhase('ENTER');
        setNextAction(null);
      }, 800);
    } else if (phase === 'ENTER' && isAuto && !isCrawling) {
      timer = setTimeout(() => {
        setNextAction({ action: 'NEXT' });
        setPhase('EXIT');
      }, 3500);
    }
    return () => clearTimeout(timer);
  },[phase, isAuto, nextAction, isCrawling]);

  // ★ 修改：手动触发控制器现在支持接受 action 和 payload 参数
  const handleManualTrigger = (action: 'NEXT' | 'RANDOM' | 'SELECT', payload?: number) => {
    if (phase === 'EXIT' || isCrawling) return; 
    setNextAction({ action, payload });
    setPhase('EXIT');
  };

  const currentPalette = PALETTES[paletteIndex];
  const CurrentScene = SCENES[0];
  
  // 为了让下拉框在退场动画期间（即还未正式切换过去时）立刻显示你选择的值，我们动态计算显示索引
  const displayEffectIndex = (nextAction?.action === 'SELECT' && nextAction.payload !== undefined) 
    ? nextAction.payload 
    : effectIndex;
  const currentEffectName = EFFECTS[displayEffectIndex];

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden font-sans bg-black selection:bg-white selection:text-black">
      <PVKeyframes />
      
      {isCrawling && (
        <div className="absolute inset-0 z-[200] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-green-400 font-mono">
          <div className="text-2xl animate-pulse mb-2 tracking-widest"> CRAWLING LYRICS DB...</div>
          <div className="text-xs opacity-60">Bypassing JASRAC Security Protocols...</div>
          <div className="text-xs opacity-60">Extracting Anime OP/ED Packets...</div>
        </div>
      )}

      <div key={triggerKey} className="w-full h-full absolute inset-0">
        <CurrentScene 
          palette={currentPalette} 
          phase={phase} 
          effect={EFFECTS[effectIndex]} 
          textPool={textPool}
        />
        <div className="absolute inset-0 pointer-events-none opacity-[0.2] mix-blend-overlay z-[90]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-4 w-full px-8 pointer-events-none">
        
        <div className="flex flex-col md:flex-row items-center gap-4 opacity-90 font-mono text-xs md:text-sm uppercase text-white mix-blend-difference bg-black/20 px-4 py-2 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor] ${phase === 'ENTER' ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`} />
            <span>FX: {currentEffectName}</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/30" />
          <span className="text-cyan-300 font-bold tracking-wider max-w-[200px] md:max-w-md truncate">
            SRC: {currentSong}
          </span>
        </div>

        <div className="flex gap-4 pointer-events-auto font-mono text-xs md:text-sm flex-wrap justify-center items-center">
          <button 
            onClick={() => setIsAuto(!isAuto)} 
            className={`px-4 py-1.5 border transition-all ${isAuto ? 'border-green-400 text-green-400 bg-green-400/10' : 'border-white/30 text-white bg-black/50 hover:bg-white/20'}`}
          >
            AUTO: {isAuto ? 'ON' : 'OFF'}
          </button>
          
          {/* ★ 新增：一个赛博朋克风格的自制 Select 列表按钮 */}
          <div className="relative group">
            <select
              value={displayEffectIndex}
              onChange={(e) => {
                setIsAuto(false);
                handleManualTrigger('SELECT', Number(e.target.value));
              }}
              className="px-4 py-1.5 pr-8 border border-yellow-500/50 text-yellow-500 bg-black/50 hover:bg-yellow-500/20 hover:border-yellow-400 transition-all font-bold outline-none cursor-pointer appearance-none uppercase"
            >
              <option value="" disabled>-- CHOOSE FX --</option>
              {EFFECTS.map((fx, idx) => (
                <option key={fx} value={idx} className="bg-gray-900 text-white uppercase font-mono">
                  {fx}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500/70 text-[10px] group-hover:text-yellow-400 transition-colors">
              ▼
            </div>
          </div>

          <button 
            onClick={() => { setIsAuto(false); handleManualTrigger('RANDOM'); }} 
            className="px-4 py-1.5 border border-white/30 text-white bg-black/50 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all"
          >
            RANDOMIZE (随机)
          </button>
          <button 
            onClick={() => { setIsAuto(false); handleManualTrigger('NEXT'); }} 
            className="px-4 py-1.5 border border-white/30 text-white bg-black/50 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all"
          >
            NEXT (下一个)
          </button>
          <button 
            onClick={() => { setIsAuto(false); handleCrawlDatabase(); }} 
            className="px-4 py-1.5 border border-red-500 text-red-400 bg-red-500/10 hover:bg-red-500/30 hover:scale-105 active:scale-95 transition-all font-bold"
          >
            HACK DB (抓取新歌)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SparkEngine;