export interface SparkPalette {
  id: string;
  name: string;
  surface: string;
  surfaceAlt: string;
  ink: string;
  inkSoft: string;
  accent: string;
  accentSoft: string;
  glow: string;
}

export interface SparkScene {
  id: string;
  text: string;
  subline: string;
  cue: string;
  tokens: string[];
  emphasis: string;
  templateId: string;
  backgroundId: string;
  paletteId: string;
  durationMs: number;
}

export interface SampleIdea {
  id: string;
  label: string;
  text: string;
}

export type SparkRng = () => number;

export const DEFAULT_SCRIPT = [
  "请把今天的夜色借给我",
  "让我把沉默剪成发光的字幕",
  "再把心跳塞进失真的鼓点里",
  "直到整座城市都开始跟着你闪烁",
  "然后在最后一拍一起坠落",
].join("\n");

export const SAMPLE_IDEAS: SampleIdea[] = [
  {
    id: "rain",
    label: "雨夜告白",
    text: "雨停之前不要走\n让我把没说完的话写成一场霓虹色的失真\n如果你回头\n整条街都会一起亮起来",
  },
  {
    id: "machine",
    label: "机械恋爱",
    text: "系统提示你正在靠近我\n心跳频率异常升高\n请不要关机\n请继续把我留在你的视线里",
  },
  {
    id: "ending",
    label: "末日广播",
    text: "这是最后一段广播\n海平面正在吞掉城市\n可我还是想在信号消失前\n再念一次你的名字",
  },
  {
    id: "idol",
    label: "偶像开场",
    text: "灯光倒数三秒\n呼吸和鼓点同时抬升\n在万人尖叫抵达之前\n先让一个名字穿透黑暗",
  },
  {
    id: "dream",
    label: "梦境悬浮",
    text: "我在凌晨三点捡到一块蓝色月光\n它教我把孤独说得像一首歌\n于是整片天空都开始慢慢旋转",
  },
];

export const PALETTE_REGISTRY: SparkPalette[] = [
  {
    id: "world-failed",
    name: "World Failed",
    surface: "#131116",
    surfaceAlt: "#20181c",
    ink: "#f2ece6",
    inkSoft: "rgba(242,236,230,0.7)",
    accent: "#e11919",
    accentSoft: "rgba(225,25,25,0.24)",
    glow: "rgba(225,25,25,0.48)",
  },
  {
    id: "angel-acid",
    name: "Angel Acid",
    surface: "#f4f4ed",
    surfaceAlt: "#deff5a",
    ink: "#111111",
    inkSoft: "rgba(17,17,17,0.62)",
    accent: "#ff4cc7",
    accentSoft: "rgba(255,76,199,0.2)",
    glow: "rgba(255,76,199,0.34)",
  },
  {
    id: "diamond-hud",
    name: "Diamond HUD",
    surface: "#020202",
    surfaceAlt: "#0d0d0d",
    ink: "#ffffff",
    inkSoft: "rgba(255,255,255,0.68)",
    accent: "#7fe3ff",
    accentSoft: "rgba(127,227,255,0.18)",
    glow: "rgba(127,227,255,0.32)",
  },
  {
    id: "clock-noir",
    name: "Clock Noir",
    surface: "#040404",
    surfaceAlt: "#101010",
    ink: "#f6f6f1",
    inkSoft: "rgba(246,246,241,0.64)",
    accent: "#bdb6aa",
    accentSoft: "rgba(189,182,170,0.18)",
    glow: "rgba(189,182,170,0.28)",
  },
  {
    id: "code-void",
    name: "Code Void",
    surface: "#040507",
    surfaceAlt: "#0e1014",
    ink: "#f8f8f8",
    inkSoft: "rgba(248,248,248,0.6)",
    accent: "#7dff56",
    accentSoft: "rgba(125,255,86,0.18)",
    glow: "rgba(125,255,86,0.32)",
  },
  {
    id: "bauhaus-soft",
    name: "Bauhaus Soft",
    surface: "#f4efe8",
    surfaceAlt: "#ece4da",
    ink: "#101010",
    inkSoft: "rgba(16,16,16,0.58)",
    accent: "#ff6c3e",
    accentSoft: "rgba(255,108,62,0.18)",
    glow: "rgba(75,87,255,0.28)",
  },
  {
    id: "warp-pop",
    name: "Warp Pop",
    surface: "#fdf3fa",
    surfaceAlt: "#5f57ff",
    ink: "#131313",
    inkSoft: "rgba(19,19,19,0.62)",
    accent: "#f51cb7",
    accentSoft: "rgba(245,28,183,0.18)",
    glow: "rgba(42,240,255,0.32)",
  },
  {
    id: "crimson-kalligraphy",
    name: "Crimson Kalligraphy",
    surface: "#25080c",
    surfaceAlt: "#630d15",
    ink: "#fff4ef",
    inkSoft: "rgba(255,244,239,0.68)",
    accent: "#d5112b",
    accentSoft: "rgba(213,17,43,0.22)",
    glow: "rgba(213,17,43,0.42)",
  },
];

