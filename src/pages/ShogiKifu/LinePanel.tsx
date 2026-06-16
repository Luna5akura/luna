import type { KifuNode } from "./types";

type LinePanelProps = {
  moveLine: KifuNode[];
  currentId: string;
  onSelectLineNode: (nodeId: string) => void;
};

export const LinePanel = ({ moveLine, currentId, onSelectLineNode }: LinePanelProps) => (
  <section className="shogi-panel" aria-label="active line">
    <div className="shogi-panel-head">
      <div>
        <p>ACTIVE LINE</p>
        <h2>主线</h2>
      </div>
      <span className="shogi-node-count">{moveLine.length}</span>
    </div>
    <div className="shogi-line-list">
      {moveLine.length === 0 ? (
        <span className="shogi-empty-state">NO MOVES</span>
      ) : (
        moveLine.map((node) => (
          <button
            type="button"
            key={node.id}
            className={node.id === currentId ? "is-active" : ""}
            onClick={() => onSelectLineNode(node.id)}
          >
            <span>{node.moveNumber}</span>
            <strong>{node.move?.notation}</strong>
          </button>
        ))
      )}
    </div>
  </section>
);
