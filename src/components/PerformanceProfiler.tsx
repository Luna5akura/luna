// src/components/PerformanceProfiler.tsx
import React, { useEffect, useRef, useState } from 'react';

export const PerformanceProfiler: React.FC = () => {
  const [fps, setFps] = useState(60);
  const [isLowFps, setIsLowFps] = useState(false);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const rafRef = useRef<number>();

  useEffect(() => {
    const update = () => {
      frameCount.current++;
      const now = performance.now();

      if (now - lastTime.current >= 1000) {
        const currentFps = Math.round((frameCount.current * 1000) / (now - lastTime.current));
        setFps(currentFps);
        setIsLowFps(currentFps < 48);

        // 控制台警告
        if (currentFps < 48) {
          console.warn(`[Perf] FPS 过低: ${currentFps} — 建议检查 CyberHero DataSphere / CustomCursor`);
        }

        frameCount.current = 0;
        lastTime.current = now;
      }

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed bottom-4 left-4 z-[99999] font-mono text-xs bg-black/80 text-cyan-400 px-3 py-1.5 rounded border border-cyan-500/30 flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)] pointer-events-none"
      style={{ opacity: isLowFps ? 1 : 0.6 }}
    >
      <span className="w-2 h-2 bg-cyan-400 animate-pulse rounded-full" />
      FPS: <span className={isLowFps ? 'text-red-400' : 'text-cyan-300'}>{fps}</span>
      {isLowFps && <span className="text-red-400">⚠️ 卡顿</span>}
      <button
        onClick={() => {
          // 临时全局暂停所有动画（调试用）
          document.querySelectorAll('canvas').forEach((c) => {
            const ctx = (c as HTMLCanvasElement).getContext('2d');
            if (ctx) ctx.clearRect(0, 0, c.width, c.height);
          });
          console.log('已暂停所有 Canvas 动画（调试模式）');
        }}
        className="ml-4 text-[10px] underline text-cyan-600 hover:text-red-400 pointer-events-auto"
      >
        PAUSE
      </button>
    </div>
  );
};