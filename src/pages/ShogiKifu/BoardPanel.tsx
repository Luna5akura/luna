import { Minus, MousePointer2, PenLine, Plus } from "lucide-react";
import { FILES_FULL, HAND_ORDER, PIECE_LABELS, PLAYER_META, RANKS } from "./constants";
import { getPieceAssetPath, getPieceDisplay, getSquareLabel } from "./model";
import type { Board, HandKind, Hands, PendingPromotion, Player, Selection, ShogiPiece, ToolMode } from "./types";

type BoardPanelProps = {
  board: Board;
  hands: Hands;
  mode: ToolMode;
  nextPlayer: Player;
  notice: string;
  selection: Selection;
  pendingPromotion: PendingPromotion | null;
  pendingPromotionPiece: ShogiPiece | null;
  lastFrom?: number;
  lastTo?: number;
  onSetMode: (mode: ToolMode) => void;
  onBoardClick: (index: number) => void;
  onHandSelect: (owner: Player, kind: HandKind) => void;
  onHandCountChange: (owner: Player, kind: HandKind, delta: number) => void;
  onPromotionChoice: (promote: boolean) => void;
};

export const BoardPanel = ({
  board,
  hands,
  mode,
  nextPlayer,
  notice,
  selection,
  pendingPromotion,
  pendingPromotionPiece,
  lastFrom,
  lastTo,
  onSetMode,
  onBoardClick,
  onHandSelect,
  onHandCountChange,
  onPromotionChoice,
}: BoardPanelProps) => (
  <section className={`shogi-panel shogi-board-panel ${mode === "setup" ? "is-setup-mode" : "is-record-mode"}`} aria-label="shogi board editor">
    <div className="shogi-panel-head">
      <div>
        <p>POSITION</p>
        <h2>棋盘</h2>
      </div>
      <div className="shogi-tool-row">
        <button
          type="button"
          className={`shogi-icon-button ${mode === "record" ? "is-active" : ""}`}
          onClick={() => onSetMode("record")}
          title="记录走子 (R)"
          aria-label="记录走子，快捷键 R"
        >
          <MousePointer2 size={16} />
        </button>
        <button
          type="button"
          className={`shogi-icon-button ${mode === "setup" ? "is-active" : ""}`}
          onClick={() => onSetMode("setup")}
          title="摆放棋子 (S)"
          aria-label="摆放棋子，快捷键 S"
        >
          <PenLine size={16} />
        </button>
      </div>
    </div>

    <div className="shogi-board-stage">
      <div className="shogi-board-shell">
        <div className="shogi-file-labels" aria-hidden="true">
          {FILES_FULL.map((file) => <span key={file}>{file}</span>)}
        </div>
        <div className="shogi-board-row">
          <div className="shogi-rank-labels" aria-hidden="true">
            {RANKS.map((rank) => <span key={rank}>{rank}</span>)}
          </div>
          <div className="shogi-board" role="grid" aria-label="将棋棋盘">
            {board.map((piece, index) => {
              const isSelected = selection?.source === "board" && selection.index === index;
              const isLastMove = lastTo === index || lastFrom === index;

              return (
                <button
                  key={`${index}-${piece?.id ?? "empty"}`}
                  type="button"
                  role="gridcell"
                  className={`shogi-square ${isSelected ? "is-selected" : ""} ${isLastMove ? "is-last-move" : ""}`}
                  onClick={() => onBoardClick(index)}
                  aria-label={`${getSquareLabel(index)} ${piece ? `${PLAYER_META[piece.owner].label}${getPieceDisplay(piece)}` : "空"}`}
                >
                  {piece && (
                    <span className={`shogi-piece ${piece.owner === "gote" ? "is-gote" : "is-sente"} ${piece.promoted ? "is-promoted" : ""}`}>
                      <img
                        className="shogi-piece-art"
                        src={getPieceAssetPath(piece.kind, piece.owner, piece.promoted)}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`shogi-rule-bar ${pendingPromotion ? "is-promotion" : `is-${nextPlayer}`}`} aria-live="polite">
        {pendingPromotion && pendingPromotionPiece ? (
          <>
            <span>
              {PLAYER_META[pendingPromotionPiece.owner].mark}
              {getSquareLabel(pendingPromotion.to)}
              {PIECE_LABELS[pendingPromotionPiece.kind]} 是否升变
            </span>
            <div className="shogi-promotion-actions">
              <button type="button" onClick={() => onPromotionChoice(true)}>成</button>
              <button type="button" onClick={() => onPromotionChoice(false)}>不成</button>
            </div>
          </>
        ) : (
          <span>{notice || `${PLAYER_META[nextPlayer].mark} ${PLAYER_META[nextPlayer].label} 行棋`}</span>
        )}
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
                const isSelected = selection?.source === "hand" && selection.owner === owner && selection.kind === kind;

                return (
                  <div className="shogi-hand-unit" key={`${owner}-${kind}`}>
                    {mode === "setup" && (
                      <button
                        type="button"
                        className="shogi-mini-button"
                        onClick={() => onHandCountChange(owner, kind, -1)}
                        title="减少持驹"
                        aria-label={`减少${PLAYER_META[owner].label}${PIECE_LABELS[kind]}`}
                      >
                        <Minus size={11} />
                      </button>
                    )}
                    <button
                      type="button"
                      className={`shogi-hand-piece ${isSelected ? "is-selected" : ""}`}
                      onClick={() => onHandSelect(owner, kind)}
                      title="选择持驹打入"
                      aria-label={`${PLAYER_META[owner].label}${PIECE_LABELS[kind]} ${count}`}
                    >
                      <img
                        className={`shogi-hand-piece-art ${owner === "gote" ? "is-gote" : ""}`}
                        src={getPieceAssetPath(kind, owner)}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                      />
                      <b>{count}</b>
                    </button>
                    {mode === "setup" && (
                      <button
                        type="button"
                        className="shogi-mini-button"
                        onClick={() => onHandCountChange(owner, kind, 1)}
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
    </div>
  </section>
);
