import React, { startTransition, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Layers3,
  Pause,
  Play,
  RefreshCcw,
  Shuffle,
  Sparkles,
  Wand2,
} from "lucide-react";
import { TEMPLATE_MAP, TEMPLATE_REGISTRY } from "./effectRegistry";
import { BACKGROUND_MAP, BACKGROUND_REGISTRY } from "./scenes";
import { StageChrome } from "./StageChrome";
import {
  CUE_BANK,
  DEFAULT_SCRIPT,
  PALETTE_REGISTRY,
  SAMPLE_IDEAS,
  SUBLINE_BANK,
  clamp,
  extractSceneLines,
  getEmphasisToken,
  makeSceneId,
  mulberry32,
  pickUnique,
  randomChoice,
  randomInt,
  splitWordsSmart,
  type SparkScene,
} from "./utils";

type FlavorId = "wild" | "impact" | "minimal" | "dream";

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200";

const SECONDARY_BUTTON =
  `${BUTTON_BASE} border-white/10 bg-white/5 text-white/82 hover:border-white/20 hover:bg-white/10`;

const PRIMARY_BUTTON =
  `${BUTTON_BASE} border-transparent bg-white text-[#050816] hover:bg-white/90`;

const FLAVOR_PRESETS: Array<{ id: FlavorId; label: string; description: string }> = [
  { id: "wild", label: "参考混剪", description: "把这批参考里的视觉母题混在一起，但仍保持克制" },
  { id: "impact", label: "黑红冲击", description: "偏 WORLD FAILED 和红黑日系短片那种压迫感" },
  { id: "minimal", label: "黑白几何", description: "偏菱形 HUD、时钟、信息面板和留白构图" },
  { id: "dream", label: "酸性波普", description: "偏 Angel / WARP / 未来包豪斯这组更轻更亮的风格" },
];

const PACE_OPTIONS = [
  { id: "fast", label: "快", durationMs: 2400 },
  { id: "medium", label: "中", durationMs: 3200 },
  { id: "slow", label: "慢", durationMs: 4200 },
] as const;

const SCENE_COUNT_OPTIONS = [6, 8, 10];

const flavorTemplateAllowList: Record<FlavorId, string[]> = {
  wild: TEMPLATE_REGISTRY.map((template) => template.id),
  impact: [
    "ref-red-noir",
    "ref-crimson-kanji",
    "ref-scan-panels",
    "ref-code-cluster",
  ],
  minimal: [
    "ref-diamond-hud",
    "ref-clock-orbit",
    "ref-scan-panels",
    "ref-code-cluster",
  ],
  dream: [
    "ref-acid-poster",
    "ref-warp-pop",
    "ref-bauhaus-blocks",
    "ref-diamond-hud",
  ],
};

const flavorBackgroundAllowList: Record<FlavorId, string[]> = {
  wild: ["shattered", "noise-signal", "spotlight", "halftone-burst", "aurora-mesh", "checker-flash", "stage-beams", "paper-collage", "blueprint"],
  impact: ["shattered", "noise-signal", "folded-curtain", "spotlight"],
  minimal: ["blueprint", "radial-bloom", "mono-panels", "spotlight"],
  dream: ["halftone-burst", "aurora-mesh", "paper-collage", "checker-flash", "stage-beams"],
};

const makeSeed = () => Math.floor(Date.now() % 100000000);

const buildStoryboard = ({
  sourceText,
  sceneCount,
  seed,
  flavor,
  templateMode,
  paletteMode,
  paceMs,
}: {
  sourceText: string;
  sceneCount: number;
  seed: number;
  flavor: FlavorId;
  templateMode: string;
  paletteMode: string;
  paceMs: number;
}) => {
  const rng = mulberry32(seed);
  const lines = extractSceneLines(sourceText, sceneCount);
  const templateCandidates =
    templateMode === "random"
      ? TEMPLATE_REGISTRY.filter((template) => flavorTemplateAllowList[flavor].includes(template.id)).map((template) => template.id)
      : [templateMode];

  const backgroundCandidates = BACKGROUND_REGISTRY.filter((background) =>
    flavorBackgroundAllowList[flavor].includes(background.id),
  ).map((background) => background.id);

  const paletteCandidates =
    paletteMode === "random"
      ? PALETTE_REGISTRY.map((palette) => palette.id)
      : [paletteMode];

  const templateOrder = pickUnique(rng, templateCandidates, templateCandidates.length);
  const backgroundOrder = pickUnique(rng, backgroundCandidates, backgroundCandidates.length);
  const paletteOrder = pickUnique(rng, paletteCandidates, paletteCandidates.length);

  return lines.map((line, index) => {
    const tokens = splitWordsSmart(line);
    const emphasis = getEmphasisToken(tokens);
    const descriptor = randomChoice(rng, SUBLINE_BANK);
    const tagTrail = tokens.slice(0, 3).join(" / ");

    return {
      id: makeSceneId(seed, index, line),
      text: line,
      subline: `${descriptor} / ${tagTrail || emphasis}`,
      cue: randomChoice(rng, CUE_BANK),
      tokens,
      emphasis,
      templateId: templateOrder[index % templateOrder.length],
      backgroundId: backgroundOrder[(index + randomInt(rng, 0, backgroundOrder.length - 1)) % backgroundOrder.length],
      paletteId: paletteOrder[(index + randomInt(rng, 0, paletteOrder.length - 1)) % paletteOrder.length],
      durationMs: clamp(paceMs + randomInt(rng, -280, 480), 1800, 5200),
    } satisfies SparkScene;
  });
};

export default function SparkEngine() {
  const [initialSeed] = useState(() => makeSeed());
  const [draftText, setDraftText] = useState(DEFAULT_SCRIPT);
  const [sceneCount, setSceneCount] = useState(8);
  const [flavor, setFlavor] = useState<FlavorId>("wild");
  const [templateMode, setTemplateMode] = useState("random");
  const [paletteMode, setPaletteMode] = useState("random");
  const [paceId, setPaceId] = useState<(typeof PACE_OPTIONS)[number]["id"]>("medium");
  const [seed, setSeed] = useState(initialSeed);
  const [storyboard, setStoryboard] = useState<SparkScene[]>(() =>
    buildStoryboard({
      sourceText: DEFAULT_SCRIPT,
      sceneCount: 8,
      seed: initialSeed,
      flavor: "wild",
      templateMode: "random",
      paletteMode: "random",
      paceMs: 3200,
    }),
  );
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const paletteMap = useMemo(
    () => Object.fromEntries(PALETTE_REGISTRY.map((palette) => [palette.id, palette])),
    [],
  ) as Record<string, (typeof PALETTE_REGISTRY)[number]>;

  const currentScene = storyboard[activeSceneIndex] ?? storyboard[0];
  const currentPalette = currentScene ? paletteMap[currentScene.paletteId] : PALETTE_REGISTRY[0];
  const currentTemplate = currentScene ? TEMPLATE_MAP[currentScene.templateId] : TEMPLATE_REGISTRY[0];
  const currentBackground = currentScene ? BACKGROUND_MAP[currentScene.backgroundId] : BACKGROUND_REGISTRY[0];
  const paceMs = PACE_OPTIONS.find((option) => option.id === paceId)?.durationMs ?? 3200;

  useEffect(() => {
    if (!autoPlay || storyboard.length === 0) return;

    const timeoutId = window.setTimeout(() => {
      setActiveSceneIndex((previous) => (previous + 1) % storyboard.length);
    }, storyboard[activeSceneIndex]?.durationMs ?? paceMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeSceneIndex, autoPlay, paceMs, storyboard]);

  useEffect(() => {
    if (activeSceneIndex <= storyboard.length - 1) return;
    setActiveSceneIndex(0);
  }, [activeSceneIndex, storyboard.length]);

  const regenerateStoryboard = (nextText = draftText, nextSeed = makeSeed()) => {
    startTransition(() => {
      setSeed(nextSeed);
      setStoryboard(
        buildStoryboard({
          sourceText: nextText,
          sceneCount,
          seed: nextSeed,
          flavor,
          templateMode,
          paletteMode,
          paceMs,
        }),
      );
      setActiveSceneIndex(0);
    });
  };

  const handleApplySample = (sampleText: string) => {
    setDraftText(sampleText);
    regenerateStoryboard(sampleText);
  };

  const handleRerollCurrentScene = () => {
    if (!currentScene) return;
    const nextSeed = makeSeed();
    const [replacement] = buildStoryboard({
      sourceText: currentScene.text,
      sceneCount: 1,
      seed: nextSeed,
      flavor,
      templateMode,
      paletteMode,
      paceMs,
    });

    setStoryboard((previous) =>
      previous.map((scene, index) =>
        index === activeSceneIndex
          ? {
              ...replacement,
              text: scene.text,
              tokens: scene.tokens,
              emphasis: scene.emphasis,
              id: makeSceneId(nextSeed, index, scene.text),
            }
          : scene,
      ),
    );
  };

  return (
    <div className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(91,224,255,0.16),transparent_28%),radial-gradient(circle_at_100%_20%,rgba(255,83,182,0.12),transparent_22%),linear-gradient(180deg,#050816_0%,#090d1f_100%)]" />

      <div className="relative mx-auto grid w-full max-w-[1620px] gap-6 px-4 py-6 lg:grid-cols-[360px_minmax(0,1fr)] xl:px-6">
        <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="relative">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.48em] text-white/45">Spark</div>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight">随机文字 PV 生成器</h1>
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.36em] text-white/55">
                seed {seed}
              </div>
            </div>

            <p className="mb-5 text-sm leading-6 text-white/64">
              这里不再是单纯的特效堆叠页，而是一个把文案拆成镜头、自动分配模板、背景和色盘的文字 PV 工作台。
            </p>

            <label className="mb-2 block text-[11px] uppercase tracking-[0.44em] text-white/46">
              Script
            </label>
            <textarea
              value={draftText}
              onChange={(event) => setDraftText(event.target.value)}
              className="h-56 w-full rounded-[1.5rem] border border-white/10 bg-[#090d1f] px-4 py-4 text-sm leading-6 text-white outline-none transition focus:border-white/25"
              placeholder="把你想做成文字 PV 的内容丢进来"
            />

            <div className="mt-4">
              <div className="mb-2 text-[11px] uppercase tracking-[0.44em] text-white/46">Ideas</div>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_IDEAS.map((idea) => (
                  <button
                    key={idea.id}
                    onClick={() => handleApplySample(idea.text)}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/74 transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    {idea.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.44em] text-white/46">镜头数</span>
                <select
                  value={sceneCount}
                  onChange={(event) => setSceneCount(Number(event.target.value))}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm outline-none transition focus:border-white/25"
                >
                  {SCENE_COUNT_OPTIONS.map((count) => (
                    <option key={count} value={count} className="bg-[#0b1023]">
                      {count} scenes
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.44em] text-white/46">节奏</span>
                <select
                  value={paceId}
                  onChange={(event) => setPaceId(event.target.value as (typeof PACE_OPTIONS)[number]["id"])}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm outline-none transition focus:border-white/25"
                >
                  {PACE_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id} className="bg-[#0b1023]">
                      {option.label} / {option.durationMs}ms
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.44em] text-white/46">风格预设</span>
                <select
                  value={flavor}
                  onChange={(event) => setFlavor(event.target.value as FlavorId)}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm outline-none transition focus:border-white/25"
                >
                  {FLAVOR_PRESETS.map((preset) => (
                    <option key={preset.id} value={preset.id} className="bg-[#0b1023]">
                      {preset.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.44em] text-white/46">模板</span>
                <select
                  value={templateMode}
                  onChange={(event) => setTemplateMode(event.target.value)}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm outline-none transition focus:border-white/25"
                >
                  <option value="random" className="bg-[#0b1023]">
                    随机模板池
                  </option>
                  {TEMPLATE_REGISTRY.map((template) => (
                    <option key={template.id} value={template.id} className="bg-[#0b1023]">
                      {template.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.44em] text-white/46">色盘</span>
                <select
                  value={paletteMode}
                  onChange={(event) => setPaletteMode(event.target.value)}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm outline-none transition focus:border-white/25"
                >
                  <option value="random" className="bg-[#0b1023]">
                    随机色盘
                  </option>
                  {PALETTE_REGISTRY.map((palette) => (
                    <option key={palette.id} value={palette.id} className="bg-[#0b1023]">
                      {palette.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button onClick={() => regenerateStoryboard()} className={PRIMARY_BUTTON}>
                <Wand2 className="h-4 w-4" />
                生成整支 PV
              </button>
              <button onClick={() => regenerateStoryboard(draftText, makeSeed())} className={SECONDARY_BUTTON}>
                <Shuffle className="h-4 w-4" />
                重骰随机结果
              </button>
              <button onClick={handleRerollCurrentScene} className={SECONDARY_BUTTON}>
                <RefreshCcw className="h-4 w-4" />
                重做当前镜头
              </button>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-white/46">
                <Sparkles className="h-3.5 w-3.5" />
                当前策略
              </div>
              <div className="space-y-2 text-sm text-white/68">
                <div>{FLAVOR_PRESETS.find((preset) => preset.id === flavor)?.description}</div>
                <div>模板数: {TEMPLATE_REGISTRY.length} / 背景数: {BACKGROUND_REGISTRY.length}</div>
                <div>适合把歌词、告白、预告片台词、人物独白直接转成文字 PV 草案。</div>
                <div>这一版会更贴近你给的参考：黑红压迫、酸性波普、黑白几何、钟盘轨道、代码散点、包豪斯块面。</div>
              </div>
            </div>
          </div>
        </aside>

        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
            <div>
              <div className="text-[11px] uppercase tracking-[0.48em] text-white/45">Now Playing</div>
              <div className="mt-2 text-xl font-semibold">
                {currentScene?.text ?? "暂无镜头"}
              </div>
              <div className="mt-1 text-sm text-white/56">
                {currentTemplate?.name} / {currentBackground?.name} / {currentPalette?.name}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setAutoPlay((previous) => !previous)}
                className={SECONDARY_BUTTON}
              >
                {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {autoPlay ? "暂停轮播" : "继续轮播"}
              </button>
              <button
                onClick={() => setActiveSceneIndex((previous) => (previous - 1 + storyboard.length) % storyboard.length)}
                className={SECONDARY_BUTTON}
              >
                <ChevronLeft className="h-4 w-4" />
                上一镜
              </button>
              <button
                onClick={() => setActiveSceneIndex((previous) => (previous + 1) % storyboard.length)}
                className={SECONDARY_BUTTON}
              >
                下一镜
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-black/30 p-3 backdrop-blur-xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-[#090d1f]">
              <AnimatePresence mode="wait">
                {currentScene && currentTemplate && currentBackground && currentPalette ? (
                  <motion.div
                    key={currentScene.id}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.015, filter: "blur(14px)" }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    {currentBackground.render({ scene: currentScene, palette: currentPalette })}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />
                    <div className="absolute inset-0 opacity-20 mix-blend-screen" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)", backgroundSize: "100% 5px" }} />
                    <StageChrome
                      palette={currentPalette}
                      scene={currentScene}
                      sceneIndex={activeSceneIndex}
                      totalScenes={storyboard.length}
                    />
                    <div className="absolute inset-0 z-20">
                      {currentTemplate.render({ scene: currentScene, palette: currentPalette })}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.46em] text-white/45">
                <Layers3 className="h-3.5 w-3.5" />
                Storyboard
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {storyboard.map((scene, index) => {
                  const scenePalette = paletteMap[scene.paletteId];
                  const template = TEMPLATE_MAP[scene.templateId];
                  return (
                    <button
                      key={scene.id}
                      onClick={() => setActiveSceneIndex(index)}
                      className={`rounded-[1.5rem] border p-4 text-left transition ${
                        index === activeSceneIndex
                          ? "border-white/30 bg-white/[0.08]"
                          : "border-white/10 bg-black/10 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.34em] text-white/45">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span>{template?.tag ?? "PV"}</span>
                      </div>
                      <div className="line-clamp-2 text-lg font-semibold leading-snug">{scene.text}</div>
                      <div className="mt-2 line-clamp-2 text-xs leading-5 text-white/54">{scene.subline}</div>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: scenePalette?.accent }} />
                        <span className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                          {template?.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
              <div className="mb-3 text-[11px] uppercase tracking-[0.46em] text-white/45">Scene Meta</div>
              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-4">
                  <div className="text-[11px] uppercase tracking-[0.34em] text-white/45">模板说明</div>
                  <div className="mt-2 text-lg font-semibold">{currentTemplate?.name}</div>
                  <div className="mt-2 text-sm leading-6 text-white/62">{currentTemplate?.description}</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-4">
                  <div className="text-[11px] uppercase tracking-[0.34em] text-white/45">镜头关键词</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {currentScene?.tokens.map((token, index) => (
                      <span
                        key={`${token}-${index}`}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/72"
                      >
                        {token}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-4">
                  <div className="text-[11px] uppercase tracking-[0.34em] text-white/45">使用建议</div>
                  <div className="mt-2 text-sm leading-6 text-white/62">
                    如果你之后愿意，我还可以继续往里加“按歌曲段落分配模板”、“更强的卡点时间轴”、“特定风格包”或者“根据你给的故事自动写文字 PV 文案”。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
