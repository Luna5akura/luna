import React from "react";
import { BoardPanel } from "./ShogiKifu/BoardPanel";
import { Header } from "./ShogiKifu/Header";
import { SideStack } from "./ShogiKifu/SideStack";
import { TreePanel } from "./ShogiKifu/TreePanel";
import { STORED_KIFU_FILES } from "./ShogiKifu/storedKifu";
import { useShogiKifuController } from "./ShogiKifu/useShogiKifuController";
import { useShogiKeyboardShortcuts } from "./ShogiKifu/useShogiKeyboardShortcuts";
import "./ShogiKifu/styles.css";

const ShogiKifu: React.FC = () => {
  const shogi = useShogiKifuController();
  useShogiKeyboardShortcuts(shogi);

  return (
    <section className="shogi-page relative min-h-screen overflow-hidden px-4 pb-20 pt-36 text-slate-100 md:px-8 md:pt-40">
      <div className="shogi-scanline" aria-hidden="true" />
      <div className="shogi-grid-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1540px] flex-col gap-4">
        <Header
          nextPlayer={shogi.nextPlayer}
          moveNumber={shogi.currentNode.moveNumber}
          nodeCount={Object.keys(shogi.nodes).length}
          branchArmed={shogi.branchArmed}
        />

        <div className="shogi-workspace">
          <BoardPanel
            board={shogi.board}
            hands={shogi.hands}
            mode={shogi.mode}
            nextPlayer={shogi.nextPlayer}
            notice={shogi.notice}
            selection={shogi.selection}
            pendingPromotion={shogi.pendingPromotion}
            pendingPromotionPiece={shogi.pendingPromotionPiece}
            lastFrom={shogi.currentNode.move?.from}
            lastTo={shogi.currentNode.move?.to}
            onSetMode={shogi.setModeAndClear}
            onBoardClick={shogi.handleBoardClick}
            onHandSelect={shogi.selectHandPiece}
            onHandCountChange={shogi.changeHandCount}
            onPromotionChoice={shogi.recordPendingPromotion}
          />

          <TreePanel
            nodes={shogi.nodes}
            currentId={shogi.currentId}
            currentNode={shogi.currentNode}
            branchArmed={shogi.branchArmed}
            onSelectNode={shogi.selectNode}
            onStepBack={shogi.stepBack}
            onStepForward={shogi.stepForward}
            onArmBranch={shogi.armSiblingBranch}
            onDeleteCurrent={shogi.deleteCurrentNode}
            onCommentChange={shogi.updateComment}
          />

          <SideStack
            moveLine={shogi.moveLine}
            currentId={shogi.currentId}
            setupOwner={shogi.setupOwner}
            setupPromoted={shogi.setupPromoted}
            selection={shogi.selection}
            selectedBoardPiece={shogi.selectedBoardPiece}
            storedFiles={STORED_KIFU_FILES}
            activeStoredPath={shogi.activeStoredPath}
            copyState={shogi.copyState}
            kifPreview={shogi.kifPreview}
            onSetupOwnerChange={shogi.changeSetupOwner}
            onSetupPromotedChange={shogi.changeSetupPromoted}
            onPaletteSelect={shogi.selectPalettePiece}
            onClearPosition={shogi.clearPosition}
            onReset={shogi.resetToInitial}
            onFlipSelectedOwner={shogi.flipSelectedOwner}
            onToggleSelectedPromotion={shogi.toggleSelectedPromotion}
            onRemoveSelectedPiece={shogi.removeSelectedPiece}
            onStoredLoad={shogi.loadStoredKifu}
            onExportKif={shogi.exportKif}
            onExportJson={shogi.exportJson}
            onCopyKif={shogi.copyKif}
            onSelectLineNode={shogi.selectNode}
          />
        </div>
      </div>
    </section>
  );
};

export default ShogiKifu;
