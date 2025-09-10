// src/hooks/usePosts.ts
import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { Post } from '@/types';

const toTitleCase = (str: string) => {
  return str.replace(/[-_]/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const markdownFiles = import.meta.glob('../posts/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [contents, setContents] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const generatedPosts: Post[] = [];
    const newContents: { [key: string]: string } = {};
    let nextId = 1;

    for (const path in markdownFiles) {
      const rawContent = markdownFiles[path] as string;
      const match = path.match(/\/posts\/(.*)\.md$/);
      
      if (match) {
        const key = match[1]; // 例如: 'Misc/post1'
        const { data, content } = matter(rawContent);

        newContents[key] = content;

        generatedPosts.push({
          id: nextId++,
          title: data.title || toTitleCase(key.split('/').pop() || key),
          date: data.date || new Date().toISOString().split('T')[0],
          excerpt: data.excerpt || content.slice(0, 150) + '...',
          contentKey: key,
          author: data.author || 'Anonymous',
          category: data.category || key.split('/')[0] || 'Uncategorized',
        });
      }
    }

    // 调试输出
    console.log('Available content keys:', generatedPosts.map(p => p.contentKey));
    
    setPosts(generatedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    setContents(newContents);
  }, []);

  return { posts, contents };
};