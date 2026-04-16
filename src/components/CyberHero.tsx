// src/components/CyberHero.tsx
import React, { useEffect, useRef, useMemo, memo } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// 量子级深海色彩（更高级、更具未来感）
const FRONT_COLORS = new Array(101);
const BACK_COLORS = new Array(101);
for (let i = 0; i <= 100; i++) {
  const d = i / 100;
  FRONT_COLORS[i] = `rgba(6, 78, 99, ${d * 0.82})`;
  BACK_COLORS[i] = `rgba(15, 23, 42, ${d * 0.78})`;
}

const FRONT_FONT = 'bold 11px "JetBrains Mono", monospace';
const BACK_FONT = '9.5px "JetBrains Mono", monospace';
const CHAR_SET = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', 'X', 'Z', '◉'];

const useCyberGlitch = (text: string, delay: number = 0) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    timeout = setTimeout(() => {
      let iterations = 0;
      interval = setInterval(() => {
        if (!ref.current) return;
        ref.current.innerText = text
          .split('')
          .map((letter, index) => (index < iterations ? text[index] : chars[Math.floor(Math.random() * chars.length)]))
          .join('');
        if (iterations >= text.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 28);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);
  return ref;
};

const DataSphere = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = 1;

    const POINTS_COUNT = 520;
    let sphereRadius = Math.min(width, height) * 0.27;

    const x = new Float32Array(POINTS_COUNT);
    const y = new Float32Array(POINTS_COUNT);
    const z = new Float32Array(POINTS_COUNT);
    const chars = new Array(POINTS_COUNT);

    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < POINTS_COUNT; i++) {
      const currentY = 1 - (i / (POINTS_COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - currentY * currentY);
      const theta = phi * i;
      x[i] = Math.cos(theta) * radiusAtY;
      y[i] = currentY;
      z[i] = Math.sin(theta) * radiusAtY;
      chars[i] = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
    }

    const projectedX = new Float32Array(POINTS_COUNT);
    const projectedY = new Float32Array(POINTS_COUNT);
    const projectedZ = new Float32Array(POINTS_COUNT);
    const indices = new Int32Array(POINTS_COUNT);

    let angleX = 0;
    let angleY = 0;
    let animationId: number;
    let isRunning = false;
    let lastFrameTime = 0;
    let scrollBoostUntil = 0;

    let targetVelocityX = 0.0009;
    let targetVelocityY = 0.0009;

    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      sphereRadius = Math.min(width, height) * 0.27;
    };

    const onMouseMove = (e: MouseEvent) => {
      targetVelocityY = ((e.clientX / width) - 0.5) * 0.014;
      targetVelocityX = ((e.clientY / height) - 0.5) * 0.014;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onScroll = () => {
      scrollBoostUntil = performance.now() + 180;
    };

    const stop = () => {
      if (!isRunning) return;
      isRunning = false;
      cancelAnimationFrame(animationId);
    };

    const start = () => {
      if (isRunning) return;
      isRunning = true;
      animationId = requestAnimationFrame(animate);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        lastFrameTime = 0;
        start();
      }
    };

    const animate = (now: number) => {
      const isScrollActive = now < scrollBoostUntil;
      const minFrameInterval = isScrollActive ? 1000 / 36 : 1000 / 48;
      if (lastFrameTime !== 0 && now - lastFrameTime < minFrameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = now;

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(2, 4, 10, 0.97)';
      ctx.fillRect(0, 0, width, height);

      angleX += targetVelocityX;
      angleY += targetVelocityY;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      for (let i = 0; i < POINTS_COUNT; i++) {
        const y1 = y[i] * cosX - z[i] * sinX;
        const z1 = y[i] * sinX + z[i] * cosX;
        const x2 = x[i] * cosY + z1 * sinY;
        const z2 = -x[i] * sinY + z1 * cosY;
        projectedX[i] = x2;
        projectedY[i] = y1;
        projectedZ[i] = z2;
        indices[i] = i;
      }
      indices.sort((a, b) => projectedZ[a] - projectedZ[b]);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const fov = 850;
      const cx = width / 2;
      const cy = height / 2;

      let currentFont = '';
      let currentColor = '';

      const activeNodes: { x: number; y: number }[] = [];

      for (let i = 0; i < POINTS_COUNT; i++) {
        const idx = indices[i];
        const pz = projectedZ[idx];
        const depthNormalized = (pz + 1) / 2;
        if (depthNormalized < 0.06) continue;

        const scale = fov / (fov + pz * sphereRadius);
        let screenX = cx + projectedX[idx] * sphereRadius * scale;
        let screenY = cy + projectedY[idx] * sphereRadius * scale;

        const dx = screenX - mouseX;
        const dy = screenY - mouseY;
        const distSq = dx * dx + dy * dy;
        const repulseRadius = 130;

        let isOverloaded = false;
        if (distSq < repulseRadius * repulseRadius) {
          const dist = Math.sqrt(distSq);
          const force = (repulseRadius - dist) / repulseRadius;
          screenX += (dx / dist) * force * 11;
          screenY += (dy / dist) * force * 11;
          isOverloaded = true;
          if (activeNodes.length < 14) activeNodes.push({ x: screenX, y: screenY });
          if (Math.random() < 0.022) chars[idx] = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
        }

        const isFront = depthNormalized > 0.84;
        let targetFont = isFront ? FRONT_FONT : BACK_FONT;
        if (currentFont !== targetFont) {
          ctx.font = targetFont;
          currentFont = targetFont;
        }

        let targetColor = isOverloaded
          ? 'rgba(6, 182, 212, 0.55)'
          : isFront
            ? FRONT_COLORS[Math.min(100, Math.floor(depthNormalized * 100))]
            : BACK_COLORS[Math.min(100, Math.floor(depthNormalized * 100))];

        if (currentColor !== targetColor) {
          ctx.fillStyle = targetColor;
          currentColor = targetColor;
        }
        ctx.fillText(chars[idx], screenX, screenY);
      }

      // 高级神经网络脉冲连线
      if (!isScrollActive && activeNodes.length > 1) {
        ctx.beginPath();
        for (let i = 0; i < activeNodes.length; i++) {
          for (let j = i + 1; j < activeNodes.length; j++) {
            const dx = activeNodes[i].x - activeNodes[j].x;
            const dy = activeNodes[i].y - activeNodes[j].y;
            if (dx * dx + dy * dy < 11000) {
              ctx.moveTo(activeNodes[i].x, activeNodes[i].y);
              ctx.lineTo(activeNodes[j].x, activeNodes[j].y);
            }
          }
        }
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.22)';
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // 量子核心光核（中心脉冲）
      const corePulse = Math.sin(now / 800) * 0.3 + 0.7;
      ctx.shadowBlur = isScrollActive ? 30 : 60;
      ctx.shadowColor = '#06b6d4';
      ctx.fillStyle = `rgba(6, 182, 212, ${0.12 * corePulse})`;
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 全息轨道环（双层）
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 1.22, angleX * 0.8, angleX * 0.8 + Math.PI * 0.6);
      ctx.strokeStyle = 'rgba(6, 78, 99, 0.35)';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 1.38, -angleY * 0.7, -angleY * 0.7 + Math.PI * 0.45);
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.28)';
      ctx.stroke();

      // 极弱干扰
      if (!isScrollActive && Math.random() < 0.0035) {
        const sliceY = Math.random() * height;
        const sliceH = 12 + Math.random() * 8;
        const shiftX = (Math.random() - 0.5) * 18;
        ctx.drawImage(canvas, 0, sliceY, width, sliceH, shiftX, sliceY, width, sliceH);
        ctx.fillStyle = 'rgba(6, 78, 99, 0.25)';
        ctx.fillRect(shiftX, sliceY, width, sliceH);
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    start();

    return () => {
      stop();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-75 blur-[0.6px]" />;
});
DataSphere.displayName = 'DataSphere';

