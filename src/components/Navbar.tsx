// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useAnimationFrame } from 'framer-motion';

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
        .map((char, index) => index < iteration ? text[index] : chars[Math.floor(Math.random() * chars.length)])
        .join("");
      if (iteration < text.length) { iteration += 1 / 3; frame = requestAnimationFrame(animate); }
      else nodeRef.current.textContent = text;
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text]);
  return <span ref={nodeRef} className={className} />;
};

const useQuantumClock = () => {
  const timeStr = useMotionValue("00:00:00");
  useAnimationFrame(() => {
    const d = new Date();
    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');
    const s = d.getSeconds().toString().padStart(2, '0');
    timeStr.set(`${h}:${m}:${s}`);
  });
  return timeStr;
};

const useHardwareStatus = () => {
  const [battery, setBattery] = useState("PWR:100%[AC]");
  const [net, setNet] = useState("NET:ETHERNET");
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
        const updateNet = () => setNet(`NET:${conn.effectiveType.toUpperCase()}`);
        updateNet();
        conn.addEventListener('change', updateNet);
      }
    } catch (e) {}
  }, []);
  return { battery, net };
};

const TelemetryRadar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 32 * dpr;
    canvas.height = 32 * dpr;
    ctx.scale(dpr, dpr);
    let angle = 0;
    let frame: number;
    const blips = Array.from({ length: 3 }, () => ({ r: Math.random() * 12 + 2, theta: Math.random() * Math.PI * 2, life: Math.random() * 100 }));
    const render = () => {
      ctx.clearRect(0, 0, 32, 32);
      const cx = 16, cy = 16;
      ctx.strokeStyle = '#808080';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.moveTo(cx, 2); ctx.lineTo(cx, 30);
      ctx.moveTo(2, cy); ctx.lineTo(30, cy);
      ctx.stroke();
      ctx.fillStyle = '#c0c0c0';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, 14, angle, angle + 0.5);
      ctx.lineTo(cx, cy);
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle + 0.5) * 14, cy + Math.sin(angle + 0.5) * 14);
      ctx.stroke();
      blips.forEach(b => {
        b.life -= 1;
        if (b.life <= 0) { b.r = Math.random() * 12 + 2; b.theta = Math.random() * Math.PI * 2; b.life = 100 + Math.random() * 100; }
        const bx = cx + Math.cos(b.theta) * b.r;
        const by = cy + Math.sin(b.theta) * b.r;
        const alpha = Math.max(0, b.life / 200);
        ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.fillRect(bx - 1, by - 1, 2, 2);
      });
      angle += 0.08;
      frame = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(frame);
  }, []);
  return <canvas ref={canvasRef} style={{ width: 32, height: 32 }} className="border border-gray-600 bg-[#c0c0c0]" />;
};

const MagneticDockItem = ({ item, isActive, path }: { item: string, isActive: boolean, path: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const rectRef = useRef<{ left: number, top: number, width: number, height: number } | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 20, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20, mass: 0.1 });
  const handleMouseEnter = () => { if (ref.current) rectRef.current = ref.current.getBoundingClientRect(); };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    mouseX.set((e.clientX - (left + width / 2)) * 0.2);
    mouseY.set((e.clientY - (top + height / 2)) * 0.2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); rectRef.current = null; };
  return (
    <NavLink
      to={path}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center px-4 py-2 outline-none group cursor-default z-20"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={cn(
          "relative z-10 font-mono text-xs font-bold uppercase tracking-wide transition-all duration-200 will-change-transform transform-gpu",
          isActive ? "text-black" : "text-gray-500 group-hover:text-gray-800"
        )}
      >
        <span data-text={item}>{item}</span>
        {isActive && (
          <motion.div
            layoutId="nav-hologram-beam"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full h-0.5 bg-gray-700"
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
          />
        )}
      </motion.div>
    </NavLink>
  );
};

