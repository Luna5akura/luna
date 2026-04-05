// src/pages/PostDetails.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm'; // 【新增】GFM 表格支持
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import TableOfContents from '@/components/TableOfContents';
import { MarkdownContent } from '@/components/MarkdownContent';
import remarkWrapSections from '@/utils/remarkWarpSections';
import 'katex/dist/katex.min.css';
import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/types';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Terminal, CornerUpLeft, Activity, Cpu, Database } from 'lucide-react';

// ==========================================
// 【顶级炫技点 1：零重绘十六进制阅读进度遥测】
// 突破 60FPS，不触发 React 渲染，纯硬件级数字变动
// ==========================================
const ReadingTelemetry = () => {
  const { scrollYProgress } = useScroll();
  
  // 将 0~1 的浮点数，映射为 0~255 的整数，再转化为大写的十六进制 (00~FF)
  const hexProgress = useTransform(scrollYProgress, (val) => {
    const hex = Math.floor(val * 255).toString(16).toUpperCase().padStart(2, '0');
    return `0x${hex}`;
  });

  const template = useMotionTemplate`[READ_OFFSET: ${hexProgress}]`;

  return (
    <motion.div className="fixed top-8 right-8 z-50 text-[10px] font-mono text-cyan-500 tracking-widest bg-[#050505]/80 backdrop-blur-md border border-cyan-900/50 px-2 py-1 shadow-[0_0_10px_rgba(6,182,212,0.2)] hidden md:flex items-center gap-2 mix-blend-screen">
      <Activity className="w-3 h-3 animate-pulse" />
      <motion.span>{template}</motion.span>
    </motion.div>
  );
};

// ==========================================
// 【顶级炫技点 2：内核恐慌 404 引擎 (Kernel Panic)】
// ==========================================
const KernelPanic404 = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#aa0000] text-white font-mono p-8 md:p-16 flex flex-col items-start justify-center overflow-hidden relative selection:bg-white selection:text-[#aa0000]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay pointer-events-none" />
      
      <motion.div 
        animate={{ opacity:[1, 0.8, 1, 0.5, 1] }} 
        transition={{ repeat: Infinity, duration: 0.2 }}
        className="bg-white text-[#aa0000] px-2 py-1 text-2xl font-bold mb-8"
      >
        FATAL_ERROR
      </motion.div>
      
      <div className="text-xl md:text-3xl tracking-tight mb-4">
        A problem has been detected and LUNA_OS has been shut down to prevent damage to your consciousness.
      </div>
      
      <div className="text-sm md:text-lg opacity-80 mb-8 max-w-4xl leading-relaxed">
        PAGE_FAULT_IN_NONPAGED_AREA<br/><br/>
        If this is the first time you've seen this stop error screen, restart your terminal. If this screen appears again, follow these steps:<br/><br/>
        Check to make sure any new neural hardware or software is properly installed.
        If this is a new installation, ask your hardware manufacturer for any LUNA updates you might need.
      </div>

      <div className="text-sm opacity-60 mb-12 flex flex-col gap-1">
        <span>*** STOP: 0x00000050 (0xFFFFF80002A90000, 0x0000000000000000, 0xFFFFF80002A90000, 0x0000000000000000)</span>
        <span>*** sys_core_router.sys - Address 0xFFFFF80002A90000 base at 0xFFFFF80002A90000, DateStamp 64f1a2b3</span>
      </div>

      <button 
        onClick={() => navigate('/')}
        className="border-2 border-white px-6 py-2 hover:bg-white hover:text-[#aa0000] transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
      >
        <Terminal className="w-5 h-5" /> Reboot System
      </button>
    </div>
  );
};

