// src/pages/Skill.tsx
import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue, useAnimationFrame, useMotionTemplate } from 'framer-motion';
import { Cpu, Database, Globe, Layers, Zap, Terminal as TerminalIcon, Code2, Network, Crosshair, AlertTriangle } from 'lucide-react';
import { cn } from "@/lib/utils";

// ==========================================
// 【顶级炫技点 1：多普勒效应动能粒子 (Doppler Scroll Particles)】
// 不仅使用 TypedArray 榨取极限性能，更在 Canvas 的原生渲染循环中直接读取 window.scrollY！
// 当用户发生物理滚动时，粒子会被拉拽产生速度残影，并根据滚动方向发生红移（Redshift）或蓝移（Blueshift），零 React 开销！
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
      // 获取真实的滚动物理动量
      const currentScrollY = window.scrollY;
      const dy = currentScrollY - lastScrollY;
      scrollVelocity = scrollVelocity * 0.9 + dy * 0.1; // 摩擦力平滑
      lastScrollY = currentScrollY;

      // 运动模糊轨迹：用带透明度的黑色填充替代 clearRect
      ctx.fillStyle = 'rgba(2, 5, 10, 0.4)';
      ctx.fillRect(0, 0, width, height);
      ctx.lineWidth = 1;
      
      const absVelocity = Math.abs(scrollVelocity);
      
      // 多普勒颜色插值：向下滚(正)偏红，向上滚(负)偏青，静止偏灰青
      let r = 6, g = 182, b = 212; // 基础青色
      if (scrollVelocity > 2) { r = 239; g = 68; b = 68; } // 红移
      else if (scrollVelocity < -2) { r = 34; g = 211; b = 238; } // 蓝移

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // 叠加滚动速度到 Y 轴
        const totalVy = vy[i] - scrollVelocity * 0.5;
        px[i] += vx[i];
        py[i] += totalVy;

        // 无缝穿透边界
        if (px[i] < 0) px[i] = width; else if (px[i] > width) px[i] = 0;
        if (py[i] < 0) py[i] = height; else if (py[i] > height) py[i] = 0;

        const dx = px[i] - mouseX;
        const dyDist = py[i] - mouseY;
        if (dx * dx + dyDist * dyDist < 20000) {
          px[i] += dx * 0.02;
          py[i] += dyDist * 0.02;
        }

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        // 当有滚动速度时，将粒子拉伸成线条展现速度感 (Squash & Stretch)
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
// 【顶级炫技点 2：终端内核日志硬件级推流 (Kernel Log Streamer)】
// ==========================================
const KernelLogStreamer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const DUMMY_LOGS = [
    "SYS_INIT: Loading neural weights [0x00A1F]...",
    "WARN: Bypassing security protocol in Sector 7G...",
    "ALLOCATING MEMORY: 1024TB Dedicated VRAM...",
    "SUCCESS: React Fiber Tree fully decoupled.",
    "COMPILING: shaders/hologram.glsl (Opt Level: O3)...",
    "HOOK: IntersectionObserver attached to viewport.",
    "MOUNT: Cybernetic implants initialized.",
    "ERR_WARN: Cognitive overload imminent. Injecting coolant...",
    "SYNC: Mainframe connection established. Ping: 1ms."
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    let rAF: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      if (time - lastTime > 120) {
        lastTime = time;
        const log = DUMMY_LOGS[Math.floor(Math.random() * DUMMY_LOGS.length)];
        const hex = Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
        
        const line = document.createElement('div');
        line.className = "text-cyan-600/80 mb-1 leading-none";
        line.innerHTML = `<span class="text-cyan-800 mr-2">[0x${hex}]</span>${log}`;
        
        container.appendChild(line);
        if (container.childElementCount > 25) {
          container.removeChild(container.firstElementChild!);
        }
        container.scrollTop = container.scrollHeight;
      }
      rAF = requestAnimationFrame(render);
    };
    rAF = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rAF);
  },[]);

  return (
    <div className="w-full h-48 bg-[#02050A] border border-cyan-900/50 p-4 font-mono text-[10px] sm:text-xs overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-sm">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
      <div ref={containerRef} className="relative z-0 h-full w-full flex flex-col justify-end" />
      <div className="absolute bottom-4 right-4 text-cyan-500 animate-pulse font-bold text-xs">_</div>
    </div>
  );
};

