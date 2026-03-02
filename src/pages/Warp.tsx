// src/pages/Warp.tsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Satellite, Fingerprint, Zap, Crosshair } from 'lucide-react';

const portals =[
  { title: "Cameudis", url: "https://www.cameudis.com/", desc: "Murderous Utopia" },
  { title: "IceLava", url: "https://icelava.top", desc: "No Code No Life" },
  { title: "Twilight", url: "https://blog.iin0.cn/", desc: "Sound of Silence" },
  { title: "Sapium", url: "https://www.sapium.site", desc: "Thinking Space" },
];

// ==========================================
// 【顶级炫技点 1：原生 3D 透视跃迁引擎 (Software Warp Drive)】
// 纯数学计算 Z 轴深度衰减与 FOV 透视投影，实现超光速星流特效。
// ==========================================
const WarpDriveCanvas = ({ isHovered }: { isHovered: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 使用 ref 存储物理状态，避免触发 React 渲染
  const speedRef = useRef(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    const STAR_COUNT = 150;
    const FOV = 120;
    
    // 初始化 3D 坐标空间
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * width,
      pz: 0 // 上一帧的 Z 坐标，用于绘制拖尾
    }));

    let animationId: number;

    const render = () => {
      // 动态速度平滑插值 (Lerp)：悬停时加速进入跃迁，离开时减速
      const targetSpeed = isHovered ? 25 : 0.5;
      speedRef.current += (targetSpeed - speedRef.current) * 0.1;

      // 制造运动模糊残影
      ctx.fillStyle = isHovered ? 'rgba(5, 5, 5, 0.3)' : 'rgba(5, 5, 5, 0.8)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      stars.forEach(star => {
        star.pz = star.z;
        star.z -= speedRef.current;

        // 如果星星飞出屏幕后方，将其重置到极远处
        if (star.z < 1) {
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
          star.pz = width;
        }

        // 透视投影公式 (Perspective Projection): 2D = 3D * (FOV / Z)
        const scale = FOV / star.z;
        const x2d = cx + star.x * scale;
        const y2d = cy + star.y * scale;

        const pScale = FOV / star.pz;
        const px2d = cx + star.x * pScale;
        const py2d = cy + star.y * pScale;

        // 计算深度衰减不透明度
        const alpha = Math.min(1, (width - star.z) / width);
        
        ctx.beginPath();
        ctx.moveTo(px2d, py2d);
        ctx.lineTo(x2d, y2d);
        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`; // cyan-400
        
        // 跃迁状态下线条变粗
        ctx.lineWidth = isHovered ? Math.max(0.5, (1 - star.z / width) * 3) : 0.5;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isHovered]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none z-0 opacity-60" />;
};

// ==========================================
// 【顶级炫技点 2：零重绘 IPv6 动态路由解析器】
// ==========================================
const NetworkResolver = ({ url, isHovered }: { url: string, isHovered: boolean }) => {
  const displayAddress = useMotionValue(url);

  useEffect(() => {
    if (!isHovered) {
      displayAddress.set(url);
      return;
    }

    let frameId: number;
    let iteration = 0;
    const totalFrames = 30; // 解析耗时 30 帧

    const generateIPv6 = () => {
      return Array.from({length: 8}, () => 
        Math.floor(Math.random() * 65536).toString(16).padStart(4, '0')
      ).join(':').toUpperCase();
    };

    const animate = () => {
      if (iteration < totalFrames) {
        // 解析中：展示高速跳动的伪造 IPv6 地址
        displayAddress.set(`RESOLVING::[${generateIPv6()}]`);
        iteration++;
        frameId = requestAnimationFrame(animate);
      } else {
        // 解析完成：锁定目标
        displayAddress.set(`UPLINK_ESTABLISHED::[${url}]`);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered, url, displayAddress]);

  return <motion.span>{displayAddress}</motion.span>;
};


// ==========================================
// 【单一跃迁节点组件 (Warp Node)】
// ==========================================
const WarpNode = ({ portal, index }: { portal: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 节点的三维进场排版逻辑
  const yOffset = index % 2 === 0 ? 0 : 40; 
  const hexId = `0x${(index + 1).toString(16).toUpperCase().padStart(2, '0')}`;

  return (
    <motion.a
      href={portal.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, z: -500, rotateX: 20 }}
      animate={{ opacity: 1, z: 0, rotateX: 0 }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100,
        damping: 20 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-48 md:h-64 flex flex-col justify-between overflow-hidden cursor-crosshair outline-none"
      style={{ marginTop: `${yOffset}px` }}
    >
      {/* 
        【顶级炫技点 3：全息装甲玻璃倒角 (Mechanical Chamfer UI)】 
        利用 CSS clip-path 削掉边角，营造工业机甲的物理外壳
      */}
      <div 
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md border border-cyan-900/50 group-hover:bg-cyan-950/20 group-hover:border-cyan-400 transition-all duration-500 z-10"
        style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
      >
        <WarpDriveCanvas isHovered={isHovered} />
        
        {/* 背景大字投影 (Holographic Letter) */}
        <span className="absolute -bottom-8 -right-4 text-[12rem] font-black opacity-[0.03] group-hover:opacity-[0.1] text-cyan-500 transition-opacity duration-500 select-none pointer-events-none mix-blend-screen leading-none">
          {portal.title[0]}
        </span>
      </div>

      {/* 机械锁定角标 */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500 z-20 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500 z-20 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />

      {/* 节点内部数据区 */}
      <div className="relative z-20 p-6 flex flex-col justify-between h-full pointer-events-none">
        
        {/* 头部：雷达锁定指示器 */}
        <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-widest text-cyan-600">
           <div className="flex items-center gap-2">
             <Satellite className="w-3 h-3 group-hover:text-cyan-400 group-hover:animate-pulse transition-colors" />
             NODE_ID: {hexId}
           </div>
           
           {/* 悬停时激活的红十字瞄准镜 */}
           <div className="relative w-4 h-4 overflow-hidden">
              <Crosshair className="absolute inset-0 w-full h-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100" />
           </div>
        </div>

        {/* 核心区：标题与描述 */}
        <div className="transform-gpu transition-transform duration-500 group-hover:translate-x-4">
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-200 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all uppercase">
              {portal.title}
            </h3>
            <p className="font-mono text-xs mt-2 text-slate-500 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-900 group-hover:bg-cyan-400 group-hover:animate-ping rounded-full" />
              {portal.desc}
            </p>
        </div>

        {/* 底部：动态网络协议路由栏 */}
        <div className="font-mono text-[8px] md:text-[9px] text-cyan-800 group-hover:text-cyan-400 tracking-widest border-t border-cyan-900/30 pt-3 mt-4 flex items-center gap-2 w-full truncate">
           <Zap className="w-3 h-3 shrink-0" />
           <NetworkResolver url={portal.url} isHovered={isHovered} />
        </div>

      </div>
    </motion.a>
  );
};


// ==========================================
// 主导出组件：Warp Matrix
// ==========================================
const Warp: React.FC = () => {
  // 鼠标 3D 偏航探测器
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX,[-1, 1], [-5, 5]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width * 2 - 1);
    mouseY.set((e.clientY - top) / height * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-20 relative overflow-hidden pt-32 perspective-[2000px]">
      
      {/* 极简空间背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d408_1px,transparent_1px),linear-gradient(to_bottom,#06b6d408_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      
      {/* 战术雷达阵列 Header */}
      <div className="w-full max-w-5xl mb-12 flex justify-between items-end border-b border-cyan-900/40 pb-4 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-[10px] text-red-500 tracking-[0.3em] uppercase">
            <Fingerprint className="w-4 h-4" />
            UNAUTHORIZED_ROUTING_MATRIX
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-200 tracking-tighter">WARP_GATES</h1>
        </div>
        
        <div className="hidden md:flex flex-col items-end font-mono text-[9px] text-cyan-700 tracking-widest gap-1">
          <span>SYS_LOC: AP-NORTHEAST-1</span>
          <span>AVAILABLE_NODES: 0x0{portals.length}</span>
        </div>
      </div>

      {/* 3D 跃迁矩阵容器 */}
      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl relative z-10 will-change-transform"
      >
        {portals.map((portal, index) => (
          <WarpNode key={portal.title} portal={portal} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Warp;