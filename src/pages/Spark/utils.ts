// src/pages/Spark/utils.ts
export const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;
export const randomInt = (min: number, max: number) => Math.floor(randomRange(min, max + 1));
export const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
export const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

export const FALLBACK_PHRASES: string[][] = [["絶", "対", "防", "衛"], ["虚", "無", "主", "義"],["感", "情", "解", "離"], ["世", "界", "崩", "壊"],["不", "可", "逆", "転"]];

export const DECOR_WORDS =[
  "SYSTEM_OVERRIDE", "LYRICS_DB_SYNC", "VOCAL_TRACK_ISOLATED", 
  "ANIME_OP_DETECTED", "ERROR_404", "REBOOT_SEQ", "TRACK_01_PLAY", "CRAWLING_DATA...",
  "WARNING_SIGN", "COMPLEX_GRAPHIC", "FATAL_ERROR", "SYNC_RATE_400%"
];

export const PALETTES =[
  { bg: '#050505', fg1: '#FFFFFF', fg2: '#222222', accent: '#FF003C' }, 
  { bg: '#EFEFEF', fg1: '#0F0F0F', fg2: '#CCCCCC', accent: '#0044FF' }, 
  { bg: '#0D1117', fg1: '#E94560', fg2: '#161B22', accent: '#00E5FF' }, 
  { bg: '#FACC15', fg1: '#000000', fg2: '#EAB308', accent: '#FFFFFF' }, 
  { bg: '#0000FF', fg1: '#FFFFFF', fg2: '#AAAAAA', accent: '#FFFF00' },
  { bg: '#000000', fg1: '#FACC15', fg2: '#FFFFFF', accent: '#00E5FF' },
  { bg: '#FFFF00', fg1: '#FF0080', fg2: '#000000', accent: '#FF0080' }, // 黄底红字
  { bg: '#FF0080', fg1: '#FFFF00', fg2: '#FFFFFF', accent: '#FFFF00' }, // 红底黄字
  { bg: '#FFFF00', fg1: '#FF0080', fg2: '#000000', accent: '#FF0080' }, // 黄底粉字
  { bg: '#FF0080', fg1: '#FFFF00', fg2: '#FFFFFF', accent: '#FFFF00' }, // 粉底黄字

  { bg: '#FF3385', fg1: '#FFE6F0', fg2: '#2A0826', accent: '#000000' }, // 玫红底 + 浅粉字
  { bg: '#FFE6F0', fg1: '#FF3385', fg2: '#000000', accent: '#2A0826' }, // 浅粉底 + 玫红字
  { bg: '#2A0826', fg1: '#FF3385', fg2: '#FFE6F0', accent: '#FFFFFF' }, // 深紫底 + 玫红字

  // ★ カサネテク (Kasaneteku) / Cyber Pop 专属配色
  { bg: '#38C1C1', fg1: '#FF33B5', fg2: '#FFFFFF', accent: '#000000' }, // 青底 + 粉字
  { bg: '#FF33B5', fg1: '#FFFFFF', fg2: '#38C1C1', accent: '#000000' }, // 粉底 + 白字
  { bg: '#000000', fg1: '#38C1C1', fg2: '#FF33B5', accent: '#FFFFFF' }, // 黑底 + 青字
];
export const POP_PALETTES =[
  { bg: '#0033FF', fg1: '#FFFFFF', fg2: '#000000', accent: '#FFCC00' }, // 高管蓝 + 明黄
  { bg: '#FFCC00', fg1: '#000000', fg2: '#FFFFFF', accent: '#0033FF' }, // 明黄 + 高管蓝
  { bg: '#E5E5E5', fg1: '#000000', fg2: '#AAAAAA', accent: '#FF0055' }, // 灰白透明网格风
];

export const EASE_OUT = "cubic-bezier(0.075, 0.82, 0.165, 1)";
export const EASE_IN = "cubic-bezier(0.895, 0.03, 0.685, 0.22)";

const ANIME_SONG_QUERIES =[
  "YOASOBI アイドル", "Ado 新時代", "LiSA 紅蓮華", "米津玄師 KICK BACK", 
  "King Gnu 途", "Eve 廻廻奇譚", "TK unravel", "高橋洋子 残酷な天使のテーゼ", 
  "RADWIMPS 前前前世", "Official髭男dism ミックスナッツ", "Aimer 残響散歌",
  "Vaundy CHAINSAW BLOOD", "女王蜂 メフィスト", "Creepy Nuts Bling-Bang-Bang-Born"
];

export const fetchDynamicLyrics = async (): Promise<{ songName: string, lines: string[][] }> => {
  try {
    const query = randomChoice(ANIME_SONG_QUERIES);
    const res = await fetch(`https://lrclib.net/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error("API Fetch Failed");
    const data = await res.json();
    if (data && data.length > 0 && data[0].plainLyrics) {
      const songName = `${data[0].artistName} - ${data[0].trackName}`;
      const validLines = data[0].plainLyrics.split('\n')
        .map((line: string) => line.trim())
        .filter((line: string) => line.length >= 3 && line.length <= 16 && !/^[a-zA-Z0-9\[\]]/.test(line))
        .map((line: string) => Array.from(line)); 
      if (validLines.length > 0) return { songName, lines: shuffle(validLines).slice(0, 8) };
    }
    throw new Error("No valid lyrics found");
  } catch (e) {
    console.error("Lyrics crawl error...", e);
    return { songName: "SYSTEM_FALLBACK", lines: FALLBACK_PHRASES };
  }
};