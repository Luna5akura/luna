import { KIF_PIECE_NAMES, RANKS, ROOT_ID } from "./constants";
import { cloneBoard, cloneHands, createRootNode, makePiece } from "./model";
import type { Board, Hands, HandKind, ImportedProject, KifuNode, KifuProjectPayload, MoveRecord, ParsedKifMove, PieceKind, Player } from "./types";

const FILES_FULL = ["９", "８", "７", "６", "５", "４", "３", "２", "１"];

const KANJI_NUMBERS: Record<string, number> = {
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
  十: 10,
};

const parseJapaneseNumber = (value: string): number => {
  if (/^\d+$/.test(value)) return Number(value);
  if (value === "十") return 10;
  if (value.startsWith("十")) return 10 + (KANJI_NUMBERS[value.slice(1)] ?? 0);
  if (value.endsWith("十")) return (KANJI_NUMBERS[value.slice(0, -1)] ?? 0) * 10;
  if (value.includes("十")) {
    const [tens, ones] = value.split("十");
    return (KANJI_NUMBERS[tens] ?? 0) * 10 + (KANJI_NUMBERS[ones] ?? 0);
  }
  return KANJI_NUMBERS[value] ?? 0;
};

const parseKifPiece = (token: string): { kind: PieceKind; promoted: boolean; owner: Player } | null => {
  const normalized = token.trim().replace(/^Ｖ/, "v");
  const owner: Player = normalized.startsWith("v") ? "gote" : "sente";
  const pieceName = normalized.replace(/^v/, "");
  const pieceInfo = KIF_PIECE_NAMES.find(([name]) => name === pieceName);
  if (!pieceInfo) return null;
  return {
    kind: pieceInfo[1],
    promoted: pieceInfo[2],
    owner,
  };
};

const parseKifBoard = (lines: string[]): Board | null => {
  const boardRows = lines
    .map((line) => line.trim())
    .map((line) => line.match(/^\|(.+)\|[一二三四五六七八九]$/))
    .filter((match): match is RegExpMatchArray => Boolean(match));

  if (boardRows.length !== 9) return null;
  const board: Board = Array.from({ length: 81 }, () => null);
  const boardCellPattern = /[vＶ]?(?:成銀|成桂|成香|龍|竜|馬|と|玉|王|飛|角|金|銀|桂|香|歩|步|・)/g;

  boardRows.forEach((match, row) => {
    // Some KIF writers omit the separator between adjacent cells, so tokenize
    // piece symbols after removing layout whitespace instead of splitting on spaces.
    const cells = match[1].replace(/\s+/g, "").match(boardCellPattern) ?? [];
    if (cells.length !== 9) return;
    cells.forEach((cell, column) => {
      if (cell === "・" || cell === ".") return;
      const piece = parseKifPiece(cell);
      if (piece) board[row * 9 + column] = makePiece(piece.kind, piece.owner, piece.promoted, `kif-${row}-${column}`);
    });
  });

  return board;
};

const parseKifHands = (lines: string[]): Hands => {
  const hands = {
    sente: { R: 0, B: 0, G: 0, S: 0, N: 0, L: 0, P: 0 },
    gote: { R: 0, B: 0, G: 0, S: 0, N: 0, L: 0, P: 0 },
  } satisfies Hands;
  const pieceMap: Array<[string, HandKind]> = [
    ["飛", "R"],
    ["角", "B"],
    ["金", "G"],
    ["銀", "S"],
    ["桂", "N"],
    ["香", "L"],
    ["歩", "P"],
  ];

  lines.forEach((line) => {
    const match = line.trim().match(/^(先手|後手)の持駒：(.+)$/);
    if (!match || match[2] === "なし") return;
    const owner: Player = match[1] === "先手" ? "sente" : "gote";
    pieceMap.forEach(([label, kind]) => {
      const pieceMatch = match[2].match(new RegExp(`${label}([一二三四五六七八九十\\d]+)`));
      if (pieceMatch) hands[owner][kind] = parseJapaneseNumber(pieceMatch[1]);
    });
  });

  return hands;
};

export const findMainlineEnd = (nodes: Record<string, KifuNode>, startId = ROOT_ID): string => {
  let nodeId = startId;
  while (nodes[nodeId]?.children[0]) nodeId = nodes[nodeId].children[0];
  return nodeId;
};

