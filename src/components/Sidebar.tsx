// src/components/Sidebar.tsx
import React, { useRef, useCallback, useState, useMemo, useEffect, useDeferredValue, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, AnimatePresence, useVelocity, MotionValue, useMotionValue, useSpring } from 'framer-motion';
import { Cpu, HardDrive, Search, Filter } from 'lucide-react';

type GlyphSignature = {
  scale: number;
};

const GLYPH_SCALE_MIN = 0.86;
const GLYPH_SCALE_RANGE = 0.34;
const GLYPH_RESPONSE_MIN = 0.66;
const GLYPH_RESPONSE_RANGE = 1.46;

const getGlyphBlur = (scale: number) => {
  if (scale >= 1.12) return 0.88;
  if (scale <= 0.95) return 0.66;
  return 0;
};

const createGlyphSignature = (seedSource: string, index: number): GlyphSignature => {
  let seed = 0;
  const source = `${seedSource}:${index}`;
  for (let i = 0; i < source.length; i += 1) {
    seed = (seed * 29 + source.charCodeAt(i)) % 100000;
  }

  const normalized = (offset: number) => {
    const value = Math.sin(seed * 0.019 + offset) * 43758.5453;
    return value - Math.floor(value);
  };

  return {
    scale: GLYPH_SCALE_MIN + normalized(2.7) * GLYPH_SCALE_RANGE,
  };
};

const ReactiveGlyph = memo(({
  char,
  depthX,
  depthY,
  signature,
  emphasis = 1,
  isActive = false,
  fixedScale,
}: {
  char: string;
  depthX: MotionValue<number>;
  depthY: MotionValue<number>;
  signature: GlyphSignature;
  emphasis?: number;
  isActive?: boolean;
  fixedScale?: number;
}) => {
  const targetScale = fixedScale ?? signature.scale;
  const normalizedScale = (targetScale - GLYPH_SCALE_MIN) / GLYPH_SCALE_RANGE;
  const responseCurve = normalizedScale * normalizedScale;
  const response = (GLYPH_RESPONSE_MIN + responseCurve * GLYPH_RESPONSE_RANGE) * emphasis;
  const blur = getGlyphBlur(targetScale);
  const x = useTransform(depthX, [-1, 1], [-9 * response, 9 * response]);
  const y = useTransform(depthY, [-1, 1], [-7 * response, 7 * response]);

  return (
    <motion.span
      className="inline-block will-change-transform"
      animate={{
        scale: isActive ? targetScale : 1,
        filter: isActive && blur > 0 ? `blur(${blur}px)` : 'blur(0px)',
      }}
      transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.72 }}
      style={{
        x,
        y,
        paddingRight: char === ' ' ? '0.18em' : undefined,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
});
ReactiveGlyph.displayName = 'SidebarReactiveGlyph';

const ResponsiveTextLine = memo(({
  text,
  depthX,
  depthY,
  emphasis = 1,
  className,
  isActive = false,
  fixedScale,
}: {
  text: string;
  depthX: MotionValue<number>;
  depthY: MotionValue<number>;
  emphasis?: number;
  className?: string;
  isActive?: boolean;
  fixedScale?: number;
}) => {
  const signatures = useMemo(
    () => Array.from(text).map((_, index) => createGlyphSignature(text, index)),
    [text]
  );

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
          fixedScale={fixedScale}
        />
      ))}
    </span>
  );
});
ResponsiveTextLine.displayName = 'SidebarResponsiveTextLine';

// ==========================================
// 【高超技术 1：无状态 (Stateless) 十六进制高频分配器】
// 以 60fps 直接操作 DOM 节点更新内存地址，不触发任何 React 生命周期
// ==========================================
const DataStreamer = memo(() => {
  const memRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const update = () => {
      if (memRef.current) {
        const hex = Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, '0');
        memRef.current.innerText = `0x${hex.slice(0,4)}_${hex.slice(4)}`;
      }
    };
    update();
    const intervalId = window.setInterval(update, 180);
    return () => window.clearInterval(intervalId);
  }, []);
  return (
    <span ref={memRef} className="font-mono transition-colors duration-100 drop-shadow-[0_0_4px_rgba(6,182,212,0.8)] text-cyan-400 font-bold">
      0x8F9A_22B1
    </span>
  );
});
DataStreamer.displayName = 'DataStreamer';

