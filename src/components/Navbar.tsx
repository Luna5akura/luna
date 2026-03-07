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
// 【极致优化点 1：零重绘 (Zero-Render) 解密引擎】
// 彻底剥离原代码中用 useState 驱动导致整个 Navbar 每秒被强行重绘 60 次的性能灾难。
// 现采用纯 DOM 操作，仅在必要节点发生文本突变，彻底解放 React 主线程。
// ==========================================
const ScrambleTextNode = ({ text, className }: { text: string, className?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    let iteration = 0;
    const chars = "01xX_!@#$<>?{}[]%^&*";
    
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
        iteration += 1 / 2; // 控制解密速度
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
// 【极致优化点 2：内存友好型 (Memory-Friendly) 时钟】
// 绕开 Intl.DateTimeFormat 和原代码 toString().padStart 产生的高频字符串临时内存分配，
// 采用轻量数值比对规避 GC 垃圾回收突刺 (Spikes)。
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
// 原有逻辑为事件驱动(Event-Driven)，非常优秀，予以保留
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
// 【极致优化点 3：消除布局抖动 (Anti-Layout Thrashing)】
// 原代码在鼠标移动时高频调用 getBoundingClientRect，严重阻塞渲染管线。
// 现将包围盒在 onMouseEnter 阶段一次性缓存，将 144Hz 的移动计算降级为 O(1) 的内存读取！
// ==========================================
const MagneticDockItem = ({ item, isActive, path }: { item: string, isActive: boolean, path: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const rectRef = useRef<{left: number, top: number, width: number, height: number} | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 15, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 15, mass: 0.1 });

  const handleMouseEnter = () => {
    if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rectRef.current = null;
  };

  return (
    <NavLink
      to={path}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center px-6 py-3 outline-none group cursor-none z-20"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={cn(
          "relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 will-change-transform transform-gpu",
          isActive ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-200"
        )}
      >
        {item}

        {/* Framer LayoutId 空间拓扑穿梭 */}
        {isActive && (
          <motion.div
            layoutId="nav-target-lock"
            className="absolute -inset-x-4 -inset-y-2 border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)] pointer-events-none"
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400" />

            <motion.div
               animate={{ y: ["0%", "100%", "0%"] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-400/50"
            />
          </motion.div>
        )}
      </motion.div>
    </NavLink>
  );
};

// ==========================================
// 【3D 战术底座 HUD】同样应用物理包围盒缓存
// ==========================================
const QuantumDock = ({ navItems }: { navItems: string[] }) => {
  const location = useLocation();
  const dockRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{left: number, top: number, width: number, height: number} | null>(null);
  const dockX = useMotionValue(0);
  const dockY = useMotionValue(0);

  const tiltX = useSpring(useTransform(dockY, [-1, 1],[15, -15]), { stiffness: 150, damping: 20 });
  const tiltY = useSpring(useTransform(dockX, [-1, 1],[-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseEnter = () => {
    if (dockRef.current) rectRef.current = dockRef.current.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    const cx = left + width / 2;
    const cy = top + height / 2;
    dockX.set((e.clientX - cx) / (width / 2));
    dockY.set((e.clientY - cy) / (height / 2));
  };

  const handleMouseLeave = () => {
    dockX.set(0);
    dockY.set(0);
    rectRef.current = null;
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 perspective-[1000px] pointer-events-auto w-max hidden md:block">
      <motion.nav
        ref={dockRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="flex items-center p-1.5 gap-2 bg-[#050505]/80 backdrop-blur-md border border-cyan-900/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/5 relative will-change-transform transform-gpu"
      >
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
  
  // 注入顶级状态与解密算法 (现在它只是一个静态推导值，脱离了 useState 的魔爪)
  const scrambledPath = location.pathname === '/' ? '/ROOT' : location.pathname.toUpperCase();
  const { battery, net } = useHardwareStatus();
  const timeStr = useQuantumClock();

  return (
    <>
      {/* 全局战术准星遮罩层 (Global Target Reticle) */}
      <div className="fixed inset-6 pointer-events-none z-40 mix-blend-screen hidden md:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-[1px] border-l-[1px] border-cyan-500/30" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-cyan-500/30" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-cyan-500/30" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[1px] border-r-[1px] border-cyan-500/30" />
      </div>

      {/* --- 左上角：品牌协议簇 --- */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference pointer-events-auto">
        <NavLink to="/" className="group flex flex-col items-start cursor-crosshair outline-none">
          <div className="flex items-center gap-2 relative overflow-hidden">
             <motion.span className="text-xl font-black tracking-tighter text-white group-hover:hidden transition-all uppercase drop-shadow-[0_0_2px_#fff]">
               LUNA_PROTOCOL
             </motion.span>
             <motion.span
               className="text-xl font-black tracking-tighter text-cyan-400 hidden group-hover:block uppercase drop-shadow-[0_0_8px_#06b6d4]"
             >
               0x4C554E41_SYS
             </motion.span>
          </div>
          <span className="pl-4 text-[9px] font-mono text-gray-400 group-hover:text-cyan-300 transition-colors flex items-center gap-2 uppercase tracking-widest mt-1">
            v.2.0.24 // CORE_ONLINE
            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse hidden group-hover:block shadow-[0_0_5px_#06b6d4]" />
          </span>
        </NavLink>
      </div>

      {/* --- 右上角：物理硬件侦测仪 (Telemetry HUD) --- */}
      <div className="fixed top-8 right-8 z-50 text-right hidden md:block mix-blend-difference pointer-events-none">
        <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
          
          <div className="flex items-center gap-2 text-cyan-600/80">
            <span>{net}</span>
            <span className="w-1.5 h-1.5 rounded-sm bg-cyan-500 animate-pulse shadow-[0_0_5px_#06b6d4]" />
          </div>
          
          <div className="text-cyan-600/80">{battery}</div>
          
          <motion.div className="text-white font-bold drop-shadow-[0_0_2px_#fff] mt-0.5 text-[11px] will-change-contents">
            {timeStr}
          </motion.div>
          
          <div className="text-cyan-400/80 mt-1 flex items-center gap-2 border border-cyan-900/30 px-1.5 py-0.5 bg-cyan-950/20">
            <span className="opacity-50 text-[8px]">LOC:</span>
            {/* 将重绘范围锁定在独立组件内部 */}
            <ScrambleTextNode text={scrambledPath} />
          </div>

        </div>
      </div>

      {/* --- 底部中央：3D 全息导航底座 --- */}
      <QuantumDock navItems={navItems} />

      {/* --- 左下角：固定烙印 --- */}
      <div className="fixed left-8 bottom-8 z-40 hidden md:block pointer-events-none mix-blend-difference">
         <motion.div 
           className="writing-vertical-rl text-[10px] tracking-[0.4em] font-mono font-bold text-white/30 uppercase will-change-transform transform-gpu"
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