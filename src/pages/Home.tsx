// src/pages/Home.tsx
import React from 'react';
import BlogList from '@/components/BlogList';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-6xl font-bold mb-8 text-center text-sky-100">This is Luna's world</h1>
      <BlogList />
    </div>
  );
};

export default Home;
