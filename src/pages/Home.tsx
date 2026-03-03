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
// 【顶级炫技点 1：零重绘 (Zero-Render) 高频数据流引擎】
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
// （注意：这里我们额外把 mouseX / mouseY 暴露出来，
//  供字母组件基于鼠标位置做“照亮”效果）
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

  // 重要：把 mouseX / mouseY 返回，供标题字母使用
  return { handleMouseMove, rotateX, rotateY, mouseX, mouseY };
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

  // 从 hook 获取 mouseX / mouseY
  const { handleMouseMove, rotateX, rotateY, mouseX, mouseY } = useCyberParallax();
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
  
  const [isPending, startTransition] = useTransition();

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: contentRef, offset: ['start end', 'end start'] });
  
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

  // ------------- 字母组件（内部组件） -------------
  const TitleLetter: React.FC<{
    char: string;
    index: number;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
  }> = ({ char, index, mouseX, mouseY }) => {
    const ref = useRef<HTMLSpanElement | null>(null);

    // z 浮动量（像素）
    const z = useMotionValue(0);
    // y 由 z 映射得到（位移）
    const y = useTransform(z, (v) => -v * 0.6);
    // 光照强度 0..1
    const light = useMotionValue(0);

    // rAF 驱动的正弦浮动（每个字母有轻微相位差）
    useEffect(() => {
      let raf = 0;
      const amplitude = 24; // z 轴像素振幅
      const speed = 0.7; // 速度调节
      const phase = index * 0.45; // 每个字母相位差

      let start = performance.now();
      const loop = (now: number) => {
        const t = (now - start) / 1000;
        const value = Math.sin(t * speed + phase) * amplitude;
        z.set(value);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }, [index, z]);

    // 计算字母中心并基于 mouseX/mouseY 更新 light
    useEffect(() => {
      let center = { x: 0, y: 0 };
      const updateCenter = () => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        center.x = rect.left + rect.width / 2;
        center.y = rect.top + rect.height / 2;
      };
      updateCenter();
      window.addEventListener('resize', updateCenter);
      window.addEventListener('scroll', updateCenter, true);

      // 订阅 mouseX / mouseY 的变化
      const unsubX = mouseX.onChange(() => {
        updateCenter();
        const mx = mouseX.get();
        const my = mouseY.get();
        const dx = mx - center.x;
        const dy = my - center.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 260; // 影响半径（像素）
        const intensity = Math.max(0, 1 - dist / radius);
        // 平滑设置 light
        light.set(Math.min(1, Math.max(0, intensity)));
      });
      const unsubY = mouseY.onChange(() => {
        // 同上（双订阅只是确保在 mouseY 变时也更新）
        updateCenter();
        const mx = mouseX.get();
        const my = mouseY.get();
        const dx = mx - center.x;
        const dy = my - center.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 260;
        const intensity = Math.max(0, 1 - dist / radius);
        light.set(Math.min(1, Math.max(0, intensity)));
      });

      return () => {
        window.removeEventListener('resize', updateCenter);
        window.removeEventListener('scroll', updateCenter, true);
        unsubX();
        unsubY();
      };
    }, [mouseX, mouseY, index, light]);

    // 通过 light 映射颜色 / 发光强度 / textShadow
    const color = useTransform(light, (v) => {
      // 基础色为 slate，靠近鼠标时偏青色发光
      const alpha = 0.95 * (0.4 + v * 0.6);
      // 混合：当 v 越大，颜色越偏青
      const r = Math.round(236 * (1 - v) + 6 * v);
      const g = Math.round(239 * (1 - v) + 182 * v);
      const b = Math.round(244 * (1 - v) + 212 * v);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    });

    const shadow = useTransform(light, (v) => {
      if (v <= 0.02) return 'none';
      const blur = 8 + v * 32;
      const alpha = 0.12 + v * 0.45;
      // 双色发光（青色 + 白色）
      return `0 0 ${blur}px rgba(6,182,212,${alpha}), 0 0 ${blur / 3}px rgba(255,255,255,${alpha * 0.6})`;
    });

    const brightness = useTransform(light, (v) => 1 + v * 0.9);

    // 合成 transform 字符串
    const transform = useMotionTemplate`translateZ(${z}px) translateY(${y}px)`;

    // 渲染单字母
    return (
      <motion.span
        ref={ref}
        aria-hidden
        className="inline-block font-mono font-black uppercase tracking-tighter leading-none select-none"
        style={{
          display: 'inline-block',
          willChange: 'transform, filter, text-shadow, color',
          transform, // translateZ + translateY
          color,     // motion value
          textShadow: shadow,
          filter: useMotionTemplate`brightness(${brightness})`,
          // 给每个字母一点微妙的透视感（靠近时略放大）
          transformOrigin: 'center center',
          paddingRight: char === ' ' ? '0.28em' : undefined,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    );
  };

  // ---------- 标题文字拆字数组 ----------
  const titleText = 'LUNA WORLD';
  const letters = titleText.split('');

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

          {/* --- 替换的主标题（每字母独立） --- */}
          <div className="relative glitch-text-container group cursor-crosshair inline-block" style={{ transform: "translateZ(60px)" }}>
            <h1 className="font-mono font-black uppercase tracking-tighter leading-none text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-slate-200">
              {/* 我们用 flex-row 保证每个字母 inline-block 无间隙 */}
              <span style={{ display: 'inline-flex', gap: '0.02em', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
                {letters.map((ch, i) => (
                  <TitleLetter key={i} char={ch} index={i} mouseX={mouseX} mouseY={mouseY} />
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