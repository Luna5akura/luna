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
        <p>KIFU LIBRARY</p>
        <h2>棋谱库</h2>
      </div>
      <FolderOpen size={18} className="text-cyan-300" />
    </div>

    <div className="shogi-library-list">
      {storedFiles.length === 0 ? (
        <span className="shogi-empty-state">NO STORED KIFU</span>
      ) : (
        storedFiles.map((file) => (
          <button
            type="button"
            key={file.path}
            className={activeStoredPath === file.path ? "is-active" : ""}
            onClick={() => onStoredLoad(file)}
          >
            <span>{file.extension.toUpperCase()}</span>
            <strong>{file.title}</strong>
          </button>
        ))
      )}
    </div>
  </section>
);
