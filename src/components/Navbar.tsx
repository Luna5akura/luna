import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* --- 左上角：品牌 --- */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference">
        <NavLink to="/" className="group flex flex-col items-start">
          <div className="flex items-center gap-2">
             <span className="text-xl font-bold tracking-tighter text-white group-hover:text-cyan-300 cursor-hover transition-colors duration-300">
                LUNA_PROTOCOL
             </span>
          </div>
          <span className="pl-4 text-[9px] font-mono text-gray-400 group-hover:text-white transition-colors">
            v.2.0.24 // SYS.ONLINE
          </span>
        </NavLink>
      </div>

      {/* --- 右上角：数据状态 --- */}
      <div className="fixed top-8 right-8 z-50 text-right hidden md:block mix-blend-difference">
        <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-gray-400">
          <div className="flex items-center gap-2">
            <span>NET: STABLE</span>
          </div>
          <span>{new Date().toLocaleDateString('en-CA')}</span>
          <span className="opacity-50 uppercase tracking-widest">{location.pathname === '/' ? '/ROOT' : location.pathname}</span>
        </div>
      </div>

      {/* --- 底部中央：导航 Dock --- */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit">
        <nav className={cn(
          "flex items-center gap-1 p-1.5",
          // 背景改为更深邃的黑色，边框更锐利
          "bg-[#050505]/90 backdrop-blur-md",
          "border border-white/10 rounded-full",
          "shadow-[0_0_20px_rgba(0,0,0,0.8)]"
        )}>
          {['World', 'Warp', 'About', 'Skill'].map((item) => {
            const path = item === 'World' ? '/' : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={path}
                className={({ isActive }) => cn(
                  "relative px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider cursor-pointer",
                  "transition-all duration-300 overflow-hidden group border border-transparent",
                  isActive 
                    ? "bg-cyan-950/30 text-cyan-400 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.2)]" // 选中态改为青色系
                    : "text-gray-500 hover:text-white hover:bg-white/5 cursor-hover"
                )}
              >
                <span className="relative z-10">{item}</span>
                
                {/* 扫描线效果 */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* --- 左下角：装饰 --- */}
      <div className="fixed left-8 bottom-8 z-40 hidden md:block pointer-events-none">
         <div className="writing-vertical-rl text-[10px] tracking-[0.4em] font-mono font-bold text-white/20">
            LOVE IS MURDEROUS UTOPIA
         </div>
      </div>
    </>
  );
};

export default Navbar;