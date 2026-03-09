// src/pages/Spark/index.tsx

import React, { useState, useEffect } from 'react';
import { PVKeyframes } from './styles';
import { SCENES } from './scenes';

const PALETTES =[
  { bg: '#050505', fg1: '#FFFFFF', fg2: '#222222', accent: '#FF003C' }, // 黑红
  { bg: '#EFEFEF', fg1: '#0F0F0F', fg2: '#CCCCCC', accent: '#0044FF' }, // 灰蓝
  { bg: '#0D1117', fg1: '#E94560', fg2: '#161B22', accent: '#00E5FF' }, // 极客暗黑
  { bg: '#FACC15', fg1: '#000000', fg2: '#EAB308', accent: '#FFFFFF' }, // 警戒黄
];

const SparkEngine = () => {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [phase, setPhase] = useState<'ENTER' | 'EXIT'>('ENTER');
  const [triggerKey, setTriggerKey] = useState(0);

  // 核心时间轴自动化循环
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'ENTER') {
      // 动画入场耗时约 0.8s + 0.3s字符间距 = 1.1s。
      // 加上“停留半秒”，因此在 1600ms 后触发退场 (EXIT)
      timer = setTimeout(() => {
        setPhase('EXIT');
      }, 1600);
    } else {
      // 退场动画耗时约 0.6s + 0.3s字符间距 = 0.9s。
      // 退场结束后，重置状态，换下一组配色，触发下一次循环！
      timer = setTimeout(() => {
        setPaletteIndex(Math.floor(Math.random() * PALETTES.length));
        setTriggerKey(prev => prev + 1); // 重新生成全新的词组
        setPhase('ENTER');
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [phase, triggerKey]);

  const currentPalette = PALETTES[paletteIndex];
  const CurrentScene = SCENES[0];

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden font-sans bg-black selection:bg-white selection:text-black">
      <PVKeyframes />
      
      {/* triggerKey 只在完整循环结束后更新，因此可以在不刷新 DOM 的情况下，触发同一组文字的 ENTER 和 EXIT */}
      <div key={triggerKey} className="w-full h-full absolute inset-0">
        <CurrentScene palette={currentPalette} phase={phase} />
        
        {/* 全局噪点 */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-overlay z-[99]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* 底部 HUD 指示器 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 opacity-50 font-mono text-[10px] uppercase text-white mix-blend-difference pointer-events-none">
        <div className={`w-2 h-2 rounded-full ${phase === 'ENTER' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
        <span>AUTO SEQUENCE // {phase} MODE // CUT: {triggerKey}</span>
      </div>
    </div>
  );
};

export default SparkEngine;