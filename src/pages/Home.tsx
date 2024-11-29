// src/pages/Home.tsx
import React from 'react';
import BlogList from '@/components/BlogList';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center">欢迎来到我的博客</h1>
      <BlogList />
    </div>
  );
};

export default Home;
