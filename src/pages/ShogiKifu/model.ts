import {
  FILES_FULL,
  PIECE_KIF_NAMES,
  PIECE_LABELS,
  PROMOTABLE,
  PROMOTED_KIF_NAMES,
  PROMOTED_LABELS,
  RANKS,
  ROOT_ID,
} from "./constants";
import type { Board, Hands, KifuNode, PieceKind, Player, ShogiPiece } from "./types";

export const makePiece = (
  kind: PieceKind,
  owner: Player,
  promoted = false,
  suffix = Math.random().toString(36).slice(2),
): ShogiPiece => ({
  id: `${owner}-${kind}-${suffix}`,
  kind,
  owner,
  promoted: promoted && PROMOTABLE.includes(kind),
});

export const createEmptyBoard = (): Board => Array.from({ length: 81 }, () => null);

export const createEmptyHands = (): Hands => ({
  sente: { R: 0, B: 0, G: 0, S: 0, N: 0, L: 0, P: 0 },
  gote: { R: 0, B: 0, G: 0, S: 0, N: 0, L: 0, P: 0 },
});

export const cloneBoard = (board: Board): Board =>
  board.map((piece) => (piece ? { ...piece } : null));

export const cloneHands = (hands: Hands): Hands => ({
  sente: { ...hands.sente },
  gote: { ...hands.gote },
});

export const createInitialBoard = (): Board => {
  const board = createEmptyBoard();
  const backRank: PieceKind[] = ["L", "N", "S", "G", "K", "G", "S", "N", "L"];

  backRank.forEach((kind, column) => {
    board[column] = makePiece(kind, "gote", false, `a${column}`);
    board[72 + column] = makePiece(kind, "sente", false, `i${column}`);
  });

  board[10] = makePiece("R", "gote", false, "b-rook");
  board[16] = makePiece("B", "gote", false, "b-bishop");
  board[64] = makePiece("B", "sente", false, "h-bishop");
  board[70] = makePiece("R", "sente", false, "h-rook");

  for (let column = 0; column < 9; column += 1) {
    board[18 + column] = makePiece("P", "gote", false, `c${column}`);
    board[54 + column] = makePiece("P", "sente", false, `g${column}`);
  }

  return board;
};

export const createRootNode = (): KifuNode => ({
  id: ROOT_ID,
  children: [],
  board: createInitialBoard(),
  hands: createEmptyHands(),
  comment: "",
  moveNumber: 0,
  createdAt: Date.now(),
});

export const getPieceDisplay = (piece: ShogiPiece): string =>
  piece.promoted ? PROMOTED_LABELS[piece.kind] ?? PIECE_LABELS[piece.kind] : PIECE_LABELS[piece.kind];

export const getKifPieceName = (kind: PieceKind, promoted: boolean): string =>
  promoted ? PROMOTED_KIF_NAMES[kind] ?? PIECE_KIF_NAMES[kind] : PIECE_KIF_NAMES[kind];

export const getSquareLabel = (index: number): string => {
  const row = Math.floor(index / 9);
  const column = index % 9;
  return `${FILES_FULL[column]}${RANKS[row]}`;
};

export const getNumericSquare = (index: number): string => {
  const row = Math.floor(index / 9);
  const column = index % 9;
  return `${9 - column}${row + 1}`;
};

export const getSquarePoint = (index: number) => ({
  row: Math.floor(index / 9),
  col: index % 9,
});
