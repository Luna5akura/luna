import React from 'react';
import {Button} from "@/components/ui/button";

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, excerpt, author }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="text-sm text-gray-500 mb-4">{date} • {author}</div>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <Button variant="default">阅读更多</Button>
    </div>
  );
};

export default BlogPost;
