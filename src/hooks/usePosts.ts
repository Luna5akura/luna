import { useCallback, useState } from 'react';
import { Post } from '@/types';
import { posts as generatedPosts } from '@/data/posts.generated';

const markdownFiles = import.meta.glob('../posts/**/*.md', {
  query: '?raw',
  import: 'default',
});

const contentCache: Record<string, string> = {};
let cachedContentCount = 0;
let allContentsPromise: Promise<Record<string, string>> | null = null;
const hasCachedContent = (key: string) => Object.prototype.hasOwnProperty.call(contentCache, key);
const allGeneratedContentCached = () => cachedContentCount === generatedPosts.length;

const pathToKey = (path: string) => path.replace('../posts/', '').replace(/\.md$/, '');

const stripFrontmatter = (raw: string) => {
  if (!raw.startsWith('---')) return raw;

  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (!match) return raw;

  return raw.slice(match[0].length);
};

const loadContentFromPath = async (path: string): Promise<string> => {
  const key = pathToKey(path);
  if (hasCachedContent(key)) return contentCache[key];

  const loader = markdownFiles[path];
  if (!loader) {
    throw new Error(`Markdown loader not found for ${path}`);
  }

  const raw = (await loader()) as string;
  const content = stripFrontmatter(raw);
  contentCache[key] = content;
  cachedContentCount++;
  return content;
};

const loadAllContentsInternal = async () => {
  if (allContentsPromise) return allContentsPromise;

  allContentsPromise = (async () => {
    const entries = await Promise.all(
      Object.keys(markdownFiles).map(async (path) => {
        const content = await loadContentFromPath(path);
        return [pathToKey(path), content] as const;
      })
    );
    return Object.fromEntries(entries);
  })().catch((error) => {
    allContentsPromise = null;
    throw error;
  });

  return allContentsPromise;
};

export const usePosts = () => {
  const [contents, setContents] = useState<Record<string, string>>(contentCache);
  const [contentsStatus, setContentsStatus] = useState<'idle' | 'loading' | 'ready'>(
    allGeneratedContentCached() ? 'ready' : 'idle'
  );

  const loadContent = useCallback(async (contentKey: string) => {
    if (hasCachedContent(contentKey)) {
      setContents((prev) =>
        prev[contentKey] === contentCache[contentKey]
          ? prev
          : { ...prev, [contentKey]: contentCache[contentKey] }
      );
      return contentCache[contentKey];
    }

    setContentsStatus((prev) => (prev === 'ready' ? prev : 'loading'));
    const content = await loadContentFromPath(`../posts/${contentKey}.md`);
    setContents((prev) => ({ ...prev, [contentKey]: content }));
    setContentsStatus(allGeneratedContentCached() ? 'ready' : 'idle');
    return content;
  }, []);

  const loadAllContents = useCallback(async () => {
    if (allGeneratedContentCached()) return contentCache;

    setContentsStatus('loading');
    const loaded = await loadAllContentsInternal();
    setContents(loaded);
    setContentsStatus('ready');
    return loaded;
  }, []);

  return {
    posts: generatedPosts as Post[],
    contents,
    contentsStatus,
    loadContent,
    loadAllContents,
  };
};
