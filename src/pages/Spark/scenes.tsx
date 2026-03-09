// src/pages/Spark/scenes.tsx

import React, { useMemo } from 'react';
import { randomChoice, randomRange, PHRASES, DECOR_WORDS, EASE_OUT, EASE_IN } from './utils';

export interface SceneProps {
  palette: { bg: string; fg1: string; fg2: string; accent: string };
  phase: 'ENTER' | 'EXIT'; // 接收当前的播放阶段
}

// 随机花边/网格装饰
const ScreenDecorations = ({ palette }: { palette: any }) => {
  const decorType = useMemo(() => randomChoice(['corners', 'brackets', 'grid-lines', 'circles', 'none']),[]);
  if (decorType === 'none') return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[100] overflow-hidden">
      {decorType === 'corners' && (
        <>
          <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4" style={{ borderColor: palette.accent }} />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4" style={{ borderColor: palette.accent }} />
        </>
      )}
      {decorType === 'grid-lines' && (
        <>
          <div className="absolute top-[15%] left-0 w-full h-[1px] opacity-30" style={{ backgroundColor: palette.fg1 }} />
          <div className="absolute bottom-[15%] left-0 w-full h-[1px] opacity-30" style={{ backgroundColor: palette.fg1 }} />
          <div className="absolute top-0 left-[15%] w-[1px] h-full opacity-30" style={{ backgroundColor: palette.fg1 }} />
          <div className="absolute top-0 right-[15%] w-[1px] h-full opacity-30" style={{ backgroundColor: palette.fg1 }} />
        </>
      )}
      {decorType === 'circles' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] border-[1px] rounded-full opacity-20" style={{ borderColor: palette.fg1 }} />
      )}
    </div>
  );
};

