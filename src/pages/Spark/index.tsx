import { useMemo, useState } from "react";
import { Copy, GalleryHorizontalEnd, Ratio, RotateCcw, Shuffle, Type, Wand2 } from "lucide-react";

type StylePresetId = "signal" | "perpetual" | "matterhorn" | "meridies";
type AspectId = "landscape" | "portrait";

interface FontSpec {
  id: string;
  name: string;
  family: string;
  tone: string;
}

interface PaletteSpec {
  id: string;
  name: string;
  background: string;
  backgroundAlt: string;
  ink: string;
  inkMuted: string;
  line: string;
  accent: string;
  accentAlt: string;
  glow: string;
}

interface StylePreset {
  id: StylePresetId;
  name: string;
  note: string;
  reference: string;
  paletteIds: string[];
  headlineFonts: string[];
  supportFonts: string[];
  detailFonts: string[];
}

interface CopySet {
  title: string;
  subtitle: string;
  body: string;
  meta: string[];
}

interface PosterSpec {
  seed: number;
  preset: StylePreset;
  palette: PaletteSpec;
  headlineFont: FontSpec;
  supportFont: FontSpec;
  detailFont: FontSpec;
  copy: CopySet;
  titleLines: string[];
  axis: number;
  density: number;
  gridColumns: number;
  gridRows: number;
  ringScale: number;
  imageOpacity: number;
  imageShift: number;
  markerCount: number;
  keywords: string[];
}

const FONT_CSS = `
  @font-face { font-family: 'SparkGoodTiming'; src: url('/font/GOOD TIMING BD.OTF') format('opentype'); font-display: swap; }
  @font-face { font-family: 'SparkRealityHyper'; src: url('/font/REALITY HYPER REGULAR.TTF') format('truetype'); font-display: swap; }
  @font-face { font-family: 'SparkBostonCaps'; src: url('/font/BOSTON CAPS.TTF') format('truetype'); font-display: swap; }
  @font-face { font-family: 'SparkHaseTop'; src: url('/font/A-OTF-HASETOPPOSTD-DEBOLD.OTF') format('opentype'); font-display: swap; }
  @font-face { font-family: 'SparkPixel12'; src: url('/font/pixelFont12.ttf') format('truetype'); font-display: swap; }
  @font-face { font-family: 'SparkAvenue'; src: url('/font/AVENUE DE MADISON.TTF') format('truetype'); font-display: swap; }
  @font-face { font-family: 'SparkJasmin'; src: url('/font/JASMIN-REGULAR.TTF') format('truetype'); font-display: swap; }
  @font-face { font-family: 'SparkFusionPixel'; src: url('/font/FUSION-PIXEL-10PX-PROPORTIONAL-ZH_HANS.TTF') format('truetype'); font-display: swap; }
  @font-face { font-family: 'SparkRuiSu'; src: url('/font/方正字汇-锐速体 简.TTF') format('truetype'); font-display: swap; }
  @font-face { font-family: 'SparkSongKai'; src: url('/font/FZSTK.TTF') format('truetype'); font-display: swap; }
`;

const FONTS: FontSpec[] = [
  { id: "good-timing", name: "Good Timing", family: "SparkGoodTiming, Arial Black, sans-serif", tone: "technical wide sans" },
  { id: "reality-hyper", name: "Reality Hyper", family: "SparkRealityHyper, Arial Black, sans-serif", tone: "compressed display" },
  { id: "boston", name: "Boston Caps", family: "SparkBostonCaps, Georgia, serif", tone: "tall poster caps" },
  { id: "hase", name: "HaseTop Post", family: "SparkHaseTop, Arial Black, sans-serif", tone: "heavy geometric" },
  { id: "pixel", name: "Pixel 12", family: "SparkPixel12, monospace", tone: "pixel annotation" },
  { id: "avenue", name: "Avenue de Madison", family: "SparkAvenue, Georgia, serif", tone: "ornamental italic" },
  { id: "jasmin", name: "Jasmin", family: "SparkJasmin, Georgia, serif", tone: "condensed serif" },
  { id: "fusion", name: "Fusion Pixel ZH", family: "SparkFusionPixel, system-ui, sans-serif", tone: "bilingual pixel" },
  { id: "ruisu", name: "FangZheng RuiSu", family: "SparkRuiSu, system-ui, sans-serif", tone: "sharp Chinese display" },
  { id: "songkai", name: "FangZheng SongKai", family: "SparkSongKai, Georgia, serif", tone: "editorial Chinese serif" },
];

