// src/components/Footer.tsx
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame, useMotionValue, useMotionTemplate } from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const useHardwareMetrics = (uptimeRef: React.RefObject<HTMLSpanElement>) => {
  const fps = useMotionValue(0);
  const memory = useMotionValue("0x000000");
  useEffect(() => {
    let frameCount = 0, lastTime = performance.now(), startTime = performance.now(), rAF: number;
    const updateMetrics = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 500) {
        fps.set(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0; lastTime = now;
        const perf = performance as any;
        if (perf.memory && perf.memory.usedJSHeapSize) {
          const mb = perf.memory.usedJSHeapSize / (1024 * 1024);
          const hexMem = Math.floor(mb * 10000).toString(16).toUpperCase();
          memory.set(`0x${hexMem.padStart(6, '0')}`);
        } else memory.set(`0x${Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0')}`);
      }
      if (uptimeRef.current) uptimeRef.current.textContent = ((now - startTime) / 1000).toFixed(1) + "s";
      rAF = requestAnimationFrame(updateMetrics);
    };
    rAF = requestAnimationFrame(updateMetrics);
    return () => cancelAnimationFrame(rAF);
  }, [fps, memory, uptimeRef]);
  const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 'UNKNOWN' : 8;
  return { fps, memory, cores };
};

interface KineticMarqueeProps { baseVelocity: number; scrollVelocity: any; }
const KineticMarquee: React.FC<KineticMarqueeProps> = ({ baseVelocity, scrollVelocity }) => {
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
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
      <motion.div className="flex whitespace-nowrap flex-nowrap text-6xl md:text-8xl font-bold uppercase tracking-tighter font-mono text-gray-400/40 will-change-transform transform-gpu" style={{ x }}>
        <span className="block px-8">WINDOWS 98 // END USER AGREEMENT</span>
        <span className="block px-8">WINDOWS 98 // END USER AGREEMENT</span>
        <span className="block px-8">WINDOWS 98 // END USER AGREEMENT</span>
        <span className="block px-8">WINDOWS 98 // END USER AGREEMENT</span>
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

  useEffect(() => {
    let lastScale = 0;
    return scrollVelocity.on("change", (latest) => {
      if (!svgFilterRef.current) return;
      const absVelocity = Math.abs(latest);
      let tearIntensity = 0;
      if (absVelocity > 80) tearIntensity = Math.min(absVelocity * 0.012, 20);
      if (Math.abs(tearIntensity - lastScale) > 0.5 || (tearIntensity === 0 && lastScale !== 0)) {
        svgFilterRef.current.setAttribute("scale", tearIntensity.toString());
        lastScale = tearIntensity;
      }
    });
  }, [scrollVelocity]);

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1]);
  const fpsText = useMotionTemplate`[${fps}]`;
  const memoryText = useMotionTemplate`${memory}`;

  return (
    <footer ref={footerRef} className="relative mt-32 border-t-2 border-gray-500 bg-[#c0c0c0] overflow-hidden transform-gpu">
      <svg className="hidden">
        <filter id="scroll-tear-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.08 0.04" numOctaves="1" result="noise" />
          <feDisplacementMap ref={svgFilterRef} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#00000005_0px,#00000005_2px,transparent_2px,transparent_8px)] pointer-events-none z-0" />
      <motion.div style={{ y, opacity, filter: "url(#scroll-tear-filter)" }} className="container mx-auto px-6 py-12 flex flex-col items-center justify-center relative z-10 will-change-transform transform-gpu">
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-center z-0">
          <KineticMarquee baseVelocity={-1.5} scrollVelocity={scrollVelocity} />
        </div>
        <div className="relative z-10 flex flex-col items-center mb-12 group cursor-default">
          <div className="text-[10px] font-mono tracking-[0.3em] text-gray-700 mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-500" />
            FINAL NOTICE
            <span className="w-8 h-px bg-gray-500" />
          </div>
          <p className="text-gray-800 text-lg md:text-2xl font-mono tracking-wide uppercase text-center drop-shadow-sm transition-all duration-300">
            Love is <span className="font-bold text-gray-900 group-hover:text-red-700 transition-colors">murderous</span> utopia.
          </p>
        </div>
        <div className="w-full max-w-4xl border-2 border-gray-600 bg-[#ece9d8] p-3 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-wider text-gray-700 relative z-10 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]">
          <div className="flex items-center gap-2 relative group">
            <span className="w-2 h-2 bg-gray-700 rounded-full" />
            <span>CPU: [{cores} CORES]</span>
          </div>
          <div className="flex items-center gap-2 group relative">
            <span className="text-gray-600">MEM:</span>
            <motion.span className="text-gray-800 w-20 text-right">{memoryText}</motion.span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">UPTIME:</span>
            <span className="text-gray-800 w-16" ref={uptimeRef}>0.0s</span>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-400 pl-4 group relative">
            <span className="text-gray-600">FPS:</span>
            <motion.span className="text-gray-800 font-bold w-12" style={{ color: useTransform(fps, [0, 50, 60], ["#a00000", "#006000", "#006000"]) }}>
              {fpsText}
            </motion.span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-between text-gray-600 text-[9px] font-mono border-t border-gray-400 pt-6 mt-10 w-full max-w-4xl relative z-10">
          <span>© {new Date().getFullYear()} MICROSOFT CORP. // ALL RIGHTS RESERVED</span>
          <div className="flex items-center gap-4">
            <div className="relative group cursor-default">
              <span className="group-hover:opacity-0 transition-opacity duration-200 border border-gray-500 px-2 py-1">WINDOWS 98</span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none text-gray-800 font-bold overflow-hidden border border-gray-700 bg-gray-200">
                <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }} className="flex flex-col">
                  <span>4.10.1998</span><span>4.10.1998</span>
                </motion.div>
              </div>
            </div>
            <span>BUILT ON LEGACY CODE.</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;