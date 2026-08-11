import { ExportPanel } from "./ExportPanel";
import { LibraryPanel } from "./LibraryPanel";
import { LinePanel } from "./LinePanel";
import { SetupPanel } from "./SetupPanel";
import type { KifuNode, PieceKind, Player, Selection, ShogiPiece, StoredKifuFile } from "./types";

type SideStackProps = {
  moveLine: KifuNode[];
  currentId: string;
  setupOwner: Player;
  setupPromoted: boolean;
  selection: Selection;
  selectedBoardPiece: ShogiPiece | null;
  storedFiles: StoredKifuFile[];
  activeStoredPath: string;
  copyState: "idle" | "copied";
  kifPreview: string;
  onSetupOwnerChange: (owner: Player) => void;
  onSetupPromotedChange: (promoted: boolean) => void;
  onPaletteSelect: (kind: PieceKind) => void;
  onClearPosition: () => void;
  onReset: () => void;
  onFlipSelectedOwner: () => void;
  onToggleSelectedPromotion: () => void;
  onRemoveSelectedPiece: () => void;
  onStoredLoad: (file: StoredKifuFile) => void;
  onExportKif: () => void;
  onExportJson: () => void;
  onCopyKif: () => void;
  onSelectLineNode: (nodeId: string) => void;
};

export const SideStack = (props: SideStackProps) => (
  <aside className="shogi-side-stack">
    <LibraryPanel
      storedFiles={props.storedFiles}
      activeStoredPath={props.activeStoredPath}
      onStoredLoad={props.onStoredLoad}
    />
    <LinePanel moveLine={props.moveLine} currentId={props.currentId} onSelectLineNode={props.onSelectLineNode} />
    <SetupPanel
      setupOwner={props.setupOwner}
      setupPromoted={props.setupPromoted}
      selection={props.selection}
      selectedBoardPiece={props.selectedBoardPiece}
      onSetupOwnerChange={props.onSetupOwnerChange}
      onSetupPromotedChange={props.onSetupPromotedChange}
      onPaletteSelect={props.onPaletteSelect}
      onClearPosition={props.onClearPosition}
      onReset={props.onReset}
      onFlipSelectedOwner={props.onFlipSelectedOwner}
      onToggleSelectedPromotion={props.onToggleSelectedPromotion}
      onRemoveSelectedPiece={props.onRemoveSelectedPiece}
    />
    <ExportPanel
      copyState={props.copyState}
      kifPreview={props.kifPreview}
      onExportKif={props.onExportKif}
      onExportJson={props.onExportJson}
      onCopyKif={props.onCopyKif}
    />
  </aside>
);
