import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue, AnimatePresence, useSpring } from 'framer-motion';
import { useScrambleText } from '@/hooks/useScrambleText';
import { Code, Database, Globe, Layers, Cpu, Box, Terminal, Server, Layout, Smartphone } from 'lucide-react';

// --- 数据保持不变 ---
const SKILLS = [
  { name: "React", level: 90, icon: <Code /> },
  { name: "TypeScript", level: 85, icon: <Terminal /> },
  { name: "Three.js", level: 70, icon: <Box /> },
  { name: "Next.js", level: 88, icon: <Globe /> },
  { name: "Node.js", level: 80, icon: <Server /> },
  { name: "PostgreSQL", level: 75, icon: <Database /> },
  { name: "Tailwind", level: 95, icon: <Layout /> },
  { name: "Native", level: 65, icon: <Smartphone /> },
];

const EXPERIENCE = [
  {
    year: "2024",
    title: "ARCHITECT",
    company: "VOID_SYSTEMS",
    desc: "Constructing digital realities. Mastering the art of invisible interfaces.",
    color: "#00f0ff"
  },
  {
    year: "2022",
    title: "ENGINEER",
    company: "CYBER_CORP",
    desc: "Optimizing the core protocols. Bridging human thought and machine code.",
    color: "#ff003c"
  },
  {
    year: "2020",
    title: "INITIATE",
    company: "START_POINT",
    desc: "First connection established. Learning the language of the machine.",
    color: "#ffff00"
  }
];

// --- 系统启动加载器 ---
const SystemBootLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("INITIALIZING...");

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                const increment = Math.random() * 8;
                const next = Math.min(prev + increment, 100);
                if (next > 30) setStatusText("LOADING_ASSETS...");
                if (next > 60) setStatusText("DECRYPTING_CORE...");
                if (next >= 90) setStatusText("SYSTEM_READY");
                return next;
            });
        }, 80);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center font-mono text-cyan-500"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 0.8 } }}
        >
            <div className="w-64">
                <div className="flex justify-between text-xs mb-2"><span>{statusText}</span><span>{Math.floor(progress)}%</span></div>
                <div className="w-full h-1 bg-gray-900 border border-cyan-900/50">
                    <motion.div className="h-full bg-cyan-500 shadow-[0_0_15px_#00f0ff]" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </motion.div>
    );
};

// --- 3D 技能项 ---
const SkillOrbitItem = ({ item, index, total, rotationY }: { item: typeof SKILLS[0], index: number, total: number, rotationY: MotionValue<number> }) => {
  const baseAngle = (index / total) * 360;
  const radius = 380; // 半径

  const transform = useTransform(rotationY, (latest) => `rotateY(${baseAngle + latest}deg) translateZ(${radius}px)`);
  const counterRotate = useTransform(rotationY, (latest) => `rotateY(${-latest - baseAngle}deg)`);
  const opacity = useTransform(rotationY, (latest) => {
    const currentAngle = (baseAngle + latest) % 360;
    const normalized = Math.abs((currentAngle + 90) % 360 - 180);
    return normalized > 90 ? 1 : 0.15;
  });
  const scale = useTransform(rotationY, (latest) => {
      const currentAngle = (baseAngle + latest) % 360;
      const normalized = Math.abs((currentAngle + 90) % 360 - 180);
      return normalized > 90 ? 1 : 0.6;
  });

  return (
    <motion.div
      style={{ transform, opacity, scale, zIndex: opacity }}
      className="absolute top-1/2 left-1/2 w-48 h-48 -ml-24 -mt-24 flex flex-col items-center justify-center backface-visible"
    >
      <motion.div 
        style={{ transform: counterRotate }}
        className="flex flex-col items-center justify-center bg-black/90 border border-white/10 p-5 backdrop-blur-xl rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group cursor-pointer"
      >
        <div className="text-gray-400 mb-3 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
            {item.icon}
        </div>
        <h3 className="text-lg font-bold text-gray-200 font-mono tracking-widest group-hover:text-white">{item.name}</h3>
        <div className="w-full h-[2px] bg-gray-800 mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 box-shadow-[0_0_10px_#00f0ff]" style={{ width: `${item.level}%` }} />
        </div>
      </motion.div>
    </motion.div>
  );
};