const FONT_MAP = Object.fromEntries(FONTS.map((font) => [font.id, font])) as Record<string, FontSpec>;

const PALETTES: PaletteSpec[] = [
  {
    id: "black-red-blue",
    name: "Destruction Primary",
    background: "#060606",
    backgroundAlt: "#141414",
    ink: "#f8f8f2",
    inkMuted: "rgba(248,248,242,0.66)",
    line: "rgba(248,248,242,0.34)",
    accent: "#ff1717",
    accentAlt: "#061cff",
    glow: "rgba(6,28,255,0.45)",
  },
  {
    id: "signal-cold",
    name: "Signal Cold",
    background: "#08090a",
    backgroundAlt: "#10141a",
    ink: "#f4f8ff",
    inkMuted: "rgba(244,248,255,0.68)",
    line: "rgba(244,248,255,0.38)",
    accent: "#1138ff",
    accentAlt: "#ff2b1f",
    glow: "rgba(17,56,255,0.52)",
  },
  {
    id: "blue-white-system",
    name: "Perpetual Blue",
    background: "#07090a",
    backgroundAlt: "#ebf5ff",
    ink: "#ffffff",
    inkMuted: "rgba(255,255,255,0.72)",
    line: "rgba(255,255,255,0.55)",
    accent: "#1238ff",
    accentAlt: "#eaf7ff",
    glow: "rgba(18,56,255,0.65)",
  },
  {
    id: "blueprint-ice",
    name: "Blueprint Ice",
    background: "#f6fbff",
    backgroundAlt: "#0a29d8",
    ink: "#06080c",
    inkMuted: "rgba(6,8,12,0.62)",
    line: "rgba(6,8,12,0.28)",
    accent: "#113cff",
    accentAlt: "#ffffff",
    glow: "rgba(17,60,255,0.32)",
  },
  {
    id: "matterhorn-noir",
    name: "Matterhorn Noir",
    background: "#0b0d0f",
    backgroundAlt: "#20262c",
    ink: "#f7f5ed",
    inkMuted: "rgba(247,245,237,0.66)",
    line: "rgba(247,245,237,0.46)",
    accent: "#ff9f28",
    accentAlt: "#f4f0e6",
    glow: "rgba(255,159,40,0.44)",
  },
  {
    id: "grid-paper",
    name: "Grid Paper Black",
    background: "#0a0b0d",
    backgroundAlt: "#161b21",
    ink: "#f8f8f4",
    inkMuted: "rgba(248,248,244,0.64)",
    line: "rgba(248,248,244,0.42)",
    accent: "#ffffff",
    accentAlt: "#d8d3c7",
    glow: "rgba(255,255,255,0.18)",
  },
  {
    id: "meridies-gold",
    name: "Meridies Gold",
    background: "#0a0a09",
    backgroundAlt: "#2a2a27",
    ink: "#f5f2ea",
    inkMuted: "rgba(245,242,234,0.68)",
    line: "rgba(245,242,234,0.26)",
    accent: "#f0c943",
    accentAlt: "#ffffff",
    glow: "rgba(240,201,67,0.34)",
  },
  {
    id: "silver-fog",
    name: "Silver Fog",
    background: "#111111",
    backgroundAlt: "#d8d8d3",
    ink: "#f7f7f1",
    inkMuted: "rgba(247,247,241,0.72)",
    line: "rgba(247,247,241,0.3)",
    accent: "#c6c4bc",
    accentAlt: "#efefea",
    glow: "rgba(240,240,232,0.24)",
  },
];

const PALETTE_MAP = Object.fromEntries(PALETTES.map((palette) => [palette.id, palette])) as Record<string, PaletteSpec>;

const STYLE_PRESETS: StylePreset[] = [
  {
    id: "signal",
    name: "Signal Destruction",
    note: "Red-blue technical poster with dense orbital marks and blunt display type.",
    reference: "ref 1",
    paletteIds: ["black-red-blue", "signal-cold"],
    headlineFonts: ["good-timing", "reality-hyper", "hase", "fusion"],
    supportFonts: ["boston", "fusion", "ruisu"],
    detailFonts: ["pixel", "good-timing"],
  },
  {
    id: "perpetual",
    name: "Perpetual Motion",
    note: "Blue-white systems diagram, orbital arrows, wave traces, and thin annotations.",
    reference: "ref 2",
    paletteIds: ["blue-white-system", "blueprint-ice"],
    headlineFonts: ["good-timing", "hase", "boston", "fusion"],
    supportFonts: ["pixel", "reality-hyper", "ruisu"],
    detailFonts: ["pixel", "fusion"],
  },
  {
    id: "matterhorn",
    name: "Matterhorn Grid",
    note: "Black editorial grid, oversized mixed serif/sans type, and a cinematic image field.",
    reference: "ref 3",
    paletteIds: ["matterhorn-noir", "grid-paper"],
    headlineFonts: ["avenue", "jasmin", "boston", "songkai"],
    supportFonts: ["good-timing", "hase", "ruisu"],
    detailFonts: ["pixel", "songkai"],
  },
  {
    id: "meridies",
    name: "Meridies Synopsis",
    note: "Monochrome fantasy editorial with tall gold serif type and frosted story panels.",
    reference: "ref 4",
    paletteIds: ["meridies-gold", "silver-fog"],
    headlineFonts: ["jasmin", "boston", "avenue", "songkai"],
    supportFonts: ["songkai", "fusion", "ruisu"],
    detailFonts: ["pixel", "songkai"],
  },
];

