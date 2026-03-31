// src/pages/Wit.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame, useSpring, useTransform } from 'framer-motion';
import { Fingerprint, Activity, MapPin, BrainCircuit, TerminalSquare } from 'lucide-react';

const NeuralWireframe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.width = 400;
    let height = canvas.height = 400;
    const phi = (1 + Math.sqrt(5)) / 2;
    const vertices = [[-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0],[ 1, -phi, 0],
      [0, -1,  phi],[0,  1,  phi], [0, -1, -phi], [0,  1, -phi],[ phi, 0, -1], [ phi, 0,  1],[-phi, 0, -1], [-phi, 0,  1]
    ];
    const edges: [number, number][] =[];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i][0] - vertices[j][0];
        const dy = vertices[i][1] - vertices[j][1];
        const dz = vertices[i][2] - vertices[j][2];
        if (Math.abs(dx*dx + dy*dy + dz*dz - 4) < 0.01) edges.push([i, j]);
      }
    }
    let angleX = 0, angleY = 0, time = 0, animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;
      angleX += 0.003;
      angleY += 0.005;
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      const projected = vertices.map(v => {
        let x = v[0], y = v[1], z = v[2];
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;
        let x2 = x * cosY + z1 * sinY;
        let z2 = -x * sinY + z1 * cosY;
        const fov = 300;
        const scale = fov / (fov + z2 * 50);
        return { x: width / 2 + x2 * 60 * scale, y: height / 2 + y1 * 60 * scale, z: z2, scale };
      });
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.1, (1.5 - avgZ / 2) * 0.5);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.lineWidth = Math.max(0.5, p1.scale * 1.2);
        ctx.stroke();
      });
      animationId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationId);
  },[]);
  return <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />;
};

const BiometricData = () => {
  const bpm = useMotionValue("0");
  const syncRate = useMotionValue("0.00%");
  useAnimationFrame((t) => {
    const currentBpm = 80 + Math.sin(t / 500) * 5 + Math.random() * 2;
    bpm.set(currentBpm.toFixed(0));
    const currentSync = 99 + Math.cos(t / 300) * 0.9 + Math.random() * 0.09;
    syncRate.set(currentSync.toFixed(2) + "%");
  });
  return (
    <div className="flex justify-between w-full text-[10px] font-mono tracking-wider mt-6 border-t border-gray-400 pt-4">
      <div className="flex flex-col gap-1">
        <span className="text-gray-600 flex items-center gap-1"><Activity className="w-3 h-3"/> HEART RATE</span>
        <motion.span className="text-black font-bold">{bpm}</motion.span>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <span className="text-gray-600 flex items-center gap-1"><BrainCircuit className="w-3 h-3"/> NEURAL SYNC</span>
        <motion.span className="text-black font-bold">{syncRate}</motion.span>
      </div>
    </div>
  );
};

const ClassifiedText = ({ text }: { text: string }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
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
    if (isUnlocked) frame = requestAnimationFrame(animate);
    else displayText.set(text.replace(/[a-zA-Z0-9]/g, '█'));
    return () => cancelAnimationFrame(frame);
  },[isUnlocked, text, displayText]);
  return (
    <motion.span 
      onMouseEnter={() => setIsUnlocked(true)}
      onMouseLeave={() => setIsUnlocked(false)}
      className="inline-block cursor-default transition-colors duration-200"
      style={{ color: isUnlocked ? '#000000' : '#a0a0a0' }}
    >
      <motion.span>{displayText}</motion.span>
    </motion.span>
  );
};

const Wit: React.FC = () => {
  const rotateX = useSpring(0, { damping: 20, stiffness: 100 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 100 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotateX.set(-y / 30);
    rotateY.set(x / 30);
  };
  const handleMouseLeave = () => { rotateX.set(0); rotateY.set(0); };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center perspective-[1500px] overflow-hidden bg-[#ece9d8] selection:bg-gray-500 selection:text-white pt-20">
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#00000005_2px,#00000005_4px)] z-0" />
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-4xl flex flex-col md:flex-row bg-[#f5f3e8] border-2 border-gray-600 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080] z-10"
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
           <motion.path d="M 0 40 L 0 0 L 40 0" fill="none" stroke="#000000" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
           <motion.path d="M calc(100% - 40px) 100% L 100% 100% L 100% calc(100% - 40px)" fill="none" stroke="#000000" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
        </svg>
        <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-gray-400 p-8 flex flex-col items-center relative overflow-hidden">
           <div className="absolute top-4 left-4 text-[9px] font-mono text-gray-600 tracking-wider uppercase flex items-center gap-2">
             <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" />
             RESTRICTED ACCESS
           </div>
           <div className="w-48 h-48 relative mb-8 mt-4">
             <NeuralWireframe />
           </div>
           <div className="w-full text-left">
             <h2 className="text-xl font-black text-black uppercase tracking-tighter mb-1">SUBJECT: LUNA</h2>
             <div className="text-[10px] font-mono text-gray-600 tracking-wider mb-4 flex flex-col gap-1">
               <span>CLASS: S-TIER ANOMALY</span>
               <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> TOKYO, JAPAN // 2026</span>
             </div>
           </div>
           <BiometricData />
        </div>
        <div className="w-full md:w-7/12 p-8 md:p-12 text-left flex flex-col justify-between">
           <div className="flex justify-between items-center mb-10 text-[9px] font-mono text-gray-600 uppercase tracking-wider border-b border-gray-400 pb-2">
             <span className="flex items-center gap-2"><TerminalSquare className="w-3 h-3 text-gray-700"/> DOSSIER LOG 2026</span>
             <span>AUTHORIZATION: REQUIRED</span>
           </div>
           <div className="font-mono text-sm leading-8 text-gray-800">
             <p className="mb-6">
               <span className="text-gray-700 font-bold mr-2">&gt;</span>
               <ClassifiedText text="Subject identified as core architect of LUNA_PROTOCOL." />
             </p>
             <p className="mb-6">
               <span className="text-gray-700 font-bold mr-2">&gt;</span>
               <ClassifiedText text="Current whereabouts unknown. Last traced to the AP-NORTHEAST-1 subnet." />
             </p>
             <p className="mb-6 relative group">
               <span className="text-gray-700 font-bold mr-2">&gt;</span>
               <span className="font-bold text-black group-hover:text-red-700 transition-colors">Love is murderous utopia.</span>
               <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-4 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
             </p>
             <p className="mb-6">
               <span className="text-gray-700 font-bold mr-2">&gt;</span>
               <ClassifiedText text="End of transmission. Memory wipe initiated." />
               <span className="inline-block w-2 h-4 bg-gray-700 ml-2 translate-y-1 animate-pulse" />
             </p>
           </div>
           <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-gray-500">
             <div className="flex items-center gap-2 group cursor-pointer hover:text-black transition-colors">
               <Fingerprint className="w-5 h-5" />
               <span className="tracking-wider">SCAN TO DECRYPT</span>
             </div>
             <span>SYS.MEM_PTR: 0x9F4A</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Wit;