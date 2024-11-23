
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Card from '../components/ui/card';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: '第一篇文章',
    excerpt: '这是第一篇文章的摘要。',
    image: 'https://source.unsplash.com/random/800x600',
    date: '2023-10-01',
  },
  {
    id: '2',
    title: '第二篇文章',
    excerpt: '这是第二篇文章的摘要。',
    image: 'https://source.unsplash.com/random/800x601',
    date: '2023-10-02',
  },
  // 可以添加更多文章
];

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">最新文章</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link to={`/post/${post.id}`} className="hover:text-blue-500">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{post.date}</span>
                <Button variant="primary" size="sm">
                  <Link to={`/post/${post.id}`}>阅读更多</Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
