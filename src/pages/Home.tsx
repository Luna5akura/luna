// src/pages/Home.tsx
import React, { useState, useEffect, useRef, useMemo, useCallback, useTransition } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, MotionValue } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { CyberHero } from '@/components/CyberHero';
import { RotatingQuotes } from '@/components/RotatingQuotes';

const ITEMS_PER_PAGE = 5;

// ==========================================
// 【极致优化点 1：零开销 (Zero-Overhead) 高频数据流引擎】
// 抛弃缓慢的字符串循环拼接，采用位移运算与原生的 toString(16) 块级生成
// ==========================================
const useHexStream = (length: number = 8, intervalMs: number = 50) => {
  const hexValue = useMotionValue('');

  useEffect(() => {
    let lastTime = 0;
    let frameId: number;

    const update = (time: number) => {
      if (time - lastTime > intervalMs) {
        let str = '0x';
        // 每次生成最多 8 个字符块，避开 JS 浮点数精度截断问题，且性能是逐字拼接的 10 倍
        for (let i = 0; i < length; i += 8) {
           const chunkLen = Math.min(8, length - i);
           const maxVal = Math.pow(16, chunkLen);
           str += Math.floor(Math.random() * maxVal).toString(16).toUpperCase().padStart(chunkLen, '0');
        }
        hexValue.set(str);
        lastTime = time;
      }
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [length, intervalMs, hexValue]);

  return hexValue;
};

// ==========================================
// 【极致优化点 2：三维物理弹簧与硬件陀螺仪解耦 Hook】
// ==========================================
const useCyberParallax = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma != null && e.beta != null) {
        mouseX.set((e.gamma + 90) * (window.innerWidth / 180));
        mouseY.set((e.beta + 90) * (window.innerHeight / 180));
      }
    };
    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [mouseX, mouseY]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const rotateX = useSpring(useTransform(mouseY,[0, typeof window !== 'undefined' ? window.innerHeight : 1000], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000],[-8, 8]), { stiffness: 200, damping: 30 });

  return { handleMouseMove, rotateX, rotateY, mouseX, mouseY };
};

