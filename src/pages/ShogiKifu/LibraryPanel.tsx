import { FolderOpen } from "lucide-react";
import type { StoredKifuFile } from "./types";

type LibraryPanelProps = {
  storedFiles: StoredKifuFile[];
  activeStoredPath: string;
  onStoredLoad: (file: StoredKifuFile) => void;
};

export const LibraryPanel = ({ storedFiles, activeStoredPath, onStoredLoad }: LibraryPanelProps) => (
  <section className="shogi-panel" aria-label="stored kifu library">
    <div className="shogi-panel-head">
      <div>
        <p>PUZZLE LIBRARY</p>
        <h2>诘将棋题库</h2>
      </div>
      <FolderOpen size={18} className="text-cyan-300" />
    </div>

    <div className="shogi-library-list">
      {storedFiles.length === 0 ? (
        <span className="shogi-empty-state">当前没有已保存棋谱</span>
      ) : (
        storedFiles.map((file) => (
          <button
            type="button"
            key={file.path}
            className={activeStoredPath === file.path ? "is-active" : ""}
            onClick={() => onStoredLoad(file)}
          >
            <span>{file.extension.toUpperCase()}</span>
            <div>
              <strong>{file.title}</strong>
              <small>
                {[file.category, file.moveCount ? `${file.moveCount} 手` : null, file.author].filter(Boolean).join(" · ")}
              </small>
              {file.description && <small className="shogi-library-source">{file.description}</small>}
              {file.interest && <small className="shogi-library-interest">{file.interest}</small>}
            </div>
          </button>
        ))
      )}
    </div>
  </section>
);
