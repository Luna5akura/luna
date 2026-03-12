// src/pages/Spark/styles.tsx

import React from 'react';

export const PVKeyframes = () => (
  <style>{`
    @keyframes aeImpactShrink {
      0% { opacity: 0; transform: translate(var(--start-x), var(--start-y)) scale(50); }
      1% { opacity: 1; transform: translate(calc(var(--start-x) * 0.9), calc(var(--start-y) * 0.9)) scale(50); }
      8% { opacity: 1; transform: translate(calc(var(--start-x) * 0.2), calc(var(--start-y) * 0.2)) scale(50); }
      8.1% { opacity: 1; transform: translate(var(--jump-x), var(--jump-y)) scale(1); }
      100% { opacity: 1; transform: translate(var(--drift-x), var(--drift-y)) scale(1); }
    }

    @keyframes aeRingEnter {
      0% { opacity: 0; transform: scale(0); }
      40% { opacity: 1; transform: scale(1.1); }
      100% { opacity: 1; transform: scale(1); }
    }

    @keyframes circularSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes aeEnterParticle { 0% { opacity: 0; filter: blur(20px) contrast(300%); transform: scale(1.5) translateY(var(--offset-y)); } 10% { opacity: 1; } 100% { opacity: 1; filter: blur(0px) contrast(100%); transform: scale(1) translateY(0); } }
    
    @keyframes aeEnterDropScale { 
      0% { opacity: 0; transform: scale(15); } 
      1% { opacity: 1; transform: scale(14.8); } 
      100% { opacity: 1; transform: scale(1); } 
    }
    
    /* ★ 重构 FOUR_CORNER 动画：起手处于屏幕正中心并旋转，瞬间复位砸向屏幕角落边缘 */
    @keyframes aeEnterScatter { 
      0% { opacity: 0; transform: translate(0, 0) scale(4) rotate(90deg); filter: blur(20px); } 
      1% { opacity: 1; transform: translate(0, 0) scale(4) rotate(90deg); filter: blur(20px); } 
      100% { opacity: 1; transform: translate(var(--tx), var(--ty)) scale(1) rotate(0deg); filter: blur(0px); } 
    }

    @keyframes aeEnterGiant { 0% { opacity: 0; transform: translate(var(--slide-x), var(--slide-y)) skewX(-30deg) scale(2); } 1% { opacity: 1; } 100% { opacity: 1; transform: translate(0, 0) skewX(0deg) scale(1); } }
    @keyframes aeEnterTrail { 0% { opacity: 0; transform: translate(var(--trail-x), var(--trail-y)); filter: var(--trail-blur); text-shadow: var(--trail-shadow); } 100% { opacity: 1; transform: translate(0, 0); filter: blur(0px); text-shadow: 0 0 0 transparent; } }
    
    @keyframes aeExitTrail { 0% { opacity: 1; transform: translate(0,0); filter: blur(0px); text-shadow: 0 0 0 transparent; } 100% { opacity: 0; transform: translate(var(--exit-x), var(--exit-y)); filter: var(--exit-blur); text-shadow: var(--exit-shadow); } }
    @keyframes aeExitDrop { 0% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(50vh) scaleY(3) scaleX(0.2); } }
    @keyframes aeExitSlice { 0% { opacity: 1; transform: translateX(0) skewX(0); } 100% { opacity: 0; transform: translateX(-100vw) skewX(45deg); } }

    @keyframes posterizeWiggle { 0% { transform: translate(0px, 0px); } 20% { transform: translate(-3px, 2px) scale(1.02); } 40% { transform: translate(4px, -3px) skewX(1deg); } 60% { transform: translate(-2px, -4px); } 80% { transform: translate(3px, 1px) skewX(-1deg); } 100% { transform: translate(-1px, 3px); } }
    
    @keyframes parallaxDrift { 
      0% { transform: translate(0vw, 0vh); } 
      100% { transform: translate(var(--drift-x), var(--drift-y)); } 
    }
  `}</style>
);