export const SceneAEMaster: React.FC<SceneProps> = ({ palette, phase }) => {
  const isExiting = phase === 'EXIT';

  const layoutData = useMemo(() => {
    const words = Math.random() > 0.6 ?[randomChoice(PHRASES)] : [randomChoice(PHRASES), randomChoice(PHRASES)];
    
    return words.map((charArray, wordIndex) => {
      // 随机：是否 Wiggle、是否漂移、随机字距
      const hasWiggle = Math.random() > 0.4;
      const hasDrift = Math.random() > 0.5;
      const letterSpacing = randomChoice(['normal', '0.2em', '0.5em', '0.8em', '-0.05em']);

      // 决定入场与退场流派
      const enterTypes =['PARTICLE', 'DROP_SCALE', 'GIANT_SLIDE', 'TRAIL'];
      if (charArray.length === 4) enterTypes.push('FOUR_CORNER');
      const enterEffect = randomChoice(enterTypes);
      const exitEffect = randomChoice(['EXIT_TRAIL', 'EXIT_DROP', 'EXIT_SLICE']);

      const isGiant = enterEffect === 'GIANT_SLIDE' || Math.random() > 0.7;
      const baseSize = isGiant ? randomRange(15, 22) : randomRange(8, 12);
      
      const characters = charArray.map((char, charIdx) => {
        const delay = wordIndex * 0.3 + charIdx * 0.05; // 每个字符间隔 0.05秒
        
        // --- 1. 构建入场 Style ---
        const isEnterStepped = Math.random() > 0.5; // 随机抽帧
        let enterStyle: any = { 
          animationDelay: `${delay}s`, 
          animationTimingFunction: isEnterStepped ? 'steps(6, end)' : EASE_OUT, 
          animationFillMode: 'both',
          animationDuration: '0.8s'
        };

        if (enterEffect === 'PARTICLE') {
          enterStyle.animationName = 'aeEnterParticle';
          enterStyle['--offset-y'] = `${randomChoice([30, -30])}px`;
        } else if (enterEffect === 'DROP_SCALE') {
          enterStyle.animationName = 'aeEnterDropScale';
          enterStyle['--start-y'] = `${randomChoice([100, -100])}px`;
        } else if (enterEffect === 'FOUR_CORNER') {
          enterStyle.animationName = 'aeEnterScatter';
          enterStyle['--tx'] = charIdx % 2 === 0 ? '-15vw' : '15vw';
          enterStyle['--ty'] = charIdx < 2 ? '-15vh' : '15vh';
        } else if (enterEffect === 'GIANT_SLIDE') {
          enterStyle.animationName = 'aeEnterGiant';
          enterStyle['--slide-x'] = randomChoice(['-50vw', '50vw', '0px']);
          enterStyle['--slide-y'] = enterStyle['--slide-x'] === '0px' ? randomChoice(['-50vh', '50vh']) : '0px';
        } else if (enterEffect === 'TRAIL') {
          enterStyle.animationName = 'aeEnterTrail';
          const dx = randomChoice([-100, 100, 0]);
          const dy = dx === 0 ? randomChoice([-100, 100]) : 0;
          enterStyle['--trail-x'] = `${dx}vw`; enterStyle['--trail-y'] = `${dy}vh`;
          enterStyle['--trail-blur'] = Math.random() > 0.5 ? 'blur(10px)' : 'blur(0px)';
          enterStyle['--trail-shadow'] = enterStyle['--trail-blur'] === 'blur(0px)' 
            ? `${dx*0.2}px ${dy*0.2}px 0 ${palette.accent}, ${dx*0.4}px ${dy*0.4}px 0 ${palette.fg2}` : '0 0 0 transparent';
        }

        // --- 2. 构建退场 Style ---
        const isExitStepped = Math.random() > 0.5;
        let exitStyle: any = {
          animationDelay: `${charIdx * 0.05}s`,
          animationTimingFunction: isExitStepped ? 'steps(5, end)' : EASE_IN,
          animationFillMode: 'both',
          animationDuration: '0.6s'
        };

        if (exitEffect === 'EXIT_TRAIL') {
          exitStyle.animationName = 'aeExitTrail';
          const ex = randomChoice([-100, 100, 0]);
          const ey = ex === 0 ? randomChoice([-100, 100]) : 0;
          exitStyle['--exit-x'] = `${ex}vw`; exitStyle['--exit-y'] = `${ey}vh`;
          const hasEcho = Math.random() > 0.5;
          exitStyle['--exit-blur'] = hasEcho ? 'blur(0px)' : 'blur(10px)';
          exitStyle['--exit-shadow'] = hasEcho ? `${ex*0.1}px ${ey*0.1}px 0 ${palette.accent}` : '0 0 0 transparent';
        } else if (exitEffect === 'EXIT_DROP') {
          exitStyle.animationName = 'aeExitDrop';
        } else if (exitEffect === 'EXIT_SLICE') {
          exitStyle.animationName = 'aeExitSlice';
        }

        return { char, enterStyle, exitStyle };
      });

      return {
        id: wordIndex, characters, enterEffect,
        size: `${baseSize}vw`, letterSpacing, hasWiggle, hasDrift,
        driftDuration: baseSize * 0.5, driftRange: `${randomRange(1, 4)}vw`,
        subtext: randomChoice(DECOR_WORDS)
      };
    });
  }, [palette]); // 依赖 palette 刷新数据

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-center items-center" style={{ backgroundColor: palette.bg }}>
      <ScreenDecorations palette={palette} />

      <div className="flex flex-col gap-12 z-10 w-full items-center justify-center">
        {layoutData.map((wordObj) => (
          <div
            key={wordObj.id}
            className="relative flex items-center justify-center"
            style={{
              letterSpacing: wordObj.letterSpacing,
              // 如果没有漂移，就不绑定漂移动画，元素会自动完美居中
              ...(wordObj.hasDrift ? {
                '--drift-range': wordObj.driftRange,
                animation: `parallaxDrift ${wordObj.driftDuration}s linear infinite alternate`
              } : {}) as React.CSSProperties
            }}
          >
            {/* 随机抽帧 Wiggle 抖动 */}
            <div style={wordObj.hasWiggle ? { animation: 'posterizeWiggle 2.5s steps(1) infinite' } : {}}>
              
              <div className={`flex ${wordObj.enterEffect === 'FOUR_CORNER' ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'relative'} flex-row items-center justify-center`}>
                
                {wordObj.characters.map((charData, idx) => (
                  /* 退场动画包裹入场动画。只有 phase === 'EXIT' 时退场动画才生效 */
                  <div key={idx} className="relative flex flex-col items-center" style={isExiting ? charData.exitStyle : {}}>
                    
                    {/* 入场动画容器 */}
                    <div style={charData.enterStyle}>
                      <h1 className="font-black leading-[0.8] z-10 whitespace-nowrap" style={{ fontSize: wordObj.size, color: palette.fg1 }}>
                        {charData.char}
                      </h1>
                    </div>

                  </div>
                ))}
              </div>

              {/* 跟随文字的装饰性副标题 */}
              {wordObj.enterEffect !== 'FOUR_CORNER' && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.5em] uppercase opacity-60 z-10 whitespace-nowrap" style={{ color: palette.accent }}>
                  {wordObj.subtext}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SCENES = [SceneAEMaster];