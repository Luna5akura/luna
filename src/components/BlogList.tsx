import React from 'react';
import BlogPost from './BlogPost';

const posts = [
  {
    title: '使用 React 构建高效的用户界面',
    date: '2023-10-01',
    excerpt: 'React 是一个用于构建用户界面的 JavaScript 库...',
    author: '张三',
  },
  {
    title: '深入了解 TypeScript',
    date: '2023-10-05',
    excerpt: 'TypeScript 是 JavaScript 的一个超集，它增加了可选的静态类型...',
    author: '李四',
  },
  // 可以添加更多的文章
];

const BlogList: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default BlogList;
