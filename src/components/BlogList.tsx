// src/components/BlogList.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
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
// 【极致优化点 1：全局高维分形矩阵缓存 (Global Fractal Cache)】
// 彻底消灭原代码中每次 hover 都会全量计算 3500 个欧拉迭代点的灾难，
// 并将原本每帧 7000 次的 Math.sin/cos 空间扭曲运算提取到了初始化阶段！
// ==========================================
const MAX_POINTS = 3500;
const FRACTAL_CACHE = new Map<string | number, {
  pointsX: Float32Array,
  pointsY: Float32Array,
  pointsZ: Float32Array,
  scaleMult: number,
  offsetY: number,
  h1: number,
  hue: number
}>();

const getFractalData = (seedId: string | number) => {
  if (FRACTAL_CACHE.has(seedId)) return FRACTAL_CACHE.get(seedId)!;

  const hash = String(seedId).split('').reduce((acc, char) => Math.imul(31, acc) + char.charCodeAt(0) | 0, 0);
  const absHash = Math.abs(hash);
  
  const h1 = (absHash % 100) / 100;
  const h2 = ((absHash >> 4) % 100) / 100;
  const attractorType = absHash % 4; 

  // SOA 架构，连续内存榨取 V8 极限性能
  const pointsX = new Float32Array(MAX_POINTS);
  const pointsY = new Float32Array(MAX_POINTS);
  const pointsZ = new Float32Array(MAX_POINTS);
  
  let cx = 0.1, cy = 0.1, cz = 0.1;
  let dt = 0.01, scaleMult = 1, offsetY = 0;

  for (let i = 0; i < MAX_POINTS; i++) {
    let dx = 0, dy = 0, dz = 0;
    
    if (attractorType === 0) {
      const rho = 28, sigma = 10, beta = 8/3;
      dx = sigma * (cy - cx);
      dy = cx * (rho - cz) - cy;
      dz = cx * cy - beta * cz;
      dt = 0.01; scaleMult = 3.5; offsetY = 20;
    } 
    else if (attractorType === 1) {
      const a = 0.95, b = 0.7, c = 0.6, d = 3.5, e = 0.25, f = 0.1;
      dx = (cz - b) * cx - d * cy;
      dy = d * cx + (cz - b) * cy;
      dz = c + a * cz - Math.pow(cz, 3)/3 - (cx*cx + cy*cy)*(1 + e*cz) + f*cz*Math.pow(cx, 3);
      dt = 0.02; scaleMult = 45; offsetY = 0.5;
    } 
    else if (attractorType === 2) {
      const a = 1.89;
      dx = -a*cx - 4*cy - 4*cz - cy*cy;
      dy = -a*cy - 4*cz - 4*cx - cz*cz;
      dz = -a*cz - 4*cx - 4*cy - cx*cx;
      dt = 0.005; scaleMult = 10; offsetY = -2;
    }
    else {
      const b = 0.19;
      dx = Math.sin(cy) - b*cx;
      dy = Math.sin(cz) - b*cy;
      dz = Math.sin(cx) - b*cz;
      dt = 0.1; scaleMult = 25; offsetY = 0;
    }
    
    cx += dx * dt; cy += dy * dt; cz += dz * dt;
    
    // 【性能质变】：将原本写在 render 循环内的三角函数矩阵形变在此一次性预计算完毕！
    pointsX[i] = cx + Math.sin(cy * h1) * 2;
    pointsY[i] = cy + Math.cos(cx * h2) * 2;
    pointsZ[i] = cz;
  }

  const hue = 160 + (absHash % 120); 
  const result = { pointsX, pointsY, pointsZ, scaleMult, offsetY, h1, hue };
  FRACTAL_CACHE.set(seedId, result);
  return result;
};

const QuantumFieldCanvas = ({ seedId }: { seedId: string | number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // 【极致优化点 2：禁用 Alpha 通道】 
    // 通知浏览器底层 Canvas 无透明通道，触发 GPU 渲染加速路径
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const width = 320;
    const height = 220;
    canvas.width = width;
    canvas.height = height;

    const { pointsX, pointsY, pointsZ, scaleMult, offsetY, h1, hue } = getFractalData(seedId);

    let angleY = 0;
    let animationId: number;
    
    const cx2 = width / 2;
    const cy2 = height / 2;
    const strokeStyle = `hsla(${hue}, 100%, 50%, 0.6)`;
    const crtStyle = 'rgba(255, 255, 255, 0.03)';
    const bgStyle = 'rgba(0, 0, 0, 0.15)';

    const render = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = bgStyle;
      ctx.fillRect(0, 0, width, height);

      angleY += 0.005 + h1 * 0.01;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      ctx.beginPath();
      // O(N) 极速数组遍历，无任何三角函数！
      for (let i = 0; i < MAX_POINTS; i++) {
        const pz = pointsZ[i];
        
        const rotX = pointsX[i] * cosY + pz * sinY;
        const rotZ = -pointsX[i] * sinY + pz * cosY;
        const rotY = pointsY[i] - offsetY;

        const scale = 300 / (300 + rotZ * 5); 
        const screenX = cx2 + rotX * scaleMult * scale;
        const screenY = cy2 - rotY * scaleMult * scale;

        if (i === 0) ctx.moveTo(screenX, screenY);
        else ctx.lineTo(screenX, screenY);
      }

      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 1;
      ctx.globalCompositeOperation = 'screen';
      ctx.stroke();

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = crtStyle;
      ctx.fillRect(0, (angleY * 200) % height, width, 2);

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [seedId]);

  return <canvas ref={canvasRef} className="w-full h-full object-cover mix-blend-screen" />;
};

