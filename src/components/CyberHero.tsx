// src/components/CyberHero.tsx
import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// ==========================================
// 【极致优化点 1：预计算色彩空间字典 (Color Dictionary Cache)】
// 彻底消灭原代码每帧生成 800 个 rgba() 字符串造成的极高 GC (垃圾回收) 压力。
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
const CHAR_SET =['A', 'B', 'C', 'D', 'E', 'F', '0', '1'];

// ==========================================
// 【底层 3D 图形学数学引擎】
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

    const POINTS_COUNT = 800;
    let sphereRadius = Math.min(width, height) * 0.35;
    
    // 使用 SOA (Structure of Arrays) 内存连续的数据结构榨取极限性能
    const x = new Float32Array(POINTS_COUNT);
    const y = new Float32Array(POINTS_COUNT);
    const z = new Float32Array(POINTS_COUNT);
    const chars = new Array(POINTS_COUNT);
    
    const phi = Math.PI * (3 - Math.sqrt(5)); // 黄金角

    for (let i = 0; i < POINTS_COUNT; i++) {
      const currentY = 1 - (i / (POINTS_COUNT - 1)) * 2; 
      const radiusAtY = Math.sqrt(1 - currentY * currentY); 
      const theta = phi * i;

      x[i] = Math.cos(theta) * radiusAtY;
      y[i] = currentY;
      z[i] = Math.sin(theta) * radiusAtY;
      
      chars[i] = CHAR_SET[Math.floor(Math.random() * 8)];
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

    const onMouseMove = (e: MouseEvent) => {
      targetVelocityY = ((e.clientX / width) - 0.5) * 0.06;
      targetVelocityX = ((e.clientY / height) - 0.5) * 0.06;
    };
    // 标记为 passive 提升主线程滚动的流畅度
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      sphereRadius = Math.min(width, height) * 0.35;
      
      // 【极致优化点 2：将 CSS blend mode 转移至 Canvas 内部】
      // 去除外部 DOM 节点的 mix-blend-screen，极大地减轻了 GPU 合成器负担
      ctx.globalCompositeOperation = 'screen';
    };
    window.addEventListener('resize', resize, { passive: true });
    
    // 初始化时注入一次混合模式
    ctx.globalCompositeOperation = 'screen';

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += targetVelocityX;
      angleY += targetVelocityY;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // 1. 矩阵变换：计算 3D 旋转
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

      // 2. 画家算法：V8 TypedArray in-place 快排，极速深度排序
      indices.sort((a, b) => projectedZ[a] - projectedZ[b]);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const fov = 800; 
      const cx = width / 2;
          const cy = height / 2;

      // 【极致优化点 3：Canvas 状态机熔断器】
      // 由于已根据 Z 轴排序，前后景的字体变化仅发生一次，缓存 current 状态避免冗余的 GPU 调用
      let currentFont = '';
      let currentColor = '';

      // 3. 透视除法与渲染
      for (let i = 0; i < POINTS_COUNT; i++) {
        const idx = indices[i];
        const pz = projectedZ[idx];
        
        const depthNormalized = (pz + 1) / 2; 
        if (depthNormalized < 0.2) continue; // 极致优化：直接剔除背面远点

        const scale = fov / (fov + pz * sphereRadius);
        const screenX = cx + projectedX[idx] * sphereRadius * scale;
        const screenY = cy + projectedY[idx] * sphereRadius * scale;

        const isFront = depthNormalized > 0.85;
        const targetFont = isFront ? FRONT_FONT : BACK_FONT;
        
        if (currentFont !== targetFont) {
          ctx.font = targetFont;
          currentFont = targetFont;
        }

        // 从 O(1) 字典中读取颜色，防止垃圾回收卡顿
        const colorIdx = Math.min(100, Math.max(0, Math.floor(depthNormalized * 100)));
        const targetColor = isFront ? FRONT_COLORS[colorIdx] : BACK_COLORS[colorIdx];

        if (currentColor !== targetColor) {
          ctx.fillStyle = targetColor;
          currentColor = targetColor;
        }

        ctx.fillText(chars[idx], screenX, screenY);
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
// 【极致优化点 4：消除 DOM 节点爆炸 (DOM Node Eradication)】
// 原代码使用 map 渲染了 1200 个 <span>，这导致 React 树庞大且渲染极其耗时。
// 现改为直接生成经过精细格式化、利用自然断行引擎的单文本节点，
// 视觉效果完全一致，但 DOM 复杂度降低了 1200 倍。
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
    // 每次生成 8 个字符（即 4 个 hex 代码），大幅降低循环与正则开销
    for (let i = 0; i < count; i += 4) {
      str += Math.floor(Math.random() * 0xFFFFFFFF)
        .toString(16)
        .padStart(8, '0')
        .toUpperCase()
        .replace(/(.{2})/g, '$1   '); // 注入 3 个空格模拟 gap-x-4
    }
    return str;
  },[]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      <motion.div 
        className="absolute inset-0 flex items-start justify-center p-8"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      >
        <div className="text-[10px] font-mono text-cyan-900/40 select-none leading-[2.5] w-full break-words text-center">
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
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
      
      {/* 极简网格底纹 (基建层) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      {/* 十六进制内存探照灯层 */}
      <HexMemoryGrid />

      {/* 3D 核心：斐波那契全息数据球 */}
      <DataSphere />

      {/* HUD 取景器层：边角坐标刻度 */}
      <div className="absolute inset-8 border-[1px] border-white/5 pointer-events-none flex flex-col justify-between hidden md:flex z-20">
         <div className="flex justify-between w-full p-2 text-[9px] font-mono text-cyan-600/50">
            <span>[ LAT: 34.0522 ]</span>
            <span>[ SYSTEM METRICS ONLINE ]</span>
            <span>[ LNG: -118.2437 ]</span>
         </div>
         
         <div className="flex justify-between w-full p-2 text-[9px] font-mono text-cyan-600/50">
            <span>SEQ_V.2.0</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse opacity-70" />
              RECORDING
            </span>
         </div>

         {/* 取景器边角装饰 */}
         <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30" />
         <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30" />
         <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30" />
         <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30" />
      </div>

      {/* 底部融合渐变遮罩，为了与内容区平滑过渡 */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-30" />
    </div>
  );
};