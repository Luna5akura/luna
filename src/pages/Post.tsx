
import React from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  title: string;
  content: string;
  image: string;
  date: string;
}

const posts: Record<string, Post> = {
  '1': {
    title: '第一篇文章',
    content:
      '这是第一篇文章的内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://source.unsplash.com/random/800x600',
    date: '2023-10-01',
  },
  '2': {
    title: '第二篇文章',
    content:
      '这是第二篇文章的内容。Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://source.unsplash.com/random/800x601',
    date: '2023-10-02',
  },
  // 可以添加更多文章
};

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts[id];

  if (!post) {
    return <div>文章未找到。</div>;
  }

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-400 text-sm mb-4">{post.date}</div>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded mb-8" />
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
    </article>
  );
};

export default Post;
