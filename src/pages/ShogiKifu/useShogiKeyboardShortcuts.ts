import { useEffect } from "react";
import { ROOT_ID } from "./constants";
import { findMainlineEnd } from "./kifu";
import type { KifuNode, PendingPromotion, ShogiPiece, ToolMode } from "./types";

type ShortcutParams = {
  currentId: string;
  currentNode: KifuNode;
  mode: ToolMode;
  nodes: Record<string, KifuNode>;
  pendingPromotion: PendingPromotion | null;
  selectedBoardPiece: ShogiPiece | null;
  armSiblingBranch: () => void;
  cancelTransient: () => void;
  deleteCurrentNode: () => void;
  recordPendingPromotion: (promote: boolean) => void;
  removeSelectedPiece: () => void;
  selectNode: (nodeId: string) => void;
  setModeAndClear: (mode: ToolMode) => void;
  stepBack: () => void;
  stepForward: () => void;
};

const isEditableTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    target.closest("input, textarea, select, [contenteditable='true']") !== null
  );
};

export const useShogiKeyboardShortcuts = ({
  currentId,
  currentNode,
  mode,
  nodes,
  pendingPromotion,
  selectedBoardPiece,
  armSiblingBranch,
  cancelTransient,
  deleteCurrentNode,
  recordPendingPromotion,
  removeSelectedPiece,
  selectNode,
  setModeAndClear,
  stepBack,
  stepForward,
}: ShortcutParams) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || isEditableTarget(event.target)) return;
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      const key = event.key.toLowerCase();
      const parentNode = currentNode.parentId ? nodes[currentNode.parentId] : undefined;
      const siblingIds = parentNode?.children ?? [];
      const siblingIndex = siblingIds.indexOf(currentId);
      const nextMoveIndex = /^[1-9]$/.test(event.key) ? Number(event.key) - 1 : -1;

      if (pendingPromotion) {
        if (key === "enter" || key === "y") {
          event.preventDefault();
          recordPendingPromotion(true);
          return;
        }
        if (key === "n") {
          event.preventDefault();
          recordPendingPromotion(false);
          return;
        }
        if (key === "escape") {
          event.preventDefault();
          cancelTransient();
        }
        return;
      }

      if (nextMoveIndex >= 0 && currentNode.children[nextMoveIndex]) {
        event.preventDefault();
        selectNode(currentNode.children[nextMoveIndex]);
        return;
      }

      switch (key) {
        case "arrowleft":
          if (currentNode.parentId) {
            event.preventDefault();
            stepBack();
          }
          break;
        case "arrowright":
          if (currentNode.children[0]) {
            event.preventDefault();
            stepForward();
          }
          break;
        case "arrowup":
          if (siblingIndex > 0) {
            event.preventDefault();
            selectNode(siblingIds[siblingIndex - 1]);
          }
          break;
        case "arrowdown":
          if (siblingIndex >= 0 && siblingIndex < siblingIds.length - 1) {
            event.preventDefault();
            selectNode(siblingIds[siblingIndex + 1]);
          }
          break;
        case "home":
          if (currentId !== ROOT_ID) {
            event.preventDefault();
            selectNode(ROOT_ID);
          }
          break;
        case "end": {
          const endId = findMainlineEnd(nodes, currentId);
          if (endId !== currentId) {
            event.preventDefault();
            selectNode(endId);
          }
          break;
        }
        case "r":
          event.preventDefault();
          setModeAndClear("record");
          break;
        case "s":
          event.preventDefault();
          setModeAndClear("setup");
          break;
        case "b":
          event.preventDefault();
          armSiblingBranch();
          break;
        case "escape":
          event.preventDefault();
          cancelTransient();
          break;
        case "delete":
          if (mode === "setup" && selectedBoardPiece) {
            event.preventDefault();
            removeSelectedPiece();
          } else if (currentId !== ROOT_ID) {
            event.preventDefault();
            deleteCurrentNode();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    armSiblingBranch,
    cancelTransient,
    currentId,
    currentNode,
    deleteCurrentNode,
    mode,
    nodes,
    pendingPromotion,
    recordPendingPromotion,
    removeSelectedPiece,
    selectedBoardPiece,
    selectNode,
    setModeAndClear,
    stepBack,
    stepForward,
  ]);
};
