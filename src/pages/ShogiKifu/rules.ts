import { PLAYER_META, PROMOTABLE } from "./constants";
import { cloneBoard, getSquarePoint } from "./model";
import type { Board, HandKind, Hands, MoveLegality, Player, ShogiPiece } from "./types";

export const getForward = (owner: Player) => (owner === "sente" ? -1 : 1);

export const isInsidePromotionZone = (owner: Player, index: number): boolean => {
  const { row } = getSquarePoint(index);
  return owner === "sente" ? row <= 2 : row >= 6;
};

export const isPromotionAvailable = (piece: ShogiPiece, from: number, to: number): boolean =>
  !piece.promoted &&
  PROMOTABLE.includes(piece.kind) &&
  (isInsidePromotionZone(piece.owner, from) || isInsidePromotionZone(piece.owner, to));

export const isPromotionForced = (piece: ShogiPiece, to: number): boolean => {
  if (piece.promoted) return false;
  const { row } = getSquarePoint(to);
  if (piece.kind === "P" || piece.kind === "L") {
    return piece.owner === "sente" ? row === 0 : row === 8;
  }
  if (piece.kind === "N") {
    return piece.owner === "sente" ? row <= 1 : row >= 7;
  }
  return false;
};

const hasClearPath = (board: Board, from: number, to: number, stepRow: number, stepCol: number): boolean => {
  const fromPoint = getSquarePoint(from);
  const toPoint = getSquarePoint(to);
  let row = fromPoint.row + stepRow;
  let col = fromPoint.col + stepCol;

  while (row !== toPoint.row || col !== toPoint.col) {
    if (board[row * 9 + col]) return false;
    row += stepRow;
    col += stepCol;
  }

  return true;
};

const isGoldLikeStep = (owner: Player, rowDelta: number, colDelta: number): boolean => {
  const forward = getForward(owner);
  return (
    (rowDelta === forward && Math.abs(colDelta) <= 1) ||
    (rowDelta === 0 && Math.abs(colDelta) === 1) ||
    (rowDelta === -forward && colDelta === 0)
  );
};

const isSilverStep = (owner: Player, rowDelta: number, colDelta: number): boolean => {
  const forward = getForward(owner);
  return (
    (rowDelta === forward && Math.abs(colDelta) <= 1) ||
    (rowDelta === -forward && Math.abs(colDelta) === 1)
  );
};

export const isLegalPieceMove = (board: Board, piece: ShogiPiece, from: number, to: number): boolean => {
  const fromPoint = getSquarePoint(from);
  const toPoint = getSquarePoint(to);
  const rowDelta = toPoint.row - fromPoint.row;
  const colDelta = toPoint.col - fromPoint.col;
  const absRow = Math.abs(rowDelta);
  const absCol = Math.abs(colDelta);
  const forward = getForward(piece.owner);

  if (rowDelta === 0 && colDelta === 0) return false;

  if (piece.promoted && ["S", "N", "L", "P"].includes(piece.kind)) {
    return isGoldLikeStep(piece.owner, rowDelta, colDelta);
  }

  switch (piece.kind) {
    case "K":
      return Math.max(absRow, absCol) === 1;
    case "G":
      return isGoldLikeStep(piece.owner, rowDelta, colDelta);
    case "S":
      return isSilverStep(piece.owner, rowDelta, colDelta);
    case "N":
      return rowDelta === forward * 2 && absCol === 1;
    case "L":
      return colDelta === 0 && rowDelta * forward > 0 && hasClearPath(board, from, to, forward, 0);
    case "P":
      return colDelta === 0 && rowDelta === forward;
    case "R":
      if (rowDelta === 0 && colDelta !== 0) return hasClearPath(board, from, to, 0, Math.sign(colDelta));
      if (colDelta === 0 && rowDelta !== 0) return hasClearPath(board, from, to, Math.sign(rowDelta), 0);
      return piece.promoted && absRow === 1 && absCol === 1;
    case "B":
      if (absRow === absCol) return hasClearPath(board, from, to, Math.sign(rowDelta), Math.sign(colDelta));
      return piece.promoted && ((absRow === 1 && colDelta === 0) || (rowDelta === 0 && absCol === 1));
    default:
      return false;
  }
};

