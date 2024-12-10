// src/pages/PostDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '@/data/posts';
import { Post } from '@/types';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import 'katex/dist/katex.min.css';
// import '@/styles/markdown.css';

const markdownFiles = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post: Post | undefined = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto mt-10 pt-16 ml-64">
        <h2 className="text-2xl font-bold text-sky-100">404 NOT FOUND</h2>
      </div>
    );
  }

  const contentModules: { [key: string]: string } = {};

  for (const path in markdownFiles) {
    const content = markdownFiles[path] as string;
    const match = path.match(/\/([a-zA-Z0-9_-]+)\.md$/);
    if (match) {
      const key = match[1];
      contentModules[key] = content;
    }
  }

  const markdownContent = contentModules[post.contentKey];

  if (!markdownContent) {
    return (
      <div className="container mx-auto mt-10 pt-16 max-w-full">
        <h2 className="text-2xl font-bold text-sky-100">Content Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-sky-100 rounded-lg shadow pt-16 w-3/4">
      <h1 className="text-3xl font-bold mb-4 text-sky-950">{post.title}</h1>
      <div className="text-sm text-sky-950 mb-4">
        {post.date} • {post.author}
      </div>
      <div className="prose prose-sky max-w-full">
        <ReactMarkdown
          children={markdownContent}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
      </div>
    </div>
  );
};

export default PostDetails;
