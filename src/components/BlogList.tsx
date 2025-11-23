import React, { useState } from 'react';
import { Post } from '@/types';
import { Link } from 'react-router-dom';
import { useScrambleText } from '@/hooks/useScrambleText';
import { motion, AnimatePresence } from 'framer-motion';
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

const ListItem = ({ post, onHover, onLeave }: { post: Post, onHover: () => void, onLeave: () => void }) => {
    const scrambledTitle = useScrambleText(post.title, 20, 0); 

    return (
        <Link 
            to={`/posts/${post.contentKey}`}
            className="block relative group cursor-hover border-b border-white/10 py-6 md:py-8"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between relative z-10 mix-blend-difference gap-2">
                <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-gray-600 group-hover:text-cyan-500 transition-colors">
                        #{post.id.toString().padStart(3, '0')}
                    </span>
                    <h2 className="text-xl md:text-3xl font-bold text-gray-300 group-hover:text-white transition-colors uppercase tracking-tight">
                        {scrambledTitle}
                    </h2>
                </div>
                <div className="flex items-center justify-between md:justify-end w-full md:w-auto mt-2 md:mt-0">
                     <span className="text-xs font-mono text-gray-600">{post.date}</span>
                     <span className="md:hidden text-xs text-cyan-500">OPEN</span>
                </div>
            </div>
            <div className="hidden md:block absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0" />
        </Link>
    )
}

const BlogList: React.FC<BlogListProps> = ({ posts, currentPage, totalPages, onPageChange }) => {
    const [activeImg, setActiveImg] = useState<string | null>(null);
    const getRandomImg = (id: number) => `https://picsum.photos/seed/${id}/800/600?grayscale`;

    // 核心逻辑：计算显示的页码
    const getVisiblePages = () => {
        const delta = 1; // 当前页前后显示的页数
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
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    return (
        <div className="relative w-full">
            <div className="relative z-10 mb-16 min-h-[50vh]">
                {posts.map((post) => (
                    <ListItem 
                        key={post.id} 
                        post={post} 
                        onHover={() => setActiveImg(getRandomImg(post.id))} 
                        onLeave={() => setActiveImg(null)}
                    />
                ))}
            </div>

            <div className="flex justify-center md:justify-start border-t border-white/10 pt-8">
                <Pagination>
                    <PaginationContent className="gap-2 font-mono text-sm">
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                                className={cn(
                                    "cursor-hover hover:bg-white hover:text-black border border-transparent hover:border-white transition-all duration-300",
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
                                                ? "bg-white text-black border-white"
                                                : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-white"
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
                                    "cursor-hover hover:bg-white hover:text-black border border-transparent hover:border-white transition-all duration-300",
                                    currentPage === totalPages && "pointer-events-none opacity-20"
                                )}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
                <AnimatePresence>
                    {activeImg && (
                        <motion.img
                            key={activeImg}
                            src={activeImg}
                            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            animate={{ opacity: 0.15, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                            transition={{ duration: 0.4 }}
                            className="absolute w-full h-full object-cover mix-blend-screen opacity-20"
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BlogList;