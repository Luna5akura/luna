import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { CyberHero, PerspectiveGrid } from '@/components/CyberHero'; 
import { RotatingQuotes } from '@/components/RotatingQuotes';
import { cn } from "@/lib/utils";

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

  // 当分类改变时重置页码
  useEffect(() => { setCurrentPage(1); }, [selectedCategory]);

  const filteredPosts = selectedCategory && selectedCategory !== 'All'
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 快捷键监听
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchVisible) {
        e.preventDefault();
        setIsSearchVisible(true);
      }
      if (e.key === 'Escape' && isSearchVisible) setIsSearchVisible(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchVisible]);

  return (
    <div className="min-h-screen w-full relative bg-[#0a0a0a] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
            <style>{`
        @property --from-color {
          syntax: '<color>';
          initial-value: white;
          inherits: false;
        }
        @property --to-color {
          syntax: '<color>';
          initial-value: white;
          inherits: false;
        }
      `}</style>
      
      {/* --- 背景层 --- */}
      <div className="fixed inset-0 z-0">
         {/* 降低 CyberHero 的不透明度，确保它只是背景纹理 */}
         <div className="opacity-60"> 
            <PerspectiveGrid />
            <CyberHero />
         </div>
         {/* 添加噪点或扫描线叠加层，增加质感 */}
         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      </div>

      {/* --- 主内容容器 --- */}
      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        
        {/* --- Hero 区域：风格统一化 --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div className="relative group cursor-default">
             {/* 装饰性的小标题 */}
             <div className="flex items-center gap-3 mb-2 text-xs font-mono text-cyan-500/80 tracking-[0.5em] uppercase">
                <span className="w-4 h-[1px] bg-cyan-500" />
                System_Online
             </div>

             <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tight            text-transparent bg-clip-text bg-gradient-to-r from-[var(--from-color,white)] to-[var(--to-color,white)] group-hover:[--from-color:theme(colors.cyan.300)] group-hover:[--to-color:white] cursor-hover transition-[--from-color,--to-color] duration-500 ease-in-out">
              LUNA WORLD
            </h1>

            {/* 引用组件位置调整 */}
            <div className="pl-1 ml-3">
                <RotatingQuotes />
            </div>
          </div>
          
          {/* 右侧数据面板：增加边框和精密感 */}
          <div className="hidden md:block text-right font-mono text-xs text-gray-500 space-y-2 border-r border-white/20 pr-6 py-2">
            <p className="flex justify-end gap-4">
                <span>STATUS</span> 
                <span className="text-cyan-400">ACTIVE</span>
            </p>
            <p className="flex justify-end gap-4">
                <span>ENTRIES</span> 
                <span className="text-white">{filteredPosts.length.toString().padStart(3, '0')}</span>
            </p>
          </div>
        </motion.div>

        {/* --- 双栏布局 --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* 左侧栏：Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:w-64 shrink-0 z-20"
          >
            {/* sticky 定位确保滚动时侧边栏跟随 */}
            <div className="sticky top-32">
               <Sidebar 
                 categories={allCategories} 
                 isExpanded={true} 
                 onExpandedChange={() => {}} 
               />
            </div>
          </motion.div>

          {/* 右侧栏：BlogList */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 min-w-0 w-full"
          >
            {/* 这里直接使用你已经写好的 BlogList，它现在的风格已经完美 */}
            <div className="relative">
                {/* 给列表加一个顶部装饰线头，呼应 Sidebar */}
                <div className="absolute -top-8 left-0 text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase">
                    &gt;&gt; Data_Logs // Recent
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
          </motion.div>
        </div>

        {isSearchVisible && (
          <SearchModal
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onClose={() => { setIsSearchVisible(false); setSearchTerm(''); }}
            posts={posts}
            contents={contents}
          />
        )}
      </div>
    </div>
  );
};

export default Home;