const HexMemoryGrid = memo(() => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const smoothX = useSpring(mouseX, { damping: 35, stiffness: 160 });
  const smoothY = useSpring(mouseY, { damping: 35, stiffness: 160 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', updateMouse, { passive: true });
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [mouseX, mouseY]);

  const maskImage = useMotionTemplate`radial-gradient(460px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  const hexString = useMemo(() => {
    const count = 1580;
    let str = '';
    for (let i = 0; i < count; i += 4) {
      str += Math.floor(Math.random() * 0xFFFFFFFF)
        .toString(16)
        .padStart(8, '0')
        .toUpperCase()
        .replace(/(.{2})/g, '$1 ');
    }
    return str;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-9">
      <motion.div
        className="absolute inset-0 flex items-start justify-center p-8"
        style={{ WebkitMaskImage: maskImage, maskImage }}
        animate={{ translateY: ['0%', '-7%'] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        <div className="text-[10px] font-mono text-[#0e7490] opacity-35 select-none leading-[2.7] w-full break-words text-center">
          {hexString}
        </div>
      </motion.div>
    </div>
  );
});
HexMemoryGrid.displayName = 'HexMemoryGrid';

const CyberHeroComponent: React.FC = () => {
  const metricRef = useCyberGlitch('[ QUANTUM CORE ONLINE ]', 1100);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#02040a] font-mono">
      {/* 极弱全息边框 */}
      <div className="absolute inset-0 border border-cyan-400/5 pointer-events-none z-40" />

      {/* 坐标网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:68px_68px] opacity-6" />

      <HexMemoryGrid />
      <DataSphere />

      {/* 高级扫描线（带微弱拖尾） */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[3px] bg-[#0ea5e9] opacity-20 shadow-[0_0_22px_3px_rgba(14,165,233,0.18)] z-30"
        animate={{ translateY: ['0vh', '100vh'] }}
        transition={{ duration: 13, ease: "linear", repeat: Infinity }}
      />

      {/* 超级暗角 + 全息暗边 */}
      <div className="absolute inset-0 z-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,4,10,0.98)_100%)]" />

      {/* 负向 CRT 扫描线 */}
      <div className="absolute inset-0 z-40 pointer-events-none opacity-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,#000000_3px,#000000_6px)]" />

      {/* 底部遮罩 */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#02040a] via-[#02040a]/96 to-transparent z-50" />
    </div>
  );
};

export const CyberHero = memo(CyberHeroComponent);
CyberHero.displayName = 'CyberHero';