// ==========================================
// 【高超技术 2：传感器融合 (Sensor Fusion) 动态示波器】
// 将物理滚动速率 (Velocity) 注入到底层 Canvas 位图计算中
// ==========================================
const LiveOscilloscope = memo(({ isActive, globalVelocity }: { isActive: boolean; globalVelocity: MotionValue<number> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef(new Float32Array(15));
  
  useEffect(() => {
    for (let i = 0; i < 15; i++) points.current[i] = Math.random() * 10;
  },[]);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let frameId: number;
    let phase = 0;

    const render = () => {
      // 极致优化：在 rAF 内部直接读取 Framer Motion 的值，完全不触发 React 组件渲染！
      const rawVel = Math.abs(globalVelocity.get());
      const isOverload = rawVel > 300; // 滚动速度阈值
      
      const targetAmp = isOverload ? 12 : 5;
      const noise = isOverload ? Math.random() * 8 : Math.random() * 2;

      const pts = points.current;
      for (let i = 0; i < 14; i++) pts[i] = pts[i + 1];
      pts[14] = Math.sin(phase) * targetAmp + noise;
      phase += isOverload ? 0.8 : 0.2; // 暴走状态下频率增加

      ctx.clearRect(0, 0, 60, 24);
      
      // 物理过载时的视觉畸变 (红色警告)
      ctx.strokeStyle = isOverload ? '#ef4444' : '#22d3ee'; 
      ctx.shadowBlur = isOverload ? 8 : 4;
      ctx.shadowColor = isOverload ? 'rgba(239,68,68,0.9)' : 'rgba(34,211,238,0.8)';

      ctx.beginPath();
      ctx.moveTo(0, 12 - pts[0]);
      for (let i = 1; i < 15; i++) {
        ctx.lineTo(i * 4, 12 - pts[i]);
      }
      ctx.stroke();

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, globalVelocity]);

  if (!isActive) return null;

  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[60px] h-[24px] opacity-80 hidden lg:block pointer-events-none transform-gpu">
      <canvas ref={canvasRef} width={60} height={24} className="block" />
    </div>
  );
});
LiveOscilloscope.displayName = 'LiveOscilloscope';

