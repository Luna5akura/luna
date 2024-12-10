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
    <div className="bg-sky-100 rounded-lg shadow p-6 mb-6 mx-16">
      <h2 className="text-2xl font-semibold text-sky-900">{post.title}</h2>
      <div className="text-sm text-sky-900 mb-4">
        {post.date} • {post.author}
      </div>
      <p className="text-sky-900 mb-4">{post.excerpt}</p>
      <Link to={`/posts/${post.id}`}>
        <Button variant="default" className="font-semibold bg-sky-900 text-sky-100 hover:bg-sky-600 focus:outline-none">Detail</Button>
      </Link>
    </div>
  );
};

export default BlogPost;
