// src/pages/Spark/scenes.tsx
import React, { useMemo, useEffect, useState } from 'react';
import { randomChoice, randomRange, DECOR_WORDS } from './utils';
import { EFFECT_REGISTRY, EffectContext } from './effectRegistry';

export interface SceneProps {
  palette: { bg: string; fg1: string; fg2: string; accent: string }; phase: 'ENTER' | 'EXIT'; effect: string; bgIndex: number; textPool: string[][];
}
export interface BGProps { palette: any; text: string; }


const PostProcessLayers = () => (
  <div className="absolute inset-0 pointer-events-none z-[99] mix-blend-overlay overflow-hidden">
    <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    <div className="absolute inset-0 opacity-[0.15]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 6px 100%' }} />
    <div className="absolute inset-0 opacity-90 mix-blend-multiply" style={{ background: 'radial-gradient(circle at center, transparent 30%, #000 120%)' }} />
  </div>
);


export const BgGenkoYoshi = ({ palette }: any) => {
  // 生成一堆随机的红色小马赛克块模拟 Webcore 故障
  const glitches = useMemo(() => Array.from({ length: 15 }).map(() => ({
    x: Math.random() * 100, y: Math.random() * 100, 
    size: Math.random() * 2 + 1, delay: Math.random() * 2
  })),[]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ backgroundColor: '#F8F9FA' }}>
      
      {/* 纯 CSS 绘制的日式原稿纸网格 (Grid System) */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `
               linear-gradient(to right, #000 1px, transparent 1px),
               linear-gradient(to bottom, #000 1px, transparent 1px)
             `,
             backgroundSize: '10vw 10vw', // 每个格子严格占屏幕 10% 宽度
             backgroundPosition: 'center center'
           }} />
      
      {/* 中间的加强分割线 */}
      <div className="absolute top-0 left-1/2 w-[2px] h-full bg-black opacity-30 -translate-x-1/2" />
      
      {/* 随机红色像素马赛克 (Y2K Glitch) */}
      {glitches.map((g, i) => (
        <div key={i} className="absolute bg-[#FF3366] mix-blend-multiply"
             style={{
               left: `${g.x}vw`, top: `${g.y}vh`, 
               width: `${g.size}vw`, height: `${g.size}vw`,
               animation: 'strobeAlert 0.3s steps(2) infinite alternate',
               animationDelay: `${g.delay}s`
             }} />
      ))}

      {/* 左侧和右侧极小的假数字标记 */}
      <div className="absolute left-[2vw] top-[20vh] text-xs font-mono text-gray-500">20</div>
      <div className="absolute left-[2vw] bottom-[20vh] text-xs font-mono text-gray-500">40</div>
    </div>
  );
};

