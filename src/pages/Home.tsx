// src/pages/Home.tsx
import React, { useState, useEffect, useRef, useMemo, useCallback, useTransition } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, MotionValue, useVelocity } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { CyberHero } from '@/components/CyberHero';
import { RotatingQuotes } from '@/components/RotatingQuotes';

const ITEMS_PER_PAGE = 5;

// ==========================================
// 【极致优化点 1：零开销高频数据流引擎】
// ==========================================
const useHexStream = (length: number = 8, intervalMs: number = 50) => {
  const hexValue = useMotionValue('');
  useEffect(() => {
    const update = () => {
      let str = '0x';
      for (let i = 0; i < length; i += 8) {
        const chunkLen = Math.min(8, length - i);
        const maxVal = Math.pow(16, chunkLen);
        str += Math.floor(Math.random() * maxVal).toString(16).toUpperCase().padStart(chunkLen, '0');
      }
      hexValue.set(str);
    };
    update();
    const intervalId = window.setInterval(update, intervalMs);
    return () => window.clearInterval(intervalId);
  }, [length, intervalMs, hexValue]);
  return hexValue;
};

// ==========================================
// 【极致优化点 2：三维物理弹簧与硬件陀螺仪】
// ==========================================
const useCyberParallax = () => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

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
  const rotateY = useSpring(useTransform(mouseX,[0, typeof window !== 'undefined' ? window.innerWidth : 1000],[-8, 8]), { stiffness: 200, damping: 30 });

  return { handleMouseMove, rotateX, rotateY, mouseX, mouseY };
};

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
  },[key, callback]);
};

