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
    category: 'Test',
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
  {
    id:6,
    title: '[CD] Day 1 - Japanese sentence structure',
    date: '2024-12-11',
    excerpt: 'CD Day 1 - Japanese sentence structure, yoroshiku, wo/ni/no, verb conjugation, teiru/tearu',
    contentKey: 'CD_1',
    author: '私',
    category: 'Cure Dolly',
  },
  {
    id:7,
    title: '[CD] Day 2 - Adjective',
    date: '2024-12-11',
    excerpt: 'CD Day 2 - i/na adjectives, da/desu, noni, ender',
    contentKey: 'CD_2',
    author: '私',
    category: 'Cure Dolly',
  },
  {
    id:8,
    title: '[CD] Day 3 - mo',
    date: '2024-12-12',
    excerpt: 'CD Day 2 - mo, negative, adjective conjugation, transitive/intransitive',
    contentKey: 'CD_3',
    author: '私',
    category: 'Cure Dolly',
  },
];
