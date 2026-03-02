// src/components/CyberHero.tsx
import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// ==========================================
// 【炫技点 1：底层 3D 图形学数学引擎】
// 抛弃所有 3D 库，手写欧拉角旋转矩阵、透视投影与深度排序
// 构建完美的 "斐波那契全息数据球 (Fibonacci Sphere)"
// ==========================================
const DataSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // 极客美学：使用黄金比例角生成均匀分布的球面点阵
    const POINTS_COUNT = 800;
    const SPHERE_RADIUS = Math.min(width, height) * 0.35;
    
    // 使用 SOA (Structure of Arrays) 内存连续的数据结构榨取性能
    const x = new Float32Array(POINTS_COUNT);
    const y = new Float32Array(POINTS_COUNT);
    const z = new Float32Array(POINTS_COUNT);
    // 缓存每个点绑定的二进制字符
    const chars = new Array(POINTS_COUNT);
    
    const phi = Math.PI * (3 - Math.sqrt(5)); // 黄金角

    for (let i = 0; i < POINTS_COUNT; i++) {
      const currentY = 1 - (i / (POINTS_COUNT - 1)) * 2; // y 从 1 到 -1
      const radiusAtY = Math.sqrt(1 - currentY * currentY); // 当前 y 高度下的截面半径
      const theta = phi * i;

      x[i] = Math.cos(theta) * radiusAtY;
      y[i] = currentY;
      z[i] = Math.sin(theta) * radiusAtY;
      
      // 随机分配 0, 1 或十六进制字符，增加系统感
      chars[i] = Math.random() > 0.8 ? ['A','B','C','D','E','F'][Math.floor(Math.random()*6)] : (Math.random() > 0.5 ? '1' : '0');
    }

    // 用于存储每一帧旋转后的坐标和深度排序索引
    const projectedX = new Float32Array(POINTS_COUNT);
    const projectedY = new Float32Array(POINTS_COUNT);
    const projectedZ = new Float32Array(POINTS_COUNT);
    const indices = new Int32Array(POINTS_COUNT);

    let angleX = 0;
    let angleY = 0;
    let animationId: number;
    
    // 鼠标交互参数
    let targetVelocityX = 0.002;
    let targetVelocityY = 0.002;

    const onMouseMove = (e: MouseEvent) => {
      // 映射鼠标位置改变球体旋转速度
      targetVelocityY = ((e.clientX / width) - 0.5) * 0.05;
      targetVelocityX = ((e.clientY / height) - 0.5) * 0.05;
    };
    window.addEventListener('mousemove', onMouseMove);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 平滑插值旋转速度 (惯性阻尼)
      angleX += targetVelocityX;
      angleY += targetVelocityY;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // 1. 矩阵变换：计算 3D 旋转
      for (let i = 0; i < POINTS_COUNT; i++) {
        // 绕 X 轴旋转
        const y1 = y[i] * cosX - z[i] * sinX;
        const z1 = y[i] * sinX + z[i] * cosX;

        // 绕 Y 轴旋转
        const x2 = x[i] * cosY + z1 * sinY;
        const z2 = -x[i] * sinY + z1 * cosY;

        projectedX[i] = x2;
        projectedY[i] = y1;
        projectedZ[i] = z2;
        indices[i] = i; // 重置索引，准备排序
      }

      // 2. 画家算法 (Painter's Algorithm)：通过深度 (Z轴) 对索引进行排序，确保正面字符遮挡背面
      indices.sort((a, b) => projectedZ[a] - projectedZ[b]);

      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const fov = 800; // 视野深度参数
      const cx = width / 2;
      const cy = height / 2;

      // 3. 透视除法与渲染
      for (let i = 0; i < POINTS_COUNT; i++) {
        const idx = indices[i];
        const pz = projectedZ[idx];
        
        // 透视缩放公式：Scale = FOV / (FOV + Z)
        const scale = fov / (fov + pz * SPHERE_RADIUS);
        const screenX = cx + projectedX[idx] * SPHERE_RADIUS * scale;
        const screenY = cy + projectedY[idx] * SPHERE_RADIUS * scale;

        // 依据深度 (Z) 计算透明度与颜色，营造 3D 景深感
        // pz 范围大致在 -1 到 1 之间
        const depthNormalized = (pz + 1) / 2; 
        
        if (depthNormalized < 0.2) continue; // 极致优化：直接剔除背面太远的点

        // 正面点高亮青色，背面点暗灰色
        if (depthNormalized > 0.85) {
          ctx.fillStyle = `rgba(34, 211, 238, ${depthNormalized})`; // text-cyan-400
          ctx.font = 'bold 12px "JetBrains Mono", monospace';
        } else {
          ctx.fillStyle = `rgba(100, 116, 139, ${depthNormalized * 0.6})`; // text-slate-500
          ctx.font = '10px "JetBrains Mono", monospace';
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

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 mix-blend-screen" />;
};


// ==========================================
// 【炫技点 2：CSS 硬件加速光线追踪 & 内存阵列】
// 生成极简黑客风十六进制矩阵，用 Framer Motion 驱动 CSS Mask 实现无渲染开销的探照灯
// ==========================================
const HexMemoryGrid: React.FC = () => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // 阻尼弹簧带来探照灯的延迟丝滑感
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [mouseX, mouseY]);

  // CSS Mask 光源模板：越靠近中心越亮，边缘衰减
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  // 预生成静态的内存代码阵列 (避免 React 重新渲染)
  const hexGrid = useMemo(() => {
    const rows = 30;
    const cols = 40;
    const grid =[];
    for (let i = 0; i < rows * cols; i++) {
      grid.push(Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase());
    }
    return grid;
  },[]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      <motion.div 
        className="absolute inset-0 flex flex-wrap content-start justify-center gap-x-4 gap-y-2 p-8"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      >
        {hexGrid.map((hex, i) => (
          <span key={i} className="text-[10px] font-mono text-cyan-900/40 select-none">
            {hex}
          </span>
        ))}
      </motion.div>
    </div>
  );
};


// ==========================================
// 【终极组合：主导出组件】
// 构建精准、冷酷、数学化的赛博 HUD 视差背景
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