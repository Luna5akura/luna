// src/components/Sidebar.tsx
import React, { useRef, useCallback, useState, useMemo, useEffect, useDeferredValue } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, AnimatePresence, useVelocity, MotionValue } from 'framer-motion';
import { Cpu, HardDrive, Search, Filter } from 'lucide-react';

const DataStreamer = () => {
  const memRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let frameId: number;
    let count = 0;
    const update = () => {
      count++;
      if (count % 5 === 0 && memRef.current) {
        const hex = Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, '0');
        memRef.current.innerText = `0x${hex.slice(0,4)}_${hex.slice(4)}`;
      }
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);
  return <span ref={memRef} className="font-mono text-black font-bold">0x8F9A_22B1</span>;
};

const LiveOscilloscope = ({ isActive, globalVelocity }: { isActive: boolean; globalVelocity: MotionValue<number> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef(new Float32Array(15));

  useEffect(() => {
    for (let i = 0; i < 15; i++) points.current[i] = Math.random() * 10;
  }, []);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    let frameId: number;
    let phase = 0;
    const render = () => {
      const rawVel = Math.abs(globalVelocity.get());
      const isOverload = rawVel > 300;
      const targetAmp = isOverload ? 10 : 4;
      const pts = points.current;
      for (let i = 0; i < 14; i++) pts[i] = pts[i + 1];
      pts[14] = Math.sin(phase) * targetAmp + (isOverload ? Math.random() * 4 : 0);
      phase += isOverload ? 0.6 : 0.2;
      ctx.clearRect(0, 0, 60, 24);
      ctx.strokeStyle = isOverload ? '#ff0000' : '#000000';
      ctx.beginPath();
      ctx.moveTo(0, 12 - pts[0]);
      for (let i = 1; i < 15; i++) ctx.lineTo(i * 4, 12 - pts[i]);
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
};

interface SectorItemProps {
  category: string;
  isActive: boolean;
  index: number;
  globalVelocity: MotionValue<number>;
  onClick: (category: string) => void;
}

const SectorItem = ({ category, isActive, index, onClick, globalVelocity }: SectorItemProps) => {
  const hexAddress = `0x${(index * 8).toString(16).toUpperCase().padStart(4, '0')}`;
  const textRef = useRef<HTMLSpanElement>(null);
  const scrambleRef = useRef<NodeJS.Timeout>();
  const triggerScramble = useCallback(() => {
    if (!textRef.current) return;
    let iteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@#$%^&*";
    const originalText = category;
    clearInterval(scrambleRef.current);
    scrambleRef.current = setInterval(() => {
      if (!textRef.current) return;
      textRef.current.innerText = originalText.split("").map((letter, idx) => idx < iteration ? originalText[idx] : chars[Math.floor(Math.random() * chars.length)]).join("");
      if (iteration >= originalText.length) clearInterval(scrambleRef.current);
      iteration += 1 / 2;
    }, 30);
  }, [category]);
  useEffect(() => { if (isActive) triggerScramble(); }, [isActive, triggerScramble]);
  return (
    <motion.button
      layout
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -5, filter: "blur(2px)" }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(category)}
      onMouseEnter={triggerScramble}
      className={cn(
        "group relative flex shrink-0 lg:w-full py-2 px-3 lg:px-4 font-mono transition-colors duration-100 outline-none cursor-default",
        "items-center lg:items-start justify-center lg:justify-start overflow-visible",
        isActive ? "text-black bg-gray-200" : "text-gray-600 hover:text-black"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="sector-targeting-bracket"
          className="absolute inset-0 z-0 pointer-events-none border-2 border-gray-700 bg-gray-300"
          transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
        />
      )}
      <div className="relative z-10 flex flex-col items-start w-full">
        <div className="flex items-center gap-2 mb-1">
          <HardDrive className={cn("w-3 h-3 transition-colors hidden lg:block", isActive ? "text-black" : "text-gray-500")} />
          <span className={cn("text-[8px] tracking-wide transition-colors font-bold", isActive ? "text-black" : "text-gray-500")}>
            LOC:{hexAddress}
          </span>
        </div>
        <div className="flex items-center w-full">
          <span ref={textRef} className={cn("tracking-wide font-bold transition-all duration-200 text-xs lg:text-sm uppercase whitespace-nowrap", isActive && "drop-shadow-none")}>
            {category}
          </span>
        </div>
      </div>
      <LiveOscilloscope isActive={isActive} globalVelocity={globalVelocity} />
    </motion.button>
  );
};

