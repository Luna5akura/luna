import BlogList from '@/components/BlogList';
import {useLocation} from "react-router-dom";
import {posts} from "@/data/posts";
import Sidebar from "@/components/Sidebar";
import { useState } from 'react';

const ITEMS_PER_PAGE = 5; // 每页显示的文章数量

const Home: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');
  const allCategories = Array.from(new Set(posts.map((post) => post.category)));

  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = selectedCategory && selectedCategory !== 'All'
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  // 计算当前页面应该显示的文章
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
        <div className="w-1/6 m-6 h-screen">
          <Sidebar key={selectedCategory} categories={allCategories}/>
        </div>
        <div className="w-5/6">
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
    </div>
  );
};

export default Home;
