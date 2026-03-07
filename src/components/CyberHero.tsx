// src/components/CyberHero.tsx
import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// ==========================================
// 【极致优化点 1：预计算色彩空间字典 (Color Dictionary Cache)】
// ==========================================
const FRONT_COLORS = new Array(101);
const BACK_COLORS = new Array(101);
for (let i = 0; i <= 100; i++) {
  const d = i / 100;
  FRONT_COLORS[i] = `rgba(34, 211, 238, ${d})`; // cyan-400
  BACK_COLORS[i] = `rgba(100, 116, 139, ${d * 0.6})`; // slate-500
}

const FRONT_FONT = 'bold 12px "JetBrains Mono", monospace';
const BACK_FONT = '10px "JetBrains Mono", monospace';
const CHAR_SET =['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '1', '0', 'X', 'Z']; // 加入少量异常字符

// ==========================================
// 【高超技术 1：Direct-DOM 文本解密引擎】
// 绕过 React 渲染周期，直接操作真实 DOM，实现 60fps 零开销文字闪烁
// ==========================================
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
          .map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        
        if (iterations >= text.length) clearInterval(interval);
        iterations += 1 / 3; // 控制解密速度
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);
  return ref;
};


// ==========================================
// 【底层 3D 图形学数学引擎 & 视觉后处理】
// ==========================================
const DataSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const POINTS_COUNT = 900;
    let sphereRadius = Math.min(width, height) * 0.35;
    
    // SOA (Structure of Arrays) 内存结构
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
    
    let targetVelocityX = 0.002;
    let targetVelocityY = 0.002;
    
    // 【高超技术 2：记录屏幕坐标系下的真实鼠标位置】
    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      targetVelocityY = ((e.clientX / width) - 0.5) * 0.06;
      targetVelocityX = ((e.clientY / height) - 0.5) * 0.06;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      sphereRadius = Math.min(width, height) * 0.35;
    };
    window.addEventListener('resize', resize, { passive: true });

    const animate = () => {
      // 【高超技术 3：时序动态模糊 (Temporal Motion Blur)】
      // 放弃 clearRect，使用带有 Alpha 的纯黑底色覆盖，保留上一帧的残影
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(5, 5, 5, 0.7)'; 
      ctx.fillRect(0, 0, width, height);

      // 切换为屏幕混合模式，让文字发光叠加
      ctx.globalCompositeOperation = 'screen';

      angleX += targetVelocityX;
      angleY += targetVelocityY;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // 1. 矩阵变换
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

      // 2. 画家算法：V8 快排
      indices.sort((a, b) => projectedZ[a] - projectedZ[b]);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const fov = 800; 
      const cx = width / 2;
      const cy = height / 2;

      let currentFont = '';
      let currentColor = '';

      // 3. 渲染管线
      for (let i = 0; i < POINTS_COUNT; i++) {
        const idx = indices[i];
        const pz = projectedZ[idx];
        
        const depthNormalized = (pz + 1) / 2; 
        if (depthNormalized < 0.1) continue; 

        const scale = fov / (fov + pz * sphereRadius);
        let screenX = cx + projectedX[idx] * sphereRadius * scale;
        let screenY = cy + projectedY[idx] * sphereRadius * scale;

        // 【高超技术 4：Screen-Space Repulsion 屏幕空间引力/斥力场】
        // 当鼠标靠近某个字符时，将其向外推开，并触发过载发光
        const dx = screenX - mouseX;
        const dy = screenY - mouseY;
        const distSq = dx * dx + dy * dy;
        const repulseRadius = 150;
        let isOverloaded = false;

        if (distSq < repulseRadius * repulseRadius) {
          const dist = Math.sqrt(distSq);
          const force = (repulseRadius - dist) / repulseRadius;
          screenX += (dx / dist) * force * 40; // 斥力推演
          screenY += (dy / dist) * force * 40;
          isOverloaded = true;
          // 极小概率字符发生物理变异
          if (Math.random() < 0.05) chars[idx] = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
        }

        const isFront = depthNormalized > 0.85;
        let targetFont = isFront ? FRONT_FONT : BACK_FONT;
        if (isOverloaded) targetFont = 'bold 16px "JetBrains Mono", monospace'; // 局部放大

        if (currentFont !== targetFont) {
          ctx.font = targetFont;
          currentFont = targetFont;
        }

        // 颜色解析
        let targetColor = '';
        if (isOverloaded) {
          targetColor = '#ffffff'; // 纯白高光过载
        } else {
          const colorIdx = Math.min(100, Math.max(0, Math.floor(depthNormalized * 100)));
          targetColor = isFront ? FRONT_COLORS[colorIdx] : BACK_COLORS[colorIdx];
        }

        if (currentColor !== targetColor) {
          ctx.fillStyle = targetColor;
          currentColor = targetColor;
        }

        ctx.fillText(chars[idx], screenX, screenY);
      }

      // 【高超技术 5：Hardware-Accelerated Glitch (硬件级像素撕裂)】
      // 随机对 Canvas 的某几行像素进行直接平移，模拟信号干扰
      if (Math.random() < 0.015) {
        const sliceY = Math.random() * height;
        const sliceH = Math.random() * 30 + 5; // 撕裂高度
        const shiftX = (Math.random() - 0.5) * 50; // 水平偏移
        // 利用 Canvas 自身的 drawImage 实现极低开销的像素移动
        ctx.drawImage(canvas, 0, sliceY, width, sliceH, shiftX, sliceY, width, sliceH);
        
        // 色差模拟 (Chromatic Aberration fake)
        ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
        ctx.fillRect(shiftX, sliceY, width, sliceH);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  },[]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />;
};


// ==========================================
// 【十六进制内存阵列：极致去 DOM 化】
// ==========================================
const HexMemoryGrid: React.FC = () => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', updateMouse, { passive: true });
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [mouseX, mouseY]);

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  const hexString = useMemo(() => {
    const count = 1200;
    let str = '';
    for (let i = 0; i < count; i += 4) {
      str += Math.floor(Math.random() * 0xFFFFFFFF)
        .toString(16)
        .padStart(8, '0')
        .toUpperCase()
        .replace(/(.{2})/g, '$1   '); 
    }
    return str;
  },[]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30 mix-blend-screen">
      <motion.div 
        className="absolute inset-0 flex items-start justify-center p-8"
        style={{ WebkitMaskImage: maskImage, maskImage }}
      >
        <div className="text-[10px] font-mono text-cyan-800/50 select-none leading-[2.5] w-full break-words text-center">
          {hexString}
        </div>
      </motion.div>
    </div>
  );
};


// ==========================================
// 【终极组合：主导出组件】
// ==========================================

export const CyberHero: React.FC = () => {
  const metricRef = useCyberGlitch('[ SYSTEM METRICS ONLINE ]', 1200);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505] font-mono">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_100%)]" />
      <HexMemoryGrid />
      <DataSphere />
      
      <motion.div 
        className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_20px_2px_rgba(34,211,238,0.5)] z-20"
        animate={{ translateY: ['0vh', '100vh'] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      />
      <div className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#fff_1px,#fff_2px)]" />

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-40" />
    </div>
  );
};