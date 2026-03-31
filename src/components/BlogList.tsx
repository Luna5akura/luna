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
// 缓存保持不变，仅将 Canvas 绘制调整为单色风格
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
    } else if (attractorType === 1) {
      const a = 0.95, b = 0.7, c = 0.6, d = 3.5, e = 0.25, f = 0.1;
      dx = (cz - b) * cx - d * cy;
      dy = d * cx + (cz - b) * cy;
      dz = c + a * cz - Math.pow(cz, 3)/3 - (cx*cx + cy*cy)*(1 + e*cz) + f*cz*Math.pow(cx, 3);
      dt = 0.02; scaleMult = 45; offsetY = 0.5;
    } else if (attractorType === 2) {
      const a = 1.89;
      dx = -a*cx - 4*cy - 4*cz - cy*cy;
      dy = -a*cy - 4*cz - 4*cx - cz*cz;
      dz = -a*cz - 4*cx - 4*cy - cx*cx;
      dt = 0.005; scaleMult = 10; offsetY = -2;
    } else {
      const b = 0.19;
      dx = Math.sin(cy) - b*cx;
      dy = Math.sin(cz) - b*cy;
      dz = Math.sin(cx) - b*cz;
      dt = 0.1; scaleMult = 25; offsetY = 0;
    }
    cx += dx * dt; cy += dy * dt; cz += dz * dt;
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
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    const width = 320;
    const height = 220;
    canvas.width = width;
    canvas.height = height;
    const { pointsX, pointsY, pointsZ, scaleMult, offsetY, h1 } = getFractalData(seedId);
    let angleY = 0;
    let animationId: number;
    const cx2 = width / 2;
    const cy2 = height / 2;
    const strokeStyle = '#000000'; // 黑色线条，复古风格
    const bgStyle = '#c0c0c0';     // Win95 灰色背景
    const render = () => {
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
      ctx.stroke();
      // 增加像素扫描线效果
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, (angleY * 200) % height, width, 2);
      animationId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationId);
  }, [seedId]);
  return <canvas ref={canvasRef} className="w-full h-full object-cover" style={{ imageRendering: 'pixelated' }} />;
};

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
    x.set((e.clientX - (left + width / 2)) * 0.2); // 减弱磁吸效果
    y.set((e.clientY - (top + height / 2)) * 0.2);
  };
  const handleMouseLeave = () => {
    x.set(0); y.set(0);
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
      spanRef.current.textContent = display;
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text]);
  return (
    <span className={cn("grid w-full items-start", className)}>
      <span className="col-start-1 row-start-1 invisible whitespace-pre-wrap break-words">{text}</span>
      <span ref={spanRef} className="col-start-1 row-start-1 whitespace-pre-wrap break-words text-black">{text}</span>
    </span>
  );
};

const ListItem = ({ post, index, setHoveredPost }: { post: Post, index: number, setHoveredPost: any }) => {
  const hexIndex = `0x${(index + 1).toString(16).toUpperCase().padStart(2, '0')}`;
  return (
    <Link
      to={`/posts/${post.contentKey}`}
      className="group relative block w-full cursor-default overflow-hidden border border-gray-600 bg-[#ece9d8] p-6 lg:p-8 transition-all duration-200 hover:bg-[#f5f3e8] hover:border-gray-800"
      onMouseEnter={() => setHoveredPost(post)}
      onMouseLeave={() => setHoveredPost(null)}
    >
      <div className="relative z-10 flex items-center gap-4 text-[10px] font-mono text-gray-700 uppercase tracking-wide mb-4">
        <span className="text-gray-800 font-bold">[{hexIndex}]</span>
        <span className="w-12 h-[1px] bg-gray-400" />
        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
          // CATEGORY: {post.category}
        </span>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-transform duration-200 group-hover:translate-x-1">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-gray-800 group-hover:text-black transition-all duration-200 w-full md:max-w-[70%]">
          <ScrambleText text={post.title} />
        </h2>
        <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-600 gap-1 shrink-0">
          <span className="flex items-center gap-2 group-hover:text-gray-800 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-black" />
            PUBLISH.DATE
          </span>
          <span className="text-gray-500 tracking-widest font-mono">
            {post.date}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left w-full" />
    </Link>
  );
};

