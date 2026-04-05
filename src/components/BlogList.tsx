// src/components/BlogList.tsx
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import { Post } from '@/types';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
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
// 【全局分形缓存 - 已预计算】
// ==========================================
const MAX_POINTS = 680;
const FRACTAL_CACHE = new Map<string | number, {
  pointsX: Float32Array;
  pointsY: Float32Array;
  pointsZ: Float32Array;
  scaleMult: number;
  offsetY: number;
  h1: number;
  hue: number;
}>();

const getFractalData = (seedId: string | number) => {
  if (FRACTAL_CACHE.has(seedId)) return FRACTAL_CACHE.get(seedId)!;
  
  const hash = String(seedId).split('').reduce((acc, char) => Math.imul(31, acc) + char.charCodeAt(0) | 0, 0);
  const absHash = Math.abs(hash);
  const h1 = (absHash % 100) / 100;
  const h2 = ((absHash >> 4) % 100) / 100;
  const attractorType = absHash % 4;

  const pointsX = new Float32Array(MAX_POINTS);
  const pointsY = new Float32Array(MAX_POINTS);
  const pointsZ = new Float32Array(MAX_POINTS);

  let cx = 0.1, cy = 0.1, cz = 0.1;
  let dt = 0.01, scaleMult = 1, offsetY = 0;
  
  for (let i = 0; i < MAX_POINTS; i++) {
    let dx = 0, dy = 0, dz = 0;
    if (attractorType === 0) {
      const sigma = 10, rho = 28, beta = 8/3;
      dx = sigma * (cy - cx);
      dy = cx * (rho - cz) - cy;
      dz = cx * cy - beta * cz;
      scaleMult = 12;
      offsetY = -8;
    } else if (attractorType === 1) {
      const a = 0.2, b = 0.2, c = 5.7;
      dx = -cy - cz;
      dy = cx + a * cy;
      dz = b + cz * (cx - c);
      scaleMult = 18;
      offsetY = 0;
    } else if (attractorType === 2) {
      const a = 35, b = 3, c = 28;
      dx = a * (cy - cx);
      dy = (c - a) * cx - cx * cz + c * cy;
      dz = cx * cy - b * cz;
      scaleMult = 22;
      offsetY = 5;
    } else {
      dx = cy;
      dy = -cx + cy * cz;
      dz = 1 - cy * cy;
      scaleMult = 20;
      offsetY = 0;
    }
    cx += dx * dt;
    cy += dy * dt;
    cz += dz * dt;
    pointsX[i] = cx + Math.sin(cy * h1) * 2;
    pointsY[i] = cy + Math.cos(cx * h2) * 2;
    pointsZ[i] = cz;
  }
  
  const hue = 160 + (absHash % 120);
  const result = { pointsX, pointsY, pointsZ, scaleMult, offsetY, h1, hue };
  FRACTAL_CACHE.set(seedId, result);
  return result;
};

// ==========================================
// 【轻量化 Canvas - 支持滚动暂停（强化版）】
// ==========================================
const QuantumFieldCanvas = memo(({ seedId, paused = false, isScrolling = false }: { seedId: string | number; paused?: boolean; isScrolling?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
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
      // 滚动时彻底暂停 Canvas 重绘
      if (paused || isScrolling) {
        animationId = requestAnimationFrame(render);
        return;
      }
      
      ctx.fillStyle = bgStyle;
      ctx.fillRect(0, 0, width, height);
      angleY += 0.005 + h1 * 0.01;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      ctx.beginPath();
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
  }, [seedId, paused, isScrolling]);

  return <canvas ref={canvasRef} className="w-full h-full object-cover mix-blend-screen" />;
});
QuantumFieldCanvas.displayName = 'QuantumFieldCanvas';

// ==========================================
// 【优化后的 MagneticWrapper（滚动时完全禁用）】
// ==========================================
const MagneticWrapper = memo(({ 
  children, 
  className, 
  disabled = false 
}: { 
  children: React.ReactNode; 
  className?: string; 
  disabled?: boolean; 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (disabled || window.innerWidth < 1024 || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.4);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.4);
  }, [x, y, disabled]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { if (!disabled) { x.set(0); y.set(0); } }}
      style={{ x: springX, y: springY }}
      className={cn("will-change-transform transform-gpu", className)}
    >
      {children}
    </motion.div>
  );
});
MagneticWrapper.displayName = 'MagneticWrapper';

