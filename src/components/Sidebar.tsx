// src/components/Sidebar.tsx
import React, { useRef, useCallback, useState, useMemo, useEffect, useDeferredValue } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, AnimatePresence, useVelocity, MotionValue } from 'framer-motion';
import { Cpu, HardDrive, Search, Filter } from 'lucide-react';

// ==========================================
// 【高超技术 1：无状态 (Stateless) 十六进制高频分配器】
// 以 60fps 直接操作 DOM 节点更新内存地址，不触发任何 React 生命周期
// ==========================================
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
  },[]);
  return (
    <span ref={memRef} className="font-mono transition-colors duration-100 drop-shadow-[0_0_4px_rgba(6,182,212,0.8)] text-cyan-400 font-bold">
      0x8F9A_22B1
    </span>
  );
};

// ==========================================
// 【高超技术 2：传感器融合 (Sensor Fusion) 动态示波器】
// 将物理滚动速率 (Velocity) 注入到底层 Canvas 位图计算中
// ==========================================
const LiveOscilloscope = ({ isActive, globalVelocity }: { isActive: boolean; globalVelocity: MotionValue<number> }) => {
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
};

// ==========================================
// 【侧边栏扇区单项组件】
// ==========================================
interface SectorItemProps {
  category: string;
  isActive: boolean;
  index: number;
  globalVelocity: MotionValue<number>;
  onClick: (category: string) => void;
}

const SectorItem = ({ category, isActive, index, onClick, globalVelocity }: SectorItemProps) => {
  const hexAddress = `0x${(index * 8).toString(16).toUpperCase().padStart(4, '0')}`;
  
  // 【高超技术 3：Direct-DOM 密码学篡改引擎 (Quantum Scramble)】
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
      textRef.current.innerText = originalText
        .split("")
        .map((letter, idx) => {
          if (idx < iteration) return originalText[idx];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      
      if (iteration >= originalText.length) clearInterval(scrambleRef.current);
      iteration += 1 / 2; // 控制解码速度
    }, 30);
  }, [category]);

  // 挂载激活状态时触发解码
  useEffect(() => { if (isActive) triggerScramble(); }, [isActive, triggerScramble]);

  return (
    <motion.button
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10, filter: "blur(5px)" }}
      transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
      onClick={() => onClick(category)}
      onMouseEnter={triggerScramble}
      className={cn(
        "group relative flex shrink-0 lg:w-full py-3 px-3 lg:px-4 font-mono transition-colors duration-200 outline-none cursor-crosshair", 
        "items-center lg:items-start justify-center lg:justify-start overflow-visible",
        isActive ? "text-cyan-400" : "text-slate-500 hover:text-cyan-200"
      )}
    >
      {isActive && (
        <motion.div 
          layoutId="sector-targeting-bracket"
          className="absolute inset-0 z-0 pointer-events-none"
          transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
        >
          {/* 玻璃态与光晕 */}
          <div className="absolute inset-0 bg-cyan-950/40 border border-cyan-500/30 shadow-[inset_0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-[2px]" />
          
          {/* 【高超技术 4：硬件级撕裂切片 (Glitch Slice)】 */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-screen glitch-slice pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMzQsMjExLDIzOCwwLjI1KSIvPjwvc3ZnPg==')]" />

          {/* 四角战术准星锁定 */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
        </motion.div>
      )}

      <div className="relative z-10 flex flex-col items-start w-full">
        <div className="flex items-center gap-2 mb-1">
          <HardDrive className={cn("w-3 h-3 transition-colors hidden lg:block", isActive ? "text-cyan-400 animate-pulse drop-shadow-[0_0_5px_cyan]" : "text-slate-600")} />
          <span className={cn(
            "text-[8px] tracking-[0.2em] transition-colors font-bold",
            isActive ? "text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" : "text-slate-600 group-hover:text-cyan-700"
          )}>
            LOC:{hexAddress}
          </span>
        </div>

        <div className="flex items-center w-full">
          <span 
            ref={textRef}
            className={cn(
              "tracking-[0.1em] font-bold transition-all duration-300 text-xs lg:text-sm uppercase whitespace-nowrap",
              isActive && "drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            )}>
            {category}
          </span>
        </div>
      </div>

      <LiveOscilloscope isActive={isActive} globalVelocity={globalVelocity} />
    </motion.button>
  );
};

// ==========================================
// 【主导出组件：系统级数据分配器】
// ==========================================
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
  },[deferredFilterText, categoriesWithAll]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollXProgress } = useScroll({ container: scrollContainerRef });
  
  // 获取全局滚动速率，注入到各个扇区的底层引擎中
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

  // 【高超技术 5：GPU 指针捕捉面 (CSS Variables Tracking)】
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  },[]);

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

      <div className="relative mb-4 mt-2 flex flex-col border-b border-cyan-900/30 pb-4 z-10">
        
        <div className="hidden lg:flex items-center justify-between pl-4 mb-4">
          <div className="absolute left-0 top-0 bottom-4 w-[2px] bg-cyan-950 overflow-hidden">
            <div className="w-full h-1/4 bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-sidebar-scanline will-change-transform mix-blend-screen" />
          </div>
          
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
          <div className="text-[10px] font-mono text-red-500/80 p-4 w-full text-center tracking-widest bg-red-950/10 border border-red-900/30">
            [ ERR: NO_SECTOR_MATCH ]
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

      <div className="mt-2 text-[8px] font-mono text-cyan-900/60 flex items-center justify-between lg:pl-4 w-full select-none z-10 relative">
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

    </div>
  );
};

export default Sidebar;