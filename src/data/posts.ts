// src/data/posts.ts
import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 1,
    title: '使用 React 构建高效的用户界面',
    date: '2023-10-01',
    excerpt: 'React 是一个用于构建用户界面的 JavaScript 库...',
    content: '这是完整的文章内容。这篇文章详细介绍了如何使用 React 来构建高效的用户界面。',
    author: '张三',
  },
  {
    id: 2,
    title: '深入了解 TypeScript',
    date: '2023-10-05',
    excerpt: 'TypeScript 是 JavaScript 的一个超集...',
    content: '这是完整的文章内容。这篇文章深入介绍了 TypeScript 的特性和用法。',
    author: '李四',
  },
  // 可以添加更多文章
];
