// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  useSpring
} from 'framer-motion';

const SCRAMBLE_CHARS = "01xX_!@#$<>?{}[]%^&*▓▒░";
const NAV_ITEMS = ['World', 'Warp', 'Wit', 'Wow'] as const;
const CLOCK_UPDATE_INTERVAL_MS = 250;
const RADAR_FRAME_INTERVAL = 1000 / 24;

type BatteryManagerLike = {
  level: number;
  charging: boolean;
  addEventListener: (type: 'levelchange' | 'chargingchange', listener: () => void) => void;
  removeEventListener: (type: 'levelchange' | 'chargingchange', listener: () => void) => void;
};

type NetworkInformationLike = EventTarget & {
  effectiveType?: string;
  downlink?: number;
};

// ==========================================
// 【极致优化点 1：零重绘解密引擎】
// ==========================================
const ScrambleTextNode = React.memo(({ text, className }: { text: string, className?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const chars = Array.from(text);
    const textLength = chars.length;
    let frame: number;
    let iteration = 0;
    
    const animate = () => {
      const node = nodeRef.current;
      if (!node) return;

      const scrambled = new Array(textLength);
      for (let index = 0; index < textLength; index += 1) {
        scrambled[index] = index < iteration
          ? chars[index]
          : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      node.textContent = scrambled.join("");
      
      if (iteration < textLength) {
        iteration += 1 / 3; 
        frame = requestAnimationFrame(animate);
      } else {
         node.textContent = text;
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return <span ref={nodeRef} className={className} />;
});

// ==========================================
// 【极致优化点 2：内存友好型时钟】
// ==========================================
const useQuantumClock = () => {
  const timeStr = useMotionValue("00:00:00:000");
  useEffect(() => {
    const update = () => {
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
    };

    update();
    const intervalId = window.setInterval(update, CLOCK_UPDATE_INTERVAL_MS);
    return () => window.clearInterval(intervalId);
  }, [timeStr]);
  return timeStr;
};

// ==========================================
// 【基础物理硬件遥测 API】
// ==========================================
const useHardwareStatus = () => {
  const [battery, setBattery] = useState("PWR:100%[AC]");
  const [net, setNet] = useState("NET:UPLINK_ESTABLISHED");

  useEffect(() => {
    let isMounted = true;
    let batteryManager: BatteryManagerLike | null = null;
    let handleBatteryUpdate: (() => void) | null = null;
    let connection: NetworkInformationLike | null = null;
    let handleConnectionUpdate: (() => void) | null = null;

    try {
      const nav = navigator as Navigator & {
        getBattery?: () => Promise<BatteryManagerLike>;
        connection?: NetworkInformationLike;
        mozConnection?: NetworkInformationLike;
        webkitConnection?: NetworkInformationLike;
      };

      if ('getBattery' in nav) {
        void nav.getBattery?.().then((bat) => {
          if (!isMounted) return;

          batteryManager = bat;
          handleBatteryUpdate = () => {
            setBattery(`PWR:${Math.floor(bat.level * 100)}%[${bat.charging ? 'AC' : 'DC'}]`);
          };

          handleBatteryUpdate();
          bat.addEventListener('levelchange', handleBatteryUpdate);
          bat.addEventListener('chargingchange', handleBatteryUpdate);
        });
      }

      connection = nav.connection || nav.mozConnection || nav.webkitConnection || null;
      if (connection) {
        handleConnectionUpdate = () => {
          const effectiveType = connection?.effectiveType?.toUpperCase() ?? 'UPLINK_ESTABLISHED';
          const downlink = connection?.downlink;
          const throughput = typeof downlink === 'number' ? `${downlink}MBPS` : 'UNKNOWN';
          setNet(`NET:${effectiveType}_${throughput}`);
        };

        handleConnectionUpdate();
        connection.addEventListener('change', handleConnectionUpdate);
      }
    } catch {
      // 优雅降级
    }

    return () => {
      isMounted = false;

      if (batteryManager && handleBatteryUpdate) {
        batteryManager.removeEventListener('levelchange', handleBatteryUpdate);
        batteryManager.removeEventListener('chargingchange', handleBatteryUpdate);
      }

      if (connection && handleConnectionUpdate) {
        connection.removeEventListener('change', handleConnectionUpdate);
      }
    };
  }, []);

  return { battery, net };
};

// ==========================================
// 【高超技术 1：纯 Canvas 微型异步扫频雷达 (Micro-Radar)】
// 彻底脱离 DOM 的硬件级绘制，提供极客侦测视觉
// ==========================================
const TelemetryRadar = React.memo(() => {
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
    let frame = 0;
    let isRunning = false;
    let lastFrameTime = 0;
    // 生成随机敌标/数据节点
    const blips = Array.from({ length: 3 }, () => ({
      r: Math.random() * 12 + 2,
      theta: Math.random() * Math.PI * 2,
      life: Math.random() * 100
    }));

    const render = (now: number) => {
      if (lastFrameTime !== 0 && now - lastFrameTime < RADAR_FRAME_INTERVAL) {
        frame = requestAnimationFrame(render);
        return;
      }

      lastFrameTime = now;
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

    const start = () => {
      if (isRunning) return;
      isRunning = true;
      frame = requestAnimationFrame(render);
    };

    const stop = () => {
      if (!isRunning) return;
      isRunning = false;
      cancelAnimationFrame(frame);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        lastFrameTime = 0;
        start();
      }
    };

    start();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: 32, height: 32 }} className="rounded-full shadow-[0_0_8px_rgba(34,211,238,0.4)]" />;
});

// ==========================================
// 【极致优化点 3：消除布局抖动 (Anti-Layout Thrashing)】
// ==========================================
const MagneticDockItem = React.memo(({ item, isActive, path }: { item: string, isActive: boolean, path: string }) => {
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
      className="relative flex items-center justify-center px-5 py-3 outline-none group cursor-crosshair z-20"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={cn(
          "relative z-10 font-mono text-[11px] font-bold uppercase tracking-[0.26em] transition-all duration-300 will-change-transform transform-gpu",
          isActive ? "text-cyan-300" : "text-slate-500 group-hover:text-cyan-100"
        )}
      >
        <span className="relative before:absolute before:inset-0 before:text-cyan-300 before:opacity-0 before:transition-opacity group-hover:before:opacity-70 group-hover:before:-translate-x-[1px] before:content-[attr(data-text)]" data-text={item}>
          {item}
        </span>

        {isActive && (
          <motion.div
            layoutId="nav-hologram-beam"
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-20 w-[120%] bg-gradient-to-t from-cyan-500/20 via-cyan-500/5 to-transparent blur-[2px] pointer-events-none -z-10"
            style={{ maskImage: 'linear-gradient(to top, black, transparent)', WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
          />
        )}

        {isActive && (
          <motion.div
            layoutId="nav-target-lock"
            className="absolute -inset-x-4 -inset-y-2 border border-cyan-400/30 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(8,47,73,0.02))] shadow-[0_0_15px_rgba(34,211,238,0.15)] pointer-events-none"
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
          >
            <div className="absolute top-0 left-0 h-1.5 w-1.5 border-l-2 border-t-2 border-cyan-400" />
            <div className="absolute top-0 right-0 h-1.5 w-1.5 border-r-2 border-t-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b-2 border-r-2 border-cyan-400" />
            
            <motion.div
               animate={{ y: ["0%", "100%", "0%"] }}
               transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
               className="absolute left-0 right-0 top-0 h-[1px] bg-cyan-400/40 shadow-[0_0_8px_#22d3ee]"
            />
          </motion.div>
        )}
      </motion.div>
    </NavLink>
  );
});

// ==========================================
// 【3D 战术底座 HUD】
// ==========================================
const QuantumDock = React.memo(({ navItems }: { navItems: readonly string[] }) => {
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
        className="relative flex items-center gap-2 overflow-visible border border-white/10 bg-[linear-gradient(180deg,rgba(4,8,16,0.9),rgba(4,8,16,0.66))] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,1),0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-xl will-change-transform transform-gpu"
      >
        <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-cyan-500/30" />
        <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-cyan-500/30" />
        <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-cyan-500/30" />
        <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-cyan-500/30" />

        {navItems.map((item) => {
          const path = item === 'World' ? '/' : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path || (item === 'World' && location.pathname === '/');
          return <MagneticDockItem key={item} item={item} isActive={isActive} path={path} />;
        })}
      </motion.nav>
    </div>
  );
});

const Navbar: React.FC = () => {
  const location = useLocation();
  
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
        <div className="absolute top-0 left-0 h-12 w-12 border-l-[2px] border-t-[2px] border-cyan-500/35" />
        <div className="absolute top-0 right-0 h-12 w-12 border-r-[2px] border-t-[2px] border-cyan-500/35" />
        <div className="absolute bottom-0 left-0 h-12 w-12 border-b-[2px] border-l-[2px] border-cyan-500/35" />
        <div className="absolute bottom-0 right-0 h-12 w-12 border-b-[2px] border-r-[2px] border-cyan-500/35" />
        <div className="absolute left-0 top-0 h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />
      </div>

      <div className="fixed left-8 top-8 z-50 pointer-events-auto">
        <NavLink to="/" className="group flex flex-col items-start border border-white/10 bg-[linear-gradient(180deg,rgba(4,8,16,0.84),rgba(4,8,16,0.58))] px-5 py-4 backdrop-blur-xl cursor-crosshair outline-none shadow-[0_14px_40px_rgba(0,0,0,0.4)]">
          <span className="mb-2 text-[9px] font-mono uppercase tracking-[0.34em] text-cyan-700">Personal Protocol</span>
          <div className="relative overflow-hidden">
            <motion.span className="text-xl font-black tracking-[-0.05em] text-slate-100 transition-all uppercase group-hover:text-cyan-200">
              LUNA_PROTOCOL
            </motion.span>
          </div>
          <span className="mt-2 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.24em] text-slate-500 transition-colors group-hover:text-cyan-300">
            v.2.0.26
            <span className="h-1.5 w-1.5 bg-cyan-500 shadow-[0_0_5px_#06b6d4]" />
            CORE_ONLINE
          </span>
        </NavLink>
      </div>

      <div className="fixed right-8 top-8 z-50 hidden text-right md:block pointer-events-none">
        <div className="flex items-start gap-4 border border-white/10 bg-[linear-gradient(180deg,rgba(4,8,16,0.84),rgba(4,8,16,0.58))] px-4 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <TelemetryRadar />

          <div className="flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.24em] text-gray-400">
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
            
            <motion.div className="text-white font-bold drop-shadow-[0_0_4px_#22d3ee] mt-0.5 text-[11px] will-change-contents tabular-nums tracking-[0.1em]">
              {timeStr}
            </motion.div>
            
            <div className="mt-1 flex items-center gap-2 border border-cyan-500/30 bg-cyan-950/30 px-2 py-0.5 text-cyan-400/90 shadow-[inset_0_0_10px_rgba(34,211,238,0.12)]">
              <span className="opacity-70 text-[8px] animate-pulse">LOC_ADDR:</span>
              <ScrambleTextNode text={scrambledPath} className="font-bold drop-shadow-[0_0_2px_cyan]" />
            </div>
          </div>
        </div>
      </div>

      <QuantumDock navItems={NAV_ITEMS} />

      <div className="fixed bottom-8 left-8 z-40 hidden flex-col items-start gap-2 md:block pointer-events-none">
         <div className="cyber-barcode h-6 w-32 rotate-180 opacity-25 mix-blend-screen" style={{ writingMode: 'vertical-rl' }} />
         <motion.div 
           className="writing-vertical-rl text-[10px] tracking-[0.34em] font-mono font-bold text-white/30 uppercase will-change-transform transform-gpu"
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
