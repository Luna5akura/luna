// src/data/posts.ts
import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Test LATEX',
    date: '2023-10-01',
    excerpt: 'Test LATEX',
    contentKey: 'post1',
    author: 'Tester',
    category: 'test',
  },
  {
    id: 2,
    title: 'Test Post 2',
    date: '2023-10-01',
    excerpt: 'Test Post 2',
    contentKey: 'Test Post 2',
    author: 'Tester',
    category: 'test'
  },
  {
    id: 3,
    title: 'Test Post 3',
    date: '2023-10-01',
    excerpt: 'Test Post 3',
    contentKey: 'Test Post 3',
    author: 'Tester',
    category: 'test'
  },
];
