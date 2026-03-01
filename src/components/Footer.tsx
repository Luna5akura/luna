import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ==========================================
// 【炫技点 3：硬件级系统探针 Hook】
// ==========================================
const useSystemStatus = () => {
  const [uptime, setUptime] = useState(0);
  const[memory, setMemory] = useState("0x0000");

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      // 计算系统运行毫秒数并格式化
      setUptime((Date.now() - startTime) / 1000);
      // 模拟动态内存地址寻址跳动
      setMemory(`0x${Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0')}`);
    }, 50); // 50ms 极高频刷新，制造紧张的科技感
    return () => clearInterval(interval);
  },[]);

  const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 'UNKNOWN' : 8;
  
  return { uptime, memory, cores };
};

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const { uptime, memory, cores } = useSystemStatus();
  const [isHoveringQuote, setIsHoveringQuote] = useState(false);

  // ==========================================
  // 【炫技点 1：深渊视差揭示引擎】
  // ==========================================
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"] // 当 Footer 顶部进入视口开始，到底部到达视口结束
  });

  // Footer 从深渊（缩小、下沉、透明）中浮现
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1],[0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1],[0, 0.5, 1]);
  // 当滚动到底部时，背景光晕亮度增加
  const glowOpacity = useTransform(scrollYProgress, [0, 1],[0, 0.15]);

  return (
    <footer 
      ref={footerRef}
      className="relative mt-32 border-t border-white/10 bg-[#050505] overflow-hidden perspective-[1000px]"
    >
      {/* 动态深渊光晕 */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent pointer-events-none"
        style={{ opacity: glowOpacity }}
      />
      {/* CRT 噪点层 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-40 mix-blend-overlay pointer-events-none" />

      {/* 将视差物理属性绑定到主要内容容器上 */}
      <motion.div 
        style={{ y, scale, opacity, transformStyle: "preserve-3d" }}
        className="container mx-auto px-6 py-12 flex flex-col items-center justify-center space-y-12 relative z-10"
      >
        
        {/* ========================================== */}
        {/* 【炫技点 2：SVG 路径形变隐喻动画】 */}
        {/* ========================================== */}
        <div 
          className="flex flex-col items-center cursor-crosshair relative group"
          onMouseEnter={() => setIsHoveringQuote(true)}
          onMouseLeave={() => setIsHoveringQuote(false)}
        >
          <div className="h-10 w-48 mb-2 relative">
            <svg viewBox="0 0 200 40" className="w-full h-full overflow-visible">
              <motion.path
                // 核心：利用 Framer Motion 平滑过渡 d 属性。
                // 正常状态是心电图，Hover 时形变为直线 (心跳停止 Flatline)
                animate={{
                  d: isHoveringQuote 
                    ? "M 0 20 L 40 20 L 50 20 L 60 20 L 70 20 L 80 20 L 90 20 L 200 20" 
                    : "M 0 20 L 40 20 L 50 -10 L 60 40 L 70 10 L 80 25 L 90 20 L 200 20"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                fill="transparent"
                strokeWidth="2"
                className={isHoveringQuote ? "stroke-red-500" : "stroke-cyan-500"}
                style={{ filter: isHoveringQuote ? "drop-shadow(0 0 8px rgba(239,68,68,0.8))" : "drop-shadow(0 0 8px rgba(34,211,238,0.5))" }}
              />
              {/* 心电图光点追踪扫描动画 */}
              <motion.circle
                r="3"
                className="fill-white"
                style={{ filter: "drop-shadow(0 0 5px white)" }}
                animate={{ cx:[0, 200], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                // Y轴位置也需要根据是否 flatline 做判断
                cy={20}
              />
            </svg>
          </div>

          <motion.p 
            className="text-slate-400 text-sm font-mono tracking-[0.2em] uppercase transition-colors duration-500"
            animate={{ color: isHoveringQuote ? "#ef4444" : "#94a3b8" }} // Hover 时文字变血红
          >
            Love is <span className={isHoveringQuote ? "font-bold animate-pulse" : ""}>murderous</span> utopia.
          </motion.p>
        </div>

        {/* ========================================== */}
        {/* 【炫技点 3：系统终端监控面板】 */}
        {/* ========================================== */}
        <div className="w-full max-w-2xl border border-white/10 bg-black/50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-cyan-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse drop-shadow-[0_0_5px_rgba(34,211,238,1)]" />
            <span>SYS.CORE_COUNT: [{cores}]</span>
          </div>
          
          <div className="flex items-center gap-2">
             <span>MEM.ALLOC:</span>
             <span className="text-cyan-400 w-16 text-right">{memory}</span>
          </div>

          <div className="flex items-center gap-2">
             <span>UPTIME:</span>
             <span className="text-cyan-400 w-24">{uptime.toFixed(3)}s</span>
          </div>
        </div>

        {/* ========================================== */}
        {/* 【炫技点 4：十六进制流体版权签名】 */}
        {/* ========================================== */}
        <div className="flex items-center space-x-2 text-slate-500 text-xs font-mono border-t border-white/5 pt-6 w-full justify-center">
          <span>© {new Date().getFullYear()}</span>
          
          <div className="relative group cursor-none px-2">
            <span className="group-hover:opacity-0 transition-opacity duration-300">LUNA</span>
            
            {/* 悬停时显示的乱码层 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none text-cyan-400 font-bold overflow-hidden">
               <motion.div
                 animate={{ y:["0%", "-50%"] }}
                 transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                 className="flex flex-col"
               >
                 <span>0x4C</span>
                 <span>0x55</span>
                 <span>0x4E</span>
                 <span>0x41</span>
                 {/* 重复一遍实现无缝滚动 */}
                 <span>0x4C</span>
                 <span>0x55</span>
                 <span>0x4E</span>
                 <span>0x41</span>
               </motion.div>
            </div>
          </div>
          
          <span>. CC BY-SA 3.0 Unported.</span>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;