// ==========================================
// 【侧边栏扇区单项组件】
// ==========================================
interface SectorItemProps {
  category: string;
  isActive: boolean;
  isHovered: boolean;
  hasHoveredPeer: boolean;
  index: number;
  globalVelocity: MotionValue<number>;
  onClick: (category: string) => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const SectorItem = memo(({ category, isActive, isHovered, hasHoveredPeer, index, onClick, globalVelocity, onHoverStart, onHoverEnd }: SectorItemProps) => {
  const hexAddress = `0x${(index * 8).toString(16).toUpperCase().padStart(4, '0')}`;
  const itemRef = useRef<HTMLButtonElement>(null);
  const depthShiftX = useMotionValue(0);
  const depthShiftY = useMotionValue(0);
  const smoothDepthX = useSpring(depthShiftX, { stiffness: 220, damping: 24, mass: 0.7 });
  const smoothDepthY = useSpring(depthShiftY, { stiffness: 220, damping: 24, mass: 0.7 });
  const contentShiftX = useTransform(smoothDepthX, [-1, 1], [-12, 12]);
  const contentShiftY = useTransform(smoothDepthY, [-1, 1], [-10, 10]);
  const metaShiftX = useTransform(smoothDepthX, [-1, 1], [-10, 10]);
  const metaShiftY = useTransform(smoothDepthY, [-1, 1], [-8, 8]);
  const titleShiftX = useTransform(smoothDepthX, [-1, 1], [-16, 16]);
  const titleShiftY = useTransform(smoothDepthY, [-1, 1], [-12, 12]);
  const isInteractive = isHovered || isActive;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!itemRef.current || window.innerWidth < 1024) return;
    const rect = itemRef.current.getBoundingClientRect();
    const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    depthShiftX.set(normalizedX);
    depthShiftY.set(normalizedY);
  }, [depthShiftX, depthShiftY]);

  const resetMouseDepth = useCallback(() => {
    depthShiftX.set(0);
    depthShiftY.set(0);
  }, [depthShiftX, depthShiftY]);

  const visualState = isHovered
    ? {
        scale: 1.11,
        x: 18,
        y: -4,
        z: 92,
        opacity: 1,
        filter: 'brightness(1.22) saturate(1.14)',
        boxShadow: '0 22px 38px rgba(0,0,0,0.38), 0 0 22px rgba(34,211,238,0.14)',
      }
    : hasHoveredPeer
      ? {
          scale: 0.945,
          x: -10,
          y: 1,
          z: -42,
          opacity: 0.42,
          filter: 'brightness(0.52) saturate(0.72)',
          boxShadow: '0 10px 18px rgba(0,0,0,0.18)',
        }
      : {
          scale: isActive ? 1.02 : 1,
          x: 0,
          y: 0,
          z: isActive ? 28 : 0,
          opacity: isActive ? 1 : 0.92,
          filter: isActive ? 'brightness(1.08)' : 'brightness(1)',
          boxShadow: isActive ? '0 14px 26px rgba(0,0,0,0.28), 0 0 16px rgba(34,211,238,0.08)' : '0 8px 16px rgba(0,0,0,0.12)',
        };

  return (
    <motion.button
      ref={itemRef}
      initial={{ opacity: 0, x: -20 }}
      exit={{ opacity: 0, x: -10, filter: "blur(5px)" }}
      onMouseMove={handleMouseMove}
      onClick={() => onClick(category)}
      onMouseEnter={onHoverStart}
      onMouseLeave={() => {
        resetMouseDepth();
        onHoverEnd();
      }}
      animate={visualState}
      className={cn(
        "group relative flex shrink-0 lg:w-full py-3 px-3 lg:px-4 font-mono transition-colors duration-200 outline-none cursor-crosshair transform-gpu",
        "items-center lg:items-start justify-center lg:justify-start overflow-visible",
        isHovered ? "z-30" : isActive ? "z-20" : "z-10",
        isActive ? "text-cyan-400" : "text-slate-500 hover:text-cyan-200"
      )}
      transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.7 }}
      style={{ transformStyle: 'preserve-3d', transformPerspective: 1200, transformOrigin: 'left center' }}
    >
      <div
        className="absolute inset-0 rounded-[2px] border border-white/5 bg-[linear-gradient(180deg,rgba(4,8,16,0.92),rgba(4,8,16,0.66))] pointer-events-none"
        style={{ transform: 'translateZ(-26px)' }}
      />
      <div
        className="absolute inset-x-2 bottom-0 h-4 rounded-full bg-cyan-500/10 blur-md pointer-events-none"
        style={{ transform: 'translateZ(-42px) translateY(12px) scaleX(0.82)' }}
      />
      <div
        className="absolute inset-x-1 top-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        style={{ transform: 'translateZ(8px)' }}
      />

      {isActive && (
        <motion.div 
          layoutId="sector-targeting-bracket"
          className="absolute inset-0 z-0 pointer-events-none"
          transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
          style={{ transform: 'translateZ(34px)' }}
        >
          <div className="absolute inset-0 bg-cyan-950/40 border border-cyan-500/30 shadow-[inset_0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-[2px]" />
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-screen glitch-slice pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMzQsMjExLDIzOCwwLjI1KSIvPjwvc3ZnPg==')]" />

          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
        </motion.div>
      )}

      <div className="relative z-10 flex flex-col items-start w-full" style={{ x: contentShiftX, y: contentShiftY, transform: 'translateZ(24px)' }}>
        <div className="flex items-center gap-2 mb-1" style={{ transform: 'translateZ(46px)' }}>
          <HardDrive className={cn("w-3 h-3 transition-colors hidden lg:block", isActive ? "text-cyan-400 animate-pulse drop-shadow-[0_0_5px_cyan]" : "text-slate-600")} />
          <motion.span
            style={{ x: metaShiftX, y: metaShiftY }}
            animate={{ scale: isInteractive ? 1.04 : 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.72 }}
            className={cn(
            "text-[8px] tracking-[0.2em] transition-colors font-bold",
            isActive ? "text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" : "text-slate-600 group-hover:text-cyan-300"
          )}>
            <ResponsiveTextLine text={`LOC:${hexAddress}`} depthX={smoothDepthX} depthY={smoothDepthY} emphasis={0.45} isActive={isInteractive} />
          </motion.span>
        </div>

        <motion.div
          className="flex items-center w-full"
          style={{ x: titleShiftX, y: titleShiftY, transform: 'translateZ(68px)' }}
          animate={{ scale: isInteractive ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.72 }}
        >
          <span
            className={cn(
              "tracking-[0.1em] font-bold transition-all duration-300 text-xs lg:text-sm uppercase whitespace-nowrap",
              (isActive || isHovered) && "drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            )}>
            <ResponsiveTextLine
              text={category}
              depthX={smoothDepthX}
              depthY={smoothDepthY}
              emphasis={0.9}
              isActive={isInteractive}
              fixedScale={isActive ? 1.08 : undefined}
            />
          </span>
        </motion.div>
      </div>

      <LiveOscilloscope isActive={isActive} globalVelocity={globalVelocity} />
    </motion.button>
  );
});
SectorItem.displayName = 'SectorItem';