const COPY_BANK: CopySet[] = [
  {
    title: "MODERN TYPE ATLAS",
    subtitle: "A generated study for layout, color, and typographic rhythm.",
    body: "Reference sheet assembled from grid tension, display contrast, signal marks, and image texture.",
    meta: ["poster study", "grid index", "2026", "spark system"],
  },
  {
    title: "PERPETUAL MOTION",
    subtitle: "Circular systems for restless pages and kinetic identities.",
    body: "Thin linework, oversized arrows, blue fields, and quiet labels form a reusable direction board.",
    meta: ["motion", "diagram", "orbit 01", "layout lab"],
  },
  {
    title: "THE BEST VIEW",
    subtitle: "Comes after the hardest climb.",
    body: "A black grid splits ornamental lettering and condensed capitals across a cinematic surface.",
    meta: ["matterhorn", "editorial", "4:00 pm", "study"],
  },
  {
    title: "MERIDIES",
    subtitle: "Synopsis page for a cold palace, long shadows, and a difficult sun.",
    body: "Tall serif titles, smoky monochrome imagery, and gold annotations create a dramatic reference frame.",
    meta: ["synopsis", "archive", "winter gate", "aaaplus"],
  },
  {
    title: "秩序之外",
    subtitle: "随机生成一张现代艺术排版参考。",
    body: "在几何、网格、字体和配色之间寻找可以继续发展的视觉线索。",
    meta: ["typography", "中文标题", "seeded", "reference"],
  },
  {
    title: "BROKEN SIGNAL",
    subtitle: "A noisy composition with strict rules underneath.",
    body: "Hard color strips, pixel fragments, white symbols, and measured circles collide without losing structure.",
    meta: ["signal", "red blue", "technical", "poster"],
  },
];

const KEYWORD_BANK = [
  "radial grid",
  "oversized serif",
  "signal red",
  "electric blue",
  "micro labels",
  "thin rules",
  "orbit marks",
  "image field",
  "condensed caps",
  "frosted panel",
  "pixel ticks",
  "asymmetric grid",
];

const ASPECT_OPTIONS: Record<AspectId, { label: string; className: string }> = {
  landscape: { label: "16:9", className: "aspect-[16/9]" },
  portrait: { label: "4:5", className: "aspect-[4/5]" },
};

const makeSeed = () => Math.floor(Date.now() % 100000000);