const Skill: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // --- 1. REACTOR (SKILLS) ---
  const reactorRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: reactorScroll } = useScroll({
    target: reactorRef,
    offset: ["start start", "end end"]
  });
  const smoothReactorScroll = useSpring(reactorScroll, { mass: 0.2, stiffness: 80, damping: 20 });
  const reactorRotation = useTransform(smoothReactorScroll, [0, 1], [0, -360]);

  // --- 2. LENS (EXPERIENCE) ---
  const lensRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: lensScroll } = useScroll({
    target: lensRef,
    offset: ["start start", "end end"]
  });
  const smoothLensScroll = useSpring(lensScroll, { mass: 0.1, stiffness: 100, damping: 20 });
  
  const headerTitle = useScrambleText("THE_CONSTRUCT", 50);

  return (
    <>
        <AnimatePresence>
            {loading && <SystemBootLoader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {/* 
            【关键修复 1】：移除了 overflow-x-hidden。
            如果你的 index.css 设置了 body { overflow-x: hidden }，请暂时保留。
            但不要在下面的 div 上设置 overflow: hidden。
        */}
        <div className="bg-[#050505] min-h-screen text-white selection:bg-cyan-500 selection:text-black font-sans relative">
        
        {/* 背景噪点 - 保持 fixed */}
        <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* --- PART 1: THE REACTOR (SKILLS) --- */}
        {/* 高度轨道：500vh */}
        <div ref={reactorRef} className="h-[500vh] relative z-10">
            {/* 
                【关键修复 2】：Sticky 容器
                1. sticky top-0: 必须是视口顶端。
                2. h-screen: 必须填满屏幕高度。
                3. flex items-center justify-center: 确保内容绝对居中。
                4. overflow-hidden: 防止内部 3D 元素溢出导致滚动条。
            */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
                
                {/* 居中偏移修正：如果你觉得偏上，调整这个 translateY */}
                <div className="relative w-full h-full flex items-center justify-center translate-y-8">
                
                    {/* 背景装饰 */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1]">
                        <div className="w-[180vw] h-[180vw] border-[1px] border-cyan-500/5 rounded-full animate-[spin_120s_linear_infinite]" />
                        <div className="w-[120vw] h-[120vw] border-[1px] border-cyan-500/5 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
                    </div>

                    {/* 标题 */}
                    <div className="absolute z-0 text-center pointer-events-none mix-blend-difference">
                        <h1 className="text-[15vw] font-black tracking-tighter opacity-10 animate-pulse text-gray-500 select-none">
                            CORE
                        </h1>
                    </div>

                    {/* 3D 旋转核心 */}
                    <div 
                        className="relative w-[600px] h-[600px] flex items-center justify-center"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="absolute w-40 h-40 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse" />
                        <div className="absolute w-20 h-20 border border-cyan-500/30 rounded-full animate-spin" />
                        
                        {SKILLS.map((skill, index) => (
                            <SkillOrbitItem 
                                key={skill.name}
                                item={skill}
                                index={index}
                                total={SKILLS.length}
                                rotationY={reactorRotation}
                            />
                        ))}
                    </div>

                    <div className="absolute bottom-12 font-mono text-xs text-cyan-500/50">
                        SCROLL_TO_ROTATE_CORE [▼]
                    </div>
                </div>
            </div>
        </div>


        {/* --- PART 2: THE LENS (EXPERIENCE) --- */}
        <div ref={lensRef} className="h-[600vh] relative z-20 bg-black">
            {/* 
                【关键修复 3】：同上，确保 sticky 生效。
                使用 h-screen 填满视口。
            */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                
                {/* 动态背景 */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#0a1a1f] via-black to-black transition-colors duration-1000"
                    style={{ opacity: useTransform(smoothLensScroll, [0, 0.3, 0.6, 1], [0, 1, 0.5, 0.2]) }}
                />
                
                {/* 内容容器 */}
                <div className="relative z-10 max-w-5xl w-full px-6 text-center translate-y-8">
                    {EXPERIENCE.map((exp, index) => {
                        const start = index * 0.3;
                        const end = start + 0.3;
                        
                        const opacity = useTransform(smoothLensScroll, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                        const scale = useTransform(smoothLensScroll, [start, end], [0.9, 1.1]);
                        const y = useTransform(smoothLensScroll, [start, end], [100, -100]); 
                        const blur = useTransform(smoothLensScroll, [start, start + 0.1, end - 0.1, end], [10, 0, 0, 10]);

                        return (
                            <motion.div
                                key={exp.company}
                                style={{ opacity, scale, y, filter: useTransform(blur, b => `blur(${b}px)`), display: index === 0 ? 'block' : 'absolute', top: 0, left: 0, right: 0 }}
                                className="flex flex-col items-center justify-center"
                            >
                                <h2 
                                    className="text-[15rem] md:text-[25rem] font-black leading-none opacity-5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0"
                                    style={{ color: exp.color }}
                                >
                                    {exp.year}
                                </h2>

                                <div className="relative z-10 backdrop-blur-md bg-black/40 p-8 md:p-16 border-y border-white/10 shadow-2xl">
                                    <h3 className="text-sm font-mono tracking-[0.5em] text-white/70 mb-6 uppercase flex items-center justify-center gap-4">
                                        <span className="w-2 h-2 rounded-full" style={{ background: exp.color }}/>
                                        {exp.company}
                                        <span className="w-2 h-2 rounded-full" style={{ background: exp.color }}/>
                                    </h3>
                                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter mix-blend-overlay">
                                        {exp.title}
                                    </h1>
                                    <p className="text-lg md:text-2xl text-gray-400 font-mono max-w-3xl mx-auto leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 侧边进度条 */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                    {EXPERIENCE.map((_, i) => (
                        <motion.div key={i} className="w-1 bg-white/10 h-16 rounded-full overflow-hidden">
                            <motion.div 
                                className="w-full bg-cyan-500 shadow-[0_0_10px_#00f0ff]"
                                style={{ height: useTransform(smoothLensScroll, [i * 0.3, (i + 1) * 0.3], ["0%", "100%"]) }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>


        {/* --- PART 3: PROJECTS (GATEWAY) --- */}
        <div className="relative py-40 px-6 md:px-12 max-w-7xl mx-auto z-30 bg-[#050505]">
            <div className="mb-32 flex items-center gap-6">
                <div className="w-4 h-4 bg-cyan-500 animate-pulse shadow-[0_0_15px_#00f0ff]" />
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mix-blend-difference">
                    PROJECT_GATEWAY
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-40">
                {[
                    { title: "NEURAL_LINK", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop" },
                    { title: "VOID_WALKER", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" },
                    { title: "ECHO_CHAMBER", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop" }
                ].map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative group h-[70vh] w-full overflow-hidden border border-white/5 bg-gray-900"
                    >
                        <div className="absolute inset-0">
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.5s] ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                            <div className="overflow-hidden">
                                <h3 className="text-6xl md:text-9xl font-black text-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100 uppercase tracking-tighter">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="flex justify-between items-end border-t border-white/20 pt-8 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                                <span className="font-mono text-sm text-cyan-400 tracking-widest">/// ACCESS_GRANTED</span>
                                <span className="font-mono text-5xl text-white group-hover:translate-x-4 transition-transform duration-500">↗</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <footer className="h-60 flex flex-col items-center justify-center border-t border-white/10 mt-20 bg-black z-30 relative">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mb-4" />
            <p className="font-mono text-xs text-gray-600 tracking-[0.5em]">END_OF_CONSTRUCT</p>
        </footer>
        </div>
    </>
  );
};

export default Skill;