import { ArrowDownToLine, ClipboardCopy, FileJson, FileText } from "lucide-react";

type ExportPanelProps = {
  copyState: "idle" | "copied";
  kifPreview: string;
  onExportKif: () => void;
  onExportJson: () => void;
  onCopyKif: () => void;
};

export const ExportPanel = ({ copyState, kifPreview, onExportKif, onExportJson, onCopyKif }: ExportPanelProps) => (
  <section className="shogi-panel" aria-label="export kifu">
    <div className="shogi-panel-head">
      <div>
        <p>SAVE / EXPORT</p>
        <h2>保存与导出</h2>
      </div>
      <FileText size={18} className="text-cyan-300" />
    </div>

    <div className="shogi-export-actions">
      <button type="button" onClick={onExportKif}>
        <ArrowDownToLine size={16} />
        KIF
      </button>
      <button type="button" onClick={onExportJson}>
        <FileJson size={16} />
        JSON
      </button>
      <button type="button" onClick={onCopyKif}>
        <ClipboardCopy size={16} />
        {copyState === "copied" ? "已复制" : "复制 KIF"}
      </button>
    </div>

    <pre className="shogi-kif-preview">{kifPreview}</pre>
  </section>
);
