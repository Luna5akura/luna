// src/components/BlogPost.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Post } from '@/types';
import { Scan, TerminalSquare } from "lucide-react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from 'framer-motion';
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

const ZeroRenderDecryptor = ({ text, isHovered }: { text: string, isHovered: boolean }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    if (!isHovered) {
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
        iteration += Math.max(1, len / 20);
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

interface BlogPostProps { post: Post; }

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{ left: number, top: number, width: number, height: number } | null>(null);
  const transitionNavigate = useTransitionNavigate();
  const [isHovered, setIsHovered] = useState(false);
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
    rotateX.set(((cy - centerY) / centerY) * -8);
    rotateY.set(((cx - centerX) / centerX) * 8);
  };
  const handleMouseLeave = () => {
    spotlightOpacity.set(0);
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    rectRef.current = null;
  };
  const backgroundSpotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.05), transparent 80%)`;
  const borderSpotlight = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.2), transparent 80%)`;
  const specularHighlight = useMotionTemplate`linear-gradient(${lightAngle}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 60%)`;

  return (
    <div className="group relative w-full mb-12">
      <div onClick={() => transitionNavigate(`/posts/${post.contentKey}`)} className="block relative cursor-default outline-none">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative z-10 w-full border-2 border-gray-600 bg-[#ece9d8] p-6 md:p-8 transition-colors duration-200 overflow-visible will-change-transform shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]"
        >
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ transform: "translateZ(-20px)" }}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>
          <motion.div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-200" style={{ background: backgroundSpotlight, opacity: spotlightOpacity }} />
          <motion.div className="pointer-events-none absolute inset-0 z-0 rounded-sm transition-opacity duration-200 border-2 border-transparent" style={{ background: borderSpotlight, opacity: spotlightOpacity, WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
          <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(20px)" }}>
            <div className="flex items-baseline justify-between mb-6 border-b border-gray-400 pb-3" style={{ transform: "translateZ(10px)" }}>
              <div className="flex items-center gap-2">
                <TerminalSquare className="w-4 h-4 text-gray-700" />
                <span className="text-[10px] font-mono text-gray-600 tracking-wide uppercase font-bold">
                  {post.date} // {post.category}
                </span>
              </div>
              <span className="text-[9px] font-mono text-gray-500 group-hover:text-gray-800 transition-colors tracking-widest uppercase">
                AUTHOR_{post.author}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-gray-800 group-hover:text-black transition-all duration-200 leading-tight" style={{ transform: "translateZ(30px)", viewTransitionName: `post-title-${post.id}` }}>
              {post.title}
            </h2>
            <div className="mt-6 text-gray-600 text-xs md:text-sm font-mono leading-relaxed max-w-2xl line-clamp-2 group-hover:text-gray-900 transition-colors p-4 bg-gray-200 border-l-2 border-gray-500" style={{ transform: "translateZ(15px)" }}>
              <ZeroRenderDecryptor text={post.excerpt} isHovered={isHovered} />
            </div>
            <div className="mt-8 flex items-center justify-between text-gray-500 group-hover:text-gray-800 transition-colors w-full" style={{ transform: "translateZ(25px)" }}>
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 border border-gray-500 group-hover:border-gray-800 bg-gray-300 transition-colors overflow-hidden">
                  <Scan className="w-4 h-4 absolute" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide flex flex-col">
                  <span>Read</span>
                  <span className="text-gray-600 group-hover:text-gray-900">Document</span>
                </span>
              </div>
              <div className="text-[8px] font-mono text-gray-500 group-hover:text-gray-800 tracking-widest">
                ID:0x{post.id.toString(16).padStart(4, '0')}
              </div>
            </div>
          </div>
          <motion.div className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-200 will-change-transform transform-gpu" style={{ background: specularHighlight, opacity: spotlightOpacity, transform: "translateZ(40px)" }} />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;