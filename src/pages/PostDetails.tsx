// src/pages/PostDetails.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
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
    <div className="relative flex min-h-screen items-start justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(3,11,15,1),rgba(2,6,10,1))] p-8 font-mono text-white selection:bg-cyan-300/30 selection:text-cyan-50 md:p-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMTAzLDIzMiwyNDksMC4xKSIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_0_28%),radial-gradient(circle_at_84%_18%,rgba(20,184,166,0.08),transparent_0_22%)] pointer-events-none" />
      
      <motion.div 
        animate={{ opacity:[1, 0.8, 1, 0.5, 1] }} 
        transition={{ repeat: Infinity, duration: 0.2 }}
        className="mb-8 border border-cyan-300/40 bg-cyan-100 text-[#031015] px-2 py-1 text-2xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.18)]"
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

      <div className="mb-12 flex flex-col gap-1 text-sm text-cyan-100/60">
        <span>*** STOP: 0x00000050 (0xFFFFF80002A90000, 0x0000000000000000, 0xFFFFF80002A90000, 0x0000000000000000)</span>
        <span>*** sys_core_router.sys - Address 0xFFFFF80002A90000 base at 0xFFFFF80002A90000, DateStamp 64f1a2b3</span>
      </div>

      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 border-2 border-cyan-300 px-6 py-2 font-bold uppercase tracking-widest text-cyan-100 transition-colors hover:bg-cyan-100 hover:text-[#031015]"
      >
        <Terminal className="w-5 h-5" /> Reboot System
      </button>
    </div>
  );
};

const LoadingArticle = () => (
  <div className="min-h-screen bg-[#050505] px-6 py-24 text-slate-300">
    <div className="mx-auto max-w-4xl border border-cyan-900/40 bg-[#060a12]/85 p-8 font-mono shadow-[0_0_40px_rgba(0,0,0,0.45)]">
      <div className="mb-4 text-[10px] uppercase tracking-[0.32em] text-cyan-600">Archive Link Established</div>
      <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Streaming markdown payload...</div>
      <div className="mt-6 h-px w-full overflow-hidden bg-cyan-950/60">
        <div className="h-full w-1/3 animate-[pulse_1s_linear_infinite] bg-cyan-400/80" />
      </div>
    </div>
  </div>
);

// ==========================================
// 主组件：机密档案终端阅读器
// ==========================================
const PostDetails: React.FC = () => {
  const { '*' : slug } = useParams<{ '*': string }>();
  const navigate = useNavigate();
  const { posts, loadContent } = usePosts();
  
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [markdownContent, setMarkdownContent] = useState<string | undefined>(undefined);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const[isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      if (!slug || posts.length === 0) {
        if (isMounted) setIsLoading(false);
        return;
      }

      const foundPost = posts.find((p) => p.contentKey === slug);
      if (!foundPost) {
        if (isMounted) {
          setPost(undefined);
          setMarkdownContent(undefined);
          setIsLoading(false);
        }
        return;
      }

      if (isMounted) {
        setPost(foundPost);
        setIsLoading(true);
      }

      try {
        const content = await loadContent(foundPost.contentKey);
        if (isMounted) {
          setMarkdownContent(content);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadPost();

    return () => {
      isMounted = false;
    };
  }, [posts, slug, loadContent]);

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

  if (isLoading) {
    return <LoadingArticle />;
  }

  if (!post || !markdownContent) {
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_0_26%),radial-gradient(circle_at_82%_14%,rgba(20,184,166,0.07),transparent_0_24%),linear-gradient(180deg,rgba(3,11,15,1),rgba(2,6,10,1))]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)', backgroundSize: '96px 96px' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-24">
        
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

        <div className="relative mb-16 overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,24,0.86),rgba(4,8,16,0.58))] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl md:px-8 md:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_0_32%)]" />
          <div className="pointer-events-none absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.34em] text-cyan-700">
              <span>Archive Entry</span>
              <span className="text-slate-500">Sector / {post.category}</span>
            </div>

            <h1 
              className="mb-8 max-w-4xl text-4xl font-black uppercase leading-[1.02] tracking-[-0.05em] text-slate-100 drop-shadow-[0_0_15px_rgba(34,211,238,0.12)] md:text-6xl lg:text-7xl"
              style={{ viewTransitionName: `post-title-${post.id}` }}
            >
              {post.title}
            </h1>

            <p className="mb-10 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
              Structured as a reading terminal, treated like a publication. The chrome stays cybernetic, but the typography and spacing should let the content feel carefully edited instead of merely decorated.
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 md:grid-cols-5">
               <div className="border border-white/5 bg-black/20 p-4">
                 <span className="mb-2 flex items-center gap-1.5 opacity-50"><Database className="w-3 h-3"/> Sector</span>
                 <span className="text-cyan-300 font-bold">{post.category}</span>
               </div>
               <div className="border border-white/5 bg-black/20 p-4">
                 <span className="mb-2 flex items-center gap-1.5 opacity-50"><Cpu className="w-3 h-3"/> Mem_Alloc</span>
                 <span className="text-cyan-300 font-bold">{metaData.hexSize}</span>
               </div>
               <div className="border border-white/5 bg-black/20 p-4">
                 <span className="mb-2 flex items-center gap-1.5 opacity-50"><Terminal className="w-3 h-3"/> Timestamp</span>
                 <span className="text-cyan-300 font-bold">{post.date}</span>
               </div>
               <div className="border border-white/5 bg-black/20 p-4">
                 <span className="mb-2 flex items-center gap-1.5 opacity-50"><Activity className="w-3 h-3"/> Est_Read</span>
                 <span className="text-cyan-300 font-bold">{metaData.time} min</span>
               </div>
               <div className="border border-white/5 bg-black/20 p-4">
                 <span className="mb-2 flex items-center gap-1.5 opacity-50"><Database className="w-3 h-3"/> Author</span>
                 <span className="text-cyan-300 font-bold">{post.author}</span>
               </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', filter: 'brightness(2) blur(10px)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', filter: 'brightness(1) blur(0px)' }}
          transition={{ duration: 1.2, ease:[0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(5,8,15,0.9),rgba(4,7,13,0.72))] px-5 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-8 md:py-10"
        >
          <motion.div 
            initial={{ top: '0%', opacity: 1 }}
            animate={{ top: '100%', opacity: 0 }}
            transition={{ duration: 1.2, ease:[0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#06b6d4] z-50 pointer-events-none"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-cyan-500/8 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

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
                  remarkPlugins={[remarkGfm, remarkMath, remarkWrapSections]}
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
