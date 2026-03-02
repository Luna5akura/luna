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
// 【顶级炫技点 1：按位乱码解密微型引擎】
// 拦截 React Router 路由状态，在路径变化时产生极客解密特效
// ==========================================
const useScrambleText = (text: string) => {
  const[display, setDisplay] = useState(text);
  
  useEffect(() => {
    let frame: number;
    let iteration = 0;
    // 包含系统级十六进制与操作符的乱码库
    const chars = "01xX_!@#$<>?{}[]%^&*";
    
    const animate = () => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration < text.length) {
        iteration += 1 / 2; // 控制解密速度
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return display;
};

// ==========================================
// 【顶级炫技点 2：零重绘量子时钟 (Zero-Render DOM Node)】
// 规避 React Diff 算法，直接在原生 DOM 上高频写入毫秒时间
// ==========================================
const useQuantumClock = () => {
  const timeStr = useMotionValue("00:00:00:000");
  
  useAnimationFrame(() => {
    const d = new Date();
    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');
    const s = d.getSeconds().toString().padStart(2, '0');
    const ms = d.getMilliseconds().toString().padStart(3, '0');
    timeStr.set(`${h}:${m}:${s}:${ms}`);
  });
  
  return timeStr;
};

// ==========================================
// 【顶级炫技点 3：真实底层硬件遥测 API】
// 获取用户的物理设备电量、网络协议与下行带宽
// ==========================================
const useHardwareStatus = () => {
  const [battery, setBattery] = useState("PWR:100%[AC]");
  const [net, setNet] = useState("NET:UPLINK_ESTABLISHED");

  useEffect(() => {
    try {
      const nav: any = navigator;
      // 硬件电量探针
      if ('getBattery' in nav) {
        nav.getBattery().then((bat: any) => {
          const updateBat = () => setBattery(`PWR:${Math.floor(bat.level * 100)}%[${bat.charging ? 'AC' : 'DC'}]`);
          updateBat();
          bat.addEventListener('levelchange', updateBat);
          bat.addEventListener('chargingchange', updateBat);
        });
      }
      // 底层网络探针
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
// 【顶级炫技点 4：微重力磁性吸引算法按钮】
// 抛弃生硬的缩放，利用物理弹簧让 DOM 节点向鼠标发生真实的物理偏移
// ==========================================
const MagneticDockItem = ({ item, isActive, path }: { item: string, isActive: boolean, path: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 胡克定律弹簧物理系统：质量 0.1，超高硬度，创造清脆的弹性反馈
  const springX = useSpring(mouseX, { stiffness: 200, damping: 15, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // 磁吸强度计算系数：0.3 (数值越大，吸附越严重)
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    // 鼠标离开，弹簧复位归零
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <NavLink
      to={path}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center px-6 py-3 outline-none group cursor-none z-20"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={cn(
          "relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300",
          isActive ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-200"
        )}
      >
        {item}

        {/* 【顶级炫技点 5：Framer LayoutId 空间拓扑穿梭】 */}
        {isActive && (
          <motion.div
            layoutId="nav-target-lock"
            className="absolute -inset-x-4 -inset-y-2 border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)] pointer-events-none"
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
          >
            {/* 赛博朋克锁定框四角装饰 */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400" />

            {/* 无限循环的雷达扫描线 */}
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
// 【3D 战术底座 HUD】
// ==========================================
const QuantumDock = ({ navItems }: { navItems: string[] }) => {
  const location = useLocation();
  const dockRef = useRef<HTMLDivElement>(null);
  const dockX = useMotionValue(0);
  const dockY = useMotionValue(0);

  // 映射鼠标坐标到 3D 旋转角度，让导航栏看起来像悬浮的全息投影台
  const tiltX = useSpring(useTransform(dockY, [-1, 1], [15, -15]), { stiffness: 150, damping: 20 });
  const tiltY = useSpring(useTransform(dockX, [-1, 1], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dockRef.current) return;
    const { left, top, width, height } = dockRef.current.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    dockX.set((e.clientX - cx) / (width / 2));
    dockY.set((e.clientY - cy) / (height / 2));
  };

  const handleMouseLeave = () => {
    dockX.set(0);
    dockY.set(0);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 perspective-[1000px] pointer-events-auto w-max hidden md:block">
      <motion.nav
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="flex items-center p-1.5 gap-2 bg-[#050505]/80 backdrop-blur-md border border-cyan-900/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/5 relative"
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
  
  // 注入顶级状态与解密算法
  const scrambledPath = useScrambleText(location.pathname === '/' ? '/ROOT' : location.pathname.toUpperCase());
  const { battery, net } = useHardwareStatus();
  const timeStr = useQuantumClock();

  return (
    <>
      {/* 
        全局战术准星遮罩层 (Global Target Reticle)
        极小干预度的边角光栅，极大地提升了画面的“系统操控感”
      */}
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
             {/* Hover 触发十六进制协议层裸露 */}
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
          
          {/* 量子挂载时钟，脱离 React 渲染树 */}
          <motion.div className="text-white font-bold drop-shadow-[0_0_2px_#fff] mt-0.5 text-[11px]">
            {timeStr}
          </motion.div>
          
          <div className="text-cyan-400/80 mt-1 flex items-center gap-2 border border-cyan-900/30 px-1.5 py-0.5 bg-cyan-950/20">
            <span className="opacity-50 text-[8px]">LOC:</span>
            {scrambledPath}
          </div>

        </div>
      </div>

      {/* --- 底部中央：3D 全息导航底座 --- */}
      <QuantumDock navItems={navItems} />

      {/* --- 左下角：固定烙印 --- */}
      <div className="fixed left-8 bottom-8 z-40 hidden md:block pointer-events-none mix-blend-difference">
         <motion.div 
           className="writing-vertical-rl text-[10px] tracking-[0.4em] font-mono font-bold text-white/30 uppercase"
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