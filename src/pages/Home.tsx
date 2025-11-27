import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import SearchModal from '@/components/SearchModal';
import { usePosts } from '@/hooks/usePosts';
import { useScrambleText } from '@/hooks/useScrambleText';
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
  const titleText = useScrambleText("LUNA WORLD", 40);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => { setCurrentPage(1); }, [selectedCategory]);

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
      if (e.key === 'Escape' && isSearchVisible) setIsSearchVisible(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchVisible]);

  return (
    // 【修改点 1】移除 bg-[#050505]，让底层的 PerspectiveGrid 透出来
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* 背景组件 */}
      <PerspectiveGrid />
      <CyberHero />

      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        
        {/* Hero 标题区 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
             <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-mono text-cyan-500 tracking-widest">ONLINE</span>
             </div>
             {/* 巨大的标题，叠加在月球上 */}
             <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mix-blend-difference select-none relative z-20">
              {titleText}
            </h1>

            <div className="pl-1 mt-4">
                <RotatingQuotes />
            </div>
          </div>
          
          <div className="text-right font-mono text-s text-gray-500 space-y-1">
            <p>// DATA_STREAM: ACTIVE</p>
            <p>// ENTRIES_DETECTED: {filteredPosts.length}</p>
          </div>
        </motion.div>

        {/* 主内容区 */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* 左侧：Sidebar (已移除装饰) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:w-48 shrink-0 z-20"
          >
            <div className="sticky top-32">
               {/* 【修改点 2】只保留 Sidebar，删除了 Dashboard Widget */}
               <Sidebar 
                 categories={allCategories} 
                 isExpanded={true} 
                 onExpandedChange={() => {}} 
               />
            </div>
          </motion.div>

          {/* 右侧：文章列表 */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 min-w-0 w-full"
          >
            {filteredPosts.length > 0 ? (
              <BlogList
                posts={paginatedPosts}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            ) : (
              <div className="py-32 flex flex-col items-center justify-center border border-dashed border-white/10 text-gray-600 font-mono">
                <span>[NO_DATA_FOUND_IN_SECTOR]</span>
              </div>
            )}
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