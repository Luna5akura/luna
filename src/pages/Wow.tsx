// src/pages/Skill.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Cpu, Database, Globe, Layers, Zap, Terminal as TerminalIcon, Code2, Network, Crosshair, Hexagon } from 'lucide-react';
import { cn } from "@/lib/utils";

// ==========================================
// 数据模型
// ==========================================
const SKILLS_DATA =[
  { id: "front", title: "FRONTEND_CORE", hex: "00A1", icon: Globe, color: "#22d3ee", stats:[0.95, 0.40, 0.85, 0.60, 0.90, 0.50], desc: "Manipulating the DOM at the speed of thought. Advanced React concurrency, Fiber architecture, and WebAssembly integration.", subs:[{ n: "React/Next.js", v: 98 }, { n: "Vue/Nuxt", v: 85 }] },
  { id: "sys", title: "SYSTEM_ARCH", hex: "00B2", icon: Database, color: "#a855f7", stats:[0.50, 0.95, 0.40, 0.90, 0.80, 0.85], desc: "Designing highly available, distributed microservices. Fault tolerance, gRPC communication, and message queuing algorithms.", subs:[{ n: "Microservices", v: 92 }, { n: "Kafka/Redis", v: 88 }] },
  { id: "webgl", title: "GRAPHICS_API", hex: "00C3", icon: Layers, color: "#ec4899", stats:[0.85, 0.30, 0.98, 0.40, 0.70, 0.30], desc: "Bypassing the CPU to communicate directly with the GPU. Custom GLSL shaders, rasterization math, and matrix transformations.", subs:[{ n: "Three.js/WebGL", v: 95 }, { n: "GLSL Shaders", v: 80 }] },
  { id: "perf", title: "OPTIMIZATION", hex: "00D4", icon: Zap, color: "#eab308", stats:[0.90, 0.80, 0.80, 0.70, 0.99, 0.60], desc: "Obsessive latency reduction. V8 engine heuristics, memory leak tracing, and hardware-accelerated rendering pathways.", subs:[{ n: "Lighthouse 100", v: 99 }, { n: "Mem Profiling", v: 90 }] },
  { id: "backend", title: "NODE_&_RUST", hex: "00E5", icon: TerminalIcon, color: "#10b981", stats:[0.60, 0.90, 0.50, 0.85, 0.80, 0.70], desc: "Low-level system programming meets scalable event-driven backends. Memory safety and high-throughput thread management.", subs:[{ n: "Node.js Core", v: 95 }, { n: "Rust (Actix)", v: 75 }] },
  { id: "type", title: "TYPE_SYSTEMS", hex: "00F6", icon: Code2, color: "#3b82f6", stats:[0.85, 0.70, 0.50, 0.60, 0.85, 0.40], desc: "Strict structural typing. Turing-complete generic metaprogramming to ensure zero runtime type exceptions.", subs:[{ n: "TypeScript", v: 96 }, { n: "Type Gymnastics", v: 85 }] },
];
const RADAR_LABELS =["FRONTEND", "BACKEND", "WEBGL", "SYS_ARCH", "PERFORMANCE", "DEVOPS"];

// ==========================================
// 【回归炫技：多普勒动能粒子背景 (Doppler Scroll Particles)】
// 读取真实 window.scrollY 物理速度，产生红移蓝移残影
// ==========================================
const NeuralMatrixCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = 150;
    const CONNECT_DIST = 150;
    const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;

    const px = new Float32Array(PARTICLE_COUNT);
    const py = new Float32Array(PARTICLE_COUNT);
    const vx = new Float32Array(PARTICLE_COUNT);
    const vy = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      px[i] = Math.random() * width;
      py[i] = Math.random() * height;
      vx[i] = (Math.random() - 0.5) * 1.5;
      vy[i] = (Math.random() - 0.5) * 1.5;
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
      scrollVelocity = scrollVelocity * 0.9 + dy * 0.1; // 摩擦力平滑
      lastScrollY = currentScrollY;

      // 运动模糊轨迹
      ctx.fillStyle = 'rgba(2, 5, 10, 0.4)';
      ctx.fillRect(0, 0, width, height);
      ctx.lineWidth = 1;
      
      const absVelocity = Math.abs(scrollVelocity);
      
      // 多普勒颜色插值：红移 / 蓝移
      let r = 6, g = 182, b = 212; 
      if (scrollVelocity > 2) { r = 239; g = 68; b = 68; } 
      else if (scrollVelocity < -2) { r = 34; g = 211; b = 238; } 

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const totalVy = vy[i] - scrollVelocity * 0.5;
        px[i] += vx[i];
        py[i] += totalVy;

        if (px[i] < 0) px[i] = width; else if (px[i] > width) px[i] = 0;
        if (py[i] < 0) py[i] = height; else if (py[i] > height) py[i] = 0;

        const dx = px[i] - mouseX;
        const dyDist = py[i] - mouseY;
        if (dx * dx + dyDist * dyDist < 20000) {
          px[i] += dx * 0.02;
          py[i] += dyDist * 0.02;
        }

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        if (absVelocity > 1) {
           ctx.fillRect(px[i] - 1, py[i] - absVelocity, 2, absVelocity * 2 + 2);
        } else {
           ctx.fillRect(px[i] - 1, py[i] - 1, 2, 2);
        }
      }

      ctx.beginPath();
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = px[i] - px[j];
          const dyDist = py[i] - py[j];
          const distSq = dx * dx + dyDist * dyDist;
          
          if (distSq < CONNECT_DIST_SQ) {
            const alpha = (1 - Math.sqrt(distSq) / CONNECT_DIST) * (absVelocity > 5 ? 0.1 : 0.5);
            ctx.moveTo(px[i], py[i]);
            ctx.lineTo(px[j], py[j]);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
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

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 mix-blend-screen" />;
};

// ==========================================
// 【物理弹簧游标】 (修复鼠标消失问题)
// ==========================================
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
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] mix-blend-screen"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full mix-blend-screen flex items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <Crosshair className="w-4 h-4 text-cyan-400/30 opacity-50" />
      </motion.div>
    </div>
  );
};

// ==========================================
// 【乱码解密与动态流体雷达】
// ==========================================
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
        ctx.strokeStyle = `rgba(34, 211, 238, ${step === 4 ? 0.4 : 0.1})`; ctx.stroke();
      }
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '10px "JetBrains Mono", monospace';
      for (let i = 0; i < sides; i++) {
        const a = (Math.PI * 2 * i) / sides - Math.PI / 2;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.2)'; ctx.stroke();
        ctx.fillStyle = '#64748b'; ctx.fillText(RADAR_LABELS[i], cx + Math.cos(a) * (radius + 25), cy + Math.sin(a) * (radius + 25));
      }
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const idx = i % sides;
        currentStats.current[idx] += (targetStats[idx] - currentStats.current[idx]) * 0.15;
        const pulse = Math.sin(time + idx) * 0.03; const val = currentStats.current[idx] + pulse;
        const a = (Math.PI * 2 * idx) / sides - Math.PI / 2;
        const px = cx + Math.cos(a) * radius * val; const py = cy + Math.sin(a) * radius * val;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.fillStyle = `${color}33`; ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
      rAF = requestAnimationFrame(render);
    };
    render(); return () => cancelAnimationFrame(rAF);
  }, [targetStats, color]);
  return <canvas ref={canvasRef} className="w-full h-full transform-gpu" style={{ minHeight: '300px' }} />;
};

// ==========================================
// 【3D 动态轨道核心】
// ==========================================
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
      const targetSpeed = isHovered.current ? 0.001 : 0.005;
      timeRef.current += targetSpeed;
      const items = itemsRef.current; const total = items.length;
      const rect = containerRef.current?.getBoundingClientRect();
      const radiusX = rect ? rect.width * 0.35 : 180; const radiusZ = rect ? rect.width * 0.25 : 120;

      items.forEach((el, i) => {
        if (!el) return;
        const angle = (i / total) * Math.PI * 2 + timeRef.current;
        const x = Math.cos(angle) * radiusX; const z = Math.sin(angle) * radiusZ;
        const y = Math.sin(angle * 2) * 20; 
        const scale = (z + radiusZ) / (radiusZ * 2) * 0.6 + 0.5; 
        const opacity = (z + radiusZ) / (radiusZ * 2) * 0.8 + 0.2;
        const zIndex = Math.round(z + radiusZ);

        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
        el.style.opacity = opacity.toString();
        el.style.zIndex = zIndex.toString();
        el.style.filter = `brightness(${scale * 1.2})`;
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
        <div className="absolute w-32 h-32 rounded-full border border-cyan-500/30 flex items-center justify-center shadow-[inset_0_0_50px_rgba(6,182,212,0.2)]">
           <div className="w-16 h-16 rounded-full bg-[#05050A] shadow-[0_0_30px_rgba(0,0,0,1)] border border-cyan-900/50 flex items-center justify-center overflow-hidden">
              <Hexagon className="w-8 h-8 text-cyan-500/50 animate-[spin_10s_linear_infinite]" />
           </div>
           <div className="absolute w-[80%] h-[80%] scale-[2.5] rounded-[50%] border-[1px] border-dashed border-cyan-900/40 transform rotate-x-60 pointer-events-none" />
        </div>

        {SKILLS_DATA.map((skill, i) => {
          const Icon = skill.icon; const isActive = activeIndex === i;
          return (
            <div
              key={skill.id} ref={(el) => (itemsRef.current[i] = el)}
              onMouseEnter={() => setActiveIndex(i)}
              className={cn(
                "absolute flex flex-col items-center justify-center p-4 cursor-crosshair transition-colors duration-300 will-change-transform",
                "bg-[#02050A]/80 backdrop-blur-md border rounded-lg",
                isActive ? "" : "border-cyan-900/50 hover:border-cyan-700"
              )}
              style={{
                width: '100px',
                height: '100px',
                transformOrigin: 'center center',
                borderColor: isActive ? skill.color : undefined,
                boxShadow: isActive ? `0 0 30px ${skill.color}40` : undefined,
              }}
            >
              <Icon size={28} color={isActive ? skill.color : '#64748b'} className={isActive ? "animate-pulse" : ""} />
              <div className="mt-2 text-[10px] font-mono tracking-widest text-center" style={{ color: isActive ? skill.color : '#64748b' }}>
                {skill.hex}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex-1 w-full max-w-md bg-[#050505]/90 border border-cyan-900/50 relative p-1 pb-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-md" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
        <div className="p-6 border-b border-cyan-900/30">
           <div className="flex justify-between items-start mb-4">
              <div className="text-[10px] font-mono text-cyan-600 tracking-widest flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeSkill.color }} />
                 DATALINK_ESTABLISHED
              </div>
              <div className="text-[10px] font-mono text-slate-500">PING: 1ms</div>
           </div>
           <h3 className="text-3xl font-black font-mono tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ color: activeSkill.color }}>
             <GlitchText text={activeSkill.title} isActive={true} />
           </h3>
           <p className="mt-4 text-xs font-mono text-slate-400 leading-relaxed min-h-[60px]">{activeSkill.desc}</p>
        </div>
        <div className="w-full h-[280px] p-4 relative bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]">
           <MorphingRadar targetStats={activeSkill.stats} color={activeSkill.color} />
        </div>
        <div className="px-6 flex flex-col gap-3">
           {activeSkill.subs.map((sub, i) => (
             <div key={i} className="w-full">
                <div className="flex justify-between text-[10px] font-mono text-cyan-500 mb-1"><span>{sub.n}</span><span>{sub.v}%</span></div>
                <div className="w-full h-1 bg-cyan-950/50 overflow-hidden relative">
                   <motion.div 
                     className="absolute top-0 left-0 h-full shadow-[0_0_10px_currentcolor]" style={{ backgroundColor: activeSkill.color }}
                     initial={{ width: 0 }} animate={{ width: `${sub.v}%` }} transition={{ duration: 0.8, type: "spring" }} key={activeSkill.id + i} 
                   />
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 【等距视角全息核心爆炸图 (Isometric Blueprint Unpack)】
// ==========================================
const IsometricCoreUnpack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });

  const topLayerZ = useTransform(scrollYProgress, [0.1, 0.4, 0.8],[0, 160, 200]);
  const bottomLayerZ = useTransform(scrollYProgress,[0.1, 0.4, 0.8],[0, -160, -200]);
  const coreRotateZ = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  const hud1Opacity = useTransform(scrollYProgress, [0.2, 0.3],[0, 1]);
  const hud1X = useTransform(scrollYProgress,[0.2, 0.3], [-50, 0]);

  const hud2Opacity = useTransform(scrollYProgress,[0.4, 0.5],[0, 1]);
  const hud2X = useTransform(scrollYProgress,[0.4, 0.5], [50, 0]);

  const hud3Opacity = useTransform(scrollYProgress,[0.6, 0.7], [0, 1]);
  const hud3X = useTransform(scrollYProgress, [0.6, 0.7],[-50, 0]);

  const scannerY = useTransform(scrollYProgress,[0, 1],["-20%", "120%"]);

  return (
    // 注意：去除了 bg-[#02050A] ，让底层的物理多普勒粒子能透射出来！
    <div ref={containerRef} className="relative h-[300vh] w-full bg-transparent">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-[2000px]">
        
        {/* 背景扫描网格（叠加在粒子层之上） */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
        
        <motion.div 
          className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#22d3ee] z-50 pointer-events-none"
          style={{ top: scannerY }}
        />

        {/* 核心 3D 解体结构 */}
        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80"
          style={{ rotateX: 60, rotateZ: coreRotateZ, transformStyle: "preserve-3d" }}
        >
          {/* 【第 3 层】 底部硬件基座 */}
          <motion.div 
            className="absolute inset-0 bg-[#050B14]/90 border-2 border-slate-700 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] flex items-center justify-center backdrop-blur-md"
            style={{ translateZ: bottomLayerZ, transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-2 border border-slate-700 rounded-xl bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%)] bg-[size:20px_20px]" />
            <div className="w-24 h-24 bg-slate-950 border border-slate-800 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,1)] flex items-center justify-center">
               <Database className="w-10 h-10 text-slate-500" />
            </div>
          </motion.div>

          {/* 【第 2 层】 中间逻辑主板 */}
          <motion.div 
            className="absolute inset-0 bg-[#02050A]/80 border-2 border-cyan-700/50 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center overflow-hidden"
            style={{ translateZ: 0, transformStyle: "preserve-3d" }}
          >
             <div className="absolute w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full animate-pulse" />
             <div className="w-20 h-20 bg-cyan-950/80 border border-cyan-400/50 rounded-lg transform rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <Cpu className="w-8 h-8 text-cyan-300 transform -rotate-45" />
             </div>
             <div className="absolute inset-4 border border-cyan-900/40 rounded-xl" />
          </motion.div>

          {/* 【第 1 层】 顶部 UI 玻璃盖板 */}
          <motion.div 
            className="absolute inset-0 bg-cyan-400/5 border border-cyan-300/30 rounded-2xl backdrop-blur-md shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center"
            style={{ translateZ: topLayerZ, transformStyle: "preserve-3d" }}
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-100/10 to-transparent opacity-50 rounded-2xl" />
             <div className="w-full h-full p-4 grid grid-cols-3 grid-rows-3 gap-2 opacity-80">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-full h-full border border-cyan-200/20 rounded-sm bg-cyan-500/10" />
                ))}
             </div>
             <Globe className="absolute w-12 h-12 text-cyan-200/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          </motion.div>

          {/* 中轴发光能量柱 */}
          <motion.div 
            className="absolute left-1/2 top-1/2 w-[2px] bg-gradient-to-b from-cyan-300 via-cyan-500 to-transparent -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#22d3ee]"
            style={{ height: useTransform(topLayerZ, (z) => `${Number(z) * 2 + 10}px`), rotateX: -90 }} 
          />
        </motion.div>

        {/* HUD 平面数据浮窗 */}
        <motion.div 
          className="absolute top-[20%] left-[5%] md:left-[15%] w-64 bg-[#02050A]/70 border-l-2 border-cyan-400 p-4 backdrop-blur-md shadow-lg"
          style={{ opacity: hud1Opacity, x: hud1X }}
        >
          <div className="text-[10px] text-cyan-500 font-mono tracking-widest mb-2 border-b border-cyan-900/50 pb-1">LAYER_01 // PRESENTATION</div>
          <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2">Cognitive Glass</h4>
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            Ultra-responsive DOM execution. Resolving complex UI states through React Fiber tree diffing algorithms.
          </p>
        </motion.div>

        <motion.div 
          className="absolute top-[45%] right-[5%] md:right-[15%] w-64 bg-[#02050A]/70 border-r-2 border-cyan-500 p-4 backdrop-blur-md text-right shadow-lg"
          style={{ opacity: hud2Opacity, x: hud2X }}
        >
          <div className="text-[10px] text-cyan-600 font-mono tracking-widest mb-2 border-b border-cyan-900/50 pb-1 justify-end flex">LAYER_02 // LOGIC_CORE</div>
          <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2">V8 Execution Engine</h4>
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            Asynchronous event loops. Memory allocation and garbage collection management.
          </p>
        </motion.div>

        <motion.div 
          className="absolute bottom-[20%] left-[5%] md:left-[15%] w-64 bg-[#02050A]/70 border-l-2 border-slate-500 p-4 backdrop-blur-md shadow-lg"
          style={{ opacity: hud3Opacity, x: hud3X }}
        >
          <div className="text-[10px] text-slate-500 font-mono tracking-widest mb-2 border-b border-slate-800 pb-1">LAYER_03 // HARDWARE</div>
          <h4 className="text-xl font-black text-slate-200 uppercase tracking-tight mb-2">Metal Infrastructure</h4>
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            Bare-metal container orchestration. Persistent database clusters and TCP/UDP socket telemetry streams.
          </p>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono text-cyan-600 tracking-widest uppercase">
          <span>SCROLL_TO_DISSECT</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 辅助动能横幅 
// ==========================================
const KineticBanner = () => {
  const { scrollY } = useScroll(); const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity,[0, 1000],[0, 5], { clamp: false });
  const skewFactor = useTransform(smoothVelocity,[-1000, 1000],[10, -10]);
  const baseX = useMotionValue(0); const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let safeDelta = delta > 50 ? 16 : delta; 
    let moveBy = directionFactor.current * -2 * (safeDelta / 1000);
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
    <div className="w-full overflow-hidden border-y border-cyan-900/30 bg-[#02050A]/50 backdrop-blur-sm py-8 my-24 relative shadow-[0_0_50px_rgba(6,182,212,0.05)] mix-blend-lighten">
      <motion.div className="flex whitespace-nowrap flex-nowrap w-[400vw] relative will-change-transform transform-gpu" style={{ x, skewX: skewFactor }}>
        <span className="block px-8 text-4xl md:text-6xl font-black font-mono tracking-tighter text-cyan-900/40 uppercase">
          FULL_STACK_MASTERY // ZERO_RUNTIME_ERRORS // HARDWARE_ACCELERATED // PERFORMANCE_EXTREMIST // 
          FULL_STACK_MASTERY // ZERO_RUNTIME_ERRORS // HARDWARE_ACCELERATED // PERFORMANCE_EXTREMIST //
        </span>
      </motion.div>
    </div>
  );
};

// ==========================================
// 主页面组合
// ==========================================
export default function Wow() {
  return (
    <div className="min-h-screen w-full bg-[#02050A] text-slate-300 relative overflow-x-clip selection:bg-cyan-500/50 cursor-none">
      
      {/* 确保自定义游标在绝对最顶层 */}
      <QuantumCursor />

      {/* 恢复并置于最底层的全局动能粒子系统 (多普勒效应背景) */}
      <NeuralMatrixCanvas />

      {/* 全局CRT遮罩，压在背景粒子之上，提升赛博质感 */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none z-10 mix-blend-overlay opacity-50" />

      {/* 主体内容，必须浮于背景之上 */}
      <main className="relative z-20 w-full mx-auto pb-32">
        
        {/* 头部标题区域 */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12">
          <header className="mb-24">
            <div className="flex items-center gap-4 mb-6 text-[10px] font-mono text-cyan-500 tracking-[0.4em] uppercase">
              <span className="w-16 h-[2px] bg-cyan-600 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              SYS.CORE // DIAGNOSTICS
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-slate-100">
              NEURAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-700">
                ARCHITECTURE
              </span>
            </h1>
          </header>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-8 text-[10px] font-mono text-cyan-600 tracking-[0.2em] uppercase border-b border-cyan-900/50 pb-4">
            <span className="flex items-center gap-2">
              <Network className="w-4 h-4 text-cyan-500" />
              ORBITAL_MATRIX_ACTIVE
            </span>
            <span className="animate-pulse">AWAITING_INTERACTION...</span>
          </div>
          <OrbitalSkillMatrix />
        </div>

        <KineticBanner />

        <IsometricCoreUnpack />

      </main>
    </div>
  );
}