// 背景1: WASTELAND (赤色废土) - 对应视频 0:11 废墟
const BgWasteland = ({ palette }: BGProps) => {
  const bgBuildings = useMemo(() => Array.from({ length: 15 }).map(() => ({ width: randomRange(5, 15) + 'vw', height: randomRange(40, 80) + 'vh', left: randomRange(-10, 110) + 'vw', opacity: randomRange(0.1, 0.3) })),[]);
  const midBuildings = useMemo(() => Array.from({ length: 8 }).map(() => ({ width: randomRange(10, 25) + 'vw', height: randomRange(20, 60) + 'vh', left: randomRange(-20, 100) + 'vw', opacity: randomRange(0.4, 0.7) })),[]);
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black text-white pointer-events-none">
      <div className="absolute inset-0 opacity-80" style={{ background: `radial-gradient(circle at 50% 30%, ${palette.fg1} 0%, transparent 60%)`, animation: 'lightFlicker 4s infinite alternate' }} />
      <div className="absolute inset-0 opacity-50 flex items-end" style={{ animation: 'parallaxSlow 30s linear infinite alternate' }}>
        {bgBuildings.map((b, i) => <div key={i} className="absolute bottom-0 bg-black" style={{ width: b.width, height: b.height, left: b.left, opacity: b.opacity }} />)}
      </div>
      <div className="absolute inset-0 flex items-end" style={{ animation: 'parallaxMid 20s linear infinite alternate' }}>
        {midBuildings.map((b, i) => <div key={i} className="absolute bottom-0 border-t-2 border-l-2" style={{ width: b.width, height: b.height, left: b.left, opacity: b.opacity, backgroundColor: '#050505', borderColor: palette.fg2 }} />)}
      </div>
      <div className="absolute top-[6vh] left-[2vw] w-12 h-12 border-t-4 border-l-4 opacity-80 mix-blend-difference" style={{ borderColor: palette.accent }} />
      <div className="absolute top-[6vh] right-[2vw] w-12 h-12 border-t-4 border-r-4 opacity-80 mix-blend-difference" style={{ borderColor: palette.accent }} />
      <div className="absolute bottom-[6vh] left-[2vw] w-12 h-12 border-b-4 border-l-4 opacity-80 mix-blend-difference" style={{ borderColor: palette.accent }} />
      <div className="absolute bottom-[6vh] right-[2vw] w-12 h-12 border-b-4 border-r-4 opacity-80 mix-blend-difference" style={{ borderColor: palette.accent }} />
    </div>
  );
};

// 背景2: WARNING TAPE (警戒带)
const BgWarningTape = ({ palette, text }: BGProps) => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none flex flex-col justify-between">
    <div className="absolute inset-0 mix-blend-screen opacity-30" style={{ backgroundColor: palette.accent, animation: 'strobeAlert 0.5s steps(2) infinite' }} />
    <div className="w-full h-[8vh] transform -skew-y-2 flex items-center overflow-hidden border-y-4 shadow-2xl z-10" style={{ borderColor: palette.bg, backgroundImage: `repeating-linear-gradient(45deg, ${palette.fg1}, ${palette.fg1} 40px, #000 40px, #000 80px)` }}>
      <div className="whitespace-nowrap font-black text-black text-4xl tracking-widest px-4 mix-blend-difference" style={{ animation: 'marqueeLeft 4s linear infinite' }}>CAUTION / {text} / CAUTION / {text} /</div>
    </div>
    <div className="w-full h-[8vh] transform skew-y-2 flex items-center overflow-hidden border-y-4 shadow-2xl z-10" style={{ borderColor: palette.bg, backgroundImage: `repeating-linear-gradient(-45deg, ${palette.fg1}, ${palette.fg1} 40px, #000 40px, #000 80px)` }}>
      <div className="whitespace-nowrap font-black text-black text-4xl tracking-widest px-4 mix-blend-difference" style={{ animation: 'marqueeRight 5s linear infinite' }}>DANGER / OVERLOAD / DANGER / OVERLOAD / </div>
    </div>
  </div>
);

// 背景3: KINETIC VOID (纯粹排版空间)
const BgKineticVoid = ({ palette, text }: BGProps) => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ backgroundColor: palette.bg }}>
    <div className="absolute top-0 left-1/3 w-[1px] h-full opacity-10 mix-blend-difference" style={{ backgroundColor: palette.fg1 }} />
    <div className="absolute top-0 left-2/3 w-[1px] h-full opacity-10 mix-blend-difference" style={{ backgroundColor: palette.fg1 }} />
    <div className="absolute inset-0 flex flex-col justify-between py-[10vh] opacity-10">
      <div className="whitespace-nowrap font-black opacity-40" style={{ fontSize: '20vh', lineHeight: 0.8, color: 'transparent', WebkitTextStroke: `2px ${palette.fg1}`, animation: 'marqueeLeft 20s linear infinite' }}>{text.repeat(10)}</div>
      <div className="whitespace-nowrap font-black opacity-40 mix-blend-difference" style={{ fontSize: '15vh', lineHeight: 0.8, color: palette.accent, animation: 'marqueeRight 15s linear infinite' }}>{text.repeat(10)}</div>
    </div>
  </div>
);

