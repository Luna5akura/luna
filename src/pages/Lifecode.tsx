import React from 'react';
import { motion } from 'framer-motion';

const Lifecode: React.FC = () => {
  return (
    // 1. 全局背景：1-Bit 抖动纹理 (Checkerboard Pattern)
    <div className="min-h-screen flex flex-row bg-white text-black overflow-hidden font-sans relative selection:bg-black selection:text-white"
         style={{
           // CSS 绘制棋盘格模拟 50% 灰色
           backgroundImage: `
             linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
             linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)
           `,
           backgroundSize: '4px 4px',
           backgroundPosition: '0 0, 2px 2px'
         }}>
      
      {/* 装饰：桌面上漂浮的图标 (Floppy Disk) */}
      <motion.div 
        drag
        className="absolute top-10 left-10 w-16 h-16 bg-white border-2 border-black rounded flex flex-col items-center justify-center shadow-[4px_4px_0_black] cursor-grab active:cursor-grabbing z-0"
      >
         <div className="w-10 h-10 border-2 border-black relative bg-white">
            <div className="absolute top-2 left-1 w-6 h-4 border-2 border-black bg-black"></div> {/* Shutter */}
            <div className="absolute bottom-1 left-1 right-1 h-3 border-2 border-black"></div>
         </div>
         <span className="text-[10px] font-bold mt-1 bg-white px-1">System</span>
      </motion.div>

      <motion.div 
        drag
        className="absolute bottom-20 right-20 w-16 h-16 bg-white border-2 border-black rounded flex flex-col items-center justify-center shadow-[4px_4px_0_black] cursor-grab active:cursor-grabbing z-0"
      >
         <div className="text-3xl">🗑️</div>
         <span className="text-[10px] font-bold mt-1 bg-white px-1">Trash</span>
      </motion.div>

      {/* --- 左侧：代码编辑器 (Document Window) --- */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-1/2 h-screen p-8 flex flex-col relative z-10"
      >
        <div className="flex-1 flex flex-col bg-white border-2 border-black rounded-lg shadow-[8px_8px_0_black] overflow-hidden">
          
          {/* 经典标题栏：水平条纹 */}
          <div className="h-8 border-b-2 border-black flex items-center justify-center relative">
             {/* 条纹背景 */}
             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_50%,#fff_50%)] bg-[size:100%_4px] opacity-100"></div>
             
             {/* 标题文字 (白底黑字盒子) */}
             <div className="relative z-10 bg-white px-4 border-l-2 border-r-2 border-black font-bold text-sm tracking-wide">
                Untitled_Script.txt
             </div>

             {/* 关闭按钮 */}
             <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-black bg-white active:bg-black transition-colors"></div>
          </div>

          {/* 菜单栏 */}
          <div className="flex border-b-2 border-black text-xs font-bold divide-x-2 divide-black bg-white">
             <div className="px-3 py-1 hover:invert cursor-pointer">File</div>
             <div className="px-3 py-1 hover:invert cursor-pointer">Edit</div>
             <div className="px-3 py-1 hover:invert cursor-pointer">View</div>
             <div className="px-3 py-1 hover:invert cursor-pointer">Special</div>
          </div>

          {/* 编辑区 (带滚动条) */}
          <div className="flex-1 flex relative">
             <div className="flex-1 p-4">
                <textarea
                  className="w-full h-full bg-transparent resize-none focus:outline-none text-black font-mono text-base leading-6 antialiased"
                  style={{ fontFamily: '"Courier Prime", monospace', fontSmooth: 'never', WebkitFontSmoothing: 'none' }}
                  spellCheck={false}
                  placeholder="> Hello World_
function classicMac() {
  return retro.cool();
}"
                ></textarea>
             </div>
             
             {/* 复古滚动条 */}
             <div className="w-6 border-l-2 border-black bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')] opacity-50 relative">
                <div className="absolute top-0 w-full h-6 border-b-2 border-black bg-white flex items-center justify-center font-bold text-xs">▲</div>
                <div className="absolute top-10 left-[2px] right-[2px] h-16 bg-white border-2 border-black shadow-[2px_2px_0_black]"></div>
                <div className="absolute bottom-0 w-full h-6 border-t-2 border-black bg-white flex items-center justify-center font-bold text-xs">▼</div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* --- 右侧：工具箱与显示器 --- */}
      <div className="w-1/2 h-screen flex flex-col p-8 pl-0 space-y-8">
        
        {/* 地图预览 (Paint 程序风格) */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="h-2/3 flex flex-col relative"
        >
          <div className="flex-1 bg-white border-2 border-black rounded-lg shadow-[8px_8px_0_black] flex flex-col overflow-hidden">
             <div className="h-8 border-b-2 border-black relative flex items-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_50%,#fff_50%)] bg-[size:100%_4px]"></div>
                <div className="relative z-10 bg-white px-4 border-r-2 border-black font-bold text-sm ml-2">
                   Map_Preview
                </div>
             </div>

             <div className="flex-1 flex">
                {/* 左侧工具栏 */}
                <div className="w-10 border-r-2 border-black flex flex-col gap-[2px] p-[2px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]">
                   {[...Array(6)].map((_,i) => (
                      <div key={i} className="aspect-square bg-white border-2 border-black flex items-center justify-center hover:invert cursor-pointer">
                        <div className="w-4 h-4 bg-black clip-path-icon"></div>
                      </div>
                   ))}
                </div>

                {/* 画布 */}
                <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                   {/* 1-Bit 风格的地图 */}
                   <div className="w-64 h-64 border-2 border-black relative">
                      {/* 抖动纹理的草地 */}
                      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0wIDBMOCA4TTggMEwwIDgiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
                      
                      {/* 像素小人 */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-16 border-2 border-black bg-white flex flex-col items-center justify-center animate-bounce">
                         <div className="w-8 h-8 border-2 border-black rounded-full mb-1 flex justify-center items-center">
                            <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                         </div>
                         <div className="w-10 h-1 bg-black"></div>
                      </div>

                      <div className="absolute bottom-2 right-2 bg-white px-2 border-2 border-black text-xs font-bold shadow-[2px_2px_0_black]">
                         100%
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* 控制台 (Alert Box) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="h-1/3 flex flex-col"
        >
          <div className="flex-1 bg-white border-2 border-black rounded-lg shadow-[8px_8px_0_black] flex flex-col relative p-4">
             {/* 经典的 Mac 炸弹图标位置 */}
             <div className="absolute top-4 left-4 text-4xl">💣</div>
             
             <div className="ml-16">
                <h3 className="font-bold text-lg mb-2">System Console</h3>
                <div className="font-mono text-xs space-y-2 h-20 overflow-y-auto border-2 border-black p-2 bg-gray-50">
                   <p> Initializing...</p>
                   <p> Loading 1-bit assets...</p>
                   <p className="bg-black text-white inline-block px-1">_ Waiting for command</p>
                </div>
                
                <div className="mt-4 flex gap-4">
                   <button className="flex-1 border-2 border-black rounded-full py-1 font-bold text-sm hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0_black] active:shadow-none active:translate-y-[2px]">
                      Cancel
                   </button>
                   <button className="flex-1 border-2 border-black rounded-full py-1 font-bold text-sm bg-black text-white hover:invert transition-all shadow-[2px_2px_0_gray] active:shadow-none active:translate-y-[2px]">
                      OK
                   </button>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .clip-path-icon { clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%); }
      `}</style>
    </div>
  );
};

export default Lifecode;