// ==========================================
// 【主导出组件：系统级数据分配器】
// ==========================================
interface SidebarProps {
  categories: string[];
  isExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

type DocumentWithTransition = Document & {
  startViewTransition?: (callback: () => void) => void;
};

const SidebarComponent: React.FC<SidebarProps> = ({ categories }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');
  
  const categoriesWithAll = useMemo(() => ['All', ...categories], [categories]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const [filterText, setFilterText] = useState("");
  const deferredFilterText = useDeferredValue(filterText);
  
  const filteredCategories = useMemo(() => {
    if (!deferredFilterText.trim()) return categoriesWithAll;
    const lowerFilter = deferredFilterText.toLowerCase();
    return categoriesWithAll.filter(c => c.toLowerCase().includes(lowerFilter));
  },[deferredFilterText, categoriesWithAll]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollXProgress } = useScroll({ container: scrollContainerRef });
  
  // 获取全局滚动速率，注入到各个扇区的底层引擎中
  const { scrollY: globalScrollY } = useScroll(); 
  const globalVelocity = useVelocity(globalScrollY);

  const scrollPercentY = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);
  const scrollPercentX = useTransform(scrollXProgress, (v) => `${Math.round(v * 100)}%`);

  const panelX = useMotionValue(0);
  const panelY = useMotionValue(0);
  const smoothPanelX = useSpring(panelX, { stiffness: 180, damping: 24, mass: 0.8 });
  const smoothPanelY = useSpring(panelY, { stiffness: 180, damping: 24, mass: 0.8 });
  const rotateY = useTransform(smoothPanelX, [-1, 1], [-6, 6]);
  const rotateX = useTransform(smoothPanelY, [-1, 1], [4.5, -4.5]);
  const boardOffsetX = useTransform(smoothPanelX, [-1, 1], [-8, 8]);
  const boardOffsetY = useTransform(smoothPanelY, [-1, 1], [-8, 8]);
  const decorOffsetX = useTransform(smoothPanelX, [-1, 1], [-12, 12]);
  const decorOffsetY = useTransform(smoothPanelY, [-1, 1], [-12, 12]);
  const contentOffsetX = useTransform(smoothPanelX, [-1, 1], [-18, 18]);
  const contentOffsetY = useTransform(smoothPanelY, [-1, 1], [-18, 18]);

  const handleCategoryClick = useCallback((category: string) => {
    const to = category === 'All' ? '/' : `/?category=${category}`;
    const doc = document as DocumentWithTransition;
    if (doc.startViewTransition) {
      doc.startViewTransition(() => navigate(to));
    } else {
      navigate(to);
    }
  }, [navigate]);

  // 【高超技术 5：GPU 指针捕捉面 (CSS Variables Tracking)】
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    if (window.innerWidth >= 1024) {
      panelX.set(((x / rect.width) - 0.5) * 2);
      panelY.set(((y / rect.height) - 0.5) * 2);
    }
  }, [panelX, panelY]);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mouse-x", `-1000px`);
    e.currentTarget.style.setProperty("--mouse-y", `-1000px`);
    panelX.set(0);
    panelY.set(0);
    setHoveredCategory(null);
  }, [panelX, panelY]);

  return (
    <div 
      className="relative flex w-full min-w-0 max-w-none flex-col cyber-panel-container group/panel px-1.5 py-2 md:px-2 md:py-3"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-scroll::-webkit-scrollbar { display: none; }

        @keyframes sidebar-scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-sidebar-scanline { animation: sidebar-scanline 1.5s linear infinite; }

        /* Hardware Glitch Slice Effect */
        @keyframes glitch-slice-anim {
          0% { clip-path: inset(10% 0 80% 0); transform: translateX(-2px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translateX(2px); }
          40% { clip-path: inset(40% 0 30% 0); transform: translateX(-2px); }
          60% { clip-path: inset(90% 0 0% 0); transform: translateX(1px); }
          80% { clip-path: inset(20% 0 60% 0); transform: translateX(-1px); }
          100% { clip-path: inset(50% 0 30% 0); transform: translateX(2px); }
        }
        .glitch-slice {
          animation: glitch-slice-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }

        /* 鼠标探照灯引擎 */
        .cyber-panel-container {
          --mouse-x: -1000px;
          --mouse-y: -1000px;
        }
        .cyber-panel-container::before {
          content: '';
          position: absolute;
          inset: -20px;
          background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(34,211,238,0.1), transparent 40%);
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }
        .cyber-panel-container:hover::before { opacity: 1; }
      `}</style>

      <div className="perspective-[1400px] overflow-visible">
        <motion.div
          className="relative overflow-visible px-1 py-1.5 md:px-1.5 md:py-2"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className="absolute inset-x-1 inset-y-2 rounded-sm border border-white/5 bg-[linear-gradient(180deg,rgba(4,8,16,0.96),rgba(4,8,16,0.72))] shadow-[0_20px_40px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.04)] md:inset-x-1.5 md:inset-y-2.5"
            style={{ x: boardOffsetX, y: boardOffsetY, z: -50 }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_42%),repeating-linear-gradient(180deg,rgba(148,163,184,0.04),rgba(148,163,184,0.04)_1px,transparent_1px,transparent_18px)] opacity-80" />
            <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="absolute inset-y-5 left-3 w-px bg-gradient-to-b from-cyan-500/20 via-cyan-500/5 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 h-8 rounded-full bg-cyan-500/5 blur-xl" />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-x-0.5 inset-y-1.5 md:inset-x-1 md:inset-y-2"
            style={{ x: decorOffsetX, y: decorOffsetY, z: -10 }}
          >
            <div className="absolute right-4 top-4 h-8 w-8 border border-cyan-500/10" />
            <div className="absolute right-8 top-10 h-12 w-12 border border-cyan-500/10 opacity-60" />
            <div className="absolute left-3 top-10 bottom-12 w-[2px] bg-cyan-950/90 overflow-hidden hidden lg:block">
              <div className="w-full h-1/4 bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-sidebar-scanline will-change-transform mix-blend-screen" />
            </div>
            <div className="absolute inset-x-0 bottom-9 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute left-5 top-5 right-5 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-70" />
          </motion.div>

          <motion.div
            className="relative z-10 overflow-visible px-0.5 py-1.5 md:px-1 md:py-2"
            style={{ x: contentOffsetX, y: contentOffsetY, z: 26 }}
          >
            <div className="relative z-10 mb-4 mt-1.5 flex flex-col border-b border-cyan-900/30 px-1.5 pb-3 pt-1.5 md:px-2">
              
              <div className="hidden lg:flex items-center justify-between pl-4 mb-4">
                <div className="text-[10px] uppercase text-cyan-700 font-bold tracking-[0.2em] flex flex-col w-full gap-1">
                  <div className="flex items-center gap-2 group-hover/panel:text-cyan-500 transition-colors">
                    <Cpu className="w-3 h-3 group-hover/panel:drop-shadow-[0_0_5px_cyan]" />
                    INDEX_ALLOCATOR
                  </div>
                  <div className="flex items-center justify-between text-[8px] text-slate-600">
                    <span>VOL: <DataStreamer /></span>
                    <span className="flex items-center gap-1 text-cyan-800">
                      <span className="w-1 h-1 bg-cyan-500 rounded-full animate-ping" /> ONLINE
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative w-full lg:pl-4">
                <Search className={cn("absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-3 h-3 transition-colors", filterText ? "text-cyan-400" : "text-cyan-800")} />
                <input
                  type="text"
                  placeholder="FILTER_SECTOR..."
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  spellCheck={false}
                  className={cn(
                    "w-full bg-cyan-950/10 border text-xs font-mono text-cyan-300 placeholder:text-cyan-900/50 py-1.5 pl-7 lg:pl-8 pr-2 focus:outline-none transition-all duration-300 relative z-20",
                    filterText ? "border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.2)] bg-cyan-950/30" : "border-cyan-900/30 focus:border-cyan-500/50"
                  )}
                />
                {filterText && (
                    <Filter className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-cyan-400 animate-pulse drop-shadow-[0_0_5px_cyan]" />
                )}
              </div>
            </div>
          
            <div className="relative z-10 overflow-visible px-0.5 pb-1.5 pt-0.5 md:px-1 md:pb-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 border border-cyan-500/10 bg-[linear-gradient(180deg,rgba(4,8,16,0.72),rgba(4,8,16,0.4))] backdrop-blur-[2px] lg:right-8 xl:right-10" />
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent lg:right-12 xl:right-14" />
              <div 
                ref={scrollContainerRef}
                className={cn(
                  "relative z-10 flex flex-row lg:flex-col hide-scroll",
                  "overflow-x-auto lg:overflow-y-auto",
                  "gap-2 lg:gap-2 w-full",
                  "max-w-[100vw] lg:max-w-none",
                  "max-h-20 lg:max-h-[56vh]",
                  "mask-x lg:mask-y px-2.5 py-2.5 md:px-3 md:py-3",
                  "lg:w-[calc(100%+2rem)] lg:-mr-8 lg:pr-8 lg:pb-7",
                  "xl:w-[calc(100%+2.5rem)] xl:-mr-10 xl:pr-10"
                )} 
              >
              {filteredCategories.length === 0 && (
                <div className="text-[10px] font-mono text-red-500/80 p-4 w-full text-center tracking-widest bg-red-950/10 border border-red-900/30">
                  [ ERR: NO_SECTOR_MATCH ]
                </div>
              )}

              <AnimatePresence initial={false}>
                {filteredCategories.map((category) => {
                  const isActive = (category === 'All' && !selectedCategory) || selectedCategory === category;
                  const isHovered = hoveredCategory === category;
                  const hasHoveredPeer = hoveredCategory !== null && hoveredCategory !== category;
                  return (
                    <SectorItem
                      key={category}
                      index={categoriesWithAll.indexOf(category)}
                      category={category}
                      isActive={isActive}
                      isHovered={isHovered}
                      hasHoveredPeer={hasHoveredPeer}
                      onClick={handleCategoryClick}
                      globalVelocity={globalVelocity}
                      onHoverStart={() => setHoveredCategory(category)}
                      onHoverEnd={() => setHoveredCategory(null)}
                    />
                  );
                })}
              </AnimatePresence>
              </div>
            </div>

            <div className="relative z-10 mt-2 flex w-full select-none items-center justify-between px-2 text-[8px] font-mono text-cyan-900/60 md:px-3 lg:pl-7">
              <div className="flex items-center gap-1">
                <span className="w-1 h-3 bg-cyan-900/40" />
                <span className="w-1 h-3 bg-cyan-900/40" />
                <span className="w-1 h-3 bg-cyan-900/40" />
              </div>
              <div className="flex items-center gap-2">
                <span>BUFFER_POS:</span>
                <motion.span className="text-cyan-600 hidden lg:inline-block w-6 text-right font-bold drop-shadow-[0_0_2px_rgba(6,182,212,0.5)]">{scrollPercentY}</motion.span>
                <motion.span className="text-cyan-600 lg:hidden w-6 text-right font-bold drop-shadow-[0_0_2px_rgba(6,182,212,0.5)]">{scrollPercentX}</motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Sidebar = memo(SidebarComponent);
Sidebar.displayName = 'Sidebar';

export default Sidebar;
