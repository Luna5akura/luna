import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import { PLAYER_META, PROMOTABLE } from "./constants";
import { buildNotation } from "./kifu";
import { cloneBoard, cloneHands, createEmptyBoard, createEmptyHands, makePiece } from "./model";
import { validateDrop, validateMove } from "./rules";
import type {
  Board,
  HandKind,
  Hands,
  KifuNode,
  MoveRecord,
  PendingPromotion,
  PieceKind,
  Player,
  Selection,
  ShogiPiece,
  ToolMode,
} from "./types";

type BoardCommandParams = {
  board: Board;
  currentId: string;
  hands: Hands;
  mode: ToolMode;
  nextPlayer: Player;
  nodes: Record<string, KifuNode>;
  pendingPromotion: PendingPromotion | null;
  selection: Selection;
  serialRef: MutableRefObject<number>;
  setupOwner: Player;
  setupPromoted: boolean;
  pushNotice: (message: string) => void;
  setCurrentId: Dispatch<SetStateAction<string>>;
  setMode: Dispatch<SetStateAction<ToolMode>>;
  setNodes: Dispatch<SetStateAction<Record<string, KifuNode>>>;
  setPendingPromotion: Dispatch<SetStateAction<PendingPromotion | null>>;
  setSelection: Dispatch<SetStateAction<Selection>>;
  setSetupOwner: Dispatch<SetStateAction<Player>>;
  setSetupPromoted: Dispatch<SetStateAction<boolean>>;
};

const isSameMove = (record: MoveRecord | undefined, draft: Omit<MoveRecord, "notation">): boolean =>
  Boolean(record) &&
  record.owner === draft.owner &&
  record.piece === draft.piece &&
  record.promotedBefore === draft.promotedBefore &&
  record.promotedAfter === draft.promotedAfter &&
  record.from === draft.from &&
  record.to === draft.to &&
  Boolean(record.drop) === Boolean(draft.drop);