// ==========================================
// 【极致优化点 3：消除布局重排的微重力引擎】
// 在 onMouseEnter 时缓存物理布局尺寸，拒绝在 144Hz 的 onMouseMove 中
// 调用 getBoundingClientRect 触发 Layout Thrashing。
// ==========================================
const MagneticWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{ left: number, top: number, width: number, height: number } | null>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseEnter = () => {
    if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current || window.innerWidth < 1024) return;
    const { left, top, width, height } = rectRef.current;
    x.set((e.clientX - (left + width / 2)) * 0.4);
    y.set((e.clientY - (top + height / 2)) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0); 
    y.set(0);
    rectRef.current = null;
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn("will-change-transform transform-gpu", className)}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 【极致优化点 4：完全剥离 React State 的爆破引擎】
// 原代码通过 useState 造成每秒 60 次 React 树 diffing，带来毁灭级开销。
// 现采用 ref 直接拦截 V8 DOM 层级进行 textContent 覆写，配合 CSS Grid 幽灵占位，性能达到完美。
// ==========================================
const ScrambleText = ({ text, className }: { text: string, className?: string }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let frame: number;
    const chars = "01@#$%&X_!<>?{}[]";
    const duration = 800; 
    const startTime = performance.now();
    
    const animate = (now: number) => {
      if (!spanRef.current) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const revealCount = Math.floor(text.length * easeProgress);

      let display = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealCount) display += text[i];
        else if (text[i] === " ") display += " "; 
        else display += chars[Math.floor(Math.random() * chars.length)];
      }
      // 绕开 React 虚拟 DOM，直接进行物理写入
      spanRef.current.textContent = display;

      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return (
    <span className={cn("grid w-full items-start", className)}>
      {/* 隐藏层撑起物理空间，确保文字变换时不会触发任何外部 Reflow */}
      <span className="col-start-1 row-start-1 invisible whitespace-pre-wrap break-words">{text}</span>
      <span ref={spanRef} className="col-start-1 row-start-1 whitespace-pre-wrap break-words text-cyan-50">{text}</span>
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
          <span className="text-slate-500 tracking-widest font-mono">
            {post.date}
          </span>
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
  
  const paginationRef = useRef<HTMLDivElement>(null);
  const anchorState = useRef({ isLocked: false, targetY: 0, lockTimer: 0 as any });

  const globalMouseX = useMotionValue(-1000);
  const globalMouseY = useMotionValue(-1000);
  const smoothX = useSpring(globalMouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const smoothY = useSpring(globalMouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  // 挂载高频滚动纠正死锁
  useAnimationFrame(() => {
    if (anchorState.current.isLocked && paginationRef.current) {
      const currentY = paginationRef.current.getBoundingClientRect().top;
      const delta = currentY - anchorState.current.targetY;
      if (Math.abs(delta) > 0.5) {
        window.scrollBy({ top: delta, behavior: 'auto' });
      }
    }
  });

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
      anchorState.current.targetY = paginationRef.current.getBoundingClientRect().top;
      anchorState.current.isLocked = true;
      clearTimeout(anchorState.current.lockTimer);
      anchorState.current.lockTimer = setTimeout(() => {
        anchorState.current.isLocked = false;
      }, 1000); 
    }
    onPageChange(newPage);
  };

  // 【极致优化点 5：避免样式失效风暴】
  // 隔离鼠标移动对整体排版的侵入。只在 RAF 空闲帧去获取容器边界进行相对坐标计算，杜绝卡顿！
  const mousePosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024) {
      globalMouseX.set(e.clientX);
      globalMouseY.set(e.clientY);
    }
    
    mousePosRef.current.x = e.clientX;
    mousePosRef.current.y = e.clientY;

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        if (listContainerRef.current) {
          const rect = listContainerRef.current.getBoundingClientRect();
          listContainerRef.current.style.setProperty('--mouse-x', `${mousePosRef.current.x - rect.left}px`);
          listContainerRef.current.style.setProperty('--mouse-y', `${mousePosRef.current.y - rect.top}px`);
        }
        rafRef.current = null;
      });
    }
  }, [globalMouseX, globalMouseY]);

  const getVisiblePages = () => {
    const delta = 1;
    const range =[];
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