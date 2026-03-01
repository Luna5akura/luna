import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 蝴蝶组件：使用 SVG 路径绘制优雅的标本轮廓
const ButterflyIcon = ({ className, color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill={color}>
    <path d="M50 20 C 52 10, 55 5, 50 2 C 45 5, 48 10, 50 20 M50 20 C 60 15, 80 5, 90 20 C 95 30, 85 45, 60 50 C 85 55, 95 70, 80 85 C 70 95, 55 85, 50 65 C 45 85, 30 95, 20 85 C 5 70, 15 55, 40 50 C 15 45, 5 30, 10 20 C 20 5, 40 15, 50 20" />
  </svg>
);

// 装饰性的角落花纹
const CornerOrnament = ({ rotate = 0 }) => (
  <div className="absolute w-8 h-8 pointer-events-none opacity-60" style={{ transform: `rotate(${rotate}deg)` }}>
    <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 50 V 15 Q 2 2, 15 2 H 50" />
      <path d="M8 50 V 18 Q 8 8, 18 8 H 50" opacity="0.5" />
    </svg>
  </div>
);

const VintageLuxuryOverlay: React.FC = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    // 全局背景：深墨绿渐变到纯黑，带有颗粒质感
    <div className="min-h-screen w-full bg-[#050a07] text-[#e0e7df] font-serif relative overflow-hidden flex p-10 gap-10 selection:bg-[#2d4a3e] selection:text-white">
      
      {/* 1. 背景纹理层 */}
      {/* 径向渐变，模拟博物馆灯光 */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#0f291e_0%,_#000000_80%)] opacity-80"></div>
      {/* 噪点纹理 (Noise) - 增加胶片/纸张感 */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- 左侧：画框式直播区 (The Frame) --- */}
      <div className="flex-1 relative z-10 flex flex-col justify-center">
        
        {/* 外框：双线设计，模拟画框 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative border-[1px] border-[#3d6652] p-1.5 flex-1 flex flex-col shadow-2xl bg-black/40 backdrop-blur-sm"
        >
          {/* 内框：金色/浅绿细线 */}
          <div className="border-[1px] border-[#8fad98] h-full w-full relative p-6 flex flex-col">
            
            {/* 四角装饰 */}
            <div className="absolute top-0 left-0 text-[#8fad98]"><CornerOrnament rotate={0} /></div>
            <div className="absolute top-0 right-0 text-[#8fad98]"><CornerOrnament rotate={90} /></div>
            <div className="absolute bottom-0 right-0 text-[#8fad98]"><CornerOrnament rotate={180} /></div>
            <div className="absolute bottom-0 left-0 text-[#8fad98]"><CornerOrnament rotate={270} /></div>

            {/* 蝴蝶标本装饰 (左上) */}
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 text-[#2d4a3e] drop-shadow-lg z-20"
              animate={{ rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
               <ButterflyIcon className="drop-shadow-[2px_4px_6px_rgba(0,0,0,0.8)]" />
            </motion.div>

             {/* 蝴蝶标本装饰 (右下 - 小) */}
             <motion.div 
              className="absolute -bottom-4 -right-4 w-16 h-16 text-[#1b3328] drop-shadow-lg z-20 opacity-80"
              animate={{ rotate: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
               <ButterflyIcon />
            </motion.div>

            {/* 顶部标题 */}
            <div className="flex justify-between items-end border-b border-[#3d6652] pb-4 mb-4">
               <div>
                  <h1 className="text-3xl tracking-[0.2em] uppercase text-[#bfd8c9] font-medium" style={{ fontFamily: 'Didot, "Times New Roman", serif' }}>
                     Nocturne
                  </h1>
                  <p className="text-xs tracking-[0.3em] text-[#5e8c73] mt-1 italic">
                     Collection No. {new Date().getFullYear()}
                  </p>
               </div>
               <div className="flex flex-col items-end">
                   <span className="text-xs tracking-widest text-[#5e8c73]">LIVE BROADCAST</span>
                   <div className="flex gap-1 mt-1">
                      <div className="w-1 h-1 bg-[#8fad98] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#3d6652] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#1b2b24] rounded-full"></div>
                   </div>
               </div>
            </div>

            {/* 直播画面占位符 (OBS 透明区) */}
            <div className="flex-1 relative flex items-center justify-center border border-[#1f332a] bg-black/20">
               {/* 淡淡的中心装饰纹理 */}
               <div className="w-64 h-64 border border-[#2d4a3e] rounded-full opacity-20 flex items-center justify-center">
                  <div className="w-48 h-48 border border-[#2d4a3e] rounded-full"></div>
               </div>
               <span className="absolute bottom-4 text-[#3d6652] text-xs tracking-[0.4em] uppercase opacity-50">
                  Visual Signal Input
               </span>
            </div>

            {/* 底部信息 */}
            <div className="mt-4 flex justify-between items-center text-xs text-[#5e8c73]">
               <span className="tracking-widest">EST. 2024</span>
               <span className="font-italic opacity-60">"Beauty in silence."</span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* --- 右侧：典雅信纸风聊天区 (The Ledger) --- */}
      <motion.div 
         initial={{ opacity: 0, x: 30 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
         className="w-[380px] relative z-10 flex flex-col"
      >
        {/* 顶部：日期与时间 */}
        <div className="text-center mb-6">
           <div className="inline-block border-b-2 border-[#2d4a3e] pb-1 px-4">
             <span className="text-2xl tracking-widest text-[#bfd8c9]" style={{ fontVariantNumeric: 'oldstyle-nums' }}>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
             </span>
           </div>
           <div className="text-[10px] tracking-[0.4em] text-[#5e8c73] mt-2 uppercase">
              {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
           </div>
        </div>

        {/* 聊天容器：模拟深色信纸 */}
        <div className="flex-1 bg-gradient-to-b from-[#0c1612] to-[#050a07] border border-[#2d4a3e] p-1 shadow-2xl relative">
           
           {/* 顶部装饰线 */}
           <div className="absolute top-3 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-[#3d6652] to-transparent opacity-50"></div>

           <div className="h-full border border-[#1f332a] p-6 flex flex-col overflow-hidden">
              
              {/* 标题 */}
              <div className="text-center mb-6 opacity-80">
                 <h2 className="text-sm uppercase tracking-[0.3em] text-[#8fad98] mb-1">Guest Book</h2>
                 <div className="w-8 h-[1px] bg-[#3d6652] mx-auto"></div>
              </div>

              {/* 消息列表 */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-elegant">
                 
                 {/* 消息条目 1 */}
                 <div className="relative pl-4 border-l border-[#2d4a3e]">
                    <div className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-[#5e8c73] rotate-45"></div>
                    <div className="text-xs text-[#5e8c73] tracking-wider mb-1 font-bold">Lady_Whistledown</div>
                    <p className="text-sm text-[#bfd8c9] leading-relaxed italic opacity-90">
                       "这般配色的确显得格外雅致，不知今日播送何种曲目？"
                    </p>
                 </div>

                 {/* 消息条目 2 (高亮/捐赠) */}
                 <div className="relative bg-[#13261f] p-4 border border-[#2d4a3e]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#0c1612] px-2">
                       <ButterflyIcon className="w-4 h-4 text-[#8fad98]" />
                    </div>
                    <div className="text-center mb-2">
                       <span className="text-xs text-[#8fad98] tracking-[0.2em] border-b border-[#2d4a3e] pb-1">
                          PATRON
                       </span>
                    </div>
                    <p className="text-sm text-[#e0e7df] text-center font-medium leading-relaxed">
                       "Gatsby_Great 赠送了一枚翡翠胸针。"
                    </p>
                 </div>

                 {/* 消息条目 3 */}
                 <div className="relative pl-4 border-l border-[#2d4a3e]">
                    <div className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-[#2d4a3e] rotate-45"></div>
                    <div className="text-xs text-[#4a6e5a] tracking-wider mb-1 font-bold">Silent_Observer</div>
                    <p className="text-sm text-[#a8c2b3] leading-relaxed italic opacity-80">
                       "如此静谧的氛围，甚好。"
                    </p>
                 </div>

                  {/* 消息条目 4 */}
                  <div className="relative pl-4 border-l border-[#2d4a3e]">
                    <div className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-[#2d4a3e] rotate-45"></div>
                    <div className="text-xs text-[#4a6e5a] tracking-wider mb-1 font-bold">Artist_01</div>
                    <p className="text-sm text-[#a8c2b3] leading-relaxed italic opacity-80">
                       "左上角的蝴蝶做得非常逼真。"
                    </p>
                 </div>

              </div>
              
              {/* 底部输入框模拟 */}
              <div className="mt-4 pt-4 border-t border-[#1f332a] opacity-50">
                 <div className="text-xs text-[#3d6652] tracking-widest text-center">
                    ~ WRITING... ~
                 </div>
              </div>

           </div>
        </div>
      </motion.div>

      {/* 补充 CSS */}
      <style>{`
        /* 优雅的细滚动条 */
        .scrollbar-elegant::-webkit-scrollbar {
          width: 3px;
        }
        .scrollbar-elegant::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
        }
        .scrollbar-elegant::-webkit-scrollbar-thumb {
          background: #3d6652;
        }
      `}</style>
    </div>
  );
};

export default VintageLuxuryOverlay;