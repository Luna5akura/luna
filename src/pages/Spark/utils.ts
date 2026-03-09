// src/pages/Spark/utils.ts

export const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;
export const randomInt = (min: number, max: number) => Math.floor(randomRange(min, max + 1));
export const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
export const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

export const PHRASES: string[][] =[["絶", "対", "防", "衛"], ["虚", "無", "主", "義"],["異", "常", "事", "態"],
  ["感", "情", "解", "離"],["存", "在", "証", "明"], ["最", "終", "定", "理"],["世", "界", "崩", "壊"], ["不", "可", "逆", "転"],["神", "の", "遊", "戯"],["シ", "ス", "テ", "ム", "異", "常"]
];

export const DECOR_WORDS =[
  "SYSTEM_OVERRIDE", "NO_SIGNAL", "WARNING", "ERROR_404", 
  "REBOOT_SEQ", "UNKNOWN_DATA", "FATAL", "SYNC_LOST"
];

// AE 极具张力的缓动曲线
export const EASE_OUT = "cubic-bezier(0.075, 0.82, 0.165, 1)"; // 初速度极大，末速极小
export const EASE_IN = "cubic-bezier(0.895, 0.03, 0.685, 0.22)"; // 初速度极小，末速极大 (用于离开)