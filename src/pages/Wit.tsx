import React, { useEffect, useRef, useState } from 'react';import { motion, useMotionValue, useAnimationFrame, useSpring, useTransform } from 'framer-motion';
import { Fingerprint, Activity, MapPin, BrainCircuit, TerminalSquare } from 'lucide-react';

// ==========================================
// 【顶级炫技点 1：纯手工 3D 软件渲染引擎 (Icosahedron Engine)】
// 抛弃 3D 引擎，手搓黄金分割比例的正二十面体三维坐标、
// 旋转矩阵、透视投影与顶点呼吸形变算法。
// ==========================================
const NeuralWireframe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = 400;
    let height = canvas.height = 400;

    // 数学之美：黄金分割率推导正二十面体顶点
    const phi = (1 + Math.sqrt(5)) / 2;
    const vertices = [[-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0],[ 1, -phi, 0],
      [0, -1,  phi],[0,  1,  phi], [0, -1, -phi], [0,  1, -phi],[ phi, 0, -1], [ phi, 0,  1],[-phi, 0, -1], [-phi, 0,  1]
    ];

    // O(n^2) 寻找距离为 2 的顶点构建拓扑边
    const edges: [number, number][] =[];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i][0] - vertices[j][0];
        const dy = vertices[i][1] - vertices[j][1];
        const dz = vertices[i][2] - vertices[j][2];
        if (Math.abs(dx*dx + dy*dy + dz*dz - 4) < 0.01) {
          edges.push([i, j]);
        }
      }
    }

    let angleX = 0;
    let angleY = 0;
    let time = 0;
    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      time += 0.02;
      angleX += 0.005;
      angleY += 0.01;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // 投影后的 2D 坐标缓存
      const projected = vertices.map(v => {
        // 【形变算法】利用正弦波让几何体产生“生命呼吸感”
        const breathe = 1 + Math.sin(time + v[0]*v[1]) * 0.15;
        let x = v[0] * breathe;
        let y = v[1] * breathe;
        let z = v[2] * breathe;

        // 绕 X 轴旋转矩阵
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;
        // 绕 Y 轴旋转矩阵
        let x2 = x * cosY + z1 * sinY;
        let z2 = -x * sinY + z1 * cosY;

        // 透视除法 (Perspective Divide)
        const fov = 300;
        const scale = fov / (fov + z2 * 50);
        
        return {
          x: width / 2 + x2 * 60 * scale,
          y: height / 2 + y1 * 60 * scale,
          z: z2,
          scale
        };
      });

      // 画家算法：根据 Z 轴深度对边进行排序渲染，产生真正的 3D 纵深感
      edges.sort((a, b) => {
        const zA = Math.min(projected[a[0]].z, projected[a[1]].z);
        const zB = Math.min(projected[b[0]].z, projected[b[1]].z);
        return zB - zA; 
      });

      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        
        // Z 轴深度衰减：距离越远，线条越细且越透明
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.1, (1.5 - avgZ / 2) * 0.5);
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`; // cyan-400
        ctx.lineWidth = Math.max(0.5, p1.scale * 1.5);
        ctx.stroke();

        // 为靠近屏幕的节点添加高亮光晕
        if (avgZ < 0) {
           ctx.beginPath();
           ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
           ctx.fillStyle = `rgba(239, 68, 68, ${alpha * 2})`; // red-500
           ctx.fill();
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  },[]);

  return <canvas ref={canvasRef} className="w-full h-full mix-blend-screen pointer-events-none drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" />;
};

// ==========================================
// 【顶级炫技点 2：零重绘生物遥测仪 (Biometric Telemetry)】
// ==========================================
const BiometricData = () => {
  const bpm = useMotionValue("0");
  const syncRate = useMotionValue("0.00%");
  
  useAnimationFrame((t) => {
    // 模拟真实心跳的微弱波动 (75-85 BPM)
    const currentBpm = 80 + Math.sin(t / 500) * 5 + Math.random() * 2;
    bpm.set(currentBpm.toFixed(0));
    
    // 模拟神经突触同步率 (98.00% - 99.99%)
    const currentSync = 99 + Math.cos(t / 300) * 0.9 + Math.random() * 0.09;
    syncRate.set(currentSync.toFixed(2) + "%");
  });

  return (
    <div className="flex justify-between w-full text-[10px] font-mono tracking-widest mt-6 border-t border-cyan-900/30 pt-4">
      <div className="flex flex-col gap-1">
        <span className="text-slate-500 flex items-center gap-1"><Activity className="w-3 h-3"/> HEART_RATE</span>
        <motion.span className="text-red-400 font-bold">{bpm}</motion.span>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <span className="text-slate-500 flex items-center gap-1"><BrainCircuit className="w-3 h-3"/> NEURAL_SYNC</span>
        <motion.span className="text-cyan-400 font-bold">{syncRate}</motion.span>
      </div>
    </div>
  );
};

// ==========================================
// 【顶级炫技点 3：绝密安全许可解密交互 (Security Clearance Reveal)】
// 初始为黑色马赛克掩码，Hover 触发物理弹簧解密算法
// ==========================================
const ClassifiedText = ({ text }: { text: string }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  
  // 使用 MotionValue 与 requestAnimationFrame 实现绝对性能的解密动画
  const displayText = useMotionValue(text.replace(/[a-zA-Z0-9]/g, '█'));

  useEffect(() => {
    let frame: number;
    let iteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    
    const animate = () => {
      displayText.set(text.split("").map((char, index) => {
        if (char === ' ') return ' ';
        if (!isUnlocked) return '█';
        if (index < iteration) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));

      if (isUnlocked && iteration < text.length) {
        iteration += 1;
        frame = requestAnimationFrame(animate);
      }
    };

    if (isUnlocked) {
      frame = requestAnimationFrame(animate);
    } else {
      displayText.set(text.replace(/[a-zA-Z0-9]/g, '█'));
    }

    return () => cancelAnimationFrame(frame);
  },[isUnlocked, text, displayText]);

  return (
    <motion.span 
      onMouseEnter={() => setIsUnlocked(true)}
      onMouseLeave={() => setIsUnlocked(false)}
      className="inline-block cursor-crosshair transition-colors duration-300"
      style={{ color: isUnlocked ? '#cbd5e1' : '#1e293b' }} // 解锁后变为 slate-300，未解锁为极暗的 slate-800
    >
      <motion.span>{displayText}</motion.span>
    </motion.span>
  );
};

// ==========================================
// 主组件：Subject Dossier
// ==========================================
const Wit: React.FC = () => {
  // 3D 悬浮物理卡片控制
  const rotateX = useSpring(0, { damping: 20, stiffness: 100 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotateX.set(-y / 20);
    rotateY.set(x / 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center perspective-[1500px] overflow-hidden bg-[#050505] selection:bg-cyan-500/30 selection:text-cyan-100 pt-20">
      
      <style>{`
        /* RGB 图像撕裂抖动 */
        .glitch-hover:hover {
          animation: glitch-anim 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }
        @keyframes glitch-anim {
          0% { transform: translate(0); text-shadow: 0 0 0 transparent; }
          20% { transform: translate(-2px, 1px); text-shadow: -2px 0 0 rgba(255,0,0,0.8), 2px 0 0 rgba(0,255,255,0.8); }
          40% { transform: translate(2px, -1px); text-shadow: 2px 0 0 rgba(255,0,0,0.8), -2px 0 0 rgba(0,255,255,0.8); }
          60% { transform: translate(-1px, 2px); text-shadow: -1px 0 0 rgba(255,0,0,0.8), 1px 0 0 rgba(0,255,255,0.8); }
          100% { transform: translate(0); text-shadow: 0 0 0 transparent; }
        }
      `}</style>

      {/* 动态背景扫描线 */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] mix-blend-overlay z-0" />

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ scale: 0.9, opacity: 0, rotateX: 15 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-4xl flex flex-col md:flex-row bg-[#0a0a0a]/80 backdrop-blur-xl border border-cyan-900/40 shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-10"
      >
        {/* ==========================================
            【顶级炫技点 4：机械卡钳 SVG 路径动画】
            ========================================== */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: "translateZ(30px)" }}>
           {/* 左上角卡钳 */}
           <motion.path d="M 0 40 L 0 0 L 40 0" fill="none" stroke="#06b6d4" strokeWidth="2" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
           <motion.path d="M 4 36 L 4 4 L 36 4" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.4"
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
           {/* 右下角卡钳 */}
           <motion.path d="M calc(100% - 40px) 100% L 100% 100% L 100% calc(100% - 40px)" fill="none" stroke="#06b6d4" strokeWidth="2" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
        </svg>

        {/* 左侧：3D 神经模型与生命体征 */}
        <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-cyan-900/40 p-8 flex flex-col items-center relative overflow-hidden" style={{ transform: "translateZ(20px)" }}>
           
           <div className="absolute top-4 left-4 text-[9px] font-mono text-cyan-400/80 tracking-widest uppercase flex items-center gap-2">
             <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
             RESTRICTED_ACCESS
           </div>

           {/* 纯代码手搓的 3D 线框神经模型 */}
           <div className="w-48 h-48 relative mb-8 mt-4">
             <NeuralWireframe />
           </div>

           <div className="w-full text-left">
             <h2 className="text-xl font-black text-white uppercase tracking-tighter mb-1 glitch-hover">SUBJECT: LUNA</h2>
             <div className="text-[10px] font-mono text-cyan-600 tracking-[0.2em] mb-4 flex flex-col gap-1">
               <span>CLASS: S-TIER_ANOMALY</span>
               <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> TOKYO, JAPAN // 2026</span>
             </div>
           </div>

           <BiometricData />
        </div>

        {/* 右侧：高度机密解密档案 */}
        <div className="w-full md:w-7/12 p-8 md:p-12 text-left flex flex-col justify-between" style={{ transform: "translateZ(40px)" }}>
           
           <div className="flex justify-between items-center mb-10 text-[9px] font-mono text-slate-500 uppercase tracking-widest border-b border-cyan-900/20 pb-2">
             <span className="flex items-center gap-2"><TerminalSquare className="w-3 h-3 text-cyan-500"/> DOSSIER_LOG_2026</span>
             <span>AUTHORIZATION: REQUIRED</span>
           </div>

           <div className="font-mono text-sm leading-8 text-slate-300">
             <p className="mb-6">
               <span className="text-cyan-500 font-bold mr-2">&gt;</span>
               <ClassifiedText text="Subject identified as core architect of LUNA_PROTOCOL." />
             </p>
             <p className="mb-6">
               <span className="text-cyan-500 font-bold mr-2">&gt;</span>
               <ClassifiedText text="Current whereabouts unknown. Last traced to the AP-NORTHEAST-1 subnet." />
             </p>
             <p className="mb-6 relative group">
               <span className="text-cyan-500 font-bold mr-2">&gt;</span>
               <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">Love is murderous utopia.</span>
               <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-4 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
             </p>
             <p className="mb-6">
               <span className="text-cyan-500 font-bold mr-2">&gt;</span>
               <ClassifiedText text="End of transmission. Memory wipe initiated." />
               <span className="inline-block w-2 h-4 bg-cyan-400 ml-2 translate-y-1 animate-pulse" />
             </p>
           </div>

           <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-cyan-800">
             <div className="flex items-center gap-2 group cursor-pointer hover:text-cyan-400 transition-colors">
               <Fingerprint className="w-5 h-5" />
               <span className="tracking-widest">SCAN_TO_DECRYPT</span>
             </div>
             <span>SYS.MEM_PTR: 0x9F4A</span>
           </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Wit;