export const CUE_BANK = [
  "camera rise / bloom",
  "sub bass enters / frame split",
  "scanline drift / pulse sync",
  "type hits on beat / echo tail",
  "door opens / white flash",
  "noise lifts / skyline breathes",
  "strobe cut / hold 2 beats",
  "chorus tilt / crowd focus",
  "signal lock / orbit slow",
  "falling glass / low end drop",
];

export const SUBLINE_BANK = [
  "kinetic typography storyboard",
  "generated from your script",
  "designed for lyric video pacing",
  "modular frame / random template",
  "typography only, no raster assets",
  "layout reacts to line density",
  "scene-specific composition pass",
  "high contrast sequence control",
];

export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const mulberry32 = (seed: number): SparkRng => {
  let current = seed >>> 0;
  return () => {
    current += 0x6d2b79f5;
    let value = current;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
};

export const randomInt = (rng: SparkRng, min: number, max: number) =>
  Math.floor(rng() * (max - min + 1)) + min;

export const randomChoice = <T,>(rng: SparkRng, list: T[]): T =>
  list[Math.floor(rng() * list.length)];

export const pickUnique = <T,>(rng: SparkRng, list: T[], count: number): T[] => {
  if (count >= list.length) return [...list];
  const pool = [...list];
  const result: T[] = [];
  while (result.length < count && pool.length > 0) {
    result.push(pool.splice(Math.floor(rng() * pool.length), 1)[0]);
  }
  return result;
};

export const normalizeInputScript = (input: string) =>
  input
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const chunkCharacters = (text: string, size: number) => {
  const chars = Array.from(text);
  const chunks: string[] = [];
  for (let index = 0; index < chars.length; index += size) {
    chunks.push(chars.slice(index, index + size).join(""));
  }
  return chunks;
};

const splitLongLine = (line: string) => {
  const trimmed = line.trim();
  if (!trimmed) return [];

  if (trimmed.length <= 14) return [trimmed];

  if (/\s/.test(trimmed)) {
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length <= 3) return [trimmed];

    const chunks: string[] = [];
    let buffer = "";

    words.forEach((word) => {
      const next = buffer ? `${buffer} ${word}` : word;
      if (next.length > 14 && buffer) {
        chunks.push(buffer);
        buffer = word;
      } else {
        buffer = next;
      }
    });

    if (buffer) chunks.push(buffer);
    return chunks;
  }

  const size = trimmed.length >= 20 ? 6 : 4;
  return chunkCharacters(trimmed, size);
};

export const extractSceneLines = (input: string, desiredCount: number) => {
  const normalized = normalizeInputScript(input) || DEFAULT_SCRIPT;

  const rawSegments = normalized
    .split("\n")
    .flatMap((line) => line.split(/[。！？!?；;，,、/|]/))
    .map((segment) => segment.trim())
    .filter(Boolean);

  const expanded = rawSegments.flatMap(splitLongLine).filter(Boolean);
  const source = expanded.length > 0 ? expanded : DEFAULT_SCRIPT.split("\n");
  const result: string[] = [];

  while (result.length < desiredCount) {
    const next = source[result.length % source.length];
    result.push(next);
  }

  return result.slice(0, desiredCount);
};

export const splitWordsSmart = (line: string) => {
  const trimmed = line.trim();
  if (!trimmed) return ["VOID"];

  if (/\s/.test(trimmed)) {
    return trimmed.split(/\s+/).filter(Boolean);
  }

  const chars = Array.from(trimmed);
  if (chars.length <= 4) return chars;
  if (chars.length <= 8) return chunkCharacters(trimmed, 2);
  return chunkCharacters(trimmed, 3);
};

export const makeSceneId = (seed: number, index: number, text: string) =>
  `${seed}-${index}-${Array.from(text).slice(0, 4).join("")}`;

export const getEmphasisToken = (tokens: string[]) => {
  const sorted = [...tokens].sort((left, right) => right.length - left.length);
  return sorted[0] ?? tokens[0] ?? "SPARK";
};
