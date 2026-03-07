// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  useSpring, 
  AnimatePresence, 
  useAnimationFrame 
} from 'framer-motion';

// ==========================================
// 【极致优化点 1：零重绘解密引擎】
// ==========================================
const ScrambleTextNode = ({ text, className }: { text: string, className?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    let iteration = 0;
    const chars = "01xX_!@#$<>?{}[]%^&*▓▒░";
    
    const animate = () => {
      if (!nodeRef.current) return;
      nodeRef.current.textContent = text
        .split("")
        .map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      
      if (iteration < text.length) {
        iteration += 1 / 3; 
        frame = requestAnimationFrame(animate);
      } else {
         nodeRef.current.textContent = text;
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return <span ref={nodeRef} className={className} />;
};

// ==========================================
// 【极致优化点 2：内存友好型时钟】
// ==========================================
const useQuantumClock = () => {
  const timeStr = useMotionValue("00:00:00:000");
  useAnimationFrame(() => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = d.getMilliseconds();
    const hs = h < 10 ? '0' + h : h;
    const ms_m = m < 10 ? '0' + m : m;
    const ss = s < 10 ? '0' + s : s;
    const mss = ms < 10 ? '00' + ms : (ms < 100 ? '0' + ms : ms);
    timeStr.set(`${hs}:${ms_m}:${ss}:${mss}`);
  });
  return timeStr;
};

// ==========================================
// 【基础物理硬件遥测 API】
// ==========================================
const useHardwareStatus = () => {
  const [battery, setBattery] = useState("PWR:100%[AC]");
  const [net, setNet] = useState("NET:UPLINK_ESTABLISHED");

  useEffect(() => {
    try {
      const nav: any = navigator;
      if ('getBattery' in nav) {
        nav.getBattery().then((bat: any) => {
          const updateBat = () => setBattery(`PWR:${Math.floor(bat.level * 100)}%[${bat.charging ? 'AC' : 'DC'}]`);
          updateBat();
          bat.addEventListener('levelchange', updateBat);
          bat.addEventListener('chargingchange', updateBat);
        });
      }
      const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
      if (conn) {
        const updateNet = () => setNet(`NET:${conn.effectiveType.toUpperCase()}_${conn.downlink}MBPS`);
        updateNet();
        conn.addEventListener('change', updateNet);
      }
    } catch (e) {
      // 优雅降级
    }
  },[]);

  return { battery, net };
};

// ==========================================
// 【高超技术 1：纯 Canvas 微型异步扫频雷达 (Micro-Radar)】
// 彻底脱离 DOM 的硬件级绘制，提供极客侦测视觉
// ==========================================
const TelemetryRadar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    // 解决高分屏模糊
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 32 * dpr;
    canvas.height = 32 * dpr;
    ctx.scale(dpr, dpr);

    let angle = 0;
    let frame: number;
    // 生成随机敌标/数据节点
    const blips = Array.from({ length: 3 }, () => ({
      r: Math.random() * 12 + 2,
      theta: Math.random() * Math.PI * 2,
      life: Math.random() * 100
    }));

    const render = () => {
      ctx.clearRect(0, 0, 32, 32);
      const cx = 16, cy = 16;

      // 画准星底图
      ctx.strokeStyle = 'rgba(34,211,238,0.3)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.moveTo(cx, 2); ctx.lineTo(cx, 30);
      ctx.moveTo(2, cy); ctx.lineTo(30, cy);
      ctx.stroke();

      // 画扫频扇区
      ctx.fillStyle = 'rgba(34,211,238,0.15)';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, 14, angle, angle + 0.5);
      ctx.lineTo(cx, cy);
      ctx.fill();

      // 画扫描主线
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle + 0.5) * 14, cy + Math.sin(angle + 0.5) * 14);
      ctx.stroke();

      // 绘制闪烁节点
      blips.forEach(b => {
        b.life -= 1;
        if (b.life <= 0) {
          b.r = Math.random() * 12 + 2;
          b.theta = Math.random() * Math.PI * 2;
          b.life = 100 + Math.random() * 100;
        }
        const bx = cx + Math.cos(b.theta) * b.r;
        const by = cy + Math.sin(b.theta) * b.r;
        const alpha = Math.max(0, b.life / 200);
        ctx.fillStyle = `rgba(239, 68, 68, ${alpha})`; // Red blips
        ctx.fillRect(bx - 1, by - 1, 2, 2);
      });

      angle += 0.08;
      frame = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(frame);
  },[]);

  return <canvas ref={canvasRef} style={{ width: 32, height: 32 }} className="rounded-full shadow-[0_0_8px_rgba(34,211,238,0.4)]" />;
};

