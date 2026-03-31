// src/pages/Home.tsx
import React, { useState, useEffect, useRef, useMemo, useCallback, useTransition } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, MotionValue, useVelocity } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { CyberHero } from '@/components/CyberHero'; // 此组件已改为灰色背景，无需改动
import { RotatingQuotes } from '@/components/RotatingQuotes'; // 此组件已改为灰色风格

const ITEMS_PER_PAGE = 5;

const useHexStream = (length: number = 8, intervalMs: number = 50) => {
  const hexValue = useMotionValue('');
  useEffect(() => {
    let lastTime = 0;
    let frameId: number;
    const update = (time: number) => {
      if (time - lastTime > intervalMs) {
        let str = '0x';
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
  },[length, intervalMs, hexValue]);
  return hexValue;
};

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
  const rotateX = useSpring(useTransform(mouseY,[0, typeof window !== 'undefined' ? window.innerHeight : 1000], [2, -2]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX,[0, typeof window !== 'undefined' ? window.innerWidth : 1000],[-2, 2]), { stiffness: 200, damping: 30 });
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

const CyberCursor = ({ mouseX, mouseY }: { mouseX: MotionValue<number>; mouseY: MotionValue<number> }) => {
  const smoothXFast = useSpring(mouseX, { damping: 25, stiffness: 400, mass: 0.1 });
  const smoothYFast = useSpring(mouseY, { damping: 25, stiffness: 400, mass: 0.1 });
  const smoothXSlow = useSpring(mouseX, { damping: 30, stiffness: 150, mass: 0.8 });
  const smoothYSlow = useSpring(mouseY, { damping: 30, stiffness: 150, mass: 0.8 });
  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]"
        style={{ x: smoothXFast, y: smoothYFast, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-6 h-6 border border-gray-600 pointer-events-none z-[9998] flex items-center justify-center"
        style={{ x: smoothXSlow, y: smoothYSlow, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="w-full h-[1px] bg-gray-600 absolute" />
        <div className="h-full w-[1px] bg-gray-600 absolute" />
      </motion.div>
    </>
  );
};

const TitleLetter = React.memo(({
  char, index, mouseX, mouseY, titleY
}: {
  char: string; index: number; mouseX: MotionValue<number>; mouseY: MotionValue<number>; titleY: MotionValue<number>;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const z = useMotionValue(0);
  const y = useTransform(z, (v) => -v * 0.6);
  const light = useMotionValue(0);
  useEffect(() => {
    let raf = 0;
    const amplitude = 12;
    const speed = 0.5;
    const phase = index * 0.45;
    const start = performance.now();
    const loop = (now: number) => {
      const t = (now - start) / 1000;
      z.set(Math.sin(t * speed + phase) * amplitude);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  },[index, z]);
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
  useEffect(() => {
    const updateLight = () => {
      if (baseCenter.current.x === 0 && baseCenter.current.y === 0) return;
      const mx = mouseX.get();
      const my = mouseY.get();
      const ty = titleY.get();
      const cx = baseCenter.current.x - window.scrollX;
      const cy = baseCenter.current.y - window.scrollY + ty;
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const currentLight = Math.max(0, 1 - dist / 200);
      light.set(currentLight);
    };
    const subs = [mouseX, mouseY, titleY].map(mv => mv.on ? mv.on('change', updateLight) : (mv as any).onChange(updateLight));
    window.addEventListener('scroll', updateLight, { passive: true });
    return () => {
      subs.forEach(unsub => unsub());
      window.removeEventListener('scroll', updateLight);
    };
  },[mouseX, mouseY, titleY, light, char]);
  const color = useTransform(light, (v) => {
    const gray = 40 + Math.floor(80 * v);
    return `rgb(${gray}, ${gray}, ${gray})`;
  });
  const shadow = useTransform(light, (v) => v > 0.5 ? `0 0 4px rgba(0,0,0,0.5)` : 'none');
  return (
    <motion.span
      ref={ref}
      aria-hidden
      className="inline-block font-mono font-black uppercase tracking-tighter leading-none select-none"
      style={{
        display: 'inline-block',
        willChange: 'transform',
        transform: useMotionTemplate`translateZ(${z}px) translateY(${y}px)`,
        color,
        textShadow: shadow,
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
  const allCategories = useMemo(() => Array.from(new Set(posts.map((post) => post.category))),[posts]);
  const filteredPosts = useMemo(() => {
    return selectedCategory && selectedCategory !== 'All'
      ? posts.filter((post) => post.category === selectedCategory)
      : posts;
  }, [posts, selectedCategory]);
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const[isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({ target: contentRef, offset: ['start end', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1],[0, -80]);
  const titleZ = useTransform(scrollYProgress, [0, 1],[0, -40]);
  const titleOpacity = useTransform(scrollYProgress,[0, 0.5], [1, 0]);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const listSkewY = useTransform(smoothVelocity,[-2000, 2000], [-1, 1]);
  const listFilter = useTransform(smoothVelocity,[-2000, 0, 2000], ['contrast(1)', 'contrast(1)', 'contrast(1)']);
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
      className="min-h-screen w-full relative bg-[#ece9d8] text-black overflow-x-hidden selection:bg-gray-400 selection:text-white cursor-default"
      onMouseMove={handleMouseMove}
    >
      <div className="hidden md:block">
         <CyberCursor mouseX={mouseX} mouseY={mouseY} />
      </div>
      {isPending && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center bg-black/40 transition-all">
           <div className="text-black font-mono text-xs tracking-wider mb-2">[ LOADING ]</div>
           <div className="font-mono text-gray-600 text-xs">[▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░]</div>
        </div>
      )}
      <CyberHero />
      <section className="relative h-screen w-full flex flex-col items-center justify-center z-20 px-6 perspective-[1400px] overflow-hidden">
        <motion.div
          style={{ y: titleY, z: titleZ, opacity: titleOpacity, rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="text-center will-change-transform transform-gpu relative"
        >
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6 text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase"
            style={{ transform: "translateZ(20px)" }}
          >
            <span className="w-12 h-[1px] bg-gray-400" />
            <span className="flex items-center gap-2">SYS.KERNEL <motion.span>{memoryAddr2}</motion.span></span>
            <span className="w-12 h-[1px] bg-gray-400" />
          </motion.div>
          <div className="relative group inline-block" style={{ transform: "translateZ(60px)" }}>
            <h1 className="font-mono font-black uppercase tracking-tighter leading-none text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-gray-800">
              <span style={{ display: 'inline-flex', gap: '0.02em', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
                {letters.map((ch, i) => (
                  <TitleLetter key={i} char={ch} index={i} mouseX={mouseX} mouseY={mouseY} titleY={titleY} />
                ))}
              </span>
            </h1>
          </div>
          <div 
            className="absolute -right-8 top-1/2 -translate-y-1/2 writing-vertical-rl text-[9px] font-mono text-gray-500 tracking-wider pointer-events-none select-none"
            style={{ transform: "translateZ(10px)" }}
          >
             MEM_PTR: <motion.span>{memoryAddr1}</motion.span>
          </div>
          <motion.div className="mt-12 flex justify-center" style={{ transform: "translateZ(40px)" }}>
            <RotatingQuotes />
          </motion.div>
        </motion.div>
      </section>
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 min-h-screen bg-[#ece9d8]">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#ece9d8] -translate-y-full pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[#ece9d8] z-0" />
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pt-12 border-t border-gray-400">
          <div className="lg:w-64 shrink-0 sticky top-32">
            <Sidebar categories={allCategories} isExpanded={true} onExpandedChange={() => {}} />
          </div>
          <motion.div 
            className="flex-1 min-w-0 w-full will-change-transform"
            style={{ skewY: listSkewY, filter: listFilter, contentVisibility: 'auto', containIntrinsicSize: '1000px' }}
          >
            <div className="relative">
              <div className="absolute -top-16 left-0 text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase flex items-center gap-3 w-full border-b border-gray-400 pb-2">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-sm bg-gray-600" />
                  <span className="w-2 h-2 rounded-sm bg-gray-400" />
                  <span className="w-2 h-2 rounded-sm bg-gray-400" />
                </span>
                &gt;&gt; QUERY DATA LOGS // RECENT ALLOCATIONS
              </div>
              <div className={`transition-all duration-500 ease-out mt-8 ${isPending ? 'opacity-30 blur-md scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`}>
                {filteredPosts.length > 0 ? (
                  <BlogList posts={paginatedPosts} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                ) : (
                  <div className="py-32 flex flex-col items-center justify-center border border-dashed border-gray-400 bg-[#f5f3e8] text-gray-500 font-mono text-sm relative overflow-hidden group hover:border-gray-600 transition-colors cursor-default">
                    <span className="relative z-10">[ NO DATA IN SECTOR ]</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        {isSearchVisible && (
          <SearchModal searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onClose={() => { setIsSearchVisible(false); setSearchTerm(''); }} posts={posts} contents={contents} />
        )}
      </div>
    </motion.div>
  );
};

export default Home;