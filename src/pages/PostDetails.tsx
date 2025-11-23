import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import TableOfContents from '@/components/TableOfContents';
import { MarkdownContent } from '@/components/MarkdownContent';
import remarkWrapSections from '@/utils/remarkWarpSections';
import 'katex/dist/katex.min.css';
import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/types';
import { motion } from 'framer-motion';

const PostDetails: React.FC = () => {
  const { '*' : slug } = useParams<{ '*': string }>();
  const { posts, contents } = usePosts();
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [markdownContent, setMarkdownContent] = useState<string | undefined>(undefined);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ... (保留原本的 useEffects 用于 resize 和 keydown) ...
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (posts.length > 0 && slug) {
      const foundPost = posts.find((p) => p.contentKey === slug);
      if (foundPost) {
        setPost(foundPost);
        setMarkdownContent(contents[foundPost.contentKey]);
      }
    }
  }, [posts, contents, slug]);

  if (!post || !markdownContent) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-red-500 animate-pulse">
        ERR: 404_FILE_NOT_FOUND
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full pt-32 pb-20 px-6 max-w-5xl mx-auto"
    >
      {/* 顶部元数据栏 */}
      <div className="mb-12 border-b border-white/20 pb-6 font-mono text-xs text-gray-400">
        <Link to="/" className="hover:text-white mb-4 block">{'<'} RETURN_ROOT</Link>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 uppercase tracking-wider">
           <div>
             <span className="block opacity-50">AUTHOR</span>
             <span className="text-white">{post.author}</span>
           </div>
           <div>
             <span className="block opacity-50">DATE</span>
             <span className="text-white">{post.date}</span>
           </div>
           <div>
             <span className="block opacity-50">ID</span>
             <span className="text-white">#{post.id}</span>
           </div>
           <div>
             <span className="block opacity-50">CATEGORY</span>
             <span className="text-white">{post.category}</span>
           </div>
        </div>
      </div>

      <div className="relative">
         <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white uppercase tracking-tight leading-tight">
          {post.title}
         </h1>

         {/* 文章内容区域 - 核心是 prose-invert */}
         <div className="
            prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:uppercase
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-mono
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
            prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/10
            prose-blockquote:border-l-2 prose-blockquote:border-cyan-500 prose-blockquote:text-gray-400
            prose-img:grayscale hover:prose-img:grayscale-0 prose-img:transition-all prose-img:duration-500
         ">
            <MarkdownContent content={markdownContent}>
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkWrapSections]}
                rehypePlugins={[rehypeKatex, rehypeSlug]}
              >
                {markdownContent}
              </ReactMarkdown>
            </MarkdownContent>
         </div>
      </div>

      <TableOfContents
        content={markdownContent}
        isOpen={isTocOpen}
        setIsOpen={setIsTocOpen}
        isMobile={isMobile}
      />
    </motion.div>
  );
};

export default PostDetails;