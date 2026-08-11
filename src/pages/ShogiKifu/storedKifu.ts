import type { StoredKifuFile } from "./types";

const storedKifuModules = import.meta.glob<string>("../../data/shogi-kifu/**/*.{kif,json}", {
  query: "?raw",
  import: "default",
  eager: true,
});

const getStoredKifuTitle = (path: string): string => {
  const relativePath = path.split("shogi-kifu/").pop() ?? path;
  return relativePath
    .replace(/\.(kif|json)$/i, "")
    .split("/")
    .map((segment) => segment.replace(/[-_]/g, " "))
    .join(" / ");
};

const getHeaderValue = (content: string, key: string): string | undefined =>
  content.match(new RegExp(`^${key}：(.+)$`, "m"))?.[1]?.trim();

export const STORED_KIFU_FILES: StoredKifuFile[] = Object.entries(storedKifuModules)
  .map(([path, content]) => {
    const isKif = path.toLowerCase().endsWith(".kif");
    const title = isKif
      ? getHeaderValue(content, "作品名") ?? getHeaderValue(content, "作品番号") ?? getStoredKifuTitle(path)
      : getStoredKifuTitle(path);
    const moveCount = Number(getHeaderValue(content, "手数"));

    return {
      path,
      title,
      extension: isKif ? "kif" : "json",
      content,
      category: getHeaderValue(content, "分类") || getHeaderValue(content, "分類") || getHeaderValue(content, "備考")?.split("★")[0].trim() || (isKif ? "棋谱" : "项目"),
      author: getHeaderValue(content, "作者"),
      moveCount: Number.isFinite(moveCount) && moveCount > 0 ? moveCount : undefined,
      description: getHeaderValue(content, "発表誌") ?? getHeaderValue(content, "出典"),
      interest: getHeaderValue(content, "解説"),
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title, "zh-Hans")) as StoredKifuFile[];