interface SidebarProps {
  categories: string[];
  isExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');
  const categoriesWithAll = useMemo(() => ['All', ...categories], [categories]);
  const [filterText, setFilterText] = useState("");
  const deferredFilterText = useDeferredValue(filterText);
  const filteredCategories = useMemo(() => {
    if (!deferredFilterText.trim()) return categoriesWithAll;
    const lowerFilter = deferredFilterText.toLowerCase();
    return categoriesWithAll.filter(c => c.toLowerCase().includes(lowerFilter));
  }, [deferredFilterText, categoriesWithAll]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollXProgress } = useScroll({ container: scrollContainerRef });
  const { scrollY: globalScrollY } = useScroll();
  const globalVelocity = useVelocity(globalScrollY);
  const scrollPercentY = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);
  const scrollPercentX = useTransform(scrollXProgress, (v) => `${Math.round(v * 100)}%`);

  const handleCategoryClick = useCallback((category: string) => {
    const to = category === 'All' ? '/' : `/?category=${category}`;
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => navigate(to));
    } else {
      navigate(to);
    }
  }, [navigate]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <div
      className="flex flex-col w-full min-w-0 max-w-full relative cyber-panel-container group/panel"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        @keyframes sidebar-scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-sidebar-scanline { animation: sidebar-scanline 2s linear infinite; }
        .cyber-panel-container {
          --mouse-x: -1000px;
          --mouse-y: -1000px;
        }
        .cyber-panel-container::before {
          content: '';
          position: absolute;
          inset: -20px;
          background: radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(0,0,0,0.05), transparent 40%);
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }
        .cyber-panel-container:hover::before { opacity: 1; }
      `}</style>

      <div className="relative mb-4 mt-2 flex flex-col border-b border-gray-400 pb-4 z-10">
        <div className="hidden lg:flex items-center justify-between pl-4 mb-4">
          <div className="absolute left-0 top-0 bottom-4 w-[2px] bg-gray-400 overflow-hidden">
            <div className="w-full h-1/4 bg-gray-700 animate-sidebar-scanline will-change-transform" />
          </div>
          <div className="text-[10px] uppercase text-gray-600 font-bold tracking-wider flex flex-col w-full gap-1">
            <div className="flex items-center gap-2 group-hover/panel:text-gray-800 transition-colors">
              <Cpu className="w-3 h-3" />
              INDEX ALLOCATOR
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-500">
              <span>VOL: <DataStreamer /></span>
              <span className="flex items-center gap-1 text-gray-600">
                <span className="w-1 h-1 bg-gray-600 rounded-full animate-ping" /> ONLINE
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:pl-4">
          <Search className={cn("absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-3 h-3 transition-colors", filterText ? "text-black" : "text-gray-500")} />
          <input
            type="text"
            placeholder="FILTER SECTOR..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            spellCheck={false}
            className={cn(
              "w-full bg-gray-200 border text-xs font-mono text-black placeholder:text-gray-500 py-1.5 pl-7 lg:pl-8 pr-2 focus:outline-none transition-all duration-200 relative z-20",
              filterText ? "border-gray-700 bg-gray-100" : "border-gray-400"
            )}
          />
          {filterText && (
            <Filter className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-black" />
          )}
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className={cn(
          "flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto hide-scroll relative z-10",
          "gap-2 lg:gap-1 w-full",
          "max-w-[100vw] lg:max-w-full",
          "max-h-16 lg:max-h-[50vh]",
          "mask-x lg:mask-y lg:pr-2 lg:py-2"
        )}
      >
        {filteredCategories.length === 0 && (
          <div className="text-[10px] font-mono text-red-700 p-4 w-full text-center tracking-wider bg-red-100 border border-red-300">
            [ ERR: NO SECTOR MATCH ]
          </div>
        )}

        <AnimatePresence initial={false}>
          {filteredCategories.map((category) => {
            const isActive = (category === 'All' && !selectedCategory) || selectedCategory === category;
            return (
              <SectorItem
                key={category}
                index={categoriesWithAll.indexOf(category)}
                category={category}
                isActive={isActive}
                onClick={handleCategoryClick}
                globalVelocity={globalVelocity}
              />
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-2 text-[8px] font-mono text-gray-500 flex items-center justify-between lg:pl-4 w-full select-none z-10 relative">
        <div className="flex items-center gap-1">
          <span className="w-1 h-3 bg-gray-400" />
          <span className="w-1 h-3 bg-gray-400" />
          <span className="w-1 h-3 bg-gray-400" />
        </div>
        <div className="flex items-center gap-2">
          <span>BUFFER POS:</span>
          <motion.span className="text-gray-700 hidden lg:inline-block w-6 text-right font-bold">{scrollPercentY}</motion.span>
          <motion.span className="text-gray-700 lg:hidden w-6 text-right font-bold">{scrollPercentX}</motion.span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;