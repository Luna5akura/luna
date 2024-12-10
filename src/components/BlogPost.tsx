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
      <h2 className="text-2xl font-semibold text-sky-950">{post.title}</h2>
      <div className="text-sm text-sky-950 mb-4">
        {post.date} • {post.author}
      </div>
      <p className="text-sky-950 mb-4">{post.excerpt}</p>
      <Link to={`/posts/${post.id}`}>
        <Button variant="default" className="font-semibold bg-sky-950 text-sky-100 hover:bg-sky-600">Detail</Button>
      </Link>
    </div>
  );
};

export default BlogPost;