const mulberry32 = (seed: number) => {
  let current = seed >>> 0;
  return () => {
    current += 0x6d2b79f5;
    let value = current;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
};

const randomInt = (rng: () => number, min: number, max: number) =>
  Math.floor(rng() * (max - min + 1)) + min;

const randomChoice = <T,>(rng: () => number, list: T[]): T =>
  list[Math.floor(rng() * list.length)];

const shuffle = <T,>(rng: () => number, list: T[]) => {
  const result = [...list];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(rng() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

const splitTitle = (title: string) => {
  const trimmed = title.trim();
  if (!trimmed) return ["UNTITLED"];

  if (/\s/.test(trimmed)) {
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length <= 2) return words;

    const target = Math.ceil(words.length / 2);
    const lines = [words.slice(0, target).join(" "), words.slice(target).join(" ")];
    return lines.filter(Boolean);
  }

  const chars = Array.from(trimmed);
  if (chars.length <= 6) return [trimmed];

  const size = chars.length > 12 ? Math.ceil(chars.length / 3) : Math.ceil(chars.length / 2);
  const lines: string[] = [];
  for (let index = 0; index < chars.length; index += size) {
    lines.push(chars.slice(index, index + size).join(""));
  }
  return lines;
};

const buildPosterSpec = (seed: number, titleOverride: string, subtitleOverride: string): PosterSpec => {
  const rng = mulberry32(seed);
  const preset = randomChoice(rng, STYLE_PRESETS);
  const palette = PALETTE_MAP[randomChoice(rng, preset.paletteIds)];
  const fallbackCopy = randomChoice(rng, COPY_BANK);
  const copy = {
    ...fallbackCopy,
    title: titleOverride.trim() || fallbackCopy.title,
    subtitle: subtitleOverride.trim() || fallbackCopy.subtitle,
  };

  const headlineFont = FONT_MAP[randomChoice(rng, preset.headlineFonts)];
  const supportFont = FONT_MAP[randomChoice(rng, preset.supportFonts)];
  const detailFont = FONT_MAP[randomChoice(rng, preset.detailFonts)];
  const keywords = shuffle(rng, KEYWORD_BANK).slice(0, 4);

  return {
    seed,
    preset,
    palette,
    headlineFont,
    supportFont,
    detailFont,
    copy,
    titleLines: splitTitle(copy.title),
    axis: randomInt(rng, 18, 82),
    density: randomInt(rng, 5, 10),
    gridColumns: randomInt(rng, 8, 14),
    gridRows: randomInt(rng, 5, 9),
    ringScale: randomInt(rng, 56, 86),
    imageOpacity: randomInt(rng, 22, 46) / 100,
    imageShift: randomInt(rng, -18, 18),
    markerCount: randomInt(rng, 12, 20),
    keywords,
  };
};

const swatchValues = (palette: PaletteSpec) => [
  palette.background,
  palette.backgroundAlt,
  palette.ink,
  palette.line,
  palette.accent,
  palette.accentAlt,
];

const InputField = ({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) => (
  <label className="block">
    <span className="mb-2 block text-[11px] uppercase text-white/48">{label}</span>
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="h-11 w-full border border-white/12 bg-black/28 px-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-white/32"
    />
  </label>
);

const IconButton = ({
  children,
  title,
  onClick,
  active = false,
}: {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
  active?: boolean;
}) => (
  <button
    type="button"
    title={title}
    aria-label={title}
    onClick={onClick}
    className={`inline-flex h-11 w-11 items-center justify-center border transition ${
      active
        ? "border-white bg-white text-black"
        : "border-white/12 bg-white/[0.04] text-white/78 hover:border-white/28 hover:bg-white/[0.08]"
    }`}
  >
    {children}
  </button>
);

const MicroLabels = ({ spec }: { spec: PosterSpec }) => {
  const { palette, detailFont, copy } = spec;
  const labels = [
    copy.meta[0],
    `seed ${spec.seed}`,
    copy.meta[1],
    spec.preset.reference,
    copy.meta[2],
    copy.meta[3],
  ].filter(Boolean);

  return (
    <>
      {labels.map((label, index) => (
        <div
          key={`${spec.seed}-label-${label}-${index}`}
          className="absolute z-20 text-[0.56rem] uppercase leading-none"
          style={{
            left: `${6 + (index % 3) * 36}%`,
            top: `${7 + Math.floor(index / 3) * 76}%`,
            color: palette.inkMuted,
            fontFamily: detailFont.family,
          }}
        >
          {label}
        </div>
      ))}
    </>
  );
};

const TechnicalMarks = ({ spec }: { spec: PosterSpec }) => {
  const { palette } = spec;
  return (
    <>
      {Array.from({ length: spec.markerCount }).map((_, index) => {
        const left = (index * 17 + spec.seed) % 96;
        const top = (index * 23 + spec.axis) % 92;
        const isAccent = index % 3 === 0;
        const size = 0.4 + (index % 4) * 0.18;

        return (
          <div
            key={`${spec.seed}-mark-${index}`}
            className="absolute z-10"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            {index % 4 === 0 ? (
              <div
                className="grid grid-cols-2 gap-[2px]"
                style={{ width: `${size * 2.2}rem` }}
              >
                {Array.from({ length: 4 }).map((__, cellIndex) => (
                  <span
                    key={`${spec.seed}-cell-${index}-${cellIndex}`}
                    className="aspect-square"
                    style={{ backgroundColor: cellIndex % 2 === 0 ? palette.accentAlt : palette.background }}
                  />
                ))}
              </div>
            ) : index % 4 === 1 ? (
              <div
                className="font-black leading-none"
                style={{ color: isAccent ? palette.accent : palette.accentAlt, fontSize: `${size * 2.4}rem` }}
              >
                *
              </div>
            ) : index % 4 === 2 ? (
              <div
                className="border"
                style={{
                  width: `${size * 2.8}rem`,
                  height: `${size * 2.8}rem`,
                  borderColor: isAccent ? palette.accent : palette.line,
                  transform: `rotate(${index * 11}deg)`,
                }}
              />
            ) : (
              <div
                style={{
                  width: `${size * 5}rem`,
                  height: "0.34rem",
                  backgroundColor: isAccent ? palette.accent : palette.accentAlt,
                  transform: `rotate(${index % 2 === 0 ? -24 : 24}deg)`,
                }}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

const OrbitalGrid = ({ spec }: { spec: PosterSpec }) => {
  const { palette } = spec;
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `linear-gradient(${palette.line} 1px, transparent 1px), linear-gradient(90deg, ${palette.line} 1px, transparent 1px)`,
          backgroundSize: `${100 / spec.gridColumns}% ${100 / spec.gridRows}%`,
        }}
      />
      {Array.from({ length: spec.density }).map((_, index) => {
        const size = spec.ringScale + index * 13;
        return (
          <div
            key={`${spec.seed}-ring-${index}`}
            className="absolute left-1/2 top-1/2 rounded-full border"
            style={{
              width: `${size}%`,
              height: `${size}%`,
              borderColor: index % 2 === 0 ? palette.line : palette.accentAlt,
              opacity: index % 2 === 0 ? 0.56 : 0.26,
              transform: `translate(-50%, -50%) rotate(${index * 12}deg) scaleX(${index % 2 === 0 ? 1 : 1.45})`,
            }}
          />
        );
      })}
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={`${spec.seed}-ray-${index}`}
          className="absolute left-1/2 top-1/2 h-[1px] w-[120%] origin-left"
          style={{
            backgroundColor: palette.line,
            transform: `rotate(${index * 23 + spec.axis}deg) translateX(-50%)`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
};

const SignalPoster = ({ spec }: { spec: PosterSpec }) => {
  const { palette, headlineFont, supportFont, detailFont } = spec;
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: `linear-gradient(180deg, ${palette.background}, ${palette.backgroundAlt})` }}>
      <OrbitalGrid spec={spec} />
      <div className="absolute inset-x-0 top-0 h-[2.6%]" style={{ backgroundColor: palette.accent }} />
      <div className="absolute inset-x-0 bottom-0 h-[2.8%]" style={{ backgroundColor: palette.accent }} />
      <div
        className="absolute left-0 top-[58%] h-[12%] w-[96%]"
        style={{ backgroundColor: palette.accent, clipPath: "polygon(0 0, 82% 0, 92% 100%, 0 100%)" }}
      />
      <div
        className="absolute right-[8%] top-[4%] h-[72%] w-[3.2rem]"
        style={{
          backgroundImage: `repeating-linear-gradient(165deg, ${palette.ink} 0 4px, transparent 4px 12px)`,
          opacity: 0.9,
        }}
      />
      <TechnicalMarks spec={spec} />
      <MicroLabels spec={spec} />

      <div className="absolute left-[5%] right-[4%] top-[53%] z-30">
        <div
          className="flex flex-wrap items-end gap-x-[0.22em] text-[clamp(1.4rem,10cqw,6.4rem)] font-black uppercase leading-[0.78]"
          style={{ color: palette.ink, fontFamily: headlineFont.family, textShadow: `0.08em 0.08em 0 ${palette.accent}` }}
        >
          {spec.titleLines.map((line) => (
            <span key={`${spec.seed}-${line}`}>{line}</span>
          ))}
        </div>
      </div>
      <div
        className="absolute bottom-[10%] left-[18%] right-[5%] z-30 text-[clamp(0.85rem,3.4cqw,2.9rem)] font-black uppercase leading-none"
        style={{ color: palette.accent, fontFamily: supportFont.family }}
      >
        {spec.copy.subtitle}
      </div>
      <div
        className="absolute left-[22%] top-[40%] z-30 max-w-[18rem] border-l-4 px-3 py-2 text-[0.64rem] leading-tight"
        style={{ borderColor: palette.accentAlt, backgroundColor: palette.accent, color: palette.ink, fontFamily: detailFont.family }}
      >
        {spec.copy.body}
      </div>
    </div>
  );
};

const PerpetualPoster = ({ spec }: { spec: PosterSpec }) => {
  const { palette, headlineFont, supportFont, detailFont } = spec;
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: palette.background }}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${palette.background} 0%, ${palette.background} 21%, ${palette.accent} 22%, ${palette.accent} 72%, ${palette.backgroundAlt} 100%)`,
        }}
      />
      <div
        className="absolute inset-x-0 top-[37%] h-[13%] blur-sm"
        style={{ background: `linear-gradient(180deg, transparent, ${palette.accentAlt}, transparent)`, opacity: 0.9 }}
      />
      <OrbitalGrid spec={spec} />
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={`${spec.seed}-wave-${index}`}
          className="absolute h-[20%] rounded-[50%] border"
          style={{
            left: `${10 + index * 7}%`,
            top: `${8 + (index % 3) * 12}%`,
            width: `${46 - index * 2}%`,
            borderColor: palette.line,
            transform: `rotate(${index % 2 === 0 ? -2 : 3}deg)`,
            opacity: 0.68,
          }}
        />
      ))}
      <div
        className="absolute left-[31%] top-[21%] z-20 flex h-[39%] w-[36%] items-center justify-center rounded-full border-[1.5rem]"
        style={{ borderColor: palette.accent, boxShadow: `0 0 3.5rem ${palette.glow}` }}
      >
        <div className="h-[44%] w-[44%] rounded-full border" style={{ borderColor: palette.ink }} />
      </div>
      <TechnicalMarks spec={spec} />
      <MicroLabels spec={spec} />
      <div
        className="absolute bottom-[7%] left-[2%] right-[2%] z-30 flex justify-between text-[clamp(1.25rem,8cqw,6rem)] uppercase leading-none"
        style={{ color: palette.ink, fontFamily: headlineFont.family }}
      >
        {spec.titleLines.join(" ").split("").slice(0, 12).map((letter, index) => (
          <span key={`${spec.seed}-letter-${letter}-${index}`}>{letter === " " ? "_" : letter}</span>
        ))}
      </div>
      <div
        className="absolute left-[7%] right-[7%] top-[26%] z-30 text-[clamp(0.7rem,2.5cqw,2rem)] lowercase"
        style={{ color: palette.ink, fontFamily: supportFont.family }}
      >
        {spec.copy.subtitle}
      </div>
      <div
        className="absolute right-[6%] top-[55%] z-30 max-w-[18rem] text-right text-[0.66rem] leading-snug"
        style={{ color: palette.ink, fontFamily: detailFont.family }}
      >
        {spec.copy.body}
      </div>
    </div>
  );
};

const MatterhornPoster = ({ spec }: { spec: PosterSpec }) => {
  const { palette, headlineFont, supportFont, detailFont } = spec;
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: palette.background }}>
      <div
        className="absolute inset-x-0 top-0 h-[52%]"
        style={{
          backgroundImage: `linear-gradient(${palette.line} 1px, transparent 1px), linear-gradient(90deg, ${palette.line} 1px, transparent 1px)`,
          backgroundSize: `${100 / spec.gridColumns}% ${100 / spec.gridRows}%`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[52%] bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/3.jpg')",
          backgroundPosition: `center ${50 + spec.imageShift}%`,
          filter: "saturate(0.85) contrast(1.08)",
          opacity: 0.88,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[52%]" style={{ background: `linear-gradient(180deg, ${palette.background} 0%, transparent 28%, ${palette.background} 100%)`, opacity: 0.46 }} />
      <MicroLabels spec={spec} />
      <div className="absolute left-[5.8%] right-[5.8%] top-[8%] z-20 grid grid-cols-3 gap-y-[0.18rem]">
        {spec.titleLines.map((line, index) => (
          <div
            key={`${spec.seed}-grid-title-${line}-${index}`}
            className={`${index % 2 === 0 ? "col-span-2" : "col-span-1"} text-[clamp(1.35rem,9cqw,7.2rem)] uppercase leading-[0.78]`}
            style={{
              color: palette.ink,
              fontFamily: index % 2 === 0 ? headlineFont.family : supportFont.family,
              transform: `translateX(${index % 2 === 0 ? 0 : -18}%)`,
            }}
          >
            {line}
          </div>
        ))}
      </div>
      <div
        className="absolute right-[6%] top-[8%] z-30 max-w-[17rem] text-right text-[clamp(0.95rem,4.8cqw,4.4rem)] uppercase leading-[0.82]"
        style={{ color: palette.ink, fontFamily: supportFont.family }}
      >
        {spec.copy.subtitle}
      </div>
      <div
        className="absolute bottom-[7%] left-1/2 z-30 w-[48%] -translate-x-1/2 text-center text-[0.72rem] leading-tight"
        style={{ color: palette.ink, fontFamily: detailFont.family }}
      >
        {spec.copy.body}
      </div>
      <div
        className="absolute bottom-[16%] left-[46%] z-20 h-[28%] w-[18%]"
        style={{ background: `radial-gradient(circle, ${palette.accent} 0 16%, transparent 40%)`, opacity: 0.55 }}
      />
    </div>
  );
};

const MeridiesPoster = ({ spec }: { spec: PosterSpec }) => {
  const { palette, headlineFont, supportFont, detailFont } = spec;
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: palette.background }}>
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage: "url('/image/4.jpg')",
          backgroundPosition: `${50 + spec.imageShift}% center`,
          opacity: spec.imageOpacity + 0.38,
          filter: "grayscale(1) contrast(1.12)",
        }}
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${palette.background} 0%, transparent 48%, ${palette.background} 100%)`, opacity: 0.72 }} />
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `radial-gradient(${palette.ink} 1px, transparent 1px)`, backgroundSize: "18px 18px" }}
      />
      <MicroLabels spec={spec} />
      <div
        className="absolute left-[3%] top-[7%] z-30 max-w-[48%] text-[clamp(1.55rem,11cqw,9rem)] uppercase leading-[0.86]"
        style={{ color: palette.accent, fontFamily: headlineFont.family }}
      >
        {spec.titleLines.map((line) => (
          <div key={`${spec.seed}-meridies-${line}`}>{line}</div>
        ))}
      </div>
      <div
        className="absolute right-[5%] top-[8%] z-30 text-[clamp(0.9rem,4.4cqw,4rem)] uppercase leading-none"
        style={{ color: palette.ink, fontFamily: supportFont.family }}
      >
        SYNOPSIS
      </div>
      <div
        className="absolute right-[5%] top-[22%] z-30 w-[40%] border border-white/10 bg-black/42 p-[3%] backdrop-blur-[2px]"
        style={{ color: palette.ink, boxShadow: `0 0 3rem ${palette.glow}` }}
      >
        <div className="mb-3 text-[clamp(0.55rem,1.2cqw,1.1rem)] font-bold" style={{ color: palette.accent, fontFamily: supportFont.family }}>
          "{spec.copy.subtitle}"
        </div>
        <div className="text-[clamp(0.5rem,1cqw,0.96rem)] leading-relaxed" style={{ fontFamily: detailFont.family }}>
          {spec.copy.body}
        </div>
      </div>
      <div
        className="absolute bottom-[7%] left-[4%] z-30 max-w-[44%] text-[0.68rem] leading-relaxed"
        style={{ color: palette.inkMuted, fontFamily: detailFont.family }}
      >
        {spec.keywords.join(" / ")}
      </div>
    </div>
  );
};

