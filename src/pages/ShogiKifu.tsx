import React, { useMemo, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ClipboardCopy,
  Eraser,
  FileJson,
  FileText,
  FolderOpen,
  GitBranch,
  Minus,
  MousePointer2,
  PenLine,
  Plus,
  RotateCcw,
  Save,
  StepBack,
  StepForward,
  Trash2,
} from "lucide-react";

type Player = "sente" | "gote";
type PieceKind = "K" | "R" | "B" | "G" | "S" | "N" | "L" | "P";
type HandKind = Exclude<PieceKind, "K">;
type ToolMode = "record" | "setup";

type ShogiPiece = {
  id: string;
  kind: PieceKind;
  owner: Player;
  promoted: boolean;
};

type Board = Array<ShogiPiece | null>;
type Hands = Record<Player, Record<HandKind, number>>;

type MoveRecord = {
  owner: Player;
  piece: PieceKind;
  promotedBefore: boolean;
  promotedAfter: boolean;
  from?: number;
  to: number;
  drop?: boolean;
  captured?: {
    kind: PieceKind;
    promoted: boolean;
    owner: Player;
  };
  notation: string;
};

type KifuNode = {
  id: string;
  parentId?: string;
  children: string[];
  move?: MoveRecord;
  board: Board;
  hands: Hands;
  comment: string;
  moveNumber: number;
  createdAt: number;
};

type Selection =
  | { source: "board"; index: number }
  | { source: "hand"; owner: Player; kind: HandKind }
  | { source: "palette"; owner: Player; kind: PieceKind; promoted: boolean }
  | null;

type StoredKifuFile = {
  path: string;
  title: string;
  extension: "kif" | "json";
  content: string;
};

type ImportedProject = {
  nodes: Record<string, KifuNode>;
  currentId: string;
};

type KifuProjectPayload = {
  version?: string;
  currentId?: string;
  nodes?: Record<string, KifuNode>;
};

type ParsedKifMove = {
  moveNumber: number;
  owner: Player;
  piece: PieceKind;
  promotedBefore: boolean;
  promotedAfter: boolean;
  from?: number;
  to: number;
  drop: boolean;
  notation: string;
};

const ROOT_ID = "root";
const PIECE_ORDER: PieceKind[] = ["K", "R", "B", "G", "S", "N", "L", "P"];
const HAND_ORDER: HandKind[] = ["R", "B", "G", "S", "N", "L", "P"];
const PROMOTABLE: PieceKind[] = ["R", "B", "S", "N", "L", "P"];
const RANKS = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
const FILES_FULL = ["９", "８", "７", "６", "５", "４", "３", "２", "１"];
const STORED_KIFU_ROOT = "../data/shogi-kifu/";

const storedKifuModules = import.meta.glob<string>("../data/shogi-kifu/**/*.{kif,json}", {
  query: "?raw",
  import: "default",
  eager: true,
});

const PLAYER_META: Record<Player, { label: string; mark: string; tone: string }> = {
  sente: { label: "先手", mark: "▲", tone: "text-cyan-200" },
  gote: { label: "後手", mark: "△", tone: "text-rose-200" },
};

const PIECE_LABELS: Record<PieceKind, string> = {
  K: "玉",
  R: "飛",
  B: "角",
  G: "金",
  S: "銀",
  N: "桂",
  L: "香",
  P: "歩",
};

const PIECE_KIF_NAMES: Record<PieceKind, string> = {
  K: "玉",
  R: "飛",
  B: "角",
  G: "金",
  S: "銀",
  N: "桂",
  L: "香",
  P: "歩",
};

const PROMOTED_LABELS: Partial<Record<PieceKind, string>> = {
  R: "龍",
  B: "馬",
  S: "全",
  N: "圭",
  L: "杏",
  P: "と",
};

const PROMOTED_KIF_NAMES: Partial<Record<PieceKind, string>> = {
  R: "龍",
  B: "馬",
  S: "成銀",
  N: "成桂",
  L: "成香",
  P: "と",
};

