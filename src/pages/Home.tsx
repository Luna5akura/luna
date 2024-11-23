import React from 'react';
import { posts } from '@/data/posts';
import { Post } from '@/types';
import BlogPost from '../components/BlogPost';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center">欢迎来到我的博客</h1>
      {posts.map((post: Post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
