import { useCallback, useState } from 'react';
import { Post } from '@/types';
import { posts as generatedPosts } from '@/data/posts.generated';

const markdownFiles = import.meta.glob('../posts/**/*.md', {
  query: '?raw',
  import: 'default',
});

const LOAD_ALL_CONCURRENCY = 12;
const contentCache: Record<string, string> = {};
const contentLoadPromises = new Map<string, Promise<string>>();
let allContentsPromise: Promise<Record<string, string>> | null = null;
const hasCachedContent = (key: string) => Object.prototype.hasOwnProperty.call(contentCache, key);

const pathToKey = (path: string) => path.replace('../posts/', '').replace(/\.md$/, '');
const markdownPathByKey = Object.fromEntries(
  Object.keys(markdownFiles).map((path) => [pathToKey(path), path])
);
const generatedContentKeys = generatedPosts.map((post) => post.contentKey);
const allGeneratedContentCached = () => generatedContentKeys.every(hasCachedContent);

const getContentSnapshot = () => {
  const entries = generatedContentKeys
    .filter(hasCachedContent)
    .map((key) => [key, contentCache[key]] as const);

  return Object.fromEntries(entries);
};

const stripFrontmatter = (raw: string) => {
  if (!raw.startsWith('---')) return raw;

  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (!match) return raw;

  return raw.slice(match[0].length);
};

const loadContentFromKey = async (key: string): Promise<string> => {
  if (hasCachedContent(key)) return contentCache[key];
  const cachedPromise = contentLoadPromises.get(key);
  if (cachedPromise) return cachedPromise;

  const path = markdownPathByKey[key];
  const loader = markdownFiles[path];
  if (!loader) {
    throw new Error(`Markdown loader not found for ${key}`);
  }

  const loadPromise = (async () => {
    const raw = (await loader()) as string;
    const content = stripFrontmatter(raw);
    contentCache[key] = content;
    return content;
  })().finally(() => {
    contentLoadPromises.delete(key);
  });

  contentLoadPromises.set(key, loadPromise);
  return loadPromise;
};

const loadContentsWithLimit = async (keys: string[]) => {
  let nextIndex = 0;

  const workers = Array.from(
    { length: Math.min(LOAD_ALL_CONCURRENCY, keys.length) },
    async () => {
      while (nextIndex < keys.length) {
        const key = keys[nextIndex];
        nextIndex += 1;
        await loadContentFromKey(key);
      }
    }
  );

  await Promise.all(workers);
};

const loadAllContentsInternal = async () => {
  if (allContentsPromise) return allContentsPromise;

  allContentsPromise = (async () => {
    await loadContentsWithLimit(generatedContentKeys);
    return getContentSnapshot();
  })().catch((error) => {
    allContentsPromise = null;
    throw error;
  });

  return allContentsPromise;
};

export const usePosts = () => {
  const [contents, setContents] = useState<Record<string, string>>(() => getContentSnapshot());
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
    const content = await loadContentFromKey(contentKey);
    setContents((prev) => ({ ...prev, [contentKey]: content }));
    setContentsStatus(allGeneratedContentCached() ? 'ready' : 'idle');
    return content;
  }, []);

  const loadAllContents = useCallback(async () => {
    if (allGeneratedContentCached()) return getContentSnapshot();

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