// ★ 新背景4: SPLIT VOID (黑白对半切) - 完美对应 0:00~0:02
const BgSplitVoid = ({ palette }: BGProps) => (
  <div className="absolute inset-0 z-0 flex overflow-hidden pointer-events-none">
    <div className="w-1/2 h-full" style={{ backgroundColor: palette.fg1 }} />
    <div className="w-1/2 h-full" style={{ backgroundColor: palette.bg }} />
  </div>
);

// ★ 新背景5: ANTENNA SLUMS (带卫星天线的贫民窟) - 完美对应 0:14
const BgAntennaSlums = ({ palette }: BGProps) => {
  // 用代码生成 5 栋密集的水泥公寓楼
  const slums = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
    width: randomRange(15, 25) + 'vw', height: randomRange(50, 90) + 'vh', left: (i * 18) + 'vw', z: randomRange(1, 10)
  })),[]);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#111] pointer-events-none flex items-end">
      {/* 脏乱的黄绿色背景光 */}
      <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 50% 100%, #556B2F 0%, #000 80%)' }} />
      
      {slums.map((s, i) => (
        <div key={i} className="absolute bottom-0 border-t border-l border-r"
             style={{ width: s.width, height: s.height, left: s.left, zIndex: s.z, backgroundColor: '#222', borderColor: '#444' }}>
          {/* CSS 密集窗户网格 */}
          <div className="absolute inset-0 opacity-50" 
               style={{ backgroundImage: `linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)`, backgroundSize: '20% 5vh' }} />
          {/* 顶部的雷达天线 (伪元素画不出来，就用 div 叠) */}
          <div className="absolute -top-[6vh] left-1/2 -translate-x-1/2 w-0 h-[6vh] border-l-2 border-[#555]">
            <div className="absolute top-1/2 -translate-y-1/2 -left-[3vh] w-[6vh] h-[6vh] rounded-full border-2 border-[#555] rotate-45 transform" />
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 w-full h-[5vh] bg-black z-20" />
    </div>
  );
};

// ==========================================
// 波普背景 1: TRANSPARENT_GRID (Photoshop透明网格底) - 对应 0:00
// ==========================================
const BgTransparentGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
       style={{
         backgroundColor: '#fff',
         backgroundImage: `conic-gradient(#ccc 25%, transparent 25%, transparent 50%, #ccc 50%, #ccc 75%, transparent 75%, transparent)`,
         backgroundSize: '20px 20px'
       }} />
);

