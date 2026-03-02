import React, { useState, useEffect, useRef, useMemo, useCallback, useTransition } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { CyberHero } from '@/components/CyberHero';
import { RotatingQuotes } from '@/components/RotatingQuotes';

const ITEMS_PER_PAGE = 5;

// ==========================================
// 【顶级炫技点 1：零重绘 (Zero-Render) 高频数据流引擎】
// 利用 Framer Motion 的 MotionValue 和 rAF，以 60FPS 刷新屏幕上的十六进制乱码，
// 完美绕过 React 的 Diff 算法和生命周期，极致压榨 V8 引擎性能。
// ==========================================
const useHexStream = (length: number = 8, intervalMs: number = 50) => {
  const hexValue = useMotionValue('');

  useEffect(() => {
    let lastTime = 0;
    let frameId: number;

    const update = (time: number) => {
      if (time - lastTime > intervalMs) {
        let str = '0x';
        for (let i = 0; i < length; i++) {
          str += Math.floor(Math.random() * 16).toString(16).toUpperCase();
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
// 【炫技点 2：三维物理弹簧与硬件陀螺仪解耦 Hook】
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
  const rotateY = useSpring(useTransform(mouseX,[0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-8, 8]), { stiffness: 200, damping: 30 });

  return { handleMouseMove, rotateX, rotateY };
};

// ==========================================
// 【炫技点 3：全局快捷键监听解耦 Hook】
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


const Home: React.FC = () => {
  const { posts, contents } = usePosts();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');

  const { handleMouseMove, rotateX, rotateY } = useCyberParallax();
  const memoryAddr1 = useHexStream(8, 30);
  const memoryAddr2 = useHexStream(4, 80);

  const allCategories = useMemo(() => 
    Array.from(new Set(posts.map((post) => post.category))), 
  [posts]);

  const filteredPosts = useMemo(() => {
    return selectedCategory && selectedCategory !== 'All'
      ? posts.filter((post) => post.category === selectedCategory)
      : posts;
  }, [posts, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // 【炫技点 4：React 18 并发渲染与 View Transitions API 的双剑合璧】
  const [isPending, startTransition] = useTransition();

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: contentRef, offset: ['start end', 'end start'] });
  
  // 视差数学映射：页面滚动时标题不仅上移，还会向深度 Z 轴坠落
  const titleY = useTransform(scrollYProgress,[0, 1], [0, -250]);
  const titleZ = useTransform(scrollYProgress,[0, 1], [0, -100]);
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

  return (
    <motion.div 
      className="min-h-screen w-full relative bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        /* 【顶级炫技点 5：CSS 硬件级扫描线与色差分离 (Chromatic Aberration) 】 */
        .glitch-text-container {
          position: relative;
        }
        
        .glitch-layer {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.8;
          mix-blend-mode: screen;
        }

        /* 红色通道左移并添加撕裂动画 */
        .glitch-layer-red {
          color: #ef4444;
          transform: translateX(-0.5vw);
          clip-path: polygon(0 0, 100% 0, 100% 10%, 0 10%);
          animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
        }

        /* 青色通道右移并添加撕裂动画 */
        .glitch-layer-cyan {
          color: #06b6d4;
          transform: translateX(0.5vw);
          clip-path: polygon(0 80%, 100% 80%, 100% 100%, 0 100%);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

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

        /* CRT 扫描线 */
        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
      `}</style>

      {/* React 18 并发状态反馈：系统重载动画 */}
      {isPending && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center backdrop-blur-sm bg-black/40 transition-all">
           <div className="text-cyan-500 font-mono text-xs tracking-widest animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] mb-2">
             [ MEMORY_PAGE_FAULT ] // FETCHING_NEW_SECTOR...
           </div>
           {/* 极简字符进度条 */}
           <div className="font-mono text-cyan-700 text-xs">[▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░] 0xALLOCATING
           </div>
        </div>
      )}

      {/* 底部挂载你在上一步升级的纯血 Data-Sphere */}
      <CyberHero />
      <div className="fixed inset-0 pointer-events-none z-10 scanlines opacity-50 mix-blend-overlay" />

      {/* 首屏 HUD 抬头显示器 */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center z-20 px-6 perspective-[1200px] overflow-hidden">
        
        {/* 将 3D 陀螺仪坐标绑定给整个系统框 */}
        <motion.div
          style={{ y: titleY, z: titleZ, opacity: titleOpacity, rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="text-center will-change-transform transform-gpu relative"
        >
          {/* 顶部系统元数据 */}
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

          {/* 极客风格主标题：运用色差与数据撕裂技术 */}
          <div className="relative glitch-text-container group cursor-crosshair inline-block" style={{ transform: "translateZ(60px)" }}>
            <h1 className="font-mono font-black uppercase tracking-tighter leading-none text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-slate-200">
              LUNA WORLD
            </h1>
          </div>

          {/* 高频刷新零渲染 Hex 地址流水线 */}
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

      {/* 数据日志内容区 (Data Logs) */}
      <div
        ref={contentRef}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 min-h-screen"
      >
        {/* 上半部分边缘虚化，完美融合深邃黑洞背景 */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#050505] -translate-y-full pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[#050505] z-0" /> {/* 实心底座确保内容可读性 */}

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pt-12 border-t border-white/5">
          
          {/* 左侧控制台边栏 */}
          <div className="lg:w-64 shrink-0 sticky top-32">
            <Sidebar categories={allCategories} isExpanded={true} onExpandedChange={() => {}} />
          </div>

          {/* 右侧数据阵列区：运用 CSS content-visibility 极致截断渲染优化 */}
          <div 
            className="flex-1 min-w-0 w-full"
            style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}
          >
            <div className="relative">
              {/* HUD 界面装饰 */}
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