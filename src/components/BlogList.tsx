// src/components/BlogList.tsx
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Post } from '@/types';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence, useAnimationFrame } from 'framer-motion';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

// ==========================================
// 【顶级炫技点 1：高维分形几何矩阵 (High-Dimensional Fractal Matrix)】
// 包含了 4 种截然不同的非线性偏微分方程组。
// ==========================================
const QuantumFieldCanvas = ({ seedId }: { seedId: string | number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 320;
    const height = 220;
    canvas.width = width;
    canvas.height = height;

    // 位运算 Hash 生成唯一 32 位整型种子
    const hash = String(seedId).split('').reduce((acc, char) => Math.imul(31, acc) + char.charCodeAt(0) | 0, 0);
    const absHash = Math.abs(hash);
    
    // Hash 扰动变量 (0.0 ~ 1.0)
    const h1 = (absHash % 100) / 100;
    const h2 = ((absHash >> 4) % 100) / 100;

    // 模型坍缩选择
    const attractorType = absHash % 4; 

    const MAX_POINTS = 3500;
    const pointsX = new Float32Array(MAX_POINTS);
    const pointsY = new Float32Array(MAX_POINTS);
    const pointsZ = new Float32Array(MAX_POINTS);
    
    let cx = 0.1, cy = 0.1, cz = 0.1;
    let dt = 0.01, scaleMult = 1, offsetY = 0;

    // 微积分欧拉法：四大物理模型轨迹求解
    for (let i = 0; i < MAX_POINTS; i++) {
      let dx = 0, dy = 0, dz = 0;
      
      if (attractorType === 0) {
        // [模型 0] Lorenz 蝴蝶效应
        const rho = 28, sigma = 10, beta = 8/3;
        dx = sigma * (cy - cx);
        dy = cx * (rho - cz) - cy;
        dz = cx * cy - beta * cz;
        dt = 0.01; scaleMult = 3.5; offsetY = 20;
      } 
      else if (attractorType === 1) {
        // [模型 1] Aizawa 黑洞吸引子 (球状盘旋)
        const a = 0.95, b = 0.7, c = 0.6, d = 3.5, e = 0.25, f = 0.1;
        dx = (cz - b) * cx - d * cy;
        dy = d * cx + (cz - b) * cy;
        dz = c + a * cz - Math.pow(cz, 3)/3 - (cx*cx + cy*cy)*(1 + e*cz) + f*cz*Math.pow(cx, 3);
        dt = 0.02; scaleMult = 45; offsetY = 0.5;
      } 
      else if (attractorType === 2) {
        //[模型 2] Halvorsen 对称迷宫 (棱角分明)
        const a = 1.89;
        dx = -a*cx - 4*cy - 4*cz - cy*cy;
        dy = -a*cy - 4*cz - 4*cx - cz*cz;
        dz = -a*cz - 4*cx - 4*cy - cx*cx;
        dt = 0.005; scaleMult = 10; offsetY = -2;
      }
      else {
        // [模型 3] Thomas 周期性涡流
        const b = 0.19;
        dx = Math.sin(cy) - b*cx;
        dy = Math.sin(cz) - b*cy;
        dz = Math.sin(cx) - b*cz;
        dt = 0.1; scaleMult = 25; offsetY = 0;
      }
      
      cx += dx * dt; cy += dy * dt; cz += dz * dt;
      pointsX[i] = cx; pointsY[i] = cy; pointsZ[i] = cz;
    }

    let angleY = 0;
    let animationId: number;
    // 赋予独特偏色
    const hue = 160 + (absHash % 120); 

    const render = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, width, height);

      // 根据 Hash 给予不同的旋转轴速度
      angleY += 0.005 + h1 * 0.01;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      ctx.beginPath();
      for (let i = 0; i < MAX_POINTS; i++) {
        // 空间扭曲矩阵 (Space Warping)：即便同模型也能长得完全不同
        const warpX = pointsX[i] + Math.sin(pointsY[i] * h1) * 2;
        const warpY = pointsY[i] + Math.cos(pointsX[i] * h2) * 2;
        const pz = pointsZ[i];
        
        // Y轴三维旋转
        const rotX = warpX * cosY + pz * sinY;
        const rotZ = -warpX * sinY + pz * cosY;
        const rotY = warpY - offsetY;

        // 透视投影
        const scale = 300 / (300 + rotZ * 5); 
        const screenX = width / 2 + rotX * scaleMult * scale;
        const screenY = height / 2 - rotY * scaleMult * scale;

        if (i === 0) ctx.moveTo(screenX, screenY);
        else ctx.lineTo(screenX, screenY);
      }

      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.6)`;
      ctx.lineWidth = 1;
      ctx.globalCompositeOperation = 'screen';
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';

      // CRT 故障描边
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, (angleY * 200) % height, width, 2);

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [seedId]);

  return <canvas ref={canvasRef} className="w-full h-full object-cover mix-blend-screen" />;
};

// ==========================================
// 【微重力引擎】
// ==========================================
const MagneticWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 1024) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - (left + width / 2)) * 0.4);
    y.set((e.clientY - (top + height / 2)) * 0.4);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 【电影级解密 & CSS Grid 幽灵占位】
// ==========================================
const ScrambleText = ({ text, className }: { text: string, className?: string }) => {
  const [display, setDisplay] = useState(text);
  
  useEffect(() => {
    let frame: number;
    const chars = "01@#$%&X_!<>?{}[]";
    const duration = 800; 
    const startTime = performance.now();
    
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const revealCount = Math.floor(text.length * easeProgress);

      setDisplay(
        text.split("").map((char, index) => {
          if (index < revealCount) return char;
          if (char === " ") return " "; 
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return (
    <span className={cn("grid w-full items-start", className)}>
      <span className="col-start-1 row-start-1 invisible whitespace-pre-wrap break-words">{text}</span>
      <span className="col-start-1 row-start-1 whitespace-pre-wrap break-words text-cyan-50">{display}</span>
    </span>
  );
};

// ==========================================
// 【单项组件】
// ==========================================
const ListItem = ({ post, index, setHoveredPost }: { post: Post, index: number, setHoveredPost: any }) => {
  const hexIndex = `0x${(index + 1).toString(16).toUpperCase().padStart(2, '0')}`;

  return (
    <Link
      to={`/posts/${post.contentKey}`}
      className="group relative block w-full cursor-none overflow-hidden rounded-lg border border-white/5 bg-transparent p-6 lg:p-8 transition-colors duration-500 hover:border-cyan-500/30"
      onMouseEnter={() => setHoveredPost(post)}
      onMouseLeave={() => setHoveredPost(null)}
    >
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34,211,238,0.08), transparent 40%)` }}
      />
      
      <div className="relative z-10 flex items-center gap-4 text-[10px] font-mono text-cyan-900 uppercase tracking-[0.2em] mb-4">
        <span className="text-cyan-600 font-bold">[{hexIndex}]</span>
        <span className="w-12 h-[1px] bg-cyan-900/50" />
        <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
          // ALLOC_ZONE: {post.category}
        </span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-transform duration-500 ease-out group-hover:translate-x-4">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-300 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 w-full md:max-w-[70%]">
          <ScrambleText text={post.title} />
        </h2>

        <div className="flex flex-col items-start md:items-end font-mono text-xs text-slate-600 gap-1 shrink-0">
          <span className="flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 group-hover:animate-pulse" />
            SYS.TIME
          </span>
          <span className="text-slate-500 tracking-widest">{post.date}</span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-[cubic-bezier(0.16,1,0.3,1)] w-full" />
    </Link>
  );
};