// ==========================================
// 【顶级炫技点 3：物理光照 3D 技能卡片 (Holographic Datapad)】
// ==========================================
const HolographicSkillCard = ({ title, category, icon, hex }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{left: number, top: number, width: number, height: number} | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useMotionValue(0), { damping: 25, stiffness: 200, mass: 0.5 });
  const rotateY = useSpring(useMotionValue(0), { damping: 25, stiffness: 200, mass: 0.5 });
  const glareOpacity = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseEnter = () => {
    if (cardRef.current) rectRef.current = cardRef.current.getBoundingClientRect();
    glareOpacity.set(1);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    const cx = e.clientX - left;
    const cy = e.clientY - top;
    
    mouseX.set(cx);
    mouseY.set(cy);

    rotateX.set(((cy - height / 2) / (height / 2)) * -15);
    rotateY.set(((cx - width / 2) / (width / 2)) * 15);
  };

  const handleMouseLeave = () => {
    glareOpacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
    rectRef.current = null;
  };

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(34, 211, 238, 0.2) 0%, transparent 60%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative w-full h-48 bg-[#05050A]/80 border border-cyan-900/40 rounded-sm p-5 cursor-crosshair will-change-transform transform-gpu shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:border-cyan-500/50 transition-colors"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0" style={{ transform: "translateZ(-10px)" }} />

      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none mix-blend-screen will-change-transform transform-gpu"
        style={{ background: glareBackground, opacity: glareOpacity }}
      />

      <div className="relative z-20 flex flex-col justify-between h-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start">
          <div className="p-2 bg-cyan-950/40 border border-cyan-900/50 rounded-sm text-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
            {icon}
          </div>
          <div className="text-[9px] font-mono text-cyan-800 tracking-widest uppercase">
            SECTOR_{hex}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-slate-500 mb-1 tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 group-hover:bg-cyan-400 group-hover:animate-pulse" />
            {category}
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-200 group-hover:text-white uppercase tracking-tighter drop-shadow-[0_0_8px_transparent] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 【顶级炫技点 4：动能文本流 (Kinetic Velocity Typography)】
// ==========================================
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const KineticBanner = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const skewFactor = useTransform(smoothVelocity, [-1000, 1000],[10, -10]);
  
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -2 * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden border-y border-cyan-900/30 bg-cyan-950/10 py-6 my-24 relative">
      <motion.div 
        className="flex whitespace-nowrap flex-nowrap w-[400vw] relative will-change-transform transform-gpu"
        style={{ x, skewX: skewFactor }}
      >
        <span className="block px-8 text-3xl md:text-5xl font-black font-mono tracking-tighter text-cyan-900/40 uppercase">
          FULL_STACK_MASTERY // PERFORMANCE_EXTREMIST // 144HZ_ADDICT // HARDWARE_ACCELERATED // 
          FULL_STACK_MASTERY // PERFORMANCE_EXTREMIST // 144HZ_ADDICT // HARDWARE_ACCELERATED // 
          FULL_STACK_MASTERY // PERFORMANCE_EXTREMIST // 144HZ_ADDICT // HARDWARE_ACCELERATED // 
          FULL_STACK_MASTERY // PERFORMANCE_EXTREMIST // 144HZ_ADDICT // HARDWARE_ACCELERATED // 
        </span>
      </motion.div>
    </div>
  );
};

// ==========================================
// 【新增炫技点 5：Z轴透视空间深潜 (Z-Axis Data Dive)】
// 高达 300vh 的物理占位空间。随着向下滚动，监听 scrollYProgress 并将其映射到
// 多个 3D 数据面板的 translateZ 和 opacity 上，产生极具压迫感的视觉穿梭感！
// ==========================================
const ZAxisDataDive = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // 获取该区域内的相对滚动进度 (0 to 1)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // 预生成 5 个面板的动画映射
  const panels = [0, 1, 2, 3, 4].map((i) => {
    // 每个面板有不同的触发区间，越靠后的面板越晚迎面扑来
    const start = i * 0.15;
    const peak = start + 0.2;
    const end = peak + 0.2;

    // Z 轴从深远处的 -1000px 冲向相机的 500px（穿过屏幕）
    const z = useTransform(scrollYProgress,[start, peak, end], [-1000, 0, 800]);
    // 渐显 -> 最亮 -> 淡出
    const opacity = useTransform(scrollYProgress, [start, peak, end],[0, 1, 0]);
    // 物理缩放加强压迫感
    const scale = useTransform(scrollYProgress, [start, peak, end], [0.5, 1, 1.5]);

    return { z, opacity, scale, index: i };
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* 粘性容器：将其钉在屏幕视口中，直到 300vh 滚动完毕 */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[800px]">
        
        {/* 背景辅助网格线，产生隧道感 */}
        <div className="absolute inset-0 border border-cyan-900/20 m-12 md:m-24 pointer-events-none opacity-30 flex items-center justify-center">
          <div className="w-[1px] h-full bg-cyan-900/40 absolute left-1/3" />
          <div className="w-[1px] h-full bg-cyan-900/40 absolute right-1/3" />
          <div className="h-[1px] w-full bg-cyan-900/40 absolute top-1/3" />
          <div className="h-[1px] w-full bg-cyan-900/40 absolute bottom-1/3" />
          <div className="absolute w-32 h-32 border border-cyan-500/50 rounded-full flex items-center justify-center">
            <Crosshair className="w-8 h-8 text-cyan-500/50" />
          </div>
        </div>

        {panels.map(({ z, opacity, scale, index }) => (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center justify-center w-[80vw] max-w-2xl p-8 border border-cyan-500/30 bg-[#050505]/90 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.1)] will-change-transform transform-gpu"
            style={{ 
              z, 
              opacity, 
              scale,
              rotateX: (index % 2 === 0 ? 5 : -5), // 轻微的物理随机偏航
              rotateY: (index % 2 !== 0 ? 5 : -5)
            }}
          >
             <div className="w-full flex justify-between text-[10px] font-mono text-cyan-500 mb-4 border-b border-cyan-900/50 pb-2">
                <span>PROTOCOL_LAYER_{index + 1}</span>
                <span>STATUS: OVERRIDDEN</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tighter text-white uppercase text-center w-full drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
               {["Neural Mapping", "Memory Allocation", "Thread Dispatcher", "V8 Engine Hooks", "Kernel Panic"][index]}
             </h2>
             <div className="mt-4 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
             <div className="mt-4 text-xs font-mono text-slate-400 text-center uppercase tracking-[0.2em]">
                Bypassing security node 0x{(index * 1337).toString(16).toUpperCase()}...
             </div>
          </motion.div>
        ))}

        {/* 屏幕下方的指示器 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] font-mono text-cyan-600 tracking-widest uppercase">
          <span>SCROLL_TO_DECRYPT</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 【新增炫技点 6：量子雷达极客图 (Quantum Radar Canvas)】
// 纯数学驱动的多边形能力雷达图。0 React State，0 对象分配，
// 直接利用 requestAnimationFrame 和正余弦矩阵重绘。
// ==========================================
const QuantumRadarCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let rAF: number;
    let time = 0;
    // 技能六维数值 (0-1)
    const stats =[0.95, 0.85, 0.9, 0.75, 0.98, 0.88];
    const labels =["FRONTEND", "BACKEND", "WEBGL", "SYS_ARCH", "PERFORMANCE", "DEVOPS"];
    const sides = 6;

    const render = () => {
      time += 0.05;
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.35;

      ctx.clearRect(0, 0, width, height);
      
      // 绘制底层背景网格 (雷达的环)
      ctx.lineWidth = 1;
      for (let step = 1; step <= 4; step++) {
        const r = radius * (step / 4);
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
          const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
          const px = cx + Math.cos(angle) * r;
          const py = cy + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(8, 145, 178, ${step === 4 ? 0.5 : 0.2})`;
        ctx.stroke();
      }

      // 绘制轴线和文字
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '10px "JetBrains Mono", monospace';
      
      for (let i = 0; i < sides; i++) {
        const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
        const px = cx + Math.cos(angle) * radius;
        const py = cy + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = 'rgba(8, 145, 178, 0.3)';
        ctx.stroke();

        // 文字
        const textOffset = 25;
        const tx = cx + Math.cos(angle) * (radius + textOffset);
        const ty = cy + Math.sin(angle) * (radius + textOffset);
        ctx.fillStyle = '#22d3ee';
        ctx.fillText(labels[i], tx, ty);
      }

      // 绘制技能多边形
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const idx = i % sides;
        // 赋予雷达边缘轻微的呼吸脉冲感
        const pulse = Math.sin(time + idx) * 0.02; 
        const val = stats[idx] + pulse;
        const angle = (Math.PI * 2 * idx) / sides - Math.PI / 2;
        const px = cx + Math.cos(angle) * radius * val;
        const py = cy + Math.sin(angle) * radius * val;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      
      ctx.fillStyle = 'rgba(34, 211, 238, 0.15)';
      ctx.fill();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#06b6d4';
      ctx.stroke();
      ctx.shadowBlur = 0; // 重置阴影防止污染下一帧

      rAF = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(rAF);
  },[]);

  return <canvas ref={canvasRef} className="w-full h-full transform-gpu" style={{ minHeight: '400px' }} />;
};

// ==========================================
// 【新增炫技点 7：系统级核心转储 (Intersection Core Dump)】
// 使用 IntersectionObserver 监听底部区域，一旦滑入视口，
// 瞬间用纯粹的 DOM Node 写入产生海量的 Hex 乱码，模拟机器崩溃的数据转储效果。
// ==========================================
const CoreDumpSection = () => {
  const containerRef = useRef<HTMLPreElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // 生成 5000 字符的 Hex 数据流
        let dump = "";
        for (let i = 0; i < 500; i++) {
          dump += Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, '0') + " ";
          if (i % 12 === 0) dump += "\n";
        }
        containerRef.current!.textContent = dump;
        containerRef.current!.classList.add('animate-glitch');
        observer.disconnect(); // 触发一次后销毁
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  },[]);

  return (
    <div className="relative w-full border border-red-900/50 bg-red-950/10 p-6 mt-32 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-pulse" />
      <div className="flex items-center gap-3 text-red-500 mb-4 font-mono font-bold text-sm tracking-widest uppercase">
        <AlertTriangle className="w-5 h-5" />
        FATAL_SYS_ERROR // CORE_DUMP_INITIATED
      </div>
      <pre 
        ref={containerRef}
        className="text-[8px] sm:text-[10px] text-red-700/60 font-mono leading-tight break-all whitespace-pre-wrap select-none h-64 overflow-hidden mask-y"
      >
        AWAITING_INTERSECTION...
      </pre>
      <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-transparent to-transparent pointer-events-none" />
    </div>
  );
};


// ==========================================
// 主页面：Skill
// ==========================================
export default function Skill() {
  const skills =[
    { title: "React & Next.js", category: "Frontend Core", hex: "00A1", icon: <Globe className="w-5 h-5" /> },
    { title: "TypeScript", category: "Type System", hex: "00B2", icon: <Code2 className="w-5 h-5" /> },
    { title: "WebGL & Canvas", category: "Graphics API", hex: "00C3", icon: <Layers className="w-5 h-5" /> },
    { title: "Node.js & Rust", category: "Backend / CLI", hex: "00D4", icon: <TerminalIcon className="w-5 h-5" /> },
    { title: "Performance", category: "Optimization", hex: "00E5", icon: <Zap className="w-5 h-5" /> },
    { title: "System Arch", category: "Infrastructure", hex: "00F6", icon: <Database className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-[#02050A] text-slate-300 relative overflow-x-hidden selection:bg-cyan-500/30">
      
      <NeuralMatrixCanvas />
      
      {/* 页面全局遮罩与扫描线 */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-50 mix-blend-overlay opacity-50" />

      <main className="relative z-10 w-full mx-auto">
        
        {/* 常规宽度区域容器 */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12">
          {/* 头部标题区 */}
          <header className="mb-24 perspective-[1000px]">
            <div className="flex items-center gap-4 mb-6 text-[10px] font-mono text-cyan-600 tracking-[0.4em] uppercase">
              <span className="w-12 h-[1px] bg-cyan-800" />
              SYS.CAPABILITIES // OVERVIEW
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-slate-100 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              NEURAL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700 filter drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                RESONANCE
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-sm text-cyan-900/80 leading-relaxed border-l-2 border-cyan-900/50 pl-4 py-1">
              Proficiency matrices loaded into active memory. Utilizing hardware-accelerated pathways to map cognitive paradigms and execution frameworks. Scroll down to initiate system dive.
            </p>
          </header>

          {/* 终端推流展示区 */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-4 text-[10px] font-mono text-cyan-700 tracking-[0.2em] uppercase">
              <span className="flex items-center gap-2">
                <Network className="w-3 h-3 text-cyan-500" />
                COMPILER_OUTPUT
              </span>
              <span className="animate-pulse">V8_ENGINE_ACTIVE</span>
            </div>
            <KernelLogStreamer />
          </div>
        </div>

        {/* ======================= 超长滚动物理炫技区 ======================= */}
        
        {/* 横幅打破网格 */}
        <KineticBanner />

        {/* Z轴数据深潜隧道 */}
        <ZAxisDataDive />

        {/* 恢复常规宽度区域 */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             {/* 核心技能全息卡片网格 */}
             <div className="flex-1 w-full">
               <div className="flex items-center justify-between mb-8 text-[10px] font-mono text-cyan-700 tracking-[0.2em] uppercase border-b border-cyan-900/30 pb-4">
                 <span className="flex items-center gap-2">
                   <Cpu className="w-3 h-3 text-cyan-500" />
                   ALLOCATED_SECTORS
                 </span>
                 <span>MEMORY_BANK_0X</span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                 {skills.map((skill, i) => (
                   <HolographicSkillCard 
                     key={i}
                     title={skill.title}
                     category={skill.category}
                     hex={skill.hex}
                     icon={skill.icon}
                   />
                 ))}
               </div>
             </div>

             {/* 量子雷达可视化表盘 */}
             <div className="w-full lg:w-1/3 flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-8 text-[10px] font-mono text-cyan-700 tracking-[0.2em] uppercase border-b border-cyan-900/30 pb-4">
                   <span>RADAR_TELEMETRY</span>
                   <span className="text-cyan-500 animate-ping">●</span>
                </div>
                <div className="w-full aspect-square border border-cyan-900/30 bg-[#050505]/50 backdrop-blur-sm rounded-sm p-4 relative shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
                  {/* 四角装饰 */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500" />
                  
                  <QuantumRadarCanvas />
                </div>
             </div>
          </div>

          {/* 页面底部：内核崩溃转储 */}
          <CoreDumpSection />

        </div>

      </main>
    </div>
  );
}