// ==========================================
// 【极致优化点 3：消除布局抖动 (Anti-Layout Thrashing)】
// ==========================================
const MagneticDockItem = ({ item, isActive, path }: { item: string, isActive: boolean, path: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const rectRef = useRef<{left: number, top: number, width: number, height: number} | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 20, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20, mass: 0.1 });

  const handleMouseEnter = () => {
    if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    mouseX.set((e.clientX - (left + width / 2)) * 0.4);
    mouseY.set((e.clientY - (top + height / 2)) * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0); mouseY.set(0);
    rectRef.current = null;
  };

  return (
    <NavLink
      to={path}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center px-6 py-3 outline-none group cursor-crosshair z-20"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={cn(
          "relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 will-change-transform transform-gpu",
          isActive ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-200"
        )}
      >
        {/* Hover 时注入色差效果 */}
        <span className="relative group-hover:drop-shadow-[2px_0_0_rgba(255,0,0,0.8)] before:absolute before:inset-0 before:text-cyan-400 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity group-hover:before:-translate-x-[2px] group-hover:before:drop-shadow-[-2px_0_0_rgba(0,255,255,0.8)] before:content-[attr(data-text)]" data-text={item}>
          {item}
        </span>

        {/* 【高超技术 2：全息光柱投影 (Holographic Beam)】 */}
        {isActive && (
          <motion.div
            layoutId="nav-hologram-beam"
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120%] h-24 bg-gradient-to-t from-cyan-500/30 via-cyan-500/5 to-transparent blur-[2px] pointer-events-none -z-10"
            style={{ maskImage: 'linear-gradient(to top, black, transparent)', WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
          />
        )}

        {isActive && (
          <motion.div
            layoutId="nav-target-lock"
            className="absolute -inset-x-4 -inset-y-2 border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)] pointer-events-none"
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-cyan-400" />
            
            <motion.div
               animate={{ y: ["0%", "100%", "0%"] }}
               transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
               className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-400/50 shadow-[0_0_8px_#22d3ee]"
            />
          </motion.div>
        )}
      </motion.div>
    </NavLink>
  );
};

