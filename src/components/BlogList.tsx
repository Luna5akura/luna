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
const ListItem = ({ post }: { post: Post }) => {
    return (
        <motion.div variants={itemVariants} className="w-full mb-8">
            <Link
                to={`/posts/${post.contentKey}`}
                className="group relative block w-full cursor-pointer"
            >
                {/* 只有一条底线，悬停时变宽或变色 */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 group-hover:bg-cyan-400 group-hover:h-[2px] transition-all duration-300 ease-out" />
               
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between py-6 group-hover:pl-4 transition-all duration-500 ease-[0.22,1,0.36,1]">
                   
                    <div className="flex flex-col gap-2">
                        {/* 顶部元数据：极小字号，增加精密感 */}
                        <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                            <span>No.{post.id.toString().padStart(3, '0')}</span>
                            <span>— {post.category}</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 from-0% via-white via-50% to-white bg-[size:200%_100%] bg-[position:100%_0] group-hover:bg-[position:0%_0] cursor-hover transition-all duration-300 ease-in-out">
                            {post.title}
                        </h2>
                    </div>
                    {/* 日期：右对齐，单色风格 */}
                    <div className="mt-4 md:mt-0 text-right">
                         <span className="block text-4xl md:text-6xl font-thin text-white/10 group-hover:text-white/80 transition-colors duration-500 font-mono">
                            {post.date.split('-')[2]} {/* 只显示日期号，例如 '24' */}
                         </span>
                         <span className="text-xs font-mono text-gray-600 group-hover:text-cyan-500">
                            {post.date}
                         </span>
                    </div>
                </div>
                {/* 前卫特效：悬停时在背景出现巨大的淡入文字或条纹 */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none whitespace-nowrap overflow-hidden">
                    <span className="text-[100px] font-black italic text-white tracking-tighter translate-x-10 group-hover:translate-x-0 transition-transform duration-700">
                        |||||||||| &gt;&gt;&gt;
                    </span>
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