// src/pages/Spark/utils.ts

export const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;
export const randomInt = (min: number, max: number) => Math.floor(randomRange(min, max + 1));
export const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
export const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

// 原有保底词库（当断网或 API 失败时使用）
export const FALLBACK_PHRASES: string[][] = [["絶", "対", "防", "衛"], ["虚", "無", "主", "義"],["感", "情", "解", "離"], 
  ["世", "界", "崩", "壊"],["不", "可", "逆", "転"]
];

export const DECOR_WORDS =[
  "SYSTEM_OVERRIDE", "LYRICS_DB_SYNC", "VOCAL_TRACK_ISOLATED", 
  "ANIME_OP_DETECTED", "ERROR_404", "REBOOT_SEQ", "TRACK_01_PLAY", "CRAWLING_DATA..."
];

export const EFFECTS =[
  'PARTICLE', 'DROP_SCALE', 'GIANT_SLIDE', 'TRAIL', 
  'IMPACT_SHRINK', 'CIRCULAR_3D', 'FOUR_CORNER'
];

export const EASE_OUT = "cubic-bezier(0.075, 0.82, 0.165, 1)";
export const EASE_IN = "cubic-bezier(0.895, 0.03, 0.685, 0.22)";

// ================= 新增：真实歌词爬取逻辑 =================

// 热门动漫歌曲搜索池
const ANIME_SONG_QUERIES =[
  "YOASOBI アイドル", "Ado 新時代", "LiSA 紅蓮華", "米津玄師 KICK BACK", 
  "King Gnu 途", "Eve 廻廻奇譚", "TK unravel", "高橋洋子 残酷な天使のテーゼ", 
  "RADWIMPS 前前前世", "Official髭男dism ミックスナッツ", "Aimer 残響散歌",
  "Vaundy CHAINSAW BLOOD", "女王蜂 メフィスト", "Creepy Nuts Bling-Bang-Bang-Born"
];

// 异步拉取歌词
export const fetchDynamicLyrics = async (): Promise<{ songName: string, lines: string[][] }> => {
  try {
    const query = randomChoice(ANIME_SONG_QUERIES);
    // 使用开源免费的 lrclib API，支持 CORS 跨域
    const res = await fetch(`https://lrclib.net/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error("API Fetch Failed");
    
    const data = await res.json();
    if (data && data.length > 0 && data[0].plainLyrics) {
      const songName = `${data[0].artistName} - ${data[0].trackName}`;
      const lyricsText = data[0].plainLyrics;
      
      // 清洗歌词：按行分割 -> 去除首尾空格 -> 过滤掉太短/太长/包含英文括号的行
      const validLines = lyricsText.split('\n')
        .map((line: string) => line.trim())
        .filter((line: string) => line.length >= 3 && line.length <= 16 && !/^[a-zA-Z0-9\[\]]/.test(line))
        // 使用 Array.from 可以完美将日文、汉字甚至 Emoji 拆分成单字符数组，不会乱码
        .map((line: string) => Array.from(line)); 

      if (validLines.length > 0) {
        // 打乱后抽取 8 句作为当前弹药库
        return { songName, lines: shuffle(validLines).slice(0, 8) };
      }
    }
    throw new Error("No valid lyrics found");
  } catch (e) {
    console.error("Lyrics crawl error, using fallback...", e);
    return { songName: "SYSTEM_FALLBACK", lines: FALLBACK_PHRASES };
  }
};