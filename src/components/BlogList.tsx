import React from 'react';
import { Post } from '@/types';
import BlogPost from '@/components/BlogPost';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {cn} from "@/lib/utils";

interface BlogListProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogList: React.FC<BlogListProps> = (
  {
    posts,
    currentPage,
    totalPages,
    onPageChange
  }) => {
  return (
    <div className="space-y-6">
      <div>
        {posts.map((post: Post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent className="gap-2"> {/* 添加间距 */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                className={cn(
                  "select-none",
                  "min-w-9 h-9",
                  "bg-sky-100 hover:bg-sky-200",
                  "text-sky-900",
                  "rounded-md",
                  "flex items-center justify-center",
                )}
              />
            </PaginationItem>


            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index + 1} className="list-none">
                <PaginationLink
                  onClick={() => onPageChange(index + 1)}
                  className={cn(
                    "select-none",
                    "min-w-9 h-9",
                    "bg-sky-100 hover:bg-sky-200",
                    "text-sky-900",
                    "rounded-md",
                    "flex items-center justify-center",
                    currentPage === index + 1 && "bg-sky-900 text-sky-100 hover:bg-sky-800"
                  )}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}


            <PaginationItem>
              <PaginationNext
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                className={cn(
                  "select-none",
                  "min-w-9 h-9",
                  "bg-sky-100 hover:bg-sky-200",
                  "text-sky-900",
                  "rounded-md",
                  "flex items-center justify-center",
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default BlogList;