// ==========================================
// 波普背景 2: POP_BLUEPRINT (高亮蓝图与十字星) - 对应 0:01
// ==========================================
const BgPopBlueprint = ({ palette }: any) => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ backgroundColor: palette.bg }}>
    {/* 细坐标网格 */}
    <div className="absolute inset-0 opacity-20"
         style={{ backgroundImage: `linear-gradient(${palette.fg1} 1px, transparent 1px), linear-gradient(90deg, ${palette.fg1} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
    {/* 随机飘浮的巨大十字形/加号 */}
    {Array.from({length: 5}).map((_, i) => (
      <div key={i} className="absolute font-black opacity-30"
           style={{
             color: palette.fg1, fontSize: `${Math.random() * 20 + 10}vw`,
             left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
             animation: `hudSpin ${Math.random() * 10 + 10}s linear infinite`
           }}>+</div>
    ))}
  </div>
);

// ==========================================
// 波普背景 3: DIAGONAL_SPLIT (对角线双拼撕裂) - 对应 0:02
// ==========================================
const BgDiagonalSplit = ({ palette }: any) => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* 底层黄色 */}
    <div className="absolute inset-0" style={{ backgroundColor: palette.accent }} />
    {/* 顶层深色，用 clip-path 削成斜角 */}
    <div className="absolute inset-0 drop-shadow-2xl"
         style={{ backgroundColor: palette.bg, clipPath: 'polygon(0 0, 70% 0, 30% 100%, 0 100%)' }}>
      {/* 边缘的放射性波普白线装饰 */}
      <div className="absolute w-full h-full border-[10px] transform -translate-x-10 translate-y-10" 
           style={{ borderColor: palette.fg1, clipPath: 'polygon(65% 0, 70% 0, 30% 100%, 25% 100%)' }} />
    </div>
  </div>
);

const BgKawaiiPop = ({ palette }: BGProps) => {
  // 生成 30 根随机高度的音频波形柱
  const waveform = useMemo(() => Array.from({ length: 30 }).map(() => Math.random() * 100),[]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ backgroundColor: palette.bg }}>
      
      {/* 中心的巨型呼吸椭圆 (Geometric Container) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70vw] h-[120vh] rounded-[50%]" 
             style={{ 
               backgroundColor: palette.fg1, 
               animation: 'pulseOval 2s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate' 
             }} />
      </div>

      {/* 左侧的 Swiss Design 杂志级排版网格 */}
      <div className="absolute top-[8vh] left-[4vw] w-[20vw] flex flex-col gap-6 z-10" style={{ color: palette.bg }}>
        
        {/* 1. 标题与说明小字 */}
        <div className="flex flex-col">
          <h3 className="text-3xl md:text-5xl font-black lowercase tracking-tighter">notice</h3>
          <div className="text-[8px] md:text-[10px] leading-tight opacity-90 font-mono mt-2">
            <p>Senpai kizuite notice me</p>
            <p>Moe Shop / 2026</p>
            <p className="mt-2">Type: Kawaii Future Bass</p>
            <p>BPM: 128 / KEY: F# Minor</p>
          </div>
        </div>

        {/* 2. 纯 CSS 伪造的密密麻麻的歌词/免责声明段落 */}
        <div className="text-[6px] md:text-[8px] leading-none opacity-60 flex flex-col gap-1 text-justify hidden md:flex">
          <p>This is a purely typographic sequence generated by code.</p>
          <p>No external image assets are used. Everything is rendered via CSS/SVG.</p>
          <p>All elements are perfectly aligned to the strict Swiss grid system.</p>
          <p>Notice me senpai, please look at my kinetic typography.</p>
        </div>

        {/* 3. 动态音频波形图 (Waveform) */}
        <div className="flex items-end h-8 gap-[2px]">
          {waveform.map((h, i) => (
            <div key={i} className="flex-1 bg-current rounded-t-sm" 
                 style={{ height: `${h}%`, animation: `waveBounce 0.4s ease-in-out ${i * 0.05}s infinite alternate` }} />
          ))}
        </div>

        {/* 4. 二维码与条形码区 */}
        <div className="flex gap-4 h-12 mt-4 items-end">
          {/* 伪二维码 */}
          <div className="w-10 h-10 border-2 border-current p-[2px] flex flex-wrap gap-[1px]">
            <div className="w-[45%] h-[45%] bg-current" />
            <div className="w-[30%] h-[30%] bg-current" />
            <div className="w-[80%] h-[20%] bg-current" />
            <div className="w-[40%] h-[40%] bg-current" />
          </div>
          {/* 伪条形码 */}
          <div className="flex-1 h-10" style={{ backgroundImage: `repeating-linear-gradient(to right, currentColor 0, currentColor 2px, transparent 2px, transparent 4px, currentColor 4px, currentColor 7px, transparent 7px, transparent 9px, currentColor 9px, currentColor 10px)` }} />
        </div>
      </div>

      {/* 底部居中标记 */}
      <div className="absolute bottom-[4vh] left-1/2 -translate-x-1/2 flex items-center gap-4 text-[12px] font-bold" style={{ color: palette.bg }}>
        <div className="w-8 h-[2px] bg-current" />
        <span>Moe Shop</span>
        <div className="w-8 h-[2px] bg-current" />
      </div>

    </div>
  );
};

// ==========================================
// 核心架构升级：基础 3D 渲染容器 (为未来所有 3D 效果打底)
// ==========================================
const Scene3D = ({ children, cameraAngle }: { children: React.ReactNode, cameraAngle: string }) => (
  <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none"
       style={{ perspective: '1200px' }}> {/* 摄像机焦距 */}
    <div className="relative w-full h-full flex items-center justify-center"
         style={{ transformStyle: 'preserve-3d', transform: cameraAngle, transition: 'transform 1s ease-out' }}>
      {children}
    </div>
  </div>
);

// ==========================================
// 背景 7: 3D CHOCOLATE BAR (立体巧克力排版 - 对应 0:08)
// 利用 CSS 3D 引擎和 Bevel (斜角) 阴影技术，不用图片画出写实巧克力块
// ==========================================
const Bg3DChocolate = ({ palette }: BGProps) => {
  // 生成 4x6 的巧克力块网格
  const grid = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 bg-[#FF3385] overflow-hidden">
      <Scene3D cameraAngle="rotateX(40deg) rotateZ(-20deg) scale(1.5) translateZ(-200px)">
        <div className="grid grid-cols-4 gap-4 p-8 bg-[#E62E77] rounded-3xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-[10px] border-[#CC296A]">
          {grid.map((_, i) => (
            <div key={i} className="w-[15vw] h-[15vw] rounded-xl relative overflow-hidden"
                 style={{
                   backgroundColor: '#FF4D94',
                   // 利用极度夸张的内外阴影，伪造 3D 凸起感 (Neumorphism)
                   boxShadow: `
                     inset 8px 8px 15px rgba(255, 255, 255, 0.4),
                     inset -8px -8px 15px rgba(0, 0, 0, 0.2),
                     10px 10px 20px rgba(0, 0, 0, 0.3)
                   `,
                   borderTop: '6px solid #FF80B2', borderLeft: '6px solid #FF80B2',
                   borderBottom: '6px solid #B3245E', borderRight: '6px solid #B3245E'
                 }}>
              {/* 巧克力中心的凹陷刻字伪造 */}
              <div className="absolute inset-4 rounded-lg" style={{ boxShadow: 'inset 5px 5px 10px rgba(0,0,0,0.2), inset -5px -5px 10px rgba(255,255,255,0.3)' }} />
            </div>
          ))}
        </div>
      </Scene3D>
    </div>
  );
};

// ==========================================
// 背景 8: SHATTERED GLASS (放射状碎玻璃 - 对应 0:05)
// ==========================================
const BgShatteredGlass = ({ palette }: BGProps) => (
  <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none">
    {/* 用纯 CSS polygon 裁剪出镜面碎裂的碎片，并赋予不同的动画延迟和位移 */}
    <div className="absolute inset-0 bg-white opacity-20" style={{ clipPath: 'polygon(50% 50%, 0 0, 30% 0)', transform: 'translate(-2vw, -2vh) rotate(-2deg)' }} />
    <div className="absolute inset-0 bg-white opacity-30" style={{ clipPath: 'polygon(50% 50%, 35% 0, 80% 0)', transform: 'translate(1vw, -3vh) rotate(1deg)' }} />
    <div className="absolute inset-0 bg-white opacity-10" style={{ clipPath: 'polygon(50% 50%, 85% 0, 100% 40%)', transform: 'translate(3vw, -1vh) rotate(3deg)' }} />
    <div className="absolute inset-0 bg-white opacity-40" style={{ clipPath: 'polygon(50% 50%, 100% 45%, 100% 100%, 70% 100%)', transform: 'translate(2vw, 2vh) rotate(-1deg)' }} />
    <div className="absolute inset-0 bg-white opacity-20" style={{ clipPath: 'polygon(50% 50%, 65% 100%, 10% 100%)', transform: 'translate(-1vw, 3vh) rotate(2deg)' }} />
    <div className="absolute inset-0 bg-white opacity-50" style={{ clipPath: 'polygon(50% 50%, 5% 100%, 0 60%)', transform: 'translate(-3vw, 1vh) rotate(-3deg)' }} />
  </div>
);

// ==========================================
// 背景 9: CONCENTRIC TUNNEL (同心圆隧道 - 对应 0:10)
// ==========================================
const BgConcentricTunnel = ({ palette }: BGProps) => (
  <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none" style={{ backgroundColor: palette.bg }}>
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="absolute rounded-full border-[10vw] mix-blend-difference"
           style={{
             width: `${(i + 1) * 30}vw`, height: `${(i + 1) * 30}vw`,
             borderColor: palette.fg1,
             animation: 'tunnelExpand 2s cubic-bezier(0.19, 1, 0.22, 1) infinite alternate',
             animationDelay: `${i * 0.2}s`
           }} />
    ))}
  </div>
);

export const BACKGROUND_REGISTRY =[
  { id: 'WASTELAND', name: 'BG: 废墟 (Wasteland)', component: BgWasteland },
  { id: 'WARNING', name: 'BG: 警戒 (Warning Tape)', component: BgWarningTape },
  { id: 'VOID', name: 'BG: 排版 (Kinetic Void)', component: BgKineticVoid },
  { id: 'SPLIT', name: 'BG: 黑白切割 (Split Void)', component: BgSplitVoid },
  { id: 'SLUMS', name: 'BG: 天线贫民窟 (Antenna Slums)', component: BgAntennaSlums },
  { id: 'POP_GRID', name: 'BG: 透明网格 (Pop Grid)', component: BgTransparentGrid },
  { id: 'POP_BLUE', name: 'BG: 蓝图坐标 (Pop Blueprint)', component: BgPopBlueprint },
  { id: 'POP_SPLIT', name: 'BG: 斜角撕裂 (Diagonal Split)', component: BgDiagonalSplit },
  { id: 'KAWAII', name: 'BG: 萌系波普 (Kawaii Pop)', component: BgKawaiiPop },
  { id: 'CHOCOLATE_3D', name: 'BG: 3D 巧克力 (Chocolate 3D)', component: Bg3DChocolate },
  { id: 'SHATTERED', name: 'BG: 碎裂镜面 (Shattered Glass)', component: BgShatteredGlass },
  { id: 'TUNNEL', name: 'BG: 同心圆隧道 (Concentric Tunnel)', component: BgConcentricTunnel },
  { id: 'GENKO', name: 'BG: 原稿纸 (Genko Yoshi)', component: BgGenkoYoshi },
];

export const SceneAEMaster: React.FC<SceneProps> = ({ palette, phase, effect, bgIndex, textPool }) => {
  const isExiting = phase === 'EXIT';
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (phase === 'ENTER') {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 300);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const layoutData = useMemo(() => {
    const def = EFFECT_REGISTRY.find(e => e.id === effect) || EFFECT_REGISTRY[0];
    const availableTexts = def.exactLength ? textPool.filter(t => t.length === def.exactLength) : textPool;
    const safeTexts = availableTexts.length > 0 ? availableTexts : [["絶", "対", "防", "衛"]];
    const lineCount = def.maxLines !== undefined ? def.maxLines : (Math.random() > 0.5 ? 1 : 2);
    const words = Array.from({ length: lineCount }).map(() => randomChoice(safeTexts));
    
    return words.map((rawChars, wordIndex) => {
      const chars = def.processChars ? def.processChars(rawChars) : rawChars;
      const baseSize = def.calcBaseSize ? def.calcBaseSize(chars.length) : Math.min(randomRange(15, 25), 100 / chars.length);
      const wordData = def.onGenerateWordData ? def.onGenerateWordData(wordIndex, chars) : {};
      const characters = chars.map((char, charIdx) => {
        const ctx: EffectContext = { charIdx, charTotal: chars.length, wordIdx: wordIndex, wordTotal: lineCount, baseSize };
        const enterStyle = def.getCharEnterStyle(ctx, wordData);
        const exitStyle: any = { animation: `aeExitWhip 0.4s cubic-bezier(0.8, 0, 0.2, 1) forwards`, animationDelay: `${charIdx * 0.02}s` };
        return { char, enterStyle, exitStyle };
      });
      return { id: wordIndex, characters, def, size: `${baseSize}vw`, fullText: chars.join(''), subtext: randomChoice(DECOR_WORDS) };
    });
  }, [effect, textPool]);

  const combinedText = layoutData.map(d => d.fullText).join(' ');
  const CurrentBackground = BACKGROUND_REGISTRY[bgIndex % BACKGROUND_REGISTRY.length].component;

  return (
    <div className="w-full h-full relative overflow-hidden bg-black text-white">
      <style>{`
        @keyframes globalCameraShake { 0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1.05); } 10% { transform: translate(-20px, -20px) rotate(-2deg) scale(1.1); filter: blur(2px); } 20% { transform: translate(20px, 15px) rotate(2deg) scale(1.1); filter: blur(0px); } 30% { transform: translate(-15px, 20px) rotate(-1deg) scale(1.05); } }
        @keyframes parallaxSlow { 0% { transform: translateX(0); } 100% { transform: translateX(-5vw); } }
        @keyframes parallaxMid { 0% { transform: translateX(0); } 100% { transform: translateX(-15vw); } }
        @keyframes strobeAlert { 0%, 49% { opacity: 0; } 50%, 100% { opacity: 0.3; } }
        @keyframes marqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes aeExitWhip { 0% { filter: blur(0); transform: scale(1) translate(0,0); opacity: 1; } 100% { filter: blur(20px); transform: scale(3) translate(20vw, -10vh); opacity: 0; } }
        @keyframes hudSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes pulseOval { 0% { transform: scale(1); opacity: 0.3; } 100% { transform: scale(1.1); opacity: 0.6; } }
        @keyframes waveBounce { 0% { transform: scaleY(1); } 100% { transform: scaleY(1.2); } }
        @keyframes tunnelExpand { 0% { transform: scale(0.8); opacity: 0.3; } 100% { transform: scale(1.2); opacity: 0.8; } }
      `}</style>

      <CurrentBackground palette={palette} text={combinedText} />

      <div className="w-full h-full absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none" 
           style={{ animation: shake ? 'globalCameraShake 0.4s cubic-bezier(.36,.07,.19,.97) both' : 'none' }}>
        <div className="flex flex-col gap-6 w-full items-center justify-center px-4 relative">
          {layoutData.map((wordObj) => {
            if (wordObj.def.renderCustom) {
              return <React.Fragment key={wordObj.id}>{wordObj.def.renderCustom(wordObj, palette, isExiting)}</React.Fragment>;
            }
            return (
              <div key={wordObj.id} className="relative flex items-center justify-center max-w-[100vw]">
                <div className="flex relative flex-row items-center justify-center flex-wrap md:flex-nowrap gap-x-2">
                  {wordObj.characters.map((charData, idx) => (
                    <div key={idx} className="relative flex flex-col items-center mix-blend-difference" style={isExiting ? charData.exitStyle : {}}>
                      <div style={charData.enterStyle}>
                        <h1 className="font-black leading-[0.85] z-10 whitespace-nowrap drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                            style={{ fontSize: wordObj.size, color: palette.fg1 }}>{charData.char}</h1>
                      </div>
                    </div>
                  ))}
                </div>
                {!wordObj.def.hideSubtext && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] md:text-[12px] tracking-[1em] uppercase opacity-90 z-10 whitespace-nowrap mix-blend-difference bg-black/80 px-4 py-1 border border-white/20" style={{ color: palette.accent }}>{wordObj.subtext}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <PostProcessLayers />
    </div>
  );
};
export const SCENES = [SceneAEMaster];