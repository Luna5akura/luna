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
      <h2 className="font-semibold text-sky-900
      text-xl
      sm:text-xl
      lg:text-2xl
      ">{post.title}</h2>
      <div className="text-sky-900 mb-4
      text-xs
      sm:text-xs
      lg:text-sm
      ">
        {post.date} • {post.author}
      </div>
      <p className="text-sky-900 mb-4
      text-sm
      sm:text-sm
      lg:text-base
      ">{post.excerpt}</p>
      <Link to={`/posts/${post.contentKey}`}>
        <Button variant="default" className="font-semibold bg-sky-900 text-sky-100 hover:bg-sky-600 focus:outline-none
        text-sm
        sm:text-sm
        lg:text-base
        ">Detail</Button>
      </Link>
    </div>
  );
};

export default BlogPost;
