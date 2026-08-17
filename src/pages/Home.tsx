// src/pages/Home.tsx
import React, { useState, useEffect, useRef, useMemo, useCallback, useTransition } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, MotionValue } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { CyberHero } from '@/components/CyberHero';
import { RotatingQuotes } from '@/components/RotatingQuotes';
import { useGlobalShortcut } from '@/hooks/useGlobalShortcut';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { runViewTransition } from '@/lib/viewTransition';
import { Activity, Database, Search } from 'lucide-react';

const ITEMS_PER_PAGE = 5;

// ==========================================
// 【极致优化点 1：零开销高频数据流引擎】
// ==========================================
const useHexStream = (length: number = 8, intervalMs: number = 50, enabled = true) => {
  const hexValue = useMotionValue('');
  useEffect(() => {
    if (!enabled) {
      hexValue.set(`0x${'0'.repeat(length)}`);
      return;
    }

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
  }, [enabled, length, intervalMs, hexValue]);
  return hexValue;
};

// ==========================================
// 【极致优化点 2：三维物理弹簧与硬件陀螺仪】
// ==========================================
const useCyberParallax = (enabled: boolean) => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    if (!enabled) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma != null && e.beta != null) {
        mouseX.set((e.gamma + 90) * (window.innerWidth / 180));
        mouseY.set((e.beta + 90) * (window.innerHeight / 180));
      }
    };
    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [enabled, mouseX, mouseY]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!enabled) return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [enabled, mouseX, mouseY]);

  const rotateX = useSpring(useTransform(mouseY,[0, typeof window !== 'undefined' ? window.innerHeight : 1000], enabled ? [5, -5] : [0, 0]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX,[0, typeof window !== 'undefined' ? window.innerWidth : 1000], enabled ? [-5, 5] : [0, 0]), { stiffness: 200, damping: 30 });

  return { handleMouseMove, rotateX, rotateY, mouseX, mouseY };
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
  char, index, mouseX, mouseY, titleY, enabled
}: {
  char: string; index: number; mouseX: MotionValue<number>; mouseY: MotionValue<number>; titleY: MotionValue<number>; enabled: boolean;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const z = useMotionValue(0);
  const y = useTransform(z, (v) => -v * 0.6);
  const light = useMotionValue(0);

  // 【优化1】：移除独立RAF循环，改为共享的全局缓动（由父级统一驱动）
  // 仅保留一次性的初始动画，之后由mouse/scroll驱动
  useEffect(() => {
    if (!enabled) {
      z.set(0);
      return;
    }

    const amplitude = 24;
    const speed = 0.7;
    const phase = index * 0.45;
    let frameId = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      z.set(Math.sin(t * speed + phase) * amplitude);
      if (t < 5) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [enabled, index, z]);

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
    if (!enabled) {
      light.set(0);
      return;
    }
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
  }, [enabled, mouseX, mouseY, titleY, light]);

  useEffect(() => {
    const unsubs = [mouseX, mouseY, titleY].map((mv) => mv.on('change', updateLight));
    return () => {
      unsubs.forEach(unsub => unsub());
    };
  }, [mouseX, mouseY, titleY, updateLight]);

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
      className="inline-block font-mono font-black uppercase tracking-normal leading-none select-none"
      style={{
        display: 'inline-block',
        willChange: enabled ? 'transform, filter, text-shadow, color' : 'auto',
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

  const { allowRichMotion } = useMotionPreference();
  const { handleMouseMove, rotateX, rotateY, mouseX, mouseY } = useCyberParallax(allowRichMotion);
  const memoryAddr1 = useHexStream(8, 120, allowRichMotion);
  const memoryAddr2 = useHexStream(4, 180, allowRichMotion);

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
  const { scrollYProgress } = useScroll({ 
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
  
  useGlobalShortcut('/', () => !isSearchVisible && openSearch());
  useGlobalShortcut('Escape', () => isSearchVisible && setIsSearchVisible(false));

  const handlePageChange = useCallback((newPage: number) => {
    runViewTransition(() => setCurrentPage(newPage), { flush: true });
  },[]);

  useEffect(() => {
    startTransition(() => { setCurrentPage(1); });
  }, [selectedCategory]);

  const paginatedPosts = useMemo(() => {
    return filteredPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const titleText = 'LUNA WORLD';
  const titleWords = useMemo(() => {
    let offset = 0;
    return titleText.split(' ').map((word) => {
      const start = offset;
      offset += word.length + 1;
      return { word, start };
    });
  }, [titleText]);
  const openSearch = useCallback(() => {
    setIsSearchVisible(true);
    void loadAllContents();
  }, [loadAllContents]);

  const archiveStats = useMemo(() => [
    { label: 'POSTS', value: filteredPosts.length.toString(), icon: Database },
    { label: 'SECTORS', value: allCategories.length.toString(), icon: Activity },
  ], [allCategories.length, filteredPosts.length]);

  return (
    <motion.div 
      className="min-h-screen w-full relative bg-[#02040a] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 cursor-none"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
        .writing-vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>

      {allowRichMotion && (
        <CyberCursor mouseX={mouseX} mouseY={mouseY} />
      )}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(20,184,166,0.11)_0%,transparent_34%),linear-gradient(242deg,rgba(244,63,94,0.08)_0%,transparent_28%),linear-gradient(180deg,rgba(3,11,15,0.98)_0%,rgba(2,6,10,1)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[58vh] bg-[linear-gradient(180deg,rgba(7,24,28,0.44),rgba(2,6,10,0.34)_64%,transparent)]" />
        <div className="absolute inset-0 opacity-[0.075]" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.09)_48%,rgba(244,63,94,0.05)_52%,transparent)] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
      </div>

      {isPending && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center backdrop-blur-sm bg-black/40 transition-all">
          <div className="text-cyan-500 font-mono text-xs tracking-widest animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] mb-2">
            [ MEMORY_PAGE_FAULT ] // FETCHING_NEW_SECTOR...
          </div>
          <div className="font-mono text-cyan-700 text-xs">[▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░] 0xALLOCATING</div>
        </div>
      )}

      <CyberHero allowRichMotion={allowRichMotion} />
      {allowRichMotion && (
        <div className="fixed inset-0 pointer-events-none z-10 scanlines opacity-25 mix-blend-overlay" />
      )}

      <section className="relative min-h-[88svh] w-full flex flex-col items-center justify-center z-20 px-5 pb-16 pt-28 perspective-[1400px] overflow-hidden sm:px-6 md:pb-20">
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

          <div className="relative group inline-block max-w-full" style={{ transform: "translateZ(60px)" }}>
            <h1
              aria-label={titleText}
              className="font-mono font-black uppercase tracking-normal leading-[0.9] text-[3.25rem] text-slate-200 min-[380px]:text-[3.75rem] sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem]"
            >
              <span className="flex flex-wrap items-center justify-center gap-x-[0.18em] gap-y-2 md:gap-y-0" style={{ transformStyle: 'preserve-3d' }}>
                {titleWords.map(({ word, start }) => (
                  <span key={word} className="inline-flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                    {Array.from(word).map((ch, i) => (
                      <TitleLetter key={`${word}-${i}`} char={ch} index={start + i} mouseX={mouseX} mouseY={mouseY} titleY={titleY} enabled={allowRichMotion} />
                    ))}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          <div 
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 writing-vertical-rl text-[9px] font-mono text-cyan-800/80 tracking-widest pointer-events-none select-none lg:block xl:-right-8"
            style={{ transform: "translateZ(10px)" }}
          >
            MEM_PTR: <motion.span>{memoryAddr1}</motion.span>
          </div>

          <motion.div className="mt-12 flex justify-center" style={{ transform: "translateZ(40px)" }}>
            <RotatingQuotes allowRichMotion={allowRichMotion} />
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-mono uppercase tracking-[0.32em] text-cyan-800/70 md:flex">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-800/70" />
          <span>ARCHIVE_LINK_READY</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-800/70" />
        </div>
      </section>

      <div ref={contentRef} className="relative z-20 w-full overflow-visible px-4 pb-24 pt-10 md:px-8 lg:px-12">
        <div className="absolute inset-x-0 -top-36 h-36 bg-gradient-to-b from-transparent via-[#02040a]/82 to-[#02040a] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.98),rgba(3,8,13,0.96)_45%,rgba(2,4,10,1))] border-y border-white/5 z-0" />
        <div className="absolute inset-0 opacity-[0.08] z-0" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)', backgroundSize: '96px 96px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent z-0" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 border-b border-white/5 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.28em] text-cyan-700/80">
                <span className="h-px w-10 bg-cyan-900/80" />
                <span>ARCHIVE_STREAM</span>
                <span className="hidden h-px w-10 bg-cyan-900/80 sm:block" />
              </div>
              <h2 className="mt-3 font-mono text-xl font-black uppercase tracking-normal text-slate-200 sm:text-2xl md:text-3xl">
                RECENT_TRANSMISSIONS
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {archiveStats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex h-10 items-center gap-2 border border-cyan-500/15 bg-cyan-950/10 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <Icon className="h-3.5 w-3.5 text-cyan-500/80" />
                  <span>{label}</span>
                  <span className="text-cyan-300">{value}</span>
                </div>
              ))}
              <button
                type="button"
                onClick={openSearch}
                aria-label="Open search"
                className="flex h-10 items-center gap-2 border border-cyan-400/25 bg-cyan-500/10 px-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition-colors hover:border-cyan-300/60 hover:bg-cyan-400/15 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300 cursor-none"
              >
                <Search className="h-3.5 w-3.5" />
                <span>SEARCH</span>
              </button>
            </div>
          </div>

          <div className="relative flex flex-col items-start gap-8 overflow-visible lg:flex-row lg:gap-16 xl:gap-20">
            <div className="relative z-30 w-full shrink-0 overflow-visible lg:sticky lg:top-28 lg:w-[21.5rem] lg:pr-6 xl:w-[22rem] xl:pr-8">
              <Sidebar categories={allCategories} isExpanded={true} onExpandedChange={() => {}} allowRichMotion={allowRichMotion} />
            </div>

            <motion.div
              className="relative z-10 flex-1 min-w-0 w-full overflow-visible will-change-transform"
            >
              <div className="pointer-events-none absolute -left-8 top-2 bottom-20 hidden w-px bg-gradient-to-b from-transparent via-cyan-500/18 to-transparent lg:block" />
              <div className={`transition-all duration-500 ease-out ${isPending ? 'opacity-30 blur-md scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`}>
                {filteredPosts.length > 0 ? (
                  <BlogList posts={paginatedPosts} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} allowRichMotion={allowRichMotion} />
                ) : (
                  <div className="relative flex min-h-[18rem] flex-col items-center justify-center overflow-hidden border border-dashed border-cyan-500/20 bg-[linear-gradient(135deg,rgba(4,10,18,0.88),rgba(2,6,12,0.72))] px-6 py-24 font-mono text-sm text-cyan-700 transition-colors hover:border-cyan-400/40 cursor-crosshair">
                    <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                    <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.28em] text-rose-400/80">WARN: 404</span>
                    <span className="relative z-10 text-center uppercase tracking-[0.18em] text-cyan-500">[ NO_TRANSMISSIONS_IN_SELECTED_SECTOR ]</span>
                    <div className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-gradient-to-r from-cyan-400/10 via-cyan-400 to-rose-400/20 transition-transform duration-500 origin-left hover:scale-x-100" />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
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
