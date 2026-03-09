// src/pages/Spark/styles.tsx

import React from 'react';

export const PVKeyframes = () => (
  <style>{`
    /* ================= 入场动画 ================= */
    /* 1. 粒子聚集 */
    @keyframes aeEnterParticle {
      0% { opacity: 0; filter: blur(20px) contrast(300%); transform: scale(1.5) translateY(var(--offset-y)); }
      100% { opacity: 1; filter: blur(0px) contrast(100%); transform: scale(1) translateY(0); }
    }
    /* 2. 缩放砸入 */
    @keyframes aeEnterDropScale {
      0% { opacity: 0; transform: scale(3) translateY(var(--start-y)); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    /* 3. 四角发散 */
    @keyframes aeEnterScatter {
      0% { opacity: 0; transform: translate(0, 0) scale(0) rotate(90deg); }
      100% { opacity: 1; transform: translate(var(--tx), var(--ty)) scale(1) rotate(0deg); }
    }
    /* 4. 巨型切入 */
    @keyframes aeEnterGiant {
      0% { opacity: 0; transform: translate(var(--slide-x), var(--slide-y)) skewX(-30deg); }
      100% { opacity: 1; transform: translate(0, 0) skewX(0deg); }
    }
    /* 5. 拖影入场 */
    @keyframes aeEnterTrail {
      0% { opacity: 0; transform: translate(var(--trail-x), var(--trail-y)); filter: var(--trail-blur); text-shadow: var(--trail-shadow); }
      100% { opacity: 1; transform: translate(0, 0); filter: blur(0px); text-shadow: 0 0 0 transparent; }
    }

    /* ================= 退场动画 ================= */
    /* 1. 拖影离场 (加速逃逸) */
    @keyframes aeExitTrail {
      0% { opacity: 1; transform: translate(0,0); filter: blur(0px); text-shadow: 0 0 0 transparent; }
      100% { opacity: 0; transform: translate(var(--exit-x), var(--exit-y)); filter: var(--exit-blur); text-shadow: var(--exit-shadow); }
    }
    /* 2. 下坠撕裂 */
    @keyframes aeExitDrop {
      0% { opacity: 1; transform: translateY(0) scale(1); }
      100% { opacity: 0; transform: translateY(50vh) scaleY(3) scaleX(0.2); }
    }
    /* 3. 极速横切 */
    @keyframes aeExitSlice {
      0% { opacity: 1; transform: translateX(0) skewX(0); }
      100% { opacity: 0; transform: translateX(-100vw) skewX(45deg); }
    }

    /* ================= 持续状态 ================= */
    /* 抽帧 Wiggle */
    @keyframes posterizeWiggle {
      0% { transform: translate(0px, 0px); }
      20% { transform: translate(-3px, 2px) scale(1.02); }
      40% { transform: translate(4px, -3px) skewX(1deg); }
      60% { transform: translate(-2px, -4px); }
      80% { transform: translate(3px, 1px) skewX(-1deg); }
      100% { transform: translate(-1px, 3px); }
    }

    /* 视差漂移 */
    @keyframes parallaxDrift {
      0% { transform: translateX(calc(-1 * var(--drift-range))); }
      100% { transform: translateX(var(--drift-range)); }
    }
  `}</style>
);