const hasUnpromotedPawnOnFile = (board: Board, owner: Player, to: number): boolean => {
  const { col } = getSquarePoint(to);
  return board.some(
    (piece, index) =>
      index % 9 === col &&
      piece?.owner === owner &&
      piece.kind === "P" &&
      !piece.promoted,
  );
};

const isKingInCheck = (board: Board, owner: Player): boolean => {
  const kingIndex = board.findIndex((piece) => piece?.owner === owner && piece.kind === "K");
  if (kingIndex < 0) return false;

  return board.some(
    (piece, index) =>
      Boolean(piece) &&
      piece?.owner !== owner &&
      isLegalPieceMove(board, piece, index, kingIndex),
  );
};

const wouldLeaveKingInCheckAfterMove = (board: Board, owner: Player, from: number, to: number): boolean => {
  const nextBoard = cloneBoard(board);
  const moving = nextBoard[from];
  if (!moving) return false;

  nextBoard[from] = null;
  nextBoard[to] = moving;
  return isKingInCheck(nextBoard, owner);
};

const wouldLeaveKingInCheckAfterDrop = (board: Board, owner: Player, kind: HandKind, to: number): boolean => {
  const nextBoard = cloneBoard(board);
  nextBoard[to] = {
    id: "validation-drop",
    kind,
    owner,
    promoted: false,
  };
  return isKingInCheck(nextBoard, owner);
};

export const validateMove = (board: Board, nextPlayer: Player, from: number, to: number): MoveLegality => {
  const moving = board[from];
  const target = board[to];

  if (!moving) return { legal: false, reason: "没有可移动的棋子。" };
  if (moving.owner !== nextPlayer) return { legal: false, reason: `现在轮到${PLAYER_META[nextPlayer].label}。` };
  if (target?.owner === moving.owner) return { legal: false, reason: "不能吃自己的棋子。" };
  if (target?.kind === "K") return { legal: false, reason: "不能直接吃王。" };
  if (!isLegalPieceMove(board, moving, from, to)) return { legal: false, reason: "该棋子的走法不能到达目标格。" };
  if (wouldLeaveKingInCheckAfterMove(board, moving.owner, from, to)) {
    return { legal: false, reason: "这手会让己方王处于被攻击状态。" };
  }

  return {
    legal: true,
    canPromote: isPromotionAvailable(moving, from, to),
    mustPromote: isPromotionForced(moving, to),
  };
};

export const validateDrop = (
  board: Board,
  hands: Hands,
  nextPlayer: Player,
  owner: Player,
  kind: HandKind,
  to: number,
): MoveLegality => {
  if (owner !== nextPlayer) return { legal: false, reason: `现在轮到${PLAYER_META[nextPlayer].label}。` };
  if (board[to]) return { legal: false, reason: "目标格已有棋子。" };
  if (hands[owner][kind] <= 0) return { legal: false, reason: "没有这枚持驹。" };

  const { row } = getSquarePoint(to);
  if ((kind === "P" || kind === "L") && (owner === "sente" ? row === 0 : row === 8)) {
    return { legal: false, reason: "步兵和香车不能打在最后一段。" };
  }
  if (kind === "N" && (owner === "sente" ? row <= 1 : row >= 7)) {
    return { legal: false, reason: "桂马不能打在无法前进的段。" };
  }
  if (kind === "P" && hasUnpromotedPawnOnFile(board, owner, to)) {
    return { legal: false, reason: "同一筋不能有两枚未升变的步。" };
  }
  if (wouldLeaveKingInCheckAfterDrop(board, owner, kind, to)) {
    return { legal: false, reason: "这手不能解除己方王被攻击。" };
  }

  return { legal: true };
};
