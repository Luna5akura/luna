import React, { useState, useRef, useEffect } from 'react';
import { Post } from '@/types';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from 'framer-motion';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useScrambleText } from '@/hooks/useScrambleText';

// ==========================================
// 【炫技点 3：微重力磁性高阶组件】封装复用
// ==========================================
const MagneticWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 1024) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - (left + width / 2)) * 0.4); // 0.4 为吸附强度
    y.set((e.clientY - (top + height / 2)) * 0.4);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 【基础动画配置】
// ==========================================
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 60, damping: 15 }
  }
};

// ==========================================
// 【单个博客列表项】包含探照灯追踪、动态乱码等炫技
// ==========================================
interface ListItemProps {
  post: Post;
  setHoveredPost: (post: Post | null) => void;
}

const ListItem = ({ post, setHoveredPost }: ListItemProps) => {
  // 【炫技点 2：本地坐标探照灯引擎】
  const itemRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!itemRef.current) return;
    const { left, top } = itemRef.current.getBoundingClientRect();
    // 记录鼠标相对于当前 DOM 元素的坐标
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // 生成探照灯的 CSS Mask 模板
  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,1), transparent 80%)`;

  // 日期悬停乱码特效
  const isHoveredRef = useRef(false);
  const scrambledDate = useScrambleText(post.date, 15);

  return (
    <motion.div variants={itemVariants} className="w-full mb-4 relative" ref={itemRef} onMouseMove={handleMouseMove}>
      <Link
        to={`/posts/${post.contentKey}`}
        className="group relative block w-full cursor-none overflow-hidden rounded-lg border border-transparent transition-colors duration-500 hover:border-white/10"
        onMouseEnter={() => {
          isHoveredRef.current = true;
          setHoveredPost(post);
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          setHoveredPost(null);
        }}
      >
        {/* 【炫技点 2】探照灯遮罩层：只有鼠标附近区域的背景和边框会被照亮 */}
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        />

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 group-hover:bg-cyan-500 group-hover:h-[2px] transition-all duration-500 ease-out origin-left scale-x-100 lg:scale-x-0 group-hover:scale-x-100" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-8 px-4 lg:px-8 transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-4">
          
          <div className="flex flex-col gap-3 max-w-[80%]">
            <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                <span className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-cyan-400 rounded-full animate-pulse" />
                No.{post.id.toString().padStart(3, '0')}
              </span>
              <span>— {post.category}</span>
            </div>
            
            {/* 【炫技点 4：View Transitions 锚点注入】 */}
            {/* 通过动态 style 设置 viewTransitionName，点击后标题将无缝飞入详情页 */}
            <h2 
              className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 from-0% via-white via-50% to-white bg-[size:200%_100%] bg-[position:100%_0] group-hover:bg-[position:0%_0] transition-all duration-500 ease-in-out will-change-transform"
              style={{ viewTransitionName: `post-title-${post.id}` }} // ⚠️ 跨页面飞跃核心属性
            >
              {post.title}
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-left md:text-right flex flex-col items-start md:items-end">
            <span className="block text-5xl md:text-6xl font-black text-white/5 group-hover:text-white/40 transition-colors duration-500 font-mono tracking-tighter mix-blend-screen">
              {post.date.split('-')[2]}
            </span>
            <span className="text-xs font-mono text-gray-600 group-hover:text-cyan-400 transition-colors w-24 text-right">
              {isHoveredRef.current ? scrambledDate : post.date}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ==========================================
// 主组件 BlogList
// ==========================================
interface BlogListProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, currentPage, totalPages, onPageChange }) => {
  // 【炫技点 1：Awwwards 悬浮图片预留状态】
  const[hoveredPost, setHoveredPost] = useState<Post | null>(null);

  // 全局鼠标跟踪，用于控制跟随悬浮图的物理位置
  const globalMouseX = useMotionValue(0);
  const globalMouseY = useMotionValue(0);
  // 加入阻尼弹簧效果，让跟随具有“丝滑延迟感”
  const smoothX = useSpring(globalMouseX, { stiffness: 100, damping: 20, mass: 0.5 });
  const smoothY = useSpring(globalMouseY, { stiffness: 100, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // 只有在大屏幕设备才启用物理跟随
      if (window.innerWidth >= 1024) {
        globalMouseX.set(e.clientX);
        globalMouseY.set(e.clientY);
      }
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [globalMouseX, globalMouseY]);

  const getVisiblePages = () => {
    const delta = 1;
    const range =[];
    const rangeWithDots =[];
    let l;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }
    for (const i of range) {
      if (l) {
        if (i - l === 2) rangeWithDots.push(l + 1);
        else if (i - l !== 1) rangeWithDots.push('...');
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };

  return (
    <div className="relative w-full">
      {/* 【炫技点 1：全局悬浮游离态图片组件】(Awwwards 标配特效) */}
      <AnimatePresence>
        {hoveredPost && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed top-0 left-0 z-50 pointer-events-none hidden lg:block will-change-transform mix-blend-screen"
            style={{
              x: smoothX,
              y: smoothY,
              // -50% 让鼠标处于图片正中心
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <div className="relative w-[300px] h-[200px] overflow-hidden rounded-xl border border-white/20 shadow-[0_0_30px_rgba(6,182,212,0.3)] hidden">
               {/* 这里采用占位图演示，如果你的 Post 有封面图字段，直接替换这里的 src */}
               <img 
                 src={`https://picsum.photos/seed/${hoveredPost.id}/600/400`} 
                 alt="Preview" 
                 className="w-full h-full object-cover grayscale opacity-60 contrast-125"
               />
               <div className="absolute inset-0 bg-cyan-500 mix-blend-overlay opacity-50" />
               {/* CRT 扫描线 */}
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={currentPage}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mb-16 min-h-[50vh] border-t border-white/5 pt-4"
      >
        <div className="relative z-10 mb-16">
          {posts.map((post) => (
            <ListItem key={post.id} post={post} setHoveredPost={setHoveredPost} />
          ))}
        </div>

        {/* 分页区域 */}
        <div className="flex justify-center md:justify-start pt-8 border-t border-white/5">
          <Pagination>
            <PaginationContent className="gap-2 font-mono text-sm">
              <MagneticWrapper>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    className={cn(
                      "cursor-none hover:bg-white hover:text-black border border-transparent hover:border-white transition-all duration-300 text-gray-400 bg-[#0a0a0a]",
                      currentPage === 1 && "pointer-events-none opacity-20"
                    )}
                  />
                </PaginationItem>
              </MagneticWrapper>

              {getVisiblePages().map((page, index) => (
                <MagneticWrapper key={index}>
                  <PaginationItem>
                    {page === '...' ? (
                      <PaginationEllipsis className="text-gray-600" />
                    ) : (
                      <PaginationLink
                        onClick={() => onPageChange(page as number)}
                        isActive={currentPage === page}
                        className={cn(
                          "cursor-none w-10 h-10 rounded-md border transition-all duration-300 bg-[#0a0a0a]",
                          currentPage === page
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] font-bold scale-110" 
                            : "text-gray-500 border-white/10 hover:border-cyan-500 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                        )}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                </MagneticWrapper>
              ))}

              <MagneticWrapper>
                <PaginationItem>
                  <PaginationNext
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    className={cn(
                      "cursor-none hover:bg-white hover:text-black border border-transparent hover:border-white transition-all duration-300 text-gray-400 bg-[#0a0a0a]",
                      currentPage === totalPages && "pointer-events-none opacity-20"
                    )}
                  />
                </PaginationItem>
              </MagneticWrapper>
            </PaginationContent>
          </Pagination>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogList;