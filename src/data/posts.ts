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
    id:4,
    title: '[QC] Day 1 - Projective measure',
    date: '2024-12-10',
    excerpt: 'QC Day 1 - Projective measure: Exercise 2.58 - 2.61',
    contentKey: 'QC_1',
    author: 'Me',
    category: 'Quantum Computation',
  },
  {
    id:5,
    title: '[QC] Day 2 - Phase, Composite systems',
    date: '2024-12-10',
    excerpt: 'QC Day 2 - Phase Composite systems',
    contentKey: 'QC_2',
    author: 'Me',
    category: 'Quantum Computation',
  },
];
