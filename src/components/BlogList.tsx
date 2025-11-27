// src/components/BlogList.tsx
import React from 'react';
import { Post } from '@/types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

interface BlogListProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 每个子元素间隔 0.1s 出现
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 50 }
  }
};

// 在 ListItem 组件内部
const ListItem = ({ post }: { post: Post }) => {
    // 我们需要知道 hover 状态传给 PulseText
    // 如果你还需要乱码效果作为初始展示，可以保留 useScrambleText
    // 但为了脉冲效果清晰，建议二选一，或者让 PulseText 只负责脉冲
    // 这里我们直接用原始 post.title，让 PulseText 负责动画
    
    return (
        <motion.div variants={itemVariants} className="w-full">
            <Link 
                to={`/posts/${post.contentKey}`}
                className="group relative block w-full cursor-hover overflow-hidden"
            >
                {/* 背景和装饰层保持不变... */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between py-6 md:py-8 px-4 md:px-6 border-b border-white/5 group-hover:border-white/20 transition-colors duration-300">
                    
                    <div className="flex items-baseline gap-6 overflow-hidden">
                        <span className="text-xs font-mono text-gray-700 group-hover:text-cyan-500 transition-colors duration-300">
                            #{post.id.toString().padStart(3, '0')}
                        </span>

                        <div className="relative transition-transform duration-300 group-hover:translate-x-2">
                            <h2 className="text-xl md:text-3xl font-bold uppercase tracking-tight text-gray-500 group-hover:text-cyan-500 transition-colors">
                                {/* 使用 PulseText 替代普通文本
                                <PulseText 
                                    text={post.title} 
                                    isHovered={isHovered}
                                    pulseWidth={5}   // 每次亮 2 个字符
                                    duration={800}   // 250ms 跑完全程，极速
                                    repeatDelay={100} // 跑完后几乎不停顿立即开始下一次
                                /> */}
                                {useScrambleText(post.title, 40)}
                            </h2>
                            
                            {/* 装饰文字 */}
                            <span className="absolute -bottom-4 left-0 text-[10px] text-cyan-500/70 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono">
                                :: READ_PACKET_DATA ::
                            </span>
                        </div>
                    </div>

                    {/* 右侧部分保持不变... */}
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors">
                            [{post.date}]
                        </span>
                        <div className="hidden md:flex items-center overflow-hidden w-0 group-hover:w-24 transition-all duration-300 justify-end">
                            <span className="text-xs font-mono text-cyan-500 whitespace-nowrap">
                                &lt;&lt; ACCESS
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
const BlogList: React.FC<BlogListProps> = ({ posts, currentPage, totalPages, onPageChange }) => {
    
    const getVisiblePages = () => {
        const delta = 1; 
        const range = [];
        const rangeWithDots = [];
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
            <motion.div 
                key={currentPage} 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="relative z-10 mb-16 min-h-[50vh] border-t border-white/10"
            >
                {/* 列表区域 */}
                <div className="relative z-10 mb-16 min-h-[50vh] border-t border-white/10">
                    {posts.map((post) => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </div>

                {/* 分页区域 */}
                <div className="flex justify-center md:justify-start pt-8">
                    <Pagination>
                        <PaginationContent className="gap-2 font-mono text-sm">
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                                    className={cn(
                                        "cursor-hover hover:bg-white hover:text-black border border-transparent hover:border-white transition-all duration-300 text-gray-400",
                                        currentPage === 1 && "pointer-events-none opacity-20"
                                    )}
                                />
                            </PaginationItem>

                            {getVisiblePages().map((page, index) => (
                                <PaginationItem key={index}>
                                    {page === '...' ? (
                                        <PaginationEllipsis className="text-gray-600" />
                                    ) : (
                                        <PaginationLink
                                            onClick={() => onPageChange(page as number)}
                                            isActive={currentPage === page}
                                            className={cn(
                                                "cursor-hover w-8 h-8 rounded-none border transition-all duration-300",
                                                currentPage === page
                                                    ? "bg-cyan-500 text-black border-cyan-500 font-bold" // 选中态也改为青色系以匹配整体
                                                    : "bg-transparent text-gray-500 border-white/10 hover:border-cyan-500 hover:text-cyan-950 hover:bg-cyan-500"
                                            )}
                                        >
                                            {page}
                                        </PaginationLink>
                                    )}
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                                    className={cn(
                                        "cursor-hover hover:bg-white hover:text-black border border-transparent hover:border-white transition-all duration-300 text-gray-400",
                                        currentPage === totalPages && "pointer-events-none opacity-20"
                                    )}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </motion.div>
        </div>
    );
};

export default BlogList;