// ==========================================
// 【3D 战术底座 HUD】
// ==========================================
const QuantumDock = ({ navItems }: { navItems: string[] }) => {
  const location = useLocation();
  const dockRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{left: number, top: number, width: number, height: number} | null>(null);
  const dockX = useMotionValue(0);
  const dockY = useMotionValue(0);

  const tiltX = useSpring(useTransform(dockY, [-1, 1],[20, -20]), { stiffness: 200, damping: 25 });
  const tiltY = useSpring(useTransform(dockX,[-1, 1],[-20, 20]), { stiffness: 200, damping: 25 });

  const handleMouseEnter = () => {
    if (dockRef.current) rectRef.current = dockRef.current.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    dockX.set((e.clientX - (left + width / 2)) / (width / 2));
    dockY.set((e.clientY - (top + height / 2)) / (height / 2));
  };

  const handleMouseLeave = () => {
    dockX.set(0); dockY.set(0);
    rectRef.current = null;
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 perspective-[1200px] pointer-events-auto w-max hidden md:block">
      <motion.nav
        ref={dockRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="flex items-center p-1.5 gap-2 bg-[#050505]/60 backdrop-blur-xl border-t border-cyan-900/50 border-b border-cyan-950/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,1),0_0_30px_rgba(34,211,238,0.05)] relative will-change-transform transform-gpu overflow-visible"
      >
        {/* 倒角切割视觉 (Cybernetic Chamfer) */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/30 -translate-x-1 -translate-y-1" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/30 translate-x-1 -translate-y-1" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500/30 -translate-x-1 translate-y-1" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/30 translate-x-1 translate-y-1" />

        <AnimatePresence>
          {navItems.map((item) => {
            const path = item === 'World' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path || (item === 'World' && location.pathname === '/');
            return <MagneticDockItem key={item} item={item} isActive={isActive} path={path} />;
          })}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const navItems =['World', 'Warp', 'About', 'Skill'];
  
  const scrambledPath = location.pathname === '/' ? '/ROOT' : location.pathname.toUpperCase();
  const { battery, net } = useHardwareStatus();
  const timeStr = useQuantumClock();

  return (
    <>
      <style>{`
        /* 纯 CSS 驱动条形码动画 */
        .cyber-barcode {
          background-image: repeating-linear-gradient(to right, #fff 0, #fff 2px, transparent 2px, transparent 4px, #fff 4px, #fff 5px, transparent 5px, transparent 8px);
          background-size: 200% 100%;
          animation: barcode-scan 3s linear infinite;
        }
        @keyframes barcode-scan { 0% { background-position: 0 0; } 100% { background-position: -200% 0; } }
      `}</style>

      <div className="fixed inset-6 pointer-events-none z-[100] mix-blend-screen hidden md:block">
        {/* 四角高亮锁定框 (加大尺寸，增粗边框) */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-[2px] border-l-[2px] border-cyan-500/60" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-[2px] border-r-[2px] border-cyan-500/60" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[2px] border-l-[2px] border-cyan-500/60" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[2px] border-r-[2px] border-cyan-500/60" />
        
        {/* 左上角系统绝对原点物理指示灯 */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />

        {/* 四轴中心校准刻度仪 (Sniper Ticks) */}
        <div className="absolute top-1/2 left-0 w-3 h-[2px] bg-cyan-500/40 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-3 h-[2px] bg-cyan-500/40 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-[2px] h-3 bg-cyan-500/40 -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-[2px] h-3 bg-cyan-500/40 -translate-x-1/2" />
      </div>

      {/* --- 左上角：品牌协议簇 --- */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference pointer-events-auto">
        <NavLink to="/" className="group flex flex-col items-start cursor-crosshair outline-none">
          <div className="flex items-center gap-2 relative overflow-hidden">
             <motion.span className="text-xl font-black tracking-tighter text-white group-hover:hidden transition-all uppercase drop-shadow-[0_0_2px_#fff]">
               LUNA_PROTOCOL
             </motion.span>
             {/* Hover 色差撕裂 */}
             <motion.span className="text-xl font-black tracking-tighter text-cyan-400 hidden group-hover:block uppercase drop-shadow-[2px_0_0_red,-2px_0_0_blue]">
               0x4C554E41_SYS
             </motion.span>
          </div>
          <span className="pl-4 text-[9px] font-mono text-gray-400 group-hover:text-cyan-300 transition-colors flex items-center gap-2 uppercase tracking-widest mt-1">
            v.2.0.26 // CORE_ONLINE
            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse hidden group-hover:block shadow-[0_0_5px_#06b6d4]" />
            <span className="w-16 h-[2px] bg-cyan-900 overflow-hidden hidden group-hover:block relative">
               <span className="absolute top-0 left-0 h-full w-1/3 bg-cyan-400 animate-[sidebar-scanline_0.5s_linear_infinite]" />
            </span>
          </span>
        </NavLink>
      </div>

      {/* --- 右上角：物理硬件侦测仪 (Telemetry HUD) --- */}
      <div className="fixed top-8 right-8 z-50 text-right hidden md:block mix-blend-screen pointer-events-none">
        <div className="flex items-start gap-4">
          
          <TelemetryRadar />

          <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-2 text-cyan-600/80">
              <span>{net}</span>
              <span className="w-1.5 h-1.5 rounded-sm bg-cyan-500 animate-pulse shadow-[0_0_5px_#06b6d4]" />
            </div>
            
            <div className="text-cyan-600/80 flex items-center gap-2">
              <span className="w-6 h-[4px] bg-cyan-950 flex gap-[1px]">
                 <span className="w-full h-full bg-cyan-500 opacity-80" />
                 <span className="w-full h-full bg-cyan-500 opacity-80" />
                 <span className="w-full h-full bg-cyan-500 opacity-80" />
              </span>
              {battery}
            </div>
            
            {/* tabular-nums 强制等宽，防止时钟毫秒跳动引起布局抖动 */}
            <motion.div className="text-white font-bold drop-shadow-[0_0_4px_#22d3ee] mt-0.5 text-[11px] will-change-contents tabular-nums tracking-[0.1em]">
              {timeStr}
            </motion.div>
            
            <div className="text-cyan-400/90 mt-1 flex items-center gap-2 border border-cyan-500/40 px-2 py-0.5 bg-cyan-950/40 shadow-[inset_0_0_10px_rgba(34,211,238,0.2)]">
              <span className="opacity-70 text-[8px] animate-pulse">LOC_ADDR:</span>
              <ScrambleTextNode text={scrambledPath} className="font-bold drop-shadow-[0_0_2px_cyan]" />
            </div>
          </div>
        </div>
      </div>

      {/* --- 底部中央：3D 全息导航底座 --- */}
      <QuantumDock navItems={navItems} />

      {/* --- 左下角：固定烙印与条形码 --- */}
      <div className="fixed left-8 bottom-8 z-40 hidden md:block pointer-events-none mix-blend-difference flex flex-col items-start gap-2">
         <div className="w-32 h-6 cyber-barcode opacity-40 mix-blend-screen rotate-180" style={{ writingMode: 'vertical-rl' }} />
         <motion.div 
           className="writing-vertical-rl text-[10px] tracking-[0.4em] font-mono font-bold text-white/40 uppercase will-change-transform transform-gpu"
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
         >
            LOVE IS MURDEROUS UTOPIA
         </motion.div>
      </div>
    </>
  );
};

export default Navbar;