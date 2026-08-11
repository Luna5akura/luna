import { ChevronsLeft, ChevronsRight, StepBack, StepForward, Trash2 } from "lucide-react";
import type { KifuNode } from "./types";

type MobileKifuBarProps = {
  currentId: string;
  currentNode: KifuNode;
  nodes: Record<string, KifuNode>;
  lineLength: number;
  onSelectNode: (nodeId: string) => void;
  onGoToStart: () => void;
  onStepBack: () => void;
  onStepForward: () => void;
  onGoToEnd: () => void;
  onDeleteCurrent: () => void;
};

const getNodeLabel = (node?: KifuNode) => node?.move?.notation ?? "初期局面";

const getMoveNumberLabel = (node?: KifuNode) =>
  node?.move ? node.moveNumber.toString().padStart(2, "0") : "00";

export const MobileKifuBar = ({
  currentId,
  currentNode,
  nodes,
  lineLength,
  onSelectNode,
  onGoToStart,
  onStepBack,
  onStepForward,
  onGoToEnd,
  onDeleteCurrent,
}: MobileKifuBarProps) => {
  const parentNode = currentNode.parentId ? nodes[currentNode.parentId] : undefined;
  const siblingIds = parentNode?.children ?? [];
  const nextIds = currentNode.children;
  const hasSiblingChoices = siblingIds.length > 1;
  const hasNextChoices = nextIds.length > 1;

  return (
    <section className="shogi-panel shogi-mobile-kifu-bar shogi-replay-toolbar" aria-label="棋谱打谱控制">
      <div className="shogi-mobile-kifu-top">
        <div className="shogi-mobile-kifu-current">
          <span>{getMoveNumberLabel(currentNode)}</span>
          <strong>{getNodeLabel(currentNode)}</strong>
          <em>{lineLength === 0 ? "初始局面" : `路线 ${lineLength} 手`}</em>
        </div>
        <div className="shogi-replay-actions">
          <button type="button" className="shogi-replay-button is-secondary" onClick={onGoToStart} title="回到初始局面 (Home)" aria-label="回到初始局面，快捷键 Home" disabled={currentId === "root"}>
            <ChevronsLeft size={18} />
            <span>初始</span>
          </button>
          <button type="button" className="shogi-replay-button is-secondary" onClick={onStepBack} title="回到上一手 (←)" aria-label="回到上一手，快捷键左方向键" disabled={!currentNode.parentId}>
            <StepBack size={18} />
            <span>上一手</span>
          </button>
          <button type="button" className="shogi-replay-button is-primary" onClick={onStepForward} title="进入主线下一手 (→)" aria-label="进入主线下一手，快捷键右方向键" disabled={!currentNode.children[0]}>
            <StepForward size={18} />
            <span>下一手</span>
          </button>
          <button type="button" className="shogi-replay-button is-secondary" onClick={onGoToEnd} title="跳到当前路线末尾 (End)" aria-label="跳到当前路线末尾，快捷键 End">
            <span>末尾</span>
            <ChevronsRight size={18} />
          </button>
          <button type="button" className="shogi-replay-delete" onClick={onDeleteCurrent} title="删除当前节点 (Delete)" aria-label="删除当前节点，快捷键 Delete" disabled={currentId === "root"}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {(hasSiblingChoices || hasNextChoices) && (
        <div className="shogi-mobile-variation-zone" aria-label="mobile variation choices">
          {hasSiblingChoices && (
            <div className="shogi-mobile-variation-row">
              <span>同局面</span>
              <div>
                {siblingIds.map((childId, index) => {
                  const child = nodes[childId];
                  if (!child) return null;
                  return (
                    <button
                      type="button"
                      key={childId}
                      className={childId === currentId ? "is-active" : ""}
                      onClick={() => onSelectNode(childId)}
                    >
                      <b>{index === 0 ? "主线" : `变${index}`}</b>
                      <strong>{getNodeLabel(child)}</strong>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {hasNextChoices && (
            <div className="shogi-mobile-variation-row">
              <span>下一手</span>
              <div>
                {nextIds.map((childId, index) => {
                  const child = nodes[childId];
                  if (!child) return null;
                  return (
                    <button type="button" key={childId} onClick={() => onSelectNode(childId)}>
                      <b>{String.fromCharCode(65 + index)}</b>
                      <strong>{getNodeLabel(child)}</strong>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
