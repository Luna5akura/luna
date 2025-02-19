import React, { useState } from "react";
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

const markdownFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isTocOpen, setIsTocOpen] = useState(false);

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
    // 添加 items-start，防止子元素在垂直方向被拉伸
    <div className="flex items-start relative transition-all duration-300 ease-in-out">
      {/* 正文区域，通过 margin-right 为目录预留空间 */}
      <div
        className="flex-1 transition-all duration-300 ease-in-out"
        style={{ marginRight: isTocOpen ? "16rem" : "3rem" }}
      >
        <div className="container mx-auto mt-10 p-6 bg-sky-100 rounded-lg shadow pt-16 w-3/4">
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

      {/* 目录区域 */}
      <TableOfContents
        content={markdownContent}
        isOpen={isTocOpen}
        setIsOpen={setIsTocOpen}
      />
    </div>
  );
};

export default PostDetails;