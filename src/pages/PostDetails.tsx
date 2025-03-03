// /pages/PostDetails.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import TableOfContents from "@/components/TableOfContents";
import { MarkdownContent } from "@/components/MarkdownContent";
import { posts } from "@/data/posts";
import { Post } from "@/types";
import remarkWrapSections from "@/utils/remarkWarpSections";
import "katex/dist/katex.min.css";
import SearchModal from "@/components/SearchModal";

const markdownFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  // 键盘事件监听
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchVisible) {
        e.preventDefault();
        setIsSearchVisible(true);
      }
      if (e.key === 'Escape' && isSearchVisible) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchVisible]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const post: Post | undefined = posts.find((p) => p.id === Number(id));
  if (!post) {
    return (
      <div className="container mx-auto mt-10 pt-16">
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
      <div className="container mx-auto mt-10 pt-16">
        <h2 className="text-2xl font-bold text-sky-100">Content Not Found</h2>
      </div>
    );
  }

  return (
    <div className="flex items-start relative transition-all duration-300 ease-in-out">
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isMobile ? "" : isTocOpen ? "md:mr-[16rem]" : "md:mr-[3rem]"
        }`}
      >
        <div className="container mx-auto mt-10 p-6 bg-sky-100 rounded-lg shadow pt-16 w-3/4
          max-md:w-full max-md:mt-2 max-md:pt-20 max-md:px-3">
          <h1 className="text-3xl font-bold mb-4 text-sky-950">{post.title}</h1>
          <div className="text-sm text-sky-950 mb-4">
            {post.date} • {post.author}
          </div>
          <MarkdownContent content={markdownContent}>
            <div className="prose prose-sky max-w-full">
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkWrapSections]}
                rehypePlugins={[rehypeKatex, rehypeSlug]}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </MarkdownContent>
        </div>
      </div>

      <TableOfContents
        content={markdownContent}
        isOpen={isTocOpen}
        setIsOpen={setIsTocOpen}
        isMobile={isMobile}
      />
      {isSearchVisible && (
        <SearchModal
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onClose={() => {
            setIsSearchVisible(false);
            setSearchTerm('');
          }}
          posts={posts}
        />
      )}
    </div>
  );
};

export default PostDetails;