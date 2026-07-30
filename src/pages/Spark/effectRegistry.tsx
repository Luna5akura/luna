import React from "react";
import { motion } from "framer-motion";
import type { SparkPalette, SparkScene } from "./utils";

export interface TemplateRenderProps {
  scene: SparkScene;
  palette: SparkPalette;
}

export interface SparkTemplateDef {
  id: string;
  name: string;
  tag: string;
  description: string;
  render: (props: TemplateRenderProps) => React.ReactNode;
}

const frameTransition = {
  initial: { opacity: 0, y: 24, filter: "blur(18px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
} as const;

const getTextScale = (text: string, max = 17, min = 8) => {
  const length = Array.from(text).length;
  if (length <= 4) return `${max}vw`;
  if (length <= 8) return `${Math.max(min + 3, max - 3)}vw`;
  if (length <= 14) return `${Math.max(min + 1, max - 6)}vw`;
  return `${min}vw`;
};

const renderTokenRow = (scene: SparkScene, palette: SparkPalette) => (
  <div className="absolute left-[5%] right-[5%] bottom-[8%] z-30 flex flex-wrap items-center gap-2">
    {scene.tokens.map((token, index) => (
      <motion.span
        key={`${scene.id}-${token}-${index}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
        className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.32em]"
        style={{
          borderColor: palette.accentSoft,
          backgroundColor: "rgba(0,0,0,0.18)",
          color: palette.inkSoft,
        }}
      >
        {token}
      </motion.span>
    ))}
  </div>
);

const splitScreenTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="absolute inset-y-0 left-0 w-[58%]"
      style={{ backgroundColor: palette.accentSoft }}
    />
    <div className="absolute inset-y-0 right-0 w-[42%] bg-black/10" />
    <motion.div
      {...frameTransition}
      className="absolute left-[7%] top-[12%] z-20 max-w-[68%]"
      style={{ color: palette.ink }}
    >
      <div className="mb-4 text-[11px] uppercase tracking-[0.5em]" style={{ color: palette.inkSoft }}>
        split poster / scene focus
      </div>
      <div className="font-black uppercase leading-[0.88]" style={{ fontSize: getTextScale(scene.text, 16, 8) }}>
        {scene.text}
      </div>
      <div className="mt-5 max-w-[26rem] text-sm md:text-base" style={{ color: palette.inkSoft }}>
        {scene.subline}
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="absolute right-[9%] top-[14%] h-[72%] w-px origin-top"
      style={{ backgroundColor: palette.inkSoft }}
    />
    {renderTokenRow(scene, palette)}
  </div>
);

const verticalColumnsTemplate = ({ scene, palette }: TemplateRenderProps) => {
  const chars = Array.from(scene.text);
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-[10%] top-[12%] text-[11px] uppercase tracking-[0.56em]" style={{ color: palette.inkSoft }}>
        vertical chorus
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-3 md:gap-5" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
          {chars.map((char, index) => (
            <motion.div
              key={`${scene.id}-${char}-${index}`}
              initial={{ opacity: 0, y: -80, rotate: index % 2 === 0 ? -8 : 8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="font-black"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: index % 2 === 0 ? palette.ink : palette.accent,
                textShadow: `0 0 30px ${palette.glow}`,
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[12%] left-1/2 w-[60%] -translate-x-1/2 text-center text-sm tracking-[0.22em]" style={{ color: palette.inkSoft }}>
        {scene.subline}
      </div>
    </div>
  );
};

const echoStackTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={`${scene.id}-echo-${index}`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: index === 0 ? 1 : 0.1 + index * 0.08, scale: 1 + index * 0.03 }}
          transition={{ duration: 0.8, delay: index * 0.04 }}
          className="absolute font-black uppercase tracking-[-0.06em]"
          style={{
            fontSize: getTextScale(scene.text, 15, 7),
            color: index === 0 ? palette.ink : "transparent",
            WebkitTextStroke: `1px ${index === 0 ? palette.ink : palette.accent}`,
            transform: `translate(${index * 1.2}vw, ${index * 1.1}vh)`,
          }}
        >
          {scene.text}
        </motion.div>
      ))}
    </div>
    <div className="absolute left-[7%] top-[12%] max-w-[16rem] text-xs uppercase tracking-[0.4em]" style={{ color: palette.inkSoft }}>
      layered afterimage
    </div>
    <div className="absolute right-[7%] bottom-[12%] max-w-[18rem] text-right text-sm leading-relaxed" style={{ color: palette.inkSoft }}>
      {scene.subline}
    </div>
  </div>
);

const subtitleBurstTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.84 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="absolute left-1/2 top-1/2 z-20 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border px-8 py-8 text-center md:px-12 md:py-12"
      style={{
        borderColor: palette.accentSoft,
        backgroundColor: "rgba(0,0,0,0.2)",
        boxShadow: `0 0 80px ${palette.accentSoft}`,
      }}
    >
      <div className="mb-5 text-[11px] uppercase tracking-[0.6em]" style={{ color: palette.accent }}>
        subtitle burst
      </div>
      <div className="font-black leading-[0.9]" style={{ fontSize: getTextScale(scene.text, 13, 6), color: palette.ink }}>
        {scene.text}
      </div>
      <div className="mx-auto mt-6 max-w-[34rem] text-sm md:text-base" style={{ color: palette.inkSoft }}>
        {scene.subline}
      </div>
    </motion.div>
    {renderTokenRow(scene, palette)}
  </div>
);

const warningTapeTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 flex flex-col justify-between py-[10%]">
      {["-4deg", "4deg", "-4deg"].map((rotation, index) => (
        <motion.div
          key={`${scene.id}-band-${index}`}
          initial={{ x: index % 2 === 0 ? "-100%" : "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: index * 0.08 }}
          className="flex h-[15%] items-center overflow-hidden border-y-2"
          style={{
            rotate: rotation,
            backgroundImage: `repeating-linear-gradient(90deg, ${palette.accent}, ${palette.accent} 60px, ${palette.surface} 60px, ${palette.surface} 120px)`,
            borderColor: palette.surfaceAlt,
          }}
        >
          <div className="whitespace-nowrap px-4 text-2xl font-black uppercase tracking-[0.4em]" style={{ color: palette.surface }}>
            {scene.text} / {scene.text} / {scene.text} /
          </div>
        </motion.div>
      ))}
    </div>
    <div className="absolute left-[7%] bottom-[10%] max-w-[24rem] text-sm uppercase tracking-[0.26em]" style={{ color: palette.ink }}>
      {scene.subline}
    </div>
  </div>
);

const terminalMonolithTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="absolute left-1/2 top-1/2 z-20 w-[82%] max-w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border"
      style={{
        borderColor: palette.accentSoft,
        backgroundColor: "rgba(3, 7, 17, 0.72)",
        boxShadow: `0 0 60px ${palette.accentSoft}`,
      }}
    >
      <div className="flex items-center justify-between border-b px-5 py-3 text-[10px] uppercase tracking-[0.44em]" style={{ borderColor: palette.accentSoft, color: palette.inkSoft }}>
        <span>pv-console.exe</span>
        <span>{scene.cue}</span>
      </div>
      <div className="px-5 py-5 font-mono text-sm md:text-base" style={{ color: palette.inkSoft }}>
        <div className="mb-3">render &gt; kinetic template / live scene</div>
        <div className="mb-2" style={{ color: palette.accent }}>
          &gt; {scene.text}
        </div>
        <div className="opacity-70">{scene.subline}</div>
      </div>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.6 }}
        className="h-1 rounded-b-[1.75rem]"
        style={{ backgroundColor: palette.accent }}
      />
    </motion.div>
  </div>
);

const magazineCutTemplate = ({ scene, palette }: TemplateRenderProps) => {
  const tokens = scene.tokens.slice(0, 5);
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-[7%] top-[10%] max-w-[20rem] text-[11px] uppercase tracking-[0.5em]" style={{ color: palette.inkSoft }}>
        editorial cut / asymmetric grid
      </div>
      <motion.div
        {...frameTransition}
        className="absolute left-[7%] top-[22%] z-20 max-w-[50%] font-black uppercase leading-[0.84]"
        style={{ fontSize: getTextScale(scene.text, 12, 6), color: palette.ink }}
      >
        {scene.text}
      </motion.div>
      <div className="absolute right-[8%] top-[18%] flex w-[26%] flex-col gap-3">
        {tokens.map((token, index) => (
          <motion.div
            key={`${scene.id}-mag-${token}-${index}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.25 + index * 0.06 }}
            className="rounded-[1.2rem] border px-4 py-3 text-right text-sm uppercase tracking-[0.28em]"
            style={{
              borderColor: palette.accentSoft,
              backgroundColor: index % 2 === 0 ? palette.accentSoft : "rgba(255,255,255,0.06)",
              color: palette.ink,
            }}
          >
            {token}
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-[11%] left-[7%] max-w-[24rem] text-sm leading-relaxed" style={{ color: palette.inkSoft }}>
        {scene.subline}
      </div>
    </div>
  );
};

const orbitRingTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex h-[62%] w-[62%] items-center justify-center rounded-full border"
        style={{ borderColor: palette.accentSoft, boxShadow: `0 0 80px ${palette.accentSoft}` }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          className="absolute inset-4 rounded-full border"
          style={{ borderColor: palette.inkSoft }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-10 rounded-full border border-dashed"
          style={{ borderColor: palette.accent }}
        />
        <div className="z-20 px-8 text-center">
          <div className="mb-4 text-[11px] uppercase tracking-[0.6em]" style={{ color: palette.inkSoft }}>
            orbit lyric
          </div>
          <div className="font-black uppercase leading-[0.9]" style={{ color: palette.ink, fontSize: getTextScale(scene.text, 11, 6) }}>
            {scene.text}
          </div>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-[11%] left-1/2 w-[60%] -translate-x-1/2 text-center text-sm tracking-[0.2em]" style={{ color: palette.inkSoft }}>
      {scene.subline}
    </div>
  </div>
);

const barcodeSignalTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-[7%] top-[14%] right-[7%] h-[34%] rounded-[1.5rem] border px-6 py-5" style={{ borderColor: palette.accentSoft }}>
      <div
        className="h-full w-full rounded-[1rem]"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${palette.ink} 0, ${palette.ink} 3px, transparent 3px, transparent 8px, ${palette.accent} 8px, ${palette.accent} 12px, transparent 12px, transparent 18px)`,
          opacity: 0.92,
        }}
      />
    </div>
    <motion.div
      {...frameTransition}
      className="absolute left-[7%] bottom-[15%] z-20 max-w-[72%] font-black uppercase leading-[0.9]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 11, 6) }}
    >
      {scene.text}
    </motion.div>
    <div className="absolute right-[7%] top-[54%] max-w-[22rem] text-right text-xs uppercase tracking-[0.32em]" style={{ color: palette.inkSoft }}>
      {scene.cue}
    </div>
  </div>
);

const karaokeRailTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-[6%] right-[6%] top-[18%] space-y-5">
      {scene.tokens.map((token, index) => (
        <motion.div
          key={`${scene.id}-karaoke-${token}-${index}`}
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="relative overflow-hidden rounded-full border px-6 py-4"
          style={{ borderColor: palette.accentSoft, backgroundColor: "rgba(255,255,255,0.04)" }}
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${72 + index * 5}%` }}
            transition={{ duration: 1.2, delay: 0.15 + index * 0.1 }}
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ backgroundColor: palette.accentSoft }}
          />
          <span className="relative z-10 text-lg font-black uppercase tracking-[0.24em]" style={{ color: palette.ink }}>
            {token}
          </span>
        </motion.div>
      ))}
    </div>
    <div className="absolute left-[6%] bottom-[10%] text-xs uppercase tracking-[0.5em]" style={{ color: palette.inkSoft }}>
      live lyric rail
    </div>
  </div>
);

const gridWindowTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-[7%]">
      {Array.from({ length: 9 }).map((_, index) => (
        <motion.div
          key={`${scene.id}-grid-${index}`}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: index * 0.03 }}
          className="rounded-[1.5rem] border"
          style={{
            borderColor: index === 4 ? palette.accent : palette.accentSoft,
            backgroundColor: index === 4 ? palette.accentSoft : "rgba(255,255,255,0.03)",
          }}
        />
      ))}
    </div>
    <motion.div
      {...frameTransition}
      className="absolute left-1/2 top-1/2 z-20 w-[72%] -translate-x-1/2 -translate-y-1/2 text-center font-black uppercase leading-[0.9]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 11, 6) }}
    >
      {scene.text}
    </motion.div>
  </div>
);

const haloMonumentTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute h-[68%] w-[28%] rounded-t-[8rem] rounded-b-[2rem] border"
        style={{
          borderColor: palette.accentSoft,
          background: `linear-gradient(180deg, ${palette.accentSoft}, transparent 75%)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72 }}
        className="z-20 text-center"
      >
        <div className="mb-4 text-[11px] uppercase tracking-[0.65em]" style={{ color: palette.inkSoft }}>
          halo monument
        </div>
        <div className="font-black uppercase leading-[0.88]" style={{ color: palette.ink, fontSize: getTextScale(scene.text, 10, 6) }}>
          {scene.text}
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-[10%] left-1/2 w-[54%] -translate-x-1/2 text-center text-sm" style={{ color: palette.inkSoft }}>
      {scene.subline}
    </div>
  </div>
);

const duoPosterTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-y-0 left-0 w-[48%]" style={{ backgroundColor: palette.surfaceAlt }} />
    <div className="absolute inset-y-0 right-0 w-[52%]" style={{ backgroundColor: palette.accentSoft }} />
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65 }}
      className="absolute left-[6%] top-[18%] z-20 max-w-[38%] font-black uppercase leading-[0.86]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 11, 5.5) }}
    >
      {scene.text}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.12 }}
      className="absolute right-[7%] bottom-[18%] max-w-[30%] text-right text-sm leading-relaxed"
      style={{ color: palette.ink }}
    >
      {scene.subline}
    </motion.div>
  </div>
);

const scanArchiveTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `linear-gradient(${palette.inkSoft} 1px, transparent 1px)`, backgroundSize: "100% 6px" }} />
    <motion.div
      {...frameTransition}
      className="absolute left-[8%] top-[16%] z-20 rounded-[1.5rem] border px-6 py-5"
      style={{
        borderColor: palette.accentSoft,
        backgroundColor: "rgba(0,0,0,0.24)",
        color: palette.accent,
      }}
    >
      archive / scene #{scene.id.split("-")[1]}
    </motion.div>
    <motion.div
      {...frameTransition}
      className="absolute left-[8%] right-[8%] top-[36%] z-20 font-black uppercase leading-[0.88]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 10, 5.5) }}
    >
      {scene.text}
    </motion.div>
    <div className="absolute bottom-[10%] left-[8%] text-sm uppercase tracking-[0.34em]" style={{ color: palette.inkSoft }}>
      {scene.cue}
    </div>
  </div>
);

const refRedNoirTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={`${scene.id}-redbar-${index}`}
          className="absolute"
          style={{
            top: `${index * 14}%`,
            left: index % 2 === 0 ? "0%" : "56%",
            width: index % 2 === 0 ? "58%" : "44%",
            height: `${8 + (index % 3) * 2}%`,
            backgroundColor: palette.accent,
          }}
        />
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, x: -26, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.58 }}
      className="absolute left-[7%] top-[18%] z-20 max-w-[54%] font-black uppercase leading-[0.8]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 12, 5.2), textShadow: `8px 8px 0 ${palette.accent}` }}
    >
      {scene.text}
    </motion.div>
    <div className="absolute right-[7%] top-[16%] grid w-[26%] grid-cols-2 gap-2">
      {scene.tokens.slice(0, 4).map((token, index) => (
        <div key={`${scene.id}-tokenred-${token}-${index}`} className="rounded-[1rem] border px-3 py-6 text-center text-[11px] uppercase tracking-[0.26em]" style={{ borderColor: palette.accentSoft, color: palette.inkSoft }}>
          {token}
        </div>
      ))}
    </div>
  </div>
);

const refAcidPosterTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `radial-gradient(${palette.inkSoft} 1px, transparent 1px)`, backgroundSize: "10px 10px" }} />
    <motion.div
      {...frameTransition}
      className="absolute left-[8%] top-[18%] z-20 font-black uppercase leading-[0.84]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 14, 6), letterSpacing: "-0.06em" }}
    >
      <span style={{ textShadow: `4px 0 0 ${palette.accent}` }}>{scene.text}</span>
    </motion.div>
    <div className="absolute left-[8%] bottom-[16%] flex flex-wrap gap-2">
      {scene.tokens.slice(0, 5).map((token, index) => (
        <div key={`${scene.id}-acid-${token}-${index}`} className="rounded-full border px-3 py-1 text-xs font-black uppercase" style={{ borderColor: palette.inkSoft, backgroundColor: index % 2 === 0 ? palette.accent : "transparent", color: palette.ink }}>
          {token}
        </div>
      ))}
    </div>
  </div>
);

const refDiamondHudTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-[54%] w-[54%] rotate-45 border" style={{ borderColor: palette.ink }}>
        <div className="absolute inset-[14%] border" style={{ borderColor: palette.inkSoft }} />
        <div className="absolute inset-[30%] border" style={{ borderColor: palette.accentSoft }} />
      </div>
    </div>
    <motion.div
      {...frameTransition}
      className="absolute left-1/2 top-1/2 z-20 w-[60%] -translate-x-1/2 -translate-y-1/2 text-center font-black uppercase leading-[0.86]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 10, 4.8) }}
    >
      {scene.text}
    </motion.div>
  </div>
);

const refClockOrbitTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-[62%] w-[62%] rounded-full border" style={{ borderColor: palette.inkSoft }}>
        <div className="absolute inset-[8%] rounded-full border" style={{ borderColor: palette.inkSoft }} />
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`${scene.id}-tick-${index}`}
            className="absolute left-1/2 top-1/2 h-[46%] w-px origin-bottom"
            style={{ backgroundColor: palette.inkSoft, transform: `translate(-50%, -100%) rotate(${index * 30}deg)` }}
          />
        ))}
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute left-1/2 top-1/2 z-20 w-[44%] -translate-x-1/2 -translate-y-1/2 text-center font-black uppercase leading-[0.9]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 8, 4.2) }}
    >
      {scene.text}
    </motion.div>
  </div>
);

const refCodeClusterTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 18 }).map((_, index) => (
      <div
        key={`${scene.id}-code-${index}`}
        className="absolute rounded-[0.75rem] border px-2 py-1 font-mono text-[10px] leading-relaxed"
        style={{
          left: `${4 + (index % 6) * 16}%`,
          top: `${8 + Math.floor(index / 6) * 25}%`,
          borderColor: "rgba(255,255,255,0.04)",
          color: index % 5 === 0 ? palette.accent : palette.inkSoft,
          backgroundColor: "rgba(255,255,255,0.02)",
        }}
      >
        import_{scene.tokens[index % scene.tokens.length] ?? "spark"}
      </div>
    ))}
    <motion.div
      {...frameTransition}
      className="absolute left-1/2 top-1/2 z-20 w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border px-6 py-5 text-center font-black uppercase leading-[0.9]"
      style={{ color: palette.ink, borderColor: palette.accentSoft, backgroundColor: "rgba(0,0,0,0.72)", fontSize: getTextScale(scene.text, 9, 4.8) }}
    >
      {scene.text}
    </motion.div>
  </div>
);

const refBauhausBlocksTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-[12%] top-[20%] grid w-[58%] grid-cols-4 gap-3">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={`${scene.id}-bau-${index}`}
          className="aspect-square rounded-[1.1rem] shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          style={{
            background: [
              "linear-gradient(135deg, #3050ff, #5d73ff)",
              "linear-gradient(135deg, #ff6c3e, #ffb24d)",
              "linear-gradient(135deg, #ffffff, #e6e6e6)",
              "linear-gradient(135deg, #0e0e10, #2f2f35)",
            ][index % 4],
          }}
        />
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="absolute right-[8%] bottom-[16%] z-20 max-w-[32%] text-right font-black uppercase leading-[0.86]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 8, 4.4) }}
    >
      {scene.text}
    </motion.div>
  </div>
);

const refWarpPopTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-[8%] top-[12%] h-[56%] w-[38%] rounded-full" style={{ backgroundColor: palette.accentSoft, filter: "blur(10px)" }} />
    <div className="absolute right-[10%] top-[14%] h-[48%] w-[30%] rounded-[2rem] border-4" style={{ borderColor: palette.inkSoft, backgroundColor: palette.surfaceAlt }} />
    <motion.div
      {...frameTransition}
      className="absolute left-[10%] bottom-[14%] z-20 max-w-[48%] font-black uppercase leading-[0.82]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 10, 4.8), textShadow: `4px 4px 0 ${palette.accent}` }}
    >
      {scene.text}
    </motion.div>
    {renderTokenRow(scene, palette)}
  </div>
);

const refCrimsonKanjiTemplate = ({ scene, palette }: TemplateRenderProps) => {
  const chars = Array.from(scene.text).slice(0, 4);
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-3">
        {chars.map((char, index) => (
          <motion.div
            key={`${scene.id}-kanji-${char}-${index}`}
            initial={{ opacity: 0, y: 30, scale: 0.86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="font-black leading-none"
            style={{
              color: palette.ink,
              fontSize: "clamp(6rem, 15vw, 14rem)",
              textShadow: `0 0 20px ${palette.glow}, 10px 10px 0 ${palette.accent}`,
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 opacity-12" style={{ backgroundImage: `radial-gradient(${palette.ink} 1px, transparent 1px)`, backgroundSize: "14px 14px" }} />
    </div>
  );
};

const refScanPanelsTemplate = ({ scene, palette }: TemplateRenderProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-[7%] top-[10%] grid w-[32%] gap-3">
      {scene.tokens.slice(0, 4).map((token, index) => (
        <div key={`${scene.id}-scan-${token}-${index}`} className="rounded-[1rem] border px-4 py-4 text-sm font-black uppercase tracking-[0.24em]" style={{ borderColor: palette.accentSoft, backgroundColor: index % 2 === 0 ? palette.accentSoft : "rgba(255,255,255,0.03)", color: palette.ink }}>
          {token}
        </div>
      ))}
    </div>
    <motion.div
      {...frameTransition}
      className="absolute right-[7%] top-[18%] z-20 w-[54%] font-black uppercase leading-[0.84]"
      style={{ color: palette.ink, fontSize: getTextScale(scene.text, 11, 5.2) }}
    >
      {scene.text}
    </motion.div>
    <div className="absolute right-[7%] bottom-[14%] w-[42%] border-t pt-4 text-sm uppercase tracking-[0.3em]" style={{ borderColor: palette.accentSoft, color: palette.inkSoft }}>
      {scene.subline}
    </div>
  </div>
);

export const TEMPLATE_REGISTRY: SparkTemplateDef[] = [
  { id: "split-screen", name: "Split Screen", tag: "Core", description: "左右切屏构图，适合主标题和副标题分区展示", render: splitScreenTemplate },
  { id: "vertical-columns", name: "Vertical Columns", tag: "Core", description: "竖排字符列，适合短句和日系标题节奏", render: verticalColumnsTemplate },
  { id: "echo-stack", name: "Echo Stack", tag: "Core", description: "文字残影堆叠，强调重复和回声感", render: echoStackTemplate },
  { id: "subtitle-burst", name: "Subtitle Burst", tag: "Core", description: "中心字幕爆发卡片，适合歌词或强调句", render: subtitleBurstTemplate },
  { id: "warning-tape", name: "Warning Tape", tag: "Core", description: "警示胶带式横幅，适合强告警和冲击画面", render: warningTapeTemplate },
  { id: "terminal-monolith", name: "Terminal Monolith", tag: "Core", description: "终端窗口主视觉，适合命令行和系统提示感", render: terminalMonolithTemplate },
  { id: "magazine-cut", name: "Magazine Cut", tag: "Core", description: "杂志剪贴式非对称排版，适合编辑感短镜头", render: magazineCutTemplate },
  { id: "orbit-ring", name: "Orbit Ring", tag: "Core", description: "环形轨道焦点，适合循环、时间和旋转意象", render: orbitRingTemplate },
  { id: "barcode-signal", name: "Barcode Signal", tag: "Core", description: "条码信号画面，适合扫描和识别主题", render: barcodeSignalTemplate },
  { id: "karaoke-rail", name: "Karaoke Rail", tag: "Core", description: "歌词轨道式进度条，适合节拍同步展示", render: karaokeRailTemplate },
  { id: "grid-window", name: "Grid Window", tag: "Core", description: "九宫格窗口构图，适合模块化信息展示", render: gridWindowTemplate },
  { id: "halo-monument", name: "Halo Monument", tag: "Core", description: "纪念碑式中心光环，适合庄重聚焦画面", render: haloMonumentTemplate },
  { id: "duo-poster", name: "Duo Poster", tag: "Core", description: "双色海报分区，适合双主题和对照表达", render: duoPosterTemplate },
  { id: "scan-archive", name: "Scan Archive", tag: "Core", description: "扫描档案式面板，适合资料归档和索引场景", render: scanArchiveTemplate },
  { id: "ref-red-noir", name: "Red Noir", tag: "Ref", description: "黑红压迫式海报切面，参考 WORLD FAILED 一类构图", render: refRedNoirTemplate },
  { id: "ref-acid-poster", name: "Acid Poster", tag: "Ref", description: "高亮酸性底色配错位文字，参考 Angel 的轻脏质感", render: refAcidPosterTemplate },
  { id: "ref-diamond-hud", name: "Diamond HUD", tag: "Ref", description: "极简菱形 HUD 焦点，参考黑白几何短镜头", render: refDiamondHudTemplate },
  { id: "ref-clock-orbit", name: "Clock Orbit", tag: "Ref", description: "黑场钟盘和轨道线，参考时钟素材类视觉", render: refClockOrbitTemplate },
  { id: "ref-code-cluster", name: "Code Cluster", tag: "Ref", description: "小块代码漂浮加中心焦点，参考 code grid 画面", render: refCodeClusterTemplate },
  { id: "ref-bauhaus-blocks", name: "Bauhaus Blocks", tag: "Ref", description: "柔软几何积木和展陈阴影，参考未来包豪斯块面", render: refBauhausBlocksTemplate },
  { id: "ref-warp-pop", name: "Warp Pop", tag: "Ref", description: "二次元波普+贴纸感的图形封面语言", render: refWarpPopTemplate },
  { id: "ref-crimson-kanji", name: "Crimson Kanji", tag: "Ref", description: "猩红汉字主画面，参考日系红黑情绪短片", render: refCrimsonKanjiTemplate },
  { id: "ref-scan-panels", name: "Scan Panels", tag: "Ref", description: "左模块右主标题的信息面板构图", render: refScanPanelsTemplate },
];

export const TEMPLATE_MAP = Object.fromEntries(
  TEMPLATE_REGISTRY.map((template) => [template.id, template]),
) as Record<string, SparkTemplateDef>;
