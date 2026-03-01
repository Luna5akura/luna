import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

// ==========================================
// 【炫技点 3：真实网络环境探测与量子时钟】
// ==========================================
const useTerminalData = () => {
  const [time, setTime] = useState("");
  const [ping, setPing] = useState(12);
  const[netType, setNetType] = useState("4G-LTE");

  useEffect(() => {
    // 探测真实网络类型 (兼容处理)
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection && connection.effectiveType) {
      setNetType(connection.effectiveType.toUpperCase());
    }

    let animationFrameId: number;
    let lastPingTime = Date.now();

    const updateTerminal = () => {
      const now = Date.now();
      // 毫秒级时间跳动
      const date = new Date(now);
      setTime(`${date.toISOString().slice(11, 23)}Z`);

      // 模拟真实的 Ping 波动 (每隔 2 秒刷新一次延迟)
      if (now - lastPingTime > 2000) {
        setPing(Math.floor(Math.random() * 15) + 8); // 8ms - 23ms 之间波动
        lastPingTime = now;
      }
      animationFrameId = requestAnimationFrame(updateTerminal);
    };
    animationFrameId = requestAnimationFrame(updateTerminal);
    return () => cancelAnimationFrame(animationFrameId);
  },[]);

  return { time, ping, netType };
};

// ==========================================
// 【炫技点 1：macOS 级物理流体 Dock Item】
// 独立组件，用于计算自身与鼠标的相对物理距离
// ==========================================
const DockItem = ({ item, isActive, mouseX, path }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);

  // 计算鼠标中心点到当前元素中心点的距离
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // 根据距离进行非线性映射放大 (距离越近，放大倍数越大，最大 1.5 倍)
  const scaleSync = useTransform(distance, [-150, 0, 150],[1, 1.5, 1]);
  const widthSync = useTransform(distance,[-150, 0, 150], [80, 120, 80]); // 动态推开邻居
  
  // 加入物理弹簧阻尼，让放大与缩小的过程极度丝滑
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 200, damping: 15 });
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 });

  return (
    <NavLink to={path} ref={ref} className="relative flex items-center justify-center outline-none">
      <motion.div
        style={{ scale, width }}
        className={cn(
          "relative flex items-center justify-center h-10 rounded-full text-xs font-mono font-bold uppercase tracking-wider cursor-none",
          "transition-colors duration-300 group z-10",
          isActive ? "text-cyan-300" : "text-gray-500 hover:text-white"
        )}
      >
        <span className="relative z-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{item}</span>
        
        {/* 【炫技点 2：Vercel 同款 LayoutId 空间穿梭背景】 */}
        {isActive && (
          <motion.div
            layoutId="active-dock-pill" // 神奇的属性，让不同组件间的背景可以跨越空间飞行
            className="absolute inset-0 bg-cyan-500/20 border border-cyan-400/50 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] z-0"
            transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }}
          />
        )}
        
        {/* Hover 时的高光扫过效果 */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-10">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </div>
      </motion.div>
    </NavLink>
  );
};


const Navbar: React.FC = () => {
  const location = useLocation();
  const { time, ping, netType } = useTerminalData();

  // 记录整个 Dock 的鼠标 X 坐标，初始值为极大值避免初始放大
  const dockMouseX = useMotionValue(Infinity);

  const navItems =['World', 'Warp', 'About', 'Skill'];

  return (
    <>
      {/* --- 左上角：品牌 --- */}
      {/* 极简高级技巧：保持 mix-blend-difference，在亮暗背景下自动反色 */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference pointer-events-auto">
        <NavLink to="/" className="group flex flex-col items-start cursor-crosshair">
          <div className="flex items-center gap-2 relative overflow-hidden">
             {/* 【炫技点 4：Hover 极速乱码反色】 */}
             <motion.span 
               className="text-xl font-bold tracking-tighter text-white group-hover:hidden transition-all"
             >
                LUNA_PROTOCOL
             </motion.span>
             <motion.span 
               className="text-xl font-black tracking-tighter text-cyan-400 hidden group-hover:block blur-[0.5px]"
               transition={{ repeat: Infinity, duration: 1 }}
             >
                0x4C554E41_SYS
             </motion.span>
          </div>
          <span className="pl-4 text-[9px] font-mono text-gray-400 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
            v.2.0.24 // SYS.ONLINE
            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse hidden group-hover:block" />
          </span>
        </NavLink>
      </div>

      {/* --- 右上角：数据状态 --- */}
      <div className="fixed top-8 right-8 z-50 text-right hidden md:block mix-blend-difference pointer-events-none">
        <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-gray-400">
          <div className="flex items-center gap-2">
            {/* 动态波动的 Ping 值和网络类型 */}
            <span className="text-cyan-400 drop-shadow-[0_0_2px_currentColor]">{ping}ms</span>
            <span>NET: {netType}</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          {/* 高频量子时钟 */}
          <span className="text-white tracking-widest">{time}</span>
          <span className="opacity-50 uppercase tracking-widest">{location.pathname === '/' ? '/ROOT' : location.pathname}</span>
        </div>
      </div>

      {/* --- 底部中央：物理流体 Dock 栏 --- */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit perspective-[800px]">
        {/* 给容器加上 onMouseMove 捕获坐标，离开时复位 */}
        <nav 
          onMouseMove={(e) => dockMouseX.set(e.clientX)}
          onMouseLeave={() => dockMouseX.set(Infinity)}
          className={cn(
            "flex items-center p-2 gap-1",
            "bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40",
            "border border-white/10 rounded-full",
            "shadow-[0_20px_40px_-10px_rgba(0,0,0,1)] ring-1 ring-white/5",
            "transform-gpu transition-all duration-300 hover:border-white/20 hover:bg-[#0a0a0a]/90"
          )}
        >
          {/* AnimatePresence 和 layoutId 必须在同一个父节点上下文中 */}
          <AnimatePresence>
            {navItems.map((item) => {
              const path = item === 'World' ? '/' : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path || (item === 'World' && location.pathname === '/');
              return (
                <DockItem 
                  key={item} 
                  item={item} 
                  isActive={isActive} 
                  mouseX={dockMouseX} 
                  path={path} 
                />
              );
            })}
          </AnimatePresence>
        </nav>
      </div>

      {/* --- 左下角：装饰 --- */}
      <div className="fixed left-8 bottom-8 z-40 hidden md:block pointer-events-none mix-blend-difference">
         <motion.div 
           className="writing-vertical-rl text-[10px] tracking-[0.4em] font-mono font-bold text-white/30"
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