const QuantumDock = ({ navItems }: { navItems: string[] }) => {
  const location = useLocation();
  const dockRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{ left: number, top: number, width: number, height: number } | null>(null);
  const dockX = useMotionValue(0);
  const dockY = useMotionValue(0);
  const tiltX = useSpring(useTransform(dockY, [-1, 1], [5, -5]), { stiffness: 200, damping: 25 });
  const tiltY = useSpring(useTransform(dockX, [-1, 1], [-5, 5]), { stiffness: 200, damping: 25 });
  const handleMouseEnter = () => { if (dockRef.current) rectRef.current = dockRef.current.getBoundingClientRect(); };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    dockX.set((e.clientX - (left + width / 2)) / (width / 2));
    dockY.set((e.clientY - (top + height / 2)) / (height / 2));
  };
  const handleMouseLeave = () => { dockX.set(0); dockY.set(0); rectRef.current = null; };
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-max hidden md:block">
      <motion.nav
        ref={dockRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="flex items-center p-1 gap-1 bg-[#c0c0c0] border border-gray-600 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080] relative will-change-transform transform-gpu overflow-visible"
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-600 -translate-x-0.5 -translate-y-0.5" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600 translate-x-0.5 -translate-y-0.5" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-600 -translate-x-0.5 translate-y-0.5" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-600 translate-x-0.5 translate-y-0.5" />
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
  const navItems = ['World', 'Warp', 'Wit', 'Wow'];
  const scrambledPath = location.pathname === '/' ? '/ROOT' : location.pathname.toUpperCase();
  const { battery, net } = useHardwareStatus();
  const timeStr = useQuantumClock();

  return (
    <>
      <style>{`
        .cyber-barcode {
          background-image: repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px);
          background-size: 200% 100%;
          animation: barcode-scan 3s linear infinite;
        }
        @keyframes barcode-scan { 0% { background-position: 0 0; } 100% { background-position: -200% 0; } }
      `}</style>

      <div className="fixed inset-6 pointer-events-none z-[100] hidden md:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-600" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-600" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600" />
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-gray-700" />
        <div className="absolute top-1/2 left-0 w-3 h-[1px] bg-gray-600 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-3 h-[1px] bg-gray-600 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-[1px] h-3 bg-gray-600 -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-[1px] h-3 bg-gray-600 -translate-x-1/2" />
      </div>

      <div className="fixed top-6 left-6 z-50 pointer-events-auto">
        <NavLink to="/" className="group flex flex-col items-start cursor-default outline-none">
          <div className="flex items-center gap-2 relative overflow-hidden">
            <span className="text-xl font-bold tracking-tighter text-black uppercase">LUNA_PROTOCOL</span>
          </div>
          <span className="pl-4 text-[9px] font-mono text-gray-500 group-hover:text-black transition-colors flex items-center gap-2 uppercase tracking-wider mt-1">
            v.2.0.26 // ONLINE
            <span className="w-1.5 h-1.5 bg-black rounded-full hidden group-hover:block" />
          </span>
        </NavLink>
      </div>

      <div className="fixed top-6 right-6 z-50 text-right hidden md:block pointer-events-none">
        <div className="flex items-start gap-3">
          <TelemetryRadar />
          <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-gray-600 uppercase tracking-wider">
            <div className="flex items-center gap-2 text-gray-700">
              <span>{net}</span>
              <span className="w-1.5 h-1.5 rounded-sm bg-gray-500" />
            </div>
            <div className="text-gray-700 flex items-center gap-2">
              <span className="w-6 h-[4px] bg-gray-300 flex gap-[1px]">
                <span className="w-full h-full bg-gray-600" />
                <span className="w-full h-full bg-gray-600" />
                <span className="w-full h-full bg-gray-600" />
              </span>
              {battery}
            </div>

            <div className="text-gray-700 mt-1 flex items-center gap-2 border border-gray-400 px-2 py-0.5 bg-gray-200 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]">
              <span className="opacity-70 text-[8px]">LOC:</span>
              <ScrambleTextNode text={scrambledPath} className="font-bold" />
            </div>
          </div>
        </div>
      </div>

      <QuantumDock navItems={navItems} />

      <div className="fixed left-6 bottom-6 z-40 hidden md:block pointer-events-none flex flex-col items-start gap-2">
        <div className="w-24 h-5 cyber-barcode opacity-40" style={{ writingMode: 'vertical-rl' }} />
        <div className="text-[9px] tracking-wider font-mono font-bold text-gray-500 uppercase">
          LOVE IS MURDEROUS UTOPIA
        </div>
      </div>
    </>
  );
};

export default Navbar;