export const useBoardCommands = ({
  board,
  currentId,
  hands,
  mode,
  nextPlayer,
  nodes,
  pendingPromotion,
  selection,
  serialRef,
  setupOwner,
  setupPromoted,
  pushNotice,
  setCurrentId,
  setMode,
  setNodes,
  setPendingPromotion,
  setSelection,
  setSetupOwner,
  setSetupPromoted,
}: BoardCommandParams) => {
  const clearTransient = () => {
    setSelection(null);
    setPendingPromotion(null);
  };

  const createRuntimePiece = (kind: PieceKind, owner: Player, promoted = false): ShogiPiece => {
    serialRef.current += 1;
    return makePiece(kind, owner, promoted, `runtime-${serialRef.current}`);
  };

  const updateCurrentSnapshot = (nextBoard: Board, nextHands: Hands) => {
    setNodes((previous) => ({
      ...previous,
      [currentId]: { ...previous[currentId], board: nextBoard, hands: nextHands },
    }));
  };

  const appendMoveNode = (moveDraft: Omit<MoveRecord, "notation">, nextBoard: Board, nextHands: Hands) => {
    const parent = nodes[currentId];
    if (!parent) return;

    const matchingChildId = parent.children.find((childId) => isSameMove(nodes[childId]?.move, moveDraft));
    if (matchingChildId) {
      setCurrentId(matchingChildId);
      clearTransient();
      return;
    }

    serialRef.current += 1;
    const childId = `node-${Date.now().toString(36)}-${serialRef.current}`;
    const move: MoveRecord = { ...moveDraft, notation: buildNotation(moveDraft) };
    setNodes((previous) => ({
      ...previous,
      [currentId]: { ...previous[currentId], children: [...previous[currentId].children, childId] },
      [childId]: {
        id: childId,
        parentId: currentId,
        children: [],
        move,
        board: nextBoard,
        hands: nextHands,
        comment: "",
        moveNumber: parent.moveNumber + 1,
        createdAt: Date.now(),
      },
    }));
    setCurrentId(childId);
    clearTransient();
  };

  const recordMove = (from: number, to: number, promote = false) => {
    const moving = board[from];
    const target = board[to];
    if (!moving) return;

    const nextBoard = cloneBoard(board);
    const nextHands = cloneHands(hands);
    const promotedAfter = moving.promoted || promote;
    nextBoard[from] = null;
    nextBoard[to] = { ...moving, promoted: promotedAfter };
    if (target && target.kind !== "K") nextHands[moving.owner][target.kind] += 1;

    appendMoveNode(
      {
        owner: moving.owner,
        piece: moving.kind,
        promotedBefore: moving.promoted,
        promotedAfter,
        from,
        to,
        captured: target ? { kind: target.kind, promoted: target.promoted, owner: target.owner } : undefined,
      },
      nextBoard,
      nextHands,
    );
  };

  const recordDrop = (owner: Player, kind: HandKind, to: number) => {
    const legality = validateDrop(board, hands, nextPlayer, owner, kind, to);
    if (!legality.legal) return pushNotice(legality.reason ?? "不能在这里打入。");

    const nextBoard = cloneBoard(board);
    const nextHands = cloneHands(hands);
    nextBoard[to] = createRuntimePiece(kind, owner, false);
    nextHands[owner][kind] -= 1;
    appendMoveNode({ owner, piece: kind, promotedBefore: false, promotedAfter: false, to, drop: true }, nextBoard, nextHands);
  };

  const handleSetupBoardClick = (index: number, piece: ShogiPiece | null) => {
    if (selection?.source === "palette") {
      const nextBoard = cloneBoard(board);
      nextBoard[index] = createRuntimePiece(selection.kind, selection.owner, selection.promoted);
      updateCurrentSnapshot(nextBoard, hands);
      return void setPendingPromotion(null);
    }

    if (selection?.source === "board") {
      if (selection.index === index) return clearTransient();
      const nextBoard = cloneBoard(board);
      const moving = nextBoard[selection.index];
      if (!moving) return clearTransient();
      nextBoard[selection.index] = null;
      nextBoard[index] = moving;
      updateCurrentSnapshot(nextBoard, hands);
      setSelection({ source: "board", index });
      return void setPendingPromotion(null);
    }

    setSelection(piece ? { source: "board", index } : null);
    setPendingPromotion(null);
  };

  const handleSelectedBoardMove = (index: number, piece: ShogiPiece | null) => {
    if (selection?.source !== "board") return;
    if (selection.index === index) return clearTransient();

    const moving = board[selection.index];
    if (piece?.owner === moving?.owner) {
      if (piece.owner === nextPlayer) {
        setSelection({ source: "board", index });
        return void setPendingPromotion(null);
      }
      return pushNotice(`现在轮到${PLAYER_META[nextPlayer].label}。`);
    }

    const legality = validateMove(board, nextPlayer, selection.index, index);
    if (!legality.legal) return pushNotice(legality.reason ?? "这手不合法。");
    if (legality.mustPromote) return recordMove(selection.index, index, true);
    if (legality.canPromote) return void setPendingPromotion({ from: selection.index, to: index });
    recordMove(selection.index, index, false);
  };

  const handleBoardClick = (index: number) => {
    const piece = board[index];
    if (mode === "setup") return handleSetupBoardClick(index, piece);
    if (selection?.source === "hand") return recordDrop(selection.owner, selection.kind, index);
    if (selection?.source === "board") return handleSelectedBoardMove(index, piece);
    if (piece && piece.owner !== nextPlayer) return pushNotice(`现在轮到${PLAYER_META[nextPlayer].label}。`);
    setSelection(piece ? { source: "board", index } : null);
    setPendingPromotion(null);
  };

  const selectPalettePiece = (kind: PieceKind) => {
    setMode("setup");
    setSelection({ source: "palette", kind, owner: setupOwner, promoted: setupPromoted && PROMOTABLE.includes(kind) });
  };

  const selectHandPiece = (owner: Player, kind: HandKind) => {
    if (mode === "setup" || hands[owner][kind] <= 0) return;
    if (owner !== nextPlayer) return pushNotice(`现在轮到${PLAYER_META[nextPlayer].label}。`);
    setSelection({ source: "hand", owner, kind });
    setPendingPromotion(null);
  };

  const changeHandCount = (owner: Player, kind: HandKind, delta: number) => {
    const nextHands = cloneHands(hands);
    nextHands[owner][kind] = Math.max(0, nextHands[owner][kind] + delta);
    updateCurrentSnapshot(board, nextHands);
  };

  const removeSelectedPiece = () => {
    if (selection?.source !== "board") return;
    const nextBoard = cloneBoard(board);
    nextBoard[selection.index] = null;
    updateCurrentSnapshot(nextBoard, hands);
    clearTransient();
  };

  const flipSelectedOwner = () => {
    if (selection?.source !== "board") return;
    const nextBoard = cloneBoard(board);
    const piece = nextBoard[selection.index];
    if (!piece) return;
    piece.owner = piece.owner === "sente" ? "gote" : "sente";
    updateCurrentSnapshot(nextBoard, hands);
  };

  const toggleSelectedPromotion = () => {
    if (selection?.source !== "board") return;
    const nextBoard = cloneBoard(board);
    const piece = nextBoard[selection.index];
    if (!piece || !PROMOTABLE.includes(piece.kind)) return;
    piece.promoted = !piece.promoted;
    updateCurrentSnapshot(nextBoard, hands);
  };

  return {
    changeHandCount,
    changeSetupOwner: (owner: Player) => {
      setSetupOwner(owner);
      if (selection?.source === "palette") setSelection({ ...selection, owner });
    },
    changeSetupPromoted: (promoted: boolean) => {
      setSetupPromoted(promoted);
      if (selection?.source === "palette") {
        setSelection({ ...selection, promoted: promoted && PROMOTABLE.includes(selection.kind) });
      }
    },
    clearPosition: () => {
      updateCurrentSnapshot(createEmptyBoard(), createEmptyHands());
      clearTransient();
    },
    clearTransient,
    flipSelectedOwner,
    handleBoardClick,
    recordPendingPromotion: (promote: boolean) => pendingPromotion && recordMove(pendingPromotion.from, pendingPromotion.to, promote),
    removeSelectedPiece,
    selectHandPiece,
    selectPalettePiece,
    selectedBoardPiece: selection?.source === "board" ? board[selection.index] : null,
    setModeAndClear: (nextMode: ToolMode) => {
      setMode(nextMode);
      clearTransient();
    },
    toggleSelectedPromotion,
  };
};