const BlogList: React.FC<{ posts: Post[], currentPage: number, totalPages: number, onPageChange: (p: number) => void }> = ({ posts, currentPage, totalPages, onPageChange }) => {
  const [hoveredPost, setHoveredPost] = useState<Post | null>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const anchorState = useRef({ isLocked: false, targetY: 0, lockTimer: 0 as any });
  const globalMouseX = useMotionValue(-1000);
  const globalMouseY = useMotionValue(-1000);
  const smoothX = useSpring(globalMouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const smoothY = useSpring(globalMouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  useAnimationFrame(() => {
    if (anchorState.current.isLocked && paginationRef.current) {
      const currentY = paginationRef.current.getBoundingClientRect().top;
      const delta = currentY - anchorState.current.targetY;
      if (Math.abs(delta) > 0.5) window.scrollBy({ top: delta, behavior: 'auto' });
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
  }, []);

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
    const range = [];
    const rangeWithDots = [];
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block will-change-transform"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="relative w-[320px] h-[220px] border-2 border-gray-700 bg-[#c0c0c0] shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080] overflow-hidden p-1">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-700 z-10" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-700 z-10" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-700 z-10" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-700 z-10" />
          <div className="absolute top-2 left-3 z-10 font-mono text-[9px] text-black">
            ID: {hoveredPost.id} // PREVIEW
          </div>
          <div className="w-full h-full relative opacity-90">
            <QuantumFieldCanvas seedId={hoveredPost.id} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  ) : null;

  return (
    <div ref={listContainerRef} onMouseMove={handleMouseMove} className="relative w-full z-10 pb-16 flex flex-col bg-[#ece9d8]">
      {hoverMonitor}
      <motion.div layout className="relative z-10 mb-16 min-h-[400px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={`page-${currentPage}`}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4 w-full"
          >
            {posts.map((post, index) => (
              <ListItem key={post.id} post={post} index={index + (currentPage - 1) * 5} setHoveredPost={setHoveredPost} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div ref={paginationRef} layout className="flex justify-center md:justify-start pt-8 border-t border-gray-400">
        <Pagination>
          <PaginationContent className="gap-2 font-mono text-sm">
            <MagneticWrapper>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && triggerPageChange(currentPage - 1)}
                  className={cn(
                    "cursor-default border border-gray-600 bg-[#c0c0c0] hover:bg-[#d4d0c8] hover:border-gray-800 transition-all duration-100 text-gray-800 rounded-sm shadow-[inset_-1px_-1px_0px_#808080,inset_1px_1px_0px_#ffffff] active:shadow-[inset_1px_1px_0px_#808080,inset_-1px_-1px_0px_#ffffff]",
                    currentPage === 1 && "pointer-events-none opacity-40"
                  )}
                />
              </PaginationItem>
            </MagneticWrapper>
            <AnimatePresence mode="popLayout">
              {getVisiblePages().map((page, index) => (
                <motion.div key={page === '...' ? `dots-${index}` : page} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  <MagneticWrapper>
                    <PaginationItem>
                      {page === '...' ? (
                        <PaginationEllipsis className="text-gray-500" />
                      ) : (
                        <PaginationLink
                          onClick={() => triggerPageChange(page as number)}
                          isActive={currentPage === page}
                          className={cn(
                            "cursor-default w-10 h-10 rounded-sm border transition-all duration-100 font-bold",
                            currentPage === page
                              ? "bg-[#0a246a] text-white border-gray-800 shadow-[inset_-1px_-1px_0px_#808080,inset_1px_1px_0px_#ffffff]"
                              : "text-gray-800 bg-[#c0c0c0] border-gray-600 hover:bg-[#d4d0c8] shadow-[inset_-1px_-1px_0px_#808080,inset_1px_1px_0px_#ffffff] active:shadow-[inset_1px_1px_0px_#808080,inset_-1px_-1px_0px_#ffffff]"
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
                    "cursor-default border border-gray-600 bg-[#c0c0c0] hover:bg-[#d4d0c8] hover:border-gray-800 transition-all duration-100 text-gray-800 rounded-sm shadow-[inset_-1px_-1px_0px_#808080,inset_1px_1px_0px_#ffffff] active:shadow-[inset_1px_1px_0px_#808080,inset_-1px_-1px_0px_#ffffff]",
                    currentPage === totalPages && "pointer-events-none opacity-40"
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