export type Player = "sente" | "gote";
export type PieceKind = "K" | "R" | "B" | "G" | "S" | "N" | "L" | "P";
export type HandKind = Exclude<PieceKind, "K">;
export type ToolMode = "record" | "setup";

export type ShogiPiece = {
  id: string;
  kind: PieceKind;
  owner: Player;
  promoted: boolean;
};

export type Board = Array<ShogiPiece | null>;
export type Hands = Record<Player, Record<HandKind, number>>;

export type MoveRecord = {
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

export type KifuNode = {
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

export type Selection =
  | { source: "board"; index: number }
  | { source: "hand"; owner: Player; kind: HandKind }
  | { source: "palette"; owner: Player; kind: PieceKind; promoted: boolean }
  | null;

export type StoredKifuFile = {
  path: string;
  title: string;
  extension: "kif" | "json";
  content: string;
  category?: string;
  author?: string;
  moveCount?: number;
  description?: string;
  interest?: string;
};

export type ImportedProject = {
  nodes: Record<string, KifuNode>;
  currentId: string;
};

export type KifuProjectPayload = {
  version?: string;
  currentId?: string;
  nodes?: Record<string, KifuNode>;
};

export type ParsedKifMove = {
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

export type MoveLegality = {
  legal: boolean;
  reason?: string;
  canPromote?: boolean;
  mustPromote?: boolean;
};

export type PendingPromotion = {
  from: number;
  to: number;
};
