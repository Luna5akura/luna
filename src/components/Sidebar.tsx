import React, { useState, useRef, useCallback, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useScrambleText } from '@/hooks/useScrambleText';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// ==========================================
// 【程序化合成音效】
// ==========================================
const audioCtx = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;
const isHoverableDevice = typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : true;

const playCyberSound = (type: 'hover' | 'click') => {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (type === 'hover' && isHoverableDevice) {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);
    gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime); 
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } else if (type === 'click') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, y: 10, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 12 }
  }
};

// ==========================================
// 单个分类项
// ==========================================
interface CategoryItemProps {
  category: string;
  isActive: boolean;
  index: number;
  onClick: (category: string) => void;
}

const CategoryItem = memo(({ category, isActive, index, onClick }: CategoryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLButtonElement>(null);
  
  const hexIndex = `0x${index.toString(16).toUpperCase().padStart(2, '0')}`;
  const scrambledText = useScrambleText(category.toUpperCase(), 20);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!itemRef.current || !isHoverableDevice) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set((e.clientX - centerX) * 0.2);
    mouseY.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playCyberSound('hover');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = () => {
    playCyberSound('click');
    onClick(category);
    
    // 移动端点击后自动将当前项滚动到可视区域居中
    if (itemRef.current && window.innerWidth < 1024) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <motion.button
      ref={itemRef}
      variants={itemVariants}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: magneticX, y: magneticY }}
      className={cn(
        // 关键：加入 max-w-full 防止单个按钮内容超宽撑爆设备屏幕
        "group relative flex shrink-0 lg:w-full p-2 lg:p-1 text-sm font-mono transition-all duration-300 lg:cursor-none overflow-visible outline-none snap-center max-w-[90vw] lg:max-w-full", 
        "items-center lg:items-start justify-center lg:justify-between will-change-transform rounded-md lg:rounded-none",
        isActive
          ? "bg-cyan-950/40 lg:bg-cyan-950/20 text-cyan-400 lg:pl-4"
          : "text-gray-500 hover:text-cyan-100"
      )}
    >
      <div className={cn(
        "absolute inset-0 pointer-events-none transition-opacity duration-500 overflow-hidden hidden lg:block",
        isActive || isHovered ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] -translate-x-full group-hover:animate-[cyber-scan_1.5s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className={cn(
        "absolute bg-transparent transition-all duration-300",
        "lg:left-0 lg:top-0 lg:bottom-0 lg:w-[2px] lg:h-auto",
        "left-2 right-2 bottom-0 h-[2px] lg:right-auto lg:bottom-0"
      )}>
        <div className={cn(
          "absolute inset-0 transition-all duration-300",
          isActive ? "bg-cyan-500 drop-shadow-[0_0_5px_rgba(6,182,212,1)]" : "bg-transparent lg:group-hover:bg-cyan-800"
        )}>
          {isActive && (
            <>
              <span className="absolute inset-0 bg-red-500 opacity-70 animate-[glitch-anim-1_0.2s_infinite_linear_alternate-reverse] mix-blend-screen" />
              <span className="absolute inset-0 bg-blue-500 opacity-70 animate-[glitch-anim-2_0.3s_infinite_linear_alternate-reverse] mix-blend-screen" />
            </>
          )}
        </div>
      </div>

      <div className="flex items-center lg:items-start gap-2 lg:gap-3 relative z-10 text-center lg:text-left py-1 lg:max-w-[85%] px-2 lg:px-0">
        <span className={cn(
          "text-[10px] lg:pt-[3px] shrink-0 transition-colors duration-300 font-mono font-bold hidden lg:inline-block",
          isActive ? "text-cyan-300 drop-shadow-[0_0_2px_currentColor]" : "text-gray-600 group-hover:text-cyan-700"
        )}>
          {hexIndex}
        </span>
        <span className={cn(
          "tracking-[0.1em] lg:tracking-[0.15em] font-bold transition-all duration-300 whitespace-nowrap lg:whitespace-normal break-words leading-tight relative",
          isActive && "text-shadow-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
        )}>
          {isHovered ? scrambledText : category.toUpperCase()}
          {isActive && (
            <motion.span 
              layoutId="active-indicator"
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rotate-45 hidden lg:block"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </span>
      </div>
      
      <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none gap-[2px] hidden lg:flex">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-3 bg-cyan-400 skew-x-[-20deg]" style={{ animation: `pulse 1s infinite ${i * 0.1}s` }} />
        ))}
      </div>
    </motion.button>
  );
});

CategoryItem.displayName = 'CategoryItem';

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

  const handleCategoryClick = useCallback((category: string) => {
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        navigate(category === 'All' ? '/' : `/?category=${category}`);
      });
    } else {
      navigate(category === 'All' ? '/' : `/?category=${category}`);
    }
  },[navigate]);

  const categoriesWithAll = ['All', ...categories];

  return (
    <>
      <style>{`
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(30% 0 20% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(70% 0 10% 0); transform: translate(1px, -1px); }
          60% { clip-path: inset(20% 0 50% 0); transform: translate(-1px, 2px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -2px); }
          100% { clip-path: inset(5% 0 80% 0); transform: translate(-2px, 1px); }
        }
        @keyframes cyber-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .cyber-mask-responsive {
          -webkit-mask-image: linear-gradient(to right, black 85%, transparent 100%);
          mask-image: linear-gradient(to right, black 85%, transparent 100%);
        }
        @media (min-width: 1024px) {
          .cyber-mask-responsive {
            -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
          }
        }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        // 修复核心 1：加入 min-w-0 和 max-w-full 强制约束，防止子元素的滚动范围突破外层边界
        className="flex flex-col w-full min-w-0 max-w-full"
      >
        <div className="relative pl-1 mb-4 lg:mb-6 mt-2 flex items-center justify-between hidden lg:flex">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-700 overflow-hidden">
            <div className="w-full h-1/3 bg-cyan-400 animate-[cyber-scan_2s_ease-in-out_infinite_alternate]" />
          </div>
          <div className="text-[10px] uppercase text-gray-500 font-bold tracking-[0.3em] pl-4 flex items-center gap-2 w-full">
            DIRECTORY // INDEX
            <div className="ml-auto flex items-center gap-1">
              <span className="w-1 h-1 bg-cyan-500 rounded-full animate-ping" />
              <span className="text-cyan-800 text-[8px]">LIVE</span>
            </div>
          </div>
        </div>
      
        {/* 修复核心 2：加入 w-full，并通过 after:content-[''] after:min-w-[40px] 生成幽灵占位符 */}
        {/* 修复核心 3：加上 pt-2，给选中时的发光光晕（drop-shadow）留出安全区 */}
        <div 
          className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible overflow-y-hidden gap-2 lg:gap-1 pb-4 lg:pb-0 pt-2 w-full scrollbar-none cyber-mask-responsive snap-x snap-mandatory lg:snap-none after:content-[''] after:min-w-[40px] lg:after:hidden after:shrink-0" 
        >
          {categoriesWithAll.map((category, index) => {
            const isActive = (category === 'All' && !selectedCategory) || selectedCategory === category;
           
            return (
              <CategoryItem
                key={category}
                index={index}
                category={category}
                isActive={isActive}
                onClick={handleCategoryClick}
              />
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;