// ==========================================
// 主组件：机密档案终端阅读器
// ==========================================
const PostDetails: React.FC = () => {
  const { '*' : slug } = useParams<{ '*': string }>();
  const navigate = useNavigate();
  const { posts, contents } = usePosts();
  
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [markdownContent, setMarkdownContent] = useState<string | undefined>(undefined);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const[isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  useEffect(() => {
    if (posts.length > 0 && slug) {
      const foundPost = posts.find((p) => p.contentKey === slug);
      if (foundPost) {
        setPost(foundPost);
        setMarkdownContent(contents[foundPost.contentKey]);
      }
    }
  }, [posts, contents, slug]);

  // 计算硬核元数据
  const metaData = useMemo(() => {
    if (!markdownContent) return { words: 0, time: 0, hexSize: '0x00' };
    const words = markdownContent.length;
    return {
      words,
      time: Math.max(1, Math.ceil(words / 400)), // 骇客阅读速度 400字/分
      hexSize: `0x${(words * 2).toString(16).toUpperCase()}` // 模拟字节大小
    };
  }, [markdownContent]);

  if (!post || !markdownContent) {
    // 若 1 秒后仍无数据，展示红屏内核恐慌
    return <KernelPanic404 />;
  }

  // 跨页返回拦截器 (View Transitions 护航)
  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => navigate('/'));
    } else {
      navigate('/');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-full bg-[#050505] text-slate-300"
    >
      <ReadingTelemetry />

      <div className="pt-24 pb-32 px-6 max-w-4xl mx-auto relative z-10">
        
        {/* ==========================================
            控制台指令返回键
            ========================================== */}
        <div className="mb-12">
          <a 
            href="/" 
            onClick={handleReturn}
            className="group inline-flex items-center gap-2 font-mono text-xs text-cyan-600 hover:text-cyan-300 transition-colors cursor-none"
          >
            <div className="p-1.5 border border-cyan-900/50 bg-cyan-950/20 group-hover:bg-cyan-500/20 transition-colors">
               <CornerUpLeft className="w-3 h-3" />
            </div>
            <span className="tracking-[0.2em] uppercase relative">
              <span className="opacity-50 mr-2">cd</span>..
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </span>
          </a>
        </div>

        {/* ==========================================
            【顶级炫技点 3：View Transitions 跨页物理锚点】
            与 BlogPost.tsx 严格对应的 viewTransitionName！
            ========================================== */}
        <h1 
          className="text-4xl md:text-5xl lg:text-7xl font-black mb-12 text-slate-100 uppercase tracking-tighter leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.15)]"
          style={{ viewTransitionName: `post-title-${post.id}` }} // ⚠️ 跨页面飞跃绝对核心
        >
          {post.title}
        </h1>

        {/* ==========================================
            战术级数据档案表头 (Tactical Metadata Header)
            ========================================== */}
        <div className="mb-16 border border-cyan-900/40 bg-[#0a0a0a]/80 backdrop-blur-md p-6 font-mono text-[10px] md:text-xs text-slate-400 relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-300 opacity-50" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 uppercase tracking-[0.15em]">
             <div className="flex flex-col gap-1.5">
               <span className="flex items-center gap-1.5 opacity-50"><Database className="w-3 h-3"/> SECTOR</span>
               <span className="text-cyan-300 font-bold">{post.category}</span>
             </div>
             <div className="flex flex-col gap-1.5">
               <span className="flex items-center gap-1.5 opacity-50"><Cpu className="w-3 h-3"/> MEM_ALLOC</span>
               <span className="text-cyan-300 font-bold">{metaData.hexSize} BYTES</span>
             </div>
             <div className="flex flex-col gap-1.5">
               <span className="flex items-center gap-1.5 opacity-50"><Terminal className="w-3 h-3"/> TIMESTAMP</span>
               <span className="text-cyan-300 font-bold">{post.date}</span>
             </div>
             <div className="flex flex-col gap-1.5">
               <span className="flex items-center gap-1.5 opacity-50"><Activity className="w-3 h-3"/> EST_DECRYPT</span>
               <span className="text-cyan-300 font-bold">{metaData.time} MIN_CYCLES</span>
             </div>
          </div>
        </div>

        {/* ==========================================
            【顶级炫技点 4：激光扫描数据清洗动画 (Scanline Reveal Wipe)】
            利用 clip-path 实现从上至下的科幻级展开
            ========================================== */}
        <motion.div 
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', filter: 'brightness(2) blur(10px)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', filter: 'brightness(1) blur(0px)' }}
          transition={{ duration: 1.2, ease:[0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative"
        >
          {/* 动画执行时的扫描高光线 */}
          <motion.div 
            initial={{ top: '0%', opacity: 1 }}
            animate={{ top: '100%', opacity: 0 }}
            transition={{ duration: 1.2, ease:[0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#06b6d4] z-50 pointer-events-none"
          />

          {/* 
            极致黑客风 Markdown 渲染核心层 
            利用 Tailwind Prose 配合我们在 MarkdownContent 里的重构，达到双剑合璧
          */}
          <div className="
              prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tighter prose-headings:uppercase
              prose-h1:text-cyan-50 prose-h2:text-cyan-100 prose-h3:text-cyan-200
              prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:font-sans
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
              prose-pre:bg-[#020617] prose-pre:border prose-pre:border-cyan-900/30 prose-pre:rounded-sm
              prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-cyan-950/20 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:text-slate-400 prose-blockquote:font-mono prose-blockquote:not-italic
              prose-img:rounded-sm prose-img:border prose-img:border-white/10 prose-img:grayscale-[50%] hover:prose-img:grayscale-0 prose-img:transition-all prose-img:duration-500
              prose-code:text-pink-400 prose-code:bg-pink-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              marker:text-cyan-500
          ">
              <MarkdownContent content={markdownContent}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath, remarkWrapSections]}  // ← remarkGfm 置于首位
                  rehypePlugins={[rehypeKatex, rehypeSlug]}
                >
                  {markdownContent}
                </ReactMarkdown>
              </MarkdownContent>
          </div>
        </motion.div>
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