const KIF_PIECE_NAMES: Array<[string, PieceKind, boolean]> = [
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

const getStoredKifuTitle = (path: string): string =>
  path
    .replace(STORED_KIFU_ROOT, "")
    .replace(/\.(kif|json)$/i, "")
    .split("/")
    .map((segment) => segment.replace(/[-_]/g, " "))
    .join(" / ");

const STORED_KIFU_FILES: StoredKifuFile[] = Object.entries(storedKifuModules)
  .map(([path, content]) => ({
    path,
    title: getStoredKifuTitle(path),
    extension: path.toLowerCase().endsWith(".json") ? "json" : "kif",
    content,
  }))
  .sort((a, b) => a.title.localeCompare(b.title, "zh-Hans")) as StoredKifuFile[];

const makePiece = (
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

const createEmptyBoard = (): Board => Array.from({ length: 81 }, () => null);

const createEmptyHands = (): Hands => ({
  sente: { R: 0, B: 0, G: 0, S: 0, N: 0, L: 0, P: 0 },
  gote: { R: 0, B: 0, G: 0, S: 0, N: 0, L: 0, P: 0 },
});

const cloneBoard = (board: Board): Board =>
  board.map((piece) => (piece ? { ...piece } : null));

const cloneHands = (hands: Hands): Hands => ({
  sente: { ...hands.sente },
  gote: { ...hands.gote },
});

const createInitialBoard = (): Board => {
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

const createRootNode = (): KifuNode => ({
  id: ROOT_ID,
  children: [],
  board: createInitialBoard(),
  hands: createEmptyHands(),
  comment: "",
  moveNumber: 0,
  createdAt: Date.now(),
});

const getPieceDisplay = (piece: ShogiPiece): string =>
  piece.promoted ? PROMOTED_LABELS[piece.kind] ?? PIECE_LABELS[piece.kind] : PIECE_LABELS[piece.kind];

const getKifPieceName = (kind: PieceKind, promoted: boolean): string =>
  promoted ? PROMOTED_KIF_NAMES[kind] ?? PIECE_KIF_NAMES[kind] : PIECE_KIF_NAMES[kind];

const getSquareLabel = (index: number): string => {
  const row = Math.floor(index / 9);
  const column = index % 9;
  return `${FILES_FULL[column]}${RANKS[row]}`;
};

const getNumericSquare = (index: number): string => {
  const row = Math.floor(index / 9);
  const column = index % 9;
  return `${9 - column}${row + 1}`;
};

const buildNotation = (move: Omit<MoveRecord, "notation">): string => {
  const playerMark = PLAYER_META[move.owner].mark;
  const pieceName = getKifPieceName(move.piece, move.promotedBefore);
  const source = move.drop ? "打" : move.from !== undefined ? `(${getNumericSquare(move.from)})` : "";
  const promotion = move.promotedAfter && !move.promotedBefore ? "成" : "";
  return `${playerMark}${getSquareLabel(move.to)}${pieceName}${source}${promotion}`;
};

const downloadTextFile = (filename: string, content: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

const formatTimestamp = () => {
  const now = new Date();
  const pad = (value: number) => value.toString().padStart(2, "0");
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
};

const getDescendantIds = (nodes: Record<string, KifuNode>, nodeId: string): string[] => {
  const target = nodes[nodeId];
  if (!target) return [];
  return target.children.flatMap((childId) => [childId, ...getDescendantIds(nodes, childId)]);
};

const findMainlineEnd = (nodes: Record<string, KifuNode>, startId = ROOT_ID): string => {
  let nodeId = startId;

  while (nodes[nodeId]?.children[0]) {
    nodeId = nodes[nodeId].children[0];
  }

  return nodeId;
};

const readJsonProject = (content: string): ImportedProject => {
  const payload = JSON.parse(content) as KifuProjectPayload;

  if (!payload.nodes?.[ROOT_ID]) {
    throw new Error("JSON 中没有 root 节点。");
  }

  const currentId = payload.currentId && payload.nodes[payload.currentId]
    ? payload.currentId
    : findMainlineEnd(payload.nodes);

  return {
    nodes: payload.nodes,
    currentId,
  };
};

const indexFromNumericSquare = (file: number, rank: number): number | undefined => {
  if (file < 1 || file > 9 || rank < 1 || rank > 9) return undefined;
  return (rank - 1) * 9 + (9 - file);
};

const indexFromKifSquare = (fileLabel: string, rankLabel: string): number | undefined => {
  const file = FILES_FULL.indexOf(fileLabel);
  const rank = RANKS.indexOf(rankLabel);
  if (file < 0 || rank < 0) return undefined;
  return rank * 9 + file;
};

const parseKifMoveLine = (line: string, lastTo?: number): ParsedKifMove | null => {
  const match = line.match(/^\s*(\d+)\s+(.+)$/);
  if (!match) return null;

  const moveNumber = Number(match[1]);
  if (!Number.isFinite(moveNumber)) return null;

  const rawNotation = match[2].trim().replace(/\s+\(.+$/, "");
  const ownerFromMark = rawNotation.startsWith("△") ? "gote" : rawNotation.startsWith("▲") ? "sente" : undefined;
  const owner: Player = ownerFromMark ?? (moveNumber % 2 === 1 ? "sente" : "gote");
  let body = rawNotation.replace(/^[▲△]/, "").replace(/\u3000/g, " ").trim();

  let to: number | undefined;
  if (body.startsWith("同")) {
    to = lastTo;
    body = body.replace(/^同\s*/, "");
  } else {
    to = indexFromKifSquare(body.slice(0, 1), body.slice(1, 2));
    body = body.slice(2).trim();
  }

  if (to === undefined) return null;

  const pieceInfo = KIF_PIECE_NAMES.find(([name]) => body.startsWith(name));
  if (!pieceInfo) return null;

  const [pieceName, piece, promotedBefore] = pieceInfo;
  const rest = body.slice(pieceName.length);
  const fromMatch = rest.match(/\(([1-9])([1-9])\)/);
  const from = fromMatch
    ? indexFromNumericSquare(Number(fromMatch[1]), Number(fromMatch[2]))
    : undefined;
  const drop = rest.includes("打");
  const promotesNow = !promotedBefore && rest.includes("成") && !rest.includes("不成");

  return {
    moveNumber,
    owner,
    piece,
    promotedBefore,
    promotedAfter: promotedBefore || promotesNow,
    from,
    to,
    drop,
    notation: rawNotation,
  };
};

const findLooseSource = (board: Board, move: ParsedKifMove): number | undefined => {
  const index = board.findIndex(
    (piece) =>
      Boolean(piece) &&
      piece?.owner === move.owner &&
      piece.kind === move.piece &&
      piece.promoted === move.promotedBefore,
  );
  return index >= 0 ? index : undefined;
};

const applyParsedKifMove = (
  board: Board,
  hands: Hands,
  move: ParsedKifMove,
): { board: Board; hands: Hands; record: MoveRecord } => {
  const nextBoard = cloneBoard(board);
  const nextHands = cloneHands(hands);
  const from = move.drop ? undefined : move.from ?? findLooseSource(board, move);
  const moving = from !== undefined && nextBoard[from]
    ? nextBoard[from]
    : makePiece(move.piece, move.owner, move.promotedBefore, `import-${move.moveNumber}`);
  const captured = nextBoard[move.to];

  if (from !== undefined) {
    nextBoard[from] = null;
  }

  if (move.drop && move.piece !== "K" && nextHands[move.owner][move.piece] > 0) {
    nextHands[move.owner][move.piece] -= 1;
  }

  if (captured && captured.kind !== "K") {
    nextHands[move.owner][captured.kind] += 1;
  }

  nextBoard[move.to] = {
    ...moving,
    owner: move.owner,
    kind: move.piece,
    promoted: move.promotedAfter,
  };

  return {
    board: nextBoard,
    hands: nextHands,
    record: {
      owner: move.owner,
      piece: move.piece,
      promotedBefore: move.promotedBefore,
      promotedAfter: move.promotedAfter,
      from,
      to: move.to,
      drop: move.drop,
      captured: captured
        ? {
            kind: captured.kind,
            promoted: captured.promoted,
            owner: captured.owner,
          }
        : undefined,
      notation: move.notation,
    },
  };
};

const readKifProject = (content: string): ImportedProject => {
  const root = createRootNode();
  const nodes: Record<string, KifuNode> = { [ROOT_ID]: root };
  let board = cloneBoard(root.board);
  let hands = cloneHands(root.hands);
  let parentId = ROOT_ID;
  let currentId = ROOT_ID;
  let lastTo: number | undefined;
  let skippingVariation = false;

  content.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      skippingVariation = false;
      return;
    }

    if (line.startsWith("変化：")) {
      skippingVariation = true;
      return;
    }

    if (line.startsWith("*")) {
      const target = nodes[currentId] ?? nodes[ROOT_ID];
      target.comment = [target.comment, line.slice(1).trim()].filter(Boolean).join("\n");
      return;
    }

    if (skippingVariation || line.startsWith("#") || line.includes("手数----")) return;

    const parsed = parseKifMoveLine(line, lastTo);
    if (!parsed) return;

    const applied = applyParsedKifMove(board, hands, parsed);
    const nodeId = `import-${parsed.moveNumber}`;
    nodes[parentId].children = [...nodes[parentId].children, nodeId];
    nodes[nodeId] = {
      id: nodeId,
      parentId,
      children: [],
      move: applied.record,
      board: applied.board,
      hands: applied.hands,
      comment: "",
      moveNumber: parsed.moveNumber,
      createdAt: Date.now() + parsed.moveNumber,
    };

    board = applied.board;
    hands = applied.hands;
    parentId = nodeId;
    currentId = nodeId;
    lastTo = parsed.to;
  });

  return { nodes, currentId };
};

const ShogiKifu: React.FC = () => {
  const [nodes, setNodes] = useState<Record<string, KifuNode>>(() => ({
    [ROOT_ID]: createRootNode(),
  }));
  const [currentId, setCurrentId] = useState(ROOT_ID);
  const [mode, setMode] = useState<ToolMode>("record");
  const [setupOwner, setSetupOwner] = useState<Player>("sente");
  const [setupPromoted, setSetupPromoted] = useState(false);
  const [promoteNext, setPromoteNext] = useState(false);
  const [selection, setSelection] = useState<Selection>(null);
  const [branchArmed, setBranchArmed] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const serialRef = useRef(0);

  const currentNode = nodes[currentId] ?? nodes[ROOT_ID];
  const board = currentNode.board;
  const hands = currentNode.hands;

  const activePath = useMemo(() => {
    const path: string[] = [];
    let nextId: string | undefined = currentId;

    while (nextId) {
      path.push(nextId);
      nextId = nodes[nextId]?.parentId;
    }

    return path.reverse();
  }, [currentId, nodes]);

  const moveLine = useMemo(
    () => activePath.map((nodeId) => nodes[nodeId]).filter((node) => node?.move),
    [activePath, nodes],
  );

  const nextPlayer: Player = currentNode.moveNumber % 2 === 0 ? "sente" : "gote";

  const createRuntimePiece = (kind: PieceKind, owner: Player, promoted = false): ShogiPiece => {
    serialRef.current += 1;
    return makePiece(kind, owner, promoted, `runtime-${serialRef.current}`);
  };

  const updateCurrentSnapshot = (nextBoard: Board, nextHands: Hands) => {
    setNodes((previous) => ({
      ...previous,
      [currentId]: {
        ...previous[currentId],
        board: nextBoard,
        hands: nextHands,
      },
    }));
  };

  const appendMoveNode = (moveDraft: Omit<MoveRecord, "notation">, nextBoard: Board, nextHands: Hands) => {
    const parent = nodes[currentId];
    if (!parent) return;

    serialRef.current += 1;
    const childId = `node-${Date.now().toString(36)}-${serialRef.current}`;
    const move: MoveRecord = {
      ...moveDraft,
      notation: buildNotation(moveDraft),
    };

    setNodes((previous) => ({
      ...previous,
      [currentId]: {
        ...previous[currentId],
        children: [...previous[currentId].children, childId],
      },
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
    setSelection(null);
    setPromoteNext(false);
    setBranchArmed(false);
  };

  const recordMove = (from: number, to: number) => {
    const moving = board[from];
    const target = board[to];

    if (!moving) return;

    if (target?.owner === moving.owner) {
      setSelection({ source: "board", index: to });
      return;
    }

    const nextBoard = cloneBoard(board);
    const nextHands = cloneHands(hands);
    const promotedAfter = moving.promoted || (promoteNext && PROMOTABLE.includes(moving.kind));

    nextBoard[from] = null;
    nextBoard[to] = {
      ...moving,
      promoted: promotedAfter,
    };

    if (target && target.kind !== "K") {
      nextHands[moving.owner][target.kind] += 1;
    }

    appendMoveNode(
      {
        owner: moving.owner,
        piece: moving.kind,
        promotedBefore: moving.promoted,
        promotedAfter,
        from,
        to,
        captured: target
          ? {
              kind: target.kind,
              promoted: target.promoted,
              owner: target.owner,
            }
          : undefined,
      },
      nextBoard,
      nextHands,
    );
  };

  const recordDrop = (owner: Player, kind: HandKind, to: number) => {
    if (board[to] || hands[owner][kind] <= 0) return;

    const nextBoard = cloneBoard(board);
    const nextHands = cloneHands(hands);

    nextBoard[to] = createRuntimePiece(kind, owner, false);
    nextHands[owner][kind] -= 1;

    appendMoveNode(
      {
        owner,
        piece: kind,
        promotedBefore: false,
        promotedAfter: false,
        to,
        drop: true,
      },
      nextBoard,
      nextHands,
    );
  };

  const handleBoardClick = (index: number) => {
    const piece = board[index];

    if (mode === "setup") {
      if (selection?.source === "palette") {
        const nextBoard = cloneBoard(board);
        nextBoard[index] = createRuntimePiece(selection.kind, selection.owner, selection.promoted);
        updateCurrentSnapshot(nextBoard, hands);
        return;
      }

      if (selection?.source === "board") {
        if (selection.index === index) {
          setSelection(null);
          return;
        }

        const nextBoard = cloneBoard(board);
        const moving = nextBoard[selection.index];
        if (!moving) {
          setSelection(null);
          return;
        }

        nextBoard[selection.index] = null;
        nextBoard[index] = moving;
        updateCurrentSnapshot(nextBoard, hands);
        setSelection({ source: "board", index });
        return;
      }

      setSelection(piece ? { source: "board", index } : null);
      return;
    }

    if (selection?.source === "hand") {
      recordDrop(selection.owner, selection.kind, index);
      return;
    }

    if (selection?.source === "board") {
      if (selection.index === index) {
        setSelection(null);
        return;
      }

      recordMove(selection.index, index);
      return;
    }

    setSelection(piece ? { source: "board", index } : null);
  };

  const selectPalettePiece = (kind: PieceKind) => {
    setMode("setup");
    setSelection({
      source: "palette",
      kind,
      owner: setupOwner,
      promoted: setupPromoted && PROMOTABLE.includes(kind),
    });
  };

  const selectHandPiece = (owner: Player, kind: HandKind) => {
    if (mode === "setup") return;
    if (hands[owner][kind] <= 0) return;
    setSelection({ source: "hand", owner, kind });
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
    setSelection(null);
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

  const resetToInitial = () => {
    setNodes({ [ROOT_ID]: createRootNode() });
    setCurrentId(ROOT_ID);
    setSelection(null);
    setPromoteNext(false);
    setBranchArmed(false);
  };

  const clearPosition = () => {
    updateCurrentSnapshot(createEmptyBoard(), createEmptyHands());
    setSelection(null);
  };

  const deleteCurrentNode = () => {
    if (currentId === ROOT_ID || !currentNode.parentId) return;
    const parentId = currentNode.parentId;
    const idsToDelete = [currentId, ...getDescendantIds(nodes, currentId)];

    setNodes((previous) => {
      const next = { ...previous };
      idsToDelete.forEach((nodeId) => {
        delete next[nodeId];
      });
      next[parentId] = {
        ...next[parentId],
        children: next[parentId].children.filter((childId) => childId !== currentId),
      };
      return next;
    });
    setCurrentId(parentId);
    setSelection(null);
  };

  const armSiblingBranch = () => {
    if (currentNode.parentId) {
      setCurrentId(currentNode.parentId);
    }
    setSelection(null);
    setBranchArmed(true);
  };

  const updateComment = (value: string) => {
    setNodes((previous) => ({
      ...previous,
      [currentId]: {
        ...previous[currentId],
        comment: value,
      },
    }));
  };

  const buildKif = () => {
    const lines: string[] = [
      "#KIF version=2.0 encoding=UTF-8",
      "# Generated by LUNA_PROTOCOL SHOGI_NODE",
      `開始日時：${new Date().toLocaleString("ja-JP")}`,
      "手合割：平手",
      "先手：SENTE",
      "後手：GOTE",
      "手数----指手---------消費時間--",
    ];

    const appendNodeLine = (node: KifuNode): void => {
      if (!node.move) return;
      lines.push(`${node.moveNumber} ${node.move.notation}`);
      if (node.comment.trim()) {
        node.comment.split(/\r?\n/).forEach((commentLine) => {
          lines.push(`*${commentLine}`);
        });
      }
    };

    const appendLineFrom = (startId: string): void => {
      let nodeId: string | undefined = startId;

      while (nodeId) {
        const node: KifuNode | undefined = nodes[nodeId];
        if (!node) break;

        appendNodeLine(node);

        node.children.slice(1).forEach((branchId: string) => {
          const branchNode = nodes[branchId];
          if (!branchNode) return;
          lines.push("");
          lines.push(`変化：${branchNode.moveNumber}手`);
          appendLineFrom(branchId);
        });

        nodeId = node.children[0];
      }
    };

    const root = nodes[ROOT_ID];
    if (root.children[0]) {
      appendLineFrom(root.children[0]);
    }

    root.children.slice(1).forEach((branchId) => {
      lines.push("");
      lines.push("変化：1手");
      appendLineFrom(branchId);
    });

    return `${lines.join("\n")}\n`;
  };

  const exportKif = () => {
    downloadTextFile(`luna-shogi-${formatTimestamp()}.kif`, buildKif(), "text/plain;charset=utf-8");
  };

  const exportJson = () => {
    const payload = {
      version: "luna-shogi-kifu-v1",
      exportedAt: new Date().toISOString(),
      currentId,
      nodes,
    };
    downloadTextFile(
      `luna-shogi-${formatTimestamp()}.json`,
      JSON.stringify(payload, null, 2),
      "application/json;charset=utf-8",
    );
  };

  const copyKif = () => {
    void navigator.clipboard.writeText(buildKif()).then(() => {
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1200);
    });
  };

  const renderTree = (nodeId: string, depth = 0): React.ReactNode => {
    const node = nodes[nodeId];
    if (!node) return null;

    return (
      <div key={nodeId} className="shogi-tree-branch" style={{ "--depth": depth } as React.CSSProperties}>
        <button
          type="button"
          className={`shogi-tree-node ${currentId === nodeId ? "is-active" : ""}`}
          onClick={() => {
            setCurrentId(nodeId);
            setSelection(null);
            setBranchArmed(false);
          }}
        >
          <span>{node.move ? node.moveNumber.toString().padStart(2, "0") : "00"}</span>
          <strong>{node.move?.notation ?? "初期局面"}</strong>
          {node.children.length > 1 && <em>{node.children.length} BR</em>}
        </button>
        {node.children.length > 0 && (
          <div className="shogi-tree-children">
            {node.children.map((childId) => renderTree(childId, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const kifPreview = buildKif();

  const selectedBoardPiece = selection?.source === "board" ? board[selection.index] : null;

  return (
    <section className="shogi-page relative min-h-screen overflow-hidden px-4 pb-20 pt-36 text-slate-100 md:px-8 md:pt-40">
      <div className="shogi-scanline" aria-hidden="true" />
      <div className="shogi-grid-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1540px] flex-col gap-4">
        <header className="shogi-header">
          <div>
            <p className="shogi-kicker">TACTICAL KIFU EDITOR // SHOGI</p>
            <h1>将棋打谱节点</h1>
          </div>
          <div className="shogi-status-strip" aria-label="current shogi status">
            <span className={PLAYER_META[nextPlayer].tone}>{PLAYER_META[nextPlayer].mark} {PLAYER_META[nextPlayer].label}</span>
            <span>{currentNode.moveNumber.toString().padStart(3, "0")} TURNS</span>
            <span>{Object.keys(nodes).length.toString().padStart(3, "0")} NODES</span>
            <span className={branchArmed ? "text-amber-200" : "text-slate-500"}>
              {branchArmed ? "BRANCH ARMED" : "MAINLINE"}
            </span>
          </div>
        </header>

        <div className="shogi-workspace">
          <section className="shogi-panel shogi-board-panel" aria-label="shogi board editor">
            <div className="shogi-panel-head">
              <div>
                <p>BOARD MATRIX</p>
                <h2>盤面</h2>
              </div>
              <div className="shogi-tool-row">
                <button
                  type="button"
                  className={`shogi-icon-button ${mode === "record" ? "is-active" : ""}`}
                  onClick={() => {
                    setMode("record");
                    setSelection(null);
                  }}
                  title="记录走子"
                  aria-label="记录走子"
                >
                  <MousePointer2 size={16} />
                </button>
                <button
                  type="button"
                  className={`shogi-icon-button ${mode === "setup" ? "is-active" : ""}`}
                  onClick={() => {
                    setMode("setup");
                    setSelection(null);
                  }}
                  title="摆放棋子"
                  aria-label="摆放棋子"
                >
                  <PenLine size={16} />
                </button>
                <button
                  type="button"
                  className={`shogi-icon-button ${promoteNext ? "is-active" : ""}`}
                  onClick={() => setPromoteNext((value) => !value)}
                  title="下一手升变"
                  aria-label="下一手升变"
                  disabled={mode !== "record"}
                >
                  <Save size={16} />
                </button>
              </div>
            </div>

            <div className="shogi-board-shell">
              <div className="shogi-file-labels" aria-hidden="true">
                {FILES_FULL.map((file) => (
                  <span key={file}>{file}</span>
                ))}
              </div>
              <div className="shogi-board-row">
                <div className="shogi-rank-labels" aria-hidden="true">
                  {RANKS.map((rank) => (
                    <span key={rank}>{rank}</span>
                  ))}
                </div>
                <div className="shogi-board" role="grid" aria-label="将棋棋盘">
                  {board.map((piece, index) => {
                    const isSelected = selection?.source === "board" && selection.index === index;
                    const isLastMove = currentNode.move?.to === index || currentNode.move?.from === index;

                    return (
                      <button
                        key={`${index}-${piece?.id ?? "empty"}`}
                        type="button"
                        role="gridcell"
                        className={`shogi-square ${isSelected ? "is-selected" : ""} ${isLastMove ? "is-last-move" : ""}`}
                        onClick={() => handleBoardClick(index)}
                        aria-label={`${getSquareLabel(index)} ${piece ? `${PLAYER_META[piece.owner].label}${getPieceDisplay(piece)}` : "空"}`}
                      >
                        {piece && (
                          <span className={`shogi-piece ${piece.owner === "gote" ? "is-gote" : "is-sente"}`}>
                            <span>{getPieceDisplay(piece)}</span>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="shogi-hands">
              {(["gote", "sente"] as Player[]).map((owner) => (
                <div className="shogi-hand-tray" key={owner}>
                  <div className="shogi-hand-owner">
                    <span>{PLAYER_META[owner].mark}</span>
                    <strong>{PLAYER_META[owner].label}</strong>
                  </div>
                  <div className="shogi-hand-pieces">
                    {HAND_ORDER.map((kind) => {
                      const count = hands[owner][kind];
                      const isSelected =
                        selection?.source === "hand" && selection.owner === owner && selection.kind === kind;

                      return (
                        <div className="shogi-hand-unit" key={`${owner}-${kind}`}>
                          {mode === "setup" && (
                            <button
                              type="button"
                              className="shogi-mini-button"
                              onClick={() => changeHandCount(owner, kind, -1)}
                              title="减少持驹"
                              aria-label={`减少${PLAYER_META[owner].label}${PIECE_LABELS[kind]}`}
                            >
                              <Minus size={11} />
                            </button>
                          )}
                          <button
                            type="button"
                            className={`shogi-hand-piece ${isSelected ? "is-selected" : ""}`}
                            onClick={() => selectHandPiece(owner, kind)}
                            title="选择持驹打入"
                            aria-label={`${PLAYER_META[owner].label}${PIECE_LABELS[kind]} ${count}`}
                          >
                            <span>{PIECE_LABELS[kind]}</span>
                            <b>{count}</b>
                          </button>
                          {mode === "setup" && (
                            <button
                              type="button"
                              className="shogi-mini-button"
                              onClick={() => changeHandCount(owner, kind, 1)}
                              title="增加持驹"
                              aria-label={`增加${PLAYER_META[owner].label}${PIECE_LABELS[kind]}`}
                            >
                              <Plus size={11} />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="shogi-panel shogi-tree-panel" aria-label="move tree and annotation">
            <div className="shogi-panel-head">
              <div>
                <p>KIFU GRAPH</p>
                <h2>分支</h2>
              </div>
              <div className="shogi-tool-row">
                <button
                  type="button"
                  className="shogi-icon-button"
                  onClick={() => currentNode.parentId && setCurrentId(currentNode.parentId)}
                  title="回到上一手"
                  aria-label="回到上一手"
                  disabled={!currentNode.parentId}
                >
                  <StepBack size={16} />
                </button>
                <button
                  type="button"
                  className="shogi-icon-button"
                  onClick={() => currentNode.children[0] && setCurrentId(currentNode.children[0])}
                  title="进入主线下一手"
                  aria-label="进入主线下一手"
                  disabled={!currentNode.children[0]}
                >
                  <StepForward size={16} />
                </button>
                <button
                  type="button"
                  className={`shogi-icon-button ${branchArmed ? "is-active" : ""}`}
                  onClick={armSiblingBranch}
                  title="开分支"
                  aria-label="开分支"
                >
                  <GitBranch size={16} />
                </button>
                <button
                  type="button"
                  className="shogi-icon-button danger"
                  onClick={deleteCurrentNode}
                  title="删除当前节点"
                  aria-label="删除当前节点"
                  disabled={currentId === ROOT_ID}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="shogi-current-move">
              <span>{currentNode.move ? currentNode.moveNumber.toString().padStart(2, "0") : "00"}</span>
              <strong>{currentNode.move?.notation ?? "初期局面"}</strong>
              <em>{currentNode.children.length} NEXT</em>
            </div>

            <div className="shogi-tree-scroll">{renderTree(ROOT_ID)}</div>

            <label className="shogi-comment-box">
              <span>COMMENT BUFFER</span>
              <textarea
                value={currentNode.comment}
                onChange={(event) => updateComment(event.target.value)}
                placeholder="节点注释"
              />
            </label>
          </section>

          <aside className="shogi-side-stack">
            <section className="shogi-panel" aria-label="setup controls">
              <div className="shogi-panel-head">
                <div>
                  <p>PIECE BAY</p>
                  <h2>摆放</h2>
                </div>
                <div className="shogi-tool-row">
                  <button
                    type="button"
                    className="shogi-icon-button"
                    onClick={flipSelectedOwner}
                    title="反转所选阵营"
                    aria-label="反转所选阵营"
                    disabled={!selectedBoardPiece}
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    type="button"
                    className="shogi-icon-button"
                    onClick={toggleSelectedPromotion}
                    title="切换所选升变"
                    aria-label="切换所选升变"
                    disabled={!selectedBoardPiece || !PROMOTABLE.includes(selectedBoardPiece.kind)}
                  >
                    <Save size={16} />
                  </button>
                  <button
                    type="button"
                    className="shogi-icon-button danger"
                    onClick={removeSelectedPiece}
                    title="移除所选棋子"
                    aria-label="移除所选棋子"
                    disabled={!selectedBoardPiece}
                  >
                    <Eraser size={16} />
                  </button>
                </div>
              </div>

              <div className="shogi-segmented" role="group" aria-label="setup owner">
                {(["sente", "gote"] as Player[]).map((owner) => (
                  <button
                    type="button"
                    key={owner}
                    className={setupOwner === owner ? "is-active" : ""}
                    onClick={() => {
                      setSetupOwner(owner);
                      if (selection?.source === "palette") {
                        setSelection({ ...selection, owner });
                      }
                    }}
                  >
                    {PLAYER_META[owner].mark} {PLAYER_META[owner].label}
                  </button>
                ))}
              </div>

              <div className="shogi-segmented" role="group" aria-label="setup promotion">
                <button
                  type="button"
                  className={!setupPromoted ? "is-active" : ""}
                  onClick={() => {
                    setSetupPromoted(false);
                    if (selection?.source === "palette") {
                      setSelection({ ...selection, promoted: false });
                    }
                  }}
                >
                  生駒
                </button>
                <button
                  type="button"
                  className={setupPromoted ? "is-active" : ""}
                  onClick={() => {
                    setSetupPromoted(true);
                    if (selection?.source === "palette") {
                      setSelection({
                        ...selection,
                        promoted: PROMOTABLE.includes(selection.kind),
                      });
                    }
                  }}
                >
                  成駒
                </button>
              </div>

              <div className="shogi-palette">
                {PIECE_ORDER.map((kind) => {
                  const isSelected = selection?.source === "palette" && selection.kind === kind;
                  const display =
                    setupPromoted && PROMOTABLE.includes(kind)
                      ? PROMOTED_LABELS[kind] ?? PIECE_LABELS[kind]
                      : PIECE_LABELS[kind];

                  return (
                    <button
                      type="button"
                      key={kind}
                      className={`shogi-palette-piece ${isSelected ? "is-selected" : ""}`}
                      onClick={() => selectPalettePiece(kind)}
                      title={`${PLAYER_META[setupOwner].label}${display}`}
                      aria-label={`${PLAYER_META[setupOwner].label}${display}`}
                    >
                      <span className={setupOwner === "gote" ? "is-gote" : ""}>{display}</span>
                    </button>
                  );
                })}
              </div>

              <div className="shogi-action-grid">
                <button type="button" onClick={clearPosition}>
                  <Eraser size={15} />
                  清空局面
                </button>
                <button type="button" onClick={resetToInitial}>
                  <RotateCcw size={15} />
                  平手初形
                </button>
              </div>
            </section>

            <section className="shogi-panel" aria-label="export kifu">
              <div className="shogi-panel-head">
                <div>
                  <p>EXPORT BUS</p>
                  <h2>导出</h2>
                </div>
                <FileText size={18} className="text-cyan-300" />
              </div>

              <div className="shogi-export-actions">
                <button type="button" onClick={exportKif}>
                  <ArrowDownToLine size={16} />
                  KIF
                </button>
                <button type="button" onClick={exportJson}>
                  <FileJson size={16} />
                  JSON
                </button>
                <button type="button" onClick={copyKif}>
                  <ClipboardCopy size={16} />
                  {copyState === "copied" ? "COPIED" : "COPY"}
                </button>
              </div>

              <pre className="shogi-kif-preview">{kifPreview}</pre>
            </section>

            <section className="shogi-panel" aria-label="active line">
              <div className="shogi-panel-head">
                <div>
                  <p>ACTIVE LINE</p>
                  <h2>主线</h2>
                </div>
                <span className="shogi-node-count">{moveLine.length}</span>
              </div>
              <div className="shogi-line-list">
                {moveLine.length === 0 ? (
                  <span className="shogi-empty-state">NO MOVES</span>
                ) : (
                  moveLine.map((node) => (
                    <button
                      type="button"
                      key={node.id}
                      className={node.id === currentId ? "is-active" : ""}
                      onClick={() => setCurrentId(node.id)}
                    >
                      <span>{node.moveNumber}</span>
                      <strong>{node.move?.notation}</strong>
                    </button>
                  ))
                )}
              </div>
            </section>
          </aside>
        </div>
      </div>

      <style>{`
        .shogi-page {
          background:
            radial-gradient(circle at 18% 8%, rgba(34, 211, 238, 0.16), transparent 28rem),
            radial-gradient(circle at 88% 20%, rgba(244, 114, 182, 0.09), transparent 24rem),
            linear-gradient(180deg, #02050a 0%, #04070d 48%, #080706 100%);
        }

        .shogi-scanline {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.055) 0,
            rgba(255, 255, 255, 0.055) 1px,
            transparent 1px,
            transparent 5px
          );
          opacity: 0.18;
          mix-blend-mode: screen;
        }

        .shogi-grid-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.07) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.72), transparent 78%);
        }

        .shogi-header,
        .shogi-panel {
          border: 1px solid rgba(103, 232, 249, 0.18);
          background: linear-gradient(180deg, rgba(4, 10, 18, 0.92), rgba(3, 7, 12, 0.78));
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.045);
          backdrop-filter: blur(18px);
          border-radius: 6px;
        }

        .shogi-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.15rem;
        }

        .shogi-kicker,
        .shogi-panel-head p {
          color: rgba(34, 211, 238, 0.74);
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.28em;
          margin: 0 0 0.25rem;
          text-transform: uppercase;
        }

        .shogi-header h1,
        .shogi-panel-head h2 {
          margin: 0;
          color: #edf7ff;
          font-weight: 900;
          letter-spacing: 0;
        }

        .shogi-header h1 {
          font-size: clamp(1.35rem, 2.2rem, 2.2rem);
          text-shadow: 0 0 18px rgba(34, 211, 238, 0.2);
        }

        .shogi-status-strip {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: 0.5rem;
          align-items: center;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .shogi-status-strip span {
          border: 1px solid rgba(148, 163, 184, 0.18);
          background: rgba(2, 6, 12, 0.72);
          padding: 0.45rem 0.55rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        .shogi-workspace {
          display: grid;
          grid-template-columns: minmax(520px, 0.95fr) minmax(320px, 0.55fr) minmax(350px, 0.58fr);
          gap: 1rem;
          align-items: start;
        }

        .shogi-panel {
          min-width: 0;
          padding: 1rem;
        }

        .shogi-board-panel {
          position: sticky;
          top: 7rem;
        }

        .shogi-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.9rem;
        }

        .shogi-panel-head h2 {
          font-size: 1rem;
        }

        .shogi-tool-row,
        .shogi-export-actions,
        .shogi-action-grid {
          display: flex;
          gap: 0.45rem;
          align-items: center;
        }

        .shogi-icon-button,
        .shogi-mini-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(103, 232, 249, 0.18);
          background: rgba(8, 16, 28, 0.82);
          color: #94a3b8;
          transition: border-color 160ms ease, color 160ms ease, background 160ms ease, box-shadow 160ms ease;
          border-radius: 4px;
        }

        .shogi-icon-button {
          width: 2.1rem;
          height: 2.1rem;
        }

        .shogi-mini-button {
          width: 1.25rem;
          height: 1.25rem;
        }

        .shogi-icon-button:hover:not(:disabled),
        .shogi-mini-button:hover:not(:disabled),
        .shogi-icon-button.is-active {
          border-color: rgba(34, 211, 238, 0.64);
          background: rgba(8, 47, 73, 0.72);
          color: #cffafe;
          box-shadow: 0 0 18px rgba(34, 211, 238, 0.16);
        }

        .shogi-icon-button.danger:hover:not(:disabled) {
          border-color: rgba(244, 63, 94, 0.74);
          color: #fecdd3;
          box-shadow: 0 0 18px rgba(244, 63, 94, 0.16);
        }

        .shogi-icon-button:disabled,
        .shogi-mini-button:disabled {
          opacity: 0.35;
        }

        .shogi-board-shell {
          display: grid;
          gap: 0.35rem;
        }

        .shogi-file-labels {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          margin-left: 1.35rem;
          color: rgba(251, 191, 36, 0.78);
          font-size: 0.72rem;
          font-weight: 800;
          text-align: center;
        }

        .shogi-board-row {
          display: grid;
          grid-template-columns: 1rem minmax(0, 1fr);
          gap: 0.35rem;
          align-items: stretch;
        }

        .shogi-rank-labels {
          display: grid;
          grid-template-rows: repeat(9, 1fr);
          color: rgba(251, 191, 36, 0.78);
          font-size: 0.72rem;
          font-weight: 800;
          text-align: center;
        }

        .shogi-rank-labels span {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .shogi-board {
          display: grid;
          grid-template-columns: repeat(9, minmax(0, 1fr));
          aspect-ratio: 1 / 1;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          border: 3px solid #2a1608;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.16), transparent 22%),
            linear-gradient(90deg, rgba(120, 53, 15, 0.16), transparent 28%, rgba(120, 53, 15, 0.22) 62%, transparent),
            #d69a48;
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.58), 0 0 0 1px rgba(251, 191, 36, 0.16);
        }

        .shogi-square {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(67, 31, 8, 0.68);
          background: transparent;
          min-width: 0;
          min-height: 0;
          transition: background 140ms ease, box-shadow 140ms ease;
        }

        .shogi-square:hover {
          background: rgba(255, 247, 237, 0.18);
          box-shadow: inset 0 0 0 1px rgba(6, 182, 212, 0.48);
        }

        .shogi-square.is-selected {
          background: rgba(6, 182, 212, 0.22);
          box-shadow: inset 0 0 0 2px rgba(8, 145, 178, 0.88), 0 0 18px rgba(34, 211, 238, 0.28);
        }

        .shogi-square.is-last-move::after {
          content: "";
          position: absolute;
          inset: 0.34rem;
          border: 1px solid rgba(244, 63, 94, 0.58);
          pointer-events: none;
        }

        .shogi-piece {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72%;
          height: 84%;
          clip-path: polygon(50% 1%, 92% 22%, 84% 100%, 16% 100%, 8% 22%);
          border: 1px solid rgba(67, 31, 8, 0.82);
          background:
            linear-gradient(160deg, rgba(255, 251, 235, 0.98), rgba(241, 198, 115, 0.96) 55%, rgba(180, 83, 9, 0.82)),
            #f5c36b;
          color: #251407;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0.55rem 0.8rem rgba(53, 23, 5, 0.28);
        }

        .shogi-piece.is-gote,
        .shogi-palette-piece span.is-gote {
          transform: rotate(180deg);
        }

        .shogi-piece span {
          display: block;
          writing-mode: vertical-rl;
          font-family: "FZSTK", "A-OTF-HASETOPPOSTD-DEBOLD", serif;
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: 0;
          line-height: 1;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
        }

        .shogi-hands {
          display: grid;
          gap: 0.55rem;
          margin-top: 0.9rem;
        }

        .shogi-hand-tray {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 0.7rem;
          align-items: center;
          border: 1px solid rgba(148, 163, 184, 0.14);
          background: rgba(2, 6, 12, 0.48);
          padding: 0.55rem;
          border-radius: 4px;
        }

        .shogi-hand-owner {
          min-width: 3.6rem;
          color: #e2e8f0;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .shogi-hand-owner span {
          margin-right: 0.25rem;
          color: #67e8f9;
        }

        .shogi-hand-pieces {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 0.35rem;
        }

        .shogi-hand-unit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
        }

        .shogi-hand-piece {
          display: grid;
          min-width: 2.4rem;
          border: 1px solid rgba(251, 191, 36, 0.16);
          background: rgba(41, 25, 12, 0.78);
          color: #fde68a;
          padding: 0.3rem 0.38rem;
          border-radius: 4px;
          transition: border-color 160ms ease, background 160ms ease;
        }

        .shogi-hand-piece:hover,
        .shogi-hand-piece.is-selected {
          border-color: rgba(251, 191, 36, 0.68);
          background: rgba(120, 53, 15, 0.74);
        }

        .shogi-hand-piece span {
          font-size: 0.78rem;
          font-weight: 900;
        }

        .shogi-hand-piece b {
          color: #f8fafc;
          font-size: 0.65rem;
          line-height: 1;
        }

        .shogi-tree-panel {
          min-height: 720px;
        }

        .shogi-current-move {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          gap: 0.6rem;
          align-items: center;
          border: 1px solid rgba(34, 211, 238, 0.2);
          background: rgba(8, 47, 73, 0.26);
          color: #e0f2fe;
          padding: 0.72rem;
          border-radius: 4px;
          margin-bottom: 0.75rem;
        }

        .shogi-current-move span,
        .shogi-tree-node span {
          color: #67e8f9;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .shogi-current-move strong,
        .shogi-tree-node strong {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .shogi-current-move em,
        .shogi-tree-node em {
          color: #fbbf24;
          font-size: 0.62rem;
          font-style: normal;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .shogi-tree-scroll {
          max-height: 360px;
          overflow: auto;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(0, 0, 0, 0.18);
          padding: 0.55rem;
          border-radius: 4px;
        }

        .shogi-tree-branch {
          margin-left: calc(var(--depth) * 0.85rem);
        }

        .shogi-tree-node {
          display: grid;
          grid-template-columns: 2.1rem minmax(0, 1fr) auto;
          gap: 0.45rem;
          align-items: center;
          width: 100%;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(2, 6, 12, 0.6);
          color: #cbd5e1;
          margin-bottom: 0.32rem;
          padding: 0.48rem 0.52rem;
          text-align: left;
          border-radius: 4px;
          transition: border-color 160ms ease, background 160ms ease;
        }

        .shogi-tree-node:hover,
        .shogi-tree-node.is-active {
          border-color: rgba(34, 211, 238, 0.52);
          background: rgba(8, 47, 73, 0.54);
        }

        .shogi-comment-box {
          display: grid;
          gap: 0.45rem;
          margin-top: 0.8rem;
        }

        .shogi-comment-box span {
          color: rgba(34, 211, 238, 0.72);
          font-size: 0.64rem;
          font-weight: 900;
          letter-spacing: 0.22em;
        }

        .shogi-comment-box textarea {
          min-height: 150px;
          resize: vertical;
          border: 1px solid rgba(103, 232, 249, 0.16);
          background: rgba(2, 6, 12, 0.74);
          color: #e2e8f0;
          font-size: 0.86rem;
          line-height: 1.55;
          border-radius: 4px;
        }

        .shogi-side-stack {
          display: grid;
          gap: 1rem;
        }

        .shogi-segmented {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.35rem;
          margin-bottom: 0.6rem;
        }

        .shogi-segmented button,
        .shogi-action-grid button,
        .shogi-export-actions button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          min-height: 2.2rem;
          border: 1px solid rgba(103, 232, 249, 0.16);
          background: rgba(8, 16, 28, 0.74);
          color: #cbd5e1;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          border-radius: 4px;
          transition: border-color 160ms ease, background 160ms ease, color 160ms ease;
        }

        .shogi-segmented button:hover,
        .shogi-segmented button.is-active,
        .shogi-action-grid button:hover,
        .shogi-export-actions button:hover {
          border-color: rgba(34, 211, 238, 0.58);
          background: rgba(8, 47, 73, 0.58);
          color: #ecfeff;
        }

        .shogi-palette {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.45rem;
          margin: 0.8rem 0;
        }

        .shogi-palette-piece {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
          border: 1px solid rgba(251, 191, 36, 0.18);
          background:
            linear-gradient(160deg, rgba(255, 251, 235, 0.95), rgba(245, 158, 11, 0.78)),
            #f5c36b;
          color: #251407;
          clip-path: polygon(50% 1%, 92% 22%, 84% 100%, 16% 100%, 8% 22%);
          transition: filter 160ms ease, transform 160ms ease, box-shadow 160ms ease;
        }

        .shogi-palette-piece:hover,
        .shogi-palette-piece.is-selected {
          filter: brightness(1.08);
          transform: translateY(-2px);
          box-shadow: 0 0 18px rgba(251, 191, 36, 0.26);
        }

        .shogi-palette-piece span {
          writing-mode: vertical-rl;
          font-family: "FZSTK", "A-OTF-HASETOPPOSTD-DEBOLD", serif;
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: 0;
        }

        .shogi-action-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .shogi-export-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 0.8rem;
        }

        .shogi-kif-preview {
          max-height: 220px;
          overflow: auto;
          white-space: pre-wrap;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(0, 0, 0, 0.32);
          color: #bae6fd;
          font-size: 0.7rem;
          line-height: 1.55;
          padding: 0.8rem;
          border-radius: 4px;
        }

        .shogi-node-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border: 1px solid rgba(34, 211, 238, 0.22);
          background: rgba(8, 47, 73, 0.4);
          color: #67e8f9;
          font-weight: 900;
          border-radius: 4px;
        }

        .shogi-line-list {
          display: grid;
          gap: 0.35rem;
          max-height: 220px;
          overflow: auto;
        }

        .shogi-line-list button {
          display: grid;
          grid-template-columns: 2rem minmax(0, 1fr);
          gap: 0.5rem;
          align-items: center;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(2, 6, 12, 0.48);
          color: #cbd5e1;
          padding: 0.45rem 0.52rem;
          text-align: left;
          border-radius: 4px;
        }

        .shogi-line-list button.is-active,
        .shogi-line-list button:hover {
          border-color: rgba(251, 191, 36, 0.52);
          background: rgba(120, 53, 15, 0.34);
        }

        .shogi-line-list span,
        .shogi-empty-state {
          color: #67e8f9;
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .shogi-line-list strong {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .shogi-empty-state {
          border: 1px dashed rgba(148, 163, 184, 0.18);
          padding: 0.8rem;
          text-align: center;
          border-radius: 4px;
        }

        @media (max-width: 1280px) {
          .shogi-workspace {
            grid-template-columns: minmax(0, 1fr) minmax(320px, 0.6fr);
          }

          .shogi-side-stack {
            grid-column: 1 / -1;
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .shogi-board-panel {
            position: static;
          }
        }

        @media (max-width: 900px) {
          .shogi-header {
            align-items: stretch;
            flex-direction: column;
          }

          .shogi-status-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .shogi-workspace,
          .shogi-side-stack {
            grid-template-columns: 1fr;
          }

          .shogi-tree-panel {
            min-height: 0;
          }
        }

        @media (max-width: 640px) {
          .shogi-page {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }

          .shogi-panel {
            padding: 0.75rem;
          }

          .shogi-piece span {
            font-size: 0.82rem;
          }

          .shogi-hand-tray {
            grid-template-columns: 1fr;
          }

          .shogi-hand-pieces {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .shogi-palette {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .shogi-file-labels,
          .shogi-rank-labels {
            font-size: 0.62rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ShogiKifu;