// ==========================================
// 【ScrambleText - 一次性动画 + memo】
// ==========================================
const ScrambleText = memo(({ text, className }: { text: string; className?: string }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    let frame: number;
    const chars = "01@#$%&X_!<>?{}[]";
    const duration = 600;
    const startTime = performance.now();

    const animate = (now: number) => {
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
      el.textContent = display;
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return (
    <span className={cn("grid w-full items-start", className)}>
      <span className="col-start-1 row-start-1 invisible whitespace-pre-wrap break-words">{text}</span>
      <span ref={spanRef} className="col-start-1 row-start-1 whitespace-pre-wrap break-words text-cyan-50">{text}</span>
    </span>
  );
});
ScrambleText.displayName = 'ScrambleText';

// ==========================================
// 【优化后的 ListItem（滚动时禁用变色 + 倾斜）】
// ==========================================
interface ListItemProps {
  post: Post;
  index: number;
  disabled?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ListItem = memo(({ post, index, disabled = false, onMouseEnter, onMouseLeave }: ListItemProps) => {
  const hexIndex = `0x${(index + 1).toString(16).toUpperCase().padStart(2, '0')}`;

  return (
    <Link
      to={`/posts/${post.contentKey}`}
      className="group relative block w-full cursor-none overflow-hidden rounded-lg border border-white/5 bg-transparent p-6 lg:p-8 transition-colors duration-500 hover:border-cyan-500/30"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!disabled && (
        <div 
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
          style={{ 
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34,211,238,0.08), transparent 40%)` 
          }} 
        />
      )}

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
          <span className="text-slate-500 tracking-widest font-mono">{post.date}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-[cubic-bezier(0.16,1,0.3,1)] w-full" />
    </Link>
  );
});
ListItem.displayName = 'ListItem';

// ==========================================
// 主组件（已加强滚动控制）
// ==========================================
const BlogList: React.FC<{ posts: Post[]; currentPage: number; totalPages: number; onPageChange: (p: number) => void }> = ({
  posts,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [hoveredPost, setHoveredPost] = useState<Post | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const globalMouseX = useMotionValue(-1000);
  const globalMouseY = useMotionValue(-1000);
  const smoothX = useSpring(globalMouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const smoothY = useSpring(globalMouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  // 滚动节流（核心修复 - 加强版）
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let rafTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      clearTimeout(rafTimeout);
      // 滚动停止后 220ms 才解除，减少频繁状态切换
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 220);
    };

    const container = listContainerRef.current;
    if (container) container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
      clearTimeout(rafTimeout);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024 && !isScrolling) {
      globalMouseX.set(e.clientX);
      globalMouseY.set(e.clientY);
    }
  }, [globalMouseX, globalMouseY, isScrolling]);

  const handleHover = useCallback((post: Post | null) => {
    if (isScrolling) return;
    setHoveredPost(post);
  }, [isScrolling]);

  const triggerPageChange = useCallback((newPage: number) => {
    if (newPage === currentPage) return;
    onPageChange(newPage);
  }, [currentPage, onPageChange]);

  const getVisiblePages = () => {
    const delta = 1;
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number;
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

  const hoverMonitor = hoveredPost ? createPortal(
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
          <div className="absolute top-2 left-3 z-10 font-mono text-[9px] text-cyan-400 drop-shadow-[0_0_2px_#06b6d4]">
            ID: {hoveredPost.id} // CHAOS_MATRIX_SYNC
          </div>
          <div className="w-full h-full relative opacity-80">
            <QuantumFieldCanvas seedId={hoveredPost.id} paused={isScrolling} isScrolling={isScrolling} />
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
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="flex flex-col gap-4 w-full origin-center transform-gpu"
          >
            {posts.map((post, index) => (
              <ListItem
                key={post.id}
                post={post}
                index={index + (currentPage - 1) * 5}
                disabled={isScrolling}
                onMouseEnter={() => handleHover(post)}
                onMouseLeave={() => handleHover(null)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div ref={paginationRef} layout className="flex justify-center md:justify-start pt-8 border-t border-cyan-900/30">
        <Pagination>
          <PaginationContent className="gap-2 font-mono text-sm">
            <MagneticWrapper disabled={isScrolling}>
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
              {getVisiblePages().map((page, idx) => (
                <motion.div key={page === '...' ? `dots-${idx}` : page} layout>
                  <MagneticWrapper disabled={isScrolling}>
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

            <MagneticWrapper disabled={isScrolling}>
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