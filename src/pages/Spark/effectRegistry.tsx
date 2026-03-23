// src/pages/Spark/effectRegistry.tsx
import React from 'react';
import { randomChoice, randomRange } from './utils';

export interface EffectContext { charIdx: number; charTotal: number; wordIdx: number; wordTotal: number; baseSize: number; }
export interface EffectDef {
  id: string; name: string; keyframes?: string; maxLines?: number; exactLength?: number; hideSubtext?: boolean;
  processChars?: (chars: string[]) => string[];
  calcBaseSize?: (charTotal: number) => number;
  onGenerateWordData?: (wordIdx: number, chars: string[]) => any;
  getCharEnterStyle: (ctx: EffectContext, wordData: any) => React.CSSProperties;
  renderCustom?: (wordObj: any, palette: any, isExiting: boolean) => React.ReactNode;
}


const cyberPopKeyframes = `
  @keyframes foldLeft { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(30deg); } }
  @keyframes foldRight { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(-30deg); } }
  @keyframes pop3DExtrude { 
    0% { transform: scale(0) translateZ(-500px); opacity: 0; } 
    50% { transform: scale(1.2) translateZ(100px); opacity: 1; } 
    100% { transform: scale(1) translateZ(0); opacity: 1; } 
  }
  @keyframes pan3DCamera {
    0% { transform: translate(-10vw, 10vh) rotateX(10deg) rotateY(15deg); }
    100% { transform: translate(10vw, -10vh) rotateX(-5deg) rotateY(-10deg); }
  }
  @keyframes flashPixelStar {
    0%, 10% { opacity: 0; transform: scale(0); }
    15% { opacity: 1; transform: scale(1.5) rotate(45deg); filter: invert(1); }
    20%, 100% { opacity: 0; transform: scale(0); }
  }
`;

// ★ 黑科技：动态生成纯 CSS 3D 等距投影阴影
// 通过堆叠数十层 text-shadow，制造出极其真实的 3D 挤压厚度！
const generateIsometricShadow = (depth: number, extrudeColor: string, outlineColor: string) => {
  let shadow = ``;
  // 第 1 层：黑色描边
  shadow += `-2px -2px 0 ${outlineColor}, 2px -2px 0 ${outlineColor}, -2px 2px 0 ${outlineColor}, 2px 2px 0 ${outlineColor}, `;
  // 中间层：挤压厚度
  for (let i = 1; i <= depth; i++) {
    shadow += `${i * 2}px ${i * 2}px 0 ${extrudeColor}, `;
  }
  // 最底层：挤压体的黑色描边与投影
  shadow += `${depth * 2 + 2}px ${depth * 2}px 0 ${outlineColor}, ${depth * 2}px ${depth * 2 + 2}px 0 ${outlineColor}, ${depth * 2 + 4}px ${depth * 2 + 4}px 0px rgba(0,0,0,0.5)`;
  return shadow;
};

