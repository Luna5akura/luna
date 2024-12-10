// src/components/BlogList.tsx
import React from 'react';
import { Post } from '@/types';
import BlogPost from '@/components/BlogPost';

interface BlogListProps {
  posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post: Post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
