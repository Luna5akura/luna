import React, { useState, useEffect, useRef, useMemo, useCallback, useTransition } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { CyberHero, PerspectiveGrid } from '@/components/CyberHero';
import { RotatingQuotes } from '@/components/RotatingQuotes';

const ITEMS_PER_PAGE = 5;

// ==========================================
// 【炫技点 2：架构级解耦】抽离高级 Custom Hooks
// 实际开发中可将其移至 src/hooks/useCyberParallax.ts
// ==========================================
const useCyberParallax = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 炫技：加入移动端设备陀螺仪支持 (DeviceOrientation API)，跨端降维打击
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma != null && e.beta != null) {
        // 将陀螺仪数据映射到屏幕坐标系
        mouseX.set((e.gamma + 90) * (window.innerWidth / 180));
        mouseY.set((e.beta + 90) * (window.innerHeight / 180));
      }
    };
    // 注意: iOS 13+ 需要用户手动触发授权，此处作为基础监听展示
    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [mouseX, mouseY]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  },[mouseX, mouseY]);

  // 3D 倾斜弹簧物理系统
  const rotateX = useSpring(useTransform(mouseY,[0, typeof window !== 'undefined' ? window.innerHeight : 1000], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX,[0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-15, 15]), { stiffness: 150, damping: 20 });

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      800px circle at ${mouseX}px ${mouseY}px,
      rgba(34, 211, 238, 0.08),
      transparent 80%
    )
  `;

  return { handleMouseMove, rotateX, rotateY, spotlightBackground };
};

// 【炫技点 2：架构级解耦】全局快捷键监听 Hook
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

// 【炫技点 5：View Transitions API】抽离丝滑路由跳转 Hook
// 你可以把这个 Hook 传递给 BlogList 里的文章卡片点击事件使用
export const useSmoothNavigate = () => {
  const navigate = useNavigate();
  return useCallback((to: string) => {
    if (!(document as any).startViewTransition) {
      navigate(to);
      return;
    }
    (document as any).startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });
  }, [navigate]);
};
// ==========================================

const Home: React.FC = () => {
  const { posts, contents } = usePosts();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');

  // 使用抽离的 Hooks
  const { handleMouseMove, rotateX, rotateY, spotlightBackground } = useCyberParallax();
  const smoothNavigate = useSmoothNavigate(); // 可选：传递给 Sidebar 或子组件

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
  const[currentPage, setCurrentPage] = useState(1);
  
  // 【炫技点 1：React 18 并发渲染】
  const [isPending, startTransition] = useTransition();

  // 视差滚动
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: contentRef, offset:['start end', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 快捷键解耦调用
  useGlobalShortcut('/', () => !isSearchVisible && setIsSearchVisible(true));
  useGlobalShortcut('Escape', () => isSearchVisible && setIsSearchVisible(false));

  // 分页变化结合 View Transitions (炫技点 1 + 5 的究极融合)
  const handlePageChange = useCallback((newPage: number) => {
    // 检查是否支持原生的 View Transition API
    if (!(document as any).startViewTransition) {
      startTransition(() => setCurrentPage(newPage));
    } else {
      // 在 View Transition 内强制同步刷新 React 状态 (flushSync)
      (document as any).startViewTransition(() => {
        flushSync(() => setCurrentPage(newPage));
      });
    }
  },[]);

  // 分类切换结合 React 18 并发渲染
  useEffect(() => {
    startTransition(() => {
      setCurrentPage(1);
    });
  }, [selectedCategory]);

  const paginatedPosts = useMemo(() => {
    return filteredPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  return (
    <motion.div 
      className="min-h-screen w-full relative bg-[#0a0a0a] text-white overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 【炫技点 3：极致渲染】添加 willChange 提示浏览器 GPU 加速背景重绘 */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 will-change-[background]"
        style={{ background: spotlightBackground }}
      />

      <style>{`
        @property --luna-c1 { syntax: '<color>'; initial-value: white; inherits: false; }
        @property --luna-c2 { syntax: '<color>'; initial-value: #9ca3af; inherits: false; }

        .luna-text {
          --luna-c1: white;
          --luna-c2: #9ca3af;
          background-image: linear-gradient(135deg, var(--luna-c1), var(--luna-c2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transition: --luna-c1 0.8s ease, --luna-c2 0.8s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.4s ease;
        }

        .luna-text:hover {
          --luna-c1: #67e8f9;
          --luna-c2: #fff;
          transform: scale(1.02) translateY(-5px);
          filter: drop-shadow(0 15px 35px rgba(34, 211, 238, 0.4));
        }

        /* View Transition 动画的伪元素控制，实现页面跳转/分页如电影般的淡入淡出 */
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation-duration: 0.5s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #22d3ee; }
      `}</style>

      {/* React 18 并发加载状态 UI */}
      {isPending && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center backdrop-blur-[2px] bg-black/10 transition-all">
           <span className="text-cyan-500 font-mono text-sm tracking-widest animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">[ SYSTEM_RECALCULATING_MATRIX... ]
           </span>
        </div>
      )}

      <div className="fixed inset-0 z-0">
        <div className="opacity-60">
          <PerspectiveGrid />
          <CyberHero />
        </div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none mix-blend-overlay animate-pulse" />
      </div>

      <section className="relative h-screen w-full flex flex-col items-center justify-center z-10 px-6 perspective-[1000px]">
        {/* 【炫技点 3：极致渲染】加上 transform-gpu 强制硬件加速避免重排 */}
        <motion.div
          style={{ 
            y: titleY, 
            opacity: titleOpacity,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease:[0.16, 1, 0.3, 1] }}
          className="text-center will-change-transform transform-gpu" 
        >
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4 text-xs font-mono text-cyan-500/80 tracking-[1em] uppercase overflow-hidden"
          >
            <span className="w-8 h-px bg-cyan-500/50 relative overflow-hidden">
              <motion.span 
                animate={{ x:["-100%", "100%"] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-cyan-400"
              />
            </span>
            System_Online
            <span className="w-8 h-px bg-cyan-500/50" />
          </motion.div>

          <h1 
            className="
              font-bold uppercase tracking-tight leading-none 
              text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] xl:text-[16rem]
              cursor-crosshair
              luna-text
            "
            style={{ transform: "translateZ(50px)" }}
          >
            LUNA
            <br />
            WORLD
          </h1>

          <motion.div 
            className="mt-8"
            style={{ transform: "translateZ(30px)" }}
          >
            <RotatingQuotes />
          </motion.div>
        </motion.div>
      </section>

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 min-h-screen bg-gradient-to-b from-[#0a0a0a]/0 via-[#0a0a0a] to-[#0a0a0a]"
      >
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0a0a] -translate-y-full pointer-events-none" />
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pt-12">
          <div className="lg:w-64 shrink-0 sticky top-32">
            <Sidebar categories={allCategories} isExpanded={true} onExpandedChange={() => {}} />
          </div>

          {/* 【炫技点 3：极致渲染】使用 content-visibility 和 contain-intrinsic-size 截断视口外渲染 */}
          <div 
            className="flex-1 min-w-0 w-full"
            style={{ 
              contentVisibility: 'auto', 
              containIntrinsicSize: '1000px' // 设定预估高度，避免滚动条抖动
            }}
          >
            <div className="relative">
              <div className="absolute -top-12 left-0 text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                &gt;&gt; Data_Logs // Recent_Entries
              </div>
              
              {/* 利用 opacity 的微弱变化来配合并发渲染视觉反馈 */}
              <div className={`transition-opacity duration-300 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
                {filteredPosts.length > 0 ? (
                  <BlogList
                    posts={paginatedPosts}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange} // 注入带有 View Transitions 的翻页控制
                  />
                ) : (
                  <div className="py-32 flex flex-col items-center justify-center border-y border-dashed border-white/10 text-gray-600 font-mono">
                    <span className="animate-pulse">[ NO_DATA_FOUND_IN_SECTOR ]</span>
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