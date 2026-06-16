import type { HandKind, PieceKind, Player } from "./types";

export const ROOT_ID = "root";
export const PIECE_ORDER: PieceKind[] = ["K", "R", "B", "G", "S", "N", "L", "P"];
export const HAND_ORDER: HandKind[] = ["R", "B", "G", "S", "N", "L", "P"];
export const PROMOTABLE: PieceKind[] = ["R", "B", "S", "N", "L", "P"];
export const RANKS = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
export const FILES_FULL = ["９", "８", "７", "６", "５", "４", "３", "２", "１"];

export const PLAYER_META: Record<Player, { label: string; mark: string; tone: string }> = {
  sente: { label: "先手", mark: "▲", tone: "text-cyan-200" },
  gote: { label: "後手", mark: "△", tone: "text-rose-200" },
};

export const PIECE_LABELS: Record<PieceKind, string> = {
  K: "玉",
  R: "飛",
  B: "角",
  G: "金",
  S: "銀",
  N: "桂",
  L: "香",
  P: "歩",
};

export const PIECE_KIF_NAMES: Record<PieceKind, string> = {
  K: "玉",
  R: "飛",
  B: "角",
  G: "金",
  S: "銀",
  N: "桂",
  L: "香",
  P: "歩",
};

export const PROMOTED_LABELS: Partial<Record<PieceKind, string>> = {
  R: "龍",
  B: "馬",
  S: "全",
  N: "圭",
  L: "杏",
  P: "と",
};

export const PROMOTED_KIF_NAMES: Partial<Record<PieceKind, string>> = {
  R: "龍",
  B: "馬",
  S: "成銀",
  N: "成桂",
  L: "成香",
  P: "と",
};

export const KIF_PIECE_NAMES: Array<[string, PieceKind, boolean]> = [
  ["成銀", "S", true],
  ["成桂", "N", true],
  ["成香", "L", true],
  ["龍", "R", true],
  ["竜", "R", true],
  ["馬", "B", true],
  ["と", "P", true],
  ["玉", "K", false],
  ["王", "K", false],
  ["飛", "R", false],
  ["角", "B", false],
  ["金", "G", false],
  ["銀", "S", false],
  ["桂", "N", false],
  ["香", "L", false],
  ["歩", "P", false],
  ["步", "P", false],
];
