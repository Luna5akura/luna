// src/pages/PostDetails.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Terminal, CornerUpLeft, Activity, Cpu, Database } from 'lucide-react';

const ReadingTelemetry = () => {
  const { scrollYProgress } = useScroll();
  const hexProgress = useTransform(scrollYProgress, (val) => {
    const hex = Math.floor(val * 255).toString(16).toUpperCase().padStart(2, '0');
    return `0x${hex}`;
  });
  const template = useMotionTemplate`[READ_OFFSET: ${hexProgress}]`;
  return (
    <motion.div className="fixed top-8 right-8 z-50 text-[10px] font-mono text-gray-600 tracking-wider bg-[#ece9d8] border border-gray-400 px-2 py-1 hidden md:flex items-center gap-2 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]">
      <Activity className="w-3 h-3" />
      <motion.span>{template}</motion.span>
    </motion.div>
  );
};

const KernelPanic404 = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#c0c0c0] text-black font-mono p-8 md:p-16 flex flex-col items-start justify-center overflow-hidden relative selection:bg-black selection:text-white">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#00000005_0px,#00000005_2px,transparent_2px,transparent_8px)] pointer-events-none" />
      <motion.div 
        animate={{ opacity:[1, 0.8, 1, 0.5, 1] }} 
        transition={{ repeat: Infinity, duration: 0.2 }}
        className="bg-black text-white px-2 py-1 text-2xl font-bold mb-8"
      >
        FATAL ERROR
      </motion.div>
      <div className="text-xl md:text-3xl tracking-tight mb-4">
        A problem has been detected and LUNA OS has been shut down to prevent damage.
      </div>
      <div className="text-sm md:text-lg opacity-80 mb-8 max-w-4xl leading-relaxed">
        PAGE_FAULT_IN_NONPAGED_AREA<br/><br/>
        If this is the first time you've seen this stop error screen, restart your terminal. If this screen appears again, follow these steps:<br/><br/>
        Check to make sure any new hardware or software is properly installed.
      </div>
      <div className="text-sm opacity-60 mb-12 flex flex-col gap-1">
        <span>*** STOP: 0x00000050 (0xFFFFF80002A90000, 0x0000000000000000, 0xFFFFF80002A90000, 0x0000000000000000)</span>
        <span>*** sys_core_router.sys - Address 0xFFFFF80002A90000 base at 0xFFFFF80002A90000</span>
      </div>
      <button 
        onClick={() => navigate('/')}
        className="border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
      >
        <Terminal className="w-5 h-5" /> Reboot System
      </button>
    </div>
  );
};

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
  const metaData = useMemo(() => {
    if (!markdownContent) return { words: 0, time: 0, hexSize: '0x00' };
    const words = markdownContent.length;
    return {
      words,
      time: Math.max(1, Math.ceil(words / 400)),
      hexSize: `0x${(words * 2).toString(16).toUpperCase()}`
    };
  }, [markdownContent]);
  if (!post || !markdownContent) {
    return <KernelPanic404 />;
  }
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
      transition={{ duration: 0.3 }}
      className="relative min-h-screen w-full bg-[#ece9d8] text-black"
    >
      <ReadingTelemetry />
      <div className="pt-24 pb-32 px-6 max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <a 
            href="/" 
            onClick={handleReturn}
            className="group inline-flex items-center gap-2 font-mono text-xs text-gray-700 hover:text-black transition-colors cursor-default"
          >
            <div className="p-1.5 border border-gray-500 bg-[#c0c0c0] group-hover:bg-gray-300 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]">
               <CornerUpLeft className="w-3 h-3" />
            </div>
            <span className="tracking-wider uppercase relative">
              <span className="opacity-50 mr-2">cd</span>..
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </span>
          </a>
        </div>
        <h1 
          className="text-4xl md:text-5xl lg:text-7xl font-black mb-12 text-black uppercase tracking-tighter leading-[1.1]"
          style={{ viewTransitionName: `post-title-${post.id}` }}
        >
          {post.title}
        </h1>
        <div className="mb-16 border border-gray-500 bg-[#c0c0c0] p-6 font-mono text-[10px] md:text-xs text-gray-700 relative overflow-hidden shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-600 opacity-50" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 uppercase tracking-wider">
             <div className="flex flex-col gap-1.5">
               <span className="flex items-center gap-1.5 opacity-50"><Database className="w-3 h-3"/> SECTOR</span>
               <span className="text-black font-bold">{post.category}</span>
             </div>
             <div className="flex flex-col gap-1.5">
               <span className="flex items-center gap-1.5 opacity-50"><Cpu className="w-3 h-3"/> MEM ALLOC</span>
               <span className="text-black font-bold">{metaData.hexSize} BYTES</span>
             </div>
             <div className="flex flex-col gap-1.5">
               <span className="flex items-center gap-1.5 opacity-50"><Terminal className="w-3 h-3"/> TIMESTAMP</span>
               <span className="text-black font-bold">{post.date}</span>
             </div>
             <div className="flex flex-col gap-1.5">
               <span className="flex items-center gap-1.5 opacity-50"><Activity className="w-3 h-3"/> EST DECRYPT</span>
               <span className="text-black font-bold">{metaData.time} MIN CYCLES</span>
             </div>
          </div>
        </div>
        <motion.div 
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', filter: 'brightness(1.2) blur(2px)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', filter: 'brightness(1) blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <motion.div 
            initial={{ top: '0%', opacity: 1 }}
            animate={{ top: '100%', opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute left-0 w-full h-[2px] bg-gray-600 z-50 pointer-events-none"
          />
          <div className="
              prose prose-gray max-w-none
              prose-headings:font-bold prose-headings:tracking-tighter prose-headings:uppercase prose-headings:text-black
              prose-h1:text-gray-900 prose-h2:text-gray-800 prose-h3:text-gray-800
              prose-p:text-gray-700 prose-p:leading-[1.6] prose-p:font-sans
              prose-a:text-blue-800 prose-a:no-underline hover:prose-a:text-blue-600
              prose-pre:bg-[#f0f0f0] prose-pre:border prose-pre:border-gray-400 prose-pre:rounded-sm
              prose-blockquote:border-l-4 prose-blockquote:border-gray-500 prose-blockquote:bg-gray-200 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:text-gray-600 prose-blockquote:font-mono prose-blockquote:not-italic
              prose-img:border prose-img:border-gray-400
              prose-code:text-gray-800 prose-code:bg-gray-200 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              marker:text-gray-600
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