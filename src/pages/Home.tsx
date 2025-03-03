// Home.tsx
import BlogList from '@/components/BlogList';
import {useLocation} from "react-router-dom";
import {posts} from "@/data/posts";
import Sidebar from "@/components/Sidebar";
import {useEffect, useState} from 'react';
import SearchModal from '@/components/SearchModal';

const ITEMS_PER_PAGE = 5;

const Home: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');
  const allCategories = Array.from(new Set(posts.map((post) => post.category)));

  // 新增状态
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  // 键盘事件监听
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

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    const saved = localStorage.getItem('sidebarExpanded');
    return saved ? JSON.parse(saved) : false;
  });

  const filteredPosts = selectedCategory && selectedCategory !== 'All'
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const hasPosts = filteredPosts.length > 0;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="font-bold mb-8 text-center text-sky-100
      text-5xl
      sm:text-5xl
      lg:text-6xl
      ">This is Luna's world</h1>
      <div className="flex row-auto">
        <div className={`
          transition-all duration-300 ease-in-out
          ${isSidebarExpanded ? 'w-[250px]' : 'w-10'}
          mr-6
        `}>
          <Sidebar
            key={selectedCategory}
            categories={allCategories}
            isExpanded={isSidebarExpanded}
            onExpandedChange={setIsSidebarExpanded}
          />
        </div>
        <div className={`
          transition-all duration-300 ease-in-out
          flex-1
          ${isSidebarExpanded ? 'ml-0' : 'ml-4'}
        `}>
          {hasPosts ? (
            <BlogList
              posts={paginatedPosts}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          ) : (
            <p className="text-sky-100">No posts found in this category.</p>
          )}
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
        />
      )}
    </div>
  );
};

export default Home;
