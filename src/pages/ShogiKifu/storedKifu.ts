import type { StoredKifuFile } from "./types";

const STORED_KIFU_ROOT = "../data/shogi-kifu/";

const storedKifuModules = import.meta.glob<string>("../../data/shogi-kifu/**/*.{kif,json}", {
  query: "?raw",
  import: "default",
  eager: true,
});

const getStoredKifuTitle = (path: string): string =>
  path
    .replace(STORED_KIFU_ROOT, "")
    .replace("../../data/shogi-kifu/", "")
    .replace(/\.(kif|json)$/i, "")
    .split("/")
    .map((segment) => segment.replace(/[-_]/g, " "))
    .join(" / ");

export const STORED_KIFU_FILES: StoredKifuFile[] = Object.entries(storedKifuModules)
  .map(([path, content]) => ({
    path,
    title: getStoredKifuTitle(path),
    extension: path.toLowerCase().endsWith(".json") ? "json" : "kif",
    content,
  }))
  .sort((a, b) => a.title.localeCompare(b.title, "zh-Hans")) as StoredKifuFile[];
