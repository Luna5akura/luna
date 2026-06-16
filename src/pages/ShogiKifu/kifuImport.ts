import { KIF_PIECE_NAMES, RANKS, ROOT_ID } from "./constants";
import { cloneBoard, cloneHands, createRootNode, makePiece } from "./model";
import type { Board, Hands, ImportedProject, KifuNode, KifuProjectPayload, MoveRecord, ParsedKifMove } from "./types";

const FILES_FULL = ["９", "８", "７", "６", "５", "４", "３", "２", "１"];

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
  const root = createRootNode();
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