// ==========================================
// 1. ISOMETRIC_3D_BLOCKS (等距 3D 积木排版 - 对应 0:11)
// ==========================================
export const Isometric3DBlocks = {
  id: 'ISOMETRIC_3D', name: 'CYBER (等距 3D 积木)',
  keyframes: cyberPopKeyframes,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ perspective: '1000px', ...isExiting ? wordObj.characters[0].exitStyle : {} }}>
        
        {/* 摄像机全局缓慢运镜，展现 3D 纵深感 */}
        <div className="relative flex flex-col items-center justify-center gap-2"
             style={{ transformStyle: 'preserve-3d', animation: 'pan3DCamera 4s ease-in-out infinite alternate' }}>
          
          {wordObj.characters.map((charData: any, i: number) => {
            // 每行字的倾斜度和位移不同，产生俄罗斯方块的错落感
            const rotate = i % 2 === 0 ? '-5deg' : '5deg';
            const offset = i % 2 === 0 ? '-4vw' : '4vw';
            
            return (
              <div key={i} className="font-black uppercase tracking-tighter"
                   style={{
                     fontSize: 'min(18vw, 22vh)', 
                     color: palette.fg1, // 表面颜色
                     // ★ 调用黑科技，生成 15 层的 3D 阴影！白色侧边，黑色描边
                     textShadow: generateIsometricShadow(15, palette.fg2, palette.accent),
                     transform: `rotate(${rotate}) translateX(${offset})`,
                     animation: `pop3DExtrude 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i * 0.1}s both`
                   }}>
                {charData.char}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

// ==========================================
// 2. FOLDED_CYLINDER_TEXT (折叠空间镜像排版 - 对应 0:04)
// ==========================================
export const FoldedCylinderText = {
  id: 'FOLDED_TEXT', name: 'CYBER (空间折叠排版)',
  keyframes: cyberPopKeyframes, maxLines: 1, hideSubtext: true, getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const text = wordObj.characters.map((c: any) => c.char).join('');
    return (
      <div className="absolute inset-0 flex bg-transparent" style={{ perspective: '800px', ...isExiting ? wordObj.characters[0].exitStyle : {} }}>
        {/* 左半屏幕文本：向内旋转 30 度，并裁剪只显示左半边 */}
        <div className="w-1/2 h-full flex items-center justify-center relative overflow-hidden"
             style={{ transformOrigin: 'right center', animation: 'foldLeft 2s ease-out infinite alternate' }}>
           <div className="absolute left-[50vw] -translate-x-1/2 font-black whitespace-nowrap drop-shadow-[5px_5px_0_#000]"
                style={{ fontSize: 'min(20vw, 30vh)', color: palette.fg1, clipPath: 'inset(0 50% 0 0)' }}>
             {text}
           </div>
        </div>
        {/* 右半屏幕文本：向内旋转 -30 度，并裁剪只显示右半边 */}
        <div className="w-1/2 h-full flex items-center justify-center relative overflow-hidden"
             style={{ transformOrigin: 'left center', animation: 'foldRight 2s ease-out infinite alternate' }}>
           <div className="absolute right-[50vw] translate-x-1/2 font-black whitespace-nowrap drop-shadow-[5px_5px_0_#000]"
                style={{ fontSize: 'min(20vw, 30vh)', color: palette.fg2, clipPath: 'inset(0 0 0 50%)' }}>
             {text}
           </div>
        </div>
      </div>
    );
  }
};

// ==========================================
// 3. PIXEL_STAR_FLASH (像素星芒闪烁排版 - 对应 0:09)
// ==========================================
export const PixelStarFlash = {
  id: 'PIXEL_STAR', name: 'CYBER (像素星芒闪烁)',
  keyframes: cyberPopKeyframes, maxLines: 1, hideSubtext: true, getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const chars = wordObj.characters;
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        <div className="relative flex flex-wrap justify-center gap-[4vw] px-[10vw]">
          {chars.map((charData: any, i: number) => (
            <div key={i} className="relative">
              {/* 突然闪烁反色的巨型像素四角星 (SVG) */}
              <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15vw] h-[15vw] z-20 mix-blend-difference"
                   style={{ fill: palette.fg1, animation: `flashPixelStar 2s steps(2) ${i * 0.3}s infinite` }}>
                 <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
              </svg>
              
              <div className="font-black mix-blend-difference relative z-10"
                   style={{ fontSize: 'min(15vw, 20vh)', color: palette.fg1, WebkitTextStroke: `4px ${palette.accent}` }}>
                {charData.char}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};


const webcoreKeyframes = `
  @keyframes drop3DTV {
    0% { transform: translateZ(1000px) rotateX(60deg) rotateY(45deg); opacity: 0; }
    60% { transform: translateZ(-100px) rotateX(-10deg) rotateY(-15deg); opacity: 1; }
    80% { transform: translateZ(50px) rotateX(5deg) rotateY(10deg); }
    100% { transform: translateZ(0) rotateX(0deg) rotateY(0deg); opacity: 1; }
  }
  @keyframes screenFlicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } 95% { opacity: 1; filter: invert(0); } 96% { filter: invert(1); } }
  @keyframes liquidDistort { 0% { filter: url(#liquid-ripple) blur(2px); transform: skewX(-10deg); } 100% { filter: blur(0px); transform: skewX(0deg); } }
  @keyframes slideInGrid { 0% { transform: translateY(-50vh); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
`;

// ==========================================
// 1. GENKO_DROP (原稿纸精准填字下落 - 对应 0:02)
// ==========================================
export const GenkoDrop = {
  id: 'GENKO_DROP', name: 'CRT (原稿纸竖排)',
  keyframes: webcoreKeyframes,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const chars = wordObj.characters.map((c: any) => c.char);
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        <div className="flex gap-4" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          {/* 将文字严格限制在 10vw 的网格宽度内，完美对齐背景的方格 */}
          {chars.map((char: string, i: number) => (
            <div key={i} className="font-black w-[10vw] h-[10vw] flex items-center justify-center text-black"
                 style={{ 
                   fontSize: '8vw',
                   animation: `slideInGrid 0.5s cubic-bezier(0.19, 1, 0.22, 1) ${i * 0.1}s both` 
                 }}>
              {char}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

// ==========================================
// 2. LIQUID_RIPPLE (液态扭曲 - 对应 0:05)
// ==========================================
export const LiquidRipple = {
  id: 'LIQUID_RIPPLE', name: 'CRT (液态扭曲)',
  keyframes: webcoreKeyframes,
  calcBaseSize: (len: number) => Math.min(25, 100 / len),
  getCharEnterStyle: (ctx: any) => ({
    animation: `liquidDistort 0.8s ease-out both`,
    animationDelay: `${ctx.wordIdx * 0.1 + ctx.charIdx * 0.05}s`,
    color: '#FF3366', // 强制高亮粉色
  })
};

// ==========================================
// 3. RETRO_TV_3D (纯 CSS 手搓 3D 立体电视机！- 对应 0:08)
// 这是整个项目的技术巅峰：完全不使用模型文件，纯 DOM 生成写实 3D
// ==========================================
export const RetroTV3D = {
  id: 'RETRO_TV_3D', name: 'CRT (3D 坠落电视)',
  keyframes: webcoreKeyframes,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const text = wordObj.characters.map((c: any) => c.char).join('');
    
    // 电视机的物理尺寸参数 (基于 VW 保证响应式)
    const tvW = '40vw'; const tvH = '30vw'; const tvD = '30vw';
    const translateZFront = '15vw'; const translateZSide = '20vw'; 

    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '1000px', ...isExiting ? wordObj.characters[0].exitStyle : {} }}>
        
        {/* 电视机 3D 容器主体，执行下落和微小旋转的动画 */}
        <div className="relative transform-style-3d"
             style={{ 
               width: tvW, height: tvH, transformStyle: 'preserve-3d',
               animation: 'drop3DTV 1.5s cubic-bezier(0.25, 1, 0.5, 1) both' 
             }}>
          
          {/* 面板 1：背面 (Back) */}
          <div className="absolute inset-0 bg-[#556B65] border-2 border-[#33423E]" style={{ transform: `rotateY(180deg) translateZ(${translateZFront})` }} />
          {/* 面板 2：顶面 (Top) */}
          <div className="absolute bg-[#6B857E] border-2 border-[#4A5E59]" style={{ width: tvW, height: tvD, top: 0, transformOrigin: 'top', transform: 'rotateX(90deg)' }} />
          {/* 面板 3：底面 (Bottom) */}
          <div className="absolute bg-[#3A4A46]" style={{ width: tvW, height: tvD, bottom: 0, transformOrigin: 'bottom', transform: 'rotateX(-90deg)' }} />
          {/* 面板 4：左侧面 (Left) */}
          <div className="absolute bg-[#4A5E59] border-2 border-[#33423E]" style={{ width: tvD, height: tvH, left: 0, transformOrigin: 'left', transform: `rotateY(-90deg)` }} />
          {/* 面板 5：右侧面 (Right) */}
          <div className="absolute bg-[#4A5E59] border-2 border-[#33423E]" style={{ width: tvD, height: tvH, right: 0, transformOrigin: 'right', transform: `rotateY(90deg)` }} />
          
          {/* ★ 面板 6：正面 (Front 面板，包含屏幕和按钮) */}
          <div className="absolute inset-0 bg-[#749089] flex p-[2vw] rounded-lg shadow-2xl border-4 border-[#8CAEA6]" style={{ transform: `translateZ(${translateZFront})` }}>
            
            {/* 内嵌的电视屏幕 (发光，播放歌词) */}
            <div className="w-[70%] h-full bg-[#E0F7FA] rounded-[30%] overflow-hidden relative flex items-center justify-center border-[8px] border-[#333] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
                 style={{ animation: 'screenFlicker 0.1s infinite alternate' }}>
               {/* 屏幕扫描线 */}
               <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 50%)', backgroundSize: '100% 4px' }} />
               {/* 真正显示的歌词文本 */}
               <div className="font-black text-center whitespace-nowrap z-10 text-[#00E5FF] drop-shadow-[0_0_10px_#00E5FF]" 
                    style={{ fontSize: 'min(6vw, 10vh)' }}>
                 {text}
               </div>
            </div>

            {/* 电视右侧的复古旋钮和扬声器孔 */}
            <div className="w-[30%] h-full flex flex-col items-center justify-around py-[2vw]">
              <div className="w-[4vw] h-[4vw] bg-[#333] rounded-full border-[2px] border-[#111] shadow-[2px_2px_5px_rgba(0,0,0,0.5)]" />
              <div className="w-[4vw] h-[4vw] bg-[#333] rounded-full border-[2px] border-[#111] shadow-[2px_2px_5px_rgba(0,0,0,0.5)]" />
              <div className="flex flex-col gap-1">
                 {Array.from({length: 5}).map((_, i) => <div key={i} className="w-[5vw] h-[4px] bg-[#333] rounded-full opacity-60" />)}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

// 基础动效注入
const y2kKeyframes = `
  @keyframes spinCircular { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  @keyframes tunnelExpand { 0% { transform: scale(0.1) rotate(0deg); opacity: 0; } 100% { transform: scale(1.5) rotate(90deg); opacity: 1; } }
  @keyframes pixelPop { 0% { transform: scale(0) rotate(-45deg); } 60% { transform: scale(1.2) rotate(10deg); } 100% { transform: scale(1) rotate(0deg); } }
  @keyframes heartBeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
  @keyframes floatUI { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
`;

// ==========================================
// 1. CIRCULAR_SPIN (环形旋转排版 - 对应 0:00, 0:11)
// 引入数学三角计算，将任意数量的文字完美排成一个圆圈！
// ==========================================
export const CircularSpinText = {
  id: 'CIRCULAR_SPIN', name: 'Y2K (环形旋转齿轮)',
  keyframes: y2kKeyframes,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const chars = wordObj.characters;
    const radius = 22; // 圆环半径 (vw)
    const angleStep = 360 / chars.length; // 根据字数自动计算每个字的间隔角度

    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        <div className="relative flex items-center justify-center w-[50vw] h-[50vw]"
             style={{ animation: 'spinCircular 10s linear infinite' }}>
          
          {/* 中心的微小爱心点缀 */}
          <div className="absolute text-3xl z-10" style={{ color: palette.fg1, animation: 'heartBeat 0.5s ease-in-out infinite' }}>♥</div>

          {chars.map((charData: any, i: number) => {
            const angle = i * angleStep;
            return (
              <div key={i} className="absolute font-black mix-blend-difference"
                   style={{
                     fontSize: 'min(12vw, 15vh)', color: palette.fg1,
                     // 核心数学：旋转自身，再沿着 Y 轴推出去，就能形成完美的圆圈排列！
                     transform: `rotate(${angle}deg) translateY(-${radius}vw)`,
                     transformOrigin: 'center center'
                   }}>
                {charData.char}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

// ==========================================
// 2. TETRIS_STACK_LADDERS (错落积木堆叠 + 两侧测量梯 - 对应 0:04)
// ==========================================
export const TetrisStackLadders = {
  id: 'TETRIS_STACK', name: 'Y2K (积木堆叠与梯子)',
  keyframes: y2kKeyframes,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const chars = wordObj.characters.map((c: any) => c.char);
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        
        {/* ★ 左侧梯子 / 胶卷底片边缘 (100% 还原视频两侧结构，纯 CSS 绘制！) */}
        <div className="absolute left-[5vw] top-0 h-full w-[4vw] border-x-[6px] mix-blend-difference opacity-80"
             style={{ borderColor: palette.fg1, backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 40px, ${palette.fg1} 40px, ${palette.fg1} 50px)` }} />
        {/* ★ 右侧梯子 */}
        <div className="absolute right-[5vw] top-0 h-full w-[4vw] border-x-[6px] mix-blend-difference opacity-80"
             style={{ borderColor: palette.fg1, backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 40px, ${palette.fg1} 40px, ${palette.fg1} 50px)` }} />

        {/* 悬浮的 Windows 弹窗 Icon (手指与悲伤脸) */}
        <div className="absolute left-[15vw] top-[30vh] w-16 h-16 border-4 rounded-xl flex items-center justify-center text-3xl bg-white mix-blend-difference" style={{ borderColor: palette.fg1, color: palette.bg, animation: 'floatUI 3s ease-in-out infinite' }}>☹</div>
        <div className="absolute left-[12vw] bottom-[30vh] text-6xl mix-blend-difference" style={{ color: palette.fg1, animation: 'floatUI 2.5s ease-in-out infinite reverse' }}>☜</div>

        {/* 中间积木式错落排版 */}
        <div className="relative w-[50vw] h-[60vh] flex flex-wrap content-center justify-center gap-2">
          {chars.map((char: string, i: number) => {
             // 让字号极大且不规则，用 flex-wrap 自动挤压出俄罗斯方块的堆叠感
             const size = (i % 2 === 0) ? 'min(20vw, 25vh)' : 'min(12vw, 15vh)';
             const rotate = (i % 3 === 0) ? '-10deg' : (i % 2 === 0 ? '5deg' : '0deg');
             const align = (i % 2 === 0) ? 'self-end' : 'self-start';
             return (
               <div key={i} className={`font-black mix-blend-difference ${align}`}
                    style={{ fontSize: size, color: palette.fg1, transform: `rotate(${rotate})`, animation: `pixelPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i * 0.05}s both` }}>
                 {char}
               </div>
             );
          })}
        </div>
      </div>
    );
  }
};

// ==========================================
// 3. PIXEL_CURSOR_POP (巨大像素鼠标指针与十字星 - 对应 0:03)
// ==========================================
export const PixelCursorPop = {
  id: 'PIXEL_CURSOR', name: 'Y2K (巨大像素指针)',
  keyframes: y2kKeyframes, maxLines: 1, hideSubtext: true, getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        
        {/* 背景里的像素十字架 (✖️ 和 ➕) */}
        <div className="absolute top-[10%] left-[20%] text-5xl font-mono mix-blend-difference" style={{ color: palette.fg1 }}>+</div>
        <div className="absolute top-[20%] right-[30%] text-4xl font-mono mix-blend-difference" style={{ color: palette.fg1 }}>×</div>
        <div className="absolute bottom-[20%] left-[30%] text-6xl font-mono mix-blend-difference" style={{ color: palette.fg1 }}>×</div>

        {/* 纯 SVG 绘制的巨大像素化鼠标箭头 (Pixel Cursor) */}
        <svg viewBox="0 0 100 100" className="absolute w-[40vw] h-[40vw] z-0 drop-shadow-[15px_15px_0_rgba(0,0,0,0.5)]"
             style={{ fill: palette.bg, stroke: palette.fg1, strokeWidth: 2, animation: 'pixelPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both' }}>
          {/* 极其精确的像素化箭头多边形路径 */}
          <polygon points="10,10 10,90 35,65 55,95 70,85 50,55 85,55" strokeLinejoin="miter" />
        </svg>

        {/* 文字围绕鼠标散开 */}
        <div className="absolute z-10 flex gap-4 mix-blend-difference">
          {wordObj.characters.map((c: any, i: number) => (
             <div key={i} className="font-black" style={{ fontSize: 'min(15vw, 20vh)', color: palette.fg1, transform: `translateY(${i % 2 === 0 ? -10 : 10}vh)` }}>
               {c.char}
             </div>
          ))}
        </div>
      </div>
    );
  }
};

// ==========================================
// 4. BAT_HEART_BURST (蝙蝠翅膀爱心诞生 - 对应 0:06)
// ==========================================
export const BatHeartBurst = {
  id: 'BAT_HEART', name: 'Y2K (蝙蝠爱心破裂)',
  keyframes: y2kKeyframes, maxLines: 1, hideSubtext: true, getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        
        {/* 背后极具张力的黑色裂缝破口 (SVG ClipPath) */}
        <div className="absolute w-[80vw] h-[80vh] bg-black z-0" 
             style={{ clipPath: 'polygon(50% 0%, 55% 45%, 90% 10%, 60% 50%, 100% 70%, 55% 60%, 60% 100%, 45% 65%, 10% 90%, 40% 50%, 0% 20%, 45% 40%)', animation: 'pixelPop 0.3s ease-out both' }} />

        {/* 纯 SVG 绘制的蝙蝠恶魔爱心 (Sweet Goth Bat Heart) */}
        <svg viewBox="0 0 200 100" className="absolute w-[60vw] z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
             style={{ fill: palette.fg1, animation: 'heartBeat 0.8s ease-in-out infinite' }}>
          {/* 左侧蝙蝠翅膀 */}
          <path d="M 80 50 Q 50 10 20 20 Q 30 40 10 50 Q 30 60 20 80 Q 50 60 80 50 Z" />
          {/* 右侧蝙蝠翅膀 */}
          <path d="M 120 50 Q 150 10 180 20 Q 170 40 190 50 Q 170 60 180 80 Q 150 60 120 50 Z" />
          {/* 中央爱心 */}
          <path d="M 100 80 Q 70 50 80 30 Q 90 10 100 30 Q 110 10 120 30 Q 130 50 100 80 Z" />
        </svg>

        {/* 文字重叠在爱心上方 */}
        <div className="absolute z-20 font-black tracking-widest mix-blend-difference" style={{ fontSize: 'min(10vw, 15vh)', color: palette.bg }}>
           {wordObj.characters.map((c:any)=>c.char).join('')}
        </div>
      </div>
    );
  }
};

const kawaiiKeyframes = `
  @keyframes popScale { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
  @keyframes markerSwipe { 0% { width: 0%; opacity: 0; } 100% { width: 110%; opacity: 1; } }
  @keyframes starTwinkle { 0%, 100% { transform: scale(0.8) rotate(0deg); opacity: 0.5; } 50% { transform: scale(1.2) rotate(45deg); opacity: 1; } }
  @keyframes pulseOval { 0% { transform: scale(1); } 100% { transform: scale(1.05); } }
  @keyframes waveBounce { 0% { transform: scaleY(0.3); } 100% { transform: scaleY(1); } }
`;


// ==========================================
// 1. KAWAII_STAIRCASE (阶梯排版 - 对应 0:06)
// ==========================================
export const KawaiiStaircase = {
  id: 'KAWAII_STAIRCASE', name: 'KAWAII (阶梯下落)',
  keyframes: kawaiiKeyframes,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const chars = wordObj.characters;
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        {chars.map((charData: any, i: number) => {
          // 精确计算阶梯的 X 和 Y 偏移量
          const offsetX = (i - chars.length / 2) * 8; 
          const offsetY = (i - chars.length / 2) * 12;
          return (
            <div key={i} className="absolute font-black mix-blend-difference"
                 style={{
                   fontSize: 'min(15vw, 20vh)', color: palette.fg1,
                   transform: `translate(${offsetX}vw, ${offsetY}vh)`,
                   animation: `popScale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i * 0.08}s both`
                 }}>
              {charData.char}
            </div>
          );
        })}
      </div>
    );
  }
};

// ==========================================
// 2. KAWAII_MARKER (马克笔高亮 - 对应 0:08)
// ==========================================
export const KawaiiMarker = {
  id: 'KAWAII_MARKER', name: 'KAWAII (马克笔高亮)',
  keyframes: kawaiiKeyframes,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const text = wordObj.characters.map((c: any) => c.char).join('');
    return (
      <div className="relative flex items-center justify-center" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        <div className="relative inline-block font-black uppercase whitespace-nowrap" style={{ fontSize: wordObj.size }}>
          {/* 马克笔底色块，从左向右划出 */}
          <div className="absolute bottom-[10%] left-[-5%] h-[40%] z-0"
               style={{ backgroundColor: palette.bg, animation: 'markerSwipe 0.4s cubic-bezier(0.8, 0, 0.2, 1) 0.2s both' }} />
          {/* 前景文字 */}
          <span className="relative z-10 mix-blend-difference" style={{ color: palette.fg1, animation: 'popScale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both' }}>
            {text}
          </span>
        </div>
      </div>
    );
  }
};

// ==========================================
// 3. KAWAII_VERTICAL_SPLIT (超大竖排切割 - 对应 0:02)
// ==========================================
export const KawaiiVerticalSplit = {
  id: 'KAWAII_VERTICAL', name: 'KAWAII (竖排切割)',
  keyframes: kawaiiKeyframes,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const text = wordObj.characters.map((c: any) => c.char).join('');
    // 提取第一个字作为超级巨大的竖排背景
    const giantChar = text.charAt(0) || '校';
    return (
      <div className="absolute inset-0 flex items-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        {/* 左半侧：正常横排小字 */}
        <div className="w-[45vw] flex items-center justify-end pr-[4vw] text-right">
          <div className="font-black mix-blend-difference" style={{ fontSize: 'min(8vw, 10vh)', color: palette.fg1, animation: 'popScale 0.4s both' }}>
            {text}
          </div>
        </div>
        {/* 右半侧：巨大竖排英/日文 */}
        <div className="w-[55vw] h-full flex items-center justify-start overflow-hidden">
          <div className="font-black mix-blend-difference" 
               style={{ 
                 writingMode: 'vertical-rl', textOrientation: 'upright', 
                 fontSize: 'min(45vw, 80vh)', lineHeight: 0.8, color: palette.fg1, 
                 animation: 'popScale 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0.1s both' 
               }}>
            {giantChar}
          </div>
        </div>
      </div>
    );
  }
};

// ==========================================
// 4. KAWAII_SCATTER_STAR (带闪耀星芒的散落排版 - 对应 0:00)
// ==========================================
export const KawaiiScatterStar = {
  id: 'KAWAII_SCATTER', name: 'KAWAII (星芒散落)',
  keyframes: kawaiiKeyframes,
  maxLines: 1, hideSubtext: true,
  onGenerateWordData: (wIdx: number, chars: string[]) => {
    return chars.map(() => ({ x: randomRange(-30, 30), y: randomRange(-30, 30), rot: randomRange(-15, 15) }));
  },
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        {/* 纯 SVG 绘制的四角闪光星星 (Kawaii Star) */}
        <svg viewBox="0 0 100 100" className="absolute w-[20vw] h-[20vw] z-0 mix-blend-difference"
             style={{ fill: palette.bg, top: '20%', right: '20%', animation: 'starTwinkle 1s ease-in-out infinite alternate' }}>
          <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
        </svg>

        {wordObj.characters.map((charData: any, idx: number) => {
          const pos = wordObj.def.onGenerateWordData ? wordObj.def.onGenerateWordData(0, wordObj.characters)[idx] : { x:0, y:0, rot:0 };
          return (
            <div key={idx} className="absolute font-black mix-blend-difference"
                 style={{
                   fontSize: 'min(18vw, 25vh)', color: palette.fg1,
                   transform: `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.rot}deg)`,
                   animation: `popScale 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${idx * 0.05}s both`
                 }}>
              {charData.char}
            </div>
          );
        })}
      </div>
    );
  }
};


