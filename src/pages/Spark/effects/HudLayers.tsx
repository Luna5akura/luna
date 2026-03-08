// src/pages/Spark/effects/HudLayers.tsx

import React, { useState, useEffect } from 'react';
import { EffectProps } from '../types';
import { randomChoice } from '../utils';

// 十字准星与坐标轴
export const SciFiHUD: React.FC<EffectProps> = ({ palette, triggerKey }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const int = setInterval(() => setTime(Math.random().toFixed(5)), 100);
    return () => clearInterval(int);
  }, [triggerKey]);

  return (
    <div className="w-full h-full absolute inset-0 p-8 flex flex-col justify-between text-xs font-mono font-bold" style={{ color: palette.fg1 }}>
      {/* 顶部 */}
      <div className="flex justify-between items-start">
        <div>SYS.OP. <br/><span style={{ color: palette.accent }}>[OK] {time}</span></div>
        <div className="text-right border-r-2 pr-2" style={{ borderColor: palette.fg2 }}>REC •<br/>V 2.0.4</div>
      </div>
      {/* 中心十字准星 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vmin] h-[40vmin] border-[1px] opacity-30 rounded-full flex items-center justify-center" style={{ borderColor: palette.fg1 }}>
        <div className="w-full h-[1px]" style={{ backgroundColor: palette.fg1 }} />
        <div className="h-full w-[1px] absolute" style={{ backgroundColor: palette.fg1 }} />
      </div>
      {/* 底部 */}
      <div className="flex justify-between items-end">
        <div className="flex gap-2">
          {Array.from({length: 5}).map((_, i) => (
             <div key={i} className="w-4 h-8 animate-pulse" style={{ backgroundColor: Math.random() > 0.5 ? palette.fg2 : palette.fg1, animationDelay: `${i*0.2}s` }} />
          ))}
        </div>
        <div className="text-5xl font-black opacity-20">{randomChoice(["SECTOR_A", "Z-FIGHT", "NULL_PTR"])}</div>
      </div>
    </div>
  );
};