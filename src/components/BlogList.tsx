// src/components/BlogList.tsx
import React from 'react';
import { posts } from '@/data/posts';
import { Post } from '@/types';
import BlogPost from '@/components/BlogPost';

const BlogList: React.FC = () => {
  return (
    <div>
      {posts.map((post: Post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
