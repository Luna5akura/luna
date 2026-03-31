// src/pages/Warp.tsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Satellite, Fingerprint, Zap, Crosshair } from 'lucide-react';

const portals =[
  { title: "Cameudis", url: "https://www.cameudis.com/", desc: "Murderous Utopia" },
  { title: "IceLava", url: "https://icelava.top", desc: "No Code No Life" },
  { title: "Twilight", url: "https://blog.iin0.cn/", desc: "Sound of Silence" },
  { title: "Sapium", url: "https://www.sapium.site", desc: "Thinking Space" },
];

const WarpDriveCanvas = ({ isHovered }: { isHovered: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speedRef = useRef(0.5);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    const STAR_COUNT = 120;
    const FOV = 120;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * width,
      pz: 0
    }));
    let animationId: number;
    const render = () => {
      const targetSpeed = isHovered ? 12 : 0.5;
      speedRef.current += (targetSpeed - speedRef.current) * 0.1;
      ctx.fillStyle = isHovered ? 'rgba(236, 233, 216, 0.3)' : 'rgba(236, 233, 216, 0.8)';
      ctx.fillRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      stars.forEach(star => {
        star.pz = star.z;
        star.z -= speedRef.current;
        if (star.z < 1) {
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
          star.pz = width;
        }
        const scale = FOV / star.z;
        const x2d = cx + star.x * scale;
        const y2d = cy + star.y * scale;
        const pScale = FOV / star.pz;
        const px2d = cx + star.x * pScale;
        const py2d = cy + star.y * pScale;
        const alpha = Math.min(1, (width - star.z) / width);
        ctx.beginPath();
        ctx.moveTo(px2d, py2d);
        ctx.lineTo(x2d, y2d);
        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha * 0.5})`;
        ctx.lineWidth = isHovered ? Math.max(0.5, (1 - star.z / width) * 2) : 0.5;
        ctx.stroke();
      });
      animationId = requestAnimationFrame(render);
    };
    render();
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isHovered]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30" />;
};

const NetworkResolver = ({ url, isHovered }: { url: string, isHovered: boolean }) => {
  const displayAddress = useMotionValue(url);
  useEffect(() => {
    if (!isHovered) {
      displayAddress.set(url);
      return;
    }
    let frameId: number;
    let iteration = 0;
    const totalFrames = 20;
    const generateIPv4 = () => {
      return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`;
    };
    const animate = () => {
      if (iteration < totalFrames) {
        displayAddress.set(`RESOLVING::[${generateIPv4()}]`);
        iteration++;
        frameId = requestAnimationFrame(animate);
      } else {
        displayAddress.set(`UPLINK::[${url}]`);
      }
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered, url, displayAddress]);
  return <motion.span>{displayAddress}</motion.span>;
};

const WarpNode = ({ portal, index }: { portal: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const yOffset = index % 2 === 0 ? 0 : 20;
  const hexId = `0x${(index + 1).toString(16).toUpperCase().padStart(2, '0')}`;
  return (
    <motion.a
      href={portal.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-48 md:h-64 flex flex-col justify-between overflow-hidden cursor-default outline-none"
      style={{ marginTop: `${yOffset}px` }}
    >
      <div className="absolute inset-0 bg-[#f5f3e8] border border-gray-500 group-hover:bg-gray-200 transition-all duration-200 z-10 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]">
        <WarpDriveCanvas isHovered={isHovered} />
        <span className="absolute -bottom-8 -right-4 text-[12rem] font-black opacity-[0.03] group-hover:opacity-[0.1] text-black transition-opacity duration-200 select-none pointer-events-none leading-none">
          {portal.title[0]}
        </span>
      </div>
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-600 z-20" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-600 z-20" />
      <div className="relative z-20 p-6 flex flex-col justify-between h-full pointer-events-none">
        <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-wider text-gray-500">
           <div className="flex items-center gap-2">
             <Satellite className="w-3 h-3 group-hover:text-black transition-colors" />
             NODE_ID: {hexId}
           </div>
           <div className="relative w-4 h-4 overflow-hidden">
              <Crosshair className="absolute inset-0 w-full h-full text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-50 group-hover:scale-100" />
           </div>
        </div>
        <div className="transform-gpu transition-transform duration-200 group-hover:translate-x-2">
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-800 group-hover:text-black transition-all uppercase">
              {portal.title}
            </h3>
            <p className="font-mono text-xs mt-2 text-gray-500 group-hover:text-gray-700 transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-gray-700 rounded-full" />
              {portal.desc}
            </p>
        </div>
        <div className="font-mono text-[8px] md:text-[9px] text-gray-500 group-hover:text-gray-700 tracking-wider border-t border-gray-300 pt-3 mt-4 flex items-center gap-2 w-full truncate">
           <Zap className="w-3 h-3 shrink-0" />
           <NetworkResolver url={portal.url} isHovered={isHovered} />
        </div>
      </div>
    </motion.a>
  );
};

const Warp: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [2, -2]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-2, 2]), { stiffness: 150, damping: 20 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width * 2 - 1);
    mouseY.set((e.clientY - top) / height * 2 - 1);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };
  return (
    <div className="min-h-screen bg-[#ece9d8] flex flex-col items-center justify-center p-6 md:p-20 relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="w-full max-w-5xl mb-12 flex justify-between items-end border-b border-gray-400 pb-4 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-[10px] text-gray-600 tracking-wider uppercase">
            <Fingerprint className="w-4 h-4" />
            UNAUTHORIZED ROUTING MATRIX
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tighter">WARP GATES</h1>
        </div>
        <div className="hidden md:flex flex-col items-end font-mono text-[9px] text-gray-500 tracking-wider gap-1">
          <span>SYS_LOC: AP-NORTHEAST-1</span>
          <span>AVAILABLE NODES: 0x0{portals.length}</span>
        </div>
      </div>
      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl relative z-10 will-change-transform"
      >
        {portals.map((portal, index) => (
          <WarpNode key={portal.title} portal={portal} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Warp;