// src/components/Sidebar.tsx
import React, { useRef, useCallback, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion, useAnimationFrame, useMotionValue, useScroll, useTransform, AnimatePresence, useMotionTemplate } from 'framer-motion';
import { Cpu, HardDrive, Search, Filter } from 'lucide-react';

// ==========================================
// 【顶级炫技点 1：零重绘 原生 SVG 示波器】
// 保留了极客感十足的硬件数据流监控，不卡主线程
// ==========================================
const LiveOscilloscope = ({ isActive }: { isActive: boolean }) => {
  const pathData = useMotionValue("");
  const points = useRef<number[]>(Array(15).fill(0));

  useAnimationFrame(() => {
    if (!isActive) return;
    points.current.shift();
    points.current.push(Math.random() * 10);
    const d = points.current.reduce((acc, val, i) => {
      const x = i * 4; 
      const y = 12 - val;
      return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, "");
    pathData.set(d);
  });

  if (!isActive) return null;

  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[60px] h-[12px] opacity-80 hidden lg:block pointer-events-none">
      <svg width="60" height="12" className="stroke-cyan-400 fill-none overflow-visible">
        <motion.path 
          d={pathData} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ filter: 'drop-shadow(0 0 3px rgba(34,211,238,0.8))' }}
        />
      </svg>
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
  // 生成严谨的十六进制地址序列
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
      {/* 极简机械锁定框 (HUD Bracket) */}
      {isActive && (
        <motion.div 
          layoutId="sector-targeting-bracket"
          className="absolute inset-0 z-0 pointer-events-none"
          transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
        >
          <div className="absolute inset-0 bg-cyan-950/40 border border-cyan-500/30 shadow-[inset_0_0_15px_rgba(34,211,238,0.1)]" />
          {/* 四个角的瞄准定位销 */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-cyan-400" />
          
          {/* 选中时的光栅微闪烁 */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMzQsMjExLDIzOCwwLjE1KSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay" />
        </motion.div>
      )}

      {/* 交互核心内容区 */}
      <div className="relative z-10 flex flex-col items-start w-full">
        {/* 地址总线标识 */}
        <div className="flex items-center gap-2 mb-0.5">
          <HardDrive className={cn("w-3 h-3 transition-colors hidden lg:block", isActive ? "text-cyan-400" : "text-slate-600")} />
          <span className={cn(
            "text-[8px] tracking-[0.2em] transition-colors font-bold",
            isActive ? "text-cyan-300" : "text-slate-600 group-hover:text-cyan-700"
          )}>
            LOC:{hexAddress}
          </span>
        </div>

        {/* 干净利落的分类名称 */}
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
  
  // 包含 ALL 的全量列表
  const categoriesWithAll = useMemo(() => ['All', ...categories], [categories]);

  // 【顶级炫技点 2：内存检索器 (Sector Filter)】
  const[filterText, setFilterText] = useState("");
  
  const filteredCategories = useMemo(() => {
    if (!filterText.trim()) return categoriesWithAll;
    const lowerFilter = filterText.toLowerCase();
    return categoriesWithAll.filter(c => c.toLowerCase().includes(lowerFilter));
  },[filterText, categoriesWithAll]);

  // 【顶级炫技点 3：零重绘滚动进度遥测 (Scroll Telemetry)】
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollXProgress } = useScroll({ container: scrollContainerRef });
  
  // 将 0~1 的浮点数转化为 0%~100% 的字符串，由 Framer Motion 直接推向 DOM
  const scrollPercentY = useMotionTemplate`${useTransform(scrollYProgress, [0, 1],[0, 100], { clamp: true }).get().toFixed(0)}%`;
  const scrollPercentX = useMotionTemplate`${useTransform(scrollXProgress, [0, 1], [0, 100], { clamp: true }).get().toFixed(0)}%`;

  // 路由跳转
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
      
      {/* ==========================================
          侧边栏头部控制台 & 过滤器
          ========================================== */}
      <div className="relative mb-4 mt-2 flex flex-col border-b border-cyan-900/30 pb-4">
        
        {/* PC 端标题 */}
        <div className="hidden lg:flex items-center justify-between pl-4 mb-4">
          <div className="absolute left-0 top-0 bottom-4 w-[2px] bg-cyan-950 overflow-hidden">
            <motion.div 
              className="w-full h-1/4 bg-cyan-500 shadow-[0_0_5px_#06b6d4]" 
              animate={{ y:["-100%", "400%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
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

        {/* 检索终端输入框 */}
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
    
      {/* ==========================================
          全息衰减滚动列表 (Holographic Scroll Viewport)
          ========================================== */}
      <style>{`
        /* 隐藏原生丑陋的滚动条 */
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-scroll::-webkit-scrollbar { display: none; }

        /* 【顶级炫技点 4：硬件级视口遮罩 (CSS Mask)】 */
        /* PC端：上下渐隐发虚，仿佛数据融入了黑暗深渊 */
        .mask-y { mask-image: linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); }
        
        /* 移动端：左右渐隐发虚，防止文字生硬切断 */
        .mask-x { mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%); }
      `}</style>

      <div 
        ref={scrollContainerRef}
        className={cn(
          "flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto hide-scroll relative z-10",
          "gap-2 lg:gap-1 w-full",
          "max-w-[100vw] lg:max-w-full", // 限制宽度
          "max-h-16 lg:max-h-[50vh]",    // 限制高度：PC端最高占据屏幕一半，多余的在内部滚动
          "mask-x lg:mask-y lg:pr-2 lg:py-2"
        )} 
      >
        {/* 当过滤结果为空时 */}
        {filteredCategories.length === 0 && (
          <div className="text-[10px] font-mono text-red-500/60 p-4 w-full text-center tracking-widest">
            ERR: NO_SECTOR_MATCH
          </div>
        )}

        <AnimatePresence initial={false}>
          {filteredCategories.map((category, index) => {
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

      {/* ==========================================
          零重绘遥测进度条 (Scroll Telemetry UI)
          ========================================== */}
      <div className="mt-2 text-[8px] font-mono text-cyan-900/60 flex items-center justify-between lg:pl-4 w-full select-none">
        <div className="flex items-center gap-1">
          <span className="w-1 h-3 bg-cyan-900/40" />
          <span className="w-1 h-3 bg-cyan-900/40" />
          <span className="w-1 h-3 bg-cyan-900/40" />
        </div>
        <div className="flex items-center gap-2">
          <span>BUFFER_POS:</span>
          {/* PC端显示Y轴滚动百分比，移动端显示X轴滚动百分比 */}
          <motion.span className="text-cyan-600 hidden lg:inline-block w-6 text-right font-bold">{scrollPercentY}</motion.span>
          <motion.span className="text-cyan-600 lg:hidden w-6 text-right font-bold">{scrollPercentX}</motion.span>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;