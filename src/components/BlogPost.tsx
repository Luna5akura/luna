// src/components/BlogPost.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Post } from '@/types';
import { Scan, TerminalSquare } from "lucide-react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useMotionTemplate, 
  useTransform
} from 'framer-motion';
import { useTransitionNavigate } from '@/hooks/useTransitionNavigate';

const useHardwareAttitude = (rotateX: any, rotateY: any) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.DeviceOrientationEvent) return;

    const LPF_ALPHA = 0.15; 
    let smoothedBeta = 0;
    let smoothedGamma = 0;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta === null || e.gamma === null) return;
      
      const targetBeta = Math.max(-30, Math.min(30, e.beta - 45)); 
      const targetGamma = Math.max(-30, Math.min(30, e.gamma));

      smoothedBeta = smoothedBeta + LPF_ALPHA * (targetBeta - smoothedBeta);
      smoothedGamma = smoothedGamma + LPF_ALPHA * (targetGamma - smoothedGamma);

      rotateX.set(-(smoothedBeta / 1.5));
      rotateY.set(smoothedGamma / 1.5);
    };

    const requestAccess = async () => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission();
          if (permission === 'granted') window.addEventListener('deviceorientation', handleOrientation);
        } catch (error) { console.warn("Gyro scope permission rejected."); }
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    };

    window.addEventListener('touchstart', requestAccess, { once: true });
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('touchstart', requestAccess);
    };
  }, [rotateX, rotateY]);
};

