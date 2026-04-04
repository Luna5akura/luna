// src/components/Footer.tsx
import React, { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue,
  useMotionTemplate
} from 'framer-motion';

// 安全模运算（保持不变）
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const useHardwareMetrics = (uptimeRef: React.RefObject<HTMLSpanElement>) => {
  const fps = useMotionValue(0);
  const memory = useMotionValue("0x000000");
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let startTime = performance.now();
    let rAF: number;
    const updateMetrics = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 500) {
        fps.set(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
        const perf = performance as any;
        if (perf.memory?.usedJSHeapSize) {
          const mb = perf.memory.usedJSHeapSize / (1024 * 1024);
          const hexMem = Math.floor(mb * 10000).toString(16).toUpperCase();
          memory.set(`0x${hexMem.padStart(6, '0')}`);
        } else {
          memory.set(`0x${Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0')}`);
        }
      }
      if (uptimeRef.current) {
        uptimeRef.current.textContent = ((now - startTime) / 1000).toFixed(3) + "s";
      }
      rAF = requestAnimationFrame(updateMetrics);
    };
    rAF = requestAnimationFrame(updateMetrics);
    return () => cancelAnimationFrame(rAF);
  }, [fps, memory, uptimeRef]);
  const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 'UNKNOWN' : 8;
  return { fps, memory, cores };
};

interface KineticMarqueeProps {
  baseVelocity: number;
  scrollVelocity: any;
}

