import { Eraser, RotateCcw, Save } from "lucide-react";
import { PIECE_LABELS, PIECE_ORDER, PLAYER_META, PROMOTABLE, PROMOTED_LABELS } from "./constants";
import { getPieceAssetPath } from "./model";
import type { PieceKind, Player, Selection, ShogiPiece } from "./types";

type SetupPanelProps = {
  setupOwner: Player;
  setupPromoted: boolean;
  selection: Selection;
  selectedBoardPiece: ShogiPiece | null;
  onSetupOwnerChange: (owner: Player) => void;
  onSetupPromotedChange: (promoted: boolean) => void;
  onPaletteSelect: (kind: PieceKind) => void;
  onClearPosition: () => void;
  onReset: () => void;
  onFlipSelectedOwner: () => void;
  onToggleSelectedPromotion: () => void;
  onRemoveSelectedPiece: () => void;
};

export const SetupPanel = ({
  setupOwner,
  setupPromoted,
  selection,
  selectedBoardPiece,
  onSetupOwnerChange,
  onSetupPromotedChange,
  onPaletteSelect,
  onClearPosition,
  onReset,
  onFlipSelectedOwner,
  onToggleSelectedPromotion,
  onRemoveSelectedPiece,
}: SetupPanelProps) => (
  <section className="shogi-panel" aria-label="setup controls">
    <div className="shogi-panel-head">
      <div>
        <p>POSITION SETUP</p>
        <h2>摆局工具</h2>
      </div>
      <div className="shogi-tool-row">
        <button type="button" className="shogi-icon-button" onClick={onFlipSelectedOwner} title="反转所选阵营" aria-label="反转所选阵营" disabled={!selectedBoardPiece}>
          <RotateCcw size={16} />
        </button>
        <button type="button" className="shogi-icon-button" onClick={onToggleSelectedPromotion} title="切换所选升变" aria-label="切换所选升变" disabled={!selectedBoardPiece || !PROMOTABLE.includes(selectedBoardPiece.kind)}>
          <Save size={16} />
        </button>
        <button type="button" className="shogi-icon-button danger" onClick={onRemoveSelectedPiece} title="移除所选棋子 (Delete)" aria-label="移除所选棋子，快捷键 Delete" disabled={!selectedBoardPiece}>
          <Eraser size={16} />
        </button>
      </div>
    </div>

    <div className="shogi-segmented" role="group" aria-label="setup owner">
      {(["sente", "gote"] as Player[]).map((owner) => (
        <button type="button" key={owner} className={setupOwner === owner ? "is-active" : ""} onClick={() => onSetupOwnerChange(owner)}>
          {PLAYER_META[owner].mark} {PLAYER_META[owner].label}
        </button>
      ))}
    </div>

    <div className="shogi-segmented" role="group" aria-label="setup promotion">
      <button type="button" className={!setupPromoted ? "is-active" : ""} onClick={() => onSetupPromotedChange(false)}>
        生駒
      </button>
      <button type="button" className={setupPromoted ? "is-active" : ""} onClick={() => onSetupPromotedChange(true)}>
        成駒
      </button>
    </div>

    <div className="shogi-palette">
      {PIECE_ORDER.map((kind) => {
        const isSelected = selection?.source === "palette" && selection.kind === kind;
        const display = setupPromoted && PROMOTABLE.includes(kind)
          ? PROMOTED_LABELS[kind] ?? PIECE_LABELS[kind]
          : PIECE_LABELS[kind];

        return (
          <button type="button" key={kind} className={`shogi-palette-piece ${isSelected ? "is-selected" : ""}`} onClick={() => onPaletteSelect(kind)} title={`${PLAYER_META[setupOwner].label}${display}`} aria-label={`${PLAYER_META[setupOwner].label}${display}`}>
            <img
              className={`shogi-palette-piece-art ${setupOwner === "gote" ? "is-gote" : ""}`}
              src={getPieceAssetPath(kind, setupOwner, setupPromoted)}
              alt=""
              aria-hidden="true"
              draggable={false}
            />
          </button>
        );
      })}
    </div>

    <div className="shogi-action-grid">
      <button type="button" onClick={onClearPosition}>
        <Eraser size={15} />
        清空局面
      </button>
      <button type="button" onClick={onReset}>
        <RotateCcw size={15} />
        平手初形
      </button>
    </div>
  </section>
);