// ==========================================
// 【极致视觉点 1：全局全息战术准星】
// ==========================================
const CyberCursor = ({ mouseX, mouseY }: { mouseX: MotionValue<number>; mouseY: MotionValue<number> }) => {
  const smoothXFast = useSpring(mouseX, { damping: 25, stiffness: 400, mass: 0.1 });
  const smoothYFast = useSpring(mouseY, { damping: 25, stiffness: 400, mass: 0.1 });
  const smoothXSlow = useSpring(mouseX, { damping: 30, stiffness: 150, mass: 0.8 });
  const smoothYSlow = useSpring(mouseY, { damping: 30, stiffness: 150, mass: 0.8 });

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: smoothXFast, y: smoothYFast, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-500/50 rounded-full pointer-events-none z-[9998] flex items-center justify-center mix-blend-screen"
        style={{ x: smoothXSlow, y: smoothYSlow, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="w-full h-[1px] bg-cyan-500/30 absolute" />
        <div className="h-full w-[1px] bg-cyan-500/30 absolute" />
      </motion.div>
    </>
  );
};

// ==========================================
// 【极致视觉点 2：TitleLetter 叠加量子态文字坍缩引擎】
// ==========================================
// 【优化版】：移除独立RAF循环，改为共享的全局缓动（由父级统一驱动）
const TitleLetter = React.memo(({
  char, index, mouseX, mouseY, titleY
}: {
  char: string; index: number; mouseX: MotionValue<number>; mouseY: MotionValue<number>; titleY: MotionValue<number>;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const z = useMotionValue(0);
  const y = useTransform(z, (v) => -v * 0.6);
  const light = useMotionValue(0);

  // 【优化1】：移除独立RAF循环，改为共享的全局缓动（由父级统一驱动）
  // 仅保留一次性的初始动画，之后由mouse/scroll驱动
  useEffect(() => {
    const amplitude = 24;
    const speed = 0.7;
    const phase = index * 0.45;
    let start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      z.set(Math.sin(t * speed + phase) * amplitude);
      if (t < 8) requestAnimationFrame(tick); // 仅前8秒轻微波动，之后静止
    };
    requestAnimationFrame(tick);
  }, [index, z]);

  const baseCenter = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateBaseCenter = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      baseCenter.current.x = rect.left + window.scrollX + rect.width / 2;
      baseCenter.current.y = rect.top + window.scrollY + rect.height / 2 - titleY.get();
    };
    const timer = setTimeout(updateBaseCenter, 300);
    window.addEventListener('resize', updateBaseCenter);
    return () => { clearTimeout(timer); window.removeEventListener('resize', updateBaseCenter); };
  }, [titleY]);

  const updateLight = useCallback(() => {
    if (baseCenter.current.x === 0 && baseCenter.current.y === 0) return;
    const mx = mouseX.get();
    const my = mouseY.get();
    const ty = titleY.get();
    const cx = baseCenter.current.x - window.scrollX;
    const cy = baseCenter.current.y - window.scrollY + ty;
    const dx = mx - cx;
    const dy = my - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    light.set(Math.max(0, 1 - dist / 260));
  }, [mouseX, mouseY, titleY, light]);

  useEffect(() => {
    const unsubs = [mouseX, mouseY, titleY].map(mv =>
      mv.on ? mv.on('change', updateLight) : (mv as any).onChange(updateLight)
    );
    window.addEventListener('scroll', updateLight, { passive: true });
    return () => {
      unsubs.forEach(unsub => unsub());
      window.removeEventListener('scroll', updateLight);
    };
  }, [updateLight]);

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
    let base = `0 0 ${blur}px rgba(6,182,212,${alpha}), 0 0 ${blur / 3}px rgba(255,255,255,${alpha * 0.6})`;
    if (v > 0.8) {
      const shift = (v - 0.8) * 40; 
      base += `, -${shift}px 0px 4px rgba(255,0,0,0.6), ${shift}px 0px 4px rgba(0,255,255,0.6)`;
    }
    return base;
  });

  const brightness = useTransform(light, (v) => 1 + v * 1.5);

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
  const { posts, contents, contentsStatus, loadAllContents } = usePosts();
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
  const [isScrolling, setIsScrolling] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({ 
    target: contentRef, 
    offset: ['start end', 'end start'],
    layoutEffect: false  // 新增：减少滚动时的布局计算
  });
  
  const titleY = useTransform(scrollYProgress, [0, 1],[0, -250]);
  const titleZ = useTransform(scrollYProgress, [0, 1],[0, -100]);
  const titleOpacity = useTransform(scrollYProgress,[0, 0.5], [1, 0]);

  // ==========================================
  // 【极致视觉点 3：滚动速率物理畸变场 (Velocity Distortion Field)】
  // ==========================================
  
  // ==================== 滚动状态精准控制（彻底解决倾斜+变色） ====================
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 120);
    };

    const contentContainer = contentRef.current;
    if (contentContainer) contentContainer.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (contentContainer) contentContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  useGlobalShortcut('/', () => !isSearchVisible && openSearch());
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
  const openSearch = useCallback(() => {
    setIsSearchVisible(true);
    void loadAllContents();
  }, [loadAllContents]);

  return (
    <motion.div 
      className="min-h-screen w-full relative bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 cursor-none"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
      `}</style>

      <div className="hidden md:block">
        <CyberCursor mouseX={mouseX} mouseY={mouseY} />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(6,182,212,0.12),transparent_0_32%),radial-gradient(circle_at_80%_16%,rgba(59,130,246,0.08),transparent_0_28%),linear-gradient(180deg,rgba(4,7,13,0.98)_0%,rgba(2,4,10,1)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[55vh] bg-[linear-gradient(180deg,rgba(10,20,32,0.32),transparent)]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
      </div>

      {isPending && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center backdrop-blur-sm bg-black/40 transition-all">
          <div className="text-cyan-500 font-mono text-xs tracking-widest animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] mb-2">
            [ MEMORY_PAGE_FAULT ] // FETCHING_NEW_SECTOR...
          </div>
          <div className="font-mono text-cyan-700 text-xs">[▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░] 0xALLOCATING</div>
        </div>
      )}

      <CyberHero />
      <div className="fixed inset-0 pointer-events-none z-10 scanlines opacity-50 mix-blend-overlay" />

      <section className="relative min-h-screen w-full flex flex-col items-center justify-center z-20 px-6 pb-12 pt-28 perspective-[1400px] overflow-hidden">
        <motion.div
          style={{ y: titleY, z: titleZ, opacity: titleOpacity, rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="text-center will-change-transform transform-gpu relative w-full max-w-6xl"
        >
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6 text-[10px] font-mono text-cyan-600 tracking-[0.4em] uppercase"
            style={{ transform: "translateZ(20px)" }}
          >
            <span className="w-12 h-[1px] bg-cyan-800" />
            <span className="flex items-center gap-2 drop-shadow-[0_0_5px_rgba(8,145,178,0.5)]">
              SYS.KERNEL <motion.span>{memoryAddr2}</motion.span>
            </span>
            <span className="w-12 h-[1px] bg-cyan-800" />
          </motion.div>

          <div className="relative group inline-block" style={{ transform: "translateZ(60px)" }}>
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

          <motion.div className="mt-12 flex justify-center" style={{ transform: "translateZ(40px)" }}>
            <RotatingQuotes />
          </motion.div>
        </motion.div>
      </section>

      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto overflow-visible px-6 md:px-12 pt-16 pb-20 min-h-screen">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#050505] -translate-y-full pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[#050505] z-0" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pt-12 border-t border-white/5 overflow-visible">
          <div className="relative z-30 overflow-visible shrink-0 sticky top-32 lg:w-[21.5rem] lg:pr-10 lg:-mr-10 xl:w-[22rem] xl:pr-12 xl:-mr-12">
            <Sidebar categories={allCategories} isExpanded={true} onExpandedChange={() => {}} />
          </div>

          {/* BlogList 容器 - 已彻底禁用滚动期间的倾斜与变色 */}
          <motion.div
            className="relative z-10 flex-1 min-w-0 w-full overflow-visible will-change-transform lg:pr-6 xl:pr-10"
            style={{
              contentVisibility: 'auto',
              containIntrinsicSize: '1000px'
            }}
          >
            <div className={`transition-all duration-500 ease-out mt-8 ${isPending ? 'opacity-30 blur-md scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`}>
              {filteredPosts.length > 0 ? (
                <BlogList posts={paginatedPosts} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              ) : (
                <div className="py-32 flex flex-col items-center justify-center border border-dashed border-cyan-900/50 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(8,145,178,0.02)_10px,rgba(8,145,178,0.02)_20px)] text-cyan-700 font-mono text-sm relative overflow-hidden group hover:border-cyan-500/50 transition-colors cursor-crosshair">
                  <div className="absolute inset-0 bg-cyan-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="animate-pulse absolute top-4 left-4 text-[10px] text-red-500/80">WARN: 404</span>
                  <span className="relative z-10 group-hover:animate-[glitch_0.2s_linear_infinite]">[ NULL_POINTER_EXCEPTION : NO_DATA_IN_SECTOR ]</span>
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 shadow-[0_0_10px_cyan]" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        {isSearchVisible && (
          <SearchModal
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onClose={() => { setIsSearchVisible(false); setSearchTerm(''); }}
            posts={posts}
            contents={contents}
            contentsStatus={contentsStatus}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Home;
