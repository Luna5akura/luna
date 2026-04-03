// src/components/CyberHero.tsx
import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// ==========================================
// 【极致下沉：深海级色彩空间 (Stealth Tech Palette)】
// 彻底弃用任何白色和明亮的青色，转而使用极深的幽蓝色系
// ==========================================
const FRONT_COLORS = new Array(101);
const BACK_COLORS = new Array(101);
for (let i = 0; i <= 100; i++) {
  const d = i / 100;
  // 使用 Deep Cyan (青色偏深) 和 Slate (暗灰)，最大透明度控制在 0.4
  FRONT_COLORS[i] = `rgba(14, 116, 144, ${d * 0.9})`; // 深青色 #0e7490
  BACK_COLORS[i] = `rgba(30, 41, 59, ${d * 0.9})`; // 暗灰 #1e293b
}

const FRONT_FONT = 'bold 10px "JetBrains Mono", monospace';
const BACK_FONT = '9px "JetBrains Mono", monospace';
const CHAR_SET =['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '1', '0', 'X', 'Z'];

// ==========================================
// 【Direct-DOM 文本解密引擎】保持极低开销
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
        iterations += 1 / 3;
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  },[text, delay]);
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

    // 粒子数稍微降低，让整体更干净
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

    let angleX = 0;
    let angleY = 0;
    let animationId: number;
    
    let targetVelocityX = 0.001;
    let targetVelocityY = 0.001;
    
    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      targetVelocityY = ((e.clientX / width) - 0.5) * 0.015;
      targetVelocityX = ((e.clientY / height) - 0.5) * 0.015;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      sphereRadius = Math.min(width, height) * 0.28;
    };
    window.addEventListener('resize', resize, { passive: true });

    const animate = () => {
      // 完全放弃 Screen (发光) 混合模式，使用基础叠加，消除所有刺眼的高光
      ctx.globalCompositeOperation = 'source-over';
      
      // 使用极深的背景底色来清除上一帧，产生微弱的残影
      ctx.fillStyle = 'rgba(2, 6, 23, 0.95)'; // Tailwind slate-950
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

      const fov = 800; 
      const cx = width / 2;
      const cy = height / 2;

      let currentFont = '';
      let currentColor = '';
      
      // 用于绘制连线的激活节点数组
      const activeNodes: {x: number, y: number}[] =[];

      for (let i = 0; i < POINTS_COUNT; i++) {
        const idx = indices[i];
        const pz = projectedZ[idx];
        
        const depthNormalized = (pz + 1) / 2; 
        if (depthNormalized < 0.1) continue; 

        const scale = fov / (fov + pz * sphereRadius);
        let screenX = cx + projectedX[idx] * sphereRadius * scale;
        let screenY = cy + projectedY[idx] * sphereRadius * scale;

        const dx = screenX - mouseX;
        const dy = screenY - mouseY;
        const distSq = dx * dx + dy * dy;
        const repulseRadius = 120;
        let isOverloaded = false;

        // 鼠标排斥逻辑
        if (distSq < repulseRadius * repulseRadius) {
          const dist = Math.sqrt(distSq);
          const force = (repulseRadius - dist) / repulseRadius;
          screenX += (dx / dist) * force * 10; 
          screenY += (dy / dist) * force * 10;
          isOverloaded = true;
          activeNodes.push({x: screenX, y: screenY}); // 记录受影响的节点
          if (Math.random() < 0.02) chars[idx] = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
        }

        const isFront = depthNormalized > 0.85;
        let targetFont = isFront ? FRONT_FONT : BACK_FONT;

        if (currentFont !== targetFont) {
          ctx.font = targetFont;
          currentFont = targetFont;
        }

        let targetColor = '';
        if (isOverloaded) {
          // 过载时不再用白色，而是稍微实心一点的深水绿 (Teal)
          targetColor = 'rgba(13, 148, 136, 0.4)'; 
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

      // 【新增特效 1：微弱的神经网络连线 (Plexus)】
      // 将被鼠标干扰的节点用极其微弱的细线连接起来，显得极其高科技
      if (activeNodes.length > 1) {
        ctx.beginPath();
        for (let i = 0; i < activeNodes.length; i++) {
          for (let j = i + 1; j < activeNodes.length; j++) {
            const dx = activeNodes[i].x - activeNodes[j].x;
            const dy = activeNodes[i].y - activeNodes[j].y;
            if (dx * dx + dy * dy < 10000) { // 约 100px 距离内相连
              ctx.moveTo(activeNodes[i].x, activeNodes[i].y);
              ctx.lineTo(activeNodes[j].x, activeNodes[j].y);
            }
          }
        }
        ctx.strokeStyle = 'rgba(13, 148, 136, 0.25)'; // 极暗的水绿色
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // 【新增特效 2：几何星轨环 (Orbital Rings)】
      // 在球体外围增加两圈缓缓旋转的断断续续的细线，增加工业感
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 1.15, angleX, angleX + Math.PI * 0.6);
      ctx.strokeStyle = 'rgba(14, 116, 144, 0.35)'; // 极弱的深青
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 1.25, -angleY, -angleY + Math.PI * 0.4);
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.25)'; // 极弱的暗灰
      ctx.stroke();

      // 隐秘的干扰线
      if (Math.random() < 0.005) {
        const sliceY = Math.random() * height;
        const sliceH = Math.random() * 20 + 5; 
        const shiftX = (Math.random() - 0.5) * 15; 
        ctx.drawImage(canvas, 0, sliceY, width, sliceH, shiftX, sliceY, width, sliceH);
        ctx.fillStyle = 'rgba(14, 116, 144, 0.33)'; // 去除红色，改用幽暗蓝
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

  // 加上一点模糊，让它更像背景景深
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-75 blur-[0.8px]" />;
};

// ==========================================
// 【十六进制内存阵列】
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
    const count = 1500;
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
    // 移除了 mix-blend-screen，使用基础透明度
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-15">
      <motion.div 
        className="absolute inset-0 flex items-start justify-center p-8"
        style={{ WebkitMaskImage: maskImage, maskImage }}
        // 【新增细节】：让背景矩阵极其缓慢地向上漂移，像数据瀑布
        animate={{ translateY: ['0%', '-5%'] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <div className="text-[10px] font-mono text-[#0e7490] opacity-40 select-none leading-[2.5] w-full break-words text-center">
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
    // 底色改为了更极致纯粹的黑蓝 #020617 (slate-950)
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617] font-mono">
      
      {/* 坐标系网格也变得更暗淡，彻底退居幕后 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      <HexMemoryGrid />
      <DataSphere />
      
      {/* 幽灵扫描线：完全移除了原本发白的切割感，改成深青色宽频雷达扫过 */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[2px] bg-[#0e7490] opacity-20 shadow-[0_0_20px_2px_rgba(14,116,144,0.15)] z-20"
        animate={{ translateY:['0vh', '100vh'] }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
      />
      
      {/* 超级暗角：进一步压暗四周边缘 */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.95)_100%)]" />
      
      {/* 【神来之笔：负向扫描线 CRT Lines】
          抛弃白色的线，改用全屏覆盖的纯黑色半透明扫描线。它不会增加任何亮度，反而会切碎下方的光线，产生极佳的复古显示器质感。
       */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#000000_1px,#000000_2px)]" />

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent z-40" />
    </div>
  );
};