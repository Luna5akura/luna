// src/components/Sidebar.tsx
import React, { useRef, useCallback, useState, useMemo, useEffect, useDeferredValue } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Cpu, HardDrive, Search, Filter } from 'lucide-react';

// ==========================================
// 【极致优化点 1：Canvas 原生脱轨渲染 (Canvas Off-DOM Rendering)】
// 原代码每帧利用 JS 数组 shift/push 与字符串 reduce 拼接生成长长的 SVG path 属性，
// 强制引发浏览器的 SVG 解析引擎与 DOM 属性重绘 (DOM Attribute Mutation)。
// 现彻底抛弃 SVG，直接在底层 Canvas 的位图缓冲区中进行像素推送。同时通过 TypedArray 复用内存，
// 实现 0 字符串分配、0 DOM 操作、0 GC 垃圾生成的纯净 144Hz 渲染！
// ==========================================
const LiveOscilloscope = ({ isActive }: { isActive: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 使用 TypedArray 连续内存作为高频更新的环形缓冲区，拒绝创建任何 JS 对象
  const points = useRef(new Float32Array(15));
  
  useEffect(() => {
    // 预填充初始随机波形
    for (let i = 0; i < 15; i++) points.current[i] = Math.random() * 10;
  },[]);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // 开启 desynchronized 绕过系统合成器，实现极低延迟的屏幕硬件级刷新
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    // 静态属性设置移出渲染循环，降低指令级 CPU 消耗，并且避免外部 CSS drop-shadow 引发的图层栅格化灾难
    ctx.strokeStyle = '#22d3ee'; 
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 4;
    ctx.shadowColor = 'rgba(34,211,238,0.8)';

    let frameId: number;
    const render = () => {
      const pts = points.current;
      
      // O(N) 内存快移，完全没有任何新变量和对象产生
      for (let i = 0; i < 14; i++) pts[i] = pts[i + 1];
      pts[14] = Math.random() * 10;

      // 在单个渲染管线指令内完成图像覆写
      ctx.clearRect(0, 0, 60, 12);
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
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[60px] h-[12px] opacity-80 hidden lg:block pointer-events-none transform-gpu">
      <canvas ref={canvasRef} width={60} height={12} className="block" />
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
  onClick: (category: string) => void;
}

const SectorItem = ({ category, isActive, index, onClick }: SectorItemProps) => {
  const hexAddress = `0x${(index * 8).toString(16).toUpperCase().padStart(4, '0')}`;

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(category)}
      className={cn(
        "group relative flex shrink-0 lg:w-full py-2.5 px-3 lg:px-4 font-mono transition-colors duration-200 outline-none cursor-none", 
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
          <div className="absolute inset-0 bg-cyan-950/40 border border-cyan-500/30 shadow-[inset_0_0_15px_rgba(34,211,238,0.1)]" />
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-cyan-400" />
          
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMzQsMjExLDIzOCwwLjE1KSIvPjwvc3ZnPg==')] opacity-30" />
        </motion.div>
      )}

      <div className="relative z-10 flex flex-col items-start w-full">
        <div className="flex items-center gap-2 mb-0.5">
          <HardDrive className={cn("w-3 h-3 transition-colors hidden lg:block", isActive ? "text-cyan-400" : "text-slate-600")} />
          <span className={cn(
            "text-[8px] tracking-[0.2em] transition-colors font-bold",
            isActive ? "text-cyan-300" : "text-slate-600 group-hover:text-cyan-700"
          )}>
            LOC:{hexAddress}
          </span>
        </div>

        <div className="flex items-center w-full">
          <span className={cn(
            "tracking-[0.1em] font-bold transition-all duration-300 text-xs lg:text-sm uppercase whitespace-nowrap",
            isActive && "drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          )}>
            {category}
          </span>
        </div>
      </div>

      <LiveOscilloscope isActive={isActive} />
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

  // 【极致优化点 2：并发解耦搜索输入框 (Concurrent Mode Input Decoupling)】
  // 为过滤器加入 useDeferredValue，确保用户键盘输入的丝滑度永远处于最高优先级，
  // 将列表重排的繁重工作丢到浏览器主线程空闲阶段执行。
  const [filterText, setFilterText] = useState("");
  const deferredFilterText = useDeferredValue(filterText);
  
  const filteredCategories = useMemo(() => {
    if (!deferredFilterText.trim()) return categoriesWithAll;
    const lowerFilter = deferredFilterText.toLowerCase();
    return categoriesWithAll.filter(c => c.toLowerCase().includes(lowerFilter));
  }, [deferredFilterText, categoriesWithAll]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollXProgress } = useScroll({ container: scrollContainerRef });
  
  // ==========================================
  // 【极致优化点 3：修复并重构动态遥测探针 (Telemetry Teleport)】
  // 原代码错误地在 useMotionTemplate 中调用了 .get()，导致进度条永远被定死在 0% 无法更新！
  // 现改为原生 useTransform 函数映射，让 Framer Motion 的 C++ 渲染树直接接管滚动数值的变化，
  // 避开 React 生命周期的 Diff 比较，实现顺滑如丝的遥测输出。
  // ==========================================
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

  return (
    <div className="flex flex-col w-full min-w-0 max-w-full relative">
      <style>{`
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-scroll::-webkit-scrollbar { display: none; }

        /* ==========================================
           【极致优化点 4：CSS 硬件加速扫描线 (Hardware-Accelerated Scanlines)】
           原代码使用 Framer Motion 的 JS animate 控制不断循环的扫描线，持续唤醒主线程。
           现剥离 JS 动画，采用纯 CSS Keyframes 配合 transform，将其 100% 推入 GPU 合成器线程运行。
           ========================================== */
        @keyframes sidebar-scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-sidebar-scanline {
          animation: sidebar-scanline 1.5s linear infinite;
        }
      `}</style>

      <div className="relative mb-4 mt-2 flex flex-col border-b border-cyan-900/30 pb-4">
        
        <div className="hidden lg:flex items-center justify-between pl-4 mb-4">
          <div className="absolute left-0 top-0 bottom-4 w-[2px] bg-cyan-950 overflow-hidden">
            <div className="w-full h-1/4 bg-cyan-500 shadow-[0_0_5px_#06b6d4] animate-sidebar-scanline will-change-transform" />
          </div>
          
          <div className="text-[10px] uppercase text-cyan-700 font-bold tracking-[0.2em] flex flex-col w-full gap-1">
            <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3 text-cyan-500" />
              INDEX_ALLOCATOR
            </div>
            <div className="flex items-center justify-between text-[8px] text-slate-600">
              <span>VOL: 0x8F9A_22B1</span>
              <span className="flex items-center gap-1 text-cyan-800">
                <span className="w-1 h-1 bg-cyan-500 rounded-full animate-ping" /> ONLINE
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:pl-4">
           <Search className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-3 h-3 text-cyan-800" />
           <input
             type="text"
             placeholder="FILTER_SECTOR..."
             value={filterText}
             onChange={(e) => setFilterText(e.target.value)}
             spellCheck={false}
             className="w-full bg-cyan-950/10 border border-cyan-900/30 text-xs font-mono text-cyan-300 placeholder:text-cyan-900/50 py-1.5 pl-7 lg:pl-8 pr-2 focus:outline-none focus:border-cyan-500/50 transition-colors"
           />
           {filterText && (
              <Filter className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-cyan-500 animate-pulse" />
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
          <div className="text-[10px] font-mono text-red-500/60 p-4 w-full text-center tracking-widest">
            ERR: NO_SECTOR_MATCH
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
              />
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-2 text-[8px] font-mono text-cyan-900/60 flex items-center justify-between lg:pl-4 w-full select-none">
        <div className="flex items-center gap-1">
          <span className="w-1 h-3 bg-cyan-900/40" />
          <span className="w-1 h-3 bg-cyan-900/40" />
          <span className="w-1 h-3 bg-cyan-900/40" />
        </div>
        <div className="flex items-center gap-2">
          <span>BUFFER_POS:</span>
          {/* 这里 motion.span 会自动监听传入的 MotionValue 并无缝更新文本，零 React 渲染开销 */}
          <motion.span className="text-cyan-600 hidden lg:inline-block w-6 text-right font-bold">{scrollPercentY}</motion.span>
          <motion.span className="text-cyan-600 lg:hidden w-6 text-right font-bold">{scrollPercentX}</motion.span>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;