// ★ 全局注入的神级 SVG 滤镜：用于实现不用 Canvas 的文字扭曲边缘！
export const SVGBaseFilters = () => (
  <svg style={{ width: 0, height: 0, position: 'absolute' }}>
    <defs>
      {/* 边缘撕裂/波纹滤镜 */}
      <filter id="pop-distort">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

// ==========================================
// 波普特效 1: POP_BOUNCE_DISTORT (果冻弹跳与高低不齐排版)
// ==========================================
const PopBounceDistort = {
  id: 'POP_BOUNCE', name: 'POP (果冻扭曲弹跳)',
  keyframes: `
    @keyframes jellyBounce {
      0% { transform: scale(0) rotate(-20deg); opacity: 0; }
      40% { transform: scale(1.3) rotate(10deg); opacity: 1; }
      60% { transform: scale(0.8) rotate(-5deg); opacity: 1; }
      80% { transform: scale(1.1) rotate(2deg); }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
  `,
  calcBaseSize: (len: number) => Math.min(22, 100 / len),
  onGenerateWordData: (wIdx: number, chars: string[]) => {
    // 为每个字生成随机的宽窄比例，模拟手绘搞怪字体
    return chars.map(() => ({
      scaleX: Math.random() * 0.6 + 0.8, // 0.8 ~ 1.4
      scaleY: Math.random() * 0.6 + 0.8,
      offsetY: Math.random() * 20 - 10,  // 上下错位
    }));
  },
  getCharEnterStyle: (ctx: any, wordData: any) => {
    const data = wordData[ctx.charIdx];
    return {
      animation: `jellyBounce 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both`,
      animationDelay: `${ctx.wordIdx * 0.1 + ctx.charIdx * 0.05}s`,
      // 强行改变单字的宽高比，并应用 SVG 扭曲滤镜！
      transform: `scale(${data.scaleX}, ${data.scaleY}) translateY(${data.offsetY}px)`,
      filter: 'url(#pop-distort)' 
    };
  }
};

// ==========================================
// 波普特效 2: MIXED_COLLAGE (拼贴画：公鸡头、涂鸦线、多边形爆炸) - 对应 0:03
// ==========================================
const MixedCollage = {
  id: 'MIXED_COLLAGE', name: 'COLLAGE (相片综合拼贴)',
  keyframes: `
    @keyframes bangPop { 0% { transform: scale(0); } 70% { transform: scale(1.2); } 100% { transform: scale(1); } }
    @keyframes scribbleDraw { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } }
  `,
  maxLines: 1, hideSubtext: true,
  getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const chars = wordObj.characters.map((c: any) => c.char);
    // 预留的抠图占位符 (我用了一张网上的透明PNG公鸡/雕像代替，你可以随时换成自己的链接)
    const placeholderImg = "https://cdn.pixabay.com/photo/2017/02/17/04/15/chicken-2073111_1280.png";

    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        
        {/* 1. 漫画风爆炸边缘 (Clip-Path) */}
        <div className="absolute w-[60vw] h-[60vh] bg-yellow-400 z-0"
             style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'bangPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both' }} />

        {/* 2. 预留给你的图片接口 (Img 标签叠加) */}
        <div className="absolute z-10 w-[40vw] h-[40vh] flex items-center justify-center" style={{ animation: 'bangPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s both' }}>
          <img src={placeholderImg} alt="collage" className="w-full h-full object-contain filter grayscale contrast-150 drop-shadow-2xl mix-blend-multiply bg-white/80 rounded-full" />
          {/* 眼睛上的黑色胶带✖️ */}
          <div className="absolute top-[30%] left-[45%] text-6xl text-black rotate-12 font-black">✖️</div>
        </div>

        {/* 3. 凌乱的手绘蓝色涂鸦线 (SVG动态绘制) */}
        <svg className="absolute inset-0 w-full h-full z-20 overflow-visible">
          <path d="M 100 500 Q 300 200 500 600 T 900 100" fill="transparent" stroke={palette.accent} strokeWidth="15" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'scribbleDraw 0.6s ease-out 0.2s forwards' }} />
        </svg>

        {/* 4. 周围环绕的文字 (打散排版) */}
        {chars.map((char: string, i: number) => {
          const angle = (i / chars.length) * Math.PI * 2;
          const r = 30; // 半径
          return (
            <div key={i} className="absolute font-black text-white text-7xl z-30 drop-shadow-[4px_4px_0_#000]"
                 style={{
                   left: `calc(50% + ${Math.cos(angle) * r}vw)`, top: `calc(50% + ${Math.sin(angle) * r}vh)`,
                   animation: `bangPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i * 0.05 + 0.2}s both`
                 }}>
              {char}
            </div>
          );
        })}
      </div>
    );
  }
};

