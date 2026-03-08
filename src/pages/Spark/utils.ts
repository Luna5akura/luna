// src/pages/Spark/utils.ts

// 生成指定范围内的随机数
export const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;
// 生成指定范围内的随机整数
export const randomInt = (min: number, max: number) => Math.floor(randomRange(min, max + 1));
// 随机从数组中挑选一个
export const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
// 随机打乱数组
export const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

// 一些炫酷的随机文案库
export const BUZZWORDS =["SYSTEM", "VOID", "SYNTH", "FLUX", "NEURAL", "ECHO", "CYBER", "KINETIC", "OBLIVION", "NEXUS", "CORE", "ANOMALY"];