// ==========================================
// 【极致优化点 1：零重绘量子态数据解密引擎】
// 原代码通过 Framer Motion 的 useMotionValue 每次修改文本都触发 React 的 re-render，
// 对于长摘要，造成严重的内存占用和 GC 卡顿。现使用 ref 直接物理注入节点内容，完美 144Hz 运行！
// ==========================================
const ZeroRenderDecryptor = ({ text, isHovered }: { text: string, isHovered: boolean }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    if (!isHovered) {
      // 静态掩码：不启动动画，仅计算一次
      const hexMask = Array.from(text).map(c => c === ' ' ? ' ' : Math.floor(Math.random()*16).toString(16).toUpperCase()).join('');
      el.textContent = hexMask;
      return;
    }

    let frameId: number;
    let iteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const len = text.length;
    
    const animate = () => {
      let currentText = "";
      for (let i = 0; i < len; i++) {
        if (i < iteration) currentText += text[i];
        else if (text[i] === " ") currentText += " ";
        else currentText += chars[Math.floor(Math.random() * chars.length)];
      }

      el.textContent = currentText;

      if (iteration < len) {
        iteration += Math.max(1, len / 20); // 确保不管文本多长，都能恒定时间完成解密
        frameId = requestAnimationFrame(animate);
      } else {
        el.textContent = text;
      }
    };
    
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [text, isHovered]);

  return <span ref={nodeRef}></span>;
};

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 【极致优化点 2：物理包围盒缓存 (Physical Bounding Box Caching)】
  // 原代码在 handleMouseMove 内部每帧调用 getBoundingClientRect，直接导致浏览器渲染管线阻塞。
  // 现将包围盒数据缓存在内存中，鼠标移动过程降级为纯数字加减运算。
  const rectRef = useRef<{left: number, top: number, width: number, height: number} | null>(null);

  const transitionNavigate = useTransitionNavigate(); 
  const[isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardWidth = useMotionValue(0);
  const cardHeight = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { damping: 25, stiffness: 200, mass: 0.5 });
  const rotateY = useSpring(useMotionValue(0), { damping: 25, stiffness: 200, mass: 0.5 });
  const spotlightOpacity = useSpring(0, { stiffness: 300, damping: 30 });

  useHardwareAttitude(rotateX, rotateY);

  const lightAngle = useTransform([mouseX, mouseY, cardWidth, cardHeight], ([x, y, w, h]: number[]) => {
    const cx = w / 2;
    const cy = h / 2;
    const angleRad = Math.atan2(y - cy, x - cx);
    return (angleRad * 180) / Math.PI + 90; 
  });

  const handleMouseEnter = () => {
    if (cardRef.current) rectRef.current = cardRef.current.getBoundingClientRect();
    spotlightOpacity.set(1);
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    const cx = e.clientX - left;
    const cy = e.clientY - top;
    
    mouseX.set(cx);
    mouseY.set(cy);
    cardWidth.set(width);
    cardHeight.set(height);

    const centerX = width / 2;
    const centerY = height / 2;
    rotateX.set(((cy - centerY) / centerY) * -12); 
    rotateY.set(((cx - centerX) / centerX) * 12);
  };

  const handleMouseLeave = () => {
    spotlightOpacity.set(0);
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    rectRef.current = null;
  };

  const backgroundSpotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(34, 211, 238, 0.1), transparent 80%)`;
  const borderSpotlight = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(34, 211, 238, 0.8), transparent 80%)`;
  const specularHighlight = useMotionTemplate`linear-gradient(${lightAngle}deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.0) 60%)`;

  return (
    <div className="group relative w-full mb-12 perspective-[1500px]">
      <div 
        onClick={() => transitionNavigate(`/posts/${post.contentKey}`)} 
        className="block relative cursor-pointer outline-none"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative z-10 w-full rounded-sm border border-cyan-900/40 bg-[#050505]/90 backdrop-blur-md p-6 md:p-8 transition-colors duration-500 overflow-visible will-change-transform shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]"
        >
          <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none rounded-sm overflow-hidden"
            style={{ transform: "translateZ(-20px)" }}
          >
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>

          <motion.div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-sm" style={{ background: backgroundSpotlight, opacity: spotlightOpacity }} />
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 rounded-sm transition-opacity duration-300 border-[2px] border-transparent"
            style={{ 
              background: borderSpotlight, opacity: spotlightOpacity,
              WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude'
            }}
          />

          <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(40px)" }}>
            
            <div className="flex items-baseline justify-between mb-6 border-b border-cyan-900/30 pb-3" style={{ transform: "translateZ(20px)" }}>
              <div className="flex items-center gap-2">
                <TerminalSquare className="w-4 h-4 text-cyan-500" />
                <span className="text-[10px] font-mono text-cyan-500/80 tracking-[0.2em] uppercase font-bold">
                  {post.date} // {post.category}
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors tracking-widest uppercase">
                AUTHOR_{post.author}
              </span>
            </div>

            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-200 group-hover:text-white transition-all duration-500 ease-out group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] leading-tight"
              style={{ 
                transform: "translateZ(60px)",
                viewTransitionName: `post-title-${post.id}` 
              }}
            >
              {post.title}
            </h2>

            <div 
              className="mt-6 text-slate-500 text-xs md:text-sm font-mono leading-relaxed max-w-2xl line-clamp-2 group-hover:text-cyan-100/70 transition-colors p-4 bg-cyan-950/20 border-l-2 border-cyan-900/50 group-hover:border-cyan-400" 
              style={{ transform: "translateZ(30px)" }}
            >
              <ZeroRenderDecryptor text={post.excerpt} isHovered={isHovered} />
            </div>

            <div className="mt-8 flex items-center justify-between text-slate-500 group-hover:text-cyan-400 transition-colors w-full" style={{ transform: "translateZ(50px)" }}>
              <div className="flex items-center gap-3">
                 <div className="relative flex items-center justify-center w-8 h-8 border border-slate-700 group-hover:border-cyan-400 rounded-sm bg-black transition-colors overflow-hidden">
                    <Scan className="w-4 h-4 absolute" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] flex flex-col">
                   <span>Execute</span>
                   <span className="text-cyan-800 group-hover:text-cyan-500 transition-colors">Data_Fetch()</span>
                 </span>
              </div>
              
              <div className="text-[8px] font-mono text-cyan-900 group-hover:text-cyan-500 tracking-widest">
                ID:0x{post.id.toString(16).padStart(4, '0')}
              </div>
            </div>
          </div>

          <motion.div 
             className="absolute inset-0 z-20 pointer-events-none rounded-sm mix-blend-overlay transition-opacity duration-300 will-change-transform transform-gpu"
             style={{ 
               background: specularHighlight,
               opacity: spotlightOpacity,
               transform: "translateZ(80px)" 
             }}
          />
          
        </motion.div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(32px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;