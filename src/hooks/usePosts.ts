import { useCallback, useEffect, useState } from 'react';
import matter from 'gray-matter';
import { Post } from '@/types';
import { posts as generatedPosts } from '@/data/posts.generated';

const markdownFiles = import.meta.glob('../posts/**/*.md', {
  query: '?raw',
  import: 'default',
});

const contentCache: Record<string, string> = {};
let allContentsPromise: Promise<Record<string, string>> | null = null;

const pathToKey = (path: string) => path.replace('../posts/', '').replace(/\.md$/, '');

const loadContentFromPath = async (path: string): Promise<string> => {
  const key = pathToKey(path);
  if (contentCache[key]) return contentCache[key];

  const loader = markdownFiles[path];
  if (!loader) {
    throw new Error(`Markdown loader not found for ${path}`);
  }

  const raw = (await loader()) as string;
  const { content } = matter(raw);
  contentCache[key] = content;
  return content;
};

const loadAllContentsInternal = async () => {
  if (allContentsPromise) return allContentsPromise;

  allContentsPromise = Promise.all(
    Object.keys(markdownFiles).map(async (path) => {
      const content = await loadContentFromPath(path);
      return [pathToKey(path), content] as const;
    })
  ).then((entries) => Object.fromEntries(entries));

  return allContentsPromise;
};

export const usePosts = ({ preloadContents = false }: { preloadContents?: boolean } = {}) => {
  const [contents, setContents] = useState<Record<string, string>>(contentCache);
  const [contentsStatus, setContentsStatus] = useState<'idle' | 'loading' | 'ready'>(
    Object.keys(contentCache).length > 0 ? 'ready' : 'idle'
  );

  const loadContent = useCallback(async (contentKey: string) => {
    if (contentCache[contentKey]) {
      setContents((prev) => (prev[contentKey] ? prev : { ...prev, [contentKey]: contentCache[contentKey] }));
      return contentCache[contentKey];
    }

    setContentsStatus((prev) => (prev === 'ready' ? prev : 'loading'));
    const content = await loadContentFromPath(`../posts/${contentKey}.md`);
    setContents((prev) => ({ ...prev, [contentKey]: content }));
    setContentsStatus(Object.keys(contentCache).length === generatedPosts.length ? 'ready' : 'idle');
    return content;
  }, []);

  const loadAllContents = useCallback(async () => {
    if (contentsStatus === 'ready') return contentCache;

    setContentsStatus('loading');
    const loaded = await loadAllContentsInternal();
    setContents(loaded);
    setContentsStatus('ready');
    return loaded;
  }, [contentsStatus]);

  useEffect(() => {
    if (preloadContents) {
      void loadAllContents();
    }
  }, [loadAllContents, preloadContents]);

  return {
    posts: generatedPosts as Post[],
    contents,
    contentsStatus,
    loadContent,
    loadAllContents,
  };
};
