import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { CyberHero, PerspectiveGrid } from '@/components/CyberHero';
import { RotatingQuotes } from '@/components/RotatingQuotes';

const ITEMS_PER_PAGE = 5;

const Home: React.FC = () => {
  const { posts, contents } = usePosts();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');
  const allCategories = Array.from(new Set(posts.map((post) => post.category)));

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredPosts = selectedCategory && selectedCategory !== 'All'
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchVisible) {
        e.preventDefault();
        setIsSearchVisible(true);
      }
      if (e.key === 'Escape' && isSearchVisible) {
        setIsSearchVisible(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchVisible]);

  return (
    <div className="min-h-screen w-full relative bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* 
        === 核心修复 ===
        使用原生 CSS 定义动画类，绕过 Tailwind 的复杂性，确保变量过渡生效。
      */}
      <style>{`
        /* 1. 注册 CSS 变量以允许动画插值 */
        @property --luna-c1 {
          syntax: '<color>';
          initial-value: white;
          inherits: false;
        }
        @property --luna-c2 {
          syntax: '<color>';
          initial-value: #9ca3af;
          inherits: false;
        }

        /* 2. 定义自定义类 */
        .luna-text {
          /* 初始颜色变量 */
          --luna-c1: white;
          --luna-c2: #9ca3af;
          
          /* 直接使用变量定义渐变，不经过 Tailwind */
          background-image: linear-gradient(135deg, var(--luna-c1), var(--luna-c2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          
          /* 明确指定要过渡的属性，确保包含自定义变量 */
          transition: --luna-c1 1s ease-in-out, 
                      --luna-c2 1s ease-in-out, 
                      transform 0.5s ease-out, 
                      filter 0.5s ease-out;
        }

        /* 3. Hover 状态：改变变量值、大小和滤镜 */
        .luna-text:hover {
          --luna-c1: #67e8f9; /* 变更为青色 */
          --luna-c2: white;   /* 变更为白色 */
          transform: scale(1.05);
          filter: drop-shadow(0 0 35px rgba(34, 211, 238, 0.6));
        }
      `}</style>

      <div className="fixed inset-0 z-0">
        <div className="opacity-60">
          <PerspectiveGrid />
          <CyberHero />
        </div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      </div>

      <section className="relative h-screen w-full flex flex-col items-center justify-center z-10 px-6">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4 text-xs font-mono text-cyan-500/80 tracking-[1em] uppercase">
            <span className="w-8 h-px bg-cyan-500" />
            System_Online
            <span className="w-8 h-px bg-cyan-500" />
          </div>

          {/* 
            === H1 修改 === 
            1. 移除了 bg-gradient-to-br, from-*, transition-* 等 Tailwind 类。
            2. 添加了 cursor-hover。
            3. 添加了 luna-text (我们在上面定义的 style)。
          */}
          <h1 className="
            font-bold uppercase tracking-tight leading-none 
            text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] xl:text-[16rem]
            cursor-hover
            luna-text
          ">
            LUNA
            <br />
            WORLD
          </h1>

          <div className="mt-8">
            <RotatingQuotes />
          </div>
        </motion.div>
      </section>

      {/* 内容区域保持不变 */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 min-h-screen bg-gradient-to-b from-[#0a0a0a]/0 via-[#0a0a0a] to-[#0a0a0a]"
      >
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0a0a] -translate-y-full pointer-events-none" />
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pt-12">
          <div className="lg:w-64 shrink-0 sticky top-32">
            <Sidebar categories={allCategories} isExpanded={true} onExpandedChange={() => {}} />
          </div>
          <div className="flex-1 min-w-0 w-full">
            <div className="relative">
              <div className="absolute -top-12 left-0 text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase">
                &gt;&gt; Data_Logs // Recent_Entries
              </div>
              {filteredPosts.length > 0 ? (
                <BlogList
                  posts={paginatedPosts}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              ) : (
                <div className="py-32 flex flex-col items-center justify-center border-y border-dashed border-white/10 text-gray-600 font-mono">
                  <span className="animate-pulse">[ NO_DATA_FOUND_IN_SECTOR ]</span>
                </div>
              )}
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
    </div>
  );
};

export default Home;