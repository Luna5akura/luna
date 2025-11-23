// src/components/BlogPost.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types';
import { ArrowUpRight } from "lucide-react";

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="group relative w-full mb-12">
      <Link to={`/posts/${post.contentKey}`} className="block">
        {/* 卡片主体：几乎完全透明，靠边框和布局撑起质感 */}
        <div className="
          relative z-10
          border-l-2 border-slate-800 hover:border-pink-500
          pl-6 py-2 transition-colors duration-500
        ">
          
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs font-mono text-pink-500/80 tracking-widest uppercase">
              {post.date}
            </span>
            <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
              {post.author}
            </span>
          </div>

          <h2 className="
            text-3xl md:text-4xl font-serif font-medium text-slate-200 
            group-hover:text-white group-hover:translate-x-2 
            transition-all duration-500 ease-out
          ">
            {post.title}
          </h2>

          <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-2xl line-clamp-2 group-hover:text-slate-400 transition-colors">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center text-slate-500 group-hover:text-pink-400 transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest mr-2">Read Article</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* 装饰性背景光，hover时才出现 */}
        <div className="
          absolute -inset-4 bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-blue-500/0
          opacity-0 group-hover:opacity-5 group-hover:from-pink-500/10
          blur-2xl transition-all duration-700
        " />
      </Link>
    </div>
  );
};

export default BlogPost;