// ==========================================
// 主组件 BlogList
// ==========================================
const BlogList: React.FC<{ posts: Post[], currentPage: number, totalPages: number, onPageChange: (p: number) => void }> = ({ posts, currentPage, totalPages, onPageChange }) => {
  const[hoveredPost, setHoveredPost] = useState<Post | null>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);
  
  // 【顶级炫技点 2：PLL 视口相位锁定核心探针 (Phase-Locked Loop)】
  const paginationRef = useRef<HTMLDivElement>(null);
  const anchorState = useRef({ isLocked: false, targetY: 0, lockTimer: 0 as any });

  const globalMouseX = useMotionValue(-1000);
  const globalMouseY = useMotionValue(-1000);
  const smoothX = useSpring(globalMouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const smoothY = useSpring(globalMouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  // 挂载高频滚动纠正死锁
  useAnimationFrame(() => {
    if (anchorState.current.isLocked && paginationRef.current) {
      // 每 16.6ms 读取一次底层渲染坐标
      const currentY = paginationRef.current.getBoundingClientRect().top;
      const delta = currentY - anchorState.current.targetY;

      // 若发现列表高度坍塌导致导航条位移，强行调用 compositor 进行反向滚动补偿！
      if (Math.abs(delta) > 0.5) {
        window.scrollBy({ top: delta, behavior: 'auto' });
      }
    }
  });

  // 释放用户手动控制权 (用户滚动滚轮或触屏时解锁)
  useEffect(() => {
    const abortLock = () => { anchorState.current.isLocked = false; };
    window.addEventListener('wheel', abortLock, { passive: true });
    window.addEventListener('touchstart', abortLock, { passive: true });
    return () => {
      window.removeEventListener('wheel', abortLock);
      window.removeEventListener('touchstart', abortLock);
    };
  },[]);

  const triggerPageChange = (newPage: number) => {
    if (newPage === currentPage) return;

    if (paginationRef.current) {
      // 切页瞬间：死死记录导航条当前在屏幕的物理位置
      anchorState.current.targetY = paginationRef.current.getBoundingClientRect().top;
      anchorState.current.isLocked = true;
      clearTimeout(anchorState.current.lockTimer);
      // 根据 Framer Motion 的 Spring 动画阻尼时长释放锁定
      anchorState.current.lockTimer = setTimeout(() => {
        anchorState.current.isLocked = false;
      }, 1000); 
    }
    
    onPageChange(newPage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024) {
      globalMouseX.set(e.clientX);
      globalMouseY.set(e.clientY);
    }
    if (listContainerRef.current) {
      const rect = listContainerRef.current.getBoundingClientRect();
      listContainerRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      listContainerRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }
  };

  const getVisiblePages = () => {
    const delta = 1;
    const range = [];
    const rangeWithDots =[];
    let l;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) range.push(i);
    }
    for (const i of range) {
      if (l) {
        if (i - l === 2) rangeWithDots.push(l + 1);
        else if (i - l !== 1) rangeWithDots.push('...');
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };

  const hoverMonitor = hoveredPost && typeof document !== 'undefined' ? createPortal(
    <AnimatePresence>
      <motion.div
        key="hover-monitor"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block will-change-transform mix-blend-screen"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="relative w-[320px] h-[220px] rounded-sm border border-cyan-500/40 bg-black/80 shadow-[0_0_30px_rgba(6,182,212,0.3)] overflow-hidden p-1">
           <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-10" />
           <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-10" />
           <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-10" />
           <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-10" />
           <div className="absolute top-2 left-3 z-10 font-mono text-[9px] text-cyan-400 drop-shadow-[0_0_2px_#06b6d4]">
             ID: {hoveredPost.id} // CHAOS_MATRIX_SYNC
           </div>
           <div className="w-full h-full relative opacity-80">
             <QuantumFieldCanvas seedId={hoveredPost.id} />
           </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  ) : null;

  return (
    <div ref={listContainerRef} onMouseMove={handleMouseMove} className="relative w-full z-10 pb-16 flex flex-col perspective-[1000px]">
      {hoverMonitor}

      {/* 【顶级炫技点 3：四维空间折叠转场 (4D Hypercube Transition)】 */}
      <motion.div layout className="relative z-10 mb-16 min-h-[400px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={`page-${currentPage}`}
            layout
            initial={{ opacity: 0, rotateX: 45, y: 100, scale: 0.9, filter: "blur(15px)" }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, rotateX: -45, y: -100, scale: 0.9, filter: "blur(15px)", transition: { duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="flex flex-col gap-4 w-full origin-center transform-gpu"
          >
            {posts.map((post, index) => (
              <ListItem 
                key={post.id} 
                post={post} 
                index={index + (currentPage - 1) * 5} 
                setHoveredPost={setHoveredPost} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* PLL 锁定基准锚点：paginationRef */}
      <motion.div ref={paginationRef} layout className="flex justify-center md:justify-start pt-8 border-t border-cyan-900/30">
        <Pagination>
          <PaginationContent className="gap-2 font-mono text-sm">
            <MagneticWrapper>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && triggerPageChange(currentPage - 1)}
                  className={cn(
                    "cursor-none border border-cyan-900/50 hover:bg-cyan-950/50 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 text-slate-500 bg-transparent rounded-sm",
                    currentPage === 1 && "pointer-events-none opacity-20"
                  )}
                />
              </PaginationItem>
            </MagneticWrapper>

            <AnimatePresence mode="popLayout">
              {getVisiblePages().map((page, index) => (
                <motion.div 
                  key={page === '...' ? `dots-${index}` : page} 
                  layout
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <MagneticWrapper>
                    <PaginationItem>
                      {page === '...' ? (
                        <PaginationEllipsis className="text-cyan-900" />
                      ) : (
                        <PaginationLink
                          onClick={() => triggerPageChange(page as number)}
                          isActive={currentPage === page}
                          className={cn(
                            "cursor-none w-10 h-10 rounded-sm border transition-all duration-300 font-bold",
                            currentPage === page
                              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-110" 
                              : "text-slate-500 bg-transparent border-cyan-900/50 hover:border-cyan-500 hover:text-cyan-300 hover:bg-cyan-950/30"
                          )}
                        >
                          {typeof page === 'number' ? `0x${page.toString(16).toUpperCase()}` : page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  </MagneticWrapper>
                </motion.div>
              ))}
            </AnimatePresence>

            <MagneticWrapper>
              <PaginationItem>
                <PaginationNext
                  onClick={() => currentPage < totalPages && triggerPageChange(currentPage + 1)}
                  className={cn(
                    "cursor-none border border-cyan-900/50 hover:bg-cyan-950/50 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 text-slate-500 bg-transparent rounded-sm",
                    currentPage === totalPages && "pointer-events-none opacity-20"
                  )}
                />
              </PaginationItem>
            </MagneticWrapper>
          </PaginationContent>
        </Pagination>
      </motion.div>
    </div>
  );
};

export default BlogList;