import { StepBack, StepForward, Trash2 } from "lucide-react";
import type { KifuNode } from "./types";

type TreePanelProps = {
  nodes: Record<string, KifuNode>;
  currentId: string;
  currentNode: KifuNode;
  onSelectNode: (nodeId: string) => void;
  onStepBack: () => void;
  onStepForward: () => void;
  onDeleteCurrent: () => void;
  onCommentChange: (value: string) => void;
};

const getNodeLabel = (node?: KifuNode) => node?.move?.notation ?? "初期局面";

const getMoveNumberLabel = (node?: KifuNode) =>
  node?.move ? node.moveNumber.toString().padStart(2, "0") : "00";

export const TreePanel = ({
  nodes,
  currentId,
  currentNode,
  onSelectNode,
  onStepBack,
  onStepForward,
  onDeleteCurrent,
  onCommentChange,
}: TreePanelProps) => {
  const activePathIds = (() => {
    const path: string[] = [];
    let nextId: string | undefined = currentId;
    while (nextId) {
      path.push(nextId);
      nextId = nodes[nextId]?.parentId;
    }
    return path.reverse();
  })();

  const routeNodes = activePathIds.map((nodeId) => nodes[nodeId]).filter(Boolean);
  const parentNode = currentNode.parentId ? nodes[currentNode.parentId] : undefined;
  const siblingIds = parentNode?.children ?? [];
  const branchPoints = activePathIds
    .map((nodeId, index) => {
      const node = nodes[nodeId];
      const nextId = activePathIds[index + 1];
      if (!node || node.children.length <= 1 || !nextId) return null;
      return {
        node,
        selectedChildId: nextId,
        selectedIndex: node.children.indexOf(nextId),
      };
    })
    .filter((entry): entry is { node: KifuNode; selectedChildId: string; selectedIndex: number } => Boolean(entry));

  return (
    <section className="shogi-panel shogi-tree-panel" aria-label="move tree and annotation">
      <div className="shogi-panel-head">
        <div>
          <p>KIFU ROUTE</p>
          <h2>路线</h2>
        </div>
        <div className="shogi-tool-row">
          <button type="button" className="shogi-icon-button" onClick={onStepBack} title="回到上一手 (←)" aria-label="回到上一手，快捷键左方向键" disabled={!currentNode.parentId}>
            <StepBack size={16} />
          </button>
          <button type="button" className="shogi-icon-button" onClick={onStepForward} title="进入主线下一手 (→)" aria-label="进入主线下一手，快捷键右方向键" disabled={!currentNode.children[0]}>
            <StepForward size={16} />
          </button>
          <button type="button" className="shogi-icon-button danger" onClick={onDeleteCurrent} title="删除当前节点 (Delete)" aria-label="删除当前节点，快捷键 Delete" disabled={currentId === "root"}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="shogi-current-move">
        <span>{getMoveNumberLabel(currentNode)}</span>
        <strong>{getNodeLabel(currentNode)}</strong>
        <em>{currentNode.children.length} NEXT</em>
      </div>

      <div className="shogi-route-section">
        <div className="shogi-route-title">
          <span>ACTIVE ROUTE</span>
          <strong>{routeNodes.length - 1} MOVES</strong>
        </div>
        <div className="shogi-route-list">
          {routeNodes.map((node) => (
            <button
              type="button"
              key={node.id}
              className={node.id === currentId ? "is-active" : ""}
              onClick={() => onSelectNode(node.id)}
            >
              <span>{getMoveNumberLabel(node)}</span>
              <strong>{getNodeLabel(node)}</strong>
              {node.children.length > 1 && <em>{node.children.length} choices</em>}
            </button>
          ))}
        </div>
      </div>

      <div className="shogi-branch-breadcrumbs">
        {branchPoints.length === 0 ? (
          <span>NO BRANCH ON THIS ROUTE</span>
        ) : (
          branchPoints.map(({ node, selectedChildId, selectedIndex }) => (
            <button type="button" key={`${node.id}-${selectedChildId}`} onClick={() => onSelectNode(selectedChildId)}>
              <span>{node.moveNumber}手目</span>
              <strong>{String.fromCharCode(65 + Math.max(selectedIndex, 0))}</strong>
            </button>
          ))
        )}
      </div>

      <div className="shogi-choice-grid" aria-label="current variation choices">
        <div className="shogi-route-title">
          <span>THIS POSITION</span>
          <strong>{siblingIds.length || 1} CHOICES</strong>
        </div>
        <div className="shogi-choice-list">
          {siblingIds.length <= 1 ? (
            <span className="shogi-choice-empty">当前手没有同局面变化</span>
          ) : (
            siblingIds.map((childId, index) => {
              const child = nodes[childId];
              if (!child) return null;
              const label = index === 0 ? "主线" : `变化 ${index}`;
              return (
                <button
                  type="button"
                  key={childId}
                  className={childId === currentId ? "is-active" : ""}
                  onClick={() => onSelectNode(childId)}
                >
                  <span>{label}</span>
                  <strong>{getNodeLabel(child)}</strong>
                  <em>{child.children.length} next</em>
                </button>
              );
            })
          )}
        </div>
      </div>

      <div className="shogi-next-choices" aria-label="next move choices">
        <div className="shogi-route-title">
          <span>NEXT MOVES</span>
          <strong>{currentNode.children.length} AVAILABLE</strong>
        </div>
        <div className="shogi-next-list">
          {currentNode.children.length === 0 ? (
            <span className="shogi-choice-empty">当前局面没有后续手</span>
          ) : (
            currentNode.children.map((childId, index) => {
              const child = nodes[childId];
              if (!child) return null;
              return (
                <button type="button" key={childId} onClick={() => onSelectNode(childId)}>
                  <span>{String.fromCharCode(65 + index)}</span>
                  <strong>{getNodeLabel(child)}</strong>
                </button>
              );
            })
          )}
        </div>
      </div>

      <label className="shogi-comment-box">
        <span>COMMENT BUFFER</span>
        <textarea
          value={currentNode.comment}
          onChange={(event) => onCommentChange(event.target.value)}
          placeholder="节点注释"
        />
      </label>
    </section>
  );
};
