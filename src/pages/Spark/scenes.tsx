import React from "react";
import { motion } from "framer-motion";
import type { SparkPalette, SparkScene } from "./utils";

export interface BackgroundRenderProps {
  scene: SparkScene;
  palette: SparkPalette;
}

export interface SparkBackgroundDef {
  id: string;
  name: string;
  description: string;
  render: (props: BackgroundRenderProps) => React.ReactNode;
}

const neonGridBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at 20% 20%, ${palette.accentSoft}, transparent 30%), linear-gradient(180deg, ${palette.surfaceAlt}, ${palette.surface})`,
      }}
    />
    <div
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: `linear-gradient(${palette.inkSoft} 1px, transparent 1px), linear-gradient(90deg, ${palette.inkSoft} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        transform: "perspective(600px) rotateX(74deg) scale(1.8) translateY(22%)",
        transformOrigin: "center bottom",
      }}
    />
  </div>
);

const radialBloomBackground = ({ palette }: BackgroundRenderProps) => (
  <div
    className="absolute inset-0"
    style={{
      background: `radial-gradient(circle at center, ${palette.accentSoft} 0%, transparent 30%), radial-gradient(circle at 30% 25%, ${palette.glow} 0%, transparent 18%), linear-gradient(135deg, ${palette.surfaceAlt}, ${palette.surface})`,
    }}
  />
);

const blueprintBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundColor: palette.surface }} />
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `linear-gradient(${palette.inkSoft} 1px, transparent 1px), linear-gradient(90deg, ${palette.inkSoft} 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
    <div className="absolute left-[8%] top-[10%] h-[20%] w-[26%] rounded-full border" style={{ borderColor: palette.accentSoft }} />
    <div className="absolute right-[12%] bottom-[12%] h-[28%] w-[18%] rounded-[2rem] border" style={{ borderColor: palette.accentSoft }} />
  </div>
);

const monoPanelBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 grid grid-cols-[1.2fr_0.8fr_0.6fr] overflow-hidden">
    {[palette.surface, palette.surfaceAlt, palette.accentSoft].map((color, index) => (
      <motion.div
        key={`${palette.id}-panel-${index}`}
        initial={{ y: index % 2 === 0 ? "-100%" : "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.08 }}
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

const noiseSignalBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(120deg, ${palette.surface}, ${palette.surfaceAlt})`,
      }}
    />
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9) 0 1px, transparent 1px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.9) 0 1px, transparent 1px)",
        backgroundSize: "18px 18px, 22px 22px",
      }}
    />
    {Array.from({ length: 6 }).map((_, index) => (
      <motion.div
        key={`${palette.id}-noise-${index}`}
        initial={{ x: "-120%" }}
        animate={{ x: "140%" }}
        transition={{ duration: 7 + index, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
        className="absolute h-[1px] w-[40%]"
        style={{
          top: `${14 + index * 12}%`,
          background: `linear-gradient(90deg, transparent, ${palette.accent}, transparent)`,
          opacity: 0.4,
        }}
      />
    ))}
  </div>
);

const paperCollageBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundColor: palette.surface }} />
    {Array.from({ length: 5 }).map((_, index) => (
      <motion.div
        key={`${palette.id}-paper-${index}`}
        initial={{ opacity: 0, rotate: -10 + index * 3, y: 40 }}
        animate={{ opacity: 1, rotate: -10 + index * 3, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.06 }}
        className="absolute rounded-[2rem] border"
        style={{
          left: `${8 + index * 14}%`,
          top: `${12 + (index % 2) * 18}%`,
          width: `${22 + index * 2}%`,
          height: `${24 + (index % 3) * 6}%`,
          backgroundColor: index % 2 === 0 ? palette.accentSoft : "rgba(255,255,255,0.05)",
          borderColor: palette.inkSoft,
        }}
      />
    ))}
  </div>
);

const dataRainBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${palette.surfaceAlt}, ${palette.surface})` }} />
    {Array.from({ length: 18 }).map((_, index) => (
      <motion.div
        key={`${palette.id}-rain-${index}`}
        initial={{ y: "-15%", opacity: 0 }}
        animate={{ y: "115%", opacity: [0, 0.8, 0] }}
        transition={{
          duration: 4 + (index % 5),
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.18,
        }}
        className="absolute top-0 font-mono text-[10px] uppercase tracking-[0.3em]"
        style={{
          left: `${index * 5.2}%`,
          color: palette.inkSoft,
        }}
      >
        {Array.from({ length: 8 }).map((__, subIndex) => (
          <div key={`${index}-${subIndex}`}>{subIndex % 2 === 0 ? "01" : "SP"}</div>
        ))}
      </motion.div>
    ))}
  </div>
);

const shatteredBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(135deg, ${palette.surface}, ${palette.surfaceAlt} 45%, ${palette.accentSoft})`,
      }}
    />
    {[
      "polygon(0 0, 42% 0, 18% 100%, 0 100%)",
      "polygon(44% 0, 100% 0, 76% 100%, 20% 100%)",
      "polygon(70% 0, 100% 0, 100% 100%, 56% 100%)",
    ].map((clipPath, index) => (
      <div
        key={`${palette.id}-shard-${index}`}
        className="absolute inset-0"
        style={{
          clipPath,
          backgroundColor: index % 2 === 0 ? palette.accentSoft : "rgba(255,255,255,0.04)",
          mixBlendMode: index === 1 ? "screen" : "normal",
        }}
      />
    ))}
  </div>
);

const spotlightBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundColor: palette.surface }} />
    <div
      className="absolute inset-0"
      style={{
        background:
          `radial-gradient(circle at 50% 18%, ${palette.glow} 0%, transparent 22%), radial-gradient(circle at 50% 50%, ${palette.accentSoft} 0%, transparent 35%)`,
      }}
    />
    <div className="absolute left-1/2 top-0 h-full w-[24%] -translate-x-1/2 blur-3xl" style={{ backgroundColor: palette.accentSoft }} />
  </div>
);

const halftoneBurstBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${palette.surfaceAlt}, ${palette.surface})` }} />
    <div
      className="absolute inset-0 opacity-35"
      style={{
        backgroundImage: `radial-gradient(${palette.inkSoft} 1.2px, transparent 1.2px)`,
        backgroundSize: "18px 18px",
        maskImage: "radial-gradient(circle at 25% 35%, black, transparent 70%)",
      }}
    />
    <div className="absolute right-[-10%] top-[-12%] h-[56%] w-[46%] rounded-full" style={{ backgroundColor: palette.accentSoft, filter: "blur(24px)" }} />
  </div>
);

const auroraMeshBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundColor: palette.surface }} />
    <div className="absolute inset-[-10%] opacity-85" style={{ background: `radial-gradient(circle at 20% 30%, ${palette.glow}, transparent 22%), radial-gradient(circle at 70% 28%, ${palette.accentSoft}, transparent 24%), radial-gradient(circle at 52% 72%, ${palette.inkSoft}, transparent 20%)`, filter: "blur(40px)" }} />
  </div>
);

const checkerFlashBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: palette.surface,
        backgroundImage: `linear-gradient(45deg, ${palette.accentSoft} 25%, transparent 25%), linear-gradient(-45deg, ${palette.accentSoft} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${palette.accentSoft} 75%), linear-gradient(-45deg, transparent 75%, ${palette.accentSoft} 75%)`,
        backgroundSize: "88px 88px",
        backgroundPosition: "0 0, 0 44px, 44px -44px, -44px 0px",
      }}
    />
  </div>
);

const stageBeamsBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundColor: palette.surface }} />
    {["18%", "38%", "58%", "78%"].map((left, index) => (
      <div
        key={`${palette.id}-beam-${index}`}
        className="absolute top-[-10%] h-[120%] w-[18%]"
        style={{
          left,
          transform: `skewX(${index % 2 === 0 ? -12 : 12}deg)`,
          background: `linear-gradient(180deg, ${palette.glow}, transparent 70%)`,
          filter: "blur(10px)",
          opacity: 0.6,
        }}
      />
    ))}
  </div>
);

const foldedCurtainBackground = ({ palette }: BackgroundRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundColor: palette.surfaceAlt }} />
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={`${palette.id}-curtain-${index}`}
        className="absolute top-0 h-full"
        style={{
          left: `${index * 12.5}%`,
          width: "14%",
          background: `linear-gradient(90deg, ${index % 2 === 0 ? palette.surface : palette.surfaceAlt}, transparent)`,
          opacity: 0.8,
        }}
      />
    ))}
  </div>
);

export const BACKGROUND_REGISTRY: SparkBackgroundDef[] = [
  { id: "neon-grid", name: "Neon Grid", description: "透视地网", render: neonGridBackground },
  { id: "radial-bloom", name: "Radial Bloom", description: "中心泛光", render: radialBloomBackground },
  { id: "blueprint", name: "Blueprint", description: "蓝图构成", render: blueprintBackground },
  { id: "mono-panels", name: "Mono Panels", description: "块面切分", render: monoPanelBackground },
  { id: "noise-signal", name: "Noise Signal", description: "扫频信号", render: noiseSignalBackground },
  { id: "paper-collage", name: "Paper Collage", description: "拼贴纸片", render: paperCollageBackground },
  { id: "data-rain", name: "Data Rain", description: "数据雨幕", render: dataRainBackground },
  { id: "shattered", name: "Shattered", description: "裂片渐层", render: shatteredBackground },
  { id: "spotlight", name: "Spotlight", description: "舞台聚光", render: spotlightBackground },
  { id: "halftone-burst", name: "Halftone Burst", description: "网点爆闪", render: halftoneBurstBackground },
  { id: "aurora-mesh", name: "Aurora Mesh", description: "极光云雾", render: auroraMeshBackground },
  { id: "checker-flash", name: "Checker Flash", description: "棋盘闪屏", render: checkerFlashBackground },
  { id: "stage-beams", name: "Stage Beams", description: "舞台光束", render: stageBeamsBackground },
  { id: "folded-curtain", name: "Folded Curtain", description: "折叠幕布", render: foldedCurtainBackground },
];

export const BACKGROUND_MAP = Object.fromEntries(
  BACKGROUND_REGISTRY.map((background) => [background.id, background]),
) as Record<string, SparkBackgroundDef>;

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
