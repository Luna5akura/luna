import React from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  title: string;
  content: string;
}

const posts: Record<string, Post> = {
  '1': { title: '第一篇文章', content: '这是第一篇文章的内容。' },
  '2': { title: '第二篇文章', content: '这是第二篇文章的内容。' },
  // 可以添加更多文章
};

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts[id];

  if (!post) {
    return <div>文章未找到。</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
};

export default Post;