const PosterCanvas = ({ spec, aspect }: { spec: PosterSpec; aspect: AspectId }) => {
  const posterStyle = {
    containerType: "inline-size",
    backgroundColor: spec.palette.background,
  } as React.CSSProperties;

  return (
    <div className="w-full">
      <div
        className={`relative mx-auto w-full max-w-[1180px] overflow-hidden border border-white/14 shadow-[0_24px_80px_rgba(0,0,0,0.42)] ${ASPECT_OPTIONS[aspect].className}`}
        style={posterStyle}
      >
        {spec.preset.id === "signal" ? <SignalPoster spec={spec} /> : null}
        {spec.preset.id === "perpetual" ? <PerpetualPoster spec={spec} /> : null}
        {spec.preset.id === "matterhorn" ? <MatterhornPoster spec={spec} /> : null}
        {spec.preset.id === "meridies" ? <MeridiesPoster spec={spec} /> : null}
      </div>
    </div>
  );
};

export default function SparkEngine() {
  const [seed, setSeed] = useState(() => makeSeed());
  const [titleOverride, setTitleOverride] = useState("");
  const [subtitleOverride, setSubtitleOverride] = useState("");
  const [aspect, setAspect] = useState<AspectId>("landscape");
  const [copied, setCopied] = useState(false);

  const spec = useMemo(
    () => buildPosterSpec(seed, titleOverride, subtitleOverride),
    [seed, titleOverride, subtitleOverride],
  );

  const regenerate = () => {
    setCopied(false);
    setSeed(makeSeed());
  };

  const resetCopy = () => {
    setTitleOverride("");
    setSubtitleOverride("");
    setSeed(makeSeed());
  };

  const copySeed = async () => {
    await navigator.clipboard?.writeText(String(seed));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#070808] text-white">
      <style>{FONT_CSS}</style>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#080909_0%,#111314_52%,#050505_100%)]" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      <div className="relative mx-auto flex w-full max-w-[1680px] flex-col gap-5 px-4 py-5 lg:px-6">
        <header className="flex flex-col justify-between gap-4 border border-white/10 bg-white/[0.035] px-4 py-4 backdrop-blur md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-2 flex items-center gap-2 text-[11px] uppercase text-white/45">
              <GalleryHorizontalEnd className="h-3.5 w-3.5" />
              Spark / generated modern art references
            </div>
            <h1 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              随机生成排版、配色、字体参考
            </h1>
            <p className="mt-2 text-sm leading-6 text-white/58">
              单张海报式生成器，抽取参考图里的网格、轨道、红蓝信号、黑白大字和暗色影像杂志感。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <IconButton title="Generate" onClick={regenerate}>
              <Wand2 className="h-4 w-4" />
            </IconButton>
            <IconButton title="Reset copy" onClick={resetCopy}>
              <RotateCcw className="h-4 w-4" />
            </IconButton>
            <IconButton title={`Switch aspect: ${ASPECT_OPTIONS[aspect].label}`} onClick={() => setAspect((current) => (current === "landscape" ? "portrait" : "landscape"))}>
              <Ratio className="h-4 w-4" />
            </IconButton>
            <IconButton title={copied ? "Seed copied" : "Copy seed"} onClick={copySeed} active={copied}>
              <Copy className="h-4 w-4" />
            </IconButton>
          </div>
        </header>

        <main className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="min-w-0">
            <PosterCanvas spec={spec} aspect={aspect} />
          </section>

          <aside className="grid content-start gap-4">
            <div className="border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase text-white/42">current style</div>
                  <div className="mt-1 text-xl font-semibold text-white">{spec.preset.name}</div>
                </div>
                <button
                  type="button"
                  onClick={regenerate}
                  className="inline-flex h-10 items-center gap-2 border border-white/12 bg-white text-black px-3 text-sm font-medium transition hover:bg-white/90"
                >
                  <Shuffle className="h-4 w-4" />
                  Generate
                </button>
              </div>
              <p className="text-sm leading-6 text-white/62">{spec.preset.note}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] uppercase text-white/48">
                <div className="border border-white/10 bg-black/20 p-3">
                  seed
                  <div className="mt-1 text-sm text-white">{seed}</div>
                </div>
                <div className="border border-white/10 bg-black/20 p-3">
                  ratio
                  <div className="mt-1 text-sm text-white">{ASPECT_OPTIONS[aspect].label}</div>
                </div>
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-[11px] uppercase text-white/42">
                <Type className="h-3.5 w-3.5" />
                copy override
              </div>
              <div className="grid gap-3">
                <InputField label="Title" value={titleOverride} placeholder={spec.copy.title} onChange={setTitleOverride} />
                <InputField label="Subtitle" value={subtitleOverride} placeholder={spec.copy.subtitle} onChange={setSubtitleOverride} />
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
              <div className="mb-3 text-[11px] uppercase text-white/42">palette</div>
              <div className="grid grid-cols-6 gap-2">
                {swatchValues(spec.palette).map((color, index) => (
                  <div key={`${spec.palette.id}-${color}-${index}`} className="h-10 border border-white/10" style={{ backgroundColor: color }} title={color} />
                ))}
              </div>
              <div className="mt-3 text-sm text-white/68">{spec.palette.name}</div>
              <div className="mt-2 grid gap-1 text-xs text-white/42">
                {swatchValues(spec.palette).map((color, index) => (
                  <div key={`${spec.palette.id}-value-${color}-${index}`}>{color}</div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
              <div className="mb-3 text-[11px] uppercase text-white/42">type pairing</div>
              <div className="space-y-3 text-sm">
                {[
                  ["headline", spec.headlineFont],
                  ["support", spec.supportFont],
                  ["detail", spec.detailFont],
                ].map(([label, font]) => {
                  const fontSpec = font as FontSpec;
                  return (
                    <div key={`${label}-${fontSpec.id}`} className="border border-white/10 bg-black/20 p-3">
                      <div className="text-[11px] uppercase text-white/38">{label as string}</div>
                      <div className="mt-1 text-white" style={{ fontFamily: fontSpec.family }}>{fontSpec.name}</div>
                      <div className="mt-1 text-xs text-white/42">{fontSpec.tone}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
              <div className="mb-3 text-[11px] uppercase text-white/42">composition tags</div>
              <div className="flex flex-wrap gap-2">
                {spec.keywords.map((keyword) => (
                  <span key={`${spec.seed}-${keyword}`} className="border border-white/12 bg-black/20 px-2.5 py-1 text-xs text-white/66">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