const KineticMarquee: React.FC<KineticMarqueeProps> = ({ baseVelocity, scrollVelocity }) => {
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    const currentVelocityFactor = velocityFactor.get();
    if (currentVelocityFactor < 0) directionFactor.current = -1;
    else if (currentVelocityFactor > 0) directionFactor.current = 1;

    const moveBy = directionFactor.current * baseVelocity * (delta / 1000) * (1 + currentVelocityFactor);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex whitespace-nowrap flex-nowrap w-[200vw] relative left-[-50vw] pointer-events-none select-none">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap text-8xl md:text-[10rem] font-black uppercase tracking-[-4px] font-mono text-cyan-900/20 will-change-transform transform-gpu"
        style={{ x }}
      >
        <span className="block px-8 drop-shadow-[0_0_20px_rgba(14,165,233,0.15)]">SYSTEM_HALT // DATA_DUMP</span>
        <span className="block px-8 drop-shadow-[0_0_20px_rgba(14,165,233,0.15)]">SYSTEM_HALT // DATA_DUMP</span>
        <span className="block px-8 drop-shadow-[0_0_20px_rgba(14,165,233,0.15)]">SYSTEM_HALT // DATA_DUMP</span>
        <span className="block px-8 drop-shadow-[0_0_20px_rgba(14,165,233,0.15)]">SYSTEM_HALT // DATA_DUMP</span>
      </motion.div>
    </div>
  );
};

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const svgFilterRef = useRef<SVGFEDisplacementMapElement>(null);
  const uptimeRef = useRef<HTMLSpanElement>(null);

  const { scrollYProgress, scrollY } = useScroll({ target: footerRef, offset: ["start end", "end end"] });
  const { fps, memory, cores } = useHardwareMetrics(uptimeRef);
  const scrollVelocity = useVelocity(scrollY);

  // SVG 滤镜节流（更柔和的死区）
  useEffect(() => {
    let lastScale = 0;
    return scrollVelocity.on("change", (latest) => {
      if (!svgFilterRef.current) return;
      const absVelocity = Math.abs(latest);
      let tearIntensity = 0;
      if (absVelocity > 80) {
        tearIntensity = Math.min(absVelocity * 0.012, 22);
      }
      if (Math.abs(tearIntensity - lastScale) > 0.4 || (tearIntensity === 0 && lastScale !== 0)) {
        svgFilterRef.current.setAttribute("scale", tearIntensity.toString());
        lastScale = tearIntensity;
      }
    });
  }, [scrollVelocity]);

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const fpsText = useMotionTemplate`[${fps}]`;
  const memoryText = useMotionTemplate`${memory}`;

  return (
    <footer
      ref={footerRef}
      className="relative mt-32 border-t border-cyan-900/40 bg-[#02040a] overflow-hidden transform-gpu"
    >
      <svg className="hidden">
        <filter id="scroll-tear-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.08 0.04" numOctaves="1" result="noise" />
          <feDisplacementMap ref={svgFilterRef} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* 极弱数据雨背景 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMTQsMTY1LDIyOSwwLjA4KSIvPjwvc3ZnPg==')] opacity-10 pointer-events-none z-0" />

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/30 to-transparent z-0 pointer-events-none" />

      <motion.div
        style={{ y, opacity, filter: "url(#scroll-tear-filter)" }}
        className="container mx-auto px-6 py-20 flex flex-col items-center justify-center relative z-10 will-change-transform transform-gpu"
      >
        {/* 动态字幕 */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-center z-0">
          <KineticMarquee baseVelocity={-2.2} scrollVelocity={scrollVelocity} />
        </div>

        {/* 哲学引言 */}
        <div className="relative z-10 flex flex-col items-center mb-16 group cursor-crosshair">
          <div className="text-[10px] font-mono tracking-[0.5em] text-cyan-600 mb-6 flex items-center gap-3">
            <span className="w-10 h-px bg-cyan-800" />
            FINAL_DIRECTIVE
            <span className="w-10 h-px bg-cyan-800" />
          </div>
          <p className="text-slate-200 text-lg md:text-2xl font-mono tracking-[0.25em] uppercase text-center drop-shadow-[0_0_20px_rgba(14,165,233,0.25)] transition-all duration-700">
            Love is <span className="font-black text-cyan-400 group-hover:text-red-500 transition-colors drop-shadow-[0_0_15px_currentColor] animate-pulse">murderous</span> utopia.
          </p>
        </div>

        {/* 硬件状态栏 */}
        <div className="w-full max-w-4xl border border-cyan-900/40 bg-[#05080f]/90 backdrop-blur-md p-5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-widest text-cyan-700 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.85)] will-change-transform transform-gpu rounded-sm">
          <div className="flex items-center gap-2 relative group">
            <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#0ea5e9]" />
            <span>SYS.THREADS:[0x{cores.toString(16).toUpperCase().padStart(2, '0')}]</span>
            <span className="absolute -top-7 left-0 text-[8px] bg-cyan-950/90 px-2 py-px opacity-0 group-hover:opacity-100 transition-opacity">LOGICAL_CORES</span>
          </div>

          <div className="flex items-center gap-2 group relative">
            <span className="text-slate-500">MEM.HEAP_ALLOC:</span>
            <motion.span className="text-cyan-400 w-20 text-right">{memoryText}</motion.span>
            <span className="absolute -top-7 left-0 text-[8px] bg-cyan-950/90 px-2 py-px opacity-0 group-hover:opacity-100 transition-opacity">V8_HEAP_SNIFFER</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500">SESSION_UPTIME:</span>
            <span className="text-cyan-400 w-16" ref={uptimeRef}>0.000s</span>
          </div>

          <div className="flex items-center gap-2 border-l border-cyan-900/50 pl-6 group relative">
            <span className="text-slate-500">FPS:</span>
            <motion.span className="text-cyan-400 font-bold w-12" style={{ color: useTransform(fps, [0, 50, 60], ["#ef4444", "#0ea5e9", "#0ea5e9"]) }}>
              {fpsText}
            </motion.span>
            <span className="absolute -top-7 left-0 text-[8px] bg-cyan-950/90 px-2 py-px opacity-0 group-hover:opacity-100 transition-opacity">rAF_DELTA</span>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-between text-cyan-900/60 text-[9px] font-mono border-t border-cyan-900/30 pt-6 mt-12 w-full max-w-4xl relative z-10">
          <span>© {new Date().getFullYear()} LUNA_PROTOCOL. // SYS.ONLINE</span>
          <div className="flex items-center gap-4">
            <div className="relative group cursor-none">
              <span className="group-hover:opacity-0 transition-opacity duration-300 border border-cyan-900/30 px-3 py-1">LUNA_CORE</span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none text-cyan-400 font-bold overflow-hidden border border-cyan-400 bg-cyan-950/80">
                <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} className="flex flex-col">
                  <span>0x4C</span><span>0x55</span><span>0x4E</span><span>0x41</span>
                  <span>0x4C</span><span>0x55</span><span>0x4E</span><span>0x41</span>
                </motion.div>
              </div>
            </div>
            <span>CC BY-SA 3.0 UNPORTED.</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;