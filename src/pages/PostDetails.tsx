// /pages/PostDetails.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import TableOfContents from "@/components/TableOfContents";
import { MarkdownContent } from "@/components/MarkdownContent";
import { Post } from "@/types";
import remarkWrapSections from "@/utils/remarkWarpSections";
import "katex/dist/katex.min.css";
import SearchModal from "@/components/SearchModal";
import matter from "gray-matter"; // Add this import (install via: npm install gray-matter)

const markdownFiles = import.meta.glob("../posts/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Helper function to title-case a string
const toTitleCase = (str: string) => {
  return str.replace(/[-_]/g, " ").replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const PostDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Changed from 'id' to 'slug' for clarity; update your router accordingly (e.g., path="/post/:slug")
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Post[]>([]); // Dynamically generated posts
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [markdownContent, setMarkdownContent] = useState<string | undefined>(undefined);

  // Keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearchVisible) {
        e.preventDefault();
        setIsSearchVisible(true);
      }
      if (e.key === "Escape" && isSearchVisible) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearchVisible]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically load and parse all Markdown files
  useEffect(() => {
    const generatedPosts: Post[] = [];
    const contentModules: { [key: string]: string } = {};

    let nextId = 1; // Incremental ID starting from 1 (can adjust if needed)

    for (const path in markdownFiles) {
      const rawContent = markdownFiles[path] as string;
      const match = path.match(/\/posts\/(.*)\.md$/);
      if (match) {
        const key = match[1]; // e.g., 'subfolder/file' for nested files
        const { data, content } = matter(rawContent); // Parse frontmatter

        contentModules[key] = content;

        // Generate Post with frontmatter or defaults
        generatedPosts.push({
          id: nextId++, // Auto-increment ID; alternatively, use a hash if IDs need to be stable
          title: data.title || toTitleCase(key),
          date: data.date || new Date().toISOString().split("T")[0], // Default to current date if no frontmatter
          excerpt: data.excerpt || content.slice(0, 150) + "...", // Auto-generate excerpt if missing
          contentKey: key,
          author: data.author || "Anonymous",
          category: data.category || key.split("/")[0] || "Uncategorized", // Use first folder as category if nested
        });
      }
    }

    setPosts(generatedPosts.sort((a, b) => a.id - b.id)); // Sort by ID or adjust as needed (e.g., by date)
  }, []);

  // Find the specific post and content based on slug (which is contentKey)
  useEffect(() => {
    if (posts.length > 0 && slug) {
      const foundPost = posts.find((p) => p.contentKey === slug);
      if (foundPost) {
        setPost(foundPost);
        setMarkdownContent((markdownFiles[`../posts/${slug}.md`] as string) || undefined);
      }
    }
  }, [posts, slug]);

  if (!post || !markdownContent) {
    return (
      <div className="container mx-auto mt-10 pt-16">
        <h2 className="text-2xl font-bold text-sky-100">404 NOT FOUND</h2>
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
            setSearchTerm("");
          }}
          posts={posts} // Now using dynamically generated posts
        />
      )}
    </div>
  );
};

export default PostDetails;