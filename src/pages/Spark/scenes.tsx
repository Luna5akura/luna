// src/pages/Spark/scenes.tsx

import React, { useMemo } from 'react';
import { randomChoice, randomRange, DECOR_WORDS, EASE_OUT, EASE_IN } from './utils';

export interface SceneProps {
  palette: { bg: string; fg1: string; fg2: string; accent: string };
  phase: 'ENTER' | 'EXIT';
  effect: string;
  textPool: string[][];
}

const ScreenDecorations = ({ palette }: { palette: any }) => {
  const decorType = useMemo(() => randomChoice(['corners', 'grid-lines', 'none']),[]);
  if (decorType === 'none') return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-[80] overflow-hidden">
      {decorType === 'corners' && (
        <><div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4" style={{ borderColor: palette.accent }} />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4" style={{ borderColor: palette.accent }} /></>
      )}
      {decorType === 'grid-lines' && (
        <><div className="absolute top-[15%] left-0 w-full h-[1px] opacity-30" style={{ backgroundColor: palette.fg1 }} />
          <div className="absolute bottom-[15%] left-0 w-full h-[1px] opacity-30" style={{ backgroundColor: palette.fg1 }} /></>
      )}
    </div>
  );
};

export const SceneAEMaster: React.FC<SceneProps> = ({ palette, phase, effect, textPool }) => {
  const isExiting = phase === 'EXIT';

  const layoutData = useMemo(() => {
    // ★ 核心修复 1：严格过滤，只要 4 个字的词语。如果爬取的歌词里全都没有刚好 4 个字的，直接强制降级使用经典四字！
    const availableTexts = effect === 'FOUR_CORNER' 
      ? textPool.filter(t => t.length === 4) 
      : textPool;
    const safeTexts = availableTexts.length > 0 ? availableTexts : [["絶", "対", "防", "衛"]];
    
    // ★ 核心修复 2：四角散射和 3D 环形一样，必须强制为单行，不能出现两行一起炸的情况
    const lineCount = (effect === 'CIRCULAR_3D' || effect === 'FOUR_CORNER') ? 1 : (Math.random() > 0.5 ? 1 : 2);
    const words = Array.from({ length: lineCount }).map(() => randomChoice(safeTexts));
    
    const globalHasWiggle = Math.random() > 0.4;

    return words.map((charArray, wordIndex) => {
      const hasWiggle = globalHasWiggle;
      const hasDrift = Math.random() > 0.5;
      const enterEffect = effect;
      const exitEffect = randomChoice(['EXIT_TRAIL', 'EXIT_DROP', 'EXIT_SLICE']);
      
      // ★ 核心修复 3：为四角散射赋予独有的巨型字号，让其具有强烈的镇压感
      const baseSize = enterEffect === 'IMPACT_SHRINK'
        ? Math.min(randomRange(2.5, 4), 25 / charArray.length) 
        : enterEffect === 'FOUR_CORNER'
        ? randomRange(10, 16) 
        : Math.min(randomRange(3.5, 6), 40 / charArray.length);

      const impactAngle = Math.random() * Math.PI * 2;
      const startR = 200; 
      const impactStartX = Math.cos(impactAngle) * startR;
      const impactStartY = Math.sin(impactAngle) * startR;
      const jumpX = randomRange(-15, 15);
      const jumpY = randomRange(-15, 15);
      const impactDriftDistance = 40; 
      const impactDriftX = jumpX - Math.cos(impactAngle) * impactDriftDistance;
      const impactDriftY = jumpY - Math.sin(impactAngle) * impactDriftDistance;

      const driftAngle = Math.random() * Math.PI * 2;
      const driftDist = randomRange(10, 25); 
      const driftX = `${Math.cos(driftAngle) * driftDist}vw`;
      const driftY = `${Math.sin(driftAngle) * driftDist}vh`;
      const driftDuration = randomRange(10, 20); 

      const letterSpacing = enterEffect === 'IMPACT_SHRINK' 
        ? '4em' 
        : randomChoice(['1em', '1.2em', '1.5em']); 

      let processedChars = charArray;
      if (enterEffect === 'CIRCULAR_3D') {
        while (processedChars.length < 12) processedChars =[...processedChars, "・", ...charArray];
      }

      const characters = processedChars.map((char, charIdx) => {
        const isFourCorner = enterEffect === 'FOUR_CORNER';
        // ★ 核心修复 4：四角散射强制无间隔同步爆出（不随 charIdx 递增），实现 4 字同时爆发
        const delay = isFourCorner ? (wordIndex * 0.1) : (wordIndex * 0.1 + charIdx * 0.016); 
        
        let enterStyle: any = { 
          animationDelay: `${delay}s`, 
          animationTimingFunction: enterEffect === 'IMPACT_SHRINK' ? EASE_OUT : (Math.random() > 0.5 ? 'steps(6, end)' : EASE_OUT), 
          animationFillMode: 'both', 
          animationDuration: enterEffect === 'IMPACT_SHRINK' ? '0.5s' : isFourCorner ? '0.4s' : '0.25s'
        };
        let geoData = { rot: 0, radius: 0 };

        if (enterEffect === 'IMPACT_SHRINK') {
          enterStyle.animationName = 'aeImpactShrink';
          enterStyle['--start-x'] = `${impactStartX}vw`;
          enterStyle['--start-y'] = `${impactStartY}vh`;
          enterStyle['--jump-x'] = `${jumpX}vw`;
          enterStyle['--jump-y'] = `${jumpY}vh`;
          enterStyle['--drift-x'] = `${impactDriftX}vw`; 
          enterStyle['--drift-y'] = `${impactDriftY}vh`;
        } 
        else if (enterEffect === 'CIRCULAR_3D') {
          enterStyle.animationName = 'aeRingEnter';
          geoData.rot = (charIdx / processedChars.length) * 360;
          geoData.radius = Math.max(baseSize * 1.5, (processedChars.length * baseSize) / 5.5); 
        }
        else if (enterEffect === 'PARTICLE') { enterStyle.animationName = 'aeEnterParticle'; enterStyle['--offset-y'] = `${randomChoice([30, -30])}px`; }
        else if (enterEffect === 'DROP_SCALE') { 
          enterStyle.animationName = 'aeEnterDropScale'; 
          enterStyle.transformOrigin = 'center center'; 
        }
        else if (enterEffect === 'FOUR_CORNER') { 
          enterStyle.animationName = 'aeEnterScatter'; 
          // 彻底拉大坐标，直逼屏幕四个边缘死角
          const cornersX =['-40vw', '40vw', '-40vw', '40vw'];
          const cornersY =['-35vh', '-35vh', '35vh', '35vh'];
          enterStyle['--tx'] = cornersX[charIdx % 4]; 
          enterStyle['--ty'] = cornersY[charIdx % 4]; 
        }
        else if (enterEffect === 'GIANT_SLIDE') { enterStyle.animationName = 'aeEnterGiant'; enterStyle['--slide-x'] = randomChoice(['-50vw', '50vw', '0px']); enterStyle['--slide-y'] = enterStyle['--slide-x'] === '0px' ? randomChoice(['-50vh', '50vh']) : '0px'; }
        else if (enterEffect === 'TRAIL') { enterStyle.animationName = 'aeEnterTrail'; const dx = randomChoice([-100, 100, 0]); const dy = dx === 0 ? randomChoice([-100, 100]) : 0; enterStyle['--trail-x'] = `${dx}vw`; enterStyle['--trail-y'] = `${dy}vh`; enterStyle['--trail-blur'] = 'blur(10px)'; enterStyle['--trail-shadow'] = '0 0 0 transparent'; }

        let exitStyle: any = { animationDelay: `${charIdx * 0.016}s`, animationTimingFunction: Math.random() > 0.5 ? 'steps(5, end)' : EASE_IN, animationFillMode: 'both', animationDuration: '0.3s' };
        if (exitEffect === 'EXIT_TRAIL') { exitStyle.animationName = 'aeExitTrail'; const ex = randomChoice([-100, 100, 0]); const ey = ex === 0 ? randomChoice([-100, 100]) : 0; exitStyle['--exit-x'] = `${ex}vw`; exitStyle['--exit-y'] = `${ey}vh`; exitStyle['--exit-blur'] = 'blur(10px)'; exitStyle['--exit-shadow'] = '0 0 0 transparent'; }
        else if (exitEffect === 'EXIT_DROP') { exitStyle.animationName = 'aeExitDrop'; }
        else if (exitEffect === 'EXIT_SLICE') { exitStyle.animationName = 'aeExitSlice'; }

        return { char, enterStyle, exitStyle, geoData };
      });

      return { 
        id: wordIndex, 
        characters, 
        enterEffect, 
        size: `${baseSize}vw`, 
        letterSpacing, 
        hasWiggle, 
        hasDrift, 
        driftDuration, 
        driftX, 
        driftY, 
        subtext: randomChoice(DECOR_WORDS) 
      };
    });
  },[palette, effect, textPool]);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-center items-center" style={{ backgroundColor: palette.bg }}>
      <ScreenDecorations palette={palette} />

      <div className="flex flex-col gap-12 z-10 w-full items-center justify-center px-4">
        {layoutData.map((wordObj) => {
          if (wordObj.enterEffect === 'CIRCULAR_3D') {
            const LAYERS = 30; 
            return (
              <div key={wordObj.id} className="absolute top-1/2 left-1/2 w-0 h-0" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
                <div className="absolute top-0 left-0 w-0 h-0" style={{ animation: 'circularSpin 15s linear infinite' }}>
                  {wordObj.characters.map((charData, idx) => (
                    <div key={idx} className="absolute top-0 left-0 w-0 h-0" style={charData.enterStyle}>
                       {Array.from({ length: LAYERS }).map((_, i) => {
                          const f = 1 - (i / LAYERS);
                          const isTop = i === 0;
                          return (
                            <h1 key={i} className="absolute font-black leading-none whitespace-nowrap"
                              style={{
                                transform: `scale(${f}) rotate(${charData.geoData.rot}deg) translateY(-${charData.geoData.radius}vw) translate(-50%, -50%)`,
                                fontSize: wordObj.size,
                                color: isTop ? palette.bg : palette.fg2,
                                WebkitTextStroke: isTop ? `1.5px ${palette.accent}` : `0px`,
                                zIndex: LAYERS - i,
                                opacity: isTop ? 1 : Math.max(0, f * 1.5)
                              }}
                            >
                              {charData.char}
                            </h1>
                          )
                       })}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={wordObj.id} className="relative flex items-center justify-center"
              style={{
                letterSpacing: wordObj.letterSpacing,
                ...(wordObj.hasDrift ? { 
                  '--drift-x': wordObj.driftX, 
                  '--drift-y': wordObj.driftY,
                  animation: `parallaxDrift ${wordObj.driftDuration}s linear forwards` 
                } : {}) as any
              }}>
              <div style={wordObj.hasWiggle ? { animation: 'posterizeWiggle 2.5s steps(1) infinite' } : {}}>
                
                {/* ★ 核心修复 5：完全去除旧版混乱的定位控制 */}
                <div className={`flex relative flex-row items-center justify-center ${wordObj.enterEffect === 'IMPACT_SHRINK' ? 'flex-nowrap whitespace-nowrap' : 'flex-wrap md:flex-nowrap max-w-[100vw]'}`}>
                  
                  {wordObj.characters.map((charData, idx) => (
                    // ★ 核心修复 6：如果为 FOUR_CORNER，外层包裹强制使用 absolute 绝对定位。
                    // 因为父容器本身就是 relative flex justify-center，absolute 元素会完美折叠在屏幕的正中心点！然后通过 translate 无误差射向四周。
                    <div key={idx} className={`${wordObj.enterEffect === 'FOUR_CORNER' ? 'absolute' : 'relative'} flex flex-col items-center`} style={isExiting ? charData.exitStyle : {}}>
                      <div style={charData.enterStyle}>
                        <h1 className="font-black leading-[0.8] z-10 whitespace-nowrap drop-shadow-lg" style={{ fontSize: wordObj.size, color: palette.fg1 }}>
                          {charData.char}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
                {wordObj.enterEffect !== 'FOUR_CORNER' && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[8px] md:text-[10px] transform scale-50 md:scale-75 tracking-[0.6em] uppercase opacity-80 z-10 whitespace-nowrap px-2 py-0.5" style={{ color: palette.accent }}>
                    {wordObj.subtext}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const SCENES =[SceneAEMaster];