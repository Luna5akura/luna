import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, CornerDownLeft, FileText, Hash } from "lucide-react";
import { Post } from '@/types';
import { cn } from "@/lib/utils";

interface SearchModalProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onClose: () => void;
  posts: Post[];
  contents: Record<string, string>; // 新增：接收文章内容字典
}

// 定义搜索结果类型
interface SearchResult {
  post: Post;
  type: 'title' | 'content';
  excerpt: string; // 匹配到的片段
}

const SearchModal: React.FC<SearchModalProps> = ({
  searchTerm,
  onSearchTermChange,
  onClose,
  posts,
  contents
}) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // 核心逻辑：生成带高亮的摘要
  const getHighlightSnippet = (content: string, term: string): string => {
    if (!content || !term) return "";
    const lowerContent = content.toLowerCase();
    const lowerTerm = term.toLowerCase();
    const index = lowerContent.indexOf(lowerTerm);

    if (index === -1) return content.slice(0, 80) + "...";

    // 截取关键词前后约 40 个字符
    const start = Math.max(0, index - 40);
    const end = Math.min(content.length, index + term.length + 60);
    let snippet = content.slice(start, end);

    if (start > 0) snippet = "..." + snippet;
    if (end < content.length) snippet = snippet + "...";
    
    return snippet;
  };

  // 核心逻辑：过滤并排序结果
  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const results: SearchResult[] = [];
    const lowerTerm = searchTerm.toLowerCase();

    posts.forEach(post => {
      // 1. 检查标题
      if (post.title.toLowerCase().includes(lowerTerm)) {
        results.push({
          post,
          type: 'title',
          excerpt: post.excerpt || ''
        });
        return; // 如果标题匹配，优先显示标题匹配结果，不再检查内容（可选策略）
      }

      // 2. 检查内容
      const content = contents[post.contentKey];
      if (content && content.toLowerCase().includes(lowerTerm)) {
        results.push({
          post,
          type: 'content',
          excerpt: getHighlightSnippet(content, searchTerm)
        });
      }
    });

    return results;
  }, [searchTerm, posts, contents]);

  // 快捷键逻辑 (保持不变，只是适配了 filteredResults)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && filteredResults.length > 0) {
        e.preventDefault();
        if (e.shiftKey) {
            const newIndex = focusedIndex <= 0 ? filteredResults.length - 1 : focusedIndex - 1;
            setFocusedIndex(newIndex);
            resultRefs.current[newIndex]?.focus();
        } else {
            const newIndex = focusedIndex === filteredResults.length - 1 ? 0 : focusedIndex + 1;
            setFocusedIndex(newIndex);
            resultRefs.current[newIndex]?.focus();
        }
    }
    
    // 上下键支持 (优化体验)
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = (focusedIndex + 1) % filteredResults.length;
      setFocusedIndex(newIndex);
      resultRefs.current[newIndex]?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = (focusedIndex - 1 + filteredResults.length) % filteredResults.length;
      setFocusedIndex(newIndex);
      resultRefs.current[newIndex]?.focus();
    }

    if (e.key === 'Enter' && focusedIndex !== -1) {
       handlePostClick(filteredResults[focusedIndex].post);
    }
    if (e.key === 'Escape') onClose();
  };

  const handlePostClick = (post: Post) => {
    navigate(`/posts/${post.contentKey}`);
    onClose();
  };

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  useEffect(() => {
    setFocusedIndex(-1);
    resultRefs.current = resultRefs.current.slice(0, filteredResults.length);
  }, [searchTerm, filteredResults.length]);

  // 高亮显示文本组件
  const HighlightedText = ({ text, highlight }: { text: string, highlight: string }) => {
    if (!highlight.trim()) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-cyan-400 font-bold bg-cyan-950/30 px-1 rounded-sm">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-[#050505]/80 backdrop-blur-sm flex items-start justify-center pt-[10vh] z-[100] animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="
          w-full max-w-3xl mx-4
          bg-[#0a0a0a] 
          border border-white/20
          shadow-[0_0_50px_rgba(0,0,0,0.8)]
          flex flex-col
          max-h-[80vh]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部输入框 - 极简终端风格 */}
        <div className="flex items-center px-6 py-5 border-b border-white/10 bg-white/5">
          <Search className="w-5 h-5 text-gray-500 mr-4" />
          <input
            ref={inputRef}
            type="text"
            placeholder="QUERY_DATABASE..."
            className="w-full bg-transparent text-xl font-mono text-white placeholder:text-gray-700 focus:outline-none tracking-wider"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-gray-600">
            <span className="border border-white/10 px-1.5 py-0.5 rounded">ESC</span>
            <span>TO CLOSE</span>
          </div>
        </div>
        
        {/* 结果列表 */}
        <div className="overflow-y-auto p-2 custom-scrollbar bg-[#0a0a0a]">
          {filteredResults.length > 0 ? (
            <div className="space-y-1">
              {filteredResults.map((result, index) => (
                <div
                  key={`${result.post.id}-${result.type}`}
                  ref={(el) => (resultRefs.current[index] = el)}
                  tabIndex={0}
                  className={cn(
                    "group flex flex-col p-4 cursor-pointer transition-all duration-200 border border-transparent",
                    focusedIndex === index 
                      ? "bg-white/5 border-white/20" 
                      : "hover:bg-white/5 border-transparent"
                  )}
                  onClick={() => handlePostClick(result.post)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        {result.type === 'title' ? (
                            <Hash className={cn("w-4 h-4", focusedIndex === index ? "text-cyan-400" : "text-gray-600")} />
                        ) : (
                            <FileText className={cn("w-4 h-4", focusedIndex === index ? "text-cyan-400" : "text-gray-600")} />
                        )}
                        <span className={cn(
                            "font-bold tracking-tight text-lg transition-colors",
                            focusedIndex === index ? "text-white" : "text-gray-300"
                        )}>
                            <HighlightedText text={result.post.title} highlight={searchTerm} />
                        </span>
                    </div>
                    
                    {/* Enter 图标 */}
                    <CornerDownLeft className={cn(
                        "w-4 h-4 transition-opacity duration-300",
                        focusedIndex === index ? "opacity-100 text-cyan-400" : "opacity-0"
                    )} />
                  </div>

                  {/* 摘要/内容片段 */}
                  <div className="pl-7 text-xs font-mono text-gray-500 leading-relaxed line-clamp-2 break-all">
                     <span className="text-gray-700 select-none mr-2">
                        {result.type === 'title' ? '>> SUMMARY' : '>> MATCH_CONTEXT'}
                     </span>
                     <HighlightedText text={result.excerpt} highlight={searchTerm} />
                  </div>
                  
                  {/* 底部元数据 */}
                  <div className="pl-7 mt-2 flex items-center gap-4 text-[10px] font-mono text-gray-700 uppercase">
                     <span>ID: {result.post.id}</span>
                     <span>DATE: {result.post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            searchTerm && (
                <div className="py-20 flex flex-col items-center justify-center text-gray-600 font-mono">
                    <div className="text-4xl mb-4 opacity-20">NULL</div>
                    <p>NO RECORDS FOUND FOR "{searchTerm}"</p>
                </div>
            )
          )}
          
          {!searchTerm && (
            <div className="py-12 text-center text-gray-700 font-mono text-xs">
                _ WAITING_FOR_INPUT
            </div>
          )}
        </div>
        
        {/* 底部状态栏 */}
        <div className="px-4 py-2 bg-white/5 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>RESULTS: {filteredResults.length}</span>
            <span>SYSTEM: ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;