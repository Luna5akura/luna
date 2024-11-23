import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { Post } from '../types';

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post: Post | undefined = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold">文章未找到</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        {post.date} • {post.author}
      </div>
      <div className="text-gray-700 leading-7">
        {post.content}
      </div>
    </div>
  );
};

export default PostDetails;