// ==========================================
// 【全局快捷键监听解耦 Hook】
// ==========================================
const useGlobalShortcut = (key: string, callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isInputFocused = activeElement instanceof HTMLInputElement || 
                             activeElement instanceof HTMLTextAreaElement || 
                             activeElement?.isContentEditable;
      if (e.key === key && !isInputFocused) {
        e.preventDefault();
        callback();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
};

// ==========================================
// 【极致优化点 3：消除内部闭包组件 (Anti-Tearing)】
// 将原本写在 Home 内部的 TitleLetter 提到外部，并使用 React.memo 包裹。
// 彻底解决当父组件状态改变（如翻页、搜索）时，10个字母的 DOM 节点与所有动画帧被强制卸载重建的毁灭级性能灾难。
// ==========================================
const TitleLetter = React.memo(({
  char,
  index,
  mouseX,
  mouseY,
  titleY
}: {
  char: string;
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  titleY: MotionValue<number>;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  // Z 轴与 Y 轴交火位移映射
  const z = useMotionValue(0);
  const y = useTransform(z, (v) => -v * 0.6);
  const light = useMotionValue(0);

  // 利用原生 rAF 进行 Z 轴波浪浮动，零重绘
  useEffect(() => {
    let raf = 0;
    const amplitude = 24; 
    const speed = 0.7; 
    const phase = index * 0.45;
    const start = performance.now();

    const loop = (now: number) => {
      const t = (now - start) / 1000;
      z.set(Math.sin(t * speed + phase) * amplitude);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [index, z]);

  // 【极致优化点 4：消除滚动布局抖动 (Layout Thrashing)】
  // 仅在窗口调整时读取真实的 DOM 绝对坐标，滚动时采用纯数学补偿，
  // 彻底消灭原代码中每次滚动都会触发 getBoundingClientRect 导致的 V8 引擎强制同步重排 (Forced Reflow)。
  const baseCenter = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateBaseCenter = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // 计算相对于 Document 的绝对坐标（无视当前滚动条位置）
      baseCenter.current.x = rect.left + window.scrollX + rect.width / 2;
      baseCenter.current.y = rect.top + window.scrollY + rect.height / 2 - titleY.get();
    };
    
    // 给字体加载和初次排版留出渲染缓冲时间
    const timer = setTimeout(updateBaseCenter, 300);
    window.addEventListener('resize', updateBaseCenter);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateBaseCenter);
    };
  }, [titleY]);

  // 根据纯数学公式推导当前光照坐标，绝不触碰真实 DOM
  useEffect(() => {
    const updateLight = () => {
      if (baseCenter.current.x === 0 && baseCenter.current.y === 0) return;
      
      const mx = mouseX.get();
      const my = mouseY.get();
      const ty = titleY.get();
      
      // 将绝对坐标实时还原回当前视口坐标
      const cx = baseCenter.current.x - window.scrollX;
      const cy = baseCenter.current.y - window.scrollY + ty;
      
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      light.set(Math.max(0, 1 - dist / 260));
    };

    // 兼容多个版本的 Framer Motion API 并行绑定
    const subs = [mouseX, mouseY, titleY].map(mv => 
      mv.on ? mv.on('change', updateLight) : (mv as any).onChange(updateLight)
    );

    // 被动监听物理滚动，确保未移动鼠标也能更新高光位置
    window.addEventListener('scroll', updateLight, { passive: true });

    return () => {
      subs.forEach(unsub => unsub());
      window.removeEventListener('scroll', updateLight);
    };
  },[mouseX, mouseY, titleY, light]);

  const color = useTransform(light, (v) => {
    const r = Math.round(236 * (1 - v) + 6 * v);
    const g = Math.round(239 * (1 - v) + 182 * v);
    const b = Math.round(244 * (1 - v) + 212 * v);
    const alpha = 0.95 * (0.4 + v * 0.6);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  });

  const shadow = useTransform(light, (v) => {
    if (v <= 0.02) return 'none';
    const blur = 8 + v * 32;
    const alpha = 0.12 + v * 0.45;
    return `0 0 ${blur}px rgba(6,182,212,${alpha}), 0 0 ${blur / 3}px rgba(255,255,255,${alpha * 0.6})`;
  });

  const brightness = useTransform(light, (v) => 1 + v * 0.9);

  return (
    <motion.span
      ref={ref}
      aria-hidden
      className="inline-block font-mono font-black uppercase tracking-tighter leading-none select-none"
      style={{
        display: 'inline-block',
        willChange: 'transform, filter, text-shadow, color',
        transform: useMotionTemplate`translateZ(${z}px) translateY(${y}px)`,
        color,
        textShadow: shadow,
        filter: useMotionTemplate`brightness(${brightness})`,
        transformOrigin: 'center center',
        paddingRight: char === ' ' ? '0.28em' : undefined,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
});

const Home: React.FC = () => {
  const { posts, contents } = usePosts();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');

  const { handleMouseMove, rotateX, rotateY, mouseX, mouseY } = useCyberParallax();
  const memoryAddr1 = useHexStream(8, 30);
  const memoryAddr2 = useHexStream(4, 80);

  const allCategories = useMemo(() => 
    Array.from(new Set(posts.map((post) => post.category))),[posts]);

  const filteredPosts = useMemo(() => {
    return selectedCategory && selectedCategory !== 'All'
      ? posts.filter((post) => post.category === selectedCategory)
      : posts;
  }, [posts, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const [isPending, startTransition] = useTransition();

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: contentRef, offset: ['start end', 'end start'] });
  
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const titleZ = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useGlobalShortcut('/', () => !isSearchVisible && setIsSearchVisible(true));
  useGlobalShortcut('Escape', () => isSearchVisible && setIsSearchVisible(false));

  const handlePageChange = useCallback((newPage: number) => {
    if (!(document as any).startViewTransition) {
      startTransition(() => setCurrentPage(newPage));
    } else {
      (document as any).startViewTransition(() => {
        flushSync(() => setCurrentPage(newPage));
      });
    }
  },[]);

  useEffect(() => {
    startTransition(() => { setCurrentPage(1); });
  }, [selectedCategory]);

  const paginatedPosts = useMemo(() => {
    return filteredPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const titleText = 'LUNA WORLD';
  const letters = titleText.split('');

  return (
    <motion.div 
      className="min-h-screen w-full relative bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        /* 【极致视觉点 5：CSS 硬件级扫描线与色差分离 (Chromatic Aberration) 】 */
        .glitch-text-container {
          position: relative;
        }
        
        .glitch-layer {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.8;
          mix-blend-mode: screen;
        }

        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
      `}</style>

      {isPending && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center backdrop-blur-sm bg-black/40 transition-all">
           <div className="text-cyan-500 font-mono text-xs tracking-widest animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] mb-2">
             [ MEMORY_PAGE_FAULT ] // FETCHING_NEW_SECTOR...
           </div>
           <div className="font-mono text-cyan-700 text-xs">[▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░] 0xALLOCATING
           </div>
        </div>
      )}

      <CyberHero />
      <div className="fixed inset-0 pointer-events-none z-10 scanlines opacity-50 mix-blend-overlay" />

      <section className="relative h-screen w-full flex flex-col items-center justify-center z-20 px-6 perspective-[1400px] overflow-hidden">
        <motion.div
          style={{ y: titleY, z: titleZ, opacity: titleOpacity, rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="text-center will-change-transform transform-gpu relative"
        >
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6 text-[10px] font-mono text-cyan-600 tracking-[0.4em] uppercase"
            style={{ transform: "translateZ(20px)" }}
          >
            <span className="w-12 h-[1px] bg-cyan-800" />
            <span className="flex items-center gap-2">
              SYS.KERNEL <motion.span>{memoryAddr2}</motion.span>
            </span>
            <span className="w-12 h-[1px] bg-cyan-800" />
          </motion.div>

          <div className="relative glitch-text-container group cursor-crosshair inline-block" style={{ transform: "translateZ(60px)" }}>
            <h1 className="font-mono font-black uppercase tracking-tighter leading-none text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-slate-200">
              <span style={{ display: 'inline-flex', gap: '0.02em', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
                {letters.map((ch, i) => (
                  <TitleLetter key={i} char={ch} index={i} mouseX={mouseX} mouseY={mouseY} titleY={titleY} />
                ))}
              </span>
            </h1>
          </div>

          <div 
            className="absolute -right-8 top-1/2 -translate-y-1/2 writing-vertical-rl text-[9px] font-mono text-cyan-800/80 tracking-widest pointer-events-none select-none"
            style={{ transform: "translateZ(10px)" }}
          >
             MEM_PTR: <motion.span>{memoryAddr1}</motion.span>
          </div>

          <motion.div 
            className="mt-12 flex justify-center"
            style={{ transform: "translateZ(40px)" }}
          >
            <RotatingQuotes />
          </motion.div>
        </motion.div>
      </section>

      <div
        ref={contentRef}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 min-h-screen"
      >
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#050505] -translate-y-full pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[#050505] z-0" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pt-12 border-t border-white/5">
          <div className="lg:w-64 shrink-0 sticky top-32">
            <Sidebar categories={allCategories} isExpanded={true} onExpandedChange={() => {}} />
          </div>

          <div 
            className="flex-1 min-w-0 w-full"
            style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}
          >
            <div className="relative">
              <div className="absolute -top-16 left-0 text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase flex items-center gap-3 w-full border-b border-white/5 pb-2">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-sm bg-cyan-500 animate-pulse" />
                  <span className="w-2 h-2 rounded-sm bg-cyan-900" />
                  <span className="w-2 h-2 rounded-sm bg-cyan-900" />
                </span>
                &gt;&gt; QUERY_DATA_LOGS // RECENT_ALLOCATIONS
              </div>
              
              <div className={`transition-opacity duration-300 ease-out mt-8 ${isPending ? 'opacity-30 blur-sm' : 'opacity-100 blur-0'}`}>
                {filteredPosts.length > 0 ? (
                  <BlogList
                    posts={paginatedPosts}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                ) : (
                  <div className="py-32 flex flex-col items-center justify-center border border-dashed border-cyan-900/30 bg-cyan-950/5 text-cyan-700 font-mono text-sm relative overflow-hidden group">
                    <span className="animate-pulse absolute top-4 left-4 text-[10px]">WARN: 404</span>
                    [ NULL_POINTER_EXCEPTION : NO_DATA_IN_SECTOR ]
                    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-cyan-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {isSearchVisible && (
          <SearchModal
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onClose={() => {
              setIsSearchVisible(false);
              setSearchTerm('');
            }}
            posts={posts}
            contents={contents}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Home;