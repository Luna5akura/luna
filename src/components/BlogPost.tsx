// src/components/BlogPost.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types';
import {Button} from "@/components/ui/button";

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
      <div className="text-sm text-gray-500 mb-4">
        {post.date} • {post.author}
      </div>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link to={`/posts/${post.id}`}>
        <Button variant="default">阅读更多</Button>
      </Link>
    </div>
  );
};

export default BlogPost;
