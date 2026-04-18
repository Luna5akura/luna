// src/components/BlogList.tsx
import React, { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Post } from '@/types';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence, useTransform, MotionValue } from 'framer-motion';
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
type GlyphSignature = {
  scale: number;
};

const GLYPH_SCALE_MIN = 0.84;
const GLYPH_SCALE_RANGE = 0.42;
const GLYPH_RESPONSE_MIN = 0.7;
const GLYPH_RESPONSE_RANGE = 1.7;

const getGlyphBlur = (scale: number) => {
  if (scale >= 1.17) return 1.05;
  if (scale <= 0.95) return 0.78;
  return 0;
};

const createGlyphSignature = (seedSource: string, index: number): GlyphSignature => {
  let seed = 0;
  const source = `${seedSource}:${index}`;
  for (let i = 0; i < source.length; i += 1) {
    seed = (seed * 31 + source.charCodeAt(i)) % 100000;
  }

  const normalized = (offset: number) => {
    const value = Math.sin(seed * 0.017 + offset) * 43758.5453;
    return value - Math.floor(value);
  };

  return {
    scale: GLYPH_SCALE_MIN + normalized(2.9) * GLYPH_SCALE_RANGE,
  };
};

const ReactiveGlyph = memo(({
  char,
  depthX,
  depthY,
  signature,
  emphasis = 1,
  isActive = false,
  className,
}: {
  char: string;
  depthX: MotionValue<number>;
  depthY: MotionValue<number>;
  signature: GlyphSignature;
  emphasis?: number;
  isActive?: boolean;
  className?: string;
}) => {
  const normalizedScale = (signature.scale - GLYPH_SCALE_MIN) / GLYPH_SCALE_RANGE;
  const responseCurve = normalizedScale * normalizedScale;
  const response = (GLYPH_RESPONSE_MIN + responseCurve * GLYPH_RESPONSE_RANGE) * emphasis;
  const blur = getGlyphBlur(signature.scale);
  const x = useTransform(depthX, [-1, 1], [-10 * response, 10 * response]);
  const y = useTransform(depthY, [-1, 1], [-8 * response, 8 * response]);

  return (
    <motion.span
      className={cn("inline-block will-change-transform", className)}
      animate={{
        scale: isActive ? signature.scale : 1,
        filter: isActive && blur > 0 ? `blur(${blur}px)` : 'blur(0px)',
      }}
      transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
      style={{
        x,
        y,
        paddingRight: char === ' ' ? '0.24em' : undefined,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
});
ReactiveGlyph.displayName = 'ReactiveGlyph';

const ResponsiveTextLine = memo(({
  text,
  depthX,
  depthY,
  className,
  emphasis = 1,
  isActive = false,
}: {
  text: string;
  depthX: MotionValue<number>;
  depthY: MotionValue<number>;
  className?: string;
  emphasis?: number;
  isActive?: boolean;
}) => {
  const signatures = useMemo(
    () => Array.from(text).map((_, index) => createGlyphSignature(text, index)),
    [text]
  );

  if (!isActive) {
    return <span className={cn("inline-block whitespace-pre-wrap", className)}>{text}</span>;
  }

  return (
    <span className={cn("flex flex-wrap items-baseline", className)}>
      {Array.from(text).map((char, index) => (
        <ReactiveGlyph
          key={`${text}-${index}`}
          char={char}
          depthX={depthX}
          depthY={depthY}
          signature={signatures[index]}
          emphasis={emphasis}
          isActive={isActive}
        />
      ))}
    </span>
  );
});
ResponsiveTextLine.displayName = 'ResponsiveTextLine';

// ==========================================
// 【优化后的 ListItem（滚动时禁用变色 + 倾斜）】
// ==========================================
interface ListItemProps {
  post: Post;
  index: number;
  isHovered: boolean;
  hasHoveredPeer: boolean;
  disabled?: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ListItem = memo(({ post, index, isHovered, hasHoveredPeer, disabled = false, onHoverStart, onHoverEnd }: ListItemProps) => {
  const hexIndex = `0x${(index + 1).toString(16).toUpperCase().padStart(2, '0')}`;
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const depthShiftX = useMotionValue(0);
  const depthShiftY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 220, damping: 26, mass: 0.8 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 220, damping: 26, mass: 0.8 });
  const smoothDepthX = useSpring(depthShiftX, { stiffness: 200, damping: 24, mass: 0.85 });
  const smoothDepthY = useSpring(depthShiftY, { stiffness: 200, damping: 24, mass: 0.85 });
  const layerShiftX = useTransform(smoothDepthX, [-1, 1], [-18, 18]);
  const layerShiftY = useTransform(smoothDepthY, [-1, 1], [-15, 15]);
  const metaShiftX = useTransform(smoothDepthX, [-1, 1], [-14, 14]);
  const metaShiftY = useTransform(smoothDepthY, [-1, 1], [-10, 10]);
  const titleShiftX = useTransform(smoothDepthX, [-1, 1], [-24, 24]);
  const titleShiftY = useTransform(smoothDepthY, [-1, 1], [-18, 18]);
  const dateShiftX = useTransform(smoothDepthX, [-1, 1], [-30, 30]);
  const dateShiftY = useTransform(smoothDepthY, [-1, 1], [-18, 18]);
  const reticleX = useTransform(smoothDepthX, [-1, 1], [-36, 36]);
  const reticleY = useTransform(smoothDepthY, [-1, 1], [-24, 24]);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--mouse-x', '50%');
    el.style.setProperty('--mouse-y', '50%');
  }, []);

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    const normalizedX = (localX / rect.width) * 2 - 1;
    const normalizedY = (localY / rect.height) * 2 - 1;

    tiltX.set(-normalizedY * 6);
    tiltY.set(normalizedX * 8);
    depthShiftX.set(normalizedX);
    depthShiftY.set(normalizedY);
    cardRef.current.style.setProperty('--mouse-x', `${localX}px`);
    cardRef.current.style.setProperty('--mouse-y', `${localY}px`);
  }, [depthShiftX, depthShiftY, disabled, tiltX, tiltY]);

  const resetCardMouse = useCallback(() => {
    tiltX.set(0);
    tiltY.set(0);
    depthShiftX.set(0);
    depthShiftY.set(0);
    if (cardRef.current) {
      cardRef.current.style.setProperty('--mouse-x', '50%');
      cardRef.current.style.setProperty('--mouse-y', '50%');
    }
  }, [depthShiftX, depthShiftY, tiltX, tiltY]);

  const cardState = isHovered
    ? {
        scale: 1.07,
        x: 22,
        y: -8,
        z: 132,
        opacity: 1,
        filter: 'brightness(1.18) saturate(1.16)',
        boxShadow: '0 36px 62px rgba(2,12,27,0.58), 0 0 28px rgba(34,211,238,0.16)',
      }
    : hasHoveredPeer
      ? {
          scale: 0.965,
          x: -10,
          y: 2,
          z: -44,
          opacity: 0.46,
          filter: 'brightness(0.56) saturate(0.72)',
          boxShadow: '0 14px 24px rgba(2,12,27,0.24)',
        }
      : {
          scale: 1,
          x: 0,
          y: 0,
          z: 0,
          opacity: 0.95,
          filter: 'brightness(1)',
          boxShadow: '0 18px 32px rgba(2,12,27,0.24)',
        };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleCardMouseMove}
      onMouseEnter={() => {
        if (!disabled) onHoverStart();
      }}
      onMouseLeave={() => {
        resetCardMouse();
        onHoverEnd();
      }}
      className={cn("group/card relative transform-gpu", isHovered ? "z-30" : hasHoveredPeer ? "z-10" : "z-20")}
      style={{
        transformStyle: 'preserve-3d',
        transformPerspective: 1400,
        contentVisibility: 'auto',
        containIntrinsicSize: '280px',
      }}
    >
      <Link
        to={`/posts/${post.contentKey}`}
        aria-label={post.title}
        className="absolute inset-0 z-40 cursor-none outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
      />
      <motion.div
        animate={cardState}
        transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.72 }}
        className="relative transform-gpu pointer-events-none"
        style={{
          rotateX: smoothTiltX,
          rotateY: smoothTiltY,
          transformStyle: 'preserve-3d',
          perspective: 1400,
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-6 -bottom-5 h-10 bg-cyan-500/10 blur-2xl transition-all duration-500"
          style={{ transform: isHovered ? 'translateZ(-64px) scaleX(0.84) skewX(-20deg)' : 'translateZ(-88px) scaleX(0.68) skewX(-20deg)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,16,0.96),rgba(4,8,16,0.78))]"
          style={{ transform: 'translateZ(-34px)' }}
        />
        <div
          className="pointer-events-none absolute inset-[1px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_52%),linear-gradient(135deg,rgba(9,16,28,0.92),rgba(4,9,17,0.82))]"
          style={{ transform: 'translateZ(-12px)' }}
        />
        <div
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/16 to-transparent"
          style={{ transform: 'translateZ(12px)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-cyan-500/18 to-transparent"
          style={{ transform: 'translateZ(8px)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            transform: 'translateZ(16px)',
            backgroundImage: 'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
            backgroundSize: '100% 52px, 52px 100%',
          }}
        />

        {!disabled && (
          <div
            className="pointer-events-none absolute inset-[1px] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            style={{
              transform: 'translateZ(26px)',
              background: 'radial-gradient(560px circle at var(--mouse-x) var(--mouse-y), rgba(34,211,238,0.12), transparent 42%)',
            }}
          />
        )}

        <div
          className="pointer-events-none absolute inset-[1px] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="absolute inset-0 bg-cyan-950/6 shadow-[inset_0_0_18px_rgba(34,211,238,0.08)]" />
          <div className="absolute left-4 top-4 h-3 w-3 border-l border-t border-cyan-500/45" />
          <div className="absolute right-4 top-4 h-3 w-3 border-r border-t border-cyan-500/45" />
          <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-cyan-500/45" />
          <div className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-cyan-500/45" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-16 w-16 border border-cyan-500/22 opacity-0 mix-blend-screen group-hover/card:opacity-100"
            style={{ x: reticleX, y: reticleY, transform: 'translateZ(58px) translate(-50%, -50%)' }}
          />
        </div>

        <motion.div
          className="relative z-10 overflow-hidden px-6 py-6 lg:px-8 lg:py-8"
          style={{ x: layerShiftX, y: layerShiftY, transform: 'translateZ(42px)' }}
        >
          <motion.div
            className="relative z-10 mb-5 flex items-center gap-4 border-l-2 border-cyan-500/45 pl-4 text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-900"
            style={{ x: metaShiftX, y: metaShiftY, transform: 'translateZ(64px)' }}
            animate={{ scale: isHovered ? 1.045 : 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
          >
            <span className="font-bold text-cyan-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.22)]">[{hexIndex}]</span>
            <span className="h-[1px] w-12 bg-cyan-900/50" />
            <span className="text-slate-500 transition-colors group-hover/card:text-cyan-300">
              <ResponsiveTextLine
                text={`// ALLOC_ZONE: ${post.category}`}
                depthX={smoothDepthX}
                depthY={smoothDepthY}
                emphasis={0.48}
                isActive={isHovered}
              />
            </span>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-x-0 top-[76px] h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
            style={{ x: metaShiftX, transform: 'translateZ(58px)' }}
          />

          <motion.div
            className="relative z-10 flex flex-col justify-between gap-6 transition-transform duration-500 ease-out group-hover/card:translate-x-4 md:flex-row md:items-end"
            style={{ transform: 'translateZ(72px)' }}
          >
            <motion.div
              className="relative w-full md:max-w-[70%]"
              style={{ x: titleShiftX, y: titleShiftY, transform: 'translateZ(92px)' }}
              animate={{ scale: isHovered ? 1.12 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
            >
              <div className="pointer-events-none absolute -left-3 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
              <h2 className="w-full text-2xl font-black uppercase tracking-tight text-slate-300 transition-all duration-300 group-hover/card:text-white group-hover/card:drop-shadow-[0_0_18px_rgba(34,211,238,0.45)] md:text-4xl">
                <ResponsiveTextLine
                  text={post.title}
                  depthX={smoothDepthX}
                  depthY={smoothDepthY}
                  emphasis={1}
                  isActive={isHovered}
                />
              </h2>
            </motion.div>
            <motion.div
              className="relative flex shrink-0 flex-col items-start border-l border-cyan-500/20 pl-4 font-mono text-xs text-slate-600 md:items-end md:border-l-0 md:border-t md:border-cyan-500/20 md:pl-0 md:pt-4"
              style={{ x: dateShiftX, y: dateShiftY, transform: 'translateZ(106px)' }}
              animate={{ scale: isHovered ? 1.055 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
            >
              <span className="flex items-center gap-2 transition-colors group-hover/card:text-cyan-300">
                <span className="h-1.5 w-1.5 bg-slate-600 transition-colors group-hover/card:animate-pulse group-hover/card:bg-cyan-400" />
                <ResponsiveTextLine
                  text="SYS.TIME"
                  depthX={smoothDepthX}
                  depthY={smoothDepthY}
                  emphasis={0.4}
                  isActive={isHovered}
                />
              </span>
              <span className="font-mono tracking-widest text-slate-500">
                <ResponsiveTextLine
                  text={post.date}
                  depthX={smoothDepthX}
                  depthY={smoothDepthY}
                  emphasis={0.36}
                  isActive={isHovered}
                />
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute right-6 top-6 h-10 w-10 border border-cyan-500/22 opacity-50"
            style={{ x: reticleX, y: reticleY, transform: 'translateZ(118px)' }}
          />
        </motion.div>

        <div
          className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-gradient-to-r from-cyan-400/10 via-cyan-400 to-cyan-300/10 transition-transform duration-700 origin-left group-hover/card:scale-x-100"
          style={{ transform: 'translateZ(38px)', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
      </motion.div>
    </div>
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
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const panelX = useMotionValue(0);
  const panelY = useMotionValue(0);
  const smoothPanelX = useSpring(panelX, { stiffness: 180, damping: 24, mass: 0.8 });
  const smoothPanelY = useSpring(panelY, { stiffness: 180, damping: 24, mass: 0.8 });
  const rotateY = useTransform(smoothPanelX, [-1, 1], [-5.5, 5.5]);
  const rotateX = useTransform(smoothPanelY, [-1, 1], [4.5, -4.5]);
  const boardOffsetX = useTransform(smoothPanelX, [-1, 1], [-8, 8]);
  const boardOffsetY = useTransform(smoothPanelY, [-1, 1], [-8, 8]);
  const decorOffsetX = useTransform(smoothPanelX, [-1, 1], [-14, 14]);
  const decorOffsetY = useTransform(smoothPanelY, [-1, 1], [-14, 14]);
  const contentOffsetX = useTransform(smoothPanelX, [-1, 1], [-20, 20]);
  const contentOffsetY = useTransform(smoothPanelY, [-1, 1], [-20, 20]);

  useEffect(() => {
    let timeoutId = 0;
    let rafId = 0;

    const handleScroll = () => {
      if (rafId !== 0) return;

      rafId = window.requestAnimationFrame(() => {
        setIsScrolling(true);
        setHoveredIndex(null);
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          setIsScrolling(false);
        }, 140);
        rafId = 0;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024 && !isScrolling) {
      const rect = e.currentTarget.getBoundingClientRect();
      const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normalizedY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      panelX.set(normalizedX);
      panelY.set(normalizedY);
    }
  }, [isScrolling, panelX, panelY]);

  const handleMouseLeave = useCallback(() => {
    panelX.set(0);
    panelY.set(0);
    setHoveredIndex(null);
  }, [panelX, panelY]);

  const triggerPageChange = useCallback((newPage: number) => {
    if (newPage === currentPage) return;
    onPageChange(newPage);
  }, [currentPage, onPageChange]);

  const visiblePages = useMemo(() => {
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
  }, [currentPage, totalPages]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 flex w-full flex-col overflow-visible px-3 py-3 pb-16 pr-6 perspective-[1400px] md:px-4 md:py-4 md:pr-8 lg:pr-10"
    >
      <motion.div
        className="relative isolate mb-16 min-h-[400px] transform-gpu overflow-visible px-2 py-2 md:px-3 md:py-3"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="pointer-events-none absolute inset-x-6 inset-y-7 border border-cyan-950/80 bg-[linear-gradient(180deg,rgba(4,9,17,0.94),rgba(2,6,12,0.76))] md:inset-x-8 md:inset-y-8"
          style={{ x: boardOffsetX, y: boardOffsetY, transform: 'translateZ(-110px)' }}
        />
        <motion.div
          className="pointer-events-none absolute inset-x-12 top-10 h-28 bg-cyan-500/8 blur-3xl"
          style={{ x: decorOffsetX, y: decorOffsetY, transform: 'translateZ(-72px)' }}
        />
        <motion.div
          className="pointer-events-none absolute inset-x-12 top-12 h-px bg-gradient-to-r from-transparent via-cyan-200/18 to-transparent"
          style={{ x: decorOffsetX, y: decorOffsetY, transform: 'translateZ(-16px)' }}
        />

        <motion.div
          className="relative z-10 overflow-visible px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6"
          style={{ x: contentOffsetX, y: contentOffsetY, transformStyle: 'preserve-3d' }}
        >
          <div className="pointer-events-none absolute inset-x-3 inset-y-4 border border-cyan-500/10 bg-[linear-gradient(180deg,rgba(5,11,20,0.82),rgba(2,7,14,0.48))] backdrop-blur-[2px] sm:inset-x-4 sm:inset-y-5 md:inset-x-5 md:inset-y-6" style={{ transform: 'translateZ(-6px)' }} />
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={`page-${currentPage}`}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="flex w-full origin-center transform-gpu flex-col gap-6 overflow-visible px-2 py-2 pr-5 md:px-3 md:py-3 md:pr-7 lg:pr-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {posts.map((post, index) => {
                const absoluteIndex = index + (currentPage - 1) * 5;
                const isHovered = hoveredIndex === absoluteIndex;
                return (
                  <ListItem
                    key={post.id}
                    post={post}
                    index={absoluteIndex}
                    isHovered={isHovered}
                    hasHoveredPeer={hoveredIndex !== null && hoveredIndex !== absoluteIndex}
                    disabled={isScrolling}
                    onHoverStart={() => setHoveredIndex(absoluteIndex)}
                    onHoverEnd={() => setHoveredIndex((current) => (current === absoluteIndex ? null : current))}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div
        ref={paginationRef}
        className="relative flex justify-center overflow-visible px-2 pt-8 pb-2 pr-4 md:px-3 md:justify-start md:pb-3 md:pr-6"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-800/55 to-transparent" />
        <motion.div
          className="pointer-events-none absolute left-6 top-6 h-12 w-40 bg-cyan-500/8 blur-2xl"
          style={{ x: decorOffsetX, y: decorOffsetY, transform: 'translateZ(-36px)' }}
        />
        <motion.div
          className="relative overflow-visible px-4 py-4 md:px-5"
          style={{ x: contentOffsetX, y: contentOffsetY, transform: 'translateZ(12px)' }}
        >
          <div className="pointer-events-none absolute inset-0 border border-cyan-500/10 bg-[linear-gradient(180deg,rgba(4,9,17,0.76),rgba(2,6,12,0.44))] backdrop-blur-[2px]" style={{ transform: 'translateZ(-4px)' }} />
          <Pagination>
            <PaginationContent className="gap-2 font-mono text-sm">
              <MagneticWrapper disabled={isScrolling}>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => currentPage > 1 && triggerPageChange(currentPage - 1)}
                    className={cn(
                      "cursor-none rounded-none border border-cyan-900/50 bg-transparent text-slate-500 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-300",
                      currentPage === 1 && "pointer-events-none opacity-20"
                    )}
                  />
                </PaginationItem>
              </MagneticWrapper>

              <AnimatePresence mode="popLayout">
                {visiblePages.map((page, idx) => (
                  <motion.div key={page === '...' ? `dots-${idx}` : page}>
                    <MagneticWrapper disabled={isScrolling}>
                      <PaginationItem>
                        {page === '...' ? (
                          <PaginationEllipsis className="text-cyan-900" />
                        ) : (
                          <PaginationLink
                            onClick={() => triggerPageChange(page as number)}
                            isActive={currentPage === page}
                            className={cn(
                              "h-10 w-10 cursor-none rounded-none border font-bold transition-all duration-300",
                              currentPage === page
                                ? "scale-110 border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-[0_0_18px_rgba(6,182,212,0.3)]"
                                : "border-cyan-900/50 bg-transparent text-slate-500 hover:border-cyan-500 hover:bg-cyan-950/30 hover:text-cyan-300"
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
                      "cursor-none rounded-none border border-cyan-900/50 bg-transparent text-slate-500 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-300",
                      currentPage === totalPages && "pointer-events-none opacity-20"
                    )}
                  />
                </PaginationItem>
              </MagneticWrapper>
            </PaginationContent>
          </Pagination>
        </motion.div>
      </motion.div>
    </div>
  );
};

const MemoizedBlogList = memo(BlogList);
MemoizedBlogList.displayName = 'BlogList';

export default MemoizedBlogList;