export const readJsonProject = (content: string): ImportedProject => {
  const payload = JSON.parse(content) as KifuProjectPayload;
  if (!payload.nodes?.[ROOT_ID]) throw new Error("JSON 中没有 root 节点。");

  return {
    nodes: payload.nodes,
    currentId: payload.currentId && payload.nodes[payload.currentId]
      ? payload.currentId
      : findMainlineEnd(payload.nodes),
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
  const owner = ownerFromMark ?? (moveNumber % 2 === 1 ? "sente" : "gote");
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
  const from = fromMatch ? indexFromNumericSquare(Number(fromMatch[1]), Number(fromMatch[2])) : undefined;

  return {
    moveNumber,
    owner,
    piece,
    promotedBefore,
    promotedAfter: promotedBefore || (!promotedBefore && rest.includes("成") && !rest.includes("不成")),
    from,
    to,
    drop: rest.includes("打"),
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

const applyParsedKifMove = (board: Board, hands: Hands, move: ParsedKifMove): { board: Board; hands: Hands; record: MoveRecord } => {
  const nextBoard = cloneBoard(board);
  const nextHands = cloneHands(hands);
  const from = move.drop ? undefined : move.from ?? findLooseSource(board, move);
  const moving = from !== undefined && nextBoard[from]
    ? nextBoard[from]
    : makePiece(move.piece, move.owner, move.promotedBefore, `import-${move.moveNumber}`);
  const captured = nextBoard[move.to];

  if (from !== undefined) nextBoard[from] = null;
  if (move.drop && move.piece !== "K" && nextHands[move.owner][move.piece] > 0) nextHands[move.owner][move.piece] -= 1;
  if (captured && captured.kind !== "K") nextHands[move.owner][captured.kind] += 1;

  nextBoard[move.to] = { ...moving, owner: move.owner, kind: move.piece, promoted: move.promotedAfter };

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
      captured: captured ? { kind: captured.kind, promoted: captured.promoted, owner: captured.owner } : undefined,
      notation: move.notation,
    },
  };
};

const isSameMoveRecord = (record: MoveRecord | undefined, move: ParsedKifMove): boolean =>
  Boolean(record) &&
  record.owner === move.owner &&
  record.piece === move.piece &&
  record.promotedBefore === move.promotedBefore &&
  record.promotedAfter === move.promotedAfter &&
  record.from === move.from &&
  record.to === move.to &&
  Boolean(record.drop) === move.drop;

export const readKifProject = (content: string): ImportedProject => {
  const lines = content.split(/\r?\n/);
  const root = createRootNode(parseKifBoard(lines) ?? undefined, parseKifHands(lines));
  const nodes: Record<string, KifuNode> = { [ROOT_ID]: root };
  let currentId = ROOT_ID;
  let pendingVariationMoveNumber: number | null = null;
  let importSerial = 0;
  const baseCreatedAt = Date.now();
  const mainChildParents = new Set<string>();
  const lineageByMoveNumber: Record<number, string> = { 0: ROOT_ID };

  const appendChild = (parentId: string, childId: string, isVariationStart: boolean) => {
    const parent = nodes[parentId];
    if (!parent) return;

    if (isVariationStart || mainChildParents.has(parentId)) {
      parent.children = [...parent.children, childId];
      return;
    }

    parent.children = [childId, ...parent.children];
    mainChildParents.add(parentId);
  };

  content.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) return;
    const variationMatch = line.match(/^変化：\s*(\d+)手/);
    if (variationMatch) {
      pendingVariationMoveNumber = Number(variationMatch[1]);
      return;
    }
    if (line.startsWith("*")) {
      const target = nodes[currentId] ?? nodes[ROOT_ID];
      target.comment = [target.comment, line.slice(1).trim()].filter(Boolean).join("\n");
      return;
    }
    if (line.startsWith("#") || line.includes("手数----")) return;

    const moveNumberMatch = line.match(/^\s*(\d+)\s+/);
    const moveNumber = moveNumberMatch ? Number(moveNumberMatch[1]) : NaN;
    if (!Number.isFinite(moveNumber)) return;

    const parentId = lineageByMoveNumber[moveNumber - 1];
    const parent = parentId ? nodes[parentId] : undefined;
    if (!parent) return;

    const parsed = parseKifMoveLine(line, parent.move?.to);
    if (!parsed) return;

    const matchingChildId = parent.children.find((childId) => isSameMoveRecord(nodes[childId]?.move, parsed));
    if (matchingChildId) {
      currentId = matchingChildId;
      lineageByMoveNumber[parsed.moveNumber] = matchingChildId;
      Object.keys(lineageByMoveNumber).forEach((key) => {
        if (Number(key) > parsed.moveNumber) delete lineageByMoveNumber[Number(key)];
      });
      pendingVariationMoveNumber = null;
      return;
    }

    const applied = applyParsedKifMove(parent.board, parent.hands, parsed);
    importSerial += 1;
    const nodeId = `import-${parsed.moveNumber}-${importSerial}`;
    const isVariationStart = pendingVariationMoveNumber === parsed.moveNumber;
    appendChild(parentId, nodeId, isVariationStart);
    nodes[nodeId] = {
      id: nodeId,
      parentId,
      children: [],
      move: applied.record,
      board: applied.board,
      hands: applied.hands,
      comment: "",
      moveNumber: parsed.moveNumber,
      createdAt: baseCreatedAt + importSerial,
    };

    currentId = nodeId;
    lineageByMoveNumber[parsed.moveNumber] = nodeId;
    Object.keys(lineageByMoveNumber).forEach((key) => {
      if (Number(key) > parsed.moveNumber) delete lineageByMoveNumber[Number(key)];
    });
    pendingVariationMoveNumber = null;
  });

  return { nodes, currentId: findMainlineEnd(nodes) };
};