// ==========================================
// 波普特效 3: PILL_CONTAINER (胶囊药丸排版与英文注音) - 对应 0:04
// ==========================================
const PillContainer = {
  id: 'PILL_CONTAINER', name: 'PILL (胶囊药丸包装)',
  keyframes: `@keyframes slideInRight { 0% { transform: translateX(100vw) skewX(-20deg); opacity: 0; } 100% { transform: translateX(0) skewX(0); opacity: 1; } }`,
  maxLines: 1, hideSubtext: true, getCharEnterStyle: () => ({}),
  renderCustom: (wordObj: any, palette: any, isExiting: boolean) => {
    const text = wordObj.characters.map((c: any) => c.char).join('');
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
        
        {/* 巨大的英文拼音背景 (R O M A J I) */}
        <div className="absolute text-[15vw] font-black opacity-20 tracking-widest whitespace-nowrap" style={{ color: palette.fg1, top: '20vh' }}>R O M A J I</div>
        
        {/* 胶囊容器本体 */}
        <div className="relative px-[5vw] py-[2vh] flex items-center justify-center shadow-[15px_15px_0_rgba(0,0,0,1)] border-8"
             style={{ 
               backgroundColor: palette.fg1, borderColor: '#000', borderRadius: '999px', // 999px 实现完美的药丸形状
               animation: 'slideInRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both' 
             }}>
          <div className="font-black whitespace-nowrap" style={{ fontSize: 'min(12vw, 15vh)', color: palette.bg }}>
            {text}
          </div>
          {/* 胶囊右侧的高光反光弧线 */}
          <div className="absolute right-[2vw] top-[20%] w-[1vw] h-[60%] bg-white rounded-full opacity-50" />
        </div>
      </div>
    );
  }
};

