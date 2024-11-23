import React from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: string;
  title: string;
  excerpt: string;
}

const posts: Post[] = [
  { id: '1', title: '第一篇文章', excerpt: '这是第一篇文章的摘要。' },
  { id: '2', title: '第二篇文章', excerpt: '这是第二篇文章的摘要。' },
  // 可以添加更多文章
];

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">博客首页</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link
              to={`/post/${post.id}`}
              className="text-2xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;