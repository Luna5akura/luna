import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const postsDir = path.join(projectRoot, 'src', 'posts');
const outputFile = path.join(projectRoot, 'src', 'data', 'posts.generated.ts');

const toTitleCase = (str) =>
  str
    .replace(/[-_]/g, ' ')
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

const normalizeDate = (value, fallbackDate) => {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === 'string' && value.trim()) {
    return value.trim();
  }

  return fallbackDate;
};

const buildExcerpt = (content) => {
  const compact = content.replace(/\s+/g, ' ').trim();
  if (!compact) return 'No excerpt available.';
  return compact.length > 150 ? `${compact.slice(0, 150)}...` : compact;
};

const walkMarkdownFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walkMarkdownFiles(fullPath);
      }

      return entry.isFile() && entry.name.endsWith('.md') ? [fullPath] : [];
    })
  );

  return files.flat();
};

const main = async () => {
  const markdownFiles = await walkMarkdownFiles(postsDir);
  const posts = await Promise.all(
    markdownFiles.map(async (filePath) => {
      const raw = await fs.readFile(filePath, 'utf8');
      const stats = await fs.stat(filePath);
      const { data, content } = matter(raw);
      const relativePath = path.relative(postsDir, filePath).replace(/\\/g, '/');
      const contentKey = relativePath.replace(/\.md$/, '');
      const pathParts = contentKey.split('/');
      const fallbackDate = stats.mtime.toISOString().slice(0, 10);

      return {
        title: data.title || toTitleCase(pathParts[pathParts.length - 1] || contentKey),
        date: normalizeDate(data.date, fallbackDate),
        excerpt: data.excerpt || buildExcerpt(content),
        contentKey,
        author: data.author || 'Anonymous',
        category: data.category || pathParts[0] || 'Uncategorized',
      };
    })
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const withIds = posts.map((post, index) => ({
    id: index + 1,
    ...post,
  }));

  const fileContents = `import { Post } from '@/types';

export const posts: Post[] = ${JSON.stringify(withIds, null, 2)};
`;

  await fs.writeFile(outputFile, fileContents, 'utf8');
  console.log(`Generated ${path.relative(projectRoot, outputFile)} with ${withIds.length} posts.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
