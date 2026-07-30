import type { SparkPalette, SparkScene } from "./utils";

export const StageChrome = ({
  palette,
  scene,
  sceneIndex,
  totalScenes,
}: {
  palette: SparkPalette;
  scene: SparkScene;
  sceneIndex: number;
  totalScenes: number;
}) => (
  <>
    <div className="absolute inset-0 z-10 rounded-[2rem] border" style={{ borderColor: palette.accentSoft }} />
    <div className="absolute inset-[18px] z-10 rounded-[1.5rem] border" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
    <div className="absolute left-6 right-6 top-5 z-20 flex items-center justify-between text-[10px] uppercase tracking-[0.42em]" style={{ color: palette.inkSoft }}>
      <span>spark / text pv generator</span>
      <span>{`scene ${String(sceneIndex + 1).padStart(2, "0")} / ${String(totalScenes).padStart(2, "0")}`}</span>
    </div>
    <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.35em]" style={{ color: palette.inkSoft }}>
      <span className="truncate">{scene.cue}</span>
      <span>{scene.durationMs}ms</span>
    </div>
    <div className="absolute left-6 top-6 z-20 h-4 w-4 rounded-full border" style={{ borderColor: palette.accent }} />
    <div className="absolute right-6 top-6 z-20 h-4 w-4 rounded-full border" style={{ borderColor: palette.accent }} />
    <div className="absolute bottom-6 left-6 z-20 h-4 w-4 rounded-full border" style={{ borderColor: palette.accent }} />
    <div className="absolute bottom-6 right-6 z-20 h-4 w-4 rounded-full border" style={{ borderColor: palette.accent }} />
  </>
);
