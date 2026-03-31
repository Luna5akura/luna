// src/components/SearchModal.tsx
import React, { useEffect, useRef, useState, useMemo, useDeferredValue } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, CornerDownLeft, FileText, Hash } from "lucide-react";
import { Post } from '@/types';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

declare global {
  interface Window {
    __audioCtx?: AudioContext;
    webkitAudioContext?: typeof AudioContext;
  }
}

interface SearchModalProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onClose: () => void;
  posts: Post[];
  contents: Record<string, string>;
}

interface SearchResult {
  post: Post;
  type: 'title' | 'content';
  excerpt: string;
  score: number;
}

const getAudioCtx = () => {
  if (typeof window === 'undefined') return null;
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!window.__audioCtx) window.__audioCtx = new AudioContext();
  return window.__audioCtx;
};

const playCyberSound = (type: 'boot' | 'keystroke') => {
  const ctx = getAudioCtx();
  if (!ctx || ctx.state === 'suspended') return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  if (type === 'keystroke') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.03);
    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
    osc.start();
    osc.stop(ctx.currentTime + 0.03);
  } else if (type === 'boot') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  }
};

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
  const [isExiting, setIsExiting] = useState(false);
  const deferredTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    try { playCyberSound('boot'); } catch (e) {}
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const searchIndex = useMemo(() => {
    return posts.map(post => {
      const content = contents[post.contentKey] || '';
      return {
        post,
        titleLower: post.title.toLowerCase(),
        contentLower: content.toLowerCase(),
        rawContent: content
      };
    });
  }, [posts, contents]);

  const getHighlightSnippet = (content: string, termLen: number, matchIndex: number): string => {
    if (matchIndex === -1) return content.slice(0, 80) + "...";
    const start = Math.max(0, matchIndex - 30);
    const end = Math.min(content.length, matchIndex + termLen + 50);
    return (start > 0 ? "..." : "") + content.slice(start, end) + (end < content.length ? "..." : "");
  };

  const searchResults = useMemo(() => {
    const term = deferredTerm.trim().toLowerCase();
    if (!term) return [];
    const termLen = term.length;
    const results: SearchResult[] = [];
    searchIndex.forEach(({ post, titleLower, contentLower, rawContent }) => {
      let score = 0;
      let type: 'title' | 'content' = 'content';
      let excerpt = '';
      const titleIndex = titleLower.indexOf(term);
      if (titleIndex !== -1) {
        score += 1000 - titleIndex;
        type = 'title';
        excerpt = post.excerpt || getHighlightSnippet(rawContent, termLen, contentLower.indexOf(term));
      }
      const contentIndex = contentLower.indexOf(term);
      if (contentIndex !== -1) {
        score += 100 - (contentIndex * 0.01);
        if (type !== 'title') {
          type = 'content';
          excerpt = getHighlightSnippet(rawContent, termLen, contentIndex);
        }
      }
      if (score > 0) results.push({ post, type, excerpt, score });
    });
    return results.sort((a, b) => b.score - a.score).slice(0, 15);
  }, [deferredTerm, searchIndex]);

  useEffect(() => {
    setFocusedIndex(-1);
    resultRefs.current = resultRefs.current.slice(0, searchResults.length);
  }, [searchResults.length]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try { playCyberSound('keystroke'); } catch (e) {}
    onSearchTermChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.preventDefault(); handleClose(); return; }
    if (searchResults.length > 0) {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        const next = (focusedIndex + 1) % searchResults.length;
        setFocusedIndex(next);
        resultRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        const prev = (focusedIndex - 1 + searchResults.length) % searchResults.length;
        setFocusedIndex(prev);
        resultRefs.current[prev]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      if (e.key === 'Enter' && focusedIndex !== -1) {
        e.preventDefault();
        try { playCyberSound('boot'); } catch (e) {}
        navigate(`/posts/${searchResults[focusedIndex].post.contentKey}`);
        handleClose();
      }
    }
  };

  const highlightRegex = useMemo(() => {
    if (!deferredTerm.trim()) return null;
    const escaped = deferredTerm.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(${escaped})`, 'gi');
  }, [deferredTerm]);

  const HighlightedText = ({ text }: { text: string }) => {
    if (!highlightRegex || !text) return <>{text}</>;
    const parts = text.split(highlightRegex);
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === deferredTerm.trim().toLowerCase() ? (
            <span key={i} className="bg-gray-300 font-bold px-0.5">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  const crtVariants = {
    initial: { scaleY: 0.01, scaleX: 0, opacity: 0 },
    animate: { scaleY: 1, scaleX: 1, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { scaleY: 0.01, scaleX: 0, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-start justify-center pt-[15vh] z-[100]"
      onClick={handleClose}
    >
      <style>{`
        .terminal-scrollbar::-webkit-scrollbar { width: 4px; }
        .terminal-scrollbar::-webkit-scrollbar-track { background: #c0c0c0; }
        .terminal-scrollbar::-webkit-scrollbar-thumb { background: #808080; }
        .terminal-scrollbar::-webkit-scrollbar-thumb:hover { background: #000000; }
      `}</style>

      <motion.div
        initial="initial"
        animate={isExiting ? "exit" : "animate"}
        variants={crtVariants}
        className="w-full max-w-3xl mx-4 bg-[#ece9d8] border-2 border-gray-600 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080] flex flex-col max-h-[70vh] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-6 py-4 border-b border-gray-400 bg-[#c0c0c0] relative z-40">
          <Terminal className="w-5 h-5 text-gray-700 mr-4" />
          <input
            ref={inputRef}
            type="text"
            spellCheck={false}
            placeholder="ENTER QUERY..."
            className="w-full bg-transparent text-xl font-mono text-black placeholder:text-gray-500 focus:outline-none tracking-wide caret-black"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-gray-600">
            <span className="border border-gray-500 px-1.5 py-0.5 rounded-sm bg-gray-200">ESC</span>
            <span>CANCEL</span>
          </div>
        </div>

        {searchTerm !== deferredTerm && (
          <div className="absolute top-16 left-0 w-full h-[1px] bg-gray-500 animate-pulse z-50" />
        )}

        <div className="overflow-y-auto p-2 terminal-scrollbar bg-[#ece9d8] relative z-40">
          {searchResults.length > 0 ? (
            <div className="space-y-1">
              {searchResults.map((result, index) => (
                <div
                  key={`${result.post.id}-${result.type}`}
                  ref={(el) => (resultRefs.current[index] = el)}
                  className={cn(
                    "group flex flex-col p-3 cursor-pointer transition-all duration-100 border-l-2",
                    focusedIndex === index
                      ? "bg-gray-200 border-gray-700"
                      : "border-transparent hover:bg-gray-100"
                  )}
                  onClick={() => {
                    navigate(`/posts/${result.post.contentKey}`);
                    handleClose();
                  }}
                  onMouseEnter={() => setFocusedIndex(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {result.type === 'title' ? (
                        <Hash className={cn("w-4 h-4", focusedIndex === index ? "text-black" : "text-gray-500")} />
                      ) : (
                        <FileText className={cn("w-4 h-4", focusedIndex === index ? "text-black" : "text-gray-500")} />
                      )}
                      <span className={cn(
                        "font-bold tracking-tight text-lg transition-colors font-serif",
                        focusedIndex === index ? "text-black" : "text-gray-700"
                      )}>
                        <HighlightedText text={result.post.title} />
                      </span>
                    </div>
                    <CornerDownLeft className={cn(
                      "w-4 h-4 transition-opacity duration-200",
                      focusedIndex === index ? "opacity-100 text-black" : "opacity-0"
                    )} />
                  </div>
                  <div className="pl-7 text-xs font-mono text-gray-600 leading-relaxed line-clamp-2 break-all">
                    <span className={cn("select-none mr-2", focusedIndex === index ? "text-gray-800" : "text-gray-400")}>
                      {result.type === 'title' ? '>> DESC :' : '>> MATCH :'}
                    </span>
                    <HighlightedText text={result.excerpt} />
                  </div>
                  <div className="pl-7 mt-2 flex items-center gap-4 text-[9px] font-mono text-gray-500 uppercase">
                    <span>ID: {result.post.id}</span>
                    <span>SCORE: {result.score.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            deferredTerm && (
              <div className="py-24 flex flex-col items-center justify-center text-gray-500 font-mono">
                <div className="text-4xl mb-4 opacity-50 relative">NULL</div>
                <p className="tracking-wider">ERR: NO RESULTS FOUND</p>
              </div>
            )
          )}
          {!searchTerm && (
            <div className="py-16 flex flex-col items-center justify-center text-gray-500 font-mono text-xs">
              <span className="animate-pulse mb-2">_</span>
              AWAITING INPUT
            </div>
          )}
        </div>

        <div className="px-6 py-2 bg-[#c0c0c0] border-t border-gray-400 flex justify-between items-center text-[9px] font-mono text-gray-700 relative z-40">
          <div className="flex items-center gap-4">
            <span>RESULTS: {searchResults.length}</span>
            <span>LATENCY: {searchTerm !== deferredTerm ? 'HIGH' : 'LOW'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>QUERY ENGINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchModal;