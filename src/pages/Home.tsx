// src/pages/Home.tsx
import BlogList from '@/components/BlogList';
import {useLocation} from "react-router-dom";
import {posts} from "@/data/posts";
import Sidebar from "@/components/Sidebar";

const Home: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');
  const allCategories = Array.from(new Set(posts.map((post) => post.category)));

  const filteredPosts = selectedCategory && selectedCategory !== 'All'
  ? posts.filter((post) => post.category === selectedCategory)
  : posts;

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
          <Sidebar categories={allCategories}/>
        </div>
        <div className="w-5/6">
          {hasPosts ? (
            <BlogList posts={filteredPosts}/>
          ) : (
            <p className="text-sky-100">No posts found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
