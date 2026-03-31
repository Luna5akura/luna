// src/pages/Skill.tsx (或 Wow.tsx)
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Cpu, Database, Globe, Layers, Zap, Terminal as TerminalIcon, Code2, Network, Crosshair, Hexagon } from 'lucide-react';
import { cn } from "@/lib/utils";

const SKILLS_DATA =[
  { id: "front", title: "FRONTEND CORE", hex: "00A1", icon: Globe, color: "#000000", stats:[0.95, 0.40, 0.85, 0.60, 0.90, 0.50], desc: "Manipulating the DOM at the speed of thought. Advanced React concurrency, Fiber architecture, and WebAssembly integration.", subs:[{ n: "React/Next.js", v: 98 }, { n: "Vue/Nuxt", v: 85 }] },
  { id: "sys", title: "SYSTEM ARCH", hex: "00B2", icon: Database, color: "#000000", stats:[0.50, 0.95, 0.40, 0.90, 0.80, 0.85], desc: "Designing highly available, distributed microservices. Fault tolerance, gRPC communication, and message queuing algorithms.", subs:[{ n: "Microservices", v: 92 }, { n: "Kafka/Redis", v: 88 }] },
  { id: "webgl", title: "GRAPHICS API", hex: "00C3", icon: Layers, color: "#000000", stats:[0.85, 0.30, 0.98, 0.40, 0.70, 0.30], desc: "Bypassing the CPU to communicate directly with the GPU. Custom GLSL shaders, rasterization math, and matrix transformations.", subs:[{ n: "Three.js/WebGL", v: 95 }, { n: "GLSL Shaders", v: 80 }] },
  { id: "perf", title: "OPTIMIZATION", hex: "00D4", icon: Zap, color: "#000000", stats:[0.90, 0.80, 0.80, 0.70, 0.99, 0.60], desc: "Obsessive latency reduction. V8 engine heuristics, memory leak tracing, and hardware-accelerated rendering pathways.", subs:[{ n: "Lighthouse 100", v: 99 }, { n: "Mem Profiling", v: 90 }] },
  { id: "backend", title: "NODE & RUST", hex: "00E5", icon: TerminalIcon, color: "#000000", stats:[0.60, 0.90, 0.50, 0.85, 0.80, 0.70], desc: "Low-level system programming meets scalable event-driven backends. Memory safety and high-throughput thread management.", subs:[{ n: "Node.js Core", v: 95 }, { n: "Rust (Actix)", v: 75 }] },
  { id: "type", title: "TYPE SYSTEMS", hex: "00F6", icon: Code2, color: "#000000", stats:[0.85, 0.70, 0.50, 0.60, 0.85, 0.40], desc: "Strict structural typing. Turing-complete generic metaprogramming to ensure zero runtime type exceptions.", subs:[{ n: "TypeScript", v: 96 }, { n: "Type Gymnastics", v: 85 }] },
];
const RADAR_LABELS =["FRONTEND", "BACKEND", "WEBGL", "SYS_ARCH", "PERFORMANCE", "DEVOPS"];

const NeuralMatrixCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;
    let width = window.innerWidth, height = window.innerHeight;
    canvas.width = width; canvas.height = height;
    const PARTICLE_COUNT = 100;
    const CONNECT_DIST = 150;
    const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
    const px = new Float32Array(PARTICLE_COUNT);
    const py = new Float32Array(PARTICLE_COUNT);
    const vx = new Float32Array(PARTICLE_COUNT);
    const vy = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      px[i] = Math.random() * width;
      py[i] = Math.random() * height;
      vx[i] = (Math.random() - 0.5) * 0.8;
      vy[i] = (Math.random() - 0.5) * 0.8;
    }
    let mouseX = -1000, mouseY = -1000;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -1000; mouseY = -1000; };
    const onResize = () => { width = window.innerWidth; height = window.innerHeight; canvas.width = width; canvas.height = height; };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    let rAF: number;
    const render = () => {
      const currentScrollY = window.scrollY;
      const dy = currentScrollY - lastScrollY;
      scrollVelocity = scrollVelocity * 0.9 + dy * 0.1;
      lastScrollY = currentScrollY;
      ctx.fillStyle = 'rgba(236, 233, 216, 0.3)';
      ctx.fillRect(0, 0, width, height);
      ctx.lineWidth = 0.5;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const totalVy = vy[i] - scrollVelocity * 0.3;
        px[i] += vx[i];
        py[i] += totalVy;
        if (px[i] < 0) px[i] = width; else if (px[i] > width) px[i] = 0;
        if (py[i] < 0) py[i] = height; else if (py[i] > height) py[i] = 0;
        const dx = px[i] - mouseX, dyDist = py[i] - mouseY;
        if (dx * dx + dyDist * dyDist < 10000) {
          px[i] += dx * 0.02;
          py[i] += dyDist * 0.02;
        }
        ctx.fillStyle = `rgba(0, 0, 0, 0.3)`;
        ctx.fillRect(px[i] - 1, py[i] - 1, 2, 2);
      }
      ctx.beginPath();
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = px[i] - px[j], dyDist = py[i] - py[j];
          const distSq = dx * dx + dyDist * dyDist;
          if (distSq < CONNECT_DIST_SQ) {
            const alpha = (1 - Math.sqrt(distSq) / CONNECT_DIST) * 0.3;
            ctx.moveTo(px[i], py[i]);
            ctx.lineTo(px[j], py[j]);
            ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
            ctx.stroke();
            ctx.beginPath();
          }
        }
      }
      rAF = requestAnimationFrame(render);
    };
    rAF = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rAF);
    };
  },[]);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30" />;
};

const QuantumCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 400, damping: 25 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 25 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      <motion.div 
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-black rounded-full"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-6 h-6 border border-gray-600 flex items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <Crosshair className="w-3 h-3 text-gray-600" />
      </motion.div>
    </div>
  );
};

const GlitchText = ({ text, isActive }: { text: string, isActive: boolean }) => {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!isActive) return;
    let iter = 0; const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const interval = setInterval(() => {
      setDisplay(text.split("").map((c, i) => (i < iter ? text[i] : chars[Math.floor(Math.random() * chars.length)])).join(""));
      if (iter >= text.length) clearInterval(interval);
      iter += 1 / 2;
    }, 30);
    return () => clearInterval(interval);
  }, [text, isActive]);
  return <span className="font-mono">{display}</span>;
};

const MorphingRadar = ({ targetStats, color }: { targetStats: number[], color: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentStats = useRef([...targetStats]);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true }); if (!ctx) return;
    let rAF: number; let time = 0; const sides = 6;
    const render = () => {
      time += 0.05;
      const width = canvas.width = canvas.offsetWidth; const height = canvas.height = canvas.offsetHeight;
      const cx = width / 2; const cy = height / 2; const radius = Math.min(width, height) * 0.35;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      for (let step = 1; step <= 4; step++) {
        const r = radius * (step / 4); ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
          const a = (Math.PI * 2 * i) / sides - Math.PI / 2;
          const px = cx + Math.cos(a) * r; const py = cy + Math.sin(a) * r;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(0, 0, 0, ${step === 4 ? 0.3 : 0.1})`; ctx.stroke();
      }
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '10px "Courier New", monospace';
      for (let i = 0; i < sides; i++) {
        const a = (Math.PI * 2 * i) / sides - Math.PI / 2;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'; ctx.stroke();
        ctx.fillStyle = '#4a4a4a'; ctx.fillText(RADAR_LABELS[i], cx + Math.cos(a) * (radius + 25), cy + Math.sin(a) * (radius + 25));
      }
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const idx = i % sides;
        currentStats.current[idx] += (targetStats[idx] - currentStats.current[idx]) * 0.15;
        const val = currentStats.current[idx];
        const a = (Math.PI * 2 * idx) / sides - Math.PI / 2;
        const px = cx + Math.cos(a) * radius * val; const py = cy + Math.sin(a) * radius * val;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.fillStyle = `rgba(0, 0, 0, 0.2)`; ctx.fill(); ctx.strokeStyle = '#000000'; ctx.lineWidth = 2; ctx.stroke();
      rAF = requestAnimationFrame(render);
    };
    render(); return () => cancelAnimationFrame(rAF);
  }, [targetStats, color]);
  return <canvas ref={canvasRef} className="w-full h-full transform-gpu" style={{ minHeight: '300px' }} />;
};

const OrbitalSkillMatrix = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSkill = SKILLS_DATA[activeIndex];
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timeRef = useRef(0);
  const isHovered = useRef(false);
  useEffect(() => {
    let rAF: number;
    const render = () => {
      const targetSpeed = isHovered.current ? 0.001 : 0.003;
      timeRef.current += targetSpeed;
      const items = itemsRef.current; const total = items.length;
      const rect = containerRef.current?.getBoundingClientRect();
      const radiusX = rect ? rect.width * 0.35 : 180; const radiusZ = rect ? rect.width * 0.25 : 120;
      items.forEach((el, i) => {
        if (!el) return;
        const angle = (i / total) * Math.PI * 2 + timeRef.current;
        const x = Math.cos(angle) * radiusX; const z = Math.sin(angle) * radiusZ;
        const y = Math.sin(angle * 2) * 15;
        const scale = (z + radiusZ) / (radiusZ * 2) * 0.6 + 0.5;
        const opacity = (z + radiusZ) / (radiusZ * 2) * 0.8 + 0.2;
        const zIndex = Math.round(z + radiusZ);
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
        el.style.opacity = opacity.toString();
        el.style.zIndex = zIndex.toString();
      });
      rAF = requestAnimationFrame(render);
    };
    rAF = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rAF);
  },[]);
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center min-h-[600px] w-full">
      <div 
        ref={containerRef}
        className="relative flex-1 w-full h-[400px] lg:h-[600px] flex items-center justify-center group"
        onMouseEnter={() => isHovered.current = true} onMouseLeave={() => isHovered.current = false}
      >
        <div className="absolute w-32 h-32 rounded-full border border-gray-500 flex items-center justify-center">
           <div className="w-16 h-16 rounded-full bg-[#f5f3e8] border border-gray-400 flex items-center justify-center">
              <Hexagon className="w-8 h-8 text-gray-500 animate-[spin_10s_linear_infinite]" />
           </div>
           <div className="absolute w-[80%] h-[80%] scale-[2.5] rounded-[50%] border border-dashed border-gray-400 pointer-events-none" />
        </div>
        {SKILLS_DATA.map((skill, i) => {
          const Icon = skill.icon; const isActive = activeIndex === i;
          return (
            <div
              key={skill.id} ref={(el) => (itemsRef.current[i] = el)}
              onMouseEnter={() => setActiveIndex(i)}
              className={cn(
                "absolute flex flex-col items-center justify-center p-3 cursor-default transition-colors duration-200 will-change-transform",
                "bg-[#f5f3e8] border rounded-sm",
                isActive ? "border-gray-700 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]" : "border-gray-400 hover:border-gray-600"
              )}
              style={{ width: '80px', height: '80px', transformOrigin: 'center center' }}
            >
              <Icon size={24} color={isActive ? '#000000' : '#808080'} />
              <div className="mt-1 text-[8px] font-mono tracking-wider text-center" style={{ color: isActive ? '#000000' : '#808080' }}>
                {skill.hex}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-1 w-full max-w-md bg-[#f5f3e8] border border-gray-500 relative p-1 pb-6 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-400" />
        <div className="p-6 border-b border-gray-400">
           <div className="flex justify-between items-start mb-4">
              <div className="text-[10px] font-mono text-gray-600 tracking-wider flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full animate-ping bg-gray-600" />
                 DATALINK ESTABLISHED
              </div>
              <div className="text-[10px] font-mono text-gray-500">PING: 1ms</div>
           </div>
           <h3 className="text-3xl font-black font-mono tracking-tighter uppercase text-black">
             <GlitchText text={activeSkill.title} isActive={true} />
           </h3>
           <p className="mt-4 text-xs font-mono text-gray-600 leading-relaxed min-h-[60px]">{activeSkill.desc}</p>
        </div>
        <div className="w-full h-[280px] p-4 relative">
           <MorphingRadar targetStats={activeSkill.stats} color="#000000" />
        </div>
        <div className="px-6 flex flex-col gap-3">
           {activeSkill.subs.map((sub, i) => (
             <div key={i} className="w-full">
                <div className="flex justify-between text-[10px] font-mono text-gray-700 mb-1"><span>{sub.n}</span><span>{sub.v}%</span></div>
                <div className="w-full h-1 bg-gray-300 overflow-hidden relative">
                   <motion.div 
                     className="absolute top-0 left-0 h-full bg-gray-700"
                     initial={{ width: 0 }} animate={{ width: `${sub.v}%` }} transition={{ duration: 0.6, type: "spring" }} key={activeSkill.id + i} 
                   />
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

const KineticBanner = () => {
  const { scrollY } = useScroll(); const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity,[0, 1000],[0, 3], { clamp: false });
  const skewFactor = useTransform(smoothVelocity,[-1000, 1000],[5, -5]);
  const baseX = useMotionValue(0); const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let safeDelta = delta > 50 ? 16 : delta;
    let moveBy = directionFactor.current * -1.5 * (safeDelta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1; else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min; return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  return (
    <div className="w-full overflow-hidden border-y border-gray-400 bg-[#ece9d8] py-6 my-24 relative">
      <motion.div className="flex whitespace-nowrap flex-nowrap w-[400vw] relative will-change-transform transform-gpu" style={{ x, skewX: skewFactor }}>
        <span className="block px-8 text-3xl md:text-5xl font-black font-mono tracking-tighter text-gray-400 uppercase">
          FULL_STACK_MASTERY // ZERO_RUNTIME_ERRORS // HARDWARE_ACCELERATED // PERFORMANCE_EXTREMIST // 
          FULL_STACK_MASTERY // ZERO_RUNTIME_ERRORS // HARDWARE_ACCELERATED // PERFORMANCE_EXTREMIST //
        </span>
      </motion.div>
    </div>
  );
};

export default function Wow() {
  return (
    <div className="min-h-screen w-full bg-[#ece9d8] text-gray-800 relative overflow-x-clip selection:bg-gray-500 selection:text-white cursor-default">
      <QuantumCursor />
      <NeuralMatrixCanvas />
      <div className="fixed inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#00000005_2px,#00000005_4px)] pointer-events-none z-10 opacity-30" />
      <main className="relative z-20 w-full mx-auto pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12">
          <header className="mb-24">
            <div className="flex items-center gap-4 mb-6 text-[10px] font-mono text-gray-600 tracking-wider uppercase">
              <span className="w-16 h-[2px] bg-gray-600" />
              SYS.CORE // DIAGNOSTICS
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-gray-800">
              NEURAL <br />
              <span className="text-gray-600">ARCHITECTURE</span>
            </h1>
          </header>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-8 text-[10px] font-mono text-gray-600 tracking-wider uppercase border-b border-gray-400 pb-4">
            <span className="flex items-center gap-2">
              <Network className="w-4 h-4 text-gray-700" />
              ORBITAL MATRIX ACTIVE
            </span>
            <span className="animate-pulse">AWAITING INTERACTION...</span>
          </div>
          <OrbitalSkillMatrix />
        </div>
        <KineticBanner />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-[200vh] relative" /> {/* 占位，原 IsometricCoreUnpack 已简化，可自行保留 */}
        </div>
      </main>
    </div>
  );
}