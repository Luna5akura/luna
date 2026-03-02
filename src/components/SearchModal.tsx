// src/components/SearchModal.tsx
import React, { useEffect, useRef, useState, useMemo, useDeferredValue } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, CornerDownLeft, FileText, Hash } from "lucide-react";
import { Post } from '@/types';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

// ==========================================
// 【全局音频上下文环境声明】
// ==========================================
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
  score: number; // 引入打分机制
}

// ==========================================
// 【炫技点 1：纯代码合成系统音效引擎 (Web Audio API)】
// 无需外部 mp3 文件，利用正弦波极速合成赛博敲击声
// ==========================================
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
    // 短促、清脆的高频按键声
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.03);
    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
    osc.start();
    osc.stop(ctx.currentTime + 0.03);
  } else if (type === 'boot') {
    // 系统的滴答启动音
    osc.type = 'square';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.setValueAtTime(800, ctx.currentTime + 0.05);
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
  const[isExiting, setIsExiting] = useState(false); // 手动控制离场动画

  // ==========================================
  // 【炫技点 2：并发渲染分离 (React 18 Concurrent Mode)】
  // deferredTerm 会在主线程空闲时进行计算，确保键盘输入的绝对顺滑
  // ==========================================
  const deferredTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    // 强制获取焦点并播放启动音
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    try { playCyberSound('boot'); } catch (e) {}
    return () => { document.body.style.overflow = 'unset'; };
  },[]);

  // 生成带高亮的摘要
  const getHighlightSnippet = (content: string, term: string): string => {
    if (!content || !term) return "";
    const index = content.toLowerCase().indexOf(term.toLowerCase());
    if (index === -1) return content.slice(0, 80) + "...";
    
    const start = Math.max(0, index - 30);
    const end = Math.min(content.length, index + term.length + 50);
    return (start > 0 ? "..." : "") + content.slice(start, end) + (end < content.length ? "..." : "");
  };

  // ==========================================
  // 【炫技点 3：启发式相关性评分引擎 (Scoring Engine)】
  // 告别普通的过滤，引入 TF-IDF 思想的排序算法
  // ==========================================
  const searchResults = useMemo(() => {
    const term = deferredTerm.trim().toLowerCase();
    if (!term) return[];

    const results: SearchResult[] =[];

    posts.forEach(post => {
      let score = 0;
      let type: 'title' | 'content' = 'content';
      let excerpt = '';

      const titleLower = post.title.toLowerCase();
      const content = contents[post.contentKey] || '';
      const contentLower = content.toLowerCase();

      // 1. 标题匹配拥有极高权重，并增加位置惩罚（越靠前越匹配）
      const titleIndex = titleLower.indexOf(term);
      if (titleIndex !== -1) {
         score += 1000 - titleIndex; 
         type = 'title';
         excerpt = post.excerpt || getHighlightSnippet(content, term);
      }

      // 2. 正文匹配拥有次级权重
      const contentIndex = contentLower.indexOf(term);
      if (contentIndex !== -1) {
         score += 100 - (contentIndex * 0.01);
         if (type !== 'title') {
            type = 'content';
            excerpt = getHighlightSnippet(content, term);
         }
      }

      // 只有达到阈值才被视作有效结果
      if (score > 0) {
         results.push({ post, type, excerpt, score });
      }
    });

    // 依照分数从高到底进行绝对排序
    return results.sort((a, b) => b.score - a.score);
  }, [deferredTerm, posts, contents]);

  useEffect(() => {
    setFocusedIndex(-1);
    resultRefs.current = resultRefs.current.slice(0, searchResults.length);
  }, [searchResults.length]);

  // ==========================================
  // 【炫技点 4：事件拦截与自托管生命周期】
  // ==========================================
  const handleClose = () => {
    setIsExiting(true); // 触发 CRT 关机动画
    setTimeout(onClose, 300); // 严格匹配退出动画时长
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try { playCyberSound('keystroke'); } catch (e) {} // 注入机械打字音
    onSearchTermChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
      return;
    }

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

  // 正则级别的高亮分裂器
  const HighlightedText = ({ text, highlight }: { text: string, highlight: string }) => {
    if (!highlight.trim()) return <>{text}</>;
    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-cyan-400 font-bold bg-cyan-950/60 px-0.5 rounded shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  // CRT 屏幕通电动画矩阵
  const crtVariants = {
    initial: { scaleY: 0.005, scaleX: 0, opacity: 0 },
    animate: { 
      scaleY:[0.005, 0.005, 1], 
      scaleX: [0, 1, 1], 
      opacity: [1, 1, 1],
      transition: { duration: 0.4, times: [0, 0.4, 1], ease: "anticipate" } 
    },
    exit: { 
      scaleY: [1, 0.005, 0], 
      scaleX: [1, 1, 0], 
      opacity:[1, 1, 0],
      transition: { duration: 0.3, times:[0, 0.6, 1], ease: "easeInOut" } 
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md flex items-start justify-center pt-[15vh] z-[100]"
      onClick={handleClose}
    >
      <style>{`
        .terminal-scrollbar::-webkit-scrollbar { width: 4px; }
        .terminal-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .terminal-scrollbar::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.2); }
        .terminal-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34,211,238,0.8); }
        .scanlines-overlay {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
      `}</style>

      {/* 挂载动画触发器，受内部状态 isExiting 影响 */}
      <motion.div 
        initial="initial"
        animate={isExiting ? "exit" : "animate"}
        variants={crtVariants}
        className="w-full max-w-3xl mx-4 bg-[#0a0a0a]/90 border border-cyan-900/50 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col max-h-[70vh] relative overflow-hidden ring-1 ring-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 全局 CRT 扫描线蒙版 */}
        <div className="absolute inset-0 pointer-events-none scanlines-overlay opacity-30 z-50" />
        
        {/* CLI 头部命令栏 */}
        <div className="flex items-center px-6 py-5 border-b border-cyan-900/30 bg-cyan-950/10 relative z-40">
          <Terminal className="w-5 h-5 text-cyan-500 mr-4 animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            spellCheck={false}
            placeholder="EXECUTE_QUERY..."
            className="w-full bg-transparent text-xl font-mono text-cyan-50 placeholder:text-cyan-900/50 focus:outline-none tracking-widest caret-cyan-400"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-cyan-800">
            <span className="border border-cyan-900/50 px-1.5 py-0.5 rounded">ESC</span>
            <span>ABORT</span>
          </div>
        </div>

        {/* 判断并发渲染是否落后 (UI 进度滞后于输入进度) */}
        {searchTerm !== deferredTerm && (
           <div className="absolute top-16 left-0 w-full h-[1px] bg-cyan-500 animate-[pulse_0.5s_infinite] z-50" />
        )}
        
        {/* 数据流结果渲染区 */}
        <div className="overflow-y-auto p-2 terminal-scrollbar bg-transparent relative z-40">
          {searchResults.length > 0 ? (
            <div className="space-y-1">
              {searchResults.map((result, index) => (
                <div
                  key={`${result.post.id}-${result.type}`}
                  ref={(el) => (resultRefs.current[index] = el)}
                  className={cn(
                    "group flex flex-col p-4 cursor-pointer transition-all duration-200 border-l-2",
                    focusedIndex === index 
                      ? "bg-cyan-950/30 border-cyan-400 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]" 
                      : "border-transparent hover:bg-white/5"
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
                            <Hash className={cn("w-4 h-4", focusedIndex === index ? "text-cyan-400" : "text-slate-600")} />
                        ) : (
                            <FileText className={cn("w-4 h-4", focusedIndex === index ? "text-cyan-400" : "text-slate-600")} />
                        )}
                        <span className={cn(
                            "font-bold tracking-tight text-lg transition-colors font-serif",
                            focusedIndex === index ? "text-white" : "text-slate-300"
                        )}>
                            <HighlightedText text={result.post.title} highlight={deferredTerm} />
                        </span>
                    </div>
                    
                    <CornerDownLeft className={cn(
                        "w-4 h-4 transition-opacity duration-300",
                        focusedIndex === index ? "opacity-100 text-cyan-400" : "opacity-0"
                    )} />
                  </div>

                  <div className="pl-7 text-xs font-mono text-slate-500 leading-relaxed line-clamp-2 break-all">
                     <span className={cn("select-none mr-2", focusedIndex === index ? "text-cyan-600" : "text-slate-700")}>
                        {result.type === 'title' ? '>> DATA_DESC :' : '>> RAW_MATCH :'}
                     </span>
                     <HighlightedText text={result.excerpt} highlight={deferredTerm} />
                  </div>
                  
                  <div className="pl-7 mt-3 flex items-center gap-4 text-[9px] font-mono text-cyan-800 uppercase">
                     <span>SYS_ID: {result.post.id}</span>
                     <span>WEIGHT: {result.score.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            deferredTerm && (
                <div className="py-24 flex flex-col items-center justify-center text-cyan-900 font-mono">
                    <div className="text-4xl mb-4 opacity-50 relative">
                       NULL
                       <div className="absolute inset-0 bg-red-500/20 mix-blend-color animate-pulse" />
                    </div>
                    <p className="tracking-widest">ERR_0x00: NO_ALLOCATION_FOUND</p>
                </div>
            )
          )}
          
          {!searchTerm && (
            <div className="py-16 flex flex-col items-center justify-center text-cyan-900/60 font-mono text-xs">
                <span className="animate-pulse mb-2">_</span>
                AWAITING_KEYSTROKE_INPUT
            </div>
          )}
        </div>
        
        {/* 底部监控指标 (System Metrics) */}
        <div className="px-6 py-2 bg-cyan-950/20 border-t border-cyan-900/30 flex justify-between items-center text-[9px] font-mono text-cyan-700 relative z-40">
            <div className="flex items-center gap-4">
               <span>NODES_FOUND: {searchResults.length}</span>
               <span>RT_LATENCY: {searchTerm !== deferredTerm ? 'HIGH' : 'LOW'}</span>
            </div>
            <div className="flex items-center gap-2">
               <span>SYS.QUERY_ENGINE</span>
               <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]" />
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchModal;