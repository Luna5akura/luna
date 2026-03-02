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

// ==========================================
// 【基础算法：安全的高级模运算】
// 用于无限滚动字符阵列的无缝衔接
// ==========================================
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// ==========================================
// 【顶级炫技点 1：真实硬件性能探针 (Hardware Telemetry)】
// 获取真实的 V8 引擎内存、硬件并发线程数以及实时 FPS。
// 使用 MotionValue 完美避开 React 生命周期的重绘灾难。
// ==========================================
const useHardwareMetrics = () => {
  const fps = useMotionValue(0);
  const memory = useMotionValue("0x000000");
  const uptime = useMotionValue("0.000s");

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let startTime = performance.now();
    let rAF: number;

    const updateMetrics = () => {
      const now = performance.now();
      frameCount++;

      // 每 500ms 计算一次真实 FPS
      if (now - lastTime >= 500) {
        fps.set(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;

        // 嗅探真实的 V8 JavaScript Heap 内存分配 (如果浏览器支持)
        const perf = performance as any;
        if (perf.memory && perf.memory.usedJSHeapSize) {
          const mb = perf.memory.usedJSHeapSize / (1024 * 1024);
          // 转换为极客风十六进制显示
          const hexMem = Math.floor(mb * 10000).toString(16).toUpperCase();
          memory.set(`0x${hexMem.padStart(6, '0')}`);
        } else {
          // 降级处理
          memory.set(`0x${Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0')}`);
        }
      }

      // 毫秒级 Uptime
      uptime.set(((now - startTime) / 1000).toFixed(3) + "s");

      rAF = requestAnimationFrame(updateMetrics);
    };

    rAF = requestAnimationFrame(updateMetrics);
    return () => cancelAnimationFrame(rAF);
  }, [fps, memory, uptime]);

  const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 'UNKNOWN' : 8;
  return { fps, memory, uptime, cores };
};

// ==========================================
// 【顶级炫技点 2：微积分动能字符流 (Kinetic Typography)】
// 绝非普通的 CSS 动画。它监听滚动速度，进行时间积分，
// 滚动越快，文字流动越快，且方向受滚动方向严格控制。
// ==========================================
interface KineticMarqueeProps {
  baseVelocity: number;
  scrollVelocity: any;
}

const KineticMarquee: React.FC<KineticMarqueeProps> = ({ baseVelocity, scrollVelocity }) => {
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  // 渲染优化：强行将多个 DOM 打包成一个硬件加速层
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    // 依据当前的滚动速度推算方向正负
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // 如果发生了强烈的物理滚动，将动能积分叠加到基础位移上
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex whitespace-nowrap flex-nowrap w-[200vw] relative left-[-50vw] mix-blend-screen opacity-20 pointer-events-none select-none">
      <motion.div className="flex whitespace-nowrap flex-nowrap text-8xl md:text-[10rem] font-black uppercase tracking-tighter font-mono text-cyan-900" style={{ x }}>
        <span className="block px-8">SYSTEM_HALT // DATA_DUMP</span>
        <span className="block px-8">SYSTEM_HALT // DATA_DUMP</span>
        <span className="block px-8">SYSTEM_HALT // DATA_DUMP</span>
        <span className="block px-8">SYSTEM_HALT // DATA_DUMP</span>
      </motion.div>
    </div>
  );
};

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const svgFilterRef = useRef<SVGFEDisplacementMapElement>(null);
  
  const { scrollYProgress, scrollY } = useScroll({ target: footerRef, offset: ["start end", "end end"] });
  const { fps, memory, uptime, cores } = useHardwareMetrics();

  const scrollVelocity = useVelocity(scrollY);
  
  // ==========================================
  // 【顶级炫技点 3：SVG 底层硬件位移映射 (Displacement Glitch)】
  // 通过底层 JS 直接修改 SVG 滤镜的 scale 属性，绕过 React
  // 滚动越快 -> scrollVelocity 越大 -> 画面撕裂越严重！
  // ==========================================
  useEffect(() => {
    return scrollVelocity.on("change", (latest) => {
      if (svgFilterRef.current) {
        // 将速度归一化，最大撕裂幅度限制在 30px
        const tearIntensity = Math.min(Math.abs(latest) * 0.02, 30);
        svgFilterRef.current.setAttribute("scale", tearIntensity.toString());
      }
    });
  }, [scrollVelocity]);

  // 页脚出场视差矩阵
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1],[0, 0.5, 1]);
  
  const fpsText = useMotionTemplate`[${fps}]`;
  const memoryText = useMotionTemplate`${memory}`;
  const uptimeText = useMotionTemplate`${uptime}`;

  return (
    <footer 
      ref={footerRef} 
      className="relative mt-32 border-t border-cyan-900/50 bg-[#020202] overflow-hidden"
    >
      {/* 
        隐藏的 SVG 滤镜定义：
        feTurbulence: 生成分形噪声 (赛博故障感的来源)
        feDisplacementMap: 根据噪声图的色值强行偏移原图形像素
      */}
      <svg className="hidden">
        <filter id="scroll-tear-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.1 0.05" numOctaves="2" result="noise" />
          {/* scale="0" 默认不撕裂，依靠 JS 动态注入强度 */}
          <feDisplacementMap ref={svgFilterRef} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* 底层二进制背景：纯 CSS 渲染，硬件加速 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMzQsMjExLDIzOCwwLjE1KSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 to-transparent z-0 pointer-events-none" />

      {/* 物理撕裂滤镜作用域，应用我们在 SVG 中定义的 filter */}
      <motion.div 
        style={{ y, opacity, filter: "url(#scroll-tear-filter)" }}
        className="container mx-auto px-6 py-20 flex flex-col items-center justify-center relative z-10 will-change-transform transform-gpu"
      >
        {/* 动能拓扑字符流层 */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-center z-0">
           <KineticMarquee baseVelocity={-2} scrollVelocity={scrollVelocity} />
        </div>

        {/* 核心视觉：终端机引言 */}
        <div className="relative z-10 flex flex-col items-center mb-16 group cursor-crosshair">
           <div className="text-[10px] font-mono tracking-[0.5em] text-cyan-600 mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-cyan-800" />
              FINAL_DIRECTIVE
              <span className="w-10 h-px bg-cyan-800" />
           </div>
           <p className="text-slate-200 text-lg md:text-2xl font-mono tracking-[0.2em] uppercase text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-700">
             Love is <span className="font-bold text-cyan-400 group-hover:text-red-500 transition-colors drop-shadow-[0_0_10px_currentColor] animate-pulse">murderous</span> utopia.
           </p>
        </div>

        {/* 真实系统硬件探针面板 (Telemetry Output) */}
        <div className="w-full max-w-4xl border border-cyan-900/40 bg-[#050505]/80 backdrop-blur-md p-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-cyan-700 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          
          <div className="flex items-center gap-2 relative group">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_#06b6d4]" />
            <span>SYS.THREADS:[0x{cores.toString(16).toUpperCase().padStart(2, '0')}]</span>
            {/* Hover 展示解释 */}
            <span className="absolute -top-6 left-0 text-[8px] bg-cyan-950/80 px-1 opacity-0 group-hover:opacity-100 transition-opacity">Logical_Cores_Detected</span>
          </div>

          <div className="flex items-center gap-2 group relative">
             <span className="text-slate-500">MEM.HEAP_ALLOC:</span>
             <motion.span className="text-cyan-400 w-20 text-right">{memoryText}</motion.span>
             <span className="absolute -top-6 left-0 text-[8px] bg-cyan-950/80 px-1 opacity-0 group-hover:opacity-100 transition-opacity">V8_JS_Heap_Size_Sniffer</span>
          </div>

          <div className="flex items-center gap-2">
             <span className="text-slate-500">SESSION_UPTIME:</span>
             <motion.span className="text-cyan-400 w-16">{uptimeText}</motion.span>
          </div>

          <div className="flex items-center gap-2 border-l border-cyan-900/50 pl-4 group relative">
             <span className="text-slate-500">FPS:</span>
             {/* 真实的 FPS 输出，若低于 50 则变红警示 */}
             <motion.span className="text-cyan-400 font-bold w-12" style={{ color: useTransform(fps, [0, 50, 60],["#ef4444", "#06b6d4", "#06b6d4"]) }}>
                {fpsText}
             </motion.span>
             <span className="absolute -top-6 left-0 text-[8px] bg-cyan-950/80 px-1 opacity-0 group-hover:opacity-100 transition-opacity">Realtime_rAF_Delta</span>
          </div>
        </div>

        {/* 底部版权与加密签章 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-between text-cyan-900/60 text-[9px] font-mono border-t border-cyan-900/30 pt-6 mt-12 w-full max-w-4xl relative z-10">
          <span>© {new Date().getFullYear()} LUNA_PROTOCOL. // SYS.ONLINE</span>
          
          <div className="flex items-center gap-4">
            <div className="relative group cursor-none">
              <span className="group-hover:opacity-0 transition-opacity duration-300 border border-cyan-900/30 px-2 py-1">LUNA_CORE</span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none text-cyan-400 font-bold overflow-hidden border border-cyan-400 bg-cyan-950/80">
                 <motion.div animate={{ y:["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} className="flex flex-col">
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