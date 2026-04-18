import { useCallback, useEffect, useState } from 'react';
import { Post } from '@/types';
import { posts as generatedPosts } from '@/data/posts.generated';

const markdownFiles = import.meta.glob('../posts/**/*.md', {
  query: '?raw',
  import: 'default',
});

const contentCache: Record<string, string> = {};
let allContentsPromise: Promise<Record<string, string>> | null = null;

const pathToKey = (path: string) => path.replace('../posts/', '').replace(/\.md$/, '');

const stripFrontmatter = (raw: string) => {
  if (!raw.startsWith('---')) return raw;

  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (!match) return raw;

  return raw.slice(match[0].length);
};

const yieldToMainThread = async () => {
  if (typeof window === 'undefined') {
    await new Promise((resolve) => setTimeout(resolve, 0));
    return;
  }

  await new Promise<void>((resolve) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => resolve(), { timeout: 120 });
      return;
    }

    window.setTimeout(() => resolve(), 0);
  });
};

const loadContentFromPath = async (path: string): Promise<string> => {
  const key = pathToKey(path);
  if (contentCache[key]) return contentCache[key];

  const loader = markdownFiles[path];
  if (!loader) {
    throw new Error(`Markdown loader not found for ${path}`);
  }

  const raw = (await loader()) as string;
  const content = stripFrontmatter(raw);
  contentCache[key] = content;
  return content;
};

const loadAllContentsInternal = async () => {
  if (allContentsPromise) return allContentsPromise;

  allContentsPromise = (async () => {
    const entries: Array<readonly [string, string]> = [];
    const paths = Object.keys(markdownFiles);

    for (let index = 0; index < paths.length; index += 4) {
      const batch = paths.slice(index, index + 4);
      const loadedBatch = await Promise.all(
        batch.map(async (path) => {
          const content = await loadContentFromPath(path);
          return [pathToKey(path), content] as const;
        })
      );

      entries.push(...loadedBatch);

      if (index + 4 < paths.length) {
        await yieldToMainThread();
      }
    }

    return Object.fromEntries(entries);
  })().catch((error) => {
    allContentsPromise = null;
    throw error;
  });

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
      let cancelled = false;

      const startPreload = () => {
        if (!cancelled) {
          void loadAllContents();
        }
      };

      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        const idleId = window.requestIdleCallback(startPreload, { timeout: 1800 });
        return () => {
          cancelled = true;
          window.cancelIdleCallback?.(idleId);
        };
      }

      const timeoutId = window.setTimeout(startPreload, 1200);
      return () => {
        cancelled = true;
        window.clearTimeout(timeoutId);
      };
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
