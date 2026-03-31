// src/components/CyberHero.tsx
import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const FRONT_COLORS = new Array(101);
const BACK_COLORS = new Array(101);
for (let i = 0; i <= 100; i++) {
  const d = i / 100;
  FRONT_COLORS[i] = `rgba(0, 0, 0, ${d * 0.8})`;
  BACK_COLORS[i] = `rgba(80, 80, 80, ${d * 0.6})`;
}
const FRONT_FONT = 'bold 10px "Courier New", monospace';
const BACK_FONT = '9px "Courier New", monospace';
const CHAR_SET = ['0','1','0','1','X','Z','A','B','C','D','E','F'];

const useCyberGlitch = (text: string, delay: number = 0) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let timeout: NodeJS.Timeout, interval: NodeJS.Timeout;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    timeout = setTimeout(() => {
      let iterations = 0;
      interval = setInterval(() => {
        if (!ref.current) return;
        ref.current.innerText = text.split('').map((letter, index) => index < iterations ? text[index] : chars[Math.floor(Math.random() * chars.length)]).join('');
        if (iterations >= text.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 30);
    }, delay);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [text, delay]);
  return ref;
};

const DataSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    let width = window.innerWidth, height = window.innerHeight;
    canvas.width = width; canvas.height = height;
    const POINTS_COUNT = 500;
    let sphereRadius = Math.min(width, height) * 0.28;
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
    let angleX = 0, angleY = 0, animationId: number;
    let targetVelocityX = 0.001, targetVelocityY = 0.001;
    let mouseX = -1000, mouseY = -1000;
    const onMouseMove = (e: MouseEvent) => {
      targetVelocityY = ((e.clientX / width) - 0.5) * 0.01;
      targetVelocityX = ((e.clientY / height) - 0.5) * 0.01;
      mouseX = e.clientX; mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
      sphereRadius = Math.min(width, height) * 0.28;
    };
    window.addEventListener('resize', resize, { passive: true });
    const animate = () => {
      ctx.fillStyle = '#ece9d8';
      ctx.fillRect(0, 0, width, height);
      angleX += targetVelocityX; angleY += targetVelocityY;
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      for (let i = 0; i < POINTS_COUNT; i++) {
        const y1 = y[i] * cosX - z[i] * sinX;
        const z1 = y[i] * sinX + z[i] * cosX;
        const x2 = x[i] * cosY + z1 * sinY;
        const z2 = -x[i] * sinY + z1 * cosY;
        projectedX[i] = x2; projectedY[i] = y1; projectedZ[i] = z2;
        indices[i] = i;
      }
      indices.sort((a, b) => projectedZ[a] - projectedZ[b]);
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const fov = 800, cx = width / 2, cy = height / 2;
      let currentFont = '', currentColor = '';
      for (let i = 0; i < POINTS_COUNT; i++) {
        const idx = indices[i];
        const pz = projectedZ[idx];
        const depthNormalized = (pz + 1) / 2;
        if (depthNormalized < 0.1) continue;
        const scale = fov / (fov + pz * sphereRadius);
        let screenX = cx + projectedX[idx] * sphereRadius * scale;
        let screenY = cy + projectedY[idx] * sphereRadius * scale;
        const dx = screenX - mouseX, dy = screenY - mouseY;
        const distSq = dx * dx + dy * dy;
        if (distSq < 10000) {
          const dist = Math.sqrt(distSq);
          const force = (100 - dist) / 100;
          screenX += (dx / dist) * force * 8;
          screenY += (dy / dist) * force * 8;
          if (Math.random() < 0.02) chars[idx] = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
        }
        const isFront = depthNormalized > 0.85;
        const targetFont = isFront ? FRONT_FONT : BACK_FONT;
        if (currentFont !== targetFont) { ctx.font = targetFont; currentFont = targetFont; }
        const colorIdx = Math.min(100, Math.max(0, Math.floor(depthNormalized * 100)));
        const targetColor = isFront ? FRONT_COLORS[colorIdx] : BACK_COLORS[colorIdx];
        if (currentColor !== targetColor) { ctx.fillStyle = targetColor; currentColor = targetColor; }
        ctx.fillText(chars[idx], screenX, screenY);
      }
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 1.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      ctx.stroke();
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-80" />;
};

const HexMemoryGrid: React.FC = () => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 200, mass: 0.5 });
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('mousemove', updateMouse, { passive: true });
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [mouseX, mouseY]);
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;
  const hexString = useMemo(() => {
    let str = '';
    for (let i = 0; i < 1200; i += 4) str += Math.floor(Math.random() * 0xFFFFFFFF).toString(16).padStart(8, '0').toUpperCase().replace(/(.{2})/g, '$1   ');
    return str;
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      <motion.div className="absolute inset-0 flex items-start justify-center p-8" style={{ WebkitMaskImage: maskImage, maskImage }} animate={{ translateY: ['0%', '-3%'] }} transition={{ duration: 30, ease: "linear", repeat: Infinity }}>
        <div className="text-[9px] font-mono text-gray-600 select-none leading-[2] w-full break-words text-center">
          {hexString}
        </div>
      </motion.div>
    </div>
  );
};

export const CyberHero: React.FC = () => {
  const metricRef = useCyberGlitch('[ SYSTEM PROPERTIES ]', 800);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#ece9d8] font-mono">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      <HexMemoryGrid />
      <DataSphere />
      <motion.div className="absolute top-0 left-0 w-full h-[2px] bg-gray-500 opacity-20 z-20" animate={{ translateY: ['0vh', '100vh'] }} transition={{ duration: 15, ease: "linear", repeat: Infinity }} />
      <div className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(236,233,216,0.9)_100%)]" />
      <div className="absolute inset-0 z-30 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#000000_1px,#000000_2px)]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ece9d8] to-transparent z-40" />
    </div>
  );
};