export const EFFECT_REGISTRY: EffectDef[] =[
  // 1. KINETIC_SMASH (已在上一版，暴力砸入)
  {
    id: 'KINETIC_SMASH', name: 'SMASH (暴力砸入)',
    keyframes: `@keyframes kineticSmash { 0% { transform: scale(5) translateZ(1000px); opacity: 0; filter: blur(30px); } 30% { transform: scale(0.8) translateZ(-100px); opacity: 1; filter: blur(0px); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }`,
    calcBaseSize: (len) => Math.min(25, 120 / len),
    getCharEnterStyle: (ctx) => ({ animation: `kineticSmash 0.6s cubic-bezier(0.19, 1, 0.22, 1) both`, animationDelay: `${ctx.wordIdx * 0.15 + ctx.charIdx * 0.03}s` })
  },

  // 2. RGB_SPLIT_GLITCH (已在上一版，三层色差故障)
  {
    id: 'RGB_SPLIT_GLITCH', name: 'RGB (三层色差)',
    keyframes: `
      @keyframes glitchClip1 { 0% { clip-path: inset(10% 0 80% 0); transform: translate(-4px, 2px); } 20% { clip-path: inset(80% 0 5% 0); transform: translate(4px, -2px); } 40% { clip-path: inset(30% 0 20% 0); transform: translate(-4px, 4px); } 60% { clip-path: inset(90% 0 2% 0); transform: translate(4px, -4px); } 80% { clip-path: inset(5% 0 70% 0); transform: translate(-2px, 2px); } 100% { clip-path: inset(50% 0 30% 0); transform: translate(0, 0); } }
      @keyframes glitchClip2 { 0% { clip-path: inset(20% 0 60% 0); transform: translate(4px, -2px); } 20% { clip-path: inset(60% 0 20% 0); transform: translate(-4px, 2px); } 40% { clip-path: inset(10% 0 50% 0); transform: translate(4px, -4px); } 60% { clip-path: inset(80% 0 10% 0); transform: translate(-4px, 4px); } 80% { clip-path: inset(30% 0 40% 0); transform: translate(2px, -2px); } 100% { clip-path: inset(40% 0 40% 0); transform: translate(0, 0); } }
      @keyframes mainFlash { 0%, 10% { opacity: 0; transform: scale(1.1) skewX(20deg); } 11%, 100% { opacity: 1; transform: scale(1) skewX(0deg); } }
    `,
    maxLines: 1, hideSubtext: true, calcBaseSize: (len) => Math.min(22, 90 / len),
    getCharEnterStyle: () => ({}),
    renderCustom: (wordObj, palette, isExiting) => {
      const text = wordObj.characters.map((c: any) => c.char).join(''); const size = wordObj.size;
      return (
        <div className="relative flex items-center justify-center font-black uppercase z-20" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
          <div className="absolute text-cyan-400 mix-blend-screen opacity-80" style={{ fontSize: size, animation: 'glitchClip1 0.3s infinite steps(2)' }}>{text}</div>
          <div className="absolute text-red-500 mix-blend-screen opacity-80" style={{ fontSize: size, animation: 'glitchClip2 0.25s infinite steps(2) reverse' }}>{text}</div>
          <div className="relative mix-blend-difference" style={{ fontSize: size, color: palette.fg1, animation: 'mainFlash 0.4s cubic-bezier(0.19, 1, 0.22, 1) both' }}>{text}</div>
        </div>
      );
    }
  },

  // 3. MACRO_TYPOGRAPHY (已在上一版，越界排版)
  {
    id: 'MACRO_TYPOGRAPHY', name: 'MACRO (越界裁切)',
    keyframes: `@keyframes macroReveal { 0% { transform: translateY(100vh) rotate(5deg) scale(1.5); opacity: 0; } 100% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; } }`,
    maxLines: 1, hideSubtext: true, getCharEnterStyle: () => ({}),
    renderCustom: (wordObj, palette, isExiting) => {
      const text = wordObj.characters.map((c: any) => c.char).join('');
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
          <div className="relative font-black whitespace-nowrap z-10 mix-blend-difference" style={{ fontSize: 'min(150vw, 80vh)', color: palette.fg1, animation: 'macroReveal 0.6s cubic-bezier(0.19, 1, 0.22, 1) both' }}>{text}</div>
        </div>
      );
    }
  },

  // 4. VERTICAL_FLASH (已在上一版，竖排)
  {
    id: 'VERTICAL_FLASH', name: 'VERTICAL (黑白竖排)',
    keyframes: `@keyframes verticalSlide { 0% { transform: translateY(-50vh); opacity: 0; letter-spacing: 2em; } 100% { transform: translateY(0); opacity: 1; letter-spacing: 0.1em; } }`,
    maxLines: 1, getCharEnterStyle: () => ({}),
    renderCustom: (wordObj, palette, isExiting) => {
      const chars = wordObj.characters.map((c: any) => c.char);
      return (
        <div className="font-black text-center mix-blend-difference z-20" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', fontSize: 'min(25vw, 25vh)', color: palette.fg1, animation: 'verticalSlide 0.5s cubic-bezier(0.19, 1, 0.22, 1) both', ...(isExiting ? wordObj.characters[0].exitStyle : {}) }}>
          {chars.join('')}
        </div>
      );
    }
  },

  // ★ 新增 5. SPLIT_INVERT (完美黑白对半反转 - 对应 0:00~0:02)
  // 如果配合 'SPLIT VOID' 背景，它会呈现完美的视觉欺骗，左边字是黑的，右边字是白的！
  {
    id: 'SPLIT_INVERT', name: 'SPLIT (对半反色切割)',
    keyframes: `
      @keyframes splitLeftIn { 0% { transform: translateX(-50vw); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
      @keyframes splitRightIn { 0% { transform: translateX(50vw); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
    `,
    maxLines: 1, hideSubtext: true, calcBaseSize: (len) => Math.min(22, 90 / len),
    getCharEnterStyle: () => ({}),
    renderCustom: (wordObj, palette, isExiting) => {
      const text = wordObj.characters.map((c: any) => c.char).join('');
      return (
        <div className="relative w-[100vw] h-[50vh] flex items-center justify-center font-black" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
          {/* 左半边文字 (只显示左半边) */}
          <div className="absolute whitespace-nowrap" 
               style={{ clipPath: 'inset(0 50% 0 0)', fontSize: wordObj.size, color: palette.bg, animation: 'splitLeftIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) both' }}>
            {text}
          </div>
          {/* 右半边文字 (只显示右半边) */}
          <div className="absolute whitespace-nowrap" 
               style={{ clipPath: 'inset(0 0 0 50%)', fontSize: wordObj.size, color: palette.fg1, animation: 'splitRightIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) both' }}>
            {text}
          </div>
        </div>
      );
    }
  },

  // ★ 新增 6. SLICE_GLITCH_PRO (横向利刃错位 - 对应 0:16)
  {
    id: 'SLICE_GLITCH_PRO', name: 'SLICE (横向利刃错位)',
    keyframes: `
      @keyframes sliceSlideIn { 0% { transform: scale(2); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      @keyframes shiftTop { 0%, 100% { transform: translateX(0); } 30%, 70% { transform: translateX(-8vw); } }
      @keyframes shiftMid { 0%, 100% { transform: translateX(0); } 30%, 70% { transform: translateX(10vw); } }
      @keyframes shiftBot { 0%, 100% { transform: translateX(0); } 30%, 70% { transform: translateX(-6vw); } }
    `,
    maxLines: 1, hideSubtext: true, calcBaseSize: (len) => Math.min(20, 80 / len),
    getCharEnterStyle: () => ({}),
    renderCustom: (wordObj, palette, isExiting) => {
      const text = wordObj.characters.map((c: any) => c.char).join('');
      return (
        <div className="relative flex items-center justify-center font-black uppercase" style={{ ...(isExiting ? wordObj.characters[0].exitStyle : {}), animation: 'sliceSlideIn 0.3s ease-out both' }}>
          {/* 顶部三分之一被向左切 */}
          <div className="absolute whitespace-nowrap text-white mix-blend-difference drop-shadow-[2px_2px_0_red]" 
               style={{ clipPath: 'inset(0 0 66% 0)', fontSize: wordObj.size, animation: 'shiftTop 0.2s steps(2) infinite alternate' }}>{text}</div>
          {/* 中间三分之一被向右极速切 */}
          <div className="absolute whitespace-nowrap text-white mix-blend-difference drop-shadow-[-2px_-2px_0_cyan]" 
               style={{ clipPath: 'inset(34% 0 34% 0)', fontSize: wordObj.size, animation: 'shiftMid 0.15s steps(2) infinite alternate-reverse' }}>{text}</div>
          {/* 底部三分之一被向左切 */}
          <div className="relative whitespace-nowrap text-white mix-blend-difference" 
               style={{ clipPath: 'inset(66% 0 0 0)', fontSize: wordObj.size, animation: 'shiftBot 0.25s steps(2) infinite alternate' }}>{text}</div>
        </div>
      );
    }
  },

  // ★ 新增 7. SCATTER_STAMP (凌乱印章砸落 - 对应 0:07)
  // 单字不再排成一排，而是在屏幕上随机位置、随机角度砸下来
  {
    id: 'SCATTER_STAMP', name: 'SCATTER (凌乱散落)',
    keyframes: `
      @keyframes stampDrop { 
        0% { transform: var(--start-transform) scale(5); opacity: 0; filter: blur(10px); } 
        100% { transform: var(--end-transform) scale(1); opacity: 1; filter: blur(0px); } 
      }
    `,
    maxLines: 1, hideSubtext: true, calcBaseSize: (len) => Math.min(15, 60 / len),
    // 为每个字生成随机坐标
    onGenerateWordData: (wIdx, chars) => {
      return chars.map(() => ({
        x: randomRange(-35, 35), y: randomRange(-30, 30), rot: randomRange(-30, 30)
      }));
    },
    getCharEnterStyle: () => ({}), // 由 renderCustom 统一接管渲染位置
    renderCustom: (wordObj, palette, isExiting) => {
      // 在自定义渲染中，遍历每个单字，应用从 onGenerateWordData 存下的随机坐标
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
          {wordObj.characters.map((charData: any, idx: number) => {
            const pos = wordObj.def.onGenerateWordData ? wordObj.def.onGenerateWordData(0, wordObj.characters)[idx] : { x:0, y:0, rot:0 };
            const startTrans = `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.rot + 45}deg)`;
            const endTrans = `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.rot}deg)`;
            return (
              <div key={idx} className="absolute font-black mix-blend-difference drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                   style={{
                     fontSize: wordObj.size, color: palette.fg1,
                     '--start-transform': startTrans, '--end-transform': endTrans,
                     animation: `stampDrop 0.4s cubic-bezier(0.19, 1, 0.22, 1) ${idx * 0.05}s both`
                   } as any}>
                {charData.char}
              </div>
            );
          })}
        </div>
      );
    }
  },

  // ★ 新增 8. SPEECH_BUBBLE (巨型对话气泡 - 对应 0:10)
  {
    id: 'SPEECH_BUBBLE', name: 'BUBBLE (对话框)',
    keyframes: `
      @keyframes bubblePop { 0% { transform: scale(0.5) translateY(20vh); opacity: 0; } 60% { transform: scale(1.1) translateY(-2vh); opacity: 1; } 100% { transform: scale(1) translateY(0); opacity: 1; } }
    `,
    maxLines: 1, hideSubtext: true, getCharEnterStyle: () => ({}),
    renderCustom: (wordObj, palette, isExiting) => {
      const text = wordObj.characters.map((c: any) => c.char).join('');
      const bubbleFontSize = Math.min(15, 50 / text.length);
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={isExiting ? wordObj.characters[0].exitStyle : {}}>
          <div className="relative px-12 py-8 rounded-[40px] border-[8px] flex items-center justify-center mix-blend-difference"
               style={{ backgroundColor: palette.fg1, borderColor: palette.bg, animation: 'bubblePop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both' }}>
            <div className="absolute -bottom-[40px] left-[25%] w-0 h-0 border-l-[20px] border-l-transparent border-t-[40px] border-r-[10px] border-r-transparent"
                 style={{ borderTopColor: palette.fg1 }} />
            <div className="font-black whitespace-nowrap" style={{ fontSize: `${bubbleFontSize}vw`, color: palette.bg }}>
              {text}
            </div>
          </div>
        </div>
      );
    }
  },

  // ★ 波普特效 1: POP_BOUNCE_DISTORT (果冻弹跳与高低不齐排版)
  PopBounceDistort as EffectDef,

  // ★ 波普特效 2: MIXED_COLLAGE (拼贴画：公鸡头、涂鸦线、多边形爆炸)
  MixedCollage as EffectDef,

  // ★ 波普特效 3: PILL_CONTAINER (胶囊药丸排版与英文注音)
  PillContainer as EffectDef,

  KawaiiStaircase,
  KawaiiMarker,
  KawaiiVerticalSplit,
  KawaiiScatterStar,

  CircularSpinText,
  TetrisStackLadders,
  PixelCursorPop,
  BatHeartBurst,
  GenkoDrop,
  LiquidRipple,
  RetroTV3D,

  Isometric3DBlocks,
  FoldedCylinderText,
  PixelStarFlash,
];

export const EFFECTS = EFFECT_REGISTRY.map(e => e.id);

export const EffectStyles = () => (
  <style>{`
    ${EFFECT_REGISTRY.map(e => e.keyframes || '').join('\n')}
    ${kawaiiKeyframes}
    ${y2kKeyframes}
    ${webcoreKeyframes}
    ${cyberPopKeyframes}
  `}</style>
);