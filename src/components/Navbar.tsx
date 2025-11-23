// src/components/Navbar.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* 左上角：Logo / 代号 */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference cursor-hover">
        <NavLink to="/" className="text-2xl font-bold tracking-tighter hover:tracking-widest transition-all duration-500">
          LUNA_PROTOCOL
        </NavLink>
        <div className="text-[10px] opacity-60 mt-1">v.2.0.24 // SYSTEM_ONLINE</div>
      </div>

      {/* 右上角：状态 / 时间 / 装饰 */}
      <div className="fixed top-8 right-8 z-50 text-right mix-blend-difference hidden md:block">
        <div className="flex flex-col items-end gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#00ff00]"></span>
          <span className="text-xs font-mono">{new Date().getFullYear()} / EARTH</span>
          <span className="text-xs font-mono opacity-50">{location.pathname}</span>
        </div>
      </div>

      {/* 底部中央：主导航坞 (Dock) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="
          flex items-center gap-1
          bg-white/5 backdrop-blur-md 
          border border-white/10 px-2 py-2 rounded-full
        ">
          {['World', 'Warp', 'About', 'Skill'].map((item) => {
            const path = item === 'World' ? '/' : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={path}
                className={({ isActive }) => `
                  relative px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest cursor-hover
                  transition-all duration-300 overflow-hidden group
                  ${isActive ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}
                `}
              >
                <span className="relative z-10">{item}</span>
                {/* 悬停时的扫描线效果 */}
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* 左侧竖排装饰文字 */}
      <div className="fixed left-8 bottom-8 z-40 hidden md:block mix-blend-difference">
         <div className="writing-vertical-rl text-[10px] tracking-[0.3em] opacity-30">
            LOVE IS MURDEROUS UTOPIA
         </div>
      </div>
    